(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[6],{207:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return l})),a.d(e,"c",(function(){return r}));var n=a(209),i=a.n(n).a.create({timeout:7e3,baseURL:"http://121.199.75.45:3007/",method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"}});function o(){return i({url:"admin/getBlogList",method:"get"})}function l(t){return i({url:"admin/getBlogListTitle?type="+t,method:"get"})}function r(t){return i({url:"admin/getTheBlog?id="+t,method:"get"})}},475:function(t,e,a){},478:function(t,e,a){"use strict";a.r(e);a(115);var n=a(10),i=(a(208),a(212)),o=a(211),l=a(0),r=a.n(l),p=a(207),c=a(264),h=a.n(c),g=a(267),u=a.n(g);a(474),a(475);e.default=function(t){var e=t.location.state.type,a=t.location.state.id,c=Object(l.useState)(e),g=Object(o.a)(c,2),d=g[0],s=(g[1],Object(l.useState)([])),m=Object(o.a)(s,2),y=m[0],j=m[1],q=Object(l.useState)([]),x=Object(o.a)(q,2),E=x[0],f=x[1],v=Object(l.useState)([]),b=Object(o.a)(v,2),N=b[0],O=b[1];Object(l.useEffect)((function(){!function(){if("myMiniProgram"==e){var t=[],n=[];1==a?(t=["http://qny.gaoxiaohui.ltd/1-1.jpg","http://qny.gaoxiaohui.ltd/1-2.jpg","http://qny.gaoxiaohui.ltd/1-3.jpg","http://qny.gaoxiaohui.ltd/1-4.jpg","http://qny.gaoxiaohui.ltd/1-5.jpg","http://qny.gaoxiaohui.ltd/1-6.jpg"],n=["\u5b66\u957f\u6709\u8d27\uff08\u7b2c\u4e00\u7248\uff09:\u4e8c\u624b\u4ea4\u6613\u3001\u5bfb\u7f18\u8868\u767d\u3001\u6d3b\u52a8\u53d1\u5e03\u5c0f\u7a0b\u5e8f","\u4e09\u4e2a\u677f\u5757\uff0c\u5206\u522b\u7528\u4e8e\u53d1\u5e03\u4e8c\u624b\u7269\u54c1\u4fe1\u606f\u3001\u5404\u79cd\u6d3b\u52a8\u4fe1\u606f\u3001\u5bfb\u7f18\u8868\u767d\u4fe1\u606f\u3002\u5bf9\u5df2\u53d1\u5e03\u7684\u4fe1\u606f\u53ef\u4ee5\u6536\u85cf\u548c\u5220\u9664\u3002\u81ea\u5f00\u53d1\u5c01\u88c5\u7011\u5e03\u6d41\u7ec4\u4ef6\u3002\u6700\u5f00\u59cb\u5411\u4e13\u6ce8\u670d\u52a1\u4e8e\u534e\u79d1\u5b66\u5b50\uff0c\u56e0\u6b64\u8d77\u540d\u53eb\u505a\u534e\u79d1\u6c47\uff0c\u540e\u6765\u60f3\u8981\u878d\u5165\u5404\u5b66\u6821\u4e4b\u95f4\u7684\u4e92\u52a8\uff0c\u56e0\u6b64\u6539\u540d\u5b66\u957f\u6709\u8d27"]):2==a?(t=["http://qny.gaoxiaohui.ltd/2-0.jpg","http://qny.gaoxiaohui.ltd/2-1.jpg","http://qny.gaoxiaohui.ltd/2-3.jpg","http://qny.gaoxiaohui.ltd/2-4.jpg","http://qny.gaoxiaohui.ltd/2-5.jpg","http://qny.gaoxiaohui.ltd/2-6.jpg","http://qny.gaoxiaohui.ltd/2-7.jpg","http://qny.gaoxiaohui.ltd/2-8.jpg","http://qny.gaoxiaohui.ltd/2-9.jpg","http://qny.gaoxiaohui.ltd/2-10.jpg","http://qny.gaoxiaohui.ltd/2-11.jpg","http://qny.gaoxiaohui.ltd/2-12.jpg"],n=["\u5b66\u957f\u6709\u8d27\uff08\u7b2c\u4e8c\u7248\uff09\uff1a\u57fa\u4e8e\u7b2c\u4e00\u7248\u6539\u8fdb\uff0c\u4e3b\u8981\u589e\u52a0\u4e86\u5404\u5b66\u6821\u5b66\u5b50\u4e4b\u95f4\u7684\u4e92\u52a8","\u5b66\u957f\u6709\u8d27\uff08\u7b2c\u4e8c\u7248\uff09\u4e3b\u8981\u589e\u52a0\u529f\u80fd\u4e3a\uff1a\u589e\u52a0\u62e9\u6821\u3001\u5207\u6362\u5b66\u6821\u3001\u7559\u8a00\u8bc4\u8bba\u7b49\u529f\u80fd"]):3==a&&(t=["http://qny.gaoxiaohui.ltd/3-0.jpg","http://qny.gaoxiaohui.ltd/3-1.jpg","http://qny.gaoxiaohui.ltd/3-2.jpg","http://qny.gaoxiaohui.ltd/3-3.jpg","http://qny.gaoxiaohui.ltd/3-4.jpg","http://qny.gaoxiaohui.ltd/3-5.jpg","http://qny.gaoxiaohui.ltd/3-6.jpg","http://qny.gaoxiaohui.ltd/3-7.jpg","http://qny.gaoxiaohui.ltd/3-8.jpg","http://qny.gaoxiaohui.ltd/3-9.jpg","http://qny.gaoxiaohui.ltd/3-10.jpg","http://qny.gaoxiaohui.ltd/3-11.jpg","http://qny.gaoxiaohui.ltd/3-12.jpg","http://qny.gaoxiaohui.ltd/3-13.jpg"],n=["\u5b66\u957f\u6709\u8d27\uff08\u7b2c\u4e09\u7248\uff09\uff1a\u57fa\u4e8e\u7b2c\u4e8c\u7248\u6539\u8fdb\uff0c\u63d0\u5347\u7528\u6237\u4f53\u9a8c","\u5b66\u957f\u6709\u8d27\uff08\u7b2c\u4e09\u7248\uff09\u4e3b\u8981\u6539\u53d8\u4e3a\uff1a\u91cd\u65b0\u8bbe\u8ba1UI,\u8ba9\u754c\u9762\u66f4\u7b26\u5408\u6821\u56ed\u5e94\u7528\u7684\u573a\u666f\uff0c\u4fe1\u606f\u5c55\u793a\u7b80\u6d01\u5316\uff0c\u5220\u9664\u90e8\u5206\u5197\u6742\u5185\u5bb9"]),f(t),O(n)}else Object(p.c)(a).then((function(t){console.log(t),j(t.data)})).catch((function(t){console.log(t),i.a.error("\u6587\u7ae0\u5217\u8868\u8bfb\u53d6\u5931\u8d25")}))}()}),[]),y.content||(y.content="");var M=new h.a.Renderer;h.a.setOptions({renderer:M,gfm:!0,pedantic:!1,sanitize:!1,tables:!0,breaks:!1,smartLists:!0,smartypants:!1,highlight:function(t){return u.a.highlightAuto(t).value}});var I=h()(y.content);return"myMiniProgram"==d?r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("div",{className:"detailed-title"},N[0]),r.a.createElement("div",{className:"list-icon center"},r.a.createElement("span",null,r.a.createElement(n.a,{type:"eye"})," ",parseInt(1e4*Math.random())),r.a.createElement("span",null,r.a.createElement(n.a,{type:"rise"})," ",parseInt(1e4*Math.random())),r.a.createElement("span",null,r.a.createElement(n.a,{type:"fire"})," ",parseInt(1e4*Math.random())," ")),r.a.createElement("div",{className:"detailed-content"},r.a.createElement("div",{className:"introduce"},N[1]),r.a.createElement("div",{className:"imgs"},E.map((function(t,e){return r.a.createElement("img",{src:t,key:e})})))))):r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("div",{className:"detailed-title"},y.title),r.a.createElement("div",{className:"list-icon center"},r.a.createElement("span",null,r.a.createElement(n.a,{type:"eye"})," ",parseInt(1e4*Math.random())),r.a.createElement("span",null,r.a.createElement(n.a,{type:"rise"})," ",parseInt(1e4*Math.random())),r.a.createElement("span",null,r.a.createElement(n.a,{type:"fire"})," ",parseInt(1e4*Math.random())," ")),r.a.createElement("div",{className:"detailed-content"},r.a.createElement("a",{href:y.url},y.url),r.a.createElement("div",{className:"detailed-content",dangerouslySetInnerHTML:{__html:I}}))))}}}]);