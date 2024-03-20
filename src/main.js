import Vue from 'vue'
// 引入App组件，他是所有组件的父组件
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)

/**
 * 关于不同版本的Vue
 * 1、vue.js和vue.runtime.xxx.js的区别
 *  a、vue.js是完整版的Vue，包含：核心功能 + 模板解析器。
 *  b、vue.runtime.xxx.js 是运行版的Vue，只包含：核心功能，没有模板解析器。
 * 2、因为vue.runtime.xxx.js没有模板解析器，所以不用用 template 配置项，需要使用
 *   render 函数接受到的 createElement 函数去指定具体内容。
 */

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
