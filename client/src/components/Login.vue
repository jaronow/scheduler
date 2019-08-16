<template>
  <div class="login-container">
    <b-input-group prepend="Email:" class="mt-3 w-25 input">
      <b-form-input type="email" v-model="user.email"></b-form-input>
    </b-input-group>
    <br>
    <b-input-group prepend="Password:" class="mt-3 w-25 input">
      <b-form-input type="password" v-model="user.password"></b-form-input>
    </b-input-group>
    <br>
    <b-button variant="outline-primary" @click="login">Log In</b-button>
  </div>
</template>

<script>
import authentication from '@/services/authentication'

export default {
  name: 'login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      await authentication.login(this.user)
    }
  }
}
</script>

<style scoped>
.input {
  margin-left: 37%
}
</style>
