import reqConfig from '../config/request'

const request = (url, params = {}, config = {}) => {

    // 判断url是不是以/开头
    if (url.charAt(0) === '/') {
        url = reqConfig.baseUrl + url;
    }

    // 组合头信息
    if (config.header === undefined) {
        config.header = {}
    }
    config.header = Object.assign(reqConfig.headers, config.header);

    // 请求token
    if (reqConfig.tokenStoreName) {
        const token = uni.getStorageSync(reqConfig.tokenStoreName)
        if (token) {
            const tokenVal = reqConfig.tokenPrefix + token;
            if (reqConfig.tokenType === 'header') {
                config.header[reqConfig.tokenName] = tokenVal
            }else{
                params[reqConfig.tokenName] = tokenVal;
            }
        }
    }

    return new Promise((resolve, reject) => {
        uni.request({
            url: url,
            data: params,
            ...config, // 合并自定义配置
            success: (res) => {
                resolve(res.data);
            },
            fail: (err) => {
                reject(err);
            }
        })
    })
}
const get = (url, params = {}, config = {}) => {
    return request(url, params, {
        method: 'GET',
        ...config
    })
}

const post = (url, params = {}, config = {}) => {
    return request(url, params, {
        method: 'POST',
        ...config
    })
}

export {request, get, post}
