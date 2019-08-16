<template>
  <div class="login">
    <label for="email">Email:</label>
    <input
    v-model="user.email"
    type="email"
    name="email"
    />
    <br>
    <label for="password">Password:</label>
    <input
    v-model="user.password"
    type="password"
    name="password"
    />
    <br>
    <button type="button" name="button" @click="login">Log In</button>
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
</style>
