<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;1,400&family=Raleway:ital,wght@0,400;0,500;1,500&display=swap");
$primary: #8132a8;
$font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
  sans-serif;
@import "~bootstrap/scss/bootstrap";
</style>
