import React from 'react';

import { Avatar, Divider, Tooltip,Tag} from 'antd'

import '../static/style/components/author.css' 


const Author =()=>{

  return (

    <div className="author-div comm-box">

      <div className = "headImg" > 
        
        <Avatar size={100} src= "http://qny.gaoxiaohui.ltd/loadimg.jpg"  />

      </div>
      
      <div className="author-introduction">

          <div>
            行走在秃头的路上，希望能开发出一款大家喜欢用的全民程序，也希望在闲暇时写一本书，塑造几个深入人心的角色
          </div>

          <Divider>相关账号</Divider>

          <a href="https://github.com/liyou-Leo" target="_blank">
            <Avatar size={28} icon="github" className="account"  style={{ backgroundColor: '#87d068' }}/>
          </a>

          <Tooltip placement="topLeft" title="涉及隐私，先不放了哦">
            <Avatar size={28} icon="qq"  className="account" />
          </Tooltip>

          <Tooltip placement="topLeft" title="涉及隐私，先不放了哦">
            <Avatar size={28} icon="wechat"  className="account" /> 
          </Tooltip>
          

          <Divider>标签</Divider>

          <div>
            <Tag color="magenta" className = "tag">羽毛球</Tag>
            <Tag color="red"  className = "tag">杂食动物</Tag>
            <Tag color="volcano"  className = "tag">美剧</Tag>
            <Tag color="orange"  className = "tag">睡觉</Tag>
            <Tag color="gold"  className = "tag">B站</Tag>
            <Tag color="lime"  className = "tag">穿越火线</Tag>
            <Tag color="green"  className = "tag">数码产品</Tag>
            <Tag color="cyan"  className = "tag">纪录片</Tag>
            <Tag color="blue"  className = "tag">人与自然</Tag>
            <Tag color="geekblue"  className = "tag">山东人</Tag>
            <Tag color="purple"  className = "tag">小说</Tag>
          </div>

      </div>

    </div> 
  )

}

export default Author