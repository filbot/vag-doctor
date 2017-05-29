<template>
  <div class="model-selection">
    <p class="panel-body">{{ msg }}</p>
    <div class="btn-group">
      <router-link to="/a4"><v-btn class="btn-item">A4 (B8)</v-btn></router-link>
      <router-link to="/a4"><v-btn class="btn-item">S4 (B8)</v-btn></router-link>
      <router-link to="/a4"><v-btn class="btn-item">Allroad (B8)</v-btn></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'model-selection',
  data() {
    return {
      msg: 'We know maintining your VAG can be difficult and time consuming, let us make it easier for you. Pick the car you have, the things you want to modify and let us prepare all the needed codes.',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.panel-body {
  font-size: 16px;
}

.model-selection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: left;
}

.btn-group {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 3rem;
}

.btn-group a {
  width: 100%;
}

.btn-item {
  margin-bottom: 2rem;
  background-color: #4fc08d;
  width: 100%;
}
</style>
