(this.webpackJsonprico=this.webpackJsonprico||[]).push([[0],{44:function(e,t,i){},46:function(e,t,i){},55:function(e,t,i){},56:function(e,t,i){"use strict";i.r(t);var r=i(1),s=i(2),a=i.n(s),n=i(20),c=i.n(n),l=(i(44),i(45),i(46),i(5)),o=i.p+"static/media/avatar.f3d9e941.png",m=i.p+"static/media/news.0dfdc450.jpg",d=i.p+"static/media/matesrates.92b21cce.jpg",h=i.p+"static/media/ds.97b2be16.png",j=i(14),b=i(59),g=i(58),x=i(60),p=i(61);function O(){return Object(r.jsx)(x.a,{style:{color:"#CFD8E3"},className:"m-auto sticky-top",children:Object(r.jsxs)(p.a,{className:"flex-column m-auto",style:{},children:[Object(r.jsx)("h1",{style:{margin:"2em 0 0 0"},children:"Thank you for your time, "}),Object(r.jsxs)("h2",{style:{margin:"0 0 2em 1em"},children:[" ","have a nice day!"," ",Object(r.jsxs)("span",{role:"img","aria-label":"down",children:["\ud83d\ude0c"," "]})]})]})})}var f=i(10),u=i(22),y=i(23),v=i(19),w=i(26),R=i(24),N=function(e){Object(w.a)(i,e);var t=Object(R.a)(i);function i(e){var r;return Object(u.a)(this,i),(r=t.call(this,e)).submitForm=r.submitForm.bind(Object(v.a)(r)),r.state={status:""},r}return Object(y.a)(i,[{key:"render",value:function(){var e=this.state.status;return Object(r.jsxs)("form",{onSubmit:this.submitForm,action:"https://formspree.io/f/moqpebej",method:"POST",style:{width:"100%",padding:"3em"},children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{children:"Email:"}),Object(r.jsx)("input",{type:"email",name:"email",className:"form-control",style:{borderRadius:"3em"}})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{children:"Message:"}),Object(r.jsx)("textarea",{style:{borderRadius:"2em"},rows:"5",type:"text",name:"message",className:"form-control"})]}),"ERROR"===e&&Object(r.jsx)("p",{children:"Ooops! There was an error."}),"SUCCESS"===e?Object(r.jsx)("p",{children:"Thanks!"}):Object(r.jsx)(g.a,{variant:"outline-light",type:"submit",className:"main-button",children:"SEND"})]})}},{key:"submitForm",value:function(e){var t=this;e.preventDefault();var i=e.target,r=new FormData(i),s=new XMLHttpRequest;s.open(i.method,i.action),s.setRequestHeader("Accept","application/json"),s.onreadystatechange=function(){s.readyState===XMLHttpRequest.DONE&&(200===s.status?(i.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},s.send(r)}}]),i}(a.a.Component);function k(e){var t=e.dim,i=t.phone,s=t.smPhone,a=t.tablet,n=(t.desktop,t.portrait),c=!i&&a&&!n,o=!s&&!c,m={display:"flex",flexDirection:"column",justifyContent:"flex-end",color:"#292F36",lineHeight:1,width:i?"80%":a?"65vw":"40vw",marginTop:a&&"1em",marginRight:!i&&"2em",paddingLeft:"10%",borderRight:!i&&"3px solid ",fontWeight:300,textAlign:!i&&"right"},d={height:"100vh",width:"100%",backgroundColor:"#CFD8E3",paddingTop:i?"70px":a?"45px":0},h={margin:0,marginLeft:"0.9rem",lineHeight:1.2,fontSize:a?"2.8em":"3.2em",fontWeight:a&&"600",borderBottom:"1px solid #aaa"},j={width:i?"100%":a&&n?"80vw":"40vw",height:i?"100%":"60vh",minHeight:s&&"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:i?0:a?"2em":"3em",backgroundColor:"#292F36",color:"#CFD8E3",marginLeft:!i&&a&&"0em",marginRight:!i&&"2em",boxShadow:"7px 7px 12px rgba(20, 20, 20, 1)"};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{style:d,className:i?"topCol flex-end":a&&n?"spaceCol reverse":"centerRow",children:[Object(r.jsx)("div",{style:{height:s&&"100%",margin:"3em 0 3em 0"},className:s?"centerCol":void 0,children:Object(r.jsxs)("div",{className:"text",style:m,children:[Object(r.jsx)("h3",{style:Object(l.a)(Object(l.a)({},{margin:"0 0 0 1rem",lineHeight:1}),{},{marginLeft:a&&"1rem",marginRight:!i&&"1rem"}),children:"Want to"}),Object(r.jsx)("h2",{style:Object(l.a)(Object(l.a)({},h),{},{marginRight:"0.9rem",marginLeft:a&&"0.9rem"}),children:"Say Hi \ud83d\ude4b?"}),Object(r.jsx)("h3",{style:{margin:"0.7rem 1rem 0.7rem",marginLeft:a&&"1rem",lineHeight:1},children:"Leave a message and I'll get back to you as soon as possible!"})]})}),s||c?Object(r.jsx)(f.b,{to:"/form",children:Object(r.jsx)(g.a,{variant:"dark",style:{margin:"2em 0 2em 0",fontSize:"1.5rem"},className:"main-button  nav-shadow",children:"Get in touch!"})}):void 0,o&&Object(r.jsxs)("div",{style:j,children:[Object(r.jsx)("h2",{style:{margin:0,fontSize:"2rem",borderBottom:"1px solid #CFD8E3"},children:"Get in touch"}),Object(r.jsx)(N,{})]})]})})}function S(e){var t=e.dim,i=t.phone,s=t.smPhone,a=t.tablet,n=t.desktop,c=t.portrait,x={minHeight:"100vh",width:"100%",paddingTop:i?"80px":a?"90px":0},p={marginBottom:a&&"3em",width:i?"200px":a&&c?"400px":a?"200px":"300px",height:i?"200px":a&&c?"400px":a?"200px":"300px",borderRadius:"50%",border:"3px solid",backgroundColor:"#ffffff99",boxShadow:"9px 9px 20px rgba(8, 25, 36, 0.562), -9px -9px 20px rgba(66, 133, 161, 0.452)"},u={fontWeight:300,color:"white",lineHeight:1,width:i?"80%":a?"65vw":"40vw",marginTop:i&&"1em",marginLeft:!i&&"2em",paddingRight:!a&&"10%",paddingLeft:i&&"10%",borderLeft:!i&&"3px solid ",display:"flex",flexDirection:"column",justifyContent:"flex-end"},y={width:i?"100%":a&&c?"70vw":"40vw",display:"flex",justifyContent:a?"center":"flex-end",alignItems:"flex-start",marginLeft:!i&&a&&"2em"},v={width:"100%",height:"auto",borderRadius:i?0:a?"2em":"3em",boxShadow:"7px 7px 12px rgba(20, 20, 20, 1), -7px -7px 12px rgba(100, 100, 100, 0.452)"},w={},R={margin:0,marginLeft:"0.9rem",lineHeight:1.2,fontSize:a?"2.8em":"3.2em",fontWeight:a&&"600",borderBottom:"1px solid #aaa"},N={margin:"0 0 0 1rem",lineHeight:1},S={margin:"0 0 0 1rem",lineHeight:a?1.2:1},C={display:"flex",flexDirection:"column",justifyContent:"flex-end",color:"white",lineHeight:1,width:i?"80%":a?"65vw":"40vw",marginTop:a&&"1em",marginRight:!i&&"2em",paddingLeft:"10%",borderRight:!i&&"3px solid ",fontWeight:300,textAlign:!i&&"right"},L={height:"100vh",width:"100%",backgroundColor:"#292F36",paddingTop:i?"70px":a?"45px":0};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{style:x,className:i?"topCol":a&&c?"spaceCol":"centerRow",children:[Object(r.jsx)("div",{style:y,children:Object(r.jsx)(b.a,{src:o,roundedCircle:!0,style:p})}),Object(r.jsx)("div",{style:w,children:Object(r.jsxs)("div",{className:"text",style:u,children:[Object(r.jsxs)("h3",{style:N,children:["Hi"," ",Object(r.jsxs)("span",{role:"img","aria-label":"down",children:["\ud83d\udc4b"," "]}),", I'm"]}),Object(r.jsx)("h2",{style:R,children:"Riccardo Cogoni"}),Object(r.jsx)("h3",{style:{margin:"0.7rem 0 0.7rem 1rem",lineHeight:1},children:"Software Developer"}),Object(r.jsxs)("p",{style:S,children:["Motivated, personable Software Developer who loves to learn and creatively solve problems.Ambitious and excited to work on new projects and other challenging opportunities."," ",Object(r.jsx)(f.b,{to:"/about",children:"More about me..."})]}),Object(r.jsx)(f.b,{to:"/contact",children:Object(r.jsx)(g.a,{variant:"dark",style:{fontSize:"1rem",width:"fit-content",margin:"1em"},className:"main-button  shadow",children:"Get in touch!"})})]})})]}),Object(r.jsxs)("div",{style:Object(l.a)(Object(l.a)({},L),{},{backgroundColor:"#1D2C36"}),className:i?"topCol":a&&c?"spaceCol":"centerRow",children:[Object(r.jsx)("div",{style:y,children:Object(r.jsx)(b.a,{src:h,style:v})}),Object(r.jsx)("div",{style:w,children:Object(r.jsxs)("div",{className:"text",style:u,children:[Object(r.jsx)("h3",{style:N,children:"Recently made"}),Object(r.jsx)("h2",{style:R,children:"Between Spaces"}),Object(r.jsx)("h3",{style:{margin:"0.7rem 0 0.7rem 1rem",lineHeight:1},children:"Electron \u2022 Express \u2022 NodeJS"}),Object(r.jsxs)("p",{style:{margin:0,marginLeft:"1rem",lineHeight:a?1.2:1},children:["Between Spaces is an app prototype that allows you to move between desktop spaces with your phone.",Object(r.jsx)("div",{style:{marginLeft:a&&"2rem",fontSize:a&&"0.7em"},className:"startRow",children:Object(r.jsxs)(g.a,{variant:"dark",style:{fontSize:"1rem",width:"fit-content",margin:a?"1em 0.3em 1em 0.3em":"1em"},className:"main-button  shadow",href:"https://github.com/rico157/between-spaces",rel:"noreferrer",target:"_blank",children:[Object(r.jsx)(j.a,{style:{marginRight:"0.5em"}})," REPO"]})})]})]})})]}),Object(r.jsxs)("div",{style:Object(l.a)(Object(l.a)({},L),{},{backgroundColor:"#CBDEF2",marginTop:0}),className:i?"topCol reverse flex-end":a&&c?"spaceCol reverse":"centerRow",children:[Object(r.jsx)("div",{style:w,children:Object(r.jsxs)("div",{className:"text",style:Object(l.a)(Object(l.a)({},C),{},{color:"#292F36"}),children:[Object(r.jsx)("h3",{style:Object(l.a)(Object(l.a)({},N),{},{marginLeft:a&&"1rem",marginRight:!i&&"1rem"}),children:"Made with Northcoders"}),Object(r.jsx)("h2",{style:Object(l.a)(Object(l.a)({},R),{},{marginRight:"0.9rem",marginLeft:a&&"0.9rem"}),children:"Mates Rates"}),Object(r.jsx)("h3",{style:{margin:"0.7rem 1rem 0.7rem",marginLeft:a&&"1rem",lineHeight:1},children:"React Native \u2022 MongoDB \u2022 GraphQL"}),Object(r.jsxs)("p",{style:{margin:"0 1rem",lineHeight:a?1.2:1,marginLeft:a&&"1rem"},children:["Agile \u2022 MVP \u2022 Team Project",Object(r.jsx)("br",{}),"MatesRates allows users to search restaurants around the country and see reviews and ratings made by only their close friends. This way the user knows the reviews they read are trustworthy and meaningful."]}),Object(r.jsxs)("div",{style:{marginLeft:a&&"2rem",fontSize:a&&"0.7em"},className:"startRow flex-end",children:[Object(r.jsxs)(g.a,{variant:"dark",style:{fontSize:"1rem",width:"fit-content",margin:a?"1em 0.3em 1em 0.3em":"1em"},className:"main-button  shadow",href:"https://github.com/rico157/MatesRates",rel:"noreferrer",target:"_blank",children:[Object(r.jsx)(j.a,{style:{marginRight:"0.5em"}})," REPO"]}),Object(r.jsxs)(g.a,{variant:"dark",style:{fontSize:"1rem",width:"fit-content",margin:a?"1em 0.3em 1em 0.3em":"1em"},className:"main-button  shadow",href:"https://github.com/rico157/BE-Mates-Rates-1",rel:"noreferrer",target:"_blank",children:[Object(r.jsx)(j.a,{style:{marginRight:"0.5em"}})," API"]})]})]})}),Object(r.jsx)("div",{style:Object(l.a)(Object(l.a)({},y),{},{marginLeft:!i&&a&&"0em",marginRight:!i&&a&&"2em"}),children:Object(r.jsx)(b.a,{src:d,style:v})})]}),Object(r.jsxs)("div",{style:L,className:i?"topCol":a&&c?"spaceCol":"centerRow",children:[Object(r.jsx)("div",{style:y,children:Object(r.jsx)(b.a,{src:m,style:v})}),Object(r.jsx)("div",{style:w,children:Object(r.jsxs)("div",{className:"text",style:u,children:[Object(r.jsx)("h3",{style:{margin:0,marginLeft:"1rem",lineHeight:1},children:"Made with Northcoders"}),Object(r.jsx)("h2",{style:R,children:"Rico Fake News"}),Object(r.jsx)("h3",{style:{margin:0,marginLeft:"1rem",marginTop:"0.7rem",marginBottom:"0.7rem",lineHeight:1},children:"React \u2022 PostgreSQL \u2022 NodeJS"}),Object(r.jsx)("p",{style:{margin:0,marginLeft:"1rem",lineHeight:a?1.2:1},children:"Full-Stack social news aggregation, web content rating, and discussion web application developed with React, PostgreSQL and NodeJS."}),Object(r.jsxs)("div",{style:{margin:"0 1rem"},className:"startRow",children:[Object(r.jsxs)(g.a,{variant:"light",style:{fontSize:"1rem",width:"fit-content",margin:"1em"},className:"main-button  shadow",href:"https://github.com/rico157/rico-fake-news",rel:"noreferrer",target:"_blank",children:[Object(r.jsx)(j.a,{style:{marginRight:"0.5em"}})," REPO"]}),Object(r.jsxs)(g.a,{variant:"light",style:{fontSize:"1rem",width:"fit-content",margin:"1em"},className:"main-button  shadow",href:"https://github.com/rico157/rico-fake-news-api",rel:"noreferrer",target:"_blank",children:[Object(r.jsx)(j.a,{style:{marginRight:"0.5em"}})," API"]})]})]})})]}),Object(r.jsx)(k,{dim:{phone:i,smPhone:s,tablet:a,desktop:n,portrait:c}}),Object(r.jsx)(O,{})]})}var C=i(33);function L(e){var t=e.dim,i=t.phone,s=(t.tablet,{color:"white",fontSize:i?"2rem":"2.5rem",padding:i?"0.7rem 0.5rem":"0.05em 0.25em 0.2em",borderRadius:"50em",margin:"0.1rem",lineHeight:0});return Object(r.jsxs)("div",{style:{margin:"0.5em 0 0.5em 1em"},children:[i?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(f.b,{to:"/",style:s,className:"icon",children:Object(r.jsx)(C.a,{})}),Object(r.jsx)(f.b,{to:"/contact",style:s,className:"icon",children:Object(r.jsx)(C.b,{})})]}):void 0,i?void 0:Object(r.jsx)("a",{href:"https://github.com/rico157",target:"_blank",rel:"noreferrer",style:s,className:"icon",children:Object(r.jsx)(j.a,{})}),Object(r.jsx)("a",{href:"https://twitter.com/riccardo_cogoni",target:"_blank",rel:"noreferrer",style:s,className:"icon",children:Object(r.jsx)(j.c,{})}),Object(r.jsx)("a",{href:"https://www.linkedin.com/in/riccardo-cogoni/",target:"_blank",rel:"noreferrer",style:s,className:"icon",children:Object(r.jsx)(j.b,{})})]})}function H(e){var t=e.dim,i=t.phone,s=t.tablet,a={backgroundImage:"linear-gradient(50deg, #0f4667 0%, #2a6973 150%)",paddingTop:i?"0":"1rem",paddingBottom:i?"0":"1rem",paddingRight:s?"2rem":"3rem",minHeight:"70px"},n={outline:"none",border:"none",margin:"0.2rem 1em 0 1em",textAlign:"center",textDecoration:"none",display:"inline-block",fontSize:"0.9rem",color:"white"};return Object(r.jsxs)(x.a,{fixed:"top",variant:"dark",style:a,className:"nav-shadow",children:[Object(r.jsx)(p.a,{className:i?"m-auto":void 0,children:Object(r.jsx)(L,{dim:{phone:i,tablet:s}})}),Object(r.jsx)(p.a,{className:i?void 0:"mr-auto"}),!i&&Object(r.jsxs)(p.a,{className:"centerRow",children:[Object(r.jsx)(f.b,{style:n,to:"/",className:"main-shadow",children:"HOME"}),Object(r.jsx)(f.b,{style:n,to:"/about",className:"main-shadow",children:"ABOUT"}),Object(r.jsx)(f.b,{to:"/contact",children:Object(r.jsx)(g.a,{variant:"outline-light",className:"main-button main-shadow",style:{marginLeft:"2em"},children:"CONTACT"})})]})]})}var E=i(38);function F(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}i(55);var D=i(7),T=function(e){Object(w.a)(i,e);var t=Object(R.a)(i);function i(e){var r;return Object(u.a)(this,i),(r=t.call(this,e)).submitForm=r.submitForm.bind(Object(v.a)(r)),r.state={status:""},r}return Object(y.a)(i,[{key:"render",value:function(){var e=this.state.status;return Object(r.jsxs)("form",{onSubmit:this.submitForm,action:"https://formspree.io/f/moqpebej",method:"POST",style:{width:"100%",minHeight:"100%",padding:"100px 3em 3em 3em ",color:"#CFD8E3"},className:"centerCol",children:[Object(r.jsx)("h2",{style:{margin:" 0 0 1em 0",fontSize:"2rem",borderBottom:"1px solid #CFD8E3"},children:"Get in touch"}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{children:"Email:"}),Object(r.jsx)("input",{type:"email",name:"email",className:"form-control",style:{borderRadius:"3em"}})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{children:"Message:"}),Object(r.jsx)("textarea",{style:{borderRadius:"2em"},rows:"5",type:"text",name:"message",className:"form-control"})]}),"ERROR"===e&&Object(r.jsx)("p",{children:"Ooops! There was an error."}),"SUCCESS"===e?Object(r.jsx)("p",{children:"Thanks!"}):Object(r.jsx)(g.a,{variant:"outline-light",type:"submit",className:"main-button",children:"SEND"})]})}},{key:"submitForm",value:function(e){var t=this;e.preventDefault();var i=e.target,r=new FormData(i),s=new XMLHttpRequest;s.open(i.method,i.action),s.setRequestHeader("Accept","application/json"),s.onreadystatechange=function(){s.readyState===XMLHttpRequest.DONE&&(200===s.status?(i.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},s.send(r)}}]),i}(a.a.Component),B=i.p+"static/media/thanks.378e97a9.jpg",M=i.p+"static/media/stack.d3d95236.jpg",P=i.p+"static/media/me.4e3e41f7.jpg";function z(e){var t=e.dim,i=t.phone,s=(t.smPhone,t.tablet),a=(t.desktop,t.portrait),n={fontWeight:300,color:"white",lineHeight:1,width:i?"80%":s?"65vw":"40vw",marginTop:i&&"1em",marginLeft:!i&&"2em",paddingRight:!s&&"10%",paddingLeft:i&&"10%",borderLeft:!i&&"3px solid ",display:"flex",flexDirection:"column",justifyContent:"flex-end"},c={display:"flex",flexDirection:"column",justifyContent:"flex-end",color:"white",lineHeight:1,width:i?"80%":s?"65vw":"40vw",marginTop:s&&"1em",marginRight:!i&&"2em",paddingLeft:"10%",borderRight:!i&&"3px solid ",fontWeight:300,textAlign:!i&&"right"},o={height:i?"100%":"100vh",width:"100%",backgroundColor:"#292F36",paddingTop:i?"70px":s?"45px":0},m={width:i?"100%":s&&a?"70vw":"40vw",display:"flex",justifyContent:s?"center":"flex-end",alignItems:"flex-start",marginLeft:!i&&s&&"2em"},d={width:"100%",height:"auto",borderRadius:i?0:s?"2em":"3em",boxShadow:"7px 7px 12px rgba(20, 20, 20, 1), -7px -7px 12px rgba(100, 100, 100, 0.452)"},h={},j={},g={margin:0,marginLeft:"0.9rem",lineHeight:1.2,fontSize:s?"2.8em":"3.2em",fontWeight:s&&"600",borderBottom:"1px solid #aaa"};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{style:j,className:"section",children:Object(r.jsxs)("div",{style:Object(l.a)(Object(l.a)({},o),{},{backgroundColor:"#1D2C36"}),className:i?"topCol":s&&a?"spaceCol":"centerRow",children:[Object(r.jsx)("div",{style:m,children:Object(r.jsx)(b.a,{src:P,style:d})}),Object(r.jsx)("div",{style:h,children:Object(r.jsxs)("div",{className:"text",style:n,children:[Object(r.jsxs)("h2",{style:g,children:["About me..."," ",Object(r.jsxs)("span",{role:"img","aria-label":"down",children:["\ud83d\udc40"," "]})]}),Object(r.jsx)("h3",{style:{margin:"0.7rem 0 0.7rem 1rem",lineHeight:1},children:"Software Developer"}),Object(r.jsxs)("ul",{style:{margin:0,marginLeft:"1rem",lineHeight:1.2,listStyle:"none",padding:0},children:[Object(r.jsx)("li",{children:"I recently graduated from Northcoders, a multi-award-winning coding bootcamp. I have worked in an agile environment developing multiple projects."}),Object(r.jsx)("li",{children:"Made my first Android app prototype whilst working as a bartender, that showed a list of cocktail recipes to help my team and I learn new seasonal cocktails."}),Object(r.jsx)("li",{children:"I wrote my first line of code during my early teenage years and I spent most of them finding new ways to change and improve mobile software such as changing ROMs or using Xposed Framework with community made add-ons."})]})]})})]})}),Object(r.jsx)("div",{style:j,className:"section",children:Object(r.jsxs)("div",{style:Object(l.a)(Object(l.a)({},o),{},{backgroundColor:"#CBDEF2"}),className:i?"topCol reverse flex-end":s&&a?"spaceCol reverse":"centerRow",children:[Object(r.jsx)("div",{style:h,children:Object(r.jsxs)("div",{className:"text",style:Object(l.a)(Object(l.a)({},c),{},{color:"#292F36"}),children:[Object(r.jsx)("h3",{style:Object(l.a)(Object(l.a)({},{margin:"0 0 0 1rem",lineHeight:1}),{},{marginLeft:s&&"1rem",marginRight:!i&&"1rem"}),children:"What I've worked with"}),Object(r.jsx)("h2",{style:Object(l.a)(Object(l.a)({},g),{},{marginRight:"0.9rem",marginLeft:s&&"0.9rem"}),children:"Tech Stack"}),Object(r.jsx)("p",{children:Object(r.jsxs)("ul",{style:{margin:"0 1rem",lineHeight:s?1.2:1,marginLeft:s&&"1rem",listStyle:"none",padding:0},children:[Object(r.jsx)("li",{className:"list-title",children:"Frontend"}),Object(r.jsx)("li",{children:"ReactJS \u2022 Babel \u2022 Bootstrap"}),Object(r.jsx)("li",{className:"list-title",children:"Database"}),Object(r.jsx)("li",{children:"PostgreSQL \u2022 MongoDB"}),Object(r.jsx)("li",{className:"list-title",children:"Backend"}),Object(r.jsx)("li",{children:"Express \u2022 NodeJS"}),Object(r.jsx)("li",{className:"list-title",children:"UX / UI"}),Object(r.jsx)("li",{children:"Figma \u2022 Adobe XD \u2022 Photoshop"})]})})]})}),Object(r.jsx)("div",{style:Object(l.a)(Object(l.a)({},m),{},{marginLeft:!i&&s&&"0em",marginRight:!i&&s&&"2em"}),children:Object(r.jsx)(b.a,{src:M,style:d})})]})}),Object(r.jsx)("div",{style:j,className:"section",children:Object(r.jsxs)("div",{style:o,className:i?"topCol":s&&a?"spaceCol":"centerRow",children:[Object(r.jsx)("div",{style:m,children:Object(r.jsx)(b.a,{src:B,style:d})}),Object(r.jsx)("div",{style:h,children:Object(r.jsxs)("div",{className:"text",style:n,children:[Object(r.jsx)("h3",{style:{margin:0,marginLeft:"1rem",lineHeight:1},children:"What I used to make this website"}),Object(r.jsx)("h2",{style:g,children:"Acknowledgements"}),Object(r.jsx)("h3",{children:Object(r.jsxs)("ul",{style:{margin:0,marginLeft:"1rem",lineHeight:1.2,listStyle:"none",padding:0},children:[Object(r.jsx)("li",{className:"list-title",children:"Images"}),Object(r.jsxs)("li",{children:[Object(r.jsx)("a",{href:"https://unsplash.com/",target:"_blank",rel:"noreferrer",children:"Unsplash"})," ","\u2022"," ",Object(r.jsx)("a",{href:"https://www.pexels.com/",target:"_blank",rel:"noreferrer",children:"Pexels"})," "]}),Object(r.jsx)("li",{className:"list-title",children:"Packages"}),Object(r.jsxs)("li",{children:[Object(r.jsx)("a",{href:"https://react-icons.github.io/react-icons/",target:"_blank",rel:"noreferrer",children:"react-icons"})," ","\u2022"," ",Object(r.jsx)("a",{href:"https://react-bootstrap.github.io/",children:"react-bootstrap"})," "]}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://create-react-app.dev/docs/getting-started/",children:"create-react-app"})})]})})]})})]})})]})}var I=Object(D.f)((function(e){var t=e.history;return Object(s.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[t]),null}));var A=function(){var e=function(){var e=Object(s.useState)(F()),t=Object(E.a)(e,2),i=t[0],r=t[1];return Object(s.useEffect)((function(){function e(){r(F())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),i}(),t=e.width,i=e.height,a={phone:t<550,smPhone:t<550&&i<800,tablet:t<900,desktop:t<1100,portrait:t<i};return Object(r.jsx)(f.a,{children:Object(r.jsxs)("div",{className:"App",style:{},children:[Object(r.jsx)(H,{dim:Object(l.a)({},a)}),Object(r.jsx)(I,{}),Object(r.jsxs)(D.c,{children:[Object(r.jsx)(D.a,{path:"/about",children:Object(r.jsx)(z,{dim:Object(l.a)({},a)})}),Object(r.jsx)(D.a,{path:"/contact",children:Object(r.jsx)(k,{dim:Object(l.a)({},a)})}),Object(r.jsx)(D.a,{path:"/form",children:Object(r.jsx)(T,{dim:Object(l.a)({},a)})}),Object(r.jsx)(D.a,{path:"/",children:Object(r.jsx)(S,{dim:Object(l.a)({},a)})})]})]})})};c.a.render(Object(r.jsx)(A,{}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.3cc42dfd.chunk.js.map