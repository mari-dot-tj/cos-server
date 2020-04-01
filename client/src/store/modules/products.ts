import { Module } from 'vuex/types'
import coffeeService from '@/api/coffees.api'
import bagService from '@/api/bags.api'
import groundLevelService from '@/api/groundLevels.api'
import deliveryService from '@/api/delivery.api'

interface ProductsState {
  allCoffees: Array<{coffee_id: number, name: String, description: String, category_id: number}>;
  allBags: Array<{bag_id: number, size: String, grams: number}>;
  allBagSizes: Array<{size: String}>;
  allGroundLevels: Array<{ground_level_id: number, level_name: String, grinding_fee: number}>;
  allMailPrices: Array<{mail_price_id: number, name: String, price: number}>
}

const state: ProductsState = {
  allCoffees: [],
  allBags: [],
  allBagSizes: [],
  allGroundLevels: [],
  allMailPrices: []
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
    setGroundLevels: (state, groundLevels) => {
      state.allGroundLevels = groundLevels
    },
    setMailPrices: (state, mailPries) => {
      state.allMailPrices = mailPries
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
        commit('setGroundLevels', groundLevels)
      })
    },
    getAllMailPrices: ({commit}) => {
      deliveryService.getAllMailPrices()
      .then(mailPrices => {
        commit('setMailPrices', mailPrices)
      })
    }
  }
}

export default module;
