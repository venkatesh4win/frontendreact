(window.webpackJsonpstellar_admin_react=window.webpackJsonpstellar_admin_react||[]).push([[42],{1212:function(e,a,t){"use strict";t.r(a),t.d(a,"BookListing",(function(){return j}));var s=t(12),r=t(13),c=t(15),i=t(14),l=t(16),n=t(0),o=t.n(n),d=t(380),m=t.n(d),u=t(386),b=t.n(u),p=t(389),f=t.n(p),h=t(1222),v=t(194),N=t(79),O=t(3),P=p.Search.SearchBar,E=[{id:"XN-1",purchasedOn:"25/09/2019",customer:"Edinburgh",shipTo:"New York",basePrice:"$1500",purchasedPrice:"$3200",status:"Open",action:""},{id:"XN-2",purchasedOn:"26/09/2019",customer:"Doe",shipTo:"Brazil",basePrice:"$4500",purchasedPrice:"$7500",status:"Pending",action:""},{id:"XN-3",purchasedOn:"26/09/2019",customer:"Sam",shipTo:"Tokyo",basePrice:"$2100",purchasedPrice:"6300",status:"Closed",action:""},{id:"XN-4",purchasedOn:"27/09/2019",customer:"Joe",shipTo:"Netherland",basePrice:"$1100",purchasedPrice:"$7300",status:"Open",action:""},{id:"XN-5",purchasedOn:"28/09/2019",customer:"Edward",shipTo:"Indonesia",basePrice:"$3600",purchasedPrice:"$4800",status:"Closed",action:""},{id:"XN-6",purchasedOn:"28/09/2019",customer:"Stella",shipTo:"Japan",basePrice:"$5600",purchasedPrice:"$3600",status:"On hold",action:""},{id:"XN-7",purchasedOn:"28/09/2019",customer:"Jaqueline",shipTo:"Germany",basePrice:"$1100",purchasedPrice:"$6300",status:"Closed",action:""},{id:"XN-8",purchasedOn:"29/09/2019",customer:"Tim",shipTo:"Italy",basePrice:"$6300",purchasedPrice:"$2100",status:"Open",action:""},{id:"XN-9",purchasedOn:"29/09/2019",customer:"John",shipTo:"Tokyo",basePrice:"$2100",purchasedPrice:"$6300",status:"Closed",action:""},{id:"XN-10",purchasedOn:"29/09/2019",customer:"Tom",shipTo:"Germany",basePrice:"$1100",purchasedPrice:"$2300",status:"Closed",action:""},{id:"XN-11",purchasedOn:"30/09/2019",customer:"Aleena",shipTo:"New York",basePrice:"$1600",purchasedPrice:"$3500",status:"Pending",action:""},{id:"XN-12",purchasedOn:"01/10/2019",customer:"Alphy",shipTo:"Brazil",basePrice:"$5500",purchasedPrice:"$7200",status:"Open",action:""},{id:"XN-13",purchasedOn:"02/10/2019",customer:"Twinkle",shipTo:"Italy",basePrice:"$1560",purchasedPrice:"$2530",status:"Open",action:""},{id:"XN-14",purchasedOn:"02/10/2019",customer:"Catherine",shipTo:"Brazil",basePrice:"$1600",purchasedPrice:"$5600",status:"Closed",action:""},{id:"XN-15",purchasedOn:"05/10/2019",customer:"Daniel",shipTo:"Singapore",basePrice:"$6800",purchasedPrice:"$9800",status:"Pending",action:""},{id:"XN-16",purchasedOn:"07/10/2019",customer:"Tom",shipTo:"Tokyo",basePrice:"$1600",purchasedPrice:"$6500",status:"On hold",action:""},{id:"XN-17",purchasedOn:"07/10/2019",customer:"Cris",shipTo:"Tokyo",basePrice:"$2100",purchasedPrice:"$6300",status:"Open",action:""},{id:"XN-18",purchasedOn:"09/10/2019",customer:"Tim",shipTo:"Italy",basePrice:"$6300",purchasedPrice:"$2100",status:"Closed",action:""},{id:"XN-19",purchasedOn:"11/10/2019",customer:"Jack",shipTo:"Tokyo",basePrice:"$3100",purchasedPrice:"$7300",status:"Pending",action:""},{id:"XN-20",purchasedOn:"14/10/2019",customer:"Tony",shipTo:"Germany",basePrice:"$1100",purchasedPrice:"$2300",status:"On hold",action:""}],y=[{dataField:"customer",text:"Book Name",sort:!0},{dataField:"shipTo",text:"Description",sort:!0},{dataField:"status",text:"Status",sort:!0,formatter:function(e,a){return"On hold"===e?o.a.createElement("label",{className:"badge badge-info"},"On hold"):"Pending"===e?o.a.createElement("label",{className:"badge badge-danger"},"Pending"):"Closed"===e?o.a.createElement("label",{className:"badge badge-success"},"Closed"):"Open"===e?o.a.createElement("label",{className:"badge badge-warning"},"Open"):void 0}},{dataField:"action",text:"Action",sort:!1,formatter:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:" option-btn"},o.a.createElement(O.b,{to:"/edit_audio"}," ",o.a.createElement("i",{className:"icon-music-tone-alt text-primary"})),o.a.createElement(O.b,{to:"/edit_data"},o.a.createElement("i",{className:"icon-pencil text-primary"})),o.a.createElement("i",{className:"mdi mdi-delete text-primary"})))}}],x=[{dataField:"id",order:"desc"}],j=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(c.a)(this,Object(i.a)(a).call(this))).state={MdShow:!1},e}return Object(l.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"page-header"},o.a.createElement("h3",{className:"page-title"},"Book Listing")),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"text-right"},o.a.createElement("button",{onClick:function(){return e.setState({MdShow:!0})},type:"button",className:"btn btn-primary btn-fw"},"Add New")),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement(f.a,{keyField:"id",bootstrap4:!0,data:E,columns:y,search:!0},(function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"d-flex align-items-center"},o.a.createElement("p",{className:"mb-2 mr-2"},"Search in table:"),o.a.createElement(P,e.searchProps)),o.a.createElement(m.a,Object.assign({defaultSorted:x,pagination:b()()},e.baseProps,{wrapperClasses:"table-responsive"})))})))))))),o.a.createElement(h.a,{show:this.state.MdShow,onHide:function(){return e.setState({MdShow:!1})},"aria-labelledby":"example-modal-sizes-title-md"},o.a.createElement(h.a.Header,{closeButton:!0},o.a.createElement(h.a.Title,null,"Book")),o.a.createElement(h.a.Body,null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement("form",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(v.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Book Name"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(v.a.Control,{type:"text"})))),o.a.createElement("div",{className:"col-md-12"},o.a.createElement(v.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Description"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("textarea",{className:"form-control"}))))))))),o.a.createElement(h.a.Footer,{className:"fleex-wrap"},o.a.createElement(N.a,{variant:"success m-2",onClick:""},"Submit"),o.a.createElement(N.a,{variant:"light m-2",onClick:function(){return e.setState({MdShow:!1})}},"Cancel"))))}}]),a}(n.Component);a.default=j},123:function(e,a,t){"use strict";var s=t(0),r=t.n(s).a.createContext({controlId:void 0});a.a=r},132:function(e,a,t){"use strict";var s=t(1),r=t(4),c=t(8),i=t.n(c),l=t(0),n=t.n(l),o=t(20),d=t.n(o),m={type:d.a.string.isRequired,as:d.a.elementType},u=n.a.forwardRef((function(e,a){var t=e.as,c=void 0===t?"div":t,l=e.className,o=e.type,d=Object(r.a)(e,["as","className","type"]);return n.a.createElement(c,Object(s.a)({},d,{ref:a,className:i()(l,o&&o+"-feedback")}))}));u.displayName="Feedback",u.propTypes=m,u.defaultProps={type:"valid"},a.a=u},135:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,c.default)((function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];var r=null;return a.forEach((function(e){if(null==r){var a=e.apply(void 0,t);null!=a&&(r=a)}})),r}))};var s,r=t(131),c=(s=r)&&s.__esModule?s:{default:s};e.exports=a.default},143:function(e,a,t){"use strict";var s=t(1),r=t(4),c=t(8),i=t.n(c),l=t(0),n=t.n(l),o=t(11),d=["xl","lg","md","sm","xs"],m=n.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,l=e.as,m=void 0===l?"div":l,u=Object(r.a)(e,["bsPrefix","className","as"]),b=Object(o.b)(t,"col"),p=[],f=[];return d.forEach((function(e){var a,t,s,r=u[e];if(delete u[e],null!=r&&"object"===typeof r){var c=r.span;a=void 0===c||c,t=r.offset,s=r.order}else a=r;var i="xs"!==e?"-"+e:"";null!=a&&p.push(!0===a?""+b+i:""+b+i+"-"+a),null!=s&&f.push("order"+i+"-"+s),null!=t&&f.push("offset"+i+"-"+t)})),p.length||p.push(b),n.a.createElement(m,Object(s.a)({},u,{ref:a,className:i.a.apply(void 0,[c].concat(p,f))}))}));m.displayName="Col",a.a=m},145:function(e,a,t){"use strict";var s=t(1),r=t(4),c=t(8),i=t.n(c),l=t(0),n=t.n(l),o=(t(43),t(132)),d=t(123),m=t(11),u=n.a.forwardRef((function(e,a){var t,c,o=e.bsPrefix,u=e.type,b=e.size,p=e.id,f=e.className,h=e.isValid,v=e.isInvalid,N=e.plaintext,O=e.readOnly,P=e.as,E=void 0===P?"input":P,y=Object(r.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),x=Object(l.useContext)(d.a).controlId;if(o=Object(m.b)(o,"form-control"),N)(c={})[o+"-plaintext"]=!0,t=c;else if("file"===u){var j;(j={})[o+"-file"]=!0,t=j}else{var w;(w={})[o]=!0,w[o+"-"+b]=b,t=w}return n.a.createElement(E,Object(s.a)({},y,{type:u,ref:a,readOnly:O,id:p||x,className:i()(f,t,h&&"is-valid",v&&"is-invalid")}))}));u.displayName="FormControl",u.Feedback=o.a,a.a=u},194:function(e,a,t){"use strict";var s=t(1),r=t(4),c=t(8),i=t.n(c),l=t(0),n=t.n(l),o=(t(135),t(132)),d=t(123),m=t(11),u=n.a.forwardRef((function(e,a){var t=e.id,c=e.bsPrefix,o=e.bsCustomPrefix,u=e.className,b=e.isValid,p=e.isInvalid,f=e.isStatic,h=e.as,v=void 0===h?"input":h,N=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),O=Object(l.useContext)(d.a),P=O.controlId;return c=O.custom?Object(m.b)(o,"custom-control-input"):Object(m.b)(c,"form-check-input"),n.a.createElement(v,Object(s.a)({},N,{ref:a,id:t||P,className:i()(u,c,b&&"is-valid",p&&"is-invalid",f&&"position-static")}))}));u.displayName="FormCheckInput",u.defaultProps={type:"checkbox"};var b=u,p=n.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.bsCustomPrefix,o=e.className,u=e.htmlFor,b=Object(r.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),p=Object(l.useContext)(d.a),f=p.controlId;return t=p.custom?Object(m.b)(c,"custom-control-label"):Object(m.b)(t,"form-check-label"),n.a.createElement("label",Object(s.a)({},b,{ref:a,htmlFor:u||f,className:i()(o,t)}))}));p.displayName="FormCheckLabel";var f=p,h=n.a.forwardRef((function(e,a){var t=e.id,c=e.bsPrefix,u=e.bsCustomPrefix,p=e.inline,h=e.disabled,v=e.isValid,N=e.isInvalid,O=e.feedback,P=e.className,E=e.style,y=e.title,x=e.type,j=e.label,w=e.children,$=e.custom,C=e.as,T=void 0===C?"input":C,k=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),g="switch"===x||$;c=g?Object(m.b)(u,"custom-control"):Object(m.b)(c,"form-check");var I=Object(l.useContext)(d.a).controlId,F=Object(l.useMemo)((function(){return{controlId:t||I,custom:g}}),[I,g,t]),S=null!=j&&!1!==j&&!w,X=n.a.createElement(b,Object(s.a)({},k,{type:"switch"===x?"checkbox":x,ref:a,isValid:v,isInvalid:N,isStatic:!S,disabled:h,as:T}));return n.a.createElement(d.a.Provider,{value:F},n.a.createElement("div",{style:E,className:i()(P,c,g&&"custom-"+x,p&&c+"-inline")},w||n.a.createElement(n.a.Fragment,null,X,S&&n.a.createElement(f,{title:y},j),(v||N)&&n.a.createElement(o.a,{type:v?"valid":"invalid"},O))))}));h.displayName="FormCheck",h.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},h.Input=b,h.Label=f;var v=h,N=t(145),O=n.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.children,u=e.controlId,b=e.as,p=void 0===b?"div":b,f=Object(r.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(m.b)(t,"form-group");var h=Object(l.useMemo)((function(){return{controlId:u}}),[u]);return n.a.createElement(d.a.Provider,{value:h},n.a.createElement(p,Object(s.a)({},f,{ref:a,className:i()(c,t)}),o))}));O.displayName="FormGroup";var P=O,E=(t(43),t(143)),y=n.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.column,o=e.srOnly,u=e.className,b=e.htmlFor,p=Object(r.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),f=Object(l.useContext)(d.a).controlId;t=Object(m.b)(t,"form-label");var h=i()(u,t,o&&"sr-only",c&&"col-form-label");return b=b||f,c?n.a.createElement(E.a,Object(s.a)({as:"label",className:h,htmlFor:b},p)):n.a.createElement("label",Object(s.a)({ref:a,className:h,htmlFor:b},p))}));y.displayName="FormLabel",y.defaultProps={column:!1,srOnly:!1};var x=y,j=n.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,l=e.as,o=void 0===l?"small":l,d=e.muted,u=Object(r.a)(e,["bsPrefix","className","as","muted"]);return t=Object(m.b)(t,"form-text"),n.a.createElement(o,Object(s.a)({},u,{ref:a,className:i()(c,t,d&&"text-muted")}))}));j.displayName="FormText";var w=j,$=n.a.forwardRef((function(e,a){return n.a.createElement(v,Object(s.a)({},e,{ref:a,type:"switch"}))}));$.displayName="Switch",$.Input=v.Input,$.Label=v.Label;var C=$,T=t(44),k=n.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.inline,l=e.className,o=e.validated,d=e.as,u=void 0===d?"form":d,b=Object(r.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(m.b)(t,"form"),n.a.createElement(u,Object(s.a)({},b,{ref:a,className:i()(l,o&&"was-validated",c&&t+"-inline")}))}));k.displayName="Form",k.defaultProps={inline:!1},k.Row=Object(T.a)("form-row"),k.Group=P,k.Control=N.a,k.Check=v,k.Switch=C,k.Label=x,k.Text=w;a.a=k}}]);
//# sourceMappingURL=42.837af6e3.chunk.js.map