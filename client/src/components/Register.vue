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
      <b-form-input type="password" v-model="createUser.password" required autocomplete="off"></b-form-input>
    </b-form-group>
    <br>
    <b-form-group label="Confirm Password:" class="mt-3 confirm">
      <b-form-input type="password" v-model="confirm_password" required autocomplete="off"></b-form-input>
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
      confirm_password: '',
      registerError: ''
    }
  },
  methods: {
    blankPhone() {
      if (this.createUser.phone.length === '') {
        this.createUser.phone = '0000000000'
      }
    },
    validate() {
      if (this.createUser.password !== this.confirm_password) {
        this.registerError = "Passwords DO NOT match"
        return false
      } else if (this.createUser.phone.length !== 10) {
        this.registerError = "Not valid phone #"
        return false
      } else {
        return true
      }
    },
    async register() {
      if (this.createUser.phone === '') {
        this.createUser.phone = '0000000000'
      let valid = this.validate()
      if (valid) {
        this.createUser.phone = parseInt(this.createUser.phone)
        await authentication.register(this.createUser).then(res => {
          if (res.data.status === true) {
            this.$store.dispatch('setUser', res.data.user)
            this.$store.dispatch('setToken', res.data.token)
            this.$router.push({name: 'home'})
          }
        }).catch(err => {
          alert(err.response.data.message)
        })
      } else {
        alert(this.registerError)
      }
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
