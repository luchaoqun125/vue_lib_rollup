<script>
import Vue from 'vue';
import { HelloWorld, LiveAnimation } from '../src';

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
