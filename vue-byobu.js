import { byobu, byobuBlade, byobuBladeBlock, byobuBladeBlockContainer } from './src';

const vueByobu = {
  install(Vue){
    Vue.component('byobu', byobu)
    Vue.component('byobuBlade', byobuBlade)
    Vue.component('byobuBladeBlock', byobuBladeBlock)
    Vue.component('byobuBladeBlockContainer', byobuBladeBlockContainer)
  }
}

export default vueByobu;