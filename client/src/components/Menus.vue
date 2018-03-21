<template>
  <div>
    <router-link to="/">Home</router-link>

    <a href="" v-if="isAuthenticated" @click.prevent="onClickLogout">Logout</a>
    <router-link to="/login" v-else>Login</router-link>

    <router-link to="/me">Me</router-link>
  </div>
</template>

<script>
  import store from '../store'
  export default {
    computed: {
      isAuthenticated() {
        return store.getters.isAuthenticated
      }
    },
    methods: {
      onClickLogout() {
        store.dispatch('logout').then(() => this.$router.push('/'))
      }
    }
  }
</script>
