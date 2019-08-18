<template>
  <div class="register-container">
    <h1>Register New User</h1>
    <b-form @submit.prevent="register">
      <b-form-group label="Name:" class="mt-3 w-25 input">
        <b-form-input type="text" v-model="createUser.name" required></b-form-input>
      </b-form-group>
      <br>
      <b-form-group label="Phone:" description="We don't share phone #'s. This is soley for contacting you'" class="mt-3 w-25 input">
        <b-form-input type="tel" placeholder="Leave blank if you want" v-model="createUser.phone"></b-form-input>
      </b-form-group>
      <br>
    <b-form-group label="Email:" description="We don't share email address" class="mt-3 w-25 input">
      <b-form-input type="email" v-model="createUser.email" required></b-form-input>
    </b-form-group>
    <br>
    <b-form-group label="Password:" class="mt-3 w-25 input">
      <b-form-input type="password" v-model="createUser.password" required></b-form-input>
    </b-form-group>
    <br>
    <b-form-group label="Confirm Password:" class="mt-3 confirm">
      <b-form-input type="password" v-model="confirm_password" required></b-form-input>
    </b-form-group>
    <br>
    <b-form-checkbox
    id="admin"
    name="admin"
    v-model="createUser.admin"
    value="true"
    unchecked-value="false"
    >
    Administrator Privilages
  </b-form-checkbox>
    <b-button variant="outline-primary" type="submit">Register</b-button>
  </b-form>
  </div>
</template>

<script>
import authentication from '@/services/authentication'

export default {
  name: 'registration',
  data() {
    return {
      createUser: {
        name: '',
        phone: '',
        email: '',
        password: '',
        admin: false
      },
      confirm_password: ''
    }
  },
  methods: {
    validate() {
      if (this.createUser.password !== this.confirm_password) {
        return false
      } else {
        return true
      }
    },
    async register() {
      let valid = this.validate()
      if (valid) {
        this.createUser.phone = parseInt(this.createUser.phone)
        await authentication.register(this.createUser).then(res => {
          if (res.data.status === true) {
            localStorage.setItem('user', JSON.stringify(res.data.user))
            this.$router.push({name: 'home'})
          }
        }).catch(err => {
          alert(err.response.data.message)
        })
      } else {
        alert("Passwords DO NOT Match!!!")
      }
    }
  }
}
</script>

<style scoped>
.input {
  margin-left: 37%;
}
.confirm {
  width: 28%;
  margin-left: 35%;
}
.btn {
  margin-top: 2%;
}
</style>
