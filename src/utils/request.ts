/*  @Author: 麦乐  
    @Date: 2019.2.26
    @Description: When I wrote this, only God and I understood what I was doing,but when you seen it, God only knows
*/
 import axios from 'axios';

 if (process.env.NODE_ENV === 'product' && process.env.VUE_APP_CURRENTMODE === 'daily') {
     // 日常环境
    axios.defaults.baseURL = 'https://api-daily.huazhukuaixin.com'; 
} else if (process.env.NODE_ENV === 'product') {
    // 线上环境
    axios.defaults.baseURL = 'https://api.huazhukuaixin.com';
}
 axios.defaults.timeout = 30 * 1000;
 axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
 // 请求拦截器
 axios.interceptors.request.use((config: any) => {
    
    return config;
 },(error: any) => {
     return Promise.reject(error);
 })

 // 响应拦截器
 axios.interceptors.response.use((response: any) => {

    return response;
 },(error:any) => {
     return Promise.reject(error);
 })

 class Check {
     public CheckStatus(response: any) {
        if(response.status === 200) {
            return response;
        }
     }
     public CheckCode(error: any) {
         // console.log(error.request.status);
        // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
        if(error.status === -404 ) {
            alert(error.msg)
        }
        if (error.data && (!error.data.success)) {
            alert(error.data.error_msg);
        }
        return error;
     }
 }

 class Axios {
     public _Check: any;
     constructor() {
         this._Check = new Check();
     }
     public get(url: string, params: any = null) {
         return axios({
             url,
             params
         }).then((response:any) => {
             console.log(response);
            return this._Check.CheckStatus(response);
         }).catch((error: any) => {
             console.log(error);
             return this._Check.CheckCode(error)
         })
     }
     public post(url: any,data: any = null) {
        return axios({
            method: "POST",
            url,
            data
        }).then((response: any) => {
            return this._Check.CheckStatus(response);
        }).catch((error: any) => {
            return this._Check.CheckCode(error)
        })
     }
 }

 export default new Axios();