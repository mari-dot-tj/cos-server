<template v-slot:extension>
  <v-card>
    <v-tabs v-model="tabs" fixed-tabs active-class="active">
      <v-tabs-slider class="active"></v-tabs-slider>
      <v-tab href="#mobile-tabs-5-1">
        <v-icon id="tab-icon">mdi-coffee</v-icon>
      </v-tab>
      <v-tab href="#mobile-tabs-5-2">
        <v-icon id="tab-icon">mdi-format-list-bulleted</v-icon>
      </v-tab>
      <v-tab href="#mobile-tabs-5-3">
        <v-icon id="tab-icon">mdi-truck</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tabs">
      <v-tab-item v-for="i in 3" :key="i" :value="'mobile-tabs-5-' + i">
        <v-card flat></v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<style scoped>
.active {
  color: #59c8a5;
}
.active #tab-icon {
  color: #59c8a5;
}
</style>

<script>
  export default {
    name: 'NewOrderTab',
    data () {
      return {
        tabs: null,
        tabItems: [
          {key: '1', icon:''}
        ]
      }
    },
  }
</script>