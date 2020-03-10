<template>
    <v-app class="general">
        <!--<v-img class="mx-auto"
        src= "client/public/JS-logo.jpg"
        width="200px"
        ></v-img>-->
        <v-card width="400" class="mx-auto mt-10">
            <v-card-title>
                <h2 class="mx-auto font-weight-thin">
                    Business Login
                </h2>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field
                    label="Username"
                    prepend-icon="mdi-account-circle"
                    color="teal lighten-2"
                    />
                    <v-text-field 
                    :type="showPassword? 'text' : 'password'"
                    label="Password"
                    prepend-icon="mdi-lock"
                    color="teal lighten-2"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                    />
                </v-form>
            </v-card-text>
            <br>
            <v-card-actions>
                <v-btn color="teal lighten-2" tile large class="login-btn mx-auto">
                    Login
                </v-btn>
            </v-card-actions>
            <br>
            <v-card-actions>
                <v-btn text class="btn-text">Forgot password?</v-btn>
                <v-spacer></v-spacer>
                <v-btn text class="btn-text">New customer?</v-btn>
            </v-card-actions>
        </v-card>
    </v-app>
</template>

<style scoped>
.general {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.login-btn {
    color: #ffffff;
    width: 150px;
}

.btn-text {
    color: #59C8A5;
}
</style>

<script>
import Vue from 'vue'

export default Vue.extend({
    name: 'LoginForm',
    data: () => ({
        showPassword: false //boolean for toggling the show password icon
    })
})
</script>