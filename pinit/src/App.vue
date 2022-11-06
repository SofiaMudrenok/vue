<template>
  <!-- <nav>
    <router-link to="/">Wallet</router-link>
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<style lang="scss">
body {
  --baseColor: #c2e59c;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background: var(--baseColor);
  background: linear-gradient(to right, #64b3f4, var(--baseColor));
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
