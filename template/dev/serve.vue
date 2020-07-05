<script>
import Vue from 'vue';
// 可以引入源码
import { HelloWorld, LiveAnimation } from '../src';
// 也可以引入编译后代码，注意样式也要引入
// import { HelloWorld, LiveAnimation } from '../lib/index';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    HelloWorld,
    LiveAnimation
  }
});
</script>

<template>
  <div id="app">
    <div>
      <!-- 自定义组件测试 -->
      you can add your element
      <HelloWorld />
    </div>
    <LiveAnimation />
  </div>
</template>
