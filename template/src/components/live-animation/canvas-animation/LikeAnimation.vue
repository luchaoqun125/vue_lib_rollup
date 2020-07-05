<template>
  <div>
    <h2>Canvas:</h2>
    <canvas
      id="thumsCanvas"
      width="200"
      height="400"
      style="background:#fff;"
    ></canvas>
  </div>
</template>

<script>
import ThumbsUpAni from './canvas.js';

export default {
  data() {
    return {
      timer: null
    };
  },
  methods: {
    initView() {
      const thumbsUpAni = new ThumbsUpAni();
      this.timer = setInterval(() => {
        thumbsUpAni.start();
      }, 300);
    }
  },
  mounted() {
    this.initView();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>
