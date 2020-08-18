// JS
import './js/'
// SCSS
import './assets/scss/main.scss'
//
import Vue from 'vue';
import Router from 'vue-router';
//templates
import App from './vue/App.vue';
import Welcome from './vue/components/Welcome.vue';
import Hello from './vue/components/Hello.vue';
//
Vue.use(Router)
//routes
const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/foo',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/bar',
    name: 'Hello',
    component: Hello
  }
]
//router
const router = new Router({
  routes
})
//initialize app
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
