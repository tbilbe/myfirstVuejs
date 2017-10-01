<template>
  <div>
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
          <v-toolbar flat dense class="light-blue accent-3">
            <v-toolbar-title class="white-text">Login</v-toolbar-title>
          </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field
              label="e-mail"
              v-model="email"
            ></v-text-field>
            <br>
            <br>
            <v-text-field
                label="password"
                v-model="password"
            ></v-text-field>

            <br>
            <div class="error" v-html="error"></div>
            <br>
            <br>
            <v-btn class="light-blue accent-3" dark @click="login">Login</v-btn>
          </div>
        </div> 
      </v-flex>
    </v-layout>
  </div>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}

</script>

<style>
.white-text {
  color: white;
}
</style>