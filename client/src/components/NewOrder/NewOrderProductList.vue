<template>
    <v-container>
        <v-list>
            <v-list-item
            v-for="coffee in allCoffees"
            :key="coffee.coffee_id"
            >
                <v-list-item-content>
                    {{coffee.name}}
                </v-list-item-content>
                <v-spacer></v-spacer>
                <v-list-item-action>
                    <!--<v-overflow-btn
                    class="my-2"
                    :items="dropdown_font"
                    label="Overflow Btn"
                    target="#dropdown-example"
                    ></v-overflow-btn>-->
                    <v-spacer></v-spacer>
                    <v-btn outlined color="primary">
                        Add to order
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
            <v-divider></v-divider>
        </v-list>
    </v-container>
</template>

<style scoped>

</style>

<script>
import { mapState } from 'vuex'
export default {
    name: 'NewOrderProductList',
    data: () => ({
      dropdown_font: ['test1', 'test2', 'test3']
    }),
    computed: {
        ...mapState('products', ['allCoffees'])
    },
    methods: {
        init(){
            this.$store.dispatch('products/getAllCoffees')
        }
    },
    mounted() {
        this.init();
    }
}
</script>