# fish-ui

P66
https://www.bilibili.com/video/BV1Zy4y1K7SH?p=66&spm_id_from=pageDriver&vd_source=e02a025523752730045b12b3d7711e54

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).





| 依赖                             | 本项目版本 | 新版                                                         | 说明 |
| -------------------------------- | ---------- | ------------------------------------------------------------ | ---- |
| @element-plus/icons-vue          | 2.1.0      | ![img](https://img.shields.io/npm/v/@element-plus/icons-vue) |      |
| ant-design-vue                   | 1.7.8      | ![img](https://img.shields.io/npm/v/ant-design-vue)          |      |
| @tauri-apps/api                  | 1.4.0      | ![img](https://img.shields.io/npm/v/@tauri-apps/api)         |      |
| @toast-ui/editor                 | 3.2.2      | ![img](https://img.shields.io/npm/v/@toast-ui/editor)        |      |
| @wangeditor/editor-for-vue       | 5.1.12     | ![img](https://img.shields.io/npm/v/@wangeditor/editor-for-vue/next) |      |
| axios                            | 1.5.0      | ![img](https://img.shields.io/npm/v/axios)                   |      |
| crypto-js                        | 4.1.1      | ![img](https://img.shields.io/npm/v/crypto-js)               |      |
| echarts                          | 5.4.3      | ![img](https://img.shields.io/npm/v/echarts)                 |      |
| element-plus                     | 2.3.14     | ![img](https://img.shields.io/npm/v/element-plus)            |      |
| js-cookie                        | 3.0.5      | ![img](https://img.shields.io/npm/v/js-cookie)               |      |
| jsencrypt                        | 3.3.2      | ![img](https://img.shields.io/npm/v/jsencrypt)               |      |
| pinia                            | 2.1.6      | ![img](https://img.shields.io/npm/v/pinia)                   |      |
| sockjs-client                    | 1.6.1      | ![img](https://img.shields.io/npm/v/sockjs-client)           |      |
| stompjs                          | 2.3.3      | ![img](https://img.shields.io/npm/v/stompjs)                 |      |
| vue                              | 3.3.4      | ![img](https://img.shields.io/npm/v/vue)                     |      |
| vue-clipboard3                   | 2.0.0      | ![img](https://img.shields.io/npm/v/vue-clipboard3)          |      |
| vue-echarts                      | 6.6.1      | ![img](https://img.shields.io/npm/v/vue-echarts)             |      |
| vue-router                       | 4.2.4      | ![img](https://img.shields.io/npm/v/vue-router)              |      |
|                                  |            |                                                              |      |
| @tauri-apps/cli                  | 1.4.0      | ![img](https://img.shields.io/npm/v/@tauri-apps/cli)         |      |
| @types/crypto-js                 | 4.1.2      | ![img](https://img.shields.io/npm/v/@types/crypto-js)        |      |
| @types/node                      | 20.6.2     | ![img](https://img.shields.io/npm/v/@types/node)             |      |
| @typescript-eslint/eslint-plugin | 6.7.0      | ![img](https://img.shields.io/npm/v/@typescript-eslint/eslint-plugin) |      |
| @typescript-eslint/parser        | 6.7.0      | ![img](https://img.shields.io/npm/v/@typescript-eslint/parser) |      |
| @vitejs/plugin-vue               | 4.3.4      | ![img](https://img.shields.io/npm/v/@vitejs/plugin-vue)      |      |
| eslint                           | 8.49.0     | ![img](https://img.shields.io/npm/v/eslint)                  |      |
| eslint-config-standard           | 17.1.0     | ![img](https://img.shields.io/npm/v/eslint-config-standard)  |      |
| eslint-plugin-import             | 2.28.1     | ![img](https://img.shields.io/npm/v/eslint-plugin-import)    |      |
| eslint-plugin-n                  | 16.1.0     | ![img](https://img.shields.io/npm/v/eslint-plugin-n)         |      |
| eslint-plugin-promise            | 6.1.1      | ![img](https://img.shields.io/npm/v/eslint-plugin-promise)   |      |
| eslint-plugin-vue                | 9.17.0     | ![img](https://img.shields.io/npm/v/eslint-plugin-vue)       |      |
| lint-staged                      | 14.0.1     | ![img](https://img.shields.io/npm/v/lint-staged)             |      |
| terser                           | 5.19.4     | ![img](https://img.shields.io/npm/v/terser)                  |      |
| typescript                       | 5.2.2      | ![img](https://img.shields.io/npm/v/typescript)              |      |
| unocss                           | 0.55.7     | ![img](https://img.shields.io/npm/v/unocss?color=blue)       |      |
| unplugin-auto-import             | 0.16.6     | ![img](https://img.shields.io/npm/v/unplugin-auto-import?color=blue) |      |
| unplugin-vue-components          | 0.25.2     | ![img](https://img.shields.io/npm/v/unplugin-vue-components?color=blue) |      |
| vite                             | 4.4.9      | ![img](https://img.shields.io/npm/v/vite)                    |      |
| vue-tsc                          | 1.8.11     | ![img](https://img.shields.io/npm/v/vue-tsc)                 |      |



## ref属性

1. 被用来给元素或子组件注册引用信息（id的替代者）
2. 应用在 html 标签上获取的是真实的DOM元素，应用在组件标签上是组件的实例对象（vc）
3. 使用方式：打标识：`<h1 ref="xxx">......</h1>` 或者 `<School ref="xxx"></School>`
4. 获取：`this.$refs.xxx`

