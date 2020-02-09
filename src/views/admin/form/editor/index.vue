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
            schema:  {
                type: 'page',
                title: '代码编辑器',
                subTitle: '使用的monaco-editor,用到了 worker, 如果控制台没有报错，说明一起正常。',
                body: [
                    {
                        type: 'form',
                        controls: [
                            {
                                type: "editor",
                                name: "js",
                                label: "Javascript",
                                size: "md"
                            }
                        ]
                    }
                ]
            }
        };
    }
};
</script>
