<template>
  <div>
    <h2>CSS3:</h2>
    <div class="praise_bubble" id="praise_bubble"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let praiseBubble = document.getElementById('praise_bubble');
      function addPraise() {
        const b = Math.floor(Math.random() * 6) + 1;
        const bl = Math.floor(Math.random() * 11) + 1; // bl1~bl11

        let d = document.createElement('div');
        d.className = `bubble b${b} bl${bl}`;
        d.dataset.t = String(Date.now());
        praiseBubble.appendChild(d);
      }
      setInterval(() => {
        addPraise();
      }, 300);
    }
  },
  beforeDestroy() {
    this.timer && clearInterval(this.timer);
  }
};
</script>

<style lang="scss">
.praise_bubble {
  width: 100px;
  height: 200px;
  position: relative;
  background-color: #f4f4f4;
}
.bubble {
  position: absolute;
  width: 40px;
  height: 40px;
  left: 30px;
  bottom: 0px;
  background-repeat: no-repeat;
  background-size: 100%;
  transform-origin: bottom;
}
.b1 {
  background-image: url(//img12.360buyimg.com/img/jfs/t1/102954/26/9241/5069/5e0aea05E7dde8bda/720fcec8bc5be9d4.png);
  /*  可以使用雪碧图
  background-position: -42px -107px;
  background-size: 188.5px 147px; */
}
.b2 {
  background-image: url(//img12.360buyimg.com/img/jfs/t1/102954/26/9241/5069/5e0aea05E7dde8bda/720fcec8bc5be9d4.png);
  /* background-position: -84px -107px;
  background-size: 188.5px 147px; */
}
.b3 {
  background-image: url(//img12.360buyimg.com/img/jfs/t1/102954/26/9241/5069/5e0aea05E7dde8bda/720fcec8bc5be9d4.png);
  /* background-position: 0 -107px;
  background-size: 188.5px 147px; */
}
.b4 {
  background-image: url(//img12.360buyimg.com/img/jfs/t1/102954/26/9241/5069/5e0aea05E7dde8bda/720fcec8bc5be9d4.png);
  /* background-position: -45px -62px;
  background-size: 188.5px 147px; */
}
.b5 {
  background-image: url(//img12.360buyimg.com/img/jfs/t1/102954/26/9241/5069/5e0aea05E7dde8bda/720fcec8bc5be9d4.png);
  /* background-position: -107px -42px;
  background-size: 188.5px 147px; */
}
.b6 {
  background-image: url(//img12.360buyimg.com/img/jfs/t1/102954/26/9241/5069/5e0aea05E7dde8bda/720fcec8bc5be9d4.png);
  /* background-position: -107px 0;
  background-size: 188.5px 147px; */
}
.bl1 {
  animation: bubble_1 3s linear 1 forwards, bubble_big_1 0.8s linear 1 forwards,
    bubble_y 3s linear 1 forwards;
}
.bl2 {
  animation: bubble_2 3s linear 1 forwards, bubble_big_2 0.8s linear 1 forwards,
    bubble_y 3s linear 1 forwards;
}
.bl3 {
  animation: bubble_3 3s linear 1 forwards, bubble_big_1 0.8s linear 1 forwards,
    bubble_y 3s linear 1 forwards;
}
.bl4 {
  animation: bubble_4 3s linear 1 forwards, bubble_big_2 0.8s linear 1 forwards,
    bubble_y 3s linear 1 forwards;
}
.bl5 {
  animation: bubble_5 3s linear 1 forwards, bubble_big_1 0.8s linear 1 forwards,
    bubble_y 3s linear 1 forwards;
}
.bl6 {
  animation: bubble_6 3s linear 1 forwards, bubble_big_3 0.8s linear 1 forwards,
    bubble_y 3s linear 1 forwards;
}
.bl7 {
  animation: bubble_7 3s linear 1 forwards, bubble_big_1 0.8s linear 1 forwards,
    bubble_y 3s linear 1 forwards;
}
.bl8 {
  animation: bubble_8 3s linear 1 forwards, bubble_big_3 0.8s linear 1 forwards,
    bubble_y 3s linear 1 forwards;
}
.bl9 {
  animation: bubble_9 3s linear 1 forwards, bubble_big_2 0.8s linear 1 forwards,
    bubble_y 3s linear 1 forwards;
}
.bl10 {
  animation: bubble_10 3s linear 1 forwards, bubble_big_1 0.8s linear 1 forwards,
    bubble_y 3s linear 1 forwards;
}
.bl11 {
  animation: bubble_11 3s linear 1 forwards, bubble_big_2 0.8s linear 1 forwards,
    bubble_y 3s linear 1 forwards;
}
@keyframes bubble_11 {
  0% {
  }
  25% {
    margin-left: -10px;
  }
  50% {
    margin-left: -10px;
  }
  100% {
    margin-left: -18px;
  }
}
@keyframes bubble_10 {
  0% {
  }
  25% {
    margin-left: -20px;
  }
  50% {
    margin-left: -20px;
  }
  100% {
    margin-left: -20px;
  }
}
@keyframes bubble_9 {
  0% {
  }
  25% {
    margin-left: 10px;
  }
  50% {
    margin-left: 10px;
  }
  100% {
    margin-left: 10px;
  }
}
@keyframes bubble_8 {
  0% {
  }
  25% {
    margin-left: 20px;
  }
  50% {
    margin-left: 20px;
  }
  100% {
    margin-left: 20px;
  }
}
@keyframes bubble_7 {
  0% {
  }
  25% {
    margin-left: 3px;
  }
  50% {
    margin-left: 1px;
  }
  75% {
    margin-left: 2px;
  }
  100% {
    margin-left: 3px;
  }
}
@keyframes bubble_6 {
  0% {
  }
  25% {
    margin-left: -3px;
  }
  50% {
    margin-left: -1px;
  }
  75% {
    margin-left: -2px;
  }
  100% {
    margin-left: -3px;
  }
}
@keyframes bubble_5 {
  0% {
  }
  25% {
    margin-left: 5px;
  }
  50% {
    margin-left: -5px;
  }
  75% {
    margin-left: -10px;
  }
  100% {
    margin-left: -20px;
  }
}
@keyframes bubble_4 {
  0% {
  }
  25% {
    margin-left: -5px;
  }
  50% {
    margin-left: -5px;
  }
  75% {
    margin-left: 20px;
  }
  100% {
    margin-left: 10px;
  }
}
@keyframes bubble_3 {
  0% {
  }
  25% {
    margin-left: -20px;
  }
  50% {
    margin-left: 10px;
  }
  75% {
    margin-left: 20px;
  }
  100% {
    margin-left: -10px;
  }
}
@keyframes bubble_2 {
  0% {
  }
  25% {
    margin-left: 20px;
  }
  50% {
    margin-left: 25px;
  }
  75% {
    margin-left: 10px;
  }
  100% {
    margin-left: 5px;
  }
}
@keyframes bubble_1 {
  0% {
  }
  25% {
    margin-left: -8px;
  }
  50% {
    margin-left: 8px;
  }
  75% {
    margin-left: -15px;
  }
  100% {
    margin-left: 15px;
  }
}
@keyframes bubble_big_1 {
  0% {
    transform: scale(0.3);
  }
  100% {
    transform: scale(1.2);
  }
}
@keyframes bubble_big_2 {
  0% {
    transform: scale(0.3);
  }
  100% {
    transform: scale(0.9);
  }
}
@keyframes bubble_big_3 {
  0% {
    transform: scale(0.3);
  }
  100% {
    transform: scale(0.6);
  }
}
@keyframes bubble_y {
  0% {
    margin-bottom: 0;
  }
  10% {
    margin-bottom: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    margin-bottom: 200px;
    opacity: 0;
  }
}
</style>
