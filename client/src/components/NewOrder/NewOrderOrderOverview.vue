<template>
    <v-container>
        <h3 class="heading">Order overview</h3>
        <h4 v-if="items.length==0">Your order is empty! Choose some delicious coffees to fill you order!</h4>
        <NewOrderOrderOverviewItem
        v-else
        v-for="item in items"
        v-on:removed-from-order="showRemovedFromOrderSnackBar"
        :key="item.item_id"
        :itemId="item.item_id"
        :coffeeId="item.coffee_id"
        :coffeeName="item.coffee_name"
        :weight="item.weight"
        :groundLevel="item.ground_level"
        :amount="item.amount"
        />
        <v-snackbar v-model="removedFromOrderSnackBar">
            {{ removedFromOrderSnackBarText }}
            <v-btn
                color="primary"
                text
                @click="removedFromOrderSnackBar = false"
            >
        Close
      </v-btn>
        </v-snackbar>
    </v-container>
</template>

<style scoped>
.heading{
    color: #59c8a5;
}
</style>

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
    data: () => ({
        removedFromOrderSnackBar: false,
        removedFromOrderSnackBarText: ""
    }),
    methods: {
        showRemovedFromOrderSnackBar(){
            let text = "Item removed from order."
            this.removedFromOrderSnackBarText = text
            this.removedFromOrderSnackBar=true
        }
    }
}
</script>