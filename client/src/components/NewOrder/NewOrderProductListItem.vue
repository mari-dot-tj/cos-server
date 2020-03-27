<template>
    <v-row>
        <v-col cols="4">
            <span class="rowOnLine">
                {{coffeeName}}
            </span>
        </v-col>
        <v-col cols="2">
            <v-select
            class="rowOnLine"
            :items="weightDropdown"
            :label="weight"
            single-line
            v-model="weight"
            ></v-select>
        </v-col>
        <v-col cols="2">
            <v-select
            class="rowOnLine"
            :items="groundLevelDropdown"
            :label="groundLevel"
            single-line
            v-model="groundLevel"
            ></v-select>
        </v-col>
        <v-col cols="2" class="rowOnLine">
            <v-row>
                <v-col cols="3">
                    <v-icon @click="decrementAmount">mdi-minus</v-icon>
                </v-col>
                <v-col cols="6" class="withOutSidePadding">
                    <v-form ref="amountField">
                        <v-text-field
                        class="rowOnLine"
                        type="number"
                        center
                        min=0
                        v-model="amount"
                        :rules="amountFieldRules"
                        ></v-text-field>
                    </v-form>
                </v-col>
                <v-col cols="3">
                    <v-icon @click="incrementAmount">mdi-plus</v-icon>
                </v-col>
            </v-row>
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
.withOutSidePadding {
    padding-left: 0px;
    padding-right: 0px;
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
            weight: "",
            groundLevel: "",
            amount: 0,
            amountFieldRules: [
                v => v>0 || 'Amount must be over 0!'
            ]
        }
    },
    methods: {
        init(){
            this.weight = this.weightDropdown[0]
            this.groundLevel = this.groundLevelDropdown[0]
        },
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
                return true
            }else return false
        }
    },
    mounted(){
        this.init();
    }
}
</script>