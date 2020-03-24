<template>
    <v-container>
        <NewOrderProductFields/>
        <NewOrderProductItem
        v-for="coffee in allCoffees"
        v-on:add-to-order="addToOrder"
        :key="coffee.coffee_id"
        :coffeeName="coffee.name"
        :weightDropdown="dropdown"
        :grindDropdown="dropdown"
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
import NewOrderProductItem from './NewOrderProductItem.vue'
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
        addToOrder: function(name, weight, grind, amount){
            alert("Ready to add! Name: " + name + " , weight "+ weight + " , Grind level: "+ grind + ", Amount: " + amount);
        }
    },
    mounted() {
        this.init();
    },
    components: {
        NewOrderProductFields,
        NewOrderProductItem
    }
}
</script>