(window.webpackJsonpstellar_admin_react=window.webpackJsonpstellar_admin_react||[]).push([[47],{1173:function(e,a,t){"use strict";t.r(a),t.d(a,"BasicElements",(function(){return h}));var l=t(59),n=t(195),s=t(12),c=t(13),r=t(15),o=t(14),i=t(16),m=t(0),u=t.n(m),d=t(194),f=(t(222),t(364)),p=t.n(f),b=t(365),v=t.n(b),E=(t(284),t(1222)),h=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(r.a)(this,Object(o.a)(a).call(this))).state={startDate:new Date},e.handleChange=function(a){e.setState({startDate:a})},e.openModal=function(a,t){console.log(t),e.setState({modal:!0,audio:t})},e.onCloseMedia=function(a,t,l){a.stopPropagation(),console.log(t);var s=Object(n.a)(e.state.chapter);s[t].file.splice(l,1),console.log(s),e.setState({chapter:s})},e.onCloseMedia1=function(a,t,l,s){a.stopPropagation(),console.log(t);var c=Object(n.a)(e.state.chapter);c[t].session[l].file.splice(s,1),console.log(c),e.setState({chapter:c})},e.addSession=function(a,t){a.preventDefault();var l=Object(n.a)(e.state.chapter);l[t].session.push({id:e.state.chapter[t].session[e.state.chapter[t].session.length-1].id+1,name:"",file:[]}),e.setState({chapter:l})},e.addChapter=function(a){a.preventDefault();var t=Object(n.a)(e.state.chapter);t.push({id:e.state.chapter[e.state.chapter.length-1].id+1,name:"",file:[],session:[{id:1,name:"",file:[]}]}),e.setState({chapter:t})},e.onSubmitApi=function(e){},e.state={files:[],modal:!1,audio:[],chapter:[{id:1,name:"",file:[],session:[{id:1,name:"",file:[]}]}]},e.onDrop=function(a,t){var l;console.log(a);var s=Object(n.a)(e.state.chapter);(l=s[a].file).push.apply(l,Object(n.a)(t.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))),e.setState({chapter:s})},e.onDrop1=function(a,t,l){var s,c=Object(n.a)(e.state.chapter);console.log(c),(s=c[a].session[t].file).push.apply(s,Object(n.a)(l.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))),e.setState({chapter:c})},e}return Object(i.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){p.a.init()}},{key:"deleteSession",value:function(e,a,t){e.preventDefault();var l=Object(n.a)(this.state.chapter);l[a].session.splice(t,1),this.setState({chapter:l})}},{key:"deleteChapter",value:function(e,a){e.preventDefault();var t=Object(n.a)(this.state.chapter);t.splice(a,1),this.setState({chapter:t})}},{key:"render",value:function(){var e=this;return console.log(this.state.files),u.a.createElement("div",null,u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-12 grid-margin"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("form",{className:"form-sample",onSubmit:function(a){return e.onSubmitApi(a)}},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-6"},u.a.createElement(d.a.Group,null,u.a.createElement("label",{className:"col-sm-3 col-form-label"},"Book Logo"),u.a.createElement("div",{className:"custom-file col-sm-9"},u.a.createElement(d.a.Control,{type:"file",accept:"image/*",className:"form-control visibility-hidden",id:"customFileLang",lang:"es"}),u.a.createElement("label",{className:"custom-file-label",htmlFor:"customFileLang"},"Upload image")))),u.a.createElement("div",{className:"col-md-6"},u.a.createElement(d.a.Group,{className:"row"},u.a.createElement("label",{className:"col-sm-3 col-form-label"},"Book Name"),u.a.createElement("div",{className:"col-sm-9"},u.a.createElement(d.a.Control,{type:"text"}))))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-6"},u.a.createElement(d.a.Group,{className:"row"},u.a.createElement("label",{className:"col-sm-3 col-form-label"},"Book Summary"),u.a.createElement("div",{className:"col-sm-9"},u.a.createElement("textarea",{rows:5,className:"form-control"})))),u.a.createElement("div",{className:"col-md-6"},u.a.createElement(d.a.Group,{className:"row"},u.a.createElement("label",{className:"col-sm-3 col-form-label"},"Publication Name"),u.a.createElement("div",{className:"col-sm-9"},u.a.createElement(d.a.Control,{type:"text"}))))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-6"},u.a.createElement(d.a.Group,{className:"row"},u.a.createElement("label",{className:"col-sm-3 col-form-label"},"Year"),u.a.createElement("div",{className:"col-sm-9"},u.a.createElement(d.a.Control,{type:"text"})))),u.a.createElement("div",{className:"col-md-6"},u.a.createElement(d.a.Group,{className:"row"},u.a.createElement("label",{className:"col-sm-3 col-form-label"},"Book Category"),u.a.createElement("div",{className:"col-sm-9"},u.a.createElement(d.a.Control,{type:"text"}))))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-6"},u.a.createElement(d.a.Group,{className:"row"},u.a.createElement("label",{className:"col-sm-3 col-form-label"},"Authors"),u.a.createElement("div",{className:"col-sm-9"},u.a.createElement(N,null)))),u.a.createElement("div",{className:"col-md-6"},u.a.createElement(d.a.Group,{className:"row"},u.a.createElement("label",{className:"col-sm-3 col-form-label"},"Tags"),u.a.createElement("div",{className:"col-sm-9"},u.a.createElement(O,null))))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-6"},u.a.createElement(d.a.Group,{className:"row"},u.a.createElement("label",{className:"col-sm-3 col-form-label"},"Version/Edition"),u.a.createElement("div",{className:"col-sm-9"},u.a.createElement(d.a.Control,{type:"text"})))),u.a.createElement("div",{className:"col-md-6"},u.a.createElement(d.a.Group,{className:"row"},u.a.createElement("label",{className:"col-sm-3 col-form-label"},"Exam"),u.a.createElement("div",{className:"col-sm-9"},u.a.createElement("select",{className:"form-control"},u.a.createElement("option",null),u.a.createElement("option",null,"MPSC"),u.a.createElement("option",null,"UPSC"),u.a.createElement("option",null,"MPPSC")))))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-6"},u.a.createElement(d.a.Group,{className:"row"},u.a.createElement("label",{className:"col-sm-3 col-form-label"},"Post"),u.a.createElement("div",{className:"col-sm-9"},u.a.createElement("select",{className:"form-control"},u.a.createElement("option",null),u.a.createElement("option",null,"IAS"),u.a.createElement("option",null,"IPS"),u.a.createElement("option",null,"PSI"),u.a.createElement("option",null,"ASO"),u.a.createElement("option",null,"RTO"))))),u.a.createElement("div",{className:"col-md-6"},u.a.createElement(d.a.Group,{className:"row"},u.a.createElement("label",{className:"col-sm-3 col-form-label"},"Publication"),u.a.createElement("div",{className:"col-sm-9"},u.a.createElement("select",{className:"form-control"},u.a.createElement("option",null),u.a.createElement("option",null,"Balbharti"),u.a.createElement("option",null,"NCERT"),u.a.createElement("option",null,"NIRALI"),u.a.createElement("option",null,"KSAGAR")))))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-6"},u.a.createElement(d.a.Group,{className:"row"},u.a.createElement("label",{className:"col-sm-3 col-form-label"},"Paper"),u.a.createElement("div",{className:"col-sm-4"},u.a.createElement("div",{className:"form-check"},u.a.createElement("label",{className:"form-check-label"},u.a.createElement("input",{type:"radio",className:"form-check-input",name:"ExampleRadio4",id:"membershipRadios1"})," PRE",u.a.createElement("i",{className:"input-helper"})))),u.a.createElement("div",{className:"col-sm-5"},u.a.createElement("div",{className:"form-check"},u.a.createElement("label",{className:"form-check-label"},u.a.createElement("input",{type:"radio",className:"form-check-input",name:"ExampleRadio4",id:"membershipRadios2"})," MAINS",u.a.createElement("i",{className:"input-helper"})))))),u.a.createElement("div",{className:"col-md-6"},u.a.createElement(d.a.Group,{className:"row"},u.a.createElement("label",{className:"col-sm-3 col-form-label"},"Subject"),u.a.createElement("div",{className:"col-sm-4"},u.a.createElement("div",{className:"form-check"},u.a.createElement("label",{className:"form-check-label"},u.a.createElement("input",{type:"radio",className:"form-check-input",name:"ExampleRadio5",id:"membershipRadios1"})," History",u.a.createElement("i",{className:"input-helper"})))),u.a.createElement("div",{className:"col-sm-5"},u.a.createElement("div",{className:"form-check"},u.a.createElement("label",{className:"form-check-label"},u.a.createElement("input",{type:"radio",className:"form-check-input",name:"ExampleRadio5",id:"membershipRadios2"}),"Geography",u.a.createElement("i",{className:"input-helper"}))))))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-6"},u.a.createElement(d.a.Group,{className:"row"},u.a.createElement("label",{className:"col-sm-3 col-form-label"},"Language"),u.a.createElement("div",{className:"col-sm-9"},u.a.createElement("select",{className:"form-control"},u.a.createElement("option",null),u.a.createElement("option",null,"Marathi"),u.a.createElement("option",null,"Hindi"),u.a.createElement("option",null,"English")))))),u.a.createElement("button",{type:"submit",className:"btn btn-primary mr-2"},"Submit")))))),u.a.createElement(E.a,{show:this.state.modal,onHide:function(){return e.setState({modal:!1})},"aria-labelledby":"example-modal-sizes-title-md"},u.a.createElement(E.a.Header,{closeButton:!0},u.a.createElement(E.a.Title,null,this.state.audio.name)),u.a.createElement(E.a.Body,null,u.a.createElement("audio",{style:{width:"100%"},src:this.state.audio.preview,controls:!0}))))}}]),a}(m.Component);a.default=h;var N=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(r.a)(this,Object(o.a)(a).call(this))).addUserInput=function(){var a=Object(n.a)(e.state.users);a.push({id:e.state.users[e.state.users.length-1].id+1,name:""}),e.setState({users:a})},e.state={users:[{id:1,name:""}]},e.inputChangeHandler=e.inputChangeHandler.bind(Object(l.a)(e)),e}return Object(i.a)(a,e),Object(c.a)(a,[{key:"inputChangeHandler",value:function(e,a){var t=this.state.users;t[a].name=e.target.value,this.setState(t)}},{key:"deleteUser",value:function(e){var a=Object(n.a)(this.state.users);a.splice(e,1),this.setState({users:a})}},{key:"render",value:function(){var e=this;return u.a.createElement("form",{className:"form-inline",onSubmit:function(e){e.preventDefault()}},u.a.createElement("div",{className:"d-flex flex-column"},this.state.users.map((function(a,t){return u.a.createElement("div",{key:a.id,className:"d-flex mb-2"},u.a.createElement("div",{className:"input-group mb-2 mr-sm-2 mb-sm-0"},u.a.createElement("div",{className:"input-group-prepend"},u.a.createElement("span",{className:"input-group-text"},"@")),u.a.createElement("input",{type:"text",className:"form-control",placeholder:"Add user",value:a.name,onChange:function(a){return e.inputChangeHandler(a,t)}})),t>0?u.a.createElement("button",{className:"btn btn-danger btn-sm icon-btn ml-2",onClick:function(){return e.deleteUser(t)}},u.a.createElement("i",{className:"icon-trash"})):null)}))),u.a.createElement("button",{className:"btn btn-info btn-sm icon-btn ml-2 mb-2",onClick:this.addUserInput},"+"))}}]),a}(m.Component),O=(m.Component,function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(r.a)(this,Object(o.a)(a).call(this,e))).state={tags:[{id:1,name:"Audiobook"},{id:2,name:"Podcast"},{id:3,name:"Textbook"},{id:4,name:"Inspiration"}],suggestions:[{id:5,name:"Motivation"},{id:6,name:"Songs"}]},t}return Object(i.a)(a,e),Object(c.a)(a,[{key:"handleDelete",value:function(e){var a=this.state.tags.slice(0);a.splice(e,1),this.setState({tags:a})}},{key:"handleAddition",value:function(e){var a=[].concat(this.state.tags,e);this.setState({tags:a})}},{key:"render",value:function(){return u.a.createElement(v.a,{tags:this.state.tags,suggestions:this.state.suggestions,allowNew:!0,handleDelete:this.handleDelete.bind(this),handleAddition:this.handleAddition.bind(this)})}}]),a}(m.Component))},135:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,s.default)((function(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];var n=null;return a.forEach((function(e){if(null==n){var a=e.apply(void 0,t);null!=a&&(n=a)}})),n}))};var l,n=t(131),s=(l=n)&&l.__esModule?l:{default:l};e.exports=a.default},143:function(e,a,t){"use strict";var l=t(1),n=t(4),s=t(8),c=t.n(s),r=t(0),o=t.n(r),i=t(11),m=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,r=e.as,u=void 0===r?"div":r,d=Object(n.a)(e,["bsPrefix","className","as"]),f=Object(i.b)(t,"col"),p=[],b=[];return m.forEach((function(e){var a,t,l,n=d[e];if(delete d[e],null!=n&&"object"===typeof n){var s=n.span;a=void 0===s||s,t=n.offset,l=n.order}else a=n;var c="xs"!==e?"-"+e:"";null!=a&&p.push(!0===a?""+f+c:""+f+c+"-"+a),null!=l&&b.push("order"+c+"-"+l),null!=t&&b.push("offset"+c+"-"+t)})),p.length||p.push(f),o.a.createElement(u,Object(l.a)({},d,{ref:a,className:c.a.apply(void 0,[s].concat(p,b))}))}));u.displayName="Col",a.a=u},194:function(e,a,t){"use strict";var l=t(1),n=t(4),s=t(8),c=t.n(s),r=t(0),o=t.n(r),i=(t(135),t(132)),m=t(123),u=t(11),d=o.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,i=e.bsCustomPrefix,d=e.className,f=e.isValid,p=e.isInvalid,b=e.isStatic,v=e.as,E=void 0===v?"input":v,h=Object(n.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),N=Object(r.useContext)(m.a),O=N.controlId;return s=N.custom?Object(u.b)(i,"custom-control-input"):Object(u.b)(s,"form-check-input"),o.a.createElement(E,Object(l.a)({},h,{ref:a,id:t||O,className:c()(d,s,f&&"is-valid",p&&"is-invalid",b&&"position-static")}))}));d.displayName="FormCheckInput",d.defaultProps={type:"checkbox"};var f=d,p=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,i=e.className,d=e.htmlFor,f=Object(n.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),p=Object(r.useContext)(m.a),b=p.controlId;return t=p.custom?Object(u.b)(s,"custom-control-label"):Object(u.b)(t,"form-check-label"),o.a.createElement("label",Object(l.a)({},f,{ref:a,htmlFor:d||b,className:c()(i,t)}))}));p.displayName="FormCheckLabel";var b=p,v=o.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,d=e.bsCustomPrefix,p=e.inline,v=e.disabled,E=e.isValid,h=e.isInvalid,N=e.feedback,O=e.className,y=e.style,j=e.title,g=e.type,x=e.label,C=e.children,w=e.custom,S=e.as,P=void 0===S?"input":S,k=Object(n.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),I="switch"===g||w;s=I?Object(u.b)(d,"custom-control"):Object(u.b)(s,"form-check");var F=Object(r.useContext)(m.a).controlId,L=Object(r.useMemo)((function(){return{controlId:t||F,custom:I}}),[F,I,t]),R=null!=x&&!1!==x&&!C,A=o.a.createElement(f,Object(l.a)({},k,{type:"switch"===g?"checkbox":g,ref:a,isValid:E,isInvalid:h,isStatic:!R,disabled:v,as:P}));return o.a.createElement(m.a.Provider,{value:L},o.a.createElement("div",{style:y,className:c()(O,s,I&&"custom-"+g,p&&s+"-inline")},C||o.a.createElement(o.a.Fragment,null,A,R&&o.a.createElement(b,{title:j},x),(E||h)&&o.a.createElement(i.a,{type:E?"valid":"invalid"},N))))}));v.displayName="FormCheck",v.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},v.Input=f,v.Label=b;var E=v,h=t(145),N=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.children,d=e.controlId,f=e.as,p=void 0===f?"div":f,b=Object(n.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(u.b)(t,"form-group");var v=Object(r.useMemo)((function(){return{controlId:d}}),[d]);return o.a.createElement(m.a.Provider,{value:v},o.a.createElement(p,Object(l.a)({},b,{ref:a,className:c()(s,t)}),i))}));N.displayName="FormGroup";var O=N,y=(t(43),t(143)),j=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.column,i=e.srOnly,d=e.className,f=e.htmlFor,p=Object(n.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),b=Object(r.useContext)(m.a).controlId;t=Object(u.b)(t,"form-label");var v=c()(d,t,i&&"sr-only",s&&"col-form-label");return f=f||b,s?o.a.createElement(y.a,Object(l.a)({as:"label",className:v,htmlFor:f},p)):o.a.createElement("label",Object(l.a)({ref:a,className:v,htmlFor:f},p))}));j.displayName="FormLabel",j.defaultProps={column:!1,srOnly:!1};var g=j,x=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,r=e.as,i=void 0===r?"small":r,m=e.muted,d=Object(n.a)(e,["bsPrefix","className","as","muted"]);return t=Object(u.b)(t,"form-text"),o.a.createElement(i,Object(l.a)({},d,{ref:a,className:c()(s,t,m&&"text-muted")}))}));x.displayName="FormText";var C=x,w=o.a.forwardRef((function(e,a){return o.a.createElement(E,Object(l.a)({},e,{ref:a,type:"switch"}))}));w.displayName="Switch",w.Input=E.Input,w.Label=E.Label;var S=w,P=t(44),k=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.inline,r=e.className,i=e.validated,m=e.as,d=void 0===m?"form":m,f=Object(n.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(u.b)(t,"form"),o.a.createElement(d,Object(l.a)({},f,{ref:a,className:c()(r,i&&"was-validated",s&&t+"-inline")}))}));k.displayName="Form",k.defaultProps={inline:!1},k.Row=Object(P.a)("form-row"),k.Group=O,k.Control=h.a,k.Check=E,k.Switch=S,k.Label=g,k.Text=C;a.a=k},364:function(e,a,t){e.exports=function(){"use strict";var e={CUSTOMFILE:'.custom-file input[type="file"]',CUSTOMFILELABEL:".custom-file-label",FORM:"form",INPUT:"input"},a=function(a){var t="",l=a.parentNode.querySelector(e.CUSTOMFILELABEL);return l&&(t=l.textContent),t},t=function(e){if(e.childNodes.length>0)for(var a=[].slice.call(e.childNodes),t=0;t<a.length;t++){var l=a[t];if(3!==l.nodeType)return l}return e},l=function(a){var l=a.bsCustomFileInput.defaultText,n=a.parentNode.querySelector(e.CUSTOMFILELABEL);n&&(t(n).textContent=l)},n=!!window.File,s=function(e){if(e.hasAttribute("multiple")&&n)return[].slice.call(e.files).map((function(e){return e.name})).join(", ");if(-1!==e.value.indexOf("fakepath")){var a=e.value.split("\\");return a[a.length-1]}return e.value};function c(){var a=this.parentNode.querySelector(e.CUSTOMFILELABEL);if(a){var n=t(a),c=s(this);c.length?n.textContent=c:l(this)}}function r(){for(var a=[].slice.call(this.querySelectorAll(e.INPUT)).filter((function(e){return!!e.bsCustomFileInput})),t=0,n=a.length;t<n;t++)l(a[t])}var o="reset",i="change";return{init:function(t,l){void 0===t&&(t=e.CUSTOMFILE),void 0===l&&(l=e.FORM);for(var n=[].slice.call(document.querySelectorAll(t)),s=[].slice.call(document.querySelectorAll(l)),m=0,u=n.length;m<u;m++){var d=n[m];Object.defineProperty(d,"bsCustomFileInput",{value:{defaultText:a(d)},writable:!0}),c.call(d),d.addEventListener(i,c)}for(var f=0,p=s.length;f<p;f++)s[f].addEventListener(o,r),Object.defineProperty(s[f],"bsCustomFileInput",{value:!0,writable:!0})},destroy:function(){for(var a=[].slice.call(document.querySelectorAll(e.FORM)).filter((function(e){return!!e.bsCustomFileInput})),t=[].slice.call(document.querySelectorAll(e.INPUT)).filter((function(e){return!!e.bsCustomFileInput})),n=0,s=t.length;n<s;n++){var m=t[n];l(m),m.bsCustomFileInput=void 0,m.removeEventListener(i,c)}for(var u=0,d=a.length;u<d;u++)a[u].removeEventListener(o,r),a[u].bsCustomFileInput=void 0}}}()}}]);
//# sourceMappingURL=47.e08edf6f.chunk.js.map