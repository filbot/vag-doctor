<template>
  <div class="model-selected">
    <p class="panel-body">
        {{ msg }}
    </p>
    <div class="item-group">
      <div class="item" v-for="code in codes">
        <div class="input-field">
          <v-checkbox v-bind:name="code.id" v-bind:id="code.id" filled-in checked>
            {{code.description}}
          </v-checkbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'model-selection',
  data() {
    return {
      msg: 'Select from the following vag-com options:',
      codes: [
        {
          description: 'Disable amber corner lights',
          steps: '[09 – Cent. Elect.] [Coding - 07] -> Long Coding Helper -> Byte 10',
          module: 'Submodule 0',
          bit: 'Bit 3 - Set to 0 to disable amber side markers (U.S. vehicles)',
          selected: false,
          id: 'checkbox1',
        },
        {
          description: 'Disable door chime',
          steps: '[09 – Cent. Elect.] [Coding - 07] -> Long Coding Helper -> Byte 10',
          module: 'Submodule 0',
          bit: 'Bit 3 - Set to 0 to disable amber side markers (U.S. vehicles)',
          selected: false,
          id: 'checkbox2',
        },
        {
          description: 'Enable ejector seat',
          steps: '[09 – Cent. Elect.] [Coding - 07] -> Long Coding Helper -> Byte 10',
          module: 'Submodule 0',
          bit: 'Bit 3 - Set to 0 to disable amber side markers (U.S. vehicles)',
          selected: false,
          id: 'checkbox3',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.panel-body {
  font-size: 16px;
}

.model-selected {
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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.btn {
  margin-bottom: 2rem;
  background-color: #4fc08d;
  flex-grow: 1;
}

.item-group {
  display: flex;
  flex-direction: column;
}
</style>
