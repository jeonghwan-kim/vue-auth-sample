<template>
  <div>
    <h2>Home</h2>
    <div>{{greeting}}</div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        greeting: ''
      }
    },
    created() {
      axios.get('http://localhost:3000/home')
        .then(result => this.greeting = result.data.greeting)
    }
  }
</script>

<style scoped>

</style>
