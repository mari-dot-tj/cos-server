import { Module } from 'vuex/types'
import orderService from '@/api/orders.api'

interface OrderItem{
    item_id: number,
    coffee_id: number,
    coffee_name: String,
    weight: String,
    grams: number,
    bag_id: number
    ground_level: String,
    ground_level_id: number,
    amount: number,
}

/*interface Order{
  info: String,
  delivery_date: Date,
  production_date: Date,
  customer_id: number,
  status_id: number,
  delivery_id: number,
  ref_id: number,
  items: [
      {
      coffee_id: number,
      bag_id: number,
      ground_level_id: number,
      quantity: number
      }
    ]
}*/

interface OrderState{
  items: Array<OrderItem>,
  delivery_id: number,
}

const state: OrderState = {
    items: [],
    delivery_id: 1,
}

const module: Module<OrderState, {}> = {
  namespaced: true,
  state,
  mutations: {
    setItems: (state, {items}) => {
      state.items = items
    },
    setDeliveryId: (state, delivery_id) => {
      state.delivery_id = delivery_id
    },
    pushProductToOrder: (state, {item_id, coffee_id, coffee_name, weight, grams, bag_id, ground_level, ground_level_id, amount}) => {
      state.items.push({
          item_id,
          coffee_id,
          coffee_name,
          weight,
          grams,
          bag_id,
          ground_level,
          ground_level_id,
          amount
      })
    },
    deleteItemFromOrder: (state, item_id) => {
      let index = state.items.map (x => {
        return x.item_id;
      }).indexOf(item_id);
      state.items.splice(index, 1);
    },
    deleteAllItemsFromOrder:(state) => {
      state.items.splice(0, state.items.length)
    },
    replaceItemAmount: (state, {item_id, newAmount}) => {
      const item = state.items.find(x => x.item_id == item_id);
      if(item!==undefined){
        item.amount=newAmount;
      }else{
        console.log("Item not found");
      }
    }
  },
  actions: {
    addProductToOrder: ({state, commit}, {item_id, coffee_id, coffee_name, weight, grams, bag_id, ground_level, ground_level_id, amount}) => {
      if(coffee_id!==undefined || coffee_name!== undefined || weight!== undefined || grams!== undefined || ground_level!==undefined || amount!==undefined){
        commit('pushProductToOrder', {item_id, coffee_id, coffee_name, weight, bag_id, grams, ground_level, ground_level_id, amount})
        console.log(state.items)
        return true
      }else return false
    },
    removeProductFromOrder: ({state, commit}, item_id) => {
      commit('deleteItemFromOrder', item_id)
    },
    changeItemAmount: ({state, commit}, {item_id, newAmount}) => {
      commit('replaceItemAmount', {item_id, newAmount})
    },
    chooseDelivery: ({state, commit}, delivery_id) => {
      commit('setDeliveryId', delivery_id)
    },
    postOrder: ({state, commit}) => {
      let orderItems = []
      state.items.map(item => {
        orderItems.push([item.coffee_id, item.bag_id, item.ground_level_id, item.amount])
      })
      return new Promise((resolve, reject) => {
        orderService.postOrder(orderItems, state.delivery_id).then(response => {
          if(response==200){
            commit('deleteAllItemsFromOrder')
          }
          resolve(response)
        }, error => {
          reject(error)
        })
      })
    }
  },
  getters: {
    totalWeightGrams: (state) => {
      let totalWeightGrams = 0
      state.items.map(item => {
        totalWeightGrams += item.grams*item.amount
      })
      return {totalWeightGrams: totalWeightGrams}
    }
  }
}

export default module;