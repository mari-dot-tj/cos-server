<template>
    <v-container>
        <v-list>
            <v-list-item
            v-for="coffee in allCoffees"
            :key="coffee.coffee_id">
                <v-row>
                    <v-col cols="4">
                        {{coffee.name}}
                    </v-col>
                    <v-col cols="2">
                        <v-select
                        class="rowOnLine"
                        :items="dropdown"
                        label="Weight"
                        ></v-select>
                    </v-col>
                    <v-col cols="2">
                        <v-select
                        class="rowOnLine"
                        :items="dropdown"
                        label="Whole beans"
                        ></v-select>
                    </v-col>
                    <v-col cols="2">
                        <v-select
                        class="rowOnLine"
                        :items="dropdown"
                        label="Amount"
                        ></v-select>
                    </v-col>
                    <v-col cols="2">
                        <v-btn outlined color="primary">
                            Add to order
                        </v-btn>
                    </v-col>
                </v-row>
            </v-list-item>
        </v-list>
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
        }
    },
    mounted() {
        this.init();
    }
}
</script>