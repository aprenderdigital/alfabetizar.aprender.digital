(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{112:function(e,o,t){"use strict";t.r(o),t.d(o,"frontMatter",(function(){return k})),t.d(o,"metadata",(function(){return E})),t.d(o,"toc",(function(){return x})),t.d(o,"default",(function(){return C}));var n=t(3),a=t(7),c=t(0),l=t.n(c),i=t(118),r=t(4),s="profile email",u=null;function b(){gapi.client.init({apiKey:"",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],clientId:"303078380115-7285jhr8oi6t834lqfen90if3afjdckj.apps.googleusercontent.com",scope:s}).then((function(){u=gapi.auth2.getAuthInstance(),console.log("initClient | GoogleAuth | isSignedIn",u.isSignedIn.get()),u.isSignedIn.listen(d);var e=u.currentUser.get();console.log("initClient | user",e),p()}),(function(e){console.error("initClient | error",e)}))}function d(e){console.log("updateSigninStatus",e),p();var o,t,n,a=u.currentUser.get();if(a.hasGrantedScopes(s)){console.log("registrando"),o=a.getBasicProfile().getEmail(),t=a.getBasicProfile().getId(),n=a.getBasicProfile().getName();var c=new XMLHttpRequest;c.open("GET","https://us-central1-ebook-livros-personalizados.cloudfunctions.net/registrarLogin?s=aeBookPersonalizar&id="+t+"&name="+n+"&email="+o,!0),c.send(null)}}function p(){var e,o,t,n=u.currentUser.get().hasGrantedScopes(s);console.log("updateComponents | isAuthorized",n),n?(e="inline",o="none",t=u.currentUser.get().getBasicProfile().getEmail()):(e="none",o="inline",t="");for(var a=document.getElementsByClassName("GoogleLogedIn"),c=a.length,l=0;l<c;l++)a[l].style.display=e;var i=document.getElementsByClassName("GoogleLogedOut");for(c=i.length,l=0;l<c;l++)i[l].style.display=o;var r=document.getElementsByClassName("GoogleDataEmail");for(c=r.length,l=0;l<c;l++)r[l].textContent=t}function m(){u.isSignedIn.get()?u.signOut():u.signIn()}var g=function(){return Object(c.useEffect)((function(){return((e,o,t,n,a,c)=>{const l=e.getElementsByTagName(o)[0],i=l;let r=l;r=e.createElement(o),r.id=t,r.src=n,i&&i.parentNode?i.parentNode.insertBefore(r,i):e.head.appendChild(r),r.onerror=c,r.onload=a})(document,"script","google-login","https://apis.google.com/js/api.js",(function(){console.log("GoogleLogin | loadScript | sucesso na carga do script"),gapi.load("client:auth2",b)}),(function(e){console.error("GoogleLogin | loadScript | erro na carga do script",e)})),function(){((e,o)=>{const t=document.getElementById(o);t&&t.parentNode.removeChild(t)})(0,"google-login"),console.log("ChekLogin | removeScript")}}),[]),l.a.createElement("span",null)},O=function(e){return l.a.createElement("div",{className:"GoogleLogedIn",style:{display:"none"}},e.children)},j=function(e){return l.a.createElement("div",{className:"GoogleLogedOut",style:{display:"none"}},e.children)},h=function(e){function o(){return e.apply(this,arguments)||this}return Object(r.a)(o,e),o.prototype.render=function(){return this.props.email?l.a.createElement("span",{className:"GoogleDataEmail"}):l.a.createElement("span",null)},o}(l.a.Component),f=function(e){return l.a.createElement("a",{href:"",onClick:m},e.children)},v=t(136),y=t.n(v),G=t(130),N=t(131);var w=e=>l.a.createElement("div",{className:"admonition admonition-tip alert alert--success"},l.a.createElement("div",{className:"admonition-heading"},l.a.createElement("h5",null,l.a.createElement(G.a,{icon:N.d,size:"2x",color:"white"}),"\xa0 \xa0PowerBook")),l.a.createElement("div",{className:"admonition-content"},l.a.createElement("p",null,e.children))),k={id:"preparando-com-email",title:"Preparando o ambiente"},E={unversionedId:"ONDG01/preparando-com-email",id:"ONDG01/preparando-com-email",isDocsHomePage:!1,title:"Preparando o ambiente",description:"Checklist",source:"@site/docs\\ONDG01\\preparando-com-email.mdx",slug:"/ONDG01/preparando-com-email",permalink:"/docs/ONDG01/preparando-com-email",version:"current"},x=[{value:"Checklist",id:"checklist",children:[]},{value:"Conta no Google",id:"conta-no-google",children:[]},{value:"Habilitar o PowerBook",id:"habilitar-o-powerbook",children:[]}],L={toc:x};function C(e){var o=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},L,t,{components:o,mdxType:"MDXLayout"}),Object(i.b)(g,{mdxType:"CheckGoogleLogin"}),Object(i.b)("h2",{id:"checklist"},"Checklist"),Object(i.b)("p",null,"Para poder usar este ",Object(i.b)("em",{parentName:"p"},"PowerBook")," voc\xea precisa de uma ",Object(i.b)("strong",{parentName:"p"},"licen\xe7a de uso")," e uma ",Object(i.b)("strong",{parentName:"p"},"conta no Gmail"),".\nConfira na tabela abaixo se voc\xea atende a estes requisitos."),Object(i.b)("table",null,Object(i.b)("thead",null,Object(i.b)("tr",null,Object(i.b)("th",null,"Requisito"),Object(i.b)("th",null,"Estado"),Object(i.b)("th",null))),Object(i.b)("tbody",null,Object(i.b)("tr",null,Object(i.b)("td",null,"Conta no Google"),Object(i.b)("td",null,Object(i.b)(O,{mdxType:"GoogleLogedIn"},Object(i.b)("center",null,Object(i.b)(G.a,{icon:N.a,size:"lg",color:"green",mdxType:"FontAwesomeIcon"}))),Object(i.b)(j,{mdxType:"GoogleLogedOut"},Object(i.b)("center",null,Object(i.b)(G.a,{icon:N.e,size:"lg",color:"red",mdxType:"FontAwesomeIcon"})))),Object(i.b)("td",null,Object(i.b)(O,{mdxType:"GoogleLogedIn"},"Voc\xea est\xe1 logado como ",Object(i.b)("b",null,Object(i.b)(h,{email:!0,mdxType:"GoogleLoginData"})),".",Object(i.b)("br",null),"Se este n\xe3o \xe9 o seu e-mail ",Object(i.b)(f,{mdxType:"GoogleOpenLogin"},"clique aqui"),"."),Object(i.b)(j,{mdxType:"GoogleLogedOut"},"Voc\xea ainda n\xe3o logou com a sua conta do Gmail."))),Object(i.b)("tr",null,Object(i.b)("td",null,"Licen\xe7a de uso"),Object(i.b)("td",null,Object(i.b)("center",null,Object(i.b)(G.a,{icon:N.a,size:"lg",color:"green",mdxType:"FontAwesomeIcon"}))),Object(i.b)("td",null,"Licen\xe7a de uso OK!")))),Object(i.b)(j,{mdxType:"GoogleLogedOut"},Object(i.b)(w,{mdxType:"DicaPowerbook"},"Ol\xe1!!! Identifiquei na table acima que voc\xea ainda ",Object(i.b)("b",null,"n\xe3o")," logou usando a sua ",Object(i.b)("b",null,"conta do Gmail"),". Se voc\xea j\xe1 tem uma conta Gmail ",Object(i.b)("b",null,Object(i.b)(f,{mdxType:"GoogleOpenLogin"},"clique aqui e fa\xe7a o seu login")),".")),Object(i.b)("h2",{id:"conta-no-google"},"Conta no Google"),Object(i.b)("p",null,"Para utilizar este ",Object(i.b)("em",{parentName:"p"},"PoweBook")," \xe9 necess\xe1rio que voc\xea tenha uma ",Object(i.b)("strong",{parentName:"p"},"conta no Google"),". Se voc\xea usa o ",Object(i.b)("strong",{parentName:"p"},"Gmail"),",\nent\xe3o voc\xea j\xe1 est\xe1 pronto. Use o seu login e senha do Gmail para ter acesso aos materiais e ferramentas que ser\xe3o apresentados."),Object(i.b)("p",null,"N\xe3o tem tem conta no Google? N\xe3o usa Gmail? N\xe3o tem problema,\nvoc\xea pode criar ",Object(i.b)("strong",{parentName:"p"},"uma conta gratuita ",Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"https://accounts.google.com/SignUp?hl=pt_BR&continue=https://myaccount.google.com/intro"}),"aqui")),"."),Object(i.b)("p",null,"O processo para criar a sua conta \xe9 simples. Se quiser ver como se faz, assista ao v\xeddeo abaixo."),Object(i.b)("center",null,Object(i.b)(y.a,{url:"https://www.youtube.com/watch?v=7ziosTqdyJ4",mdxType:"ReactPlayer"})),Object(i.b)("br",null),Object(i.b)(j,{mdxType:"GoogleLogedOut"},Object(i.b)(w,{mdxType:"DicaPowerbook"},"Oi!!! Identifiquei que voc\xea ainda ",Object(i.b)("b",null,"n\xe3o")," logou usando a sua ",Object(i.b)("b",null,"conta do Gmail"),". Se voc\xea j\xe1 tem uma conta Gmail ",Object(i.b)("b",null,Object(i.b)(f,{mdxType:"GoogleOpenLogin"},"clique aqui e fa\xe7a o seu login")),".")),Object(i.b)("h2",{id:"habilitar-o-powerbook"},"Habilitar o PowerBook"),Object(i.b)("p",null,"Para receber uma licen\xe7a de uso deste ",Object(i.b)("em",{parentName:"p"},"PowerBook")," voc\xea precisa ter participado de um dos nossos ",Object(i.b)("em",{parentName:"p"},"workshops"),".\nSua participa\xe7\xe3o \xe9 muito importante para podermos apresentar todos os recursos dispon\xedveis que est\xe3o dispon\xedveis aqui. \ud83d\ude42"))}C.isMDXComponent=!0}}]);