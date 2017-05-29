<template>
  <div id="app">
    <header>
      <span>VagDoctor <small>v1.0</small></span>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <v-footer class="footer">
      <div class="container" slot="content">
          <div class="row">
              <router-link v-if="['model-selection'].indexOf($route.name) === -1" to="/" class="btn btn-default">Go back</router-link>
          </div>
      </div>
      <div class="container" slot="copyright">&copy; Copyright 2017</div>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #4fc08d;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

footer {
  background-color: #4fc08d !important;
}

footer .btn {
  background-color: #fff;
  color: #4fc08d;
}
</style>
