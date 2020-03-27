import { Module } from 'vuex/types'
import deliveryService from '@/api/delivery.api'

interface DeliveryOption {
    delivery_id: number,
    delivery_option: String,
    price: number
}

interface DeliveryState {
    allDeliveryOptions: Array<DeliveryOption>
}

const state: DeliveryState = {
    allDeliveryOptions: []
}

const module: Module<DeliveryState, {}> = {
    namespaced: true,
    state,
    mutations: {
        setDeliveryOptions: (state, deliveryOptions) => {
            state.allDeliveryOptions = deliveryOptions
        }
    },
    actions: {
        getAllDeliveryOptions: ({commit}) => {
            deliveryService.getAllDeliveryOptions()
            .then(deliveryOptions => {
                commit('setDeliveryOptions', deliveryOptions)
                console.log(deliveryOptions);
            })
        }
    }
}

export default module