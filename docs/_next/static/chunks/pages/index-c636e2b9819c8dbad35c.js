_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{RNiq:function(e,t,a){"use strict";a.r(t);var n=a("HALo"),o=a("vJKn"),r=a.n(o),i=a("rg98"),l=a("q1tI"),s=a.n(l),c=a("iae6"),d=a("ofer");function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u=a("YFqc"),m=a.n(u),b=a("bXiM"),f=a("5CWz"),h=a("wx14"),g=a("Ff2n"),v=(a("17x9"),a("iuhU")),y=a("H2TA"),w=a("ye/S"),O=l.forwardRef((function(e,t){var a=e.absolute,n=void 0!==a&&a,o=e.classes,r=e.className,i=e.component,s=void 0===i?"hr":i,c=e.flexItem,d=void 0!==c&&c,p=e.light,u=void 0!==p&&p,m=e.orientation,b=void 0===m?"horizontal":m,f=e.role,y=void 0===f?"hr"!==s?"separator":void 0:f,w=e.variant,O=void 0===w?"fullWidth":w,_=Object(g.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return l.createElement(s,Object(h.a)({className:Object(v.a)(o.root,r,"fullWidth"!==O&&o[O],n&&o.absolute,d&&o.flexItem,u&&o.light,"vertical"===b&&o.vertical),role:y,ref:t},_))})),_=Object(y.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(w.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(O),x=a("Xt1q"),k=a("ODXe"),j=a("kfZ5"),C=a("wpWl"),S=a("tr08"),E=a("4Hym"),N=a("bfFb"),T={entering:{opacity:1},entered:{opacity:1}},D={enter:C.b.enteringScreen,exit:C.b.leavingScreen},I=l.forwardRef((function(e,t){var a=e.children,n=e.disableStrictModeCompat,o=void 0!==n&&n,r=e.in,i=e.onEnter,s=e.onEntered,c=e.onEntering,d=e.onExit,p=e.onExited,u=e.onExiting,m=e.style,b=e.TransitionComponent,f=void 0===b?j.a:b,v=e.timeout,y=void 0===v?D:v,w=Object(g.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","TransitionComponent","timeout"]),O=Object(S.a)(),_=O.unstable_strictMode&&!o,x=l.useRef(null),C=Object(N.a)(a.ref,t),I=Object(N.a)(_?x:void 0,C),P=function(e){return function(t,a){if(e){var n=_?[x.current,t]:[t,a],o=Object(k.a)(n,2),r=o[0],i=o[1];void 0===i?e(r):e(r,i)}}},z=P(c),R=P((function(e,t){Object(E.b)(e);var a=Object(E.a)({style:m,timeout:y},{mode:"enter"});e.style.webkitTransition=O.transitions.create("opacity",a),e.style.transition=O.transitions.create("opacity",a),i&&i(e,t)})),K=P(s),V=P(u),M=P((function(e){var t=Object(E.a)({style:m,timeout:y},{mode:"exit"});e.style.webkitTransition=O.transitions.create("opacity",t),e.style.transition=O.transitions.create("opacity",t),d&&d(e)})),B=P(p);return l.createElement(f,Object(h.a)({appear:!0,in:r,nodeRef:_?x:void 0,onEnter:R,onEntered:K,onEntering:z,onExit:M,onExited:B,onExiting:V,timeout:y},w),(function(e,t){return l.cloneElement(a,Object(h.a)({style:Object(h.a)({opacity:0,visibility:"exited"!==e||r?void 0:"hidden"},T[e],m,a.props.style),ref:I},t))}))})),P=l.forwardRef((function(e,t){var a=e.children,n=e.classes,o=e.className,r=e.invisible,i=void 0!==r&&r,s=e.open,c=e.transitionDuration,d=e.TransitionComponent,p=void 0===d?I:d,u=Object(g.a)(e,["children","classes","className","invisible","open","transitionDuration","TransitionComponent"]);return l.createElement(p,Object(h.a)({in:s,timeout:c},u),l.createElement("div",{className:Object(v.a)(n.root,o,i&&n.invisible),"aria-hidden":!0,ref:t},a))})),z=Object(y.a)({root:{zIndex:-1,position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},{name:"MuiBackdrop"})(P),R=a("i8i4"),K=a("l3Wi");function V(e,t){var a=function(e,t){var a,n=t.getBoundingClientRect();if(t.fakeTransform)a=t.fakeTransform;else{var o=window.getComputedStyle(t);a=o.getPropertyValue("-webkit-transform")||o.getPropertyValue("transform")}var r=0,i=0;if(a&&"none"!==a&&"string"===typeof a){var l=a.split("(")[1].split(")")[0].split(",");r=parseInt(l[4],10),i=parseInt(l[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(").concat(r-n.left,"px)"):"right"===e?"translateX(-".concat(n.left+n.width-r,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(").concat(i-n.top,"px)"):"translateY(-".concat(n.top+n.height-i,"px)")}(e,t);a&&(t.style.webkitTransform=a,t.style.transform=a)}var M={enter:C.b.enteringScreen,exit:C.b.leavingScreen},B=l.forwardRef((function(e,t){var a=e.children,n=e.direction,o=void 0===n?"down":n,r=e.in,i=e.onEnter,s=e.onEntered,c=e.onEntering,d=e.onExit,p=e.onExited,u=e.onExiting,m=e.style,b=e.timeout,f=void 0===b?M:b,v=e.TransitionComponent,y=void 0===v?j.a:v,w=Object(g.a)(e,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),O=Object(S.a)(),_=l.useRef(null),x=l.useCallback((function(e){_.current=R.findDOMNode(e)}),[]),k=Object(N.a)(a.ref,x),C=Object(N.a)(k,t),T=function(e){return function(t){e&&(void 0===t?e(_.current):e(_.current,t))}},D=T((function(e,t){V(o,e),Object(E.b)(e),i&&i(e,t)})),I=T((function(e,t){var a=Object(E.a)({timeout:f,style:m},{mode:"enter"});e.style.webkitTransition=O.transitions.create("-webkit-transform",Object(h.a)({},a,{easing:O.transitions.easing.easeOut})),e.style.transition=O.transitions.create("transform",Object(h.a)({},a,{easing:O.transitions.easing.easeOut})),e.style.webkitTransform="none",e.style.transform="none",c&&c(e,t)})),P=T(s),z=T(u),B=T((function(e){var t=Object(E.a)({timeout:f,style:m},{mode:"exit"});e.style.webkitTransition=O.transitions.create("-webkit-transform",Object(h.a)({},t,{easing:O.transitions.easing.sharp})),e.style.transition=O.transitions.create("transform",Object(h.a)({},t,{easing:O.transitions.easing.sharp})),V(o,e),d&&d(e)})),W=T((function(e){e.style.webkitTransition="",e.style.transition="",p&&p(e)})),A=l.useCallback((function(){_.current&&V(o,_.current)}),[o]);return l.useEffect((function(){if(!r&&"down"!==o&&"right"!==o){var e=Object(K.a)((function(){_.current&&V(o,_.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[o,r]),l.useEffect((function(){r||A()}),[r,A]),l.createElement(y,Object(h.a)({nodeRef:_,onEnter:D,onEntered:P,onEntering:I,onExit:B,onExited:W,onExiting:z,appear:!0,in:r,timeout:f},w),(function(e,t){return l.cloneElement(a,Object(h.a)({ref:C,style:Object(h.a)({visibility:"exited"!==e||r?void 0:"hidden"},m,a.props.style)},t))}))})),W=a("kKAo"),A=a("NqtD"),L={left:"right",right:"left",top:"down",bottom:"up"};var X={enter:C.b.enteringScreen,exit:C.b.leavingScreen},q=l.forwardRef((function(e,t){var a=e.anchor,n=void 0===a?"left":a,o=e.BackdropProps,r=e.children,i=e.classes,s=e.className,c=e.elevation,d=void 0===c?16:c,p=e.ModalProps,u=(p=void 0===p?{}:p).BackdropProps,m=Object(g.a)(p,["BackdropProps"]),b=e.onClose,f=e.open,y=void 0!==f&&f,w=e.PaperProps,O=void 0===w?{}:w,_=e.SlideProps,k=e.TransitionComponent,j=void 0===k?B:k,C=e.transitionDuration,E=void 0===C?X:C,N=e.variant,T=void 0===N?"temporary":N,D=Object(g.a)(e,["anchor","BackdropProps","children","classes","className","elevation","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"]),I=Object(S.a)(),P=l.useRef(!1);l.useEffect((function(){P.current=!0}),[]);var R=function(e,t){return"rtl"===e.direction&&function(e){return-1!==["left","right"].indexOf(e)}(t)?L[t]:t}(I,n),K=l.createElement(W.a,Object(h.a)({elevation:"temporary"===T?d:0,square:!0},O,{className:Object(v.a)(i.paper,i["paperAnchor".concat(Object(A.a)(R))],O.className,"temporary"!==T&&i["paperAnchorDocked".concat(Object(A.a)(R))])}),r);if("permanent"===T)return l.createElement("div",Object(h.a)({className:Object(v.a)(i.root,i.docked,s),ref:t},D),K);var V=l.createElement(j,Object(h.a)({in:y,direction:L[R],timeout:E,appear:P.current},_),K);return"persistent"===T?l.createElement("div",Object(h.a)({className:Object(v.a)(i.root,i.docked,s),ref:t},D),V):l.createElement(x.a,Object(h.a)({BackdropProps:Object(h.a)({},o,u,{transitionDuration:E}),BackdropComponent:z,className:Object(v.a)(i.root,i.modal,s),open:y,onClose:b,ref:t},D,m),V)})),U=Object(y.a)((function(e){return{root:{},docked:{flex:"0 0 auto"},paper:{overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},paperAnchorLeft:{left:0,right:"auto"},paperAnchorRight:{left:"auto",right:0},paperAnchorTop:{top:0,left:0,bottom:"auto",right:0,height:"auto",maxHeight:"100%"},paperAnchorBottom:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},paperAnchorDockedLeft:{borderRight:"1px solid ".concat(e.palette.divider)},paperAnchorDockedTop:{borderBottom:"1px solid ".concat(e.palette.divider)},paperAnchorDockedRight:{borderLeft:"1px solid ".concat(e.palette.divider)},paperAnchorDockedBottom:{borderTop:"1px solid ".concat(e.palette.divider)},modal:{}}}),{name:"MuiDrawer",flip:!1})(q),H=a("ZPUd"),$=a.n(H),F=a("PsDL"),G=a("VD++"),Y=l.forwardRef((function(e,t){var a=e.children,n=e.classes,o=e.className,r=e.color,i=void 0===r?"default":r,s=e.component,c=void 0===s?"button":s,d=e.disabled,p=void 0!==d&&d,u=e.disableElevation,m=void 0!==u&&u,b=e.disableFocusRipple,f=void 0!==b&&b,y=e.endIcon,w=e.focusVisibleClassName,O=e.fullWidth,_=void 0!==O&&O,x=e.size,k=void 0===x?"medium":x,j=e.startIcon,C=e.type,S=void 0===C?"button":C,E=e.variant,N=void 0===E?"text":E,T=Object(g.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),D=j&&l.createElement("span",{className:Object(v.a)(n.startIcon,n["iconSize".concat(Object(A.a)(k))])},j),I=y&&l.createElement("span",{className:Object(v.a)(n.endIcon,n["iconSize".concat(Object(A.a)(k))])},y);return l.createElement(G.a,Object(h.a)({className:Object(v.a)(n.root,n[N],o,"inherit"===i?n.colorInherit:"default"!==i&&n["".concat(N).concat(Object(A.a)(i))],"medium"!==k&&[n["".concat(N,"Size").concat(Object(A.a)(k))],n["size".concat(Object(A.a)(k))]],m&&n.disableElevation,p&&n.disabled,_&&n.fullWidth),component:c,disabled:p,focusRipple:!f,focusVisibleClassName:Object(v.a)(n.focusVisible,w),ref:t,type:S},T),l.createElement("span",{className:n.label},D,a,I))})),Z=Object(y.a)((function(e){return{root:Object(h.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(w.c)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(w.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(w.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(w.c)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(w.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(w.c)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(w.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(Y),J=a("eD//"),Q=a("tVbE"),ee=a("MquD"),te=l.forwardRef((function(e,t){var a=e.children,n=e.classes,o=e.className,r=e.disableTypography,i=void 0!==r&&r,s=e.inset,c=void 0!==s&&s,p=e.primary,u=e.primaryTypographyProps,m=e.secondary,b=e.secondaryTypographyProps,f=Object(g.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),y=l.useContext(ee.a).dense,w=null!=p?p:a;null==w||w.type===d.a||i||(w=l.createElement(d.a,Object(h.a)({variant:y?"body2":"body1",className:n.primary,component:"span",display:"block"},u),w));var O=m;return null==O||O.type===d.a||i||(O=l.createElement(d.a,Object(h.a)({variant:"body2",className:n.secondary,color:"textSecondary",display:"block"},b),O)),l.createElement("div",Object(h.a)({className:Object(v.a)(n.root,o,y&&n.dense,c&&n.inset,w&&O&&n.multiline),ref:t},f),w,O)})),ae=Object(y.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(te),ne=a("uniG"),oe=a.n(ne),re=a("lO0E"),ie=a("R/WZ"),le=[{title:"Active cases",dataKeyX:"date_string",bars:[{dataKey:"active_cases",fill:"#f9d45c",name:"Active cases",stackId:"a"}]},{title:"Total cases",dataKeyX:"date_string",areas:[{dataKey:"Total Cases",fill:"#f9d45c",name:"Total cases",stackId:"a"}]},{title:"New cases",dataKeyX:"date_string",bars:[{dataKey:"new_cases",name:"New cases",fill:"#f9d45c"}],lines:[{dataKey:"new_cases_rolling_average",name:"7 day rolling average",stroke:"black",strokeWidth:2,dot:!1}]},{title:"Total deaths",dataKeyX:"date_string",areas:[{dataKey:"Deaths",name:"Total deaths",fill:"#ef8c8c"}]},{title:"New deaths",dataKeyX:"date_string",bars:[{dataKey:"new_deaths",name:"New deaths",fill:"#ef8c8c"}],lines:[{dataKey:"new_deaths_rolling_average",name:"7 day rolling average",stroke:"black",strokeWidth:2,dot:!1}]},{title:"New tests",dataKeyX:"date_string",bars:[{dataKey:"Total tests completed in the last day",name:"New tests",fill:"#509ee3"}],lines:[{dataKey:"Under Investigation",name:"Pending tests",dot:!1,strokeWidth:2,stroke:"teal"},{dataKey:"tests_rolling_average",name:"7 day rolling average",stroke:"black",strokeWidth:2,dot:!1}]},{title:"Percent positive",dataKeyX:"date_string",bars:[{dataKey:"percent_positive",name:"Percent positive",fill:"#509ee3"}],lines:[{dataKey:"tests_positive_rolling_average",name:"7 day rolling average",stroke:"black",strokeWidth:2,dot:!1}]},{title:"Patients hospitalized",dataKeyX:"date_string",bars:[{dataKey:"Number of patients hospitalized with COVID-19",name:"Patients hospitalized",fill:"#ef8c8c"}]},{title:"Patients in ICU",dataKeyX:"date_string",bars:[{dataKey:"Number of patients in ICU on a ventilator with COVID-19",fill:"#509ee3",name:"ICU (with ventilator)",stackId:"a"},{dataKey:"icu_no_ventilator",fill:"#7172ad",name:"ICU (no ventilator)",stackId:"a"}]}],se=[{dataKeyX:"date_string",title:"Total people fully vaccinated",areas:[{dataKey:"total_individuals_fully_vaccinated",name:"Total people fully vacincated",fill:"#509ee3"}]},{dataKeyX:"date_string",title:"Daily vaccines administered",bars:[{dataKey:"previous_day_doses_administered",name:"Daily doses administered",fill:"#509ee3"}],lines:[{dataKey:"new_vaccines_rolling_average",name:"7 day rolling average",stroke:"black",strokeWidth:2,dot:!1}]},{dataKeyX:"date_string",title:"Total vaccines administered",areas:[{dataKey:"total_doses_administered",name:"Total doses administered",fill:"#509ee3"}]}],ce=s.a.createElement;function de(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function pe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?de(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):de(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ue=Object(ie.a)((function(e){return{drawer:{width:240},menuButton:{marginRight:e.spacing(2)},closeButton:{margin:e.spacing(2)},toolbar:pe(pe({},e.mixins.toolbar),{},{textAlign:"right"}),appBar:{flexGrow:1},title:{flexGrow:1},drawerPaper:{width:240},content:{padding:e.spacing(3)}}})),me=function(e){var t=e.window,a=e.children,n=ue(),o=Object(l.useState)(!1),r=o[0],i=o[1],s=function(){i(!r)},c=ce("div",null,ce("div",{className:n.toolbar},ce(F.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:s,className:n.closeButton},ce($.a,null))),ce(_,null),ce(J.a,null,ce(Q.a,{button:!0,component:"a",href:"#"},ce(ae,{primary:"Summary"})),se.map((function(e,t){return ce(Q.a,{button:!0,component:"a",key:t,href:"#".concat(e.title)},ce(ae,{primary:e.title}))})),le.map((function(e,t){return ce(Q.a,{button:!0,component:"a",key:t,href:"#".concat(e.title)},ce(ae,{primary:e.title}))})))),p=void 0!==t?function(){return t().document.body}:void 0;return ce("div",{className:n.root},ce(f.a,null),ce(b.a,{position:"fixed",className:n.appBar},ce(re.a,null,ce(F.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:s,className:n.menuButton},ce(oe.a,null)),ce(d.a,{variant:"h6",noWrap:!0,className:n.title},"Covid-19 in Ontario"),ce(m.a,{href:"/phus"},ce(Z,{color:"inherit"},"PHUs")),ce(m.a,{href:"/about"},ce(Z,{color:"inherit"},"About")))),ce("nav",{className:n.drawer},ce(U,{container:p,variant:"temporary",anchor:"left",open:r,onClose:s,classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!1}},c)),ce("main",{className:n.content},ce("div",{className:n.toolbar}),a))},be=s.a.createElement,fe=Object(ie.a)({paper:{margin:16,padding:16}}),he=function(){var e=fe();return be(W.a,{className:e.paper},be(d.a,{variant:"h6"},"Recent updates"),be("ul",null,be("li",null,be("strong",null,"(2021/03/14)")," Added plot showing total people fully vaccinated."),be("li",null,be("strong",null,"(2021/03/14)")," Making things a little prettier."),be("li",null,be("strong",null,"(2021/03/10)")," Added ",be("a",{href:"/ontario-covid19/phus"},"a page")," to filter stats by public health unit (work in progress)"),be("li",null,be("strong",null,"(2021/03/07)")," Added some features to the Summary table and added a 7 day moving average for daily vaccines. Thanks ",be("a",{href:"https://github.com/IsaacBerman",target:"_blank",rel:"noopener noreferrer"},"IsaacBerman")," for the pull requests!"),be("li",null,be("strong",null,"(2021/02/20)")," Added a plot showing daily vaccinations."),be("li",null,be("strong",null,"(2021/02/07)")," Some minor prettifications. Thanks ",be("a",{href:"https://github.com/TikiTDO",target:"_blank",rel:"noopener noreferrer"},"TikiTDO")," for the pull requests!")))},ge=a("SqWM"),ve=s.a.createElement,ye=function(e){return e.toLocaleString()},we=function(e){return"".concat(e>=0?"+":"").concat(ye(e))},Oe=function(e){var t=e.dataSource,a=void 0===t?[]:t,n=[{label:"Date",key:"date_string"},{label:"Active cases",key:"active_cases",formatValue:ye,align:"right"},{label:"",key:"new_active_cases",formatValue:we,highlight:!0},{label:"Total cases",key:"Total Cases",formatValue:ye,align:"right"},{label:"",key:"new_cases",formatValue:we,highlight:!0},{label:"Deaths",key:"Deaths",formatValue:ye,align:"right"},{label:"",key:"new_deaths",formatValue:we,highlight:!0},{label:"Patients hospitalized",key:"Number of patients hospitalized with COVID-19",formatValue:ye,align:"right"},{label:"",key:"new_hospital",formatValue:we,highlight:!0},{label:"Patients in ICU",key:"Number of patients in ICU with COVID-19",formatValue:ye,align:"right"},{label:"",key:"new_icu",formatValue:we,highlight:!0}];return ve(ge.a,{title:"Status of cases in Ontario",data:a,columns:n})},_e=a("M/4y"),xe=s.a.createElement,ke=function(e){var t=e.data,a=void 0===t?[]:t;if(!a.length)return null;var n=a[a.length-1].total_individuals_fully_vaccinated;return xe("div",{className:"mv16"},xe(d.a,{variant:"h6"},"**",Math.round(n/1457e4*100),"% of the population Ontario is fully vaccinated.**"))},je=a("NGxS"),Ce=function(){return new Promise((function(e){Object(je.a)("https://data.ontario.ca/api/3/action/datastore_search?resource_id=ed270bb8-340b-41f9-a7c6-e8ef587e6d11&limit=1000",(function(t){var a=t.result.records;a.sort((function(e,t){return new Date(e["Reported Date"])-new Date(t["Reported Date"])}));var n=[0,0,0,0,0,0,0],o=[0,0,0,0,0,0,0],r=[0,0,0,0,0,0,0],i=[0,0,0,0,0,0,0],l=0,s=0,c=0,d=0,p=0,u=0;a.map((function(e){e.new_cases=e["Total Cases"]-l,e.new_deaths=Math.max(e.Deaths-s,0),e.icu_no_ventilator=e["Number of patients in ICU with COVID-19"]-e["Number of patients in ICU on a ventilator with COVID-19"],e.date_string=new Date(e["Reported Date"]).toLocaleString("en-us",{month:"short",day:"numeric"}),e.active_cases=e["Total Cases"]-e.Resolved-e.Deaths,e.new_active_cases=e.active_cases-c,e.new_resolved=e.Resolved-d,e.new_hospital=e["Number of patients hospitalized with COVID-19"]-p,e.new_icu=e["Number of patients in ICU with COVID-19"]-u,e.percent_positive=(e.new_cases/e["Total tests completed in the last day"]*100).toFixed(2),(e.percent_positive>100||isNaN(e.percent_positive))&&(e.percent_positive=0),i.shift(),i.push(Number(e.percent_positive||0)),e.tests_positive_rolling_average=(i.reduce((function(e,t){return t+e}),0)/7).toFixed(2),r.shift(),r.push(e["Total tests completed in the last day"]||0),e.tests_rolling_average=Math.round(r.reduce((function(e,t){return t+e}),0)/7),n.shift(),n.push(e.new_cases);var t=n.reduce((function(e,t){return t+e}),0);e.new_cases_rolling_average=Math.round(t/7),o.shift(),o.push(e.new_deaths);var a=o.reduce((function(e,t){return t+e}),0);return e.new_deaths_rolling_average=Math.round(a/7),u=e["Number of patients in ICU with COVID-19"],p=e["Number of patients hospitalized with COVID-19"],l=e["Total Cases"],s=e.Deaths,d=e.Resolved,c=e.active_cases,e})),e(a)}))}))},Se=function(){return new Promise((function(e){Object(je.a)("https://data.ontario.ca/api/3/action/datastore_search?resource_id=8a89caa9-511c-4568-af89-7f2174b4378c&limit=100000",(function(t){var a=t.result.records;a.sort((function(e,t){return new Date(e.report_date)-new Date(t.report_date)}));for(var n=[0,0,0,0,0,0,0],o=[],r=1;r<a.length;r++){var i=a[r],l=new Date(i.report_date).getTime(),s=a[r-1];o.push(s);var c=new Date(s.report_date);for(c.setDate(c.getDate()+1);c.getTime()<l;){var d=Object.assign({},s,{report_date:c.toISOString().replace(/\.\d+Z/,"")});o.push(d),c.setDate(c.getDate()+1)}}o.push(a[a.length-1]),o.map((function(e){var t=e.report_date,a=e.total_doses_administered,o=e.previous_day_doses_administered,r=e.total_individuals_fully_vaccinated;e.date_string=new Date(t).toLocaleString("en-us",{month:"short",day:"numeric"}),e.total_doses_administered=Number(a.replace(/,/g,"")),e.previous_day_doses_administered=Number(o.replace(/,/g,"")),e.total_individuals_fully_vaccinated=Number(r.replace(/,/g,"")),n.shift(),n.push(e.previous_day_doses_administered);var i=n.reduce((function(e,t){return t+e}),0);return e.new_vaccines_rolling_average=Math.round(i/7),e})),e(o)}))}))},Ee=s.a.createElement;t.default=function(){var e=Object(l.useState)([]),t=e[0],a=e[1],o=Object(l.useState)([]),s=o[0],p=o[1],u=Object(l.useState)(!0),m=u[0],b=u[1],f=function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Se().then(p);case 2:return e.next=4,Ce().then(a);case 4:b(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){f()}),[]),Ee(me,null,Ee(d.a,{variant:"h4"},"Simple dashboard visualizing Ontario's Covid-19 data."),Ee(ke,{data:s}),Ee("p",null,"I've meen maintaining this dashboard for over a year now!. If you've gotten value from it, consider"," ",Ee("a",{href:"https://www.buymeacoffee.com/russellpollari"},"buying me a coffee"),"."),Ee("p",null,"Want to contribute and make it better? Fork this dashboard on ",Ee("a",{href:"https://github.com/Russell-Pollari/ontario-covid19"},"GitHub"),"."),Ee(he,null),m?Ee("p",{className:"tc"},Ee("strong",null,"Hold tight.. just fetching the latest data"),Ee("div",null,Ee(c.a,null))):Ee(l.Fragment,null,Ee(Oe,{dataSource:t}),se.map((function(e,t){return Ee(_e.a,Object(n.a)({key:t,dataSource:s,syncId:"vaccineCharts"},e))})),le.map((function(e,a){return Ee(_e.a,Object(n.a)({key:a,dataSource:t,syncId:"syncCharts"},e))}))))}},ZPUd:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("q1tI")),r=(0,n(a("8/g6")).default)(o.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=r},uniG:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("q1tI")),r=(0,n(a("8/g6")).default)(o.default.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.default=r},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])}},[["vlRD",0,2,1,3,4]]]);