import React , { useState, useEffect } from "react"

import {Icon, List, message} from 'antd'

import {getBlogListService} from "../server/config"

import '../static/style/pages/type.css'

const  Type = (props) => {

  const [mylist,setList]=useState([])

  const getType = ()=>{

    getBlogListService().then(res =>{
      console.log(res)
      setList(res.data)

    })
    .catch(err =>{
      console.log(err)
      message.error("文章列表读取失败")
    })

  }

  useEffect(()=>{

    getType()

  },[])

  const cursor = {
    "cursor": "pointer"
  }

  const golist = (event) =>{
    // console.log(event.target.dataset.type)
    props.history.push("/list",{type: event.target.dataset.type})

  }


  return (
    
    <div className="container">

          <List header ={ <div className = "font">博客内容分类</div>}
                itemLayout="vertical"
                dataSource={mylist}
                renderItem = {item => (
                  <List.Item>

                    <div className="list-title" onClick = {golist} data-type={item.type} style={cursor}>{item.title}</div>

                    <div className="list-icon">
                      <span><Icon type="eye" /> { parseInt(Math.random()*10000) }</span>
                      <span><Icon type="rise" /> { parseInt(Math.random()*10000) }</span>
                      <span><Icon type="fire" /> { parseInt(Math.random()*10000) } </span>
                    </div>

                  </List.Item>
                )} />
   
 
    </div>    
  )
}

export default Type
