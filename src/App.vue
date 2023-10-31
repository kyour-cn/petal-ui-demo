<script>

import {watch} from "vue";
import {usePetalUiStore} from "petal-ui/stores/petal-ui";

const setPageBg = (color) => {

    //#ifdef MP-WEIXIN
    uni.setBackgroundColor({
        backgroundColor: color,
    });
    //#endif

    //#ifdef H5
    // 获取页面元素
    const page = document.querySelector('uni-app');
    // 设置背景色
    page.style.backgroundColor = color;
    //#endif
}

export default {
    onLaunch: function () {

        const puiStore = usePetalUiStore()

        // 监听isDark变化
        watch(() => puiStore.dark, (newVal) => {
            setPageBg(puiStore.theme['bg-page'])
        })

        setTimeout(() => {
            setPageBg(puiStore.theme['bg-page'])
        }, 10)

    },
    onShow: function () {

    },
    onHide: function () {

    }
}
</script>
