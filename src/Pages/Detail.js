import React , { useState , useEffect} from "react"

import {getTheBlogService} from "../server/config"

import { Icon, Breadcrumb , message} from 'antd'

// markdown语法解析插件
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css'


import '../static/style/pages/detail.css'


const Detail = (props) => {

  let Thetype = props.location.state.type
  let id = props.location.state.id

  
  const [type,setType]=useState(Thetype)

  const [data,setData]=useState([])

  const [img,setImg]=useState([])
  const [text,setText]=useState([])


  const getList = ()=>{


    if(Thetype == "myMiniProgram"){

      let imgs = []
      let texts= []

      if (id == 1){
  
        imgs = [
          "http://qny.gaoxiaohui.ltd/1-1.jpg",
          "http://qny.gaoxiaohui.ltd/1-2.jpg",
          "http://qny.gaoxiaohui.ltd/1-3.jpg",
          "http://qny.gaoxiaohui.ltd/1-4.jpg",
          "http://qny.gaoxiaohui.ltd/1-5.jpg",
          "http://qny.gaoxiaohui.ltd/1-6.jpg",
        ]
  
        texts = [
          "学长有货（第一版）:二手交易、寻缘表白、活动发布小程序",
          "三个板块，分别用于发布二手物品信息、各种活动信息、寻缘表白信息。对已发布的信息可以收藏和删除。自开发封装瀑布流组件。最开始向专注服务于华科学子，因此起名叫做华科汇，后来想要融入各学校之间的互动，因此改名学长有货"
        ]
  
      }else if (id ==2){
  
        imgs = [
          "http://qny.gaoxiaohui.ltd/2-0.jpg",
          "http://qny.gaoxiaohui.ltd/2-1.jpg",
          "http://qny.gaoxiaohui.ltd/2-3.jpg",
          "http://qny.gaoxiaohui.ltd/2-4.jpg",
          "http://qny.gaoxiaohui.ltd/2-5.jpg",
          "http://qny.gaoxiaohui.ltd/2-6.jpg",
          "http://qny.gaoxiaohui.ltd/2-7.jpg",
          "http://qny.gaoxiaohui.ltd/2-8.jpg",
          "http://qny.gaoxiaohui.ltd/2-9.jpg",
          "http://qny.gaoxiaohui.ltd/2-10.jpg",
          "http://qny.gaoxiaohui.ltd/2-11.jpg",
          "http://qny.gaoxiaohui.ltd/2-12.jpg"
        ]
  
        texts =[
          "学长有货（第二版）：基于第一版改进，主要增加了各学校学子之间的互动",
          "学长有货（第二版）主要增加功能为：增加择校、切换学校、留言评论等功能",
        ]
      }else if (id == 3 ){
  
        imgs = [
          "http://qny.gaoxiaohui.ltd/3-0.jpg",
          "http://qny.gaoxiaohui.ltd/3-1.jpg",
          "http://qny.gaoxiaohui.ltd/3-2.jpg",
          "http://qny.gaoxiaohui.ltd/3-3.jpg",
          "http://qny.gaoxiaohui.ltd/3-4.jpg",
          "http://qny.gaoxiaohui.ltd/3-5.jpg",
          "http://qny.gaoxiaohui.ltd/3-6.jpg",
          "http://qny.gaoxiaohui.ltd/3-7.jpg",
          "http://qny.gaoxiaohui.ltd/3-8.jpg",
          "http://qny.gaoxiaohui.ltd/3-9.jpg",
          "http://qny.gaoxiaohui.ltd/3-10.jpg",
          "http://qny.gaoxiaohui.ltd/3-11.jpg",
          "http://qny.gaoxiaohui.ltd/3-12.jpg",
          "http://qny.gaoxiaohui.ltd/3-13.jpg"
        ]
  
        texts =[
          "学长有货（第三版）：基于第二版改进，提升用户体验",
          "学长有货（第三版）主要改变为：重新设计UI,让界面更符合校园应用的场景，信息展示简洁化，删除部分冗杂内容",
        ]
  
      }

      setImg(imgs)
      setText(texts)

                
    }else{

      getTheBlogService(id).then(res =>{
        console.log(res)
        setData(res.data)
  
      })
      .catch(err =>{
        console.log(err)
        message.error("文章列表读取失败")
      })
  

    }


  }

  useEffect(()=>{

    getList()

  },[])

  // console.log(list)

  if(!data.content){
    data.content = ""
  }
  
  // const [myData, setmyData] = useState(list.data)
  
  const renderer = new marked.Renderer();

  marked.setOptions({
    renderer: renderer, 
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });


  // renderer.heading = function(text, level, raw) {
  //   const anchor = tocify.add(text, level);
  //   return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  // };
  
  let html = marked(data.content) 


  if(type == "myMiniProgram"){

    return(

      <div className="container">  

            {/* <div className="bread-div">
              <Breadcrumb className = "font">
                <Breadcrumb.Item><a href="/" >首页</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href={"/list" + "?type=" + type}>{type}</a></Breadcrumb.Item>
                <Breadcrumb.Item>内容详情</Breadcrumb.Item>
              </Breadcrumb>
            </div> */}

            <div>

              <div className="detailed-title">
                {text[0]}
              </div>

              <div className="list-icon center">
                <span><Icon type="eye" /> { parseInt(Math.random()*10000) }</span>
                <span><Icon type="rise" /> { parseInt(Math.random()*10000) }</span>
                <span><Icon type="fire" /> { parseInt(Math.random()*10000) } </span>
              </div>

              <div  className="detailed-content">

                  <div className="introduce">
                    {text[1]}
                  </div>

                  <div className = "imgs">

                  {
                    img.map((item,index )=>{
                      return(
                        <img src = {item} key={index}></img>
                      )
                    })
                  }

                  </div>

              </div>


            </div>

      </div> 

    )
  }else{
    

  return (
    
    <div className="container">

  


          {/* <div className="bread-div">
            <Breadcrumb className = "font">
              <Breadcrumb.Item><a href="/" >首页</a></Breadcrumb.Item>
              <Breadcrumb.Item onClick = "back"><a href={"/list" + "?type=" + type}>{type}</a></Breadcrumb.Item>
              <Breadcrumb.Item>内容详情</Breadcrumb.Item>
            </Breadcrumb>
          </div> */}

          <div>
                <div className="detailed-title">
                {data.title}
                </div>

                <div className="list-icon center">
                  <span><Icon type="eye" /> { parseInt(Math.random()*10000) }</span>
                  <span><Icon type="rise" /> { parseInt(Math.random()*10000) }</span>
                  <span><Icon type="fire" /> { parseInt(Math.random()*10000) } </span>
                </div>

                <div className="detailed-content">

                  <a href={data.url}>{data.url}</a>

                  <div className="detailed-content"  
                       dangerouslySetInnerHTML = {{__html:html}}   >
                 </div>

                </div>

          </div>
    
    
    </div>    
  )
  }
}

// Detail.getInitialProps = async (res)=>{

//   // console.log(res.query)
//   let id = res.query.id
//   let type = res.query.type
//   if(type !== "myMiniProgram"){
//     const res = await getTheBlogService(id)
//     // console.log(res.data)
//     return { data: res.data,type:type}
//   }else{
//     return { data:{},type: "myMiniProgram",id:id }
//   }
  
// }


export default Detail
