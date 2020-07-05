/*
 * @Description:
 * @Author: 鲁大师
 * @Date: 2020-07-01 19:17:48
 * @LastEditors: 鲁大师
 * @LastEditTime: 2020-07-02 19:05:15
 */
import Vue from 'vue';
import Dev from './serve.vue';

import { MyPlugin } from '@';

Vue.use(MyPlugin, {
  name: 'my-plugin'
});

new Vue({
  render: h => h(Dev)
}).$mount('#app');
