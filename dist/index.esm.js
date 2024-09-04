import{Animation as r}from"animatable-js";import{useRef as e,useState as t,useEffect as n}from"react";function o(o,a,i){const m=e(new r(o,a,i)).current,[s,c]=t(m.value);return n((()=>(m.addListener(c),()=>m.dispose())),[]),[s,m]}export{o as useAnimation};
//# sourceMappingURL=index.esm.js.map
