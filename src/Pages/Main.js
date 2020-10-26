import React from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";

import {Row , Col} from 'antd'

// 异步加载组件
import loadable from './loadable';
// import Type from './Type';
// import Mylist from './Mylist';
// import Detail from './Detail';

import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from "../components/Footer"

import '../static/style/pages/common.css'
// import 'antd/dist/antd.css';

// 异步加载组件
const Type = loadable(() => import('./Type'));
const Mylist = loadable(() => import('./Mylist'));
const Detail = loadable(() => import('./Detail'));



function Main(){
    return (

        <div>

            <Header></Header>
                    
                    
            <Row className="comm-main" type="flex" justify="center">

              <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >

              <Router>      
                <Route path="/" exact component={Type} />
                <Route path="/list"  component={Mylist} />
                <Route path="/detail"  component={Detail} />
              </Router>
  

              </Col>

              <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>

                <Author />

                <Advert></Advert>

              </Col>

            </Row>
        
            <Footer></Footer>


        </div>



        // <Router>      
        //     <Route path="/" exact component={} />
        //     <Route path="/admin/"  component={} />
        // </Router>


    )
}
export default Main