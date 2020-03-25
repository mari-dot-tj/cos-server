<template>
    <v-container>
        <NewOrderProductFields/>
        <NewOrderProductListItem
        v-for="coffee in allCoffees"
        v-on:add-to-order="addToOrder"
        :key="coffee.coffee_id"
        :coffeeId="coffee.coffee_id"
        :coffeeName="coffee.name"
        :weightDropdown="dropdown"
        :groundLevelDropdown="dropdown"
        />
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
    data: () => ({
      dropdown: ['test1', 'test2', 'test3'],
    }),
    computed: {
        ...mapState('products', ['allCoffees'])
    },
    methods: {
        init(){
            this.$store.dispatch('products/getAllCoffees')
        },
        addToOrder: function(coffeeId, coffeeName, weight, groundLevel, amount){
            alert("Ready to add! Id: " + coffeeId +", Name: " + coffeeName + " , weight "+ weight + " , Grind level: "+ groundLevel + ", Amount: " + amount);
            this.$store.dispatch('order/addProductToOrder', {coffee_id: coffeeId, weight, groundLevel, amount})
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