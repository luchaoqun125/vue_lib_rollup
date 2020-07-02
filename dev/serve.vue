<script>
import Vue from 'vue';
import { YourEle } from '../src'

export default Vue.extend({
  name: 'ServeDev',
  components: {
    YourEle
  }
});
</script>

<template>
  <div id="app">
    <!-- 自定义组件测试 -->
    you can add your element
    <your-ele />
  </div>
</template>
