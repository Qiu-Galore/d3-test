<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/d1">d1</router-link> | -->
      <router-link to="/d2">碰撞</router-link> |
      <router-link to="/d3">过渡</router-link> 
      <!-- <router-link to="/d4">d4</router-link> | -->
      <!-- <router-link to="/d5">d5</router-link> | -->
      <!-- <router-link to="/d6">d6</router-link> | -->
      <!-- <router-link to="/d7">d7</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
html, body{
  width: 100%;
  height: 100%
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
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
