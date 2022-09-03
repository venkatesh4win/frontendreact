(window.webpackJsonpstellar_admin_react=window.webpackJsonpstellar_admin_react||[]).push([[57],{1159:function(e,a,t){"use strict";t.r(a);var l=t(403),n=t(0),r=t.n(n),c=t(1222),m=t(79);a.default=function(){var e=Object(n.useState)(!1),a=Object(l.a)(e,2),t=a[0],i=a[1],s=Object(n.useState)(!1),o=Object(l.a)(s,2),d=o[0],u=o[1],E=Object(n.useState)(!1),b=Object(l.a)(E,2),p=b[0],v=b[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"page-header"},r.a.createElement("h3",{className:"page-title"}," Modals "),r.a.createElement("nav",{"aria-label":"breadcrumb"},r.a.createElement("ol",{className:"breadcrumb"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"UI Elements")),r.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Modals")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 grid-margin"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},"Large Modal"),r.a.createElement("p",{className:"card-description"},"Large sized modal with max-width set to ",r.a.createElement("code",null,"90%")),r.a.createElement(c.a.Dialog,{size:"lg"},r.a.createElement(c.a.Header,{closeButton:!0},r.a.createElement(c.a.Title,null,"Modal title")),r.a.createElement(c.a.Body,null,r.a.createElement("p",null,"Modal body text goes here.")),r.a.createElement(c.a.Footer,{className:"flex-wrap"},r.a.createElement(m.a,{variant:"success m-2"},"Submit"),r.a.createElement(m.a,{variant:"light m-2"},"Cancel"))),r.a.createElement("div",{className:"text-center"},r.a.createElement(m.a,{onClick:function(){return v(!0)},className:"btn-sm"},"Large modal",r.a.createElement("i",{className:" icon-arrow-up-circle ml-1"}))),r.a.createElement(c.a,{size:"lg",show:p,onHide:function(){return v(!1)},"aria-labelledby":"example-modal-sizes-title-lg"},r.a.createElement(c.a.Header,{closeButton:!0},r.a.createElement(c.a.Title,null,"Modal title")),r.a.createElement(c.a.Body,null,r.a.createElement("p",null,"Modal body text goes here.")),r.a.createElement(c.a.Footer,null,r.a.createElement(m.a,{variant:"success m-2",onClick:function(){return v(!1)}},"Submit"),r.a.createElement(m.a,{variant:"light mb-",onClick:function(){return v(!1)}},"Cancel")))))),r.a.createElement("div",{className:"col-md-6 grid-margin"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},"Medium Modal"),r.a.createElement("p",{className:"card-description"},"Normal modal with default bootstrap settings"),r.a.createElement(c.a.Dialog,null,r.a.createElement(c.a.Header,{closeButton:!0},r.a.createElement(c.a.Title,null,"Modal title")),r.a.createElement(c.a.Body,null,r.a.createElement("p",null,"Modal body text goes here.")),r.a.createElement(c.a.Footer,{className:"flex-wrap"},r.a.createElement(m.a,{variant:"success m-2"},"Submit"),r.a.createElement(m.a,{variant:"light m-2"},"Cancel"))),r.a.createElement("div",{className:"text-center"},r.a.createElement(m.a,{onClick:function(){return u(!0)},className:"btn-sm"},"Medium modal",r.a.createElement("i",{className:" icon-arrow-up-circle ml-1"}))),r.a.createElement(c.a,{show:d,onHide:function(){return u(!1)},"aria-labelledby":"example-modal-sizes-title-md"},r.a.createElement(c.a.Header,{closeButton:!0},r.a.createElement(c.a.Title,null,"Modal title")),r.a.createElement(c.a.Body,null,r.a.createElement("p",null,"Modal body text goes here.")),r.a.createElement(c.a.Footer,{className:"fleex-wrap"},r.a.createElement(m.a,{variant:"success m-2",onClick:function(){return u(!1)}},"Submit"),r.a.createElement(m.a,{variant:"light m-2",onClick:function(){return u(!1)}},"Cancel")))))),r.a.createElement("div",{className:"col-md-6 grid-margin"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},"Small Modal"),r.a.createElement("p",{className:"card-description"},"Small modal with max-width set to 300px"),r.a.createElement(c.a.Dialog,{size:"sm"},r.a.createElement(c.a.Header,{closeButton:!0},r.a.createElement(c.a.Title,null,"Modal title")),r.a.createElement(c.a.Body,null,r.a.createElement("p",null,"Modal body text goes here.")),r.a.createElement(c.a.Footer,{className:"flex-wrap"},r.a.createElement(m.a,{variant:"success btn-sm m-2"},"Submit"),r.a.createElement(m.a,{variant:"light btn-sm m-2"},"Cancel"))),r.a.createElement("div",{className:"text-center"},r.a.createElement(m.a,{onClick:function(){return i(!0)},className:"btn-sm"},"Small modal",r.a.createElement("i",{className:" icon-arrow-up-circle ml-1"}))),r.a.createElement(c.a,{size:"sm",show:t,onHide:function(){return i(!1)},"aria-labelledby":"example-modal-sizes-title-sm"},r.a.createElement(c.a.Header,{closeButton:!0},r.a.createElement(c.a.Title,null,"Modal title")),r.a.createElement(c.a.Body,null,r.a.createElement("p",null,"Modal body text goes here.")),r.a.createElement(c.a.Footer,{className:"flex-wrap"},r.a.createElement(m.a,{variant:"success btn-sm m-2",onClick:function(){return i(!1)}},"Submit"),r.a.createElement(m.a,{variant:"light btn-sm m-2",onClick:function(){return i(!1)}},"Cancel"))))))))}},403:function(e,a,t){"use strict";function l(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],l=!0,n=!1,r=void 0;try{for(var c,m=e[Symbol.iterator]();!(l=(c=m.next()).done)&&(t.push(c.value),!a||t.length!==a);l=!0);}catch(i){n=!0,r=i}finally{try{l||null==m.return||m.return()}finally{if(n)throw r}}return t}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.d(a,"a",(function(){return l}))}}]);
//# sourceMappingURL=57.d0b4ebac.chunk.js.map