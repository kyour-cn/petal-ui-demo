import indexConfig from './index'

/**
 * 配置信息
 */
const config = {
    // api请求地址
    baseUrl: indexConfig.url,
    // 本地缓存中存储的token名称
    tokenStoreName: "token",
    // token请求名称
    tokenName: "Authorization",
    // token前缀
    tokenPrefix: "Bearer ",
    // token请求方式 header/param
    tokenType: "header",
    // 自定义请求头信息
    headers: {
        "X-Requested-With": "XMLHttpRequest"
    },
}

export default config;