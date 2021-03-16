import axios from "axios";

export function request(config) {
    //1.创建axios实例
    const instacnce = axios.create({
        baseURL: 'https://api.oioweb.cn',
        timeout: 5000
    })
    //axios拦截器
    instacnce.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err);
    })

    instacnce.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    }) 

    return instacnce(config);
}