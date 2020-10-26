import axios from "axios"
// axios.defaults.withCredentials=true;
//携带cookie,默认不携带

// const BaseURL = 'http://cknode.gaoxiaohui.ltd:3007' 
const BaseURL = 'http://121.199.75.45:3007/' 
// http://121.199.75.45/


//使用create方法创建axios实例
export const Service = axios.create({
  timeout: 7000, // 请求超时时间
  baseURL: BaseURL,
  method:"post",
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }

})

export default Service