(this.webpackJsonpQaRtinka=this.webpackJsonpQaRtinka||[]).push([[0],{191:function(e,t,a){e.exports=a(302)},273:function(e,t,a){},274:function(e,t,a){e.exports=a.p+"static/media/jobs.36d787e1.jpg"},302:function(e,t,a){"use strict";a.r(t);a(192),a(218),a(220),a(221),a(223),a(224),a(225),a(226),a(227),a(228),a(229),a(230),a(232),a(233),a(234),a(235),a(236),a(237),a(238),a(239),a(240),a(241),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258),a(259),a(260);var n=a(0),r=a.n(n),c=a(64),o=a.n(c),s=a(39),l=a.n(s),i=a(66),u=a.n(i),m=a(92),d=a(49),f=a(103),g=a.n(f),p=a(102),b=a.n(p),h=(a(269),a(106)),v=a(93),E=a(94),j=a(105),O=a(95),k=a(107),q=a(98),I=a.n(q),N=a(99),w=a.n(N),R=a(65),S=a.n(R),x=a(31),y=a.n(x),C=a(101),z=a.n(C),A=a(100),Q=a.n(A),B=a(104),P=(a(270),a(272),a(96)),D=a.n(P),L=a(97),U=a.n(L),V=(a(273),a(274)),K=(Object(B.a)(),a(275)),W=a(276),J=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(j.a)(this,Object(O.a)(t).call(this,e))).state={qrImage:V,qrImageNew:"",qrParams:{text:"https://vk.com/coin#t34158861",correctLevel:3,dotScale:.4,size:1e3,margin:20,whiteMargin:!0,colorDark:"#000000",colorLight:"#ffffff",autoColor:!0,maskedDots:!1,backgroundDimming:"rgba(0,0,0,0)",gifBackground:void 0,logoImage:void 0,logoScale:.2,logoMargin:6,logoCornerRadius:8,binarize:!1,binarizeThreshold:128}},a}return Object(k.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=(t.go,this.state),c=n.qrImage,o=n.qrImageNew,s=n.qrParams,l=s.text;return r.a.createElement(I.a,{id:a,className:"Home"},r.a.createElement(w.a,null,"QR \u043a\u043e\u0434 \u0438\u0437 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438"),r.a.createElement(y.a,null,r.a.createElement("div",{className:"inputLabel"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d \u0432 QR-\u043a\u043e\u0434\u0435"),r.a.createElement(Q.a,{type:"text",defaultValue:l,onChange:function(t){return function(t,a){var n=t.target.value;K(e.setState((function(e){var t=Object(h.a)({},e.qrParams);return t[a]=n,{qrParams:t}})),1e3)}(t,"text")},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d \u0432 QR-\u043a\u043e\u0434\u0435",align:"center"})),r.a.createElement(y.a,{className:"qrBlock"},r.a.createElement(y.a,{className:"picture"},r.a.createElement("img",{className:"pictureImg",src:c,alt:"picture"})),r.a.createElement(y.a,{className:"qr"},r.a.createElement(U.a,Object.assign({className:"qrImg",bgSrc:c,callback:function(t){return function(t){o!==t&&K(e.setState({qrImageNew:t}),1e3)}(t)}},s)))),r.a.createElement(y.a,{className:"downloadButton"},r.a.createElement(z.a,{top:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",before:r.a.createElement(D.a,null),size:"l",onChange:function(t){var a=new FileReader;a.onloadend=function(){K(e.setState({qrImage:a.result}),1e3)},a.readAsDataURL(t.target.files[0])}},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0433\u0430\u043b\u0435\u0440\u0435\u044e")),r.a.createElement(y.a,{className:"downloadButton"},r.a.createElement(S.a,{size:"m",level:"2",onClick:function(){W.saveAs(o,"qr.png")}},"\u0421\u043a\u0430\u0447\u0430\u0442\u044c QR-\u043a\u043e\u0434")))}}]),t}(r.a.Component),M=function(){var e=Object(n.useState)("home"),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),s=Object(d.a)(o,2),i=s[0],f=s[1],p=Object(n.useState)(r.a.createElement(b.a,{size:"large"})),h=Object(d.a)(p,2),v=(h[0],h[1]);Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,f(t),v(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}l.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var r=document.createAttribute("scheme");r.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(r)}})),function(){e.apply(this,arguments)}()}),[]);return r.a.createElement(g.a,{activePanel:a},r.a.createElement(J,{id:"home",fetchedUser:i,go:function(e){c(e.currentTarget.dataset.to)}}))};l.a.send("VKWebAppInit"),o.a.render(r.a.createElement(M,null),document.getElementById("root"))}},[[191,1,2]]]);
//# sourceMappingURL=main.90a66b8d.chunk.js.map