<template>
    <AMisRenderer :schema="schema" />
</template>

<script>
import AMisRenderer from "@/components/AMisRenderer.vue";
export default {
    name: "Advanced",
    components: {
        AMisRenderer
    },
    data() {
        return {
            schema: {
                type: 'page',
                title: '会员列表',
                subTitle: '展示基本的增删改查',
                body: {
                    type: "crud",
                    api: "/api/customer",
                    filter: {
                        title: "",
                        submitText: "",
                        controls: [
                            {
                                type: "text",
                                name: "keywords",
                                placeholder: "通过关键字搜索",
                                addOn: {
                                    label: "搜索",
                                    type: "submit"
                                }
                            }
                        ]
                    },
                    columns: [
                        {
                            name: "id",
                            label: "ID",
                        },

                        {
                            name: "name",
                            label: "姓名",
                        },

                        {
                            name: "age",
                            label: "年龄",
                        },

                        {
                            name: "gender",
                            label: "性别",
                            type: 'mapping',
                            map: {
                                1: '♂',
                                '*': '♀'
                            }
                        },

                        {
                            name: 'tel',
                            label: '电话'
                        },

                        {
                            name: 'company',
                            label: '所属公司'
                        },
                        
                        {
                            type: "operation",
                            label: "操作",
                            width: 100,
                            buttons: [
                                {
                                    type: "button",
                                    icon: "fa fa-eye",
                                    tooltip: "查看"
                                },
                                {
                                    type: "button",
                                    icon: "fa fa-pencil",
                                    tooltip: "编辑",
                                    actionType: "drawer",
                                    drawer: {
                                        position: "left",
                                        size: "md",
                                        title: "提示",
                                        body: "这是个简单的弹框"
                                    }
                                },
                                {
                                    type: "button",
                                    icon: "fa fa-times text-danger",
                                    actionType: "ajax",
                                    tooltip: "删除",
                                    confirmText: "您确认要删除?",
                                    api: "delete:/api/sample/$id"
                                }
                            ],
                            toggled: true
                        }
                    ]
                }
            }
        };
    }
};
</script>
