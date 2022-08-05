"use strict";(self.webpackChunkoperate_first=self.webpackChunkoperate_first||[]).push([[947],{1955:function(e,t,n){n.d(t,{a:function(){return M}});var r=n(7294),o=n(5849),a=n(4942),i=(0,r.createContext)(null);var l=n(7569),c=(0,l.k)((function(e,t,n){var r=t.spacing,o=t.center,i={ref:n("itemWrapper"),display:"inline"};return{itemWrapper:i,item:{lineHeight:o?1:e.lineHeight,"&:not(:first-of-type)":{marginTop:e.fn.size({size:r,sizes:e.spacing})}},withIcon:(0,a.Z)({listStyle:"none"},"& .".concat(i.ref),{display:"inline-flex",alignItems:o?"center":"flex-start"}),itemIcon:{display:"inline-block",verticalAlign:"middle",marginRight:e.spacing.sm}}})),s=n(7697);function u(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=Object.defineProperty,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,h=function(e,t,n){return t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n};function g(e){var t=e,n=t.className,o=t.children,l=t.icon,f=function(e,t){var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&d){var o,a=u(d(e));try{for(a.s();!(o=a.n()).done;)r=o.value,t.indexOf(r)<0&&y.call(e,r)&&(n[r]=e[r])}catch(i){a.e(i)}finally{a.f()}}return n}(t,["className","children","icon"]),m=(0,r.useContext)(i)||{},g=m.classNames,v=m.styles,b=m.icon,w=m.spacing,E=m.center,I=l||b,k=c({spacing:w,center:E},{classNames:g,styles:v,name:"List"}),O=k.classes,S=k.cx;return r.createElement(s.x,function(e,t){for(var n in t||(t={}))p.call(t,n)&&h(e,n,t[n]);if(d){var r,o=u(d(t));try{for(o.s();!(r=o.n()).done;)n=r.value,y.call(t,n)&&h(e,n,t[n])}catch(a){o.e(a)}finally{o.f()}}return e}({component:"li",className:S(O.item,(0,a.Z)({},O.withIcon,I),n)},f),r.createElement("div",{className:O.itemWrapper},I&&r.createElement("span",{className:O.itemIcon},I),r.createElement("span",null,o)))}function v(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}g.displayName="@mantine/core/ListItem";var w=Object.defineProperty,E=Object.defineProperties,I=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,x=function(e,t,n){return t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},j=function(e,t){for(var n in t||(t={}))O.call(t,n)&&x(e,n,t[n]);if(k){var r,o=v(k(t));try{for(o.s();!(r=o.n()).done;){n=r.value;S.call(t,n)&&x(e,n,t[n])}}catch(a){o.e(a)}finally{o.f()}}return e},A=(0,l.k)((function(e,t){var n,r,o=t.withPadding,a=t.size,i=t.listStyleType;return{root:(n=j({},e.fn.fontStyles()),r={listStyleType:i,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,fontSize:e.fn.size({size:a,sizes:e.fontSizes}),lineHeight:e.lineHeight,margin:0,paddingLeft:o?e.spacing.xl:0,listStylePosition:"inside"},E(n,I(r)))}}));function z(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var P=Object.defineProperty,C=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,W=function(e,t,n){return t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},L={type:"unordered",size:"md",spacing:0},M=(0,r.forwardRef)((function(e,t){var n=(0,o.Z3)("List",L,e),a=n.children,l=n.type,c=n.size,u=n.listStyleType,f=n.withPadding,m=n.center,d=n.spacing,p=n.icon,y=n.className,h=n.styles,g=n.classNames,v=function(e,t){var n={};for(var r in e)D.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&C){var o,a=z(C(e));try{for(a.s();!(o=a.n()).done;)r=o.value,t.indexOf(r)<0&&T.call(e,r)&&(n[r]=e[r])}catch(i){a.e(i)}finally{a.f()}}return n}(n,["children","type","size","listStyleType","withPadding","center","spacing","icon","className","styles","classNames"]),b=A({withPadding:f,size:c,listStyleType:u},{classNames:g,styles:h,name:"List"}),w=b.classes,E=b.cx;return r.createElement(i.Provider,{value:{classNames:g,styles:h,spacing:d,center:m,icon:p}},r.createElement(s.x,function(e,t){for(var n in t||(t={}))D.call(t,n)&&W(e,n,t[n]);if(C){var r,o=z(C(t));try{for(o.s();!(r=o.n()).done;)n=r.value,T.call(t,n)&&W(e,n,t[n])}catch(a){o.e(a)}finally{o.f()}}return e}({component:"unordered"===l?"ul":"ol",className:E(w.root,y),ref:t},v),a))}));M.Item=g,M.displayName="@mantine/core/List"},8413:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7728),o=n(7294),a=["size","color"];function i(e){var t=e.size,n=void 0===t?24:t,i=e.color,l=void 0===i?"currentColor":i,c=(0,r.Kd)(e,a);return o.createElement("svg",(0,r.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-book",width:n,height:n,viewBox:"0 0 24 24",stroke:l,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},c),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"}),o.createElement("path",{d:"M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"}),o.createElement("line",{x1:"3",y1:"6",x2:"3",y2:"19"}),o.createElement("line",{x1:"12",y1:"6",x2:"12",y2:"19"}),o.createElement("line",{x1:"21",y1:"6",x2:"21",y2:"19"}))}},167:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7728),o=n(7294),a=["size","color"];function i(e){var t=e.size,n=void 0===t?24:t,i=e.color,l=void 0===i?"currentColor":i,c=(0,r.Kd)(e,a);return o.createElement("svg",(0,r.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-cloud",width:n,height:n,viewBox:"0 0 24 24",stroke:l,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},c),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 .996c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878"}))}},8563:function(e,t,n){n.r(t);var r=n(7294),o=n(5565),a=n(2230),i=n(4458),l=n(4468),c=n(1955),s=n(547),u=n(1375),f=n(8413),m=n(167);t.default=function(){return r.createElement(o.A,null,r.createElement(a.W,{mb:75},r.createElement(i.D,{order:2,my:"md"},"Data Scientist"),r.createElement(i.D,{order:3,my:"md"},"Cloud Native Data Science and AI Ops: With Operate-First!"),r.createElement(i.D,{order:4,my:"md"},"Ready to help build the next generation of intelligent applications for the cloud, IN the cloud? 😎"),r.createElement(i.D,{order:4,my:"md"},"Who are we?"),r.createElement(l.x,null,"We are data scientists, software engineers and DevOps professionals working within the Operate First framework on open source software with open infrastructure, focused on solving large scale operational issues around developing intelligent applications and managing hybrid cloud systems through the application of advanced automation and machine learning."),r.createElement(i.D,{order:4,my:"md"},"Who are you?"),r.createElement(c.a,{my:"md"},r.createElement(c.a.Item,null,"I’m a data scientist comfortable with Jupyter Notebooks on my laptop, but need specialized hardware and production level support to deploy my model as part of an ML application and don’t know where to start. Check out the"," ",r.createElement("a",{href:"https://www.youtube.com/playlist?list=PL8VBRDTElCWpneB4dBu4u1kHElZVWfAwW"},"Espresso Series")," ","on our YouTube channel."),r.createElement(c.a.Item,{py:"xs"},"I’m a software engineering manager and I need to integrate a few data scientists and their ML models into our product, but I don’t know where to start. Take a look at our ",r.createElement("a",{href:"#"},"DS Workflow")," ","docs."),r.createElement(c.a.Item,null,"I’m a data scientist looking for an open source project where I can apply my skills to a real world problem with real data, and I’m tired of MNIST! Fork our github repo and make a PR to the"," ",r.createElement("a",{href:"https://github.com/aicoe-aiops/ocp-ci-analysis"},"AI4CI")," ","project."),r.createElement(c.a.Item,{py:"xs"},"I’m a site reliability engineer looking to make my life easier. I need to add some more intelligent automation into my cluster and application management process. Got anything for me? Of course! See our list of"," ",r.createElement("a",{href:"https://old.operate-first.cloud/data-science/projectsoverview.md"},"AI Ops projects")," ","we’ve worked on."),r.createElement(c.a.Item,null,"I’m a data scientist, but have no idea how to use OpenShift or Kubernetes to deploy my models and get them out into the world! This"," ",r.createElement("a",{href:"https://github.com/AICoE/elyra-aidevsecops-tutorial"},"tutorial")," ","will get you from 0 to 100 in no time.")),r.createElement(i.D,{order:2,pt:"sm"},"Community Cloud Resources"),r.createElement(s.Z,{mb:"xl"},r.createElement("a",{href:"https://www.operate-first.cloud/apps/content/README.html"},r.createElement(u.z,{leftIcon:r.createElement(f.Z,null),color:"dark"},"GitOps Docs")),r.createElement("a",{href:"https://www.operate-first.cloud/community/README.html"},r.createElement(u.z,{leftIcon:r.createElement(m.Z,null),color:"dark"},"Open community cloud"))),r.createElement(l.x,{mb:"xl"},r.createElement("b",null,"Source:")," ",r.createElement("a",{href:"https://old.operate-first.cloud/data-science/"},"https://old.operate-first.cloud/data-science/"))))}}}]);
//# sourceMappingURL=component---src-pages-data-scientist-js-118d59fedfd627e39ac7.js.map