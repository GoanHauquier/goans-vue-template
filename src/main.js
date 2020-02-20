import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import './assets/scss/application.scss';
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

// Components
import HelloWorld from './components/HelloWorld'
import Test from './components/Test'
import Error404 from './components/errors/Error404'

// Init Router
Vue.use(VueRouter)

// Define Routes here
const router = new VueRouter({
  routes: [
    { path: '/', title: 'Test', component: HelloWorld },
    { path: '/test', component: Test },
    { path: '*', component: Error404 },
  ],
  mode: 'history' // Development mode
})

// Init Meta Data
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

// Install BootstrapVue
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
