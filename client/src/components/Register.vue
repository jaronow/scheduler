<template>
  <div class="register-container">
    <b-input-group prepend="Email:" class="mt-3 w-25 input">
      <b-form-input type="email" v-model="user.email"></b-form-input>
    </b-input-group>
    <br>
    <b-input-group prepend="Password:" class="mt-3 w-25 input">
      <b-form-input type="password" v-model="user.password"></b-form-input>
    </b-input-group>
    <br>
    <b-form-checkbox
    id="admin"
    name="admin"
    class="input"
    v-model="user.admin"
    value="true"
    unchecked-value="false"
    >
    Administrator Privilages
  </b-form-checkbox>
    <b-button variant="outline-primary" @click="register">Register</b-button>
  </div>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
      user: {
        name: '',
        email: '',
        admin: false
      }
    }
  },
  methods: {
    async register() {
      await authentication.register(this.user)
    }
  }
}
</script>

<style scoped>
.input {
  margin-left: 37%
}
</style>
