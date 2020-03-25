import { Module } from 'vuex/types'
import coffeeService from '@/api/coffees.api'

interface OrderState{
  items: Array<unknown>;
}

//shape: [{ coffee_id, weight, groundLevel, amount }]
const state: OrderState = {
    items: []
}

const module: Module<OrderState, {}> = {
  namespaced: true,
  state,
  getters: {
    orderProducts: () => {
        
    }
  },
  mutations: {
    setItems: (state, {items}) => {
      state.items = items
    },
    pushProductToOrder: (state, {coffee_id, weight, groundLevel, amount}) => {
        state.items.push({
            coffee_id,
            weight,
            groundLevel,
            amount
        })
    }
  },
  actions: {
    addProductToOrder: ({state, commit}, {coffee_id, weight, groundLevel, amount}) => {
        commit('pushProductToOrder', {coffee_id, weight, groundLevel, amount})
        console.log(state.items);
    }
  }
}

export default module;
