(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(41)},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(12),c=n.n(r),o=(n(20),n(4)),l=n(5),s=n(7),d=n(6),u=n(8),m=n(43),p=n(44),v=(n(22),n(24),n(26),n(28),function(e){return i.a.createElement("button",{className:"btn-solid",style:e.customStyle,onClick:function(t){t.preventDefault(),t.target.blur(),e.onClick()},disabled:e.isDisabled,tabIndex:e.tabIndex},e.icon,e.title)});v.defaultProps={customStyle:{height:"100%",width:"100%"},isDisabled:!1};var f=v,h=function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.id,n=(e.iconUrl,e.title),a=e.description;e.cardType;return i.a.createElement("div",{className:"card-container"},i.a.createElement("div",{className:"section-1"},i.a.createElement("div",{className:"logo"}),i.a.createElement("div",{className:"title"},n),i.a.createElement("div",{className:"description"},a)),i.a.createElement(f,{onClick:function(){window.alert("order Item "+t)},title:"Order",customStyle:{width:"50px"}}))}}]),t}(a.Component);h.defaultProps={};var b=h,y=(n(30),n(32),function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){this.props.title;return i.a.createElement("div",{className:"header-container"},i.a.createElement("div",{className:"section-1"},i.a.createElement("img",{src:"/logo.jpg"})),i.a.createElement("div",{className:"section-2"},i.a.createElement("div",{className:"item"}),i.a.createElement("div",{className:"item"}),i.a.createElement("div",{className:"item"}),i.a.createElement("div",{className:"item"})))}}]),t}(a.Component));y.defaultProps={};var E=y,w=(n(34),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).menuItems=[{id:1,title:"H",isActive:!0},{id:2,title:"C",isActive:!1},{id:1,title:"P",isActive:!1}],n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.orientation,t="nav-bar-container";t+="horizantal"===e?"nav-horizantal":" nav-vertical";var n=this.menuItems.map(function(t,n){var a="";return t.isActive&&(a="active"),a+="horizantal"===e?"item-menu-h":" item-menu-v",i.a.createElement("div",{className:a},t.title)});return i.a.createElement("div",{className:t},n)}}]),t}(a.Component));w.defaultProps={orientation:"vertical"};var O=w,j=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).getCardView=function(e,t){var n=[],a=1,r={},c=0,o=!0,l=!1,s=void 0;try{for(var d,u=e[Symbol.iterator]();!(o=(d=u.next()).done);o=!0){var m=d.value;a%t===0?(r[c].push(i.a.createElement(b,m)),c++):r[c]?r[c].push(i.a.createElement(b,m)):(r[c]=[],r[c].push(i.a.createElement(b,m))),a++}}catch(v){l=!0,s=v}finally{try{o||null==u.return||u.return()}finally{if(l)throw s}}for(var p in r)r.hasOwnProperty(p)&&n.push(i.a.createElement("div",{style:{display:"flex"}},r[p]));return n},n.state={},n.homeData={simpleCards:[{id:1,iconUrl:"",title:"Blog Post",description:"400 - 500 words",cardType:1},{id:2,iconUrl:"",title:"White Paper",description:"2500 - 3000 words",cardType:1},{id:3,iconUrl:"",title:"Website content",description:"250 - 300 words",cardType:1},{id:4,iconUrl:"",title:"Press Release",description:"350 - 450 words",cardType:1},{id:5,iconUrl:"",title:"Product Description",description:"400 - 500 words",cardType:1},{id:6,iconUrl:"",title:"Social Media",description:"2500 - 3000 words",cardType:1},{id:7,iconUrl:"",title:"Story Writing",description:"250 - 300 words",cardType:1},{id:8,iconUrl:"",title:"Video Script",description:"350 - 450 words",cardType:1},{id:9,iconUrl:"",title:"Newsletter",description:"250 - 300 words",cardType:1},{id:10,iconUrl:"",title:"Brochure Content",description:"350 - 450 words",cardType:1},{id:11,iconUrl:"",title:"Custom Content",description:"250 - 300 words",cardType:1},{id:12,iconUrl:"",title:"Contest",description:"350 - 450 words",cardType:1}],specialCards:[{id:5,iconUrl:"",title:"Order from Template",description:"You can get orders from templates",cardType:2},{id:6,iconUrl:"",title:"Order Via Template",description:"Its usefull when giving bulk orders",cardType:2}]},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",{className:"home-page-container"},i.a.createElement(E,null),i.a.createElement(O,{orientation:"vertical"}),i.a.createElement("div",{className:"content-container"},this.getCardView(this.homeData.simpleCards,4),this.getCardView(this.homeData.specialCards,2)))}}]),t}(a.Component);j.defaultProps={};var N=j,k=(n(36),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container_background"},i.a.createElement("div",{className:"inner_container"},i.a.createElement("div",{className:"container_404"},i.a.createElement("div",{className:"char_4"},"4"),i.a.createElement("div",{className:"oval_main"},i.a.createElement("div",{className:"oval_inner"},i.a.createElement("div",{className:"oval-1"}),i.a.createElement("div",{className:"oval-2"}))),i.a.createElement("div",{className:"char_4"},"4")),i.a.createElement("div",{className:"page-not-found"},"Page not found"),i.a.createElement("a",{href:"/"},i.a.createElement("button",{className:"btn_browse"},"Go to Home"))))}}]),t}(a.Component)),g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,null,i.a.createElement(p.a,{exact:!0,path:"/",component:N}),i.a.createElement(p.a,{path:"*",component:k}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=n(42);c.a.render(i.a.createElement(C.a,null,i.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,2,1]]]);
//# sourceMappingURL=main.103906d4.chunk.js.map