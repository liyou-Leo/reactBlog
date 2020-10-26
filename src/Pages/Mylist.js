import React , { useState , useEffect} from "react"

import {message, Icon, List } from 'antd'

import {getBlogListTitleService} from "../server/config"


const Mylist = (props) => {

  // console.log(props.location.state.type)
  let Thetype = props.location.state.type

  const [type,setType]=useState(Thetype)
  
  const [list,setList]=useState([])

  const getList = ()=>{


    if(Thetype == "myMiniProgram"){

      setType("myMiniProgram")
  
      const data  = [ {_id:3, title:"学长有货小程序第三版（正在开发）"}, 
                      {_id:2,title:"学长有货小程序第二版"}, 
                      {_id:1,title:"学长有货小程序第一版"}]
  
      setList(data)
               
    }else{

      getBlogListTitleService(type).then(res =>{
        console.log(res)
        setList(res.data)
  
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



  const godetail = (event) =>{
    // console.log(event.target.dataset.id)
    props.history.push("/detail",{type: type , id:event.target.dataset.id})

  }

  // console.log(list.data)

  return (
    
    <div className="container">

          <List header ={ <div className = "font">博文列表</div>}
                itemLayout="vertical"
                dataSource={list}
                renderItem = {item => (
                  <List.Item>

                    <div className="list-title link" onClick = {godetail} data-id={item._id} >{item.title}</div>

                    <div className="list-icon">
                      <span><Icon type="eye" /> { parseInt(Math.random()*10000) }</span>
                      <span><Icon type="home" /> 图文教程</span>
                      <span><Icon type="fire" /> { parseInt(Math.random()*10000) }</span>
                    </div>
                    {/* <div className="list-context">{item.context}</div>  */}
                  </List.Item>
                )} />
  
    </div>    
)
}


export default Mylist
