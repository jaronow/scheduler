<template>
  <div class="home-container">
    <h1>We are open 7 days a week</h1><span>Check for your specific <b-link to="employees">employee</b-link> to see their schedule</span>
    <h2>Hours of Operation:</h2>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>

export default {
  name: "home",
  data() {
    return {
      fields:['day', 'hours'],
      items: [
        { day: 'Monday', hours: '8am - 9pm' },
        { day: 'Tuesday', hours: '8am - 9pm' },
        { day: 'Wednesday', hours: '8am - 9pm' },
        { day: 'Thursday', hours: '8am - 9pm' },
        { day: 'Friday', hours: '8am - 9pm' },
        { day: 'Saturday', hours: '10am - 7pm' },
        { day: 'Sunday', hours: '12am - 7pm' }
      ]
    }
  }
};
</script>

<style scoped>
</style>
