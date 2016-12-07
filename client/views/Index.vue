<template>
  <div class="index">
    <navbar></navbar>
    Koa2.0 + Vue 2.0 boilterplate
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'

  export default {
    components: {
      Navbar
    }
  }
</script>

<style lang="sass">
  .index {
    padding: 20px 0;
    text-align: center;
    font-size: 16px;
  }
</style>
