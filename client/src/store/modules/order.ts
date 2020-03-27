import { Module } from 'vuex/types'
import coffeeService from '@/api/coffees.api'

interface OrderItem{
    item_id: number,
    coffee_id: number,
    coffee_name: String,
    weight: String,
    grams: number
    ground_level: String,
    amount: number,
}

interface OrderState{
  items: Array<OrderItem>
  delivery: String
}

const state: OrderState = {
    items: [],
    delivery: "",
}

const module: Module<OrderState, {}> = {
  namespaced: true,
  state,
  mutations: {
    setItems: (state, {items}) => {
      state.items = items
    },
    pushProductToOrder: (state, {item_id, coffee_id, coffee_name, weight, grams, ground_level, amount}) => {
      state.items.push({
          item_id,
          coffee_id,
          coffee_name,
          weight,
          grams,
          ground_level,
          amount
      })
    },
    deleteItemFromOrder: (state, item_id) => {
      let index = state.items.map (x => {
        return x.item_id;
      }).indexOf(item_id);
      state.items.splice(index, 1);
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
    addProductToOrder: ({state, commit}, {item_id, coffee_id, coffee_name, weight, grams, ground_level, amount}) => {
      if(coffee_id!==undefined || coffee_name!== undefined || weight!== undefined || grams!== undefined || ground_level!==undefined || amount!==undefined){
        commit('pushProductToOrder', {item_id, coffee_id, coffee_name, weight, grams, ground_level, amount})
        console.log(state.items)
        return true
      }else return false
    },
    removeProductFromOrder: ({state, commit}, item_id) => {
      commit('deleteItemFromOrder', item_id)
      console.log(state.items)
    },
    changeItemAmount: ({state, commit}, {item_id, newAmount}) => {
      commit('replaceItemAmount', {item_id, newAmount})
      console.log(state.items)
    }
  },
  getters: {
    totalWeightGrams: (state) => {
      let totalWeightGrams = 0
      state.items.map(item => {
        totalWeightGrams += item.grams*item.amount
      })
      return {'totalWeightGrams': totalWeightGrams}
    }
  }
}

export default module;
