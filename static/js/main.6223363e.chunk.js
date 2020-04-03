(this["webpackJsonpgithub-portfolio-criodo"]=this["webpackJsonpgithub-portfolio-criodo"]||[]).push([[0],{101:function(e,t,a){e.exports=a.p+"static/media/crio-logo.63be71d0.svg"},110:function(e,t,a){e.exports=a(211)},115:function(e,t,a){},158:function(e,t,a){},183:function(e,t){},211:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(50),c=a.n(o),i=(a(115),a(8)),l=a(9),s=a(10),d=a(11),m=a(103),p=a(223),E=a(15),_=a(25),u=a(51),g=a(19),y=a.n(g),C=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.container},this.props.children)}}]),a}(n.Component),x=y()((function(e){return{container:{margin:"40px 0px",height:"auto",background:e.palette.primary.white,padding:"65px 0px 25px 0px",boxShadow:"0 10px 20px 0 rgba(20,21,26,0.1)"}}}))(C),R=a(225),T=a(104),b=a(226),O=function(e){switch(e){case"heading1":case"heading2":case"heading3":case"heading4":case"heading5":case"headLine":case"button":case"title":case"subHeader":case"button":default:return"Open Sans"}},f=function(e){switch(e){case"heading1":return"32px";case"heading2":return"24px";case"heading3":return"18px";case"heading4":return"16px";case"heading5":return"14px";case"body1":return"18px";case"body2":return"16px";case"body3":return"14px";case"body4":return"12px";case"quote":return"20px";case"button":default:return"14px"}},h=function(e){switch(e){case"heading1":case"heading2":case"heading3":case"heading4":case"heading5":return"600";case"body1":case"body2":case"body3":case"body4":return"400";case"quote":case"button":return"600";case"bold":return"800";default:return"400"}},N=function(e){var t=e.classes,a=(e.color,Object(T.a)(e,["color"]));return r.a.createElement(b.a,Object.assign({className:t.root,style:{cursor:e.cursor?e.cursor:"default",fontFamily:e.fontFamily?e.fontFamily:O(e.type),fontSize:e.fontSize?e.fontSize:f(e.type),fontWeight:e.fontWeight?e.fontWeight:h(e.type),color:e.color?e.color:function(t){if("dark"===e.currentTheme)return"#ffffff";switch(t){case"heading1":case"heading2":case"heading3":case"heading4":case"heading5":return"#000000";case"button":return"#FFFFFF";default:return"#000000"}}(e.type),letterSpacing:"0.04em"}},a),e.children)};N.defaultProps={type:"body"};var v=y()((function(e){return{root:{letterSpacing:0,opacity:1}}}))(N),A=a(18),I=a(61),P=a.n(I),k=(a(74),a(158),n.Component,a(4)),L=a.n(k),M=a(5),B=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={meDetail:{},user:"",isLoading:!0,qbox:{},qmoney:"",qcharm:"",qprep:""},n.title=n.title.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"title",value:function(e){return e.replace(/(^|\s)\S/g,(function(e){return e.toUpperCase()}))}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{row:!0,lg:2,md:1,xs:1}),r.a.createElement(R.a,{row:!0,lg:7,md:10,xs:10},r.a.createElement(x,null,r.a.createElement("div",{className:e.top},r.a.createElement(v,{fontSize:"48px"},"Rajat Khanna"),r.a.createElement("div",{className:e.subtitle},r.a.createElement(v,{fontSize:"34px",color:"rgba(0,0,0,0.6)"},"Backend Developer"),r.a.createElement("a",{href:"https://www.linkedin.com/in/rajatkhanna1999/",target:"_blank",rel:"noopener"},r.a.createElement(A.a,{icon:["fab","linkedin"],className:e.socialIcon})),r.a.createElement("a",{href:"http://github.com/rajatkhanna1999",target:"_blank",rel:"noopener"},r.a.createElement(A.a,{icon:["fab","github"],className:e.socialIcon}))),r.a.createElement("div",{className:e.programs},r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,lg:1,md:1,xs:12},r.a.createElement(v,{type:"body2",color:"rgba(0,0,0,0.6)"},"Programs:")),r.a.createElement(R.a,{item:!0,lg:5,md:5,xs:12,style:{marginLeft:"40px"}},r.a.createElement(v,{type:"body2",color:"#7C8DFF"},"Crio Launch")))),r.a.createElement("a",{href:"nil",target:"_blank"},r.a.createElement("div",{className:"viewCertificate",style:{padding:"10px",border:"1px solid #7C8DFF",width:"max-content",borderRadius:"4px",margin:"0px 0px 60px 0px",display:"inline-flex",alignItems:"center"}},r.a.createElement(A.a,{icon:["fas","file-alt"],style:{marginRight:"10px"},className:e.arrowIcon}),r.a.createElement(v,{type:"body2",color:"#7C8DFF",cursor:"pointer"},"VIEW CERTIFICATE")))),r.a.createElement("div",{className:e.middle},r.a.createElement(v,{type:"body1",color:"rgba(0,0,0,0.6)"},"Crio Experience"),r.a.createElement("div",{className:e.programRow},r.a.createElement("div",{className:e.programPill},r.a.createElement("img",{alt:"Crio.Do",src:P.a,style:{marginRight:"10px"}}),r.a.createElement(v,{type:"heading3",color:"rgba(255,255,255,1)"},"Crio Launch")),r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,0.6)"},"31 Oct 2019 - 29 Feb 2020")),r.a.createElement("ul",{className:"timeline"},r.a.createElement("li",null,r.a.createElement("div",{className:e.MERow,class:"meRow"},r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement(v,{type:"heading3",color:"rgba(0,0,0,1)"},"QBox"),r.a.createElement("div",{style:{marginTop:"16px"}},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,1)"}," ",L()(M.qbox_outer.cardContentContainer.cardContentList[1].cardBody)," "),r.a.createElement("div",{style:{marginTop:"25px"}},r.a.createElement(R.a,{item:!0,xs:12,md:2},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,0.6)"},"Skills Learned:")),r.a.createElement(R.a,{item:!0,xs:12,md:10},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,1)"},L()(M.qbox_outer.skills)," "))),r.a.createElement("div",{style:{margin:"30px 0px"}},r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,xs:4},r.a.createElement(E.b,{to:{pathname:"/detail/ME_QBOX",aboutProps:{data:this.state.meDetail.ME_QBOX,getTitle:this.props.getTitle}}},r.a.createElement(v,{type:"body5",color:"#7C8DFF",cursor:"pointer"},"VIEW DETAILS",r.a.createElement(A.a,{icon:["fas","arrow-right"],className:e.arrowIcon}))))))))))),r.a.createElement("div",{style:{marginLeft:"80px",borderBottom:"1px solid #d8d8d8",marginBottom:"30px"}}),r.a.createElement("li",null,r.a.createElement("div",{className:e.MERow,class:"meRow"},r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement(v,{type:"heading3",color:"rgba(0,0,0,1)"},"QMoney"),r.a.createElement("div",{style:{marginTop:"16px"}},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,1)"},L()(M.qmoney_outer.cardContentContainer.cardContentList[1].cardBody)," "),r.a.createElement("div",{style:{marginTop:"25px"}},r.a.createElement(R.a,{item:!0,xs:12,md:2},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,0.6)"},"Skills Learned:")),r.a.createElement(R.a,{item:!0,xs:12,md:10},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,1)"},L()(M.qmoney_outer.skills)," "))),r.a.createElement("div",{style:{margin:"40px 0px"}},r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,xs:4},r.a.createElement(E.b,{to:{pathname:"/detail/ME_QMONEY",aboutProps:{data:this.state.meDetail.ME_QMONEY,getTitle:this.props.getTitle}}},r.a.createElement(v,{type:"body5",color:"#7C8DFF",cursor:"pointer"},"VIEW DETAILS",r.a.createElement(A.a,{icon:["fas","arrow-right"],className:e.arrowIcon}))))))))))),r.a.createElement("div",{style:{marginLeft:"80px",borderBottom:"1px solid #d8d8d8",marginBottom:"30px"}})," ")))),r.a.createElement(R.a,{row:!0,lg:2,md:1,xs:1}))}}]),a}(n.Component),S=y()((function(e){return{top:{borderBottom:"1px solid"+e.palette.primary.primaryBorder,padding:"0px 55px"},middle:{margin:"45px 55px"},subtitle:{display:"flex",alignItems:"center"},socialIcon:{color:e.palette.primary.primary,fontSize:"32px",marginLeft:"20px"},arrowIcon:{color:e.palette.primary.primary,marginLeft:"5px",cursor:"pointer"},programs:{margin:"35px 0px 30px 0px",color:"rgba(0, 0, 0, 0.6)",display:"flex",alignItems:"center"},programRow:{padding:"10px 0px 0px 0px"},MERow:{margin:"55px 0px 0px 0px"},programPill:{display:"flex",alignItems:"center",background:"#3f3f3f",width:"fit-content",padding:"16px",borderRadius:"8px",margin:"10px 0px"}}}))(B),w=a(101),D=a.n(w),Q=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.navbar},r.a.createElement(E.c,{to:"/"},r.a.createElement("img",{alt:"Crio.Do",src:D.a}),r.a.createElement("div",{style:{marginLeft:"16px"}},r.a.createElement(v,{type:"heading4",fontWeight:"bold",cursor:"pointer"},this.props.title))))}}]),a}(n.Component),J=y()((function(e){return{navbar:{height:"80px",background:e.palette.primary.white,display:"flex",padding:"0px 32px",alignItems:"center",borderBottom:"1px solid"+e.palette.primary.primaryBorder}}}))(Q),U=a(66),q=(a(202),function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={meDetail:{},data:"",me:"",isLoading:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.meid;this.setState({me:e},(function(){})),this.container.scrollTop=0}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(R.a,{container:!0,ref:function(t){return e.container=t}},r.a.createElement(R.a,{row:!0,lg:2,md:1,xs:1}),r.a.createElement(R.a,{row:!0,lg:7,md:10,xs:10},r.a.createElement(x,null,"ME_QBOX"===this.state.me?r.a.createElement(r.a.Fragment,null,r.a.createElement(E.b,{to:{pathname:"/"}},r.a.createElement("div",{style:{display:"inline-flex",alignItems:"center",marginBottom:"20px"}},r.a.createElement(A.a,{icon:["fas","arrow-left"],style:{fontSize:"1.5em",margin:"0px 10px 0px 55px",cursor:"pointer",color:"#999"}}),r.a.createElement(v,{cursor:"pointer",color:"#999"},"Back"))),r.a.createElement("div",{className:t.top},r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,xs:7},r.a.createElement("div",{style:{margin:"0px 0px 10px 0px"}},r.a.createElement(v,{fontSize:"46px"}," QBox")),r.a.createElement(v,{fontSize:"34px",color:"rgba(0,0,0,0.6)"},L()(M.qbox_outer.cardContentContainer.cardContentList[0].cardBody)," ")),r.a.createElement(R.a,{item:!0,xs:5,style:{textAlign:"right"}}),r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement("div",{style:{textAlign:"center"}},L()(M.qbox_milestone0.cardContentContainer.cardContentList[0].cardBody)," ")))),r.a.createElement("div",{className:t.middle},r.a.createElement(v,{color:"rgba(0,0,0,1)",fontSize:"20px"},"QBox Modules"),r.a.createElement("ul",{className:"timeline"},M.qbox_inner.map((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement("div",{className:t.MERow,class:"meRow"},r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement(v,{type:"heading3",color:"rgba(0,0,0,1)"},L()(e.cardContentContainer.containerTitle)),r.a.createElement("div",{style:{marginTop:"16px"}},r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,0.6)"},"Scope of work:")),r.a.createElement(R.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement("br",null),r.a.createElement(v,{type:"body5",color:"#000"},L()(e.cardContentContainer.cardContentList[0].cardBody)))),r.a.createElement("div",{style:{marginTop:"25px"}},r.a.createElement(R.a,{item:!0,xs:12,md:2},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,0.6)"},"Skills Learned:")),r.a.createElement(R.a,{item:!0,xs:12,md:10},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,1)"},L()(e.cardContentContainer.cardContentList[1].cardBody))))))))),a!==M.qbox_inner.length-1?r.a.createElement("div",{style:{borderBottom:"1px solid #d8d8d8",margin:"30px 0px 30px 80px"}}):"")}))))):"ME_QMONEY"===this.state.me?r.a.createElement(r.a.Fragment,null," ",r.a.createElement(E.b,{to:{pathname:"/"}},r.a.createElement("div",{style:{display:"inline-flex",alignItems:"center",marginBottom:"20px"}},r.a.createElement(A.a,{icon:["fas","arrow-left"],style:{fontSize:"1.5em",margin:"0px 10px 0px 55px",cursor:"pointer",color:"#999"}}),r.a.createElement(v,{cursor:"pointer",color:"#999"},"Back"))),r.a.createElement("div",{className:t.top},r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,xs:7},r.a.createElement("div",{style:{margin:"0px 0px 10px 0px"}},r.a.createElement(v,{fontSize:"48px"}," QMoney")),r.a.createElement(v,{fontSize:"34px",color:"rgba(0,0,0,0.6)"},L()(M.qmoney_outer.cardContentContainer.cardContentList[0].cardBody)," ")),r.a.createElement(R.a,{item:!0,xs:5,style:{textAlign:"center"}}),r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement("div",{style:{textAlign:"center"}},L()(M.qmoney_milestone0.cardContentContainer.cardContentList[0].cardBody)," ")))),r.a.createElement("div",{className:t.middle},r.a.createElement("div",{style:{margin:"0px 0px 20px 0px"}},r.a.createElement(v,{color:"rgba(0,0,0,1)",fontSize:"20px"},"QMoney Modules")),r.a.createElement("ul",{className:"timeline"},M.qmoney_inner.map((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement("div",{className:t.MERow,class:"meRow"},r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement(v,{type:"heading3",color:"rgba(0,0,0,1)"},L()(e.cardContentContainer.containerTitle)),r.a.createElement("div",{style:{marginTop:"16px"}},r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,0.6)"},"Scope of work:")),r.a.createElement(R.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement("br",null),r.a.createElement(v,{type:"body5",color:"#000"},L()(e.cardContentContainer.cardContentList[0].cardBody)))),r.a.createElement("div",{style:{marginTop:"25px"}},r.a.createElement(R.a,{item:!0,xs:12,md:2},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,0.6)"},"Skills Learned:")),r.a.createElement(R.a,{item:!0,xs:12,md:10},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,1)"},L()(e.cardContentContainer.cardContentList[1].cardBody))))))))),a!==M.qmoney_inner.length-1?r.a.createElement("div",{style:{borderBottom:"1px solid #d8d8d8",margin:"30px 0px 30px 80px"}}):"")}))))):"ME_PS_DS1"===this.state.me?r.a.createElement(r.a.Fragment,null," ",r.a.createElement(E.b,{to:{pathname:"/"}},r.a.createElement("div",{style:{display:"inline-flex",alignItems:"center",marginBottom:"20px"}},r.a.createElement(A.a,{icon:["fas","arrow-left"],style:{fontSize:"1.5em",margin:"0px 10px 0px 55px",cursor:"pointer",color:"#999"}}),r.a.createElement(v,{cursor:"pointer",color:"#999"},"Back"))),r.a.createElement("div",{className:t.top},r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,xs:7},r.a.createElement("div",{style:{margin:"0px 0px 10px 0px"}},r.a.createElement(v,{fontSize:"46px"},"QPrep")),r.a.createElement(v,{fontSize:"34px",color:"rgba(0,0,0,0.6)"},L()(M.qprep_outer.cardContentContainer.cardContentList[0].cardBody)," ")),r.a.createElement(R.a,{item:!0,xs:5,style:{textAlign:"center"}},r.a.createElement(U.a,null)))),r.a.createElement("div",{className:t.middle},r.a.createElement(v,{color:"rgba(0,0,0,1)",fontSize:"20px"},"QPrep Modules"),r.a.createElement("ul",{className:"timeline"},M.qprep_inner.map((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement("div",{className:t.MERow,class:"meRow"},r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement(v,{type:"heading3",color:"rgba(0,0,0,1)"},L()(e.cardContentContainer.containerTitle)),r.a.createElement("div",{style:{marginTop:"16px"}},r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,0.6)"},"Scope of work:")),r.a.createElement(R.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement("br",null),r.a.createElement(v,{type:"body5",color:"#000"},L()(e.cardContentContainer.cardContentList[0].cardBody)))),r.a.createElement("div",{style:{marginTop:"25px"}},r.a.createElement(R.a,{item:!0,xs:12,md:2},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,0.6)"},"Skills Learned:")),r.a.createElement(R.a,{item:!0,xs:12,md:10},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,1)"},L()(e.cardContentContainer.cardContentList[1].cardBody))))))))),a!==M.qprep_inner.length-1?r.a.createElement("div",{style:{borderBottom:"1px solid #d8d8d8",margin:"30px 0px 30px 80px"}}):"")}))))):"ME_QCHARM"===this.state.me?r.a.createElement(r.a.Fragment,null," ",r.a.createElement(E.b,{to:{pathname:"/"}},r.a.createElement("div",{style:{display:"inline-flex",alignItems:"center",marginBottom:"20px"}},r.a.createElement(A.a,{icon:["fas","arrow-left"],style:{fontSize:"1.5em",margin:"0px 10px 0px 55px",cursor:"pointer",color:"#999"}}),r.a.createElement(v,{cursor:"pointer",color:"#999"},"Back"))),r.a.createElement("div",{className:t.top},r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,xs:7},r.a.createElement("div",{style:{margin:"0px 0px 10px 0px"}},r.a.createElement(v,{fontSize:"46px"},"QCharm")),r.a.createElement(v,{fontSize:"34px",color:"rgba(0,0,0,0.6)"},L()(M.qcharm_outer.cardContentContainer.cardContentList[0].cardBody)," ")),r.a.createElement(R.a,{item:!0,xs:5,style:{textAlign:"center"}},r.a.createElement(U.a,null)))),r.a.createElement("div",{className:t.middle},r.a.createElement(v,{color:"rgba(0,0,0,1)",fontSize:"20px"},"QCharm Modules"),r.a.createElement("ul",{className:"timeline"},M.qcharm_inner.map((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement("div",{className:t.MERow,class:"meRow"},r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement(v,{type:"heading3",color:"rgba(0,0,0,1)"},L()(e.cardContentContainer.containerTitle)),r.a.createElement("div",{style:{marginTop:"16px"}},r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,0.6)"},"Scope of work:")),r.a.createElement(R.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement("br",null),r.a.createElement(v,{type:"body5",color:"#000"},L()(e.cardContentContainer.cardContentList[0].cardBody)))),r.a.createElement("div",{style:{marginTop:"25px"}},r.a.createElement(R.a,{item:!0,xs:12,md:2},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,0.6)"},"Skills Learned:")),r.a.createElement(R.a,{item:!0,xs:12,md:10},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,1)"},L()(e.cardContentContainer.cardContentList[1].cardBody))))))))),a!==M.qcharm_inner.length-1?r.a.createElement("div",{style:{borderBottom:"1px solid #d8d8d8",margin:"30px 0px 30px 80px"}}):"")}))))):r.a.createElement("center",null,r.a.createElement(v,{color:"#999999"},"No data available")))),r.a.createElement(R.a,{row:!0,lg:2,md:1,xs:1}))}}]),a}(n.Component)),F=y()((function(e){return{top:{borderBottom:"1px solid"+e.palette.primary.primaryBorder,padding:"0px 25px 60px 55px"},middle:{margin:"45px 55px"},subtitle:{display:"flex",alignItems:"center"},socialIcon:{color:e.palette.primary.primary,fontSize:"32px",marginLeft:"20px"},arrowIcon:{color:e.palette.primary.primary,marginLeft:"5px",cursor:"pointer"},programs:{margin:"45px 0px",color:"rgba(0, 0, 0, 0.6)",display:"flex",alignItems:"center"},programRow:{padding:"60px 0px 0px 0px"},MERow:{margin:"55px 0px 0px 0px"},programPill:{display:"inline-flex",alignItems:"center",background:"#3f3f3f",width:"fit-content",padding:"16px",borderRadius:"8px",margin:"10px 0px"}}}))(q),j=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).theme=Object(m.a)({palette:{primary:{main:"#7C8DFF",primary:"#7C8DFF",primaryBackground:"#F1F4FE",primaryBorder:"#D8D8D8",white:"#fff",black:"#000000",red:"#E66565",green:"#70CC63",orange:"#E6935A",grey:"#999999",greyTwo:"#EEEEEE",purple:"#570DA8",yellow:"#F1C21B"},secondary:{main:"#ffffff",secondaryBackground:"#C9D0FF",tertiaryBackground:"#F7F7F7"}}}),n.state={title:"Crio.Do Portfolio",defaultPath:"/Crio-Launch-Feb-2020-rajatkhanna1999",detailPath:"/detail/:meid"},console.log(n.state.detailPath),n}return Object(l.a)(a,[{key:"getTitle",value:function(e){this.setState({title:this.state.title.concat(e)})}},{key:"render",value:function(){var e=this;this.props.classes;return r.a.createElement(E.a,{basename:this.state.defaultPath},r.a.createElement(p.a,{theme:this.theme},r.a.createElement("div",{style:{backgroundColor:this.theme.palette.secondary.tertiaryBackground,height:"100vh",overflowX:"scroll"}},r.a.createElement(J,{title:this.state.title}),r.a.createElement(_.c,null,r.a.createElement(_.a,{exact:!0,path:this.state.defaultPath,render:function(){return r.a.createElement(S,{getTitle:e.getTitle.bind(e)})}}),r.a.createElement(_.a,{path:this.state.detailPath,component:F}),r.a.createElement(_.a,{render:function(){return r.a.createElement(S,{getTitle:e.getTitle.bind(e)})}})))))}}]),a}(n.Component),Y=a(42),G=a(65),V=a(43);Y.b.add(G.b,G.a,V.b,V.d,V.c,V.a);var X=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){document.title="Portfolio - Crio.Do"}},{key:"render",value:function(){return r.a.createElement(j,null)}}]),a}(n.Component);a(208).config(),c.a.render(r.a.createElement(X,null),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('{"qmoney_inner":[{"cardContentContainer":{"cardContentList":[{"cardTitle":"Scope of work","cardType":"CARD_TYPE_REGULAR","cardBody":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Used Tiingo\u2019s REST APIs to fetch stock quotes.</p>\\n</li>\\n<li>\\n<p>Computed the annualized returns based on stock purchase date and holding period.</p>\\n</li>\\n</ol></div>","@class":"com.crio.backend.modules.content.models.CardContent","cardId":"ME_QMONEYPROJECT_REPORT_MILESTONE_2_CARD_1"},{"cardTitle":"Skills used","cardType":"CARD_TYPE_REGULAR","cardBody":"<div class=\'Skills_used_card card-content-body\'><p>Java, REST API, Jackson</p></div>","@class":"com.crio.backend.modules.content.models.CardContent","cardId":"ME_QMONEYPROJECT_REPORT_MILESTONE_2_CARD_2"}],"containerId":"CONTAINER_REGULAR_ME_QMONEY_PROJECT_REPORT_MILESTONE_1","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"Fetch stock quotes and compute annualized stock returns","containerTldr":"","permalinkId":"container-regular-me_qmoney-project_report-milestone-1","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}},{"cardContentContainer":{"cardContentList":[{"cardTitle":"Scope of work","cardType":"CARD_TYPE_REGULAR","cardBody":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Refactored code to adapt to an updated interface contract published by the backend team.</p>\\n</li>\\n<li>\\n<p>Published the portfolio manager library as a JAR for easy versioning and distribution.</p>\\n</li>\\n<li>\\n<p>Created examples to help document library (JAR) usage.</p>\\n</li>\\n</ol></div>","@class":"com.crio.backend.modules.content.models.CardContent","cardId":"ME_QMONEYPROJECT_REPORT_MILESTONE_3_CARD_1"},{"cardTitle":"Skills used","cardType":"CARD_TYPE_REGULAR","cardBody":"<div class=\'Skills_used_card card-content-body\'><p>Interfaces, Code Refactoring, Gradle</p></div>","@class":"com.crio.backend.modules.content.models.CardContent","cardId":"ME_QMONEYPROJECT_REPORT_MILESTONE_3_CARD_2"}],"containerId":"CONTAINER_REGULAR_ME_QMONEY_PROJECT_REPORT_MILESTONE_2","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"Refactor using Java interfaces and publish a JAR file","containerTldr":"","permalinkId":"container-regular-me_qmoney-project_report-milestone-2","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}}],"qbox_inner":[{"cardContentContainer":{"cardContentList":[{"cardTitle":"Scope of work","cardType":"CARD_TYPE_REGULAR","cardBody":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>Implemented a pre-installation script that validated the minimum system requirements to be met for QBox installation. The script checked the availability of the following system resources:</li>\\n</ol><ul>\\n<li>\\n<p>Processor</p>\\n</li>\\n<li>\\n<p>Memory</p>\\n</li>\\n<li>\\n<p>Disk space</p>\\n</li>\\n<li>\\n<p>OS version</p>\\n</li>\\n</ul><ol start=\'2\'>\\n<li>Installed the QBox server and connected it to various QBox clients.</li>\\n</ol><p><img alt=\'image alt text\' src=\'https://storage.googleapis.com/crio-content-container-assets/ME_ME_QBOX_MODULE_PROJECT_REPORT_image_1.jpg\' style=\'max-width:750px;\'/></p></div>","@class":"com.crio.backend.modules.content.models.CardContent","cardId":"ME_QBOXPROJECT_REPORT_MILESTONE_2_CARD_1"},{"cardTitle":"Skills used","cardType":"CARD_TYPE_REGULAR","cardBody":"<div class=\'Skills_used_card card-content-body\'><p>Linux commands</p></div>","@class":"com.crio.backend.modules.content.models.CardContent","cardId":"ME_QBOXPROJECT_REPORT_MILESTONE_2_CARD_2"}],"containerId":"CONTAINER_REGULAR_ME_QBOX_PROJECT_REPORT_MILESTONE_1","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"Check system requirements and install QBox","containerTldr":"","permalinkId":"container-regular-me_qbox-project_report-milestone-1","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}},{"cardContentContainer":{"cardContentList":[{"cardTitle":"Scope of work","cardType":"CARD_TYPE_REGULAR","cardBody":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Created a performance benchmark using a base version of QBox.</p>\\n</li>\\n<li>\\n<p>Identified regressions in newer QBox versions (memory usage, cpu usage, file transfer speed, file permission issues).</p>\\n</li>\\n</ol><p><img alt=\'image alt text\' src=\'https://storage.googleapis.com/crio-content-container-assets/ME_ME_QBOX_MODULE_PROJECT_REPORT_image_2.jpg\' style=\'max-width:750px;\'/></p></div>","@class":"com.crio.backend.modules.content.models.CardContent","cardId":"ME_QBOXPROJECT_REPORT_MILESTONE_3_CARD_1"},{"cardTitle":"Skills used","cardType":"CARD_TYPE_REGULAR","cardBody":"<div class=\'Skills_used_card card-content-body\'><p>Linux commands, OS Concepts</p></div>","@class":"com.crio.backend.modules.content.models.CardContent","cardId":"ME_QBOXPROJECT_REPORT_MILESTONE_3_CARD_2"}],"containerId":"CONTAINER_REGULAR_ME_QBOX_PROJECT_REPORT_MILESTONE_2","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"Debug performance issues and identify regressions","containerTldr":"","permalinkId":"container-regular-me_qbox-project_report-milestone-2","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}},{"cardContentContainer":{"cardContentList":[{"cardTitle":"Scope of work","cardType":"CARD_TYPE_REGULAR","cardBody":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Collected and analyzed pcap files using Wireshark.</p>\\n</li>\\n<li>\\n<p>Identified the following network issues in different versions of QBox: TCP retransmissions, connection refusals, dropped connections, sub-optimal TCP window sizes and retransmission delays.</p>\\n</li>\\n<li>\\n<p>Identified several network issues in different versions of QBox including TCP retransmissions, connection refusals and retransmission delays.</p>\\n</li>\\n</ol><p><img alt=\'image alt text\' src=\'https://storage.googleapis.com/crio-content-container-assets/ME_ME_QBOX_MODULE_PROJECT_REPORT_image_3.jpg\' style=\'max-width:750px;\'/></p></div>","@class":"com.crio.backend.modules.content.models.CardContent","cardId":"ME_QBOXPROJECT_REPORT_MILESTONE_4_CARD_1"},{"cardTitle":"Skills used","cardType":"CARD_TYPE_REGULAR","cardBody":"<div class=\'Skills_used_card card-content-body\'><p>Networking Concepts</p></div>","@class":"com.crio.backend.modules.content.models.CardContent","cardId":"ME_QBOXPROJECT_REPORT_MILESTONE_4_CARD_2"}],"containerId":"CONTAINER_REGULAR_ME_QBOX_PROJECT_REPORT_MILESTONE_3","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"Troubleshoot network issues","containerTldr":"","permalinkId":"container-regular-me_qbox-project_report-milestone-3","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}}],"qmoney_milestone0":{"cardContentContainer":{"cardContentList":[{"cardTitle":"Image","cardType":"CARD_TYPE_REGULAR","cardBody":"<div class=\'Image_card card-content-body\'><p><img alt=\'image alt text\' src=\'https://storage.googleapis.com/crio-content-container-assets/ME_ME_QMONEY_MODULE_PROJECT_REPORT_image_0.png\' style=\'max-width:750px;\'/></p><p>QMoney Architecture</p><p><img alt=\'image alt text\' src=\'https://storage.googleapis.com/crio-content-container-assets/ME_ME_QMONEY_MODULE_PROJECT_REPORT_image_1.png\' style=\'max-width:750px;\'/></p><p>QMoney Portfolio Manager Interface</p></div>","@class":"com.crio.backend.modules.content.models.CardContent","cardId":"ME_QMONEYPROJECT_REPORT_MILESTONE_1_CARD_1"}],"containerId":"CONTAINER_REGULAR_ME_QMONEY_PROJECT_REPORT_MILESTONE_0","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"Extended Overview","containerTldr":"","permalinkId":"container-regular-me_qmoney-project_report-milestone-0","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}},"qbox_outer":{"skills":"Linux commands, OS Concepts, Networking Concepts","cardContentContainer":{"cardContentList":[{"cardTitle":"Headline","cardType":"CARD_TYPE_REGULAR","cardBody":"<div class=\'Headline_card card-content-body\'><p>A file store for users to backup and share files through a secured service.</p></div>","@class":"com.crio.backend.modules.content.models.CardContent","cardId":"PROJECT_REPORT_OVERVIEW_1_CARD_1"},{"cardTitle":"Overview","cardType":"CARD_TYPE_REGULAR","cardBody":"<div class=\'Overview_card card-content-body\'><p>QBox is a file-sharing product that helps users share files securely. During the course of this Micro-Experience, the developer is expected to contribute to various phases of product development:</p><ul>\\n<li>\\n<p>Bash script to check minimum installation requirements.</p>\\n</li>\\n<li>\\n<p>Identify daily builds that have performance, functionality regressions.</p>\\n</li>\\n<li>\\n<p>Troubleshoot customer issues from packet traces.</p>\\n</li>\\n<li>\\n<p>Setup secure transfer.</p>\\n</li>\\n</ul></div>","@class":"com.crio.backend.modules.content.models.CardContent","cardId":"PROJECT_REPORT_OVERVIEW_1_CARD_2"},{"cardTitle":"Skills","cardType":"CARD_TYPE_REGULAR","cardBody":"<div class=\'Skills_card card-content-body\'><p>Linux Commands, OS Concepts, Networking Concepts</p></div>","@class":"com.crio.backend.modules.content.models.CardContent","cardId":"PROJECT_REPORT_OVERVIEW_1_CARD_3"}],"containerId":"CONTAINER_REGULAR_ME_QBOX_PROJECT_REPORT_OVERVIEW_1","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"ME_QBOX","containerTldr":"","permalinkId":"container-regular-me_qbox-project_report-overview-1","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}},"qbox_milestone0":{"cardContentContainer":{"cardContentList":[{"cardTitle":"Image","cardType":"CARD_TYPE_REGULAR","cardBody":"<div class=\'Image_card card-content-body\'><p><img alt=\'image alt text\' src=\'https://storage.googleapis.com/crio-content-container-assets/ME_ME_QBOX_MODULE_PROJECT_REPORT_image_0.png\' style=\'max-width:750px;\'/></p><h5>File transfer using the QBox server</h5></div>","@class":"com.crio.backend.modules.content.models.CardContent","cardId":"ME_QBOXPROJECT_REPORT_MILESTONE_1_CARD_1"},{"cardTitle":"Skills","cardType":"CARD_TYPE_REGULAR","cardBody":"<div class=\'Skills_card card-content-body\'><p>Linux commands, OS and Networking Concepts</p></div>","@class":"com.crio.backend.modules.content.models.CardContent","cardId":"ME_QBOXPROJECT_REPORT_MILESTONE_1_CARD_2"}],"containerId":"CONTAINER_REGULAR_ME_QBOX_PROJECT_REPORT_MILESTONE_0","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"Extended Overview","containerTldr":"","permalinkId":"container-regular-me_qbox-project_report-milestone-0","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}},"qmoney_outer":{"skills":"Java, JSON, JUnit, cURL, REST API, Java Interfaces, Gradle","cardContentContainer":{"cardContentList":[{"cardTitle":"Headline","cardType":"CARD_TYPE_REGULAR","cardBody":"<div class=\'Headline_card card-content-body\'><p>A visual stock portfolio analyzer.</p></div>","@class":"com.crio.backend.modules.content.models.CardContent","cardId":"ME_QMONEYPROJECT_REPORT_OVERVIEW_1_CARD_1"},{"cardTitle":"Overview","cardType":"CARD_TYPE_REGULAR","cardBody":"<div class=\'Overview_card card-content-body\'><p>QMoney is a visual stock portfolio analyzer. It helps portfolio managers make trade recommendations for their clients.</p><p>During the course of this Micro-Experience, the developer:</p><ul>\\n<li>\\n<p>Implemented the core logic of the portfolio manager and published it as a library.</p>\\n</li>\\n<li>\\n<p>Refactored code to add support for multiple stock quote services.</p>\\n</li>\\n<li>\\n<p>Improved application stability and performance.</p>\\n</li>\\n</ul></div>","@class":"com.crio.backend.modules.content.models.CardContent","cardId":"ME_QMONEYPROJECT_REPORT_OVERVIEW_1_CARD_2"}],"containerId":"CONTAINER_REGULAR_ME_QMONEY_PROJECT_REPORT_OVERVIEW_0","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"ME_QMONEY","containerTldr":"","permalinkId":"container-regular-me_qmoney-project_report-overview-0","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}}}')},61:function(e,t,a){e.exports=a.p+"static/media/crio-logo-white.c9536e04.svg"}},[[110,1,2]]]);
//# sourceMappingURL=main.6223363e.chunk.js.map