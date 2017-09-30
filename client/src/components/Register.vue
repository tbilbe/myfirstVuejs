<template>
  <div>
    <h1>Register App Page :) </h1>

    <input 
      type="email" 
      name="email"
      v-model="email"
      placeholder="email" />
    <br>
    <input 
      type="Password" 
      name="password"
      v-model="password"
      placeholder="password" />
    <br>
    <button
    @click="register">
    Submit
    </button>
      
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<style scoped>

</style>
