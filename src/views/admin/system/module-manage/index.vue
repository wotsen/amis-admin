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
                title: 'module manage',
                subTitle: '模块管理',
                body: {
                    type: "crud",
                    api: "/api/system/module-manage",
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
                            name: "name",
                            label: "模块名称",
                        },
                        {
                            name: "enable",
                            label: "使能",
                            quickEdit: {
                                mode: "inline",
                                type: "switch",
                                value: true
                            }
                        },
                        {
                            name: "identi",
                            label: "模块标识",
                        },
                        {
                            name: "type",
                            label: "类别",
                        },
                        {
                            name: "group",
                            label: "分组",
                        },
                        {
                            name: "desc",
                            label: "模块描述",
                        },
                        {
                            name: "status",
                            label: "模块状态",
                        },
                        {
                            name: "run_status",
                            label: "模块运行状态",
                        },
                        {
                            name: "permission",
                            label: "权限",
                        },
                    ]
                }
            }
        };
    }
};
</script>
