(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{97:function(e,o,t){"use strict";t.r(o),t.d(o,"frontMatter",(function(){return f})),t.d(o,"metadata",(function(){return y})),t.d(o,"toc",(function(){return N})),t.d(o,"default",(function(){return C}));var n=t(3),a=t(7),l=t(0),i=t.n(l),r=t(102);const c="profile email https://www.googleapis.com/auth/drive";var s=null;function d(){gapi.client.init({apiKey:"",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],clientId:"904912626802-n83jojujgr5mdqjlt19grdnh7vucrtuc.apps.googleusercontent.com",scope:c}).then((function(){s=gapi.auth2.getAuthInstance(),console.log("initClient | GoogleAuth | isSignedIn",s.isSignedIn.get()),s.isSignedIn.listen(b);var e=s.currentUser.get();console.log("initClient | user",e),u()}),(function(e){console.error("initClient | error",e)}))}function b(e){console.log("updateSigninStatus",e),u();var o,t,n,a=s.currentUser.get();if(a.hasGrantedScopes(c)){console.log("registrando"),o=a.getBasicProfile().getEmail(),t=a.getBasicProfile().getId(),n=a.getBasicProfile().getName();var l=new XMLHttpRequest;l.open("GET","https://us-central1-ebook-livros-personalizados.cloudfunctions.net/registrarLogin?s=aeBookPersonalizar&id="+t+"&name="+n+"&email="+o,!0),l.send(null)}}function u(){var e,o,t,n=s.currentUser.get().hasGrantedScopes(c);console.log("updateComponents | isAuthorized",n),n?(e="visible",o="hidden",t=s.currentUser.get().getBasicProfile().getEmail()):(e="hidden",o="visible",t="");for(var a=document.getElementsByClassName("GoogleLogedIn"),l=a.length,i=0;i<l;i++)a[i].style.visibility=e;var r=document.getElementsByClassName("GoogleLogedOut");for(l=r.length,i=0;i<l;i++)r[i].style.visibility=o;var d=document.getElementsByClassName("GoogleDataEmail");for(l=d.length,i=0;i<l;i++)d[i].textContent=t}function g(){s.isSignedIn.get()?s.signOut():s.signIn()}const p=()=>{Object(l.useEffect)((()=>(((e,o,t,n,a,l)=>{const i=e.getElementsByTagName(o)[0],r=i;let c=i;c=e.createElement(o),c.id=t,c.src=n,r&&r.parentNode?r.parentNode.insertBefore(c,r):e.head.appendChild(c),c.onerror=l,c.onload=a})(document,"script","google-login","https://apis.google.com/js/api.js",(()=>{console.log("GoogleLogin | loadScript | sucesso na carga do script"),gapi.load("client:auth2",d)}),(e=>{console.error("GoogleLogin | loadScript | erro na carga do script",e)})),()=>{((e,o)=>{const t=document.getElementById(o);t&&t.parentNode.removeChild(t)})(0,"google-login"),console.log("ChekLogin | removeScript")})),[]);const[e,o]=Object(l.useState)(!1);return i.a.createElement("span",null)},m=e=>i.a.createElement("div",{className:"GoogleLogedIn",style:{visibility:"hidden"}},e.children),O=e=>i.a.createElement("div",{className:"GoogleLogedOut",style:{visibility:"hidden"}},e.children);class j extends i.a.Component{render(){return this.props.email?i.a.createElement("span",{className:"GoogleDataEmail"}):i.a.createElement("span",null)}}const h=e=>i.a.createElement("a",{href:"",onClick:g},e.children);t(153);var v=t(161),G=t(166),f={id:"preparando",title:"Preparando o ambiente"},y={unversionedId:"ONDG01/preparando",id:"ONDG01/preparando",isDocsHomePage:!1,title:"Preparando o ambiente",description:"Checklist",source:"@site/docs\\ONDG01\\preparando.mdx",slug:"/ONDG01/preparando",permalink:"/docs/ONDG01/preparando",version:"current",sidebar:"someSidebar",previous:{title:"Apresenta\xe7\xe3o",permalink:"/docs/"},next:{title:"Style Guide",permalink:"/docs/doc1"}},N=[{value:"Checklist",id:"checklist",children:[]},{value:"Conta no Google",id:"conta-no-google",children:[]},{value:"Habilitar o eBook",id:"habilitar-o-ebook",children:[]}],k={toc:N};function C(e){var o=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},k,t,{components:o,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"checklist"},"Checklist"),Object(r.b)("p",null,"Para poder usar este ",Object(r.b)("em",{parentName:"p"},"PowerBook")," voc\xea precisa de uma ",Object(r.b)("strong",{parentName:"p"},"licen\xe7a de uso")," e uma ",Object(r.b)("strong",{parentName:"p"},"conta no Google"),".\nConfira na tabela abaixo se voc\xea atende a estes requisitos."),Object(r.b)(p,{mdxType:"CheckGoogleLogin"}),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"Requisito"),Object(r.b)("th",null,"Estado"),Object(r.b)("th",null))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"Conta no Google"),Object(r.b)("td",null,Object(r.b)(m,{mdxType:"GoogleLogedIn"},Object(r.b)("center",null,"Voc\xea est\xe1 logado como ",Object(r.b)("b",null,Object(r.b)(j,{email:!0,mdxType:"GoogleLoginData"}))," ",Object(r.b)(v.a,{icon:G.a,size:"lg",color:"green",mdxType:"FontAwesomeIcon"}),".",Object(r.b)("br",null),"Se este n\xe3o \xe9 o seu e-mail ",Object(r.b)(h,{mdxType:"GoogleOpenLogin"},"clique aqui"),".")),Object(r.b)(O,{mdxType:"GoogleLogedOut"},"Voc\xea ainda n\xe3o logou com a sua conta do Google ",Object(r.b)(v.a,{icon:G.b,size:"lg",color:"red",mdxType:"FontAwesomeIcon"}),".",Object(r.b)("br",null),"Para logar ",Object(r.b)("b",null,Object(r.b)(h,{mdxType:"GoogleOpenLogin"},"clique aqui")),".")),Object(r.b)("td",null,"50")),Object(r.b)("tr",null,Object(r.b)("td",null,"Eve"),Object(r.b)("td",null,"Jackson"),Object(r.b)("td",null,"94")))),Object(r.b)("h2",{id:"conta-no-google"},"Conta no Google"),Object(r.b)("p",null,"Para utilizar este eBook \xe9 necess\xe1rio que voc\xea tenha uma ",Object(r.b)("strong",{parentName:"p"},"conta no Google"),". Se voc\xea usa o ",Object(r.b)("strong",{parentName:"p"},"Gmail"),", ent\xe3o voc\xea j\xe1 est\xe1 pronto. Use o seu login e senha do Gmail para ter acesso aos materiais e ferramentas que ser\xe3o apresentados."),Object(r.b)("p",null,"N\xe3o tem tem conta no Google? N\xe3o usa Gmail? N\xe3o tem problema, voc\xea pode criar uma conta gratuita ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://accounts.google.com/SignUp?hl=pt_BR&continue=https://myaccount.google.com/intro"}),"aqui"),"."),Object(r.b)("p",null,"O processo para criar a sua conta \xe9 simples. Se quiser ver como se faz, assista ao v\xeddeo abaixo."),Object(r.b)("h2",{id:"habilitar-o-ebook"},"Habilitar o eBook"),Object(r.b)(m,{mdxType:"GoogleLogedIn"},"Logado"),Object(r.b)(O,{mdxType:"GoogleLogedOut"},"Se voc\xea j\xe1 tem uma conta no Google voc\xea precisa habilit\xe1-la para poder utilizar este eBook. Para sabermos se a sua conta do Google j\xe1 foi habilitada para utilizar este material clique no bot\xe3o abaixo."))}C.isMDXComponent=!0}}]);