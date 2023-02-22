<template>
  <div>
    {{name}}
  </div>
</template>

<script>
const loConsole = (word) => {
  console.log('------------------');
  console.log(word);
  console.log('------------------');
};
export default {
  name: 'list',
  data() {
    return {
      name: 'component',
    }
  },
  beforeCreate() {
    loConsole('beforeCreated son');
  },
  created() {
    loConsole('created son');
  },
  beforeMount() {
    loConsole('beforeMount son');
  },
  mounted() {
    loConsole('mounted son');
  },
  beforeUpdate() {
    loConsole('beforeUpdate son');
  },
  updated() {
    loConsole('updated son');
  }
}
</script>
