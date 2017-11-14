<template>
<div>
  <app-nav></app-nav>
  <router-view></router-view>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
    components: {
      'app-nav': Navbar
    },
    data() {
      return {

      }
    }
}
</script>

<style>

</style>
