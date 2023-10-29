<script>

import {watch} from "vue";
import {usePetalUiStore} from "petal-ui/stores/petal-ui";

export default {
    onLaunch: function () {

        const puiStore = usePetalUiStore()

        // 监听isDark变化
        watch(() => puiStore.isDark, (newVal) => {

            //#ifdef MP-WEIXIN
            uni.setBackgroundColor({
                backgroundColor: 'var(--pui-bg-page)' + (newVal ? '-dark' : ''),
            });
            //#endif

            //#ifdef H5
            // 获取页面元素
            const page = document.querySelector('uni-app');
            // 设置背景色
            page.style.backgroundColor = 'var(--pui-bg-page' + (newVal ? '-dark' : '') + ')';
            //#endif

        })
    },
    onShow: function () {

    },
    onHide: function () {

    }
}
</script>

<style>
/*每个页面公共css */
uni-app {
    background: var(--pui-bg-page);
    height: 100%;
}
</style>
