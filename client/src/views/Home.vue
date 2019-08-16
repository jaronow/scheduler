<template>
  <div class="home-container">
    <NavHead/>
    <h1>Home Page</h1>
    <Login/>
  </div>
</template>

<script>
import NavHead from '@/components/NavHead'
import Login from '@/components/Login'

export default {
  name: "home",
  components: {
    Login,
    NavHead
  }
};
</script>

<style scoped>
</style>
