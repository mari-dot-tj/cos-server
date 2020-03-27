<template>
    <v-container>
        <h3 class="heading">Choose Delivery</h3>
        <v-radio-group>
            <NewOrderDeliveryItem
            v-for="deliveryOption in allDeliveryOptions"
            :key="deliveryOption.delivery_id"
            :deliveryOption="deliveryOption.delivery_option"
            />
        </v-radio-group>
    </v-container>
</template>

<style scoped>
.heading{
    color: #59c8a5;
}
</style>

<script>
import NewOrderDeliveryItem from './NewOrderDeliveryItem.vue'
import { mapState, mapGetters } from 'vuex'

export default {
    name: 'NewOrderDelivery',
    computed: {
        ...mapState('delivery', ['allDeliveryOptions']),
        ...mapGetters('order', ['totalWeightGrams'])
    },
    methods: {
        init(){
            this.$store.dispatch('delivery/getAllDeliveryOptions')
        }
    },
    mounted(){
        this.init()
    },
    components: {
        NewOrderDeliveryItem
    },
}
</script>