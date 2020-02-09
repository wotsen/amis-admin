<template>
    <div class="layout">
        <div class="menu-wrapper">
            <Menu :isCollapse="isFold"></Menu>
        </div>
        <div class="content">
            <header>
                <i :class="['el-icon-s-fold', {'active': isFold}]" @click="isFold = !isFold"></i>
                <div class="right">
                    <div class="quit-system">退出</div>
                </div>
            </header>
            <div class="main-wrapper">
                <router-view></router-view>
            </div>
            <ToastComponent key="toast" position="top-right" theme="default"/>
            <AlertComponent key="alert" theme="default"/>
        </div>
    </div>
</template>

<script>
import Menu from "./components/menu.vue";
import { ReactInVue } from 'vuera'
import {
    ToastComponent,
    AlertComponent,
} from 'amis';
export default {
    name: "Home",
    components: {
        ToastComponent: ReactInVue(ToastComponent),
        AlertComponent: ReactInVue(AlertComponent),
        Menu
    },
    data() {
        return {
            isFold: false, //导航菜单面板是否折叠
            hasSession: false //为了防止其他页面请求时用到先前的session
        };
    },
    created () {
        this.initMenu()
    },
    methods: {
        initMenu () {
            if (window.innerWidth <= 500 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                this.isFold = true
            }
        }
    }
};
</script>

<style lang="less" scoped>
.layout {
    height: 100vh;
    display: flex;
}
.menu-wrapper {
    height: 100%;
    text-align: center;
    overflow: auto;
    background-color: #304156;
    .el-menu {
        background-color: #304156;
        .el-menu-item {
            color: #eee;
        }
    }
}
.content {
    flex: 1;
    overflow: hidden;
    header {
        line-height: 50px;
        font-size: 16px;
        color: #409eff;
        padding: 0 20px 0 60px;
        border-bottom: 1px solid #e5e5e5;
        position: relative;
        overflow: hidden;
        background-color: #fff;
        .el-icon-s-fold {
            position: absolute;
            left: 16px;
            top: 10px;
            font-size: 30px;
            cursor: pointer;
            transition: all 0.2s;
            &.active {
                transform: rotateY(180deg);
            }
        }
        .el-breadcrumb {
            display: inline-block;
        }
        .right {
            float: right;
            > div {
                position: relative;
                display: inline-block;
                text-align: center;
                vertical-align: middle;
                margin-left: 10px;
                padding: 0 5px;
                cursor: pointer;
                &:hover::after {
                    transform-origin: 0 0;
                    transform: scaleX(1);
                }
                &:first-child:before {
                    border: none;
                }
                &::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 2px;
                    background: #ef4747;
                    transform: scaleX(0);
                    transform-origin: right 0;
                    transition: transform 0.5s;
                }
                &::before {
                    content: "";
                    position: absolute;
                    height: 20px;
                    top: 50%;
                    left: -8px;
                    margin-top: -10px;
                    border-left: 1px solid #ccc;
                }
                &.user-msg {
                    .user-name {
                        color: #409eff;
                        padding: 0 4px;
                    }
                }
                .icon-quit {
                    position: relative;
                    font-size: 24px;
                    color: #409eff;
                }
            }
        }
    }
    .main-wrapper {
        height: calc(100% - 51px);
        width: 100%;
        overflow: auto;
    }
}
</style>