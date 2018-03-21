<template>
  <div>
    <menus></menus>
    <router-view></router-view>
  </div>
</template>

<script>
  import Menus from './components/Menus.vue'
  export default {
    components: {Menus},
  }
</script>
