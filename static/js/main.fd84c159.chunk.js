(this.webpackJsonpbrunoink=this.webpackJsonpbrunoink||[]).push([[0],{147:function(e,t,a){},148:function(e,t,a){e.exports=a.p+"static/media/test1.d468d607.md"},149:function(e,t,a){e.exports=a.p+"static/media/test2.bc655494.md"},150:function(e,t,a){e.exports=a.p+"static/media/test3.d05dce4f.md"},153:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(40),c=a.n(r),l=(a(50),a(1)),i=a(2),s=a(4),u=a(3),m=(a(51),a(30),a(5)),d=a(7),p=(a(52),a(53),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={someKey:"someValue"},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"popover-container "+this.props.className},o.a.createElement("div",{className:"popover-qr-code"},o.a.createElement("img",{src:this.props.qrcode,alt:this.props.alt})))}},{key:"componentDidMount",value:function(){this.setState({someKey:"otherValue"})}}]),a}(o.a.Component)),h=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={popoverIsToggleOn:!1},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"button-container"},o.a.createElement(p,{className:"hide",qrcode:"../img/wechat-qrcode.png"}),o.a.createElement("a",{className:"button-link",href:this.props.href,target:this.props.target},o.a.createElement("button",{className:this.props.className,style:this.props.style,title:this.props.title},o.a.createElement("span",null,this.props.text))))}},{key:"componentDidMount",value:function(){}}]),a}(o.a.Component),f=(a(54),a(55),o.a.Component,function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"content"},o.a.createElement("h1",{className:"welcome-headline","data-aos":"fade-in","data-aos-delay":"0"},"Hi, Here is Bruno"),o.a.createElement("p",{className:"welcome-description","data-aos":"fade-in","data-aos-delay":"100"},"I'm an UE Designer, Web Designer and Coder. ",o.a.createElement("span",{class:"sub"},"Now being employed in a Chinese technology corporation, managing the system of design. Moreover, React and Sketch Plugin Development are also what I am currently involving with.")),o.a.createElement("div",{className:"content-nav"},o.a.createElement(d.b,{"data-aos":"fade-in","data-aos-delay":"200",to:"",type:"",text:"Portfolio (Coming Soon)",className:"icon-right text-32 disabled",title:"Coming Soon.."},"Portfolio (Coming Soon)"),o.a.createElement(d.b,{"data-aos":"fade-in","data-aos-delay":"250",to:"/brunoink/blog",type:"",text:"Blog",className:"icon-right text-32"},"Blog"),o.a.createElement(d.b,{"data-aos":"fade-in","data-aos-delay":"300",to:"/brunoink/about-me",type:"",text:"About Me",className:"icon-right text-32"},"About Me")),o.a.createElement("div",{className:"social-media"},o.a.createElement(h,{href:"https://www.linkedin.com/in/bruno-dai-b6173b11a/",target:"_blank",className:"tertiary-light social-media linkedin"}),o.a.createElement(h,{className:"tertiary-light social-media weixin"}),o.a.createElement(h,{href:"mailto:brunoming1996@gmail.com",className:"tertiary-light social-media envelop"})))}}]),a}(o.a.Component)),b=(a(61),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={someKey:"someValue"},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(d.c,{to:"/brunoink",className:"backindex"},"Back")}},{key:"componentDidMount",value:function(){this.setState({someKey:"otherValue"})}}]),a}(o.a.Component)),v=(a(62),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={someKey:"someValue"},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("header",null,o.a.createElement(b,null),o.a.createElement("h1",null,this.props.headline))}},{key:"componentDidMount",value:function(){this.setState({someKey:"otherValue"})}}]),a}(o.a.Component)),y=(a(63),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(d.c,{className:"blog-list-container",to:this.props.url,activeClassName:"active"},o.a.createElement("li",{className:"blog-list"},o.a.createElement("h2",{className:"blog-list-headline"},this.props.title),o.a.createElement("p",{className:"blog-list-date"},this.props.date)))}}]),a}(o.a.Component)),E=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={blogContent:a(64)},e}return Object(i.a)(n,[{key:"render",value:function(){return this.state.blogContent.map((function(e){return o.a.createElement(y,{title:e.title,date:e.date,url:"/brunoink/blog/article/"+e.url})}))}}]),n}(o.a.Component),O=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"content","data-aos":"fade-left"},o.a.createElement(v,{headline:"Blog"}),o.a.createElement("ul",{className:"blog-content"},o.a.createElement(E,null)))}},{key:"componentDidMount",value:function(){window.scrollTo(0,0)}}]),a}(o.a.Component),j=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={someKey:"someValue"},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"content","data-aos":"fade-left"},o.a.createElement(v,{headline:"About Me"}))}},{key:"componentDidMount",value:function(){this.setState({someKey:"otherValue"}),window.scrollTo(0,0)}}]),a}(o.a.Component),k=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={someKey:"someValue"},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"content"},o.a.createElement(b,null),o.a.createElement("h1",null,"Contact"))}},{key:"componentDidMount",value:function(){this.setState({someKey:"otherValue"}),window.scrollTo(0,0)}}]),a}(o.a.Component),g=(a(65),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={someKey:"someValue"},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"content"},o.a.createElement(b,null),o.a.createElement("div",{className:"QRCode"}))}},{key:"componentDidMount",value:function(){this.setState({someKey:"otherValue"})}}]),a}(o.a.Component)),w=(a(66),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={someKey:"someValue"},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"notfound content"},o.a.createElement("h1",null,"404",o.a.createElement("br",null),"Not",o.a.createElement("br",null),"Found"),o.a.createElement(h,{className:"secondary-light xxl icon-right",text:"Back to Home",href:"/brunoink"}))}},{key:"componentDidMount",value:function(){this.setState({someKey:"otherValue"})}}]),a}(o.a.Component)),N=a(44),C=(a(67),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={someKey:"someValue"},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{class:"swiper-container"},o.a.createElement("div",{class:"swiper-wrapper"},o.a.createElement("div",{class:"swiper-slide slide-1"}),o.a.createElement("div",{class:"swiper-slide slide-2"}),o.a.createElement("div",{class:"swiper-slide slide-3"})))}},{key:"componentDidMount",value:function(){this.setState({someKey:"otherValue"}),new N.a(".swiper-container",{fadeEffect:{crossFade:!0},autoplay:{delay:8e3},effect:"fade",speed:1e3,loop:!0}).width=.667*window.innerWidth}}]),a}(o.a.Component)),x=a(42),M=a.n(x),S=(a(147),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={markdown:""},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.markdown;return o.a.createElement("div",null,o.a.createElement(M.a,{source:e})," // \u6e32\u67d3\u83b7\u53d6\u7684 markdown \u6587\u6863")}},{key:"componentWillMount",value:function(){var e=this,t=a(39)("./"+this.props.url+".md");fetch(t).then((function(e){return e.text()})).then((function(t){return e.setState({markdown:t})}))}},{key:"componentDidUpdate",value:function(){var e=this,t=a(39)("./"+this.props.url+".md");fetch(t).then((function(e){return e.text()})).then((function(t){return e.setState({markdown:t})}))}}]),n}(o.a.PureComponent)),D=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.call(this)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.match.params;return o.a.createElement("div",{className:"blog-article"},o.a.createElement("article",{className:"blog-article-container","data-aos":"fade-up"},o.a.createElement(S,{url:e.source})))}}]),a}(o.a.PureComponent),K=Object(m.f)(D),V=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"app-left"},o.a.createElement(m.c,null,o.a.createElement(m.a,{exact:!0,path:"/brunoink",component:f}),o.a.createElement(m.a,{path:["/brunoink/blog","/brunoink/blog/article"],component:O}),o.a.createElement(m.a,{path:"/brunoink/about-me",component:j}),o.a.createElement(m.a,{path:"/brunoink/contact",component:k}),o.a.createElement(m.a,{path:"/brunoink/wechat",component:g}),o.a.createElement(m.a,{component:w})))}}]),a}(o.a.Component),B=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"app-right"},o.a.createElement(m.c,null,o.a.createElement(m.a,{path:"/brunoink/blog/article/:source",component:K}),o.a.createElement(m.a,{component:C})))}}]),a}(o.a.Component),T=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={show:!0},e.onToggle=function(){return e.setState({show:!e.state.show})},e}return Object(i.a)(a,[{key:"render",value:function(){this.state.show;return o.a.createElement("main",null,o.a.createElement(d.a,null,o.a.createElement(V,null),o.a.createElement(B,null)))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(151);var J=a(43),A=a.n(J);a(152);A.a.init({once:!0,duration:800}),c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},39:function(e,t,a){var n={"./test1.md":148,"./test2.md":149,"./test3.md":150};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=39},45:function(e,t,a){e.exports=a(153)},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e){e.exports=JSON.parse('[{"title":"Test 1","date":"Jan 1,2020","type":"Blog","url":"test1"},{"title":"Test 2","date":"Jan 1,2020","type":"Blog","url":"test2"},{"title":"Test 3","date":"Jan 1,2020","type":"Blog","url":"test3"}]')},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){}},[[45,1,2]]]);
//# sourceMappingURL=main.fd84c159.chunk.js.map