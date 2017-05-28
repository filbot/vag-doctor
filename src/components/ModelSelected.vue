<template>
  <div class="model-selected">
    <p class="panel-body">
        {{ msg }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'model-selection',
  data() {
    return {
      msg: 'Select the vag-com options you wish to apply',
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
  padding: 1rem;
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
