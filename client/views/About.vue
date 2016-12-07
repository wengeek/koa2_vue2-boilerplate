<template>
  <div class="about">
    <navbar></navbar>
    This is the about info.
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
  .about {
    padding: 20px 0;
    text-align: center;
    font-size: 16px;
  }
</style>

