<template>
    <v-btn
    id="btn-active"
    text
    active-class="active"
    :to="link">
    {{text}}
    </v-btn>
</template>

<style>
.active#btn-active {
    color: #59C8A5
}
</style>

<script>
export default {
    name: 'NavBarButton',
    data: () => ({
    }),
    props: {
        text: {
            type: String,
            required: true
        },
        isActive: {
            type: Boolean,
        },
        link: {
            type: String
        }
    }
}
</script>