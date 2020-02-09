<template>
    <div class="box" ref="renderBox"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { render as renderSchema } from "amis";
import * as copy from 'copy-to-clipboard';
import ReactDOM from "react-dom";
import {
    toast,
    alert,
    confirm
} from 'amis';
import axios from 'axios';

@Component
export default class AMisRenderer extends Vue {
    @Prop() private schema!: object;
    
    env = {
        fetcher: ({
            url,
            method,
            data,
            config,
            headers
        }: any) => {
            config = config || {};
            config.headers = config.headers || {};
            config.withCredentials = true;

            if (config.cancelExecutor) {
                config.cancelToken = new axios.CancelToken(config.cancelExecutor);
            }

            config.headers = headers || {};
            config.method = method;

            if (method === 'get' && data) {
                config.params = data;
            } else if (data && data instanceof FormData) {
                // config.headers = config.headers || {};
                // config.headers['Content-Type'] = 'multipart/form-data';
            } else if (data
                && typeof data !== 'string'
                && !(data instanceof Blob)
                && !(data instanceof ArrayBuffer)
            ) {
                data = JSON.stringify(data);
                // config.headers = config.headers || {};
                config.headers['Content-Type'] = 'application/json';
            }

            data && (config.data = data);

            return axios(url, config);
        },
        isCancel: (e: any) => axios.isCancel(e),
        alert,
        notify: (type: 'success' | 'error' | 'info', msg: string) => {
            toast[type] ? toast[type](msg, type === 'error' ? '系统错误' : '系统消息') : console.warn('[Notify]', type, msg);
            console.log('[notify]', type, msg);
        },
        confirm,
        copy: (contents: string, options: any = {}) => {
            const ret = copy(contents, options);
            ret && (!options || options.shutup !== true) && toast.info('内容已拷贝到剪切板');
            return ret;
        }
    }

    mounted() {
        ReactDOM.render(renderSchema(this.schema, {}, this.env), this.$refs.renderBox);
    }
}
</script>

