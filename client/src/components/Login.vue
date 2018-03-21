<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="onSubmit(email, password)">
      <input type="text" v-model="email" placeholder="Email Address">
      <input type="password" v-model="password" placeholder="Password">
      <input type="submit" value="Login">
    </form>
    <p><i>{{msg}}</i></p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        msg: ''
      }
    },
    methods: {
      onSubmit(email, password) {
        this.$store.dispatch('login', {email, password})
          .then(() => this.redirect())
          .catch(({message}) => this.msg = message)
      },
      redirect() {
        const {search} = window.location
        const tokens = search.replace(/^\?/, '').split('&')
        const {returnPath} = tokens.reduce((qs, tkn) => {
          const pair = tkn.split('=')
          qs[pair[0]] = decodeURIComponent(pair[1])
          return qs
        }, {})

        this.$router.push(returnPath)
      }
    }
  }
</script>

<style scoped>

</style>
