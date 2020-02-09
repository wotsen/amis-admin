<template>
    <div class="box" ref="renderBox"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { render as renderSchema } from "amis";
import ReactDOM from "react-dom";

@Component
export default class AMisRenderer extends Vue {
    @Prop() private schema!: object;

    mounted() {
        ReactDOM.render(renderSchema(this.schema), this.$refs.renderBox);
    }
}
</script>

