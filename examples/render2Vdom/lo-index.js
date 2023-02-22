window.__WEEX__ = false;
import Vue from '../../src/platforms/web/entry-runtime-with-compiler';
import list from './components/list.vue'; 
const loConsole = (word) => {
  console.log('------------------');
  console.log(word);
  console.log('------------------');
};
window.vm = new Vue({
  components: {
    list,
  },
  el: '#app',
  data: {
    name: 'lee',
    list: [
      {
        age: '1',
        key: 'a'
      },
      {
        age: '2',
        key: 'b'
      },
      {
        age: '3',
        key: 'c'
      },
      {
        age: '4',
        key: 'd'
      }
    ],
    age: '22',
    showFlag: false,
  },
  beforeCreate() {
    loConsole('beforeCreated main');
  },
  created() {
    loConsole('created main');
  },
  beforeMount() {
    loConsole('beforeMount main');
  },
  mounted() {
    loConsole('mounted main');
  },
  beforeUpdate() {
    loConsole('beforeUpdate main');
  },
  updated() {
    loConsole('updated main');
  }
})