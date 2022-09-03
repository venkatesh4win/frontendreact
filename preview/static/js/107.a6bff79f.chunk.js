(window.webpackJsonpstellar_admin_react=window.webpackJsonpstellar_admin_react||[]).push([[107],{1153:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=n(20),a=n.n(i),s=n(8),u=n.n(s),l=n(58),c=n.n(l);function d(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return"function"===typeof e&&e.apply(void 0,n)}function p(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var f="react-contextmenu",h="react-contextmenu--visible",b="react-contextmenu-wrapper",v="react-contextmenu-item",m="react-contextmenu-item--active",y="react-contextmenu-item--disabled",g="react-contextmenu-item--divider",w="react-contextmenu-item--selected",M="react-contextmenu-submenu",O={},C=Boolean("undefined"!==typeof window&&window.document&&window.document.createElement),E="REACT_CONTEXTMENU_SHOW",T="REACT_CONTEXTMENU_HIDE";function k(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,o=void 0;"function"===typeof window.CustomEvent?o=new window.CustomEvent(e,{detail:t}):(o=document.createEvent("CustomEvent")).initCustomEvent(e,!1,!0,t),n&&(n.dispatchEvent(o),c()(O,t))}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];k(E,c()({},e,{type:E}),t)}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];k(T,c()({},e,{type:T}),t)}var S=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.handleShowEvent=function(e){for(var n in t.callbacks)p(t.callbacks,n)&&t.callbacks[n].show(e)},this.handleHideEvent=function(e){for(var n in t.callbacks)p(t.callbacks,n)&&t.callbacks[n].hide(e)},this.register=function(e,n){var o=Math.random().toString(36).substring(7);return t.callbacks[o]={show:e,hide:n},o},this.unregister=function(e){e&&t.callbacks[e]&&delete t.callbacks[e]},this.callbacks={},C&&(window.addEventListener(E,this.handleShowEvent),window.addEventListener(T,this.handleHideEvent))},j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},L=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var H=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=x(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.handleClick=function(e){0!==e.button&&1!==e.button&&e.preventDefault(),o.props.disabled||o.props.divider||(d(o.props.onClick,e,c()({},o.props.data,O.data),O.target),o.props.preventClose||_())},x(o,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),L(t,[{key:"render",value:function(){var e,t=this,n=this.props,o=n.disabled,i=n.divider,a=n.children,s=n.attributes,l=n.selected,c=u()(v,s.className,(I(e={},u()(y,s.disabledClassName),o),I(e,u()(g,s.dividerClassName),i),I(e,u()(w,s.selectedClassName),l),e));return r.a.createElement("div",j({},s,{className:c,role:"menuitem",tabIndex:"-1","aria-disabled":o?"true":"false","aria-orientation":i?"horizontal":null,ref:function(e){t.ref=e},onMouseMove:this.props.onMouseMove,onMouseLeave:this.props.onMouseLeave,onTouchEnd:this.handleClick,onClick:this.handleClick}),i?null:a)}}]),t}(o.Component);H.propTypes={children:a.a.node,attributes:a.a.object,data:a.a.object,disabled:a.a.bool,divider:a.a.bool,preventClose:a.a.bool,onClick:a.a.func,selected:a.a.bool,onMouseMove:a.a.func,onMouseLeave:a.a.func},H.defaultProps={disabled:!1,data:{},divider:!1,attributes:{},preventClose:!1,onClick:function(){return null},children:null,selected:!1,onMouseMove:function(){return null},onMouseLeave:function(){return null}};var R=H;var N=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return D.call(n),n.seletedItemRef=null,n.state={selectedItem:null,forceSubMenuOpen:!1},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(o.Component);N.propTypes={children:a.a.node.isRequired};var D=function(){var e=this;this.handleKeyNavigation=function(t){if(!1!==e.state.isVisible)switch(t.keyCode){case 37:case 27:t.preventDefault(),e.hideMenu(t);break;case 38:t.preventDefault(),e.selectChildren(!0);break;case 40:t.preventDefault(),e.selectChildren(!1);break;case 39:e.tryToOpenSubMenu(t);break;case 13:t.preventDefault(),e.tryToOpenSubMenu(t);var n=e.seletedItemRef&&e.seletedItemRef.props&&e.seletedItemRef.props.disabled;e.seletedItemRef&&e.seletedItemRef.ref instanceof HTMLElement&&!n?e.seletedItemRef.ref.click():e.hideMenu(t)}},this.handleForceClose=function(){e.setState({forceSubMenuOpen:!1})},this.tryToOpenSubMenu=function(t){e.state.selectedItem&&e.state.selectedItem.type===e.getSubMenuType()&&(t.preventDefault(),e.setState({forceSubMenuOpen:!0}))},this.selectChildren=function(t){var n=e.state.selectedItem,o=[],i=0,a={};if(r.a.Children.forEach(e.props.children,(function t(n,s){n&&([R,e.getSubMenuType()].indexOf(n.type)<0?r.a.Children.forEach(n.props.children,t):n.props.divider||(n.props.disabled&&(++i,a[s]=!0),o.push(n)))})),i!==o.length){var s=function(e){var n=e;do{t?--n:++n,n<0?n=o.length-1:n>=o.length&&(n=0)}while(n!==e&&a[n]);return n===e?null:n}(o.indexOf(n));null!==s&&e.setState({selectedItem:o[s],forceSubMenuOpen:!1})}},this.onChildMouseMove=function(t){e.state.selectedItem!==t&&e.setState({selectedItem:t,forceSubMenuOpen:!1})},this.onChildMouseLeave=function(){e.setState({selectedItem:null,forceSubMenuOpen:!1})},this.renderChildren=function(t){return r.a.Children.map(t,(function(t){var n={};return r.a.isValidElement(t)?[R,e.getSubMenuType()].indexOf(t.type)<0?(n.children=e.renderChildren(t.props.children),r.a.cloneElement(t,n)):(n.onMouseLeave=e.onChildMouseLeave.bind(e),t.type===e.getSubMenuType()&&(n.forceOpen=e.state.forceSubMenuOpen&&e.state.selectedItem===t,n.forceClose=e.handleForceClose,n.parentKeyNavigationHandler=e.handleKeyNavigation),t.props.divider||e.state.selectedItem!==t?(n.onMouseMove=function(){return e.onChildMouseMove(t)},r.a.cloneElement(t,n)):(n.selected=!0,n.ref=function(t){e.seletedItemRef=t},r.a.cloneElement(t,n))):t}))}},K=N,A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getMenuPosition=function(){var e=window,t=e.innerWidth,o=e.innerHeight,r=n.subMenu.getBoundingClientRect(),i={};return r.bottom>o?i.bottom=0:i.top=0,r.right<t?i.left="100%":i.right="100%",i},n.getRTLMenuPosition=function(){var e=window.innerHeight,t=n.subMenu.getBoundingClientRect(),o={};return t.bottom>e?o.bottom=0:o.top=0,t.left<0?o.left="100%":o.right="100%",o},n.hideMenu=function(e){e.detail&&e.detail.id&&n.menu&&e.detail.id!==n.menu.id||(n.props.forceOpen&&n.props.forceClose(),n.setState({visible:!1,selectedItem:null}),n.unregisterHandlers())},n.handleClick=function(e){e.preventDefault(),n.props.disabled||d(n.props.onClick,e,c()({},n.props.data,O.data),O.target)},n.handleMouseEnter=function(){n.closetimer&&clearTimeout(n.closetimer),n.props.disabled||n.state.visible||(n.opentimer=setTimeout((function(){return n.setState({visible:!0,selectedItem:null})}),n.props.hoverDelay))},n.handleMouseLeave=function(){n.opentimer&&clearTimeout(n.opentimer),n.state.visible&&(n.closetimer=setTimeout((function(){return n.setState({visible:!1,selectedItem:null})}),n.props.hoverDelay))},n.menuRef=function(e){n.menu=e},n.subMenuRef=function(e){n.subMenu=e},n.registerHandlers=function(){document.removeEventListener("keydown",n.props.parentKeyNavigationHandler),document.addEventListener("keydown",n.handleKeyNavigation)},n.unregisterHandlers=function(e){document.removeEventListener("keydown",n.handleKeyNavigation),e||document.addEventListener("keydown",n.props.parentKeyNavigationHandler)},n.state=c()({},n.state,{visible:!1}),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),U(t,[{key:"componentDidMount",value:function(){this.listenId=S.register((function(){}),this.hideMenu)}},{key:"getSubMenuType",value:function(){return t}},{key:"shouldComponentUpdate",value:function(e,t){return this.isVisibilityChange=(this.state.visible!==t.visible||this.props.forceOpen!==e.forceOpen)&&!(this.state.visible&&e.forceOpen)&&!(this.props.forceOpen&&t.visible),!0}},{key:"componentDidUpdate",value:function(){var e=this;if(this.isVisibilityChange)if(this.props.forceOpen||this.state.visible){(window.requestAnimationFrame||setTimeout)((function(){var t=e.props.rtl?e.getRTLMenuPosition():e.getMenuPosition();e.subMenu.style.removeProperty("top"),e.subMenu.style.removeProperty("bottom"),e.subMenu.style.removeProperty("left"),e.subMenu.style.removeProperty("right"),p(t,"top")&&(e.subMenu.style.top=t.top),p(t,"left")&&(e.subMenu.style.left=t.left),p(t,"bottom")&&(e.subMenu.style.bottom=t.bottom),p(t,"right")&&(e.subMenu.style.right=t.right),e.subMenu.classList.add(h),e.registerHandlers(),e.setState({selectedItem:null})}))}else{this.subMenu.addEventListener("transitionend",(function t(){e.subMenu.removeEventListener("transitionend",t),e.subMenu.style.removeProperty("bottom"),e.subMenu.style.removeProperty("right"),e.subMenu.style.top=0,e.subMenu.style.left="100%",e.unregisterHandlers()})),this.subMenu.classList.remove(h)}}},{key:"componentWillUnmount",value:function(){this.listenId&&S.unregister(this.listenId),this.opentimer&&clearTimeout(this.opentimer),this.closetimer&&clearTimeout(this.closetimer),this.unregisterHandlers(!0)}},{key:"render",value:function(){var e,t=this.props,n=t.children,o=t.attributes,i=t.disabled,a=t.title,s=t.selected,l=this.state.visible,c={ref:this.menuRef,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,className:u()(v,M,o.listClassName),style:{position:"relative"}},d={className:u()(v,o.className,(e={},V(e,u()(y,o.disabledClassName),i),V(e,u()(m,o.visibleClassName),l),V(e,u()(w,o.selectedClassName),s),e)),onMouseMove:this.props.onMouseMove,onMouseOut:this.props.onMouseOut,onClick:this.handleClick},p={ref:this.subMenuRef,style:{position:"absolute",transition:"opacity 1ms",top:0,left:"100%"},className:u()(f,this.props.className)};return r.a.createElement("nav",A({},c,{role:"menuitem",tabIndex:"-1","aria-haspopup":"true"}),r.a.createElement("div",A({},o,d),a),r.a.createElement("nav",A({},p,{role:"menu",tabIndex:"-1"}),this.renderChildren(n)))}}]),t}(K);q.propTypes={children:a.a.node.isRequired,attributes:a.a.object,title:a.a.node.isRequired,className:a.a.string,disabled:a.a.bool,hoverDelay:a.a.number,rtl:a.a.bool,selected:a.a.bool,onMouseMove:a.a.func,onMouseOut:a.a.func,forceOpen:a.a.bool,forceClose:a.a.func,parentKeyNavigationHandler:a.a.func},q.defaultProps={disabled:!1,hoverDelay:500,attributes:{},className:"",rtl:!1,selected:!1,onMouseMove:function(){return null},onMouseOut:function(){return null},forceOpen:!1,forceClose:function(){return null},parentKeyNavigationHandler:function(){return null}};var X=q,W=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var Y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.registerHandlers=function(){document.addEventListener("mousedown",n.handleOutsideClick),document.addEventListener("touchstart",n.handleOutsideClick),document.addEventListener("scroll",n.handleHide),document.addEventListener("contextmenu",n.handleHide),document.addEventListener("keydown",n.handleKeyNavigation),window.addEventListener("resize",n.handleHide)},n.unregisterHandlers=function(){document.removeEventListener("mousedown",n.handleOutsideClick),document.removeEventListener("touchstart",n.handleOutsideClick),document.removeEventListener("scroll",n.handleHide),document.removeEventListener("contextmenu",n.handleHide),document.removeEventListener("keydown",n.handleKeyNavigation),window.removeEventListener("resize",n.handleHide)},n.handleShow=function(e){if(e.detail.id===n.props.id&&!n.state.isVisible){var t=e.detail.position,o=t.x,r=t.y;n.setState({isVisible:!0,x:o,y:r}),n.registerHandlers(),d(n.props.onShow,e)}},n.handleHide=function(e){!n.state.isVisible||e.detail&&e.detail.id&&e.detail.id!==n.props.id||(n.unregisterHandlers(),n.setState({isVisible:!1,selectedItem:null,forceSubMenuOpen:!1}),d(n.props.onHide,e))},n.handleOutsideClick=function(e){n.menu.contains(e.target)||_()},n.handleMouseLeave=function(e){e.preventDefault(),d(n.props.onMouseLeave,e,c()({},n.props.data,O.data),O.target),n.props.hideOnLeave&&_()},n.handleContextMenu=function(e){e.preventDefault(),n.handleHide(e)},n.hideMenu=function(e){27!==e.keyCode&&13!==e.keyCode||_()},n.getMenuPosition=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o={top:t,left:e};if(!n.menu)return o;var r=window,i=r.innerWidth,a=r.innerHeight,s=n.menu.getBoundingClientRect();return t+s.height>a&&(o.top-=s.height),e+s.width>i&&(o.left-=s.width),o.top<0&&(o.top=s.height<a?(a-s.height)/2:0),o.left<0&&(o.left=s.width<i?(i-s.width)/2:0),o},n.getRTLMenuPosition=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o={top:t,left:e};if(!n.menu)return o;var r=window,i=r.innerWidth,a=r.innerHeight,s=n.menu.getBoundingClientRect();return o.left=e-s.width,t+s.height>a&&(o.top-=s.height),o.left<0&&(o.left+=s.width),o.top<0&&(o.top=s.height<a?(a-s.height)/2:0),o.left+s.width>i&&(o.left=s.width<i?(i-s.width)/2:0),o},n.menuRef=function(e){n.menu=e},n.state=c()({},n.state,{x:0,y:0,isVisible:!1}),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),W(t,[{key:"getSubMenuType",value:function(){return X}},{key:"componentDidMount",value:function(){this.listenId=S.register(this.handleShow,this.handleHide)}},{key:"componentDidUpdate",value:function(){var e=this;if(this.state.isVisible){var t=window.requestAnimationFrame||setTimeout;t((function(){var n=e.state,o=n.x,r=n.y,i=e.props.rtl?e.getRTLMenuPosition(o,r):e.getMenuPosition(o,r),a=i.top,s=i.left;t((function(){e.menu&&(e.menu.style.top=a+"px",e.menu.style.left=s+"px",e.menu.style.opacity=1,e.menu.style.pointerEvents="auto")}))}))}else{if(!this.menu)return;this.menu.style.opacity=0,this.menu.style.pointerEvents="none"}}},{key:"componentWillUnmount",value:function(){this.listenId&&S.unregister(this.listenId),this.unregisterHandlers()}},{key:"render",value:function(){var e,t,n,o=this.props,i=o.children,a=o.className,s=o.style,l=this.state.isVisible,d=c()({},s,{position:"fixed",opacity:0,pointerEvents:"none"}),p=u()(f,a,(n=l,(t=h)in(e={})?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e));return r.a.createElement("nav",{role:"menu",tabIndex:"-1",ref:this.menuRef,style:d,className:p,onContextMenu:this.handleContextMenu,onMouseLeave:this.handleMouseLeave},this.renderChildren(i))}}]),t}(K);Y.propTypes={id:a.a.string.isRequired,children:a.a.node.isRequired,data:a.a.object,className:a.a.string,hideOnLeave:a.a.bool,rtl:a.a.bool,onHide:a.a.func,onMouseLeave:a.a.func,onShow:a.a.func,style:a.a.object},Y.defaultProps={className:"",data:{},hideOnLeave:!1,rtl:!1,onHide:function(){return null},onMouseLeave:function(){return null},onShow:function(){return null},style:{}};var B=Y,F=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function z(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var J=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=z(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.touchHandled=!1,o.handleMouseDown=function(e){o.props.holdToDisplay>=0&&0===e.button&&(e.persist(),e.stopPropagation(),o.mouseDownTimeoutId=setTimeout((function(){return o.handleContextClick(e)}),o.props.holdToDisplay)),d(o.props.attributes.onMouseDown,e)},o.handleMouseUp=function(e){0===e.button&&clearTimeout(o.mouseDownTimeoutId),d(o.props.attributes.onMouseUp,e)},o.handleMouseOut=function(e){0===e.button&&clearTimeout(o.mouseDownTimeoutId),d(o.props.attributes.onMouseOut,e)},o.handleTouchstart=function(e){o.touchHandled=!1,o.props.holdToDisplay>=0&&(e.persist(),e.stopPropagation(),o.touchstartTimeoutId=setTimeout((function(){o.handleContextClick(e),o.touchHandled=!0}),o.props.holdToDisplay)),d(o.props.attributes.onTouchStart,e)},o.handleTouchEnd=function(e){o.touchHandled&&e.preventDefault(),clearTimeout(o.touchstartTimeoutId),d(o.props.attributes.onTouchEnd,e)},o.handleContextMenu=function(e){o.handleContextClick(e),d(o.props.attributes.onContextMenu,e)},o.handleContextClick=function(e){if(!o.props.disable&&(!o.props.disableIfShiftIsPressed||!e.shiftKey)){e.preventDefault(),e.stopPropagation();var t=e.clientX||e.touches&&e.touches[0].pageX,n=e.clientY||e.touches&&e.touches[0].pageY;o.props.posX&&(t-=o.props.posX),o.props.posY&&(n-=o.props.posY),_();var r=d(o.props.collect,o.props),i={position:{x:t,y:n},target:o.elem,id:o.props.id};r&&"function"===typeof r.then?r.then((function(t){i.data=c()({},t,{target:e.target}),P(i)})):(i.data=c()({},r,{target:e.target}),P(i))}},o.elemRef=function(e){o.elem=e},z(o,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),F(t,[{key:"render",value:function(){var e=this.props,t=e.renderTag,n=e.attributes,o=e.children,i=c()({},n,{className:u()(b,n.className),onContextMenu:this.handleContextMenu,onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onTouchStart:this.handleTouchstart,onTouchEnd:this.handleTouchEnd,onMouseOut:this.handleMouseOut,ref:this.elemRef});return r.a.createElement(t,i,o)}}]),t}(o.Component);J.propTypes={id:a.a.string.isRequired,children:a.a.node.isRequired,attributes:a.a.object,collect:a.a.func,disable:a.a.bool,holdToDisplay:a.a.number,posX:a.a.number,posY:a.a.number,renderTag:a.a.oneOfType([a.a.node,a.a.func]),disableIfShiftIsPressed:a.a.bool},J.defaultProps={attributes:{},collect:function(){return null},disable:!1,holdToDisplay:1e3,renderTag:"div",posX:0,posY:0,disableIfShiftIsPressed:!1};var G=J;Object.assign,function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}}();[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(Object.keys(G.propTypes)),["children"]);n.d(t,"a",(function(){return B})),n.d(t,"b",(function(){return G})),n.d(t,"c",(function(){return R})),n.d(t,"d",(function(){return X}))}}]);
//# sourceMappingURL=107.a6bff79f.chunk.js.map