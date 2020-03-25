<template>
    <v-row>
        <v-col cols="4">
            {{coffeeName}}
        </v-col>
        <v-col cols="2">
            <v-select
            class="rowOnLine"
            :items="weightDropdown"
            label="250 gram"
            prepend-icon="mdi-weight"
            single-line
            v-model="weight"
            ></v-select>
        </v-col>
        <v-col cols="2">
            <v-select
            class="rowOnLine"
            :items="groundLevelDropdown"
            label="Whole beans"
            prepend-icon="mdi-fire"
            single-line
            v-model="groundLevel"
            ></v-select>
        </v-col>
        <v-col cols="2">
            <v-text-field
            class="rowOnLine"
            type="number"
            v-model="amount"
            prepend-icon="mdi-minus"
            append-icon="mdi-plus"
            @click:append="incrementAmount"
            @click:prepend="decrementAmount"
        ></v-text-field>
        </v-col>
        <v-col cols="2">
            <v-btn 
            outlined color="primary" 
            class="rowOnLine" 
            @click="$emit('add-to-order', coffeeId, coffeeName, weight, groundLevel, amount) && resetFields()">
                Add to order
            </v-btn>
        </v-col>
    </v-row>
</template>

<style scoped>
.rowOnLine {
    margin-top: 0px;
    padding-top: 0px;
}
</style>

<script>
export default {
    name: 'NewOrderProductListItem',
    props: {
        coffeeName: {
            type: String,
            required: true
        },
        coffeeId: {
            type: Number,
            required: true
        },
        weightDropdown: {
            type: Array,
            required: true
        },
        groundLevelDropdown: {
            type: Array,
            required: true,
            default: 'Whole beans'
        }
    },
    data: function (){
        return{
            weight: '250 gram',
            groundLevel: 'Whole beans',
            amount: 0
        }
    },
    methods: {
        incrementAmount(){
            this.amount++;
        },
        decrementAmount(){
            this.amount == 0 ? this.amount = 0 : this.amount--;
        },
        resetFields(){
            this.weight = '250 gram';
            this.groundLevel = 'Whole beans';
            this.amount = 0;
        }
    }
}
</script>