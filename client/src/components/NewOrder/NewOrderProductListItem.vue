<template>
<v-skeleton-loader
      :loading="groundLevelDropdown.length == 0 || weightDropdown.length == 0"
      transition="fade-transition"
      height="94"
      type="text"
    >
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
            :label="allBags[0] == undefined ? weight : allBags[0].size"
            single-line
            v-model="weight"
            ></v-select>
        </v-col>
        <v-col cols="2">
            <v-select
            class="rowOnLine"
            :items="groundLevelDropdown"
            :label="allGroundLevels[0] == undefined ? groundLevel : allGroundLevels[0].level_name"
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
            @click="checkIfValid() ? $emit('add-to-order', coffeeId, coffeeName, weight, getGramsOfWeight(weight), findBagIdByWeight(weight), groundLevel, findGroundLevelIdbyGroundLevel(groundLevel) , amount) & resetFields() : valid=false">
                Add to order
            </v-btn>
        </v-col>
    </v-row>
</v-skeleton-loader>
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
import { mapState } from 'vuex'

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
        }
    },
    data: function (){
        return{
            valid: true,
            weight: "",
            grams: 0,
            groundLevel: "",
            amount: 0,
            weightDropdown: [],
            groundLevelDropdown: [],
            amountFieldRules: [
                v => v>0 || 'Amount must be over 0!'
            ]
        }
    },
    computed: {
      ...mapState('products', ['allBags']),
      ...mapState('products', ['allGroundLevels'])
    },
    watch: {
        allBags: function (newValue, oldValue){
            this.weight=newValue[0].size
            newValue.map(bagObj => {
                this.weightDropdown.push(bagObj.size)
            })
        },
        allGroundLevels: function(newValue, oldValue){
            this.groundLevel=newValue[0].level_name
            newValue.map(groundLevelObj => {
                this.groundLevelDropdown.push(groundLevelObj.level_name)
            })
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
            this.weight = this.weightDropdown[0]
            this.groundLevel = this.groundLevelDropdown[0]
            this.amount = 0
            this.$refs.amountField.resetValidation()
        },
        checkIfValid(){
            if((this.$refs.amountField).validate()){
                return true
            }else return false
        },
        getGramsOfWeight(weight){
            let index = this.allBags.map(bagObj => {
                return bagObj.size
            }).indexOf(weight)
            return this.allBags[index].grams
        },
        findBagIdByWeight(weight){
            let index = this.allBags.map(bagObj => {
                return bagObj.size
            }).indexOf(weight)
            return this.allBags[index].bag_id
        },
        findGroundLevelIdbyGroundLevel(groundLevel){
            let index = this.allGroundLevels.map(groundLevelObj => {
                return groundLevelObj.level_name
            }).indexOf(groundLevel)
            return this.allGroundLevels[index].ground_level_id
        }
    }
}
</script>