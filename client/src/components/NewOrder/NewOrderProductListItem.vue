<template>
    <v-row>
        <v-col cols="4">
            {{coffeeName}}
        </v-col>
        <v-col cols="2">
            <v-select
            class="rowOnLine"
            :items="weightDropdown"
            :label="weightDropdown[0]"
            single-line
            v-model="weight"
            ></v-select>
        </v-col>
        <v-col cols="2">
            <v-select
            class="rowOnLine"
            :items="groundLevelDropdown"
            :label="groundLevelDropdown[0]"
            single-line
            v-model="groundLevel"
            ></v-select>
        </v-col>
        <v-col cols="2">
            <v-form ref="amountField">
            <v-text-field
            class="rowOnLine"
            type="number"
            min=0
            v-model="amount"
            prepend-icon="mdi-minus"
            append-icon="mdi-plus"
            @click:append="incrementAmount"
            @click:prepend="decrementAmount"
            :rules="amountFieldRules"
        ></v-text-field>
            </v-form>
        </v-col>
        <v-col cols="2">
            <v-btn 
            outlined color="primary" 
            class="rowOnLine" 
            @click="checkIfValid() ? $emit('add-to-order', coffeeId, coffeeName, weight, groundLevel, amount) && resetFields() : valid=false">
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
import Vue from 'vue'

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
            required: true,
        },
        groundLevelDropdown: {
            type: Array,
            required: true,
        }
    },
    data: function (){
        return{
            valid: true,
            weight: this.weightDropdown[0],
            groundLevel: this.groundLevelDropdown[0],
            amount: 0,
            amountFieldRules: [
                v => v>0 || 'Amount must be over 0!'
            ]
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
            this.weight = this.weightDropdown[0];
            this.groundLevel = this.groundLevelDropdown[0];
            this.amount = 0;
            this.$refs.amountField.resetValidation()
        },
        checkIfValid(){
            if((this.$refs.amountField).validate()){
                console.log('true')
                return true
            }else return false
        }
    },
    computed: {
        
    }
}
</script>