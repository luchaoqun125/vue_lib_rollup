/*
 * @Description: 一个class+vue插件的例子
 * @Author: 鲁大师
 * @Date: 2020-07-01 20:25:17
 * @LastEditors: 鲁大师
 * @LastEditTime: 2020-07-02 10:18:35
 */
const FN = () => {};

class MyPlugin {
  constructor(props) {
    console.log(props);
    FN();
  }

  get() {}

  set() {}
}

const install = (Vue, options) => {
  Vue.prototype.$myPlugin = new MyPlugin(options);
};

export default install;