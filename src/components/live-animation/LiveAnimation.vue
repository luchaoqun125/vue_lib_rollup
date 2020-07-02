<template>
  <div>
    <p>直播动画组件：</p>
    <canvas-animation />
    <css-animation />
  </div>
</template>

<script>
import CanvasAnimation from './canvas-animation/LikeAnimation';
import CssAnimation from './css-animation/LikeAnimation';
export default {
  name: 'live-animation',
  components: {
    CanvasAnimation,
    CssAnimation
  }
};
</script>
