import React from "react"

import {Row , Col , Menu , Icon } from 'antd'

import '../static/style/components/header.css'


const Header = (props) => {

    // console.log(props)s

    // const toTome= ()=>{
    //     // props.history.push('/')
    // }
    
    return(

    <div className = "header">

        {/* xs: <576px响应式栅格。 */}
        {/* sm：≥576px响应式栅格. */}
        {/* md: ≥768px响应式栅格. */}
        {/* lg: ≥992px响应式栅格. */}
        {/* xl: ≥1200px响应式栅格. */}
        {/* xxl: ≥1600px响应式栅格 */}

        <Row type = "flex" justify = "center" className = "head">

            <Col xs={24} sm={24} md={10} lg={15} xl={14}>

                <span className = "header-logo">离忧的博客</span>
                <span className = "header-text">前端各种问题解决方案分享</span>

            </Col>

            <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={4}>

                <Menu className = "menu" mode="horizontal">

                    <Menu.Item key="mail" className = "item">
                        <a href="/">
                            <Icon type="home" /> 
                            首页   
                        </a>    
                    </Menu.Item>

                    <Menu.Item key="video"  className = "item">
                    <a href="http://ckblogadmin.gaoxiaohui.ltd/">
                        <Icon type="form" />
                        后台
                    </a> 
                    </Menu.Item>    

                </Menu>

            </Col>

        </Row>

    </div>
    )
}

export default Header



