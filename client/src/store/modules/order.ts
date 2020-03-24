import { Module } from 'vuex/types'
import coffeeService from '@/api/coffees.api'

interface OrderState{
  items: Array<unknown>;
}

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
    setItems: (state, items) => {
      state.items = items
    }
  },
  actions: {
    
  }
}

export default module;
