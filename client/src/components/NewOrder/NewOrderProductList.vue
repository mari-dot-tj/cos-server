<template>
    <v-container>
        <NewOrderProductFields/>
        <NewOrderProductListItem
        v-for="coffee in allCoffees"
        v-on:add-to-order="addToOrder"
        :key="coffee.coffee_id"
        :coffeeId="coffee.coffee_id"
        :coffeeName="coffee.name"
        :weightDropdown="allBagSizes"
        :groundLevelDropdown="allGroundLevels"
        />
        <v-snackbar v-model="addedToOrderSnackBar">
            {{ addedToOrderSnackBarText }}
            <v-btn
                color="primary"
                text
                @click="addedToOrderSnackBar = false"
            >
        Close
      </v-btn>
        </v-snackbar>
    </v-container>
</template>

<style scoped>
.rowOnLine {
    margin-top: 0px;
    padding-top: 0px;
}
</style>

<script>
import { mapState } from 'vuex'
import NewOrderProductListItem from './NewOrderProductListItem.vue'
import NewOrderProductFields from './NewOrderProductFields.vue'

export default {
    name: 'NewOrderProductList',
    computed: {
        ...mapState('products',['allCoffees']),
        ...mapState('products', ['allBagSizes']),
        ...mapState('products', ['allGroundLevels'])
    },
    data: () => ({
        addedToOrderSnackBar: false,
        addedToOrderSnackBarText: ""
    }),
    methods: {
        init(){
            this.$store.dispatch('products/getAllCoffees'),
            this.$store.dispatch('products/getAllBagSizes'),
            this.$store.dispatch('products/getAllGroundLevels')
        },
        addToOrder: function(coffeeId, coffeeName, weight, groundLevel, amount){
            const text = "Added to order! Id: " + coffeeId +", Name: " + coffeeName + " , weight "+ weight + " , Grind level: "+ groundLevel + ", Amount: " + amount
            this.$store.dispatch('order/addProductToOrder', {coffee_id: coffeeId, weight, groundLevel, amount})
            this.addedToOrderSnackBarText = text
            this.addedToOrderSnackBar=true
        }
    },
    mounted() {
        this.init();
    },
    components: {
        NewOrderProductFields,
        NewOrderProductListItem
    }
}
</script>