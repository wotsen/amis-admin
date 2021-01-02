<template>
    <el-menu
        :collapse="isCollapse"
        :collapse-transition="true"
        background-color="#304156"
        text-color="#eee"
        active-text-color="#4dbcff"
        :default-active="$route.path"
        router
    >
        <div v-for="(item,index1) in menu" :key="index1">
            <el-submenu :index="index1+'a'" v-if="item.children && item.children.length > 0">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span v-show="!isCollapse" slot="title">{{item.name}}</span>
                </template>
                <div v-for="(child,index2) in item.children" :key="'second'+index2">
                    <el-menu-item :index="child.path">
                        <i :class="child.icon"></i>
                        <span slot="title">{{child.name}}</span>
                    </el-menu-item>
                    <div v-for="(childs,index3) in child.children" :key="'third'+index3">
                        <el-menu-item :index="childs.path">
                            <i :class="childs.icon"></i>
                            <span slot="title">{{childs.name}}</span>
                        </el-menu-item>
                    </div>
                </div>
            </el-submenu>
            <el-menu-item v-else :index="item.path">
                <i :class="item.icon"></i>
                <span slot="title">{{item.name}}</span>
            </el-menu-item>
        </div>
    </el-menu>
</template>

<script>
export default {
    props: ["isCollapse"],
    data() {
        return {
            menu: [
                {
                    name: "AMis Boilerplate",
                    icon: "el-icon-s-home"
                },
                {
                    name: "Dashboard",
                    path: "/admin/dashboard",
                    icon: "el-icon-office-building"
                },
                {
                    name: "系统",
                    icon: "el-icon-s-tools",
                    children: [
                        {
                            name: "系统信息",
                            icon: "el-icon-info",
                            path: "/admin/system/system-info"
                        },
                        {
                            name: "系统设置",
                            icon: "el-icon-setting",
                            path: "/admin/system/system-setting"
                        },
                        {
                            name: "模块管理",
                            icon: "el-icon-s-management",
                            path: "/admin/system/module-manage"
                        }
                    ]
                },
                {
                    name: "表单页面",
                    icon: "el-icon-help",
                    children: [
                        {
                            name: "常规表单",
                            icon: "el-icon-picture-outline-round",
                            path: "/admin/form/basic"
                        },
                        {
                            name: "复杂表单",
                            path: "/admin/form/advanced",
                            icon: "el-icon-s-custom"
                        },
                        {
                            name: "向导",
                            path: "/admin/form/wizard",
                            icon: "el-icon-s-help"
                        }
                    ]
                },
                {
                    name: "会员管理",
                    icon: "el-icon-star-off",
                    children: [
                        {
                            name: "列表",
                            path: "/admin/customer/index",
                            icon: "el-icon-video-camera-solid"
                        }
                    ]
                }
            ]
        };
    }
};
</script>

<style>
.el-menu {
    border: none;
    width: 200px;
    text-align: left;
}
.el-menu--collapse {
    width: 64px;
}
</style>