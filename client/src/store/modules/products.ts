import { Module } from 'vuex/types'
import coffeeService from '@/api/coffees.api'

interface ProductsState {
  allCoffees: Array<unknown>;
}

const state: ProductsState = {
  allCoffees: []
}

const module: Module<ProductsState, {}> = {
  namespaced: true,
  state,
  mutations: {
    setCoffees: (state, coffees) => {
      state.allCoffees = coffees
    }
  },
  actions: {
    getAllCoffees: ({commit}) => {
      coffeeService.getAllCoffees()
        .then(coffees => {
          commit('setCoffees', coffees)
        })
    }
  }
}

export default module;
