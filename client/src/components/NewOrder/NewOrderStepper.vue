<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">
          Choose Coffee
    </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Order Overview</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Transportation</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          height="200px"
        >
        <NewOrderProductList/>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>
    
      </v-stepper-content>
      <v-bottom-navigation
        grow
        absolute
        active-class='no-active'
        >
      <v-btn
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
          color="primary"
          text
          @click="e1 == 3 ? e1=1 : e1+=1"
        >
        <v-icon left>mdi-arrow-right-bold</v-icon>
          Next
        </v-btn>
        </v-bottom-navigation>
        
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import NewOrderProductList from './NewOrderProductList.vue'
  export default {
    data () {
      return {
        e1: 1,
      }
    },
    components: {
        NewOrderProductList
    }
  }
</script>
1