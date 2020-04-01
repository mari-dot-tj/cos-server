<template>
<v-container>
    <v-row>
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
                        v-model="newAmount"
                        :rules="amountFieldRules"
                        >
                        {{newAmount}}
                        </v-text-field>
                    </v-form>
                </v-col>
                <v-col cols="3">
                    <v-icon @click="incrementAmount">mdi-plus</v-icon>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="2">
            <span class="rowOnLine">
                {{weight}}
            </span>
        </v-col>
        <v-col cols="2">
            <span class="rowOnLine">
                {{coffeeName}}
            </span>
        </v-col>
        <v-col cols="2">
            <span class="rowOnLine">
                {{groundLevel}}
            </span>
        </v-col>
        <v-col cols="4">
            <v-btn 
            class="rowOnLine"
            absolute
            right
            outlined color="primary"
            @click="removeFromOrder(itemId) & $emit('removed-from-order')">
                Remove
            </v-btn>
        </v-col>
    </v-row>
    <v-divider></v-divider>
    </v-container>
</template>

<style scoped>
.rowOnLine {
    margin-top: 0px;
    padding-top: 0px;
}
</style>

<script>
export default {
    name: 'NewOrderOrderOverviewItem',
    props: {
        itemId: {
            type: Number,
            required: true
        },
        coffeeId:{
            type: Number,
            required: true
        },
        coffeeName: {
            type: String,
            required: true
        },
        weight: {
            type: String,
            required: true,
        },
        groundLevel: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true
        },
    },
    data: function () {
        return{
            newAmount: this.amount,
            amountFieldRules: [
                v => v>0 || 'Amount must be over 0!'
            ]
        }
    },
    methods: {
        incrementAmount(){
            this.newAmount++;
            this.$store.dispatch('order/changeItemAmount', {item_id: this.itemId, newAmount: this.newAmount});
        },
        decrementAmount(){
            this.newAmount == 0 ? this.newAmount = 0 : this.newAmount--;
            this.$store.dispatch('order/changeItemAmount', {item_id: this.itemId, newAmount: this.newAmount});
        },
        removeFromOrder: function(itemId){
            this.$store.dispatch('order/removeProductFromOrder', itemId)
        },
        checkIfValid(){
            if((this.$refs.amountField).validate()){
                return true
            }else return false
        }
    }
}
</script>