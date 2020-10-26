import React from 'react';

import '../static/style/components/advert.css'


 const Advert = ()=>{

    const url = {
      mdn:{
        url:"https://developer.mozilla.org/zh-CN/docs/Learn",
        img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3177874503,3819924594&fm=26&gp=0.jpg"
      },
      react:{
        url:"https://react.docschina.org/docs/getting-started.html",
        img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1657781221,1139888675&fm=26&gp=0.jpg"
      },
      vue:{
        url:"https://cn.vuejs.org/v2/guide/",
        img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3472426374,1500119397&fm=26&gp=0.jpg"
      },
      wechat:{
        url:"https://developers.weixin.qq.com/miniprogram/dev/framework/",
        img:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3486265758,1943373672&fm=26&gp=0.jpg"
      }


    }

    return (

        <div className="ad-div comm-box">

          <div><a href={url.react.url} target="_blank"><img src={url.react.img} width="100%" /></a></div>
          <br/>
          <div><a href={url.vue.url} target="_blank"><img src={url.vue.img} width="100%" /></a></div>
          <br/>
          <div><a href={url.wechat.url} target="_blank"><img src={url.wechat.img} width="100%" /></a></div>
          <br/>
          <div><a href={url.mdn.url} target="_blank"><img src={url.mdn.img} width="100%" /></a></div>

        </div>
        
    )
 }

export default Advert