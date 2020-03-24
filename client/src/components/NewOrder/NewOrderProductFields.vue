<template>
    <v-row class="heading-color">
        <v-col cols="4">
            <h3>{{fields[0]}}</h3>
        </v-col>
        <v-col cols="2">
            <h3>{{fields[1]}}</h3>
        </v-col>
        <v-col cols="2">
            <h3>{{fields[2]}}</h3>
        </v-col>
        <v-col cols="2">
            <h3>{{fields[3]}}</h3>
        </v-col>
        <v-col cols="2">
            <h3>{{fields[4]}}</h3>
        </v-col>
    </v-row>
</template>

<style scoped>
.heading-color{
    color: #59c8a5;
}
</style>

<script>
import Vue from 'vue'
export default Vue.extend({
    name: 'NewOrderProductFields',
    data: function(){
        return{
            fields: ["Coffee name", "Weight", "Ground level", "Amount", ""]
        }
    }
})
</script>