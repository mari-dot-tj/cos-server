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
        itemId: 0,
        addedToOrderSnackBar: false,
        addedToOrderSnackBarText: ""
    }),
    methods: {
        init(){
            this.$store.dispatch('products/getAllCoffees'),
            this.$store.dispatch('products/getAllBagSizes'),
            this.$store.dispatch('products/getAllGroundLevels')
        },
        incrementItemId(){
            return this.itemId++;
        },
        addToOrder: function(coffeeId, coffeeName, weight, groundLevel, amount){
            let text = "Failed to add to order."
            if(this.$store.dispatch('order/addProductToOrder', {item_id: this.itemId, coffee_id: coffeeId, coffee_name: coffeeName, weight, ground_level: groundLevel, amount})){
                text = "Added to order! Id: " + coffeeId +", Name: " + coffeeName + " , weight "+ weight + " , Grind level: "+ groundLevel + ", Amount: " + amount
            }else{
                text = "Failed to add to order"
            }
            this.addedToOrderSnackBarText = text
            this.addedToOrderSnackBar=true
            this.incrementItemId()
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