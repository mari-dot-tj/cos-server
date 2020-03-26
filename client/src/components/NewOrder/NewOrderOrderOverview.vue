<template>
    <v-container>
        <NewOrderOrderOverviewItem
        v-for="item in items"
        v-on:remove-from-order="removeFromOrder"
        v-on:change-amount="changeItemAmount"
        :key="item.item_id"
        :itemId="item.item_id"
        :coffeeId="item.coffee_id"
        :coffeeName="item.coffee_name"
        :weight="item.weight"
        :groundLevel="item.ground_level"
        :amount="item.amount"
        />
    </v-container>
</template>

<script>
import { mapState } from 'vuex'
import NewOrderOrderOverviewItem from './NewOrderOrderOverviewItem'

export default {
    name: 'NewOrderOrderOverview',
    components: {
        NewOrderOrderOverviewItem
    },
    computed: {
        ...mapState('order', ['items'])
    },
    methods: {
        removeFromOrder: function(item_id){
            this.$store.dispatch('order/removeProductFromOrder', item_id)
        },
        changeItemAmount: function(item_id, newAmount){
            this.$store.dispatch('order/changeItemAmount', {item_id, newAmount});
        }
    }
}
</script>