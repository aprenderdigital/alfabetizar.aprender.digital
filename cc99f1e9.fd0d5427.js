(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{97:function(e,o,t){"use strict";t.r(o),t.d(o,"frontMatter",(function(){return N})),t.d(o,"metadata",(function(){return k})),t.d(o,"toc",(function(){return x})),t.d(o,"default",(function(){return L}));var n=t(3),a=t(7),l=t(0),c=t.n(l),i=t(102);const r="profile email https://www.googleapis.com/auth/drive";var s=null;function d(){gapi.client.init({apiKey:"",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],clientId:"129104259490-61g6fna8aosjd3tce943m92lpcdod4ap.apps.googleusercontent.com",scope:r}).then((function(){s=gapi.auth2.getAuthInstance(),console.log("initClient | GoogleAuth | isSignedIn",s.isSignedIn.get()),s.isSignedIn.listen(b);var e=s.currentUser.get();console.log("initClient | user",e),u()}),(function(e){console.error("initClient | error",e)}))}function b(e){console.log("updateSigninStatus",e),u();var o,t,n,a=s.currentUser.get();if(a.hasGrantedScopes(r)){console.log("registrando"),o=a.getBasicProfile().getEmail(),t=a.getBasicProfile().getId(),n=a.getBasicProfile().getName();var l=new XMLHttpRequest;l.open("GET","https://us-central1-ebook-livros-personalizados.cloudfunctions.net/registrarLogin?s=aeBookPersonalizar&id="+t+"&name="+n+"&email="+o,!0),l.send(null)}}function u(){var e,o,t,n=s.currentUser.get().hasGrantedScopes(r);console.log("updateComponents | isAuthorized",n),n?(e="inline",o="none",t=s.currentUser.get().getBasicProfile().getEmail()):(e="none",o="inline",t="");for(var a=document.getElementsByClassName("GoogleLogedIn"),l=a.length,c=0;c<l;c++)a[c].style.display=e;var i=document.getElementsByClassName("GoogleLogedOut");for(l=i.length,c=0;c<l;c++)i[c].style.display=o;var d=document.getElementsByClassName("GoogleDataEmail");for(l=d.length,c=0;c<l;c++)d[c].textContent=t}function p(){s.isSignedIn.get()?s.signOut():s.signIn()}const m=()=>(Object(l.useEffect)((()=>(((e,o,t,n,a,l)=>{const c=e.getElementsByTagName(o)[0],i=c;let r=c;r=e.createElement(o),r.id=t,r.src=n,i&&i.parentNode?i.parentNode.insertBefore(r,i):e.head.appendChild(r),r.onerror=l,r.onload=a})(document,"script","google-login","https://apis.google.com/js/api.js",(()=>{console.log("GoogleLogin | loadScript | sucesso na carga do script"),gapi.load("client:auth2",d)}),(e=>{console.error("GoogleLogin | loadScript | erro na carga do script",e)})),()=>{((e,o)=>{const t=document.getElementById(o);t&&t.parentNode.removeChild(t)})(0,"google-login"),console.log("ChekLogin | removeScript")})),[]),c.a.createElement("span",null)),g=e=>c.a.createElement("div",{className:"GoogleLogedIn",style:{display:"none"}},e.children),O=e=>c.a.createElement("div",{className:"GoogleLogedOut",style:{display:"none"}},e.children);class j extends c.a.Component{render(){return this.props.email?c.a.createElement("span",{className:"GoogleDataEmail"}):c.a.createElement("span",null)}}const h=e=>c.a.createElement("a",{href:"",onClick:p},e.children);var v=t(155),G=t.n(v),y=t(134),f=t(135);var w=e=>c.a.createElement("div",{className:"admonition admonition-tip alert alert--success"},c.a.createElement("div",{className:"admonition-heading"},c.a.createElement("h5",null,c.a.createElement(y.a,{icon:f.b,size:"2x",color:"white"}),"\xa0 \xa0PowerBook")),c.a.createElement("div",{className:"admonition-content"},c.a.createElement("p",null,e.children))),N={id:"preparando",title:"Preparando o ambiente"},k={unversionedId:"ONDG01/preparando",id:"ONDG01/preparando",isDocsHomePage:!1,title:"Preparando o ambiente",description:"Checklist",source:"@site/docs\\ONDG01\\preparando.mdx",slug:"/ONDG01/preparando",permalink:"/docs/ONDG01/preparando",version:"current",sidebar:"someSidebar",previous:{title:"Apresenta\xe7\xe3o",permalink:"/docs/"},next:{title:"Style Guide",permalink:"/docs/doc1"}},x=[{value:"Checklist",id:"checklist",children:[]},{value:"Conta no Google",id:"conta-no-google",children:[]},{value:"Habilitar o PowerBook",id:"habilitar-o-powerbook",children:[]}],E={toc:x};function L(e){var o=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},E,t,{components:o,mdxType:"MDXLayout"}),Object(i.b)(m,{mdxType:"CheckGoogleLogin"}),Object(i.b)("h2",{id:"checklist"},"Checklist"),Object(i.b)("p",null,"Para poder usar este ",Object(i.b)("em",{parentName:"p"},"PowerBook")," voc\xea precisa de uma ",Object(i.b)("strong",{parentName:"p"},"licen\xe7a de uso")," e uma ",Object(i.b)("strong",{parentName:"p"},"conta no Gmail"),".\nConfira na tabela abaixo se voc\xea atende a estes requisitos."),Object(i.b)("table",null,Object(i.b)("thead",null,Object(i.b)("tr",null,Object(i.b)("th",null,"Requisito"),Object(i.b)("th",null,"Estado"),Object(i.b)("th",null))),Object(i.b)("tbody",null,Object(i.b)("tr",null,Object(i.b)("td",null,"Conta no Google"),Object(i.b)("td",null,Object(i.b)(g,{mdxType:"GoogleLogedIn"},Object(i.b)("center",null,Object(i.b)(y.a,{icon:f.a,size:"lg",color:"green",mdxType:"FontAwesomeIcon"}))),Object(i.b)(O,{mdxType:"GoogleLogedOut"},Object(i.b)("center",null,Object(i.b)(y.a,{icon:f.c,size:"lg",color:"red",mdxType:"FontAwesomeIcon"})))),Object(i.b)("td",null,Object(i.b)(g,{mdxType:"GoogleLogedIn"},"Voc\xea est\xe1 logado como ",Object(i.b)("b",null,Object(i.b)(j,{email:!0,mdxType:"GoogleLoginData"})),".",Object(i.b)("br",null),"Se este n\xe3o \xe9 o seu e-mail ",Object(i.b)(h,{mdxType:"GoogleOpenLogin"},"clique aqui"),"."),Object(i.b)(O,{mdxType:"GoogleLogedOut"},"Voc\xea ainda n\xe3o logou com a sua conta do Gmail."))),Object(i.b)("tr",null,Object(i.b)("td",null,"Licen\xe7a de uso"),Object(i.b)("td",null,Object(i.b)("center",null,Object(i.b)(y.a,{icon:f.a,size:"lg",color:"green",mdxType:"FontAwesomeIcon"}))),Object(i.b)("td",null,"Licen\xe7a de uso OK!")))),Object(i.b)(O,{mdxType:"GoogleLogedOut"},Object(i.b)(w,{mdxType:"DicaPowerbook"},"Ol\xe1!!! Identifiquei na table acima que voc\xea ainda ",Object(i.b)("b",null,"n\xe3o")," logou usando a sua ",Object(i.b)("b",null,"conta do Gmail"),". Se voc\xea j\xe1 tem uma conta Gmail ",Object(i.b)("b",null,Object(i.b)(h,{mdxType:"GoogleOpenLogin"},"clique aqui e fa\xe7a o seu login")),".")),Object(i.b)("h2",{id:"conta-no-google"},"Conta no Google"),Object(i.b)("p",null,"Para utilizar este ",Object(i.b)("em",{parentName:"p"},"PoweBook")," \xe9 necess\xe1rio que voc\xea tenha uma ",Object(i.b)("strong",{parentName:"p"},"conta no Google"),". Se voc\xea usa o ",Object(i.b)("strong",{parentName:"p"},"Gmail"),",\nent\xe3o voc\xea j\xe1 est\xe1 pronto. Use o seu login e senha do Gmail para ter acesso aos materiais e ferramentas que ser\xe3o apresentados."),Object(i.b)("p",null,"N\xe3o tem tem conta no Google? N\xe3o usa Gmail? N\xe3o tem problema,\nvoc\xea pode criar ",Object(i.b)("strong",{parentName:"p"},"uma conta gratuita ",Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"https://accounts.google.com/SignUp?hl=pt_BR&continue=https://myaccount.google.com/intro"}),"aqui")),"."),Object(i.b)("p",null,"O processo para criar a sua conta \xe9 simples. Se quiser ver como se faz, assista ao v\xeddeo abaixo."),Object(i.b)("center",null,Object(i.b)(G.a,{url:"https://www.youtube.com/watch?v=7ziosTqdyJ4",mdxType:"ReactPlayer"})),Object(i.b)("br",null),Object(i.b)(O,{mdxType:"GoogleLogedOut"},Object(i.b)(w,{mdxType:"DicaPowerbook"},"Oi!!! Identifiquei que voc\xea ainda ",Object(i.b)("b",null,"n\xe3o")," logou usando a sua ",Object(i.b)("b",null,"conta do Gmail"),". Se voc\xea j\xe1 tem uma conta Gmail ",Object(i.b)("b",null,Object(i.b)(h,{mdxType:"GoogleOpenLogin"},"clique aqui e fa\xe7a o seu login")),".")),Object(i.b)("h2",{id:"habilitar-o-powerbook"},"Habilitar o PowerBook"),Object(i.b)("p",null,"Para receber uma licen\xe7a de uso deste ",Object(i.b)("em",{parentName:"p"},"PowerBook")," voc\xea precisa ter participado de um dos nossos ",Object(i.b)("em",{parentName:"p"},"workshops"),".\nSua participa\xe7\xe3o \xe9 muito importante para podermos apresentar todos os recursos dispon\xedveis que est\xe3o dispon\xedveis aqui. \ud83d\ude42"))}L.isMDXComponent=!0}}]);