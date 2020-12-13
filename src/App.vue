<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: inherit;
  font: 400 16px Arial, Helvetica, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #3f4b57;
  background-color: rgba(230, 230, 230, 0.11);
  height: 90vh;
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
.btn-success {
  margin: 0 1vw;
  background-color: rgba(0, 132, 255, 0.7);
  border: 1px rgba(126, 126, 126, 0.5) solid;
  border-radius: 3px;
  color: white;
  &:hover {
    background-color: rgba(0, 132, 255, 0.8);
  }
  &:active {
    background-color: rgba(0, 132, 255, 0.5);
  }
}
.btn-cancel {
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
  border: 1px rgba(126, 126, 126, 0.5) solid;
  margin: 0 1vw;
  &:hover {
    background-color: rgb(236, 236, 236);
  }
  &:active {
    background-color: rgb(211, 211, 211);
  }
}
.btn-ctrl {
  color: #3f4b57;
  border-radius: 2px;
  border: 1px rgba(126, 126, 126, 0.5) solid;
  font-size: 105%;
  padding: .5vh 0vw;
  margin: 0 1px;
  background-color: rgb(236, 236, 236);
  &:hover {
    background-color: rgb(218, 218, 218);
  }
  &:active {
    background-color: rgb(243, 243, 243);
  }
}
</style>
