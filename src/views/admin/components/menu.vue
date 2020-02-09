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
                    name: "首页",
                    icon: "el-icon-s-home"
                },
                {
                    name: "Dashboard",
                    path: "/admin/dashboard",
                    icon: "el-icon-office-building"
                },
                {
                    name: "表单页面",
                    icon: "el-icon-s-tools",
                    children: [
                        {
                            name: "常规表单",
                            icon: "el-icon-s-check",
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
                    icon: "el-icon-s-tools",
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
    },
    computed: {
        // ...mapState(["user"])
    },
    mounted() {
        // setTimeout(()=>{
        //     this.reachData();
        // },500)
    },
    methods: {
        reachData() {
            this.menu.forEach((item, index) => {
                if (item.path === "/staff_manager") {
                    if (
                        this.user.data.enterprise_id != 100103 &&
                        this.user.data.enterprise_id != 145212 &&
                        this.user.data.enterprise_id != 145256 &&
                        this.user.data.enterprise_id != 631590 &&
                        this.user.data.enterprise_id != 631888
                    ) {
                        this.menu.splice(index, 1);
                    }
                    return;
                }
                if (!item.children) {
                    return;
                }
                for (const i in item.children) {
                    if (item.children[i].path === "/sport/score") {
                        if (
                            this.user.data.enterprise_id != 631817 &&
                            this.user.data.enterprise_id != 145212
                        ) {
                            item.children.splice(i, 1);
                        }
                        return;
                    }
                }
            });
        }
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