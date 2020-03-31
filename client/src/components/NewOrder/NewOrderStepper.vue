<template>
  <v-dialog
    v-model="dialog"
    width="500">
    <template v-slot:activator="{ on }">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">
              Choose Coffee
        </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2">Order Overview</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3">Delivery</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card
              class="mb-12 scroll"
              height="400px"
            >
            <NewOrderProductList/>
            </v-card>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card
              class="mb-12 scroll"
              height="400px"
            >
            <NewOrderOrderOverview/>
            </v-card>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card
              class="mb-12 scroll"
              height="400px"
            >
            <NewOrderDelivery/>
            </v-card>
        
          </v-stepper-content>
          <v-bottom-navigation
            grow
            absolute
            active-class='no-active'
            >
          <v-btn
              v-if="e1 == 2 || e1 == 3"
              color="primary"
              text
              @click="e1 <=1? e1=1 : e1-=1"
            >
            <v-icon left>mdi-arrow-left-bold</v-icon>
            <span>Previous</span>
            </v-btn>
            <v-btn
                text
                color="primary" 
                float
                >
                <v-icon left>mdi-close-circle</v-icon>
                Cancel
            </v-btn>
          <v-btn
              v-if="e1 == 1 || e1 == 2"
              color="primary"
              text
              @click="e1 == 3 ? e1=1 : e1+=1"
            >
            <v-icon left>mdi-arrow-right-bold</v-icon>
              Next
            </v-btn>
            <v-btn
              v-if="e1 == 3"
              color="primary"
              text
              v-on="on"
            >
            <v-icon left>mdi-arrow-right-bold</v-icon>
              Submit order
            </v-btn>
            </v-bottom-navigation>
            
        </v-stepper-items>
      </v-stepper>
    </template>
    <v-card v-if="!checkIfOrderEmpty()">
        <v-card-title
          color="primary"
        >
          Submit order
        </v-card-title>

        <v-card-text>
          {{submitDialogText}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
            outlined
            color="primary"
            text
            @click="dialog = false"
          >
            No
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="dialog = false & submitOrder()"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card v-if="checkIfOrderEmpty()">
        <v-card-title
          color="primary"
        >
          Cannot submit empty order
        </v-card-title>

        <v-card-text>
          {{emptyOrderDialogText}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            outlined
            color="primary"
            @click="dialog = false"
          >
            I understand
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<style scoped>
  .scroll {
    overflow: auto;
  }
</style>

<script>
import NewOrderProductList from './NewOrderProductList.vue'
import NewOrderOrderOverview from './NewOrderOrderOverview.vue'
import NewOrderDelivery from './NewOrderDelivery.vue'
import { mapState } from 'vuex'

  export default {
    data () {
      return {
        e1: 1,
        dialog: false,
        submitDialogText: "Are you sure you want to submit the order?",
        emptyOrderDialogText: "You cannot submit an empty order. Add coffees to your order before you submit."
      }
    },
    methods: {
      submitOrder(){
        this.$store.dispatch('order/postOrder')
      },
      checkIfOrderEmpty(){
        if(this.items.length == 0){
          return true
        }else{
          return false
        }
      }
    },
    computed: {
      ...mapState('order', ['items'])
    },
    components: {
        NewOrderProductList,
        NewOrderOrderOverview,
        NewOrderDelivery
    },
  }
</script>
1