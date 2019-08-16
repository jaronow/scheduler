<template>
  <div class="home-container">
    <h1>Home Page</h1>
    <Login/>
  </div>
</template>

<script>
import Login from '@/components/Login'

export default {
  name: "home",
  components: {
    Login
  }
};
</script>

<style scoped>
</style>
