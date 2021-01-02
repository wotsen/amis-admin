import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/admin/index.vue'
import Advanced from '../views/admin/form/advanced/index.vue'
import Basic from '../views/admin/form/basic/index.vue'
import Editor from '../views/admin/form/editor/index.vue'
import Wizard from '../views/admin/form/wizard/index.vue'
import Dashboard from '../views/admin/dashboard/index.vue'
import Customer from '../views/admin/customer/index.vue'
import SystemSetting from '../views/admin/system/system-setting/index.vue'
import SystemInfo from '../views/admin/system/system-info/index.vue'
import ModuleManage from '../views/admin/system/module-manage/index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Admin',
        component: Admin,
        children: [
            {
                name: 'Dashboard',
                path: '/admin/dashboard',
                component: Dashboard,
            },
            {
                name: 'SystemSetting',
                path: '/admin/system/system-setting',
                component: SystemSetting,
            },
            {
                name: 'SystemInfo',
                path: '/admin/system/system-info',
                component: SystemInfo,
            },
            {
                name: 'ModuleManage',
                path: '/admin/system/module-manage',
                component: ModuleManage,
            },
            {
                name: 'Customer',
                path: '/admin/customer/index',
                component: Customer,
            },
            {
                name: 'Advanced',
                path: '/admin/form/advanced',
                component: Advanced,
            },
            {
                name: 'Advanced',
                path: '/admin/form/basic',
                component: Basic,
            },
            {
                name: 'Editor',
                path: '/admin/form/editor',
                component: Editor,
            },                
            {
                name: 'Wizard',
                path: '/admin/form/wizard',
                component: Wizard,
            }
        ],
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
