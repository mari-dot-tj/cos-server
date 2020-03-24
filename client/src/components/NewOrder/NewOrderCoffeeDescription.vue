<template>
<!--Intended for hover on product from NewOrderProductList, to be implemented later-->
    <v-card>
        <v-card-titile>{{this.name}}</v-card-titile>
        <v-card-subtitle>{{this.category}}</v-card-subtitle>
        <v-crad-text>{{this.description}}</v-crad-text>
    </v-card>
</template>

<script>
export default {
    name: 'NewOrderCoffeeDescription',
    props: {
        name: {
            type: String,
            required: true
        },
        category: {
            type: String,
        },
        description: {
            type: String,
        }
    }
}
</script>