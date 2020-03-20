<template>
  <div>
    <v-app-bar
      app
      fixed
      light
      dense
      height= "80px"
      class="general"
    >
      <v-img src="../../assets/logo.png" max-height="100px" max-width="100px"/>
      <v-toolbar-items>
        <NavBarButton 
        v-for="item in navBarItems"
        :key="item.text"
        :text="item.text"
        :link="item.link"
        />
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text>Log out</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<style scoped>
.general {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>

<script>
import Vue from 'vue'
import NavBarButton from './NavBarButton.vue'

export default Vue.extend({
    name: 'NavBar',
    components: {
      NavBarButton
    },
    data: () => ({
      activeItem: '',
      navBarItems: [
        {text: 'Order overview', link: '/order-overview'},
        {text: 'New order', link: '/new-order'},
        {text: 'My profile', link: '/my-profile'}
      ]
    })
})
</script>