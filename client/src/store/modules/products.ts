import { Module } from 'vuex/types'
import coffeeService from '@/api/coffees.api'
import bagService from '@/api/bags.api'
import groundLevelService from '@/api/groundLevels.api'

interface ProductsState {
  allCoffees: Array<{coffee_id: number, name: String, description: String, category_id: number}>;
  allBags: Array<{bag_id: number, size: String, grams: number}>;
  allBagSizes: Array<{size: String}>;
  allGroundLevels: Array<{level_name: String}>;
}

const state: ProductsState = {
  allCoffees: [],
  allBags: [],
  allBagSizes: [],
  allGroundLevels: []
}

const module: Module<ProductsState, {}> = {
  namespaced: true,
  state,
  mutations: {
    setCoffees: (state, coffees) => {
      state.allCoffees = coffees
    },
    setBags: (state, bags) => {
      state.allBags = bags
    },
    setBagSizes: (state, bagSizes) => {
      state.allBagSizes = bagSizes
    },
    addBagSize: (state, bagSize) => {
      state.allBagSizes.push(bagSize)
    },
    addGroundLevel: (state, groundLevel) => {
      state.allGroundLevels.push(groundLevel)
    }
  },
  actions: {
    getAllCoffees: ({commit}) => {
      coffeeService.getAllCoffees()
        .then(coffees => {
          commit('setCoffees', coffees)
        })
    },
    getAllBags: ({commit}) => {
      bagService.getAllBags()
      .then(bags => {
        commit('setBags', bags);
      }) 
    },
    getAllBagSizes: ({commit}) => {
      bagService.getAllBags()
      .then(bags => {
        bags.forEach(
          bag => commit('addBagSize', bag.size));
      })
    },
    getAllGroundLevels: ({commit}) => {
      groundLevelService.getAllGroundLevels()
      .then(groundLevels => {
        groundLevels.forEach(
          groundLevel => commit('addGroundLevel', groundLevel.level_name)
        )
      })
    }
  }
}

export default module;
