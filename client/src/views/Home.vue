<template>
  <div class="home">
    <h1>Home Page</h1>
    <Login/>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'

export default {
  name: "home",
  components: {
    Login
  }
};
</script>

<style scoped>
</style>
