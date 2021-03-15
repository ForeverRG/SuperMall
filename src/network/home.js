import { request } from "./request";

export function getHomeData() {
    return request({ url: '/ip' })
}

export function getSwiperImg() {
    // return request({ url: '/image' })
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 1000)
    }).then(() =>
        'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3262273075,3895616999&fm=26&gp=0.jpg'
    ).catch(() => console.log(error) );
}
export function getRecommendViews() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 1000)
    }).then(() =>
        [
            { id: 1, link: '#1', text: '哈哈', view: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3271193886,4029775912&fm=26&gp=0.jpg' },
            { id: 2, link: '#2', text: '呵呵', view: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3082407169,408350025&fm=26&gp=0.jpg' },
            { id: 3, link: '#3', text: '嘿嘿', view: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3627626300,1888953570&fm=26&gp=0.jpg' },
            { id: 4, link: '#4', text: '嚯嚯', view: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2224860025,3368775629&fm=26&gp=0.jpg' }
        ]
    ).catch(() => console.log(error) );
}