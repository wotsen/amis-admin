import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
    Menu,
    Submenu,
    MenuItem,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'amis/lib/themes/default.css';
import './style/reset.css';

import Mock from './mock/index';
Mock.init()
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
