# vue-lib-rollup

🛠A simple vue.js component/library, the technology is mainly through vue+babel+rollup+eslint+sass, etc., to meet the configuration of the library.Also includes live animation, h5video components

# 💡 Features

- [x] scaffolding of vue+rollup+sass+eslint+babel[Scaffolding detailed tutorial](https://github.com/luchaoqun125/vue_lib_rollup/blob/master/template/docs/scaffolding.md)
- [x] Live animation components[Live Animation Tutorial](https://github.com/luchaoqun125/vue_lib_rollup/blob/master/template/docs/live-animation.md)
- [ ] Custom video component of x5 kernel browser[xh5 video component tutorial](https://github.com/luchaoqun125/vue_lib_rollup/blob/master/template/docs/xh5-video.md)

# 🙏🏻 Support

```
If you like this project, You can support me with starring ⭐ this repository.
```

# Help author
```
If you have any questions or want to join us, you can find the author in the group to discuss through the group QR code below
```
![加入群聊](./template/docs/image/wechat_ma.jpg)

# 💻 Usage

- Install [vue-cli](https://github.com/vuejs/vue-cli)

```bash
$ npm install -g vue-cli
$ yarn global add @vue/cli-init
```

- Initial component/library

```bash
$ vue init luchaoqun125/vue_lib_rollup my-library
$ cd my-library
$ npm install
$ npm run dev
```

# 💻 Development library

```
npm run dev
```

# 💻 Link your library to your project

```
// your library
$ npm link

// to your project, name in package.json
npm link <name>
```

# 🏛 Building

- Building component/library.

```bash
$ npm run build
```

- Publishing to npm. (Please run `npm run build` before publish to NPM)

```bash
$ npm publish
```

# 🖊 References
1. rollup compilation plugin[Rollup Plugin Vue](https://rollup-plugin-vue.vuejs.org/)
2. rollup universal plugin[Rollup Plugin](https://github.com/rollup/plugins)