<template>
<v-container>
    <v-row>
        <v-col cols="2">
            <v-form ref="amountField">
                <v-text-field
                class="rowOnLine"
                type="number"
                min=0
                v-model="newAmount"
                prepend-icon="mdi-minus"
                append-icon="mdi-plus"
                @click:append="incrementAmount"
                @click:prepend="decrementAmount"
                :rules="amountFieldRules"
                >
                {{newAmount}}
                </v-text-field>
            </v-form>
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
            @click="$emit('remove-from-order', itemId)">
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
        console.log(this);
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
        checkIfValid(){
            if((this.$refs.amountField).validate()){
                return true
            }else return false
        }
    }
}
</script>