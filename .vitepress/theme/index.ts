import DefaultTheme from 'vitepress/theme'
import './style/index.css'

import { inBrowser } from "vitepress";
import busuanzi from "busuanzi.pure.js";
import DataPanel from "./components/DataPanel.vue";

import Confetti from "./components/Confetti.vue";

import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';


export default {
    extends: DefaultTheme,
    enhanceApp({ app, router }) {
        app.component("DataPanel", DataPanel);//注册全局组件
        app.component("Confetti", Confetti); //注册全局组件

        if (inBrowser) {
            router.onAfterRouteChanged = () => {
                busuanzi.fetch();
            };
        }
    },
    setup() {
        const route = useRoute();
        const initZoom = () => {
            // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
            mediumZoom(".main img", { background: "var(--vp-c-bg)" }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
        };
        onMounted(() => {
            initZoom();
        });
        watch(
            () => route.path,
            () => nextTick(() => initZoom())
        );
    },
}