<template>
  <div class="model-selection">
    <p class="panel-body">{{ msg }}</p>
    <div class="btn-group">
      <router-link to="/a4" class="btn btn-default">A4 (B8)</router-link>
      <router-link to="/a4" class="btn btn-default">S4 (B8)</router-link>
      <router-link to="/a4" class="btn btn-default">Allroad (B8)</router-link>
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
a {
  color: #42b983;
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
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
</style>
