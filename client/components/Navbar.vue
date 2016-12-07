<template>
  <ul class="navbar">
    <li class="navbar_item"><router-link to="/index">Home</router-link></li>
    <li class="navbar_item"><router-link to="/about">About</router-link></li>
  </ul>
</template>

<style lang="sass">
  .navbar {
    list-style: none;
    .navbar_item {
      display: inline-block;
      width: 50px;
      a {
        color: #ccc;
        &.router-link-active {
          color: #040319;
        }
      }
    }
  }
</style>
