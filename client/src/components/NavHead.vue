<template>
  <div class="nav-container">
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand tag="h1">
      Company Name
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="#">Services</b-nav-item>
        <b-nav-item to="#">People</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="#">About</b-nav-item>
        <b-nav-item-dropdown right>
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item to="#">Profile</b-dropdown-item>
          <b-dropdown-item to="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'navhead',
  data() {
    return {
      user: null
    }
  }
}
</script>

<style scoped>
</style>
