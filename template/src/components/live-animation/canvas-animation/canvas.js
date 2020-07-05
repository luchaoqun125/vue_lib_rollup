/**
 * >=min && <=max
 * @param min
 * @param max
 */
function getRandom(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}
export default class ThumbsUpAni {
  imgsList = [];
  context;
  width = 0;
  height = 0;
  scanning = false;
  renderList = [];
  scaleTime = 0.1; // 百分比
  constructor() {
    this.loadImages();
    const canvas = document.getElementById('thumsCanvas');
    this.context = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
  }
  loadImages() {
    const images = [
      '7348001d589622ae8d5174a42f956f6d16a89ed9_1590652016236_99.png',
      '3ace758d92ebfaa8e27f5cae39ab9e85af8e4c25_1590652016253_77.png',
      '6750badae5530c1170337a2e64496544254a042d_1590652016275_11.png',
      '8a25a22e633997d5944026563a01e761eca4571f_1590652016294_70.png',
      '05529d957edbfba6c4ace7c5f2e07efe0456f223_1590652016312_89.png',
      '301f19bd7efd341165444af775ca148b1cf881e3_1590652016335_44.png',
      'fecddbb46a67e392d3a91f1a0d3195478c5312fd_1590652016356_87.png',
      '63af764b2ac9df62f3c2adf2128ce1047e1ef556_1590652016375_64.png',
      'c86a9126eaf9c8c3fbd63fd44edff513249d9b54_1590652016394_30.png',
      '52a908072b9d2ecd882b70fa4d16fb38c7ea7808_1590652016411_37.png'
    ];
    const promiseAll = [];
    images.forEach(src => {
      const p = new Promise(function(resolve) {
        const img = new Image();
        img.onerror = img.onload = resolve.bind(null, img);
        img.width = 40;
        img.height = 40;
        img.src = 'http://akmer.aikucun.com/' + src;
      });
      promiseAll.push(p);
    });
    Promise.all(promiseAll).then(imgsList => {
      this.imgsList = imgsList.filter(d => {
        if (d && d.width > 0) return true;
        return false;
      });
      if (this.imgsList.length == 0) {
        return;
      }
    });
  }
  createRender() {
    if (this.imgsList.length == 0) return null;
    const basicScale = [0.6, 0.9, 1.2][getRandom(0, 2)];

    const getScale = diffTime => {
      if (diffTime < this.scaleTime) {
        return +(diffTime / this.scaleTime).toFixed(2) * basicScale;
      } else {
        return basicScale;
      }
    };
    const context = this.context;
    // 随机读取一个图片来渲染
    const image = this.imgsList[getRandom(0, this.imgsList.length - 1)];
    const offset = 20;
    const basicX = this.width / 2 + getRandom(-offset, offset);
    const angle = getRandom(2, 10);
    let ratio = getRandom(10, 30) * (getRandom(0, 1) ? 1 : -1);
    const getTranslateX = diffTime => {
      if (diffTime < this.scaleTime) {
        // 放大期间，不进行摇摆位移
        return basicX;
      } else {
        return basicX + ratio * Math.sin(angle * (diffTime - this.scaleTime));
      }
    };

    const getTranslateY = diffTime => {
      return (
        image.height / 2 + (this.height - image.height / 2) * (1 - diffTime)
      );
    };

    const fadeOutStage = getRandom(14, 18) / 100;
    const getAlpha = diffTime => {
      let left = 1 - +diffTime;
      if (left > fadeOutStage) {
        return 1;
      } else {
        return 1 - +((fadeOutStage - left) / fadeOutStage).toFixed(2);
      }
    };

    return diffTime => {
      // 差值满了，即结束了 0 ---》 1
      if (diffTime >= 1) return true;
      context.save();
      const scale = getScale(diffTime);
      // const rotate = getRotate();
      const translateX = getTranslateX(diffTime);
      const translateY = getTranslateY(diffTime);
      context.translate(translateX, translateY);
      context.scale(scale, scale);
      // context.rotate(rotate * Math.PI / 180);
      context.globalAlpha = getAlpha(diffTime);
      context.drawImage(
        image,
        -image.width / 2,
        -image.height / 2,
        image.width,
        image.height
      );
      context.restore();
    };
  }
  scan() {
    //
    this.context.clearRect(0, 0, this.width, this.height);
    // 填充色
    this.context.fillStyle = 'rgba(255,255,255,0)';
    //
    this.context.fillRect(0, 0, 200, 400);
    let index = 0;
    let length = this.renderList.length;
    if (length > 0) {
      requestFrame(this.scan.bind(this));
      this.scanning = true;
    } else {
      this.scanning = false;
    }
    while (index < length) {
      const child = this.renderList[index];
      if (
        !child ||
        !child.render ||
        child.render.call(null, (Date.now() - child.timestamp) / child.duration)
      ) {
        // 结束了，删除该动画
        this.renderList.splice(index, 1);
        length--;
      } else {
        // continue
        index++;
      }
    }
  }
  start() {
    const render = this.createRender();
    const duration = getRandom(1500, 3000);
    this.renderList.push({
      render,
      duration,
      timestamp: Date.now()
    });
    if (!this.scanning) {
      this.scanning = true;
      requestFrame(this.scan.bind(this));
    }
    return this;
  }
}
function requestFrame(cb) {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  )(cb);
}
