(window.webpackJsonpstellar_admin_react=window.webpackJsonpstellar_admin_react||[]).push([[70],{1172:function(e,a,t){"use strict";t.r(a),t.d(a,"TreeView",(function(){return g}));var n=t(12),r=t(13),i=t(15),l=t(14),c=t(59),s=t(16),o=t(0),m=t.n(o),d=t(745),p={name:"Electronics",toggled:!0,children:[{name:"Mobiles",toggled:!0,children:[{name:"Mi"},{name:"Samsung"},{name:"Oppo"},{name:"Vivo"},{name:"Nokia"},{name:"Oneplus"},{name:"Apple"},{name:"Accessories",toggled:!0,children:[{name:"Headphones & Headsets",children:[{name:"JBL"},{name:"Skullcandy"},{name:"Sony"},{name:"Samsung"},{name:"Mi"}]},{name:"Power Banks"},{name:"Mobile Cases"},{name:"Screen Guards"},{name:"Memmory Cards"}]}]},{name:"Appliances",children:[{name:"TV"},{name:"Fridge"},{name:"Washing Machine"},{name:"Microwave Owen"}]},{name:"Laptops",loading:!0,children:[]},{name:"Wearables"},{name:"Camera",children:[{name:"DSLR & Mirrorless"},{name:"Compact & Bridge Cameras"},{name:"Sports & Action"}]}]},g=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(i.a)(this,Object(l.a)(a).call(this,e))).treeStyle={tree:{base:{padding:"20px",background:"#ffffff",color:"#000000"},node:{base:{position:"relative"},link:{cursor:"pointer",position:"relative",padding:"0px 5px",display:"block"},activeLink:{background:"#ffffff"},toggle:{base:{position:"relative",display:"inline-block",verticalAlign:"top",marginLeft:"-5px",height:"24px",width:"24px"},wrapper:{position:"absolute",top:"50%",left:"50%",margin:"-7px 0 0 -7px",height:"14px"},height:14,width:14,arrow:{fill:"#000000",strokeWidth:0}},header:{base:{display:"inline-block",verticalAlign:"top",color:"#000000"},connector:{width:"2px",height:"12px",borderLeft:"solid 2px black",borderBottom:"solid 2px black",position:"absolute",top:"0px",left:"-21px"},title:{lineHeight:"24px",verticalAlign:"middle"}},subtree:{listStyle:"none",paddingLeft:"19px"}}}},t.state={data:p},t.onToggle=t.onToggle.bind(Object(c.a)(t)),t}return Object(s.a)(a,e),Object(r.a)(a,[{key:"onToggle",value:function(e,a){var t=this.state,n=t.cursor,r=t.data;n&&this.setState((function(){return{cursor:n,active:!1}})),e.active=!0,e.children&&(e.toggled=a),this.setState((function(){return{cursor:e,data:Object.assign({},r)}}))}},{key:"render",value:function(){var e=this.state.data;return m.a.createElement("div",null,m.a.createElement("div",{className:"page-header"},m.a.createElement("h3",{className:"page-title"},"Tree View"),m.a.createElement("nav",{"aria-label":"breadcrumb"},m.a.createElement("ol",{className:"breadcrumb"},m.a.createElement("li",{className:"breadcrumb-item"},m.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"UI Elements")),m.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Tree View")))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-12 grid-margin stretch-card"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h4",{className:"card-title"},"Tree View Beard"),m.a.createElement("p",{className:"card-description"},"React Tree View Component. Data-Driven, Fast, Efficient and Customisable"),m.a.createElement("div",{className:"template-demo"},m.a.createElement(d.Treebeard,{data:e,onToggle:this.onToggle,style:this.treeStyle})))))))}}]),a}(o.Component);a.default=g}}]);
//# sourceMappingURL=70.60ddaedd.chunk.js.map