import byobu from './src/byobu.vue';

const vueByobu = {
  install(Vue, ){
    Vue.mixin({  });
    Vue.component('byobu', byobu)
  }
}

export default vueByobu;