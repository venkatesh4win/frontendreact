(window.webpackJsonpstellar_admin_react=window.webpackJsonpstellar_admin_react||[]).push([[48],{1202:function(e,t,a){"use strict";a.r(t),a.d(t,"EditAudio",(function(){return y}));var n=a(195),l=a(12),r=a(13),i=a(15),s=a(14),o=a(16),c=a(0),m=a.n(c),u=a(194),d=(a(222),a(364)),f=a.n(d),p=(a(365),a(284)),b=a(1222),v={display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:16},h={display:"inline-flex",borderRadius:2,border:"1px solid #eaeaea",marginBottom:8,marginRight:8,width:100,height:100,padding:4,boxSizing:"border-box"},E={display:"flex",width:"100%",alignItems:"center",justifyContent:"center"},y=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(s.a)(t).call(this))).state={startDate:new Date},e.handleChange=function(t){e.setState({startDate:t})},e.openModal=function(t,a){console.log(a),e.setState({modal:!0,audio:a})},e.onCloseMedia=function(t,a,l){t.stopPropagation(),console.log(a);var r=Object(n.a)(e.state.chapter);r[a].file.splice(l,1),console.log(r),e.setState({chapter:r})},e.onCloseMedia1=function(t,a,l,r){t.stopPropagation(),console.log(a);var i=Object(n.a)(e.state.chapter);i[a].session[l].file.splice(r,1),console.log(i),e.setState({chapter:i})},e.addSession=function(t,a){t.preventDefault();var l=Object(n.a)(e.state.chapter);l[a].session.push({id:e.state.chapter[a].session[e.state.chapter[a].session.length-1].id+1,name:"",file:[]}),e.setState({chapter:l})},e.addChapter=function(t){t.preventDefault();var a=Object(n.a)(e.state.chapter);a.push({id:e.state.chapter[e.state.chapter.length-1].id+1,name:"",file:[],session:[{id:1,name:"",file:[]}]}),e.setState({chapter:a})},e.onSubmitApi=function(e){},e.state={files:[],modal:!1,audio:[],chapter:[{id:1,name:"",file:[],session:[{id:1,name:"",file:[]}]}]},e.onDrop=function(t,a){var l;console.log(t);var r=Object(n.a)(e.state.chapter);(l=r[t].file).push.apply(l,Object(n.a)(a.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))),e.setState({chapter:r})},e.onDrop1=function(t,a,l){var r,i=Object(n.a)(e.state.chapter);console.log(i),(r=i[t].session[a].file).push.apply(r,Object(n.a)(l.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))),e.setState({chapter:i})},e}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){f.a.init()}},{key:"deleteSession",value:function(e,t,a){e.preventDefault();var l=Object(n.a)(this.state.chapter);l[t].session.splice(a,1),this.setState({chapter:l})}},{key:"deleteChapter",value:function(e,t){e.preventDefault();var a=Object(n.a)(this.state.chapter);a.splice(t,1),this.setState({chapter:a})}},{key:"render",value:function(){var e=this;return console.log(this.state.files),m.a.createElement("div",null,m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-12 grid-margin"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("form",{className:"form-sample",onSubmit:function(t){return e.onSubmitApi(t)}},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-12"},this.state.chapter.map((function(t,a){return m.a.createElement("div",{key:a,style:{border:"1px solid #bbbaba",padding:20,marginBottom:20,position:"relative"}},m.a.createElement(u.a.Group,{className:"row"},m.a.createElement("label",{className:"col-sm-3 col-form-label"},"Chapter Name"),m.a.createElement("div",{className:"col-sm-9"},m.a.createElement(u.a.Control,{type:"text"}))),m.a.createElement(u.a.Group,{className:"row"},m.a.createElement("label",{className:"col-sm-3 col-form-label"},"Upload Audio"),m.a.createElement("div",{className:"col-sm-9"},m.a.createElement(p.a,{accept:"audio/*",onDrop:function(t){return e.onDrop(a,t)}},(function(n){var l=n.getRootProps,r=n.getInputProps;return m.a.createElement("section",null,m.a.createElement("div",Object.assign({},l(),{style:{minHeight:"100px",border:"1px solid #ebedf2"}}),m.a.createElement("input",r()),m.a.createElement("p",{className:"text-center my-5"},"Drag 'n' drop some files here, or click to select files")),m.a.createElement("aside",{style:v},t.file.map((function(t,n){return m.a.createElement("div",{style:{display:"flex",alignItems:"center",position:"relative",width:"100%"},onClick:function(a){return e.openModal(a,t)}},m.a.createElement("div",{style:h,key:t.name},m.a.createElement("div",{style:E},m.a.createElement("i",{className:"fa fa-file-audio-o",style:{fontSize:40}}),m.a.createElement("i",{className:"mdi mdi-close",style:{position:"absolute",top:0,right:0,fontSize:20},onClick:function(t){return e.onCloseMedia(t,a,n)}}))),m.a.createElement("p",null,t.name))}))))})))),a>0?m.a.createElement("button",{className:"btn btn-danger btn-sm icon-btn ml-2",onClick:function(t){return e.deleteChapter(t,a)},style:{position:"absolute",top:"-5px",right:"-25px"}},m.a.createElement("i",{className:"icon-trash"})):null,t.session.map((function(t,n){return m.a.createElement("div",{key:n,style:{border:"1px solid #bbbaba",padding:20,marginBottom:10,marginLeft:100,position:"relative"}},m.a.createElement(u.a.Group,{className:"row"},m.a.createElement("label",{className:"col-sm-3 col-form-label"},"Inside Chapter Name"),m.a.createElement("div",{className:"col-sm-9"},m.a.createElement(u.a.Control,{type:"text"}))),m.a.createElement(u.a.Group,{className:"row"},m.a.createElement("label",{className:"col-sm-3 col-form-label"},"Upload Audio"),m.a.createElement("div",{className:"col-sm-9"},m.a.createElement(p.a,{accept:"audio/*",onDrop:function(t){return e.onDrop1(a,n,t)}},(function(l){var r=l.getRootProps,i=l.getInputProps;return m.a.createElement("section",null,m.a.createElement("div",Object.assign({},r(),{style:{minHeight:"100px",border:"1px solid #ebedf2"}}),m.a.createElement("input",i()),m.a.createElement("p",{className:"text-center my-5"},"Drag 'n' drop some files here, or click to select files")),m.a.createElement("aside",{style:v},t.file.map((function(t,l){return m.a.createElement("div",{style:{display:"flex",alignItems:"center",position:"relative",width:"100%"},onClick:function(a){return e.openModal(a,t)}},m.a.createElement("div",{style:h,key:t.name},m.a.createElement("div",{style:E},m.a.createElement("i",{className:"fa fa-file-audio-o",style:{fontSize:40}}),m.a.createElement("i",{className:"mdi mdi-close",style:{position:"absolute",top:0,right:0,fontSize:20},onClick:function(t){return e.onCloseMedia1(t,a,n,l)}}))),m.a.createElement("p",null,t.name))}))))})))),n>0?m.a.createElement("button",{className:"btn btn-danger btn-sm icon-btn ml-2",onClick:function(t){return e.deleteSession(t,a,n)},style:{position:"absolute",top:"-5px",right:"-25px"}},m.a.createElement("i",{className:"icon-trash"})):null)})),m.a.createElement("div",{style:{textAlign:"right"}},m.a.createElement("button",{className:"btn btn-danger btn-sm icon-btn ml-2",onClick:function(t){return e.addSession(t,a)}},"Add Inside")))})),m.a.createElement("button",{className:"btn btn-info btn-sm icon-btn ml-2 mb-2",onClick:function(t){return e.addChapter(t)},style:{float:"right"}},"Add Chapter"))),m.a.createElement("button",{type:"submit",className:"btn btn-primary mr-2"},"Submit")))))),m.a.createElement(b.a,{show:this.state.modal,onHide:function(){return e.setState({modal:!1})},"aria-labelledby":"example-modal-sizes-title-md"},m.a.createElement(b.a.Header,{closeButton:!0},m.a.createElement(b.a.Title,null,this.state.audio.name)),m.a.createElement(b.a.Body,null,m.a.createElement("audio",{style:{width:"100%"},src:this.state.audio.preview,controls:!0}))))}}]),t}(c.Component);t.default=y},135:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.default)((function(){for(var e=arguments.length,a=Array(e),n=0;n<e;n++)a[n]=arguments[n];var l=null;return t.forEach((function(e){if(null==l){var t=e.apply(void 0,a);null!=t&&(l=t)}})),l}))};var n,l=a(131),r=(n=l)&&n.__esModule?n:{default:n};e.exports=t.default},143:function(e,t,a){"use strict";var n=a(1),l=a(4),r=a(8),i=a.n(r),s=a(0),o=a.n(s),c=a(11),m=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,s=e.as,u=void 0===s?"div":s,d=Object(l.a)(e,["bsPrefix","className","as"]),f=Object(c.b)(a,"col"),p=[],b=[];return m.forEach((function(e){var t,a,n,l=d[e];if(delete d[e],null!=l&&"object"===typeof l){var r=l.span;t=void 0===r||r,a=l.offset,n=l.order}else t=l;var i="xs"!==e?"-"+e:"";null!=t&&p.push(!0===t?""+f+i:""+f+i+"-"+t),null!=n&&b.push("order"+i+"-"+n),null!=a&&b.push("offset"+i+"-"+a)})),p.length||p.push(f),o.a.createElement(u,Object(n.a)({},d,{ref:t,className:i.a.apply(void 0,[r].concat(p,b))}))}));u.displayName="Col",t.a=u},194:function(e,t,a){"use strict";var n=a(1),l=a(4),r=a(8),i=a.n(r),s=a(0),o=a.n(s),c=(a(135),a(132)),m=a(123),u=a(11),d=o.a.forwardRef((function(e,t){var a=e.id,r=e.bsPrefix,c=e.bsCustomPrefix,d=e.className,f=e.isValid,p=e.isInvalid,b=e.isStatic,v=e.as,h=void 0===v?"input":v,E=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),y=Object(s.useContext)(m.a),N=y.controlId;return r=y.custom?Object(u.b)(c,"custom-control-input"):Object(u.b)(r,"form-check-input"),o.a.createElement(h,Object(n.a)({},E,{ref:t,id:a||N,className:i()(d,r,f&&"is-valid",p&&"is-invalid",b&&"position-static")}))}));d.displayName="FormCheckInput",d.defaultProps={type:"checkbox"};var f=d,p=o.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.bsCustomPrefix,c=e.className,d=e.htmlFor,f=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),p=Object(s.useContext)(m.a),b=p.controlId;return a=p.custom?Object(u.b)(r,"custom-control-label"):Object(u.b)(a,"form-check-label"),o.a.createElement("label",Object(n.a)({},f,{ref:t,htmlFor:d||b,className:i()(c,a)}))}));p.displayName="FormCheckLabel";var b=p,v=o.a.forwardRef((function(e,t){var a=e.id,r=e.bsPrefix,d=e.bsCustomPrefix,p=e.inline,v=e.disabled,h=e.isValid,E=e.isInvalid,y=e.feedback,N=e.className,O=e.style,x=e.title,g=e.type,j=e.label,C=e.children,w=e.custom,S=e.as,I=void 0===S?"input":S,P=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),k="switch"===g||w;r=k?Object(u.b)(d,"custom-control"):Object(u.b)(r,"form-check");var F=Object(s.useContext)(m.a).controlId,L=Object(s.useMemo)((function(){return{controlId:a||F,custom:k}}),[F,k,a]),M=null!=j&&!1!==j&&!C,R=o.a.createElement(f,Object(n.a)({},P,{type:"switch"===g?"checkbox":g,ref:t,isValid:h,isInvalid:E,isStatic:!M,disabled:v,as:I}));return o.a.createElement(m.a.Provider,{value:L},o.a.createElement("div",{style:O,className:i()(N,r,k&&"custom-"+g,p&&r+"-inline")},C||o.a.createElement(o.a.Fragment,null,R,M&&o.a.createElement(b,{title:x},j),(h||E)&&o.a.createElement(c.a,{type:h?"valid":"invalid"},y))))}));v.displayName="FormCheck",v.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},v.Input=f,v.Label=b;var h=v,E=a(145),y=o.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,c=e.children,d=e.controlId,f=e.as,p=void 0===f?"div":f,b=Object(l.a)(e,["bsPrefix","className","children","controlId","as"]);a=Object(u.b)(a,"form-group");var v=Object(s.useMemo)((function(){return{controlId:d}}),[d]);return o.a.createElement(m.a.Provider,{value:v},o.a.createElement(p,Object(n.a)({},b,{ref:t,className:i()(r,a)}),c))}));y.displayName="FormGroup";var N=y,O=(a(43),a(143)),x=o.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.column,c=e.srOnly,d=e.className,f=e.htmlFor,p=Object(l.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),b=Object(s.useContext)(m.a).controlId;a=Object(u.b)(a,"form-label");var v=i()(d,a,c&&"sr-only",r&&"col-form-label");return f=f||b,r?o.a.createElement(O.a,Object(n.a)({as:"label",className:v,htmlFor:f},p)):o.a.createElement("label",Object(n.a)({ref:t,className:v,htmlFor:f},p))}));x.displayName="FormLabel",x.defaultProps={column:!1,srOnly:!1};var g=x,j=o.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,s=e.as,c=void 0===s?"small":s,m=e.muted,d=Object(l.a)(e,["bsPrefix","className","as","muted"]);return a=Object(u.b)(a,"form-text"),o.a.createElement(c,Object(n.a)({},d,{ref:t,className:i()(r,a,m&&"text-muted")}))}));j.displayName="FormText";var C=j,w=o.a.forwardRef((function(e,t){return o.a.createElement(h,Object(n.a)({},e,{ref:t,type:"switch"}))}));w.displayName="Switch",w.Input=h.Input,w.Label=h.Label;var S=w,I=a(44),P=o.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.inline,s=e.className,c=e.validated,m=e.as,d=void 0===m?"form":m,f=Object(l.a)(e,["bsPrefix","inline","className","validated","as"]);return a=Object(u.b)(a,"form"),o.a.createElement(d,Object(n.a)({},f,{ref:t,className:i()(s,c&&"was-validated",r&&a+"-inline")}))}));P.displayName="Form",P.defaultProps={inline:!1},P.Row=Object(I.a)("form-row"),P.Group=N,P.Control=E.a,P.Check=h,P.Switch=S,P.Label=g,P.Text=C;t.a=P},364:function(e,t,a){e.exports=function(){"use strict";var e={CUSTOMFILE:'.custom-file input[type="file"]',CUSTOMFILELABEL:".custom-file-label",FORM:"form",INPUT:"input"},t=function(t){var a="",n=t.parentNode.querySelector(e.CUSTOMFILELABEL);return n&&(a=n.textContent),a},a=function(e){if(e.childNodes.length>0)for(var t=[].slice.call(e.childNodes),a=0;a<t.length;a++){var n=t[a];if(3!==n.nodeType)return n}return e},n=function(t){var n=t.bsCustomFileInput.defaultText,l=t.parentNode.querySelector(e.CUSTOMFILELABEL);l&&(a(l).textContent=n)},l=!!window.File,r=function(e){if(e.hasAttribute("multiple")&&l)return[].slice.call(e.files).map((function(e){return e.name})).join(", ");if(-1!==e.value.indexOf("fakepath")){var t=e.value.split("\\");return t[t.length-1]}return e.value};function i(){var t=this.parentNode.querySelector(e.CUSTOMFILELABEL);if(t){var l=a(t),i=r(this);i.length?l.textContent=i:n(this)}}function s(){for(var t=[].slice.call(this.querySelectorAll(e.INPUT)).filter((function(e){return!!e.bsCustomFileInput})),a=0,l=t.length;a<l;a++)n(t[a])}var o="reset",c="change";return{init:function(a,n){void 0===a&&(a=e.CUSTOMFILE),void 0===n&&(n=e.FORM);for(var l=[].slice.call(document.querySelectorAll(a)),r=[].slice.call(document.querySelectorAll(n)),m=0,u=l.length;m<u;m++){var d=l[m];Object.defineProperty(d,"bsCustomFileInput",{value:{defaultText:t(d)},writable:!0}),i.call(d),d.addEventListener(c,i)}for(var f=0,p=r.length;f<p;f++)r[f].addEventListener(o,s),Object.defineProperty(r[f],"bsCustomFileInput",{value:!0,writable:!0})},destroy:function(){for(var t=[].slice.call(document.querySelectorAll(e.FORM)).filter((function(e){return!!e.bsCustomFileInput})),a=[].slice.call(document.querySelectorAll(e.INPUT)).filter((function(e){return!!e.bsCustomFileInput})),l=0,r=a.length;l<r;l++){var m=a[l];n(m),m.bsCustomFileInput=void 0,m.removeEventListener(c,i)}for(var u=0,d=t.length;u<d;u++)t[u].removeEventListener(o,s),t[u].bsCustomFileInput=void 0}}}()}}]);
//# sourceMappingURL=48.a154c111.chunk.js.map