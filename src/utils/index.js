/**
 * 返回上一页
 */
export const goBack = () => {
    const curr = getCurrentPages();
    if(curr.length > 1) {
        // 返回上一页
        uni.navigateBack()
    }else{
        // 回到首页
        uni.switchTab({
            url: '/pages/index/index'
        });
    }
}
