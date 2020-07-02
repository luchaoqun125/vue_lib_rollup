/*
 * @Description: 
 * @Author: 鲁大师
 * @Date: 2020-07-01 19:17:48
 * @LastEditors: 鲁大师
 * @LastEditTime: 2020-07-01 20:32:01
 */ 
import Vue from 'vue';
import Dev from './serve.vue';

import { MyPlugin } from '@/index';

Vue.use(MyPlugin, { name: 'vue-plugin'})

new Vue({
  render: (h) => h(Dev),
}).$mount('#app');
