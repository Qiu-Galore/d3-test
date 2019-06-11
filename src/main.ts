import Vue from 'vue';
import App from './App.vue';
import router from './routes/router';
import store from './vuex/store';
import * as d3 from 'd3'

Vue.prototype.$d3 = d3
Vue.prototype.$d3.selection.prototype.attrAll = function(data: any) {
  const arr = Object.keys(data)
  arr.forEach((item: any, index: number) => {
    return this.attr(item, data[item])
  })
  return this
}
console.log(Vue.prototype.$d3, 'Vue.prototype.$d3')
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
