<template>
  <div class="nav-container">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">
        Company Name
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="#">Services</b-nav-item>
          <b-nav-item to="#">People</b-nav-item>
          <b-nav-item to="about">About</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <Login v-if="!$store.state.isLoggedIn"/>
          <b-dropdown ref="user_dropdown" text="User" class="m-2" right no-caret variant="info" v-if="$store.state.isLoggedIn">
            <b-dropdown-item class="user-profile" to="#">Profile</b-dropdown-item>
            <b-dropdown-item class="user-calendar" to="#">Calendar</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-button class="logout" variant="outline-primary" size="sm" @click="logout">Log Out</b-button>
          </b-dropdown>
        </b-navbar-nav >
      </b-collapse>
    </b-navbar>
</div>
</template>

<script>
import Login from '@/components/Login'

export default {
  name: 'navhead',
  components: {
    Login
  },
  data() {
    return {
    }
  },
  methods: {
    logout() {
      this.$refs.user_dropdown.hide(true)
      this.$store.dispatch('logout').then(() => {
        this.$router.push({name: 'home'})
      })
    }
  }
}
</script>

<style scoped>
.user-profile, .user-calendar {
  text-align: center;
}
.logout {
  margin-left: 30%;
}
</style>
