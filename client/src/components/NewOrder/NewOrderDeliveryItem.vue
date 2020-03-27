<template>
    <v-container>
        <v-radio :label="deliveryOption"></v-radio>
    </v-container>
</template>

<style scoped>
.heading{
    color: #59c8a5;
}
</style>

<script>
export default {
    name: 'NewOrderDeliveryItem',
    props: {
        deliveryOption: {
            type: String,
            required: true
        }
    }
}
</script>