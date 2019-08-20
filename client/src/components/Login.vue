<template>
  <div class="login-container">
    <b-dropdown id="login-form" text="Log In" ref="user_login" class="m-2" variant="info" no-caret right>
      <b-dropdown-form>
        <b-form-group label="Email:" label-for="email" @submit.stop.prevent>
          <b-form-input
          id="email"
          type="email"
          v-model="userLogin.email"
          size="sm"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Password:" label-for="password">
          <b-form-input
          id="password"
          v-model="userLogin.password"
          type="password"
          size="sm"
          ></b-form-input>
        </b-form-group>
        <b-form-checkbox class="mb-3 checkbox" switch>Remember me</b-form-checkbox>
        <b-button variant="outline-primary" size="sm" @click="login">Sign In</b-button>
      </b-dropdown-form>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item to="register">New around here? Sign up</b-dropdown-item>
      <b-dropdown-item>Forgot/Reset Password?</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
import authentication from '@/services/authentication'

export default {
  name: 'login',
  data () {
    return {
      userLogin: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      this.$refs.user_login.hide(true)
      await authentication.login(this.userLogin).then(res => {
        if (res.data.status === true) {
          this.$store.dispatch('setToken', res.data.token)
          this.$store.dispatch('setUser', res.data.user)
        }
      }).catch(err => {
        alert(err.response.data.message)
      })
    }
  }
}
</script>

<style scoped>
.checkbox {
  margin-left: 12%;
}
.btn {
  margin-left: 35%;
}
</style>
