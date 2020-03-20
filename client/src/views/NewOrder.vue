<template>
  <v-container>
    <NewOrderStepper/>
  </v-container>
</template>

<script>
import Vue from 'vue'
import NewOrderStepper from '../components/NewOrder/NewOrderStepper.vue'

export default Vue.extend({
  name: 'NewOrder',
  components: {
    NewOrderStepper
  }
})
</script>