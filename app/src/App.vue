<template>
  <nav>
    <router-link to="/">Головна</router-link> |
    <router-link to="/about">Про проект</router-link> |
    <router-link to="/add">Добавити</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: dimgray;
}

nav a {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
