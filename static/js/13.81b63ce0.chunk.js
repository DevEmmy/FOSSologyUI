/*! For license information please see 13.81b63ce0.chunk.js.LICENSE.txt */
(this.webpackJsonpfossologyui=this.webpackJsonpfossologyui||[]).push([[13],{197:function(e,t,n){"use strict";n.r(t);var r=n(24),o=n(15),a=n(23),c=n(0),i=n(56),u=n(49),s=n(51),l=n(78),d=n(62),f=n(1);t.default=function(){var e=Object(c.useState)({id:1,name:"Software Repository",description:"Top Folder",parent:null}),t=Object(a.a)(e,2),n=t[0],p=t[1],h=Object(c.useState)([{id:1,name:"Software Repository",description:"Top Folder",parent:null}]),m=Object(a.a)(h,2),b=m[0],y=m[1],j=Object(c.useState)(!1),v=Object(a.a)(j,2),g=v[0],O=v[1],x=Object(c.useState)(!1),w=Object(a.a)(x,2),S=w[0],N=w[1],k=Object(c.useState)({type:"success",text:""}),F=Object(a.a)(k,2),A=F[0],C=F[1];return Object(c.useEffect)((function(){Object(l.e)().then((function(e){y(e)})).catch((function(e){Object(d.e)(e,C),N(!0)}))}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(u.a,{title:"Delete Folder"}),Object(f.jsxs)("div",{className:"main-container my-3",children:[S&&Object(f.jsx)(s.a,{type:A.type,setShow:N,message:A.text}),Object(f.jsx)("h1",{className:"font-size-main-heading",children:"Delete a Fossology Folder"}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col-12 col-lg-8",children:[Object(f.jsx)("p",{children:"Select the folder to delete."}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:"This will delete the folder, all subfolders, and all uploaded files stored within the folder!"}),Object(f.jsx)("li",{children:"Be very careful with your selection since you can delete a lot of work!"}),Object(f.jsx)("li",{children:"All analysis only associated with the deleted uploads will also be deleted."}),Object(f.jsx)("li",{children:"THERE IS NO UNDELETE. When you select something to delete, it will be removed from the database and file repository."})]}),Object(f.jsxs)("form",{children:[Object(f.jsx)(s.c,{type:"select",name:"id",id:"organize-folder-delete-id",onChange:function(e){return p(Object(o.a)(Object(o.a)({},n),{},Object(r.a)({},e.target.name,e.target.value)))},options:b,value:n.id,property:"name",children:"Select the folder to delete:"}),Object(f.jsx)(s.b,{type:"submit",onClick:function(e){e.preventDefault(),O(!0),Object(l.c)(n).then((function(){C({type:"success",text:i.a.deletedFolder})})).then((function(){Object(l.e)().then((function(e){y(e)}))})).catch((function(e){Object(d.e)(e,C)})).finally((function(){O(!1),N(!0)}))},className:"mt-4",children:g?Object(f.jsx)(s.d,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):"Delete"})]})]})})]})]})}},47:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l}));var r=n(58),o=n(2),a=n(14),c=function(){if("undefined"!==typeof window&&Object(a.b)("token"))return!(!localStorage.getItem("user")||!localStorage.getItem("groups"));return!1},i=function(e){Object(a.e)("token"),Object(a.f)("user"),Object(a.f)("groups"),Object(a.f)("currentGroup");var t=o.a.home;e&&(t="".concat(o.a.home,"?").concat(Object(r.stringify)(e))),window.location.href=t},u=function(){return Object(a.b)("token")},s=function(){return Object(a.c)("user").name},l=function(){var e;return"admin"===(null===(e=Object(a.c)("user"))||void 0===e?void 0:e.accessLevel)}},48:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var c=o.apply(null,r);c&&e.push(c)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},49:function(e,t,n){"use strict";n(0);var r=n(63),o=n(1);t.a=function(e){var t=e.title;return Object(o.jsx)(r.a,{children:Object(o.jsxs)("title",{children:[t," | FOSSology"]})})}},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(4);var r=n(0),o=n.n(r),a=o.a.createContext({});a.Consumer,a.Provider;function c(e,t){var n=Object(r.useContext)(a);return e||n[t]||t}},51:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l.a})),n.d(t,"e",(function(){return d})),n.d(t,"d",(function(){return o.a}));var r,o=n(55),a=(n(0),n(1)),c=function(e){var t=e.message,n=e.type,r=e.setShow;return Object(a.jsx)("div",{className:"main-container d-flex justify-content-end mt-3",children:Object(a.jsx)("div",{className:"alert bg-".concat(n," alert-dismissible fade show font-medium text-white alert-fix-position"),role:"alert",children:Object(a.jsxs)("div",{className:"d-flex",children:["danger"===n&&Object(a.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-3",children:[Object(a.jsx)("path",{d:"M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z",fill:"white"}),Object(a.jsx)("path",{d:"M14.5 25H17.5V22H14.5V25ZM14.5 6V19H17.5V6H14.5Z",fill:"#DC4146"})]}),"success"===n&&Object(a.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-3",children:[Object(a.jsx)("path",{d:"M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z",fill:"white"}),Object(a.jsx)("path",{d:"M38 15L22 33L12 25",stroke:"#28A745",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})]}),t,Object(a.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",onClick:function(){return r(!1)},children:Object(a.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})})})},i=n(25),u=n(12).d.button(r||(r=Object(i.a)(["\n    border: none;\n    border-radius: 0.5rem;\n    padding: 0.5rem 3rem;\n    transition: all 0.5s ease-in;\n"]))),s=function(e){var t=e.type,n=e.onClick,r=e.className,o=e.children;return Object(a.jsx)(u,{type:t,onClick:n,className:"bg-primary-color text-secondary-color font-demi text-center hover-primary-color ".concat(r),children:o})},l=(n(52),n(53)),d=function(e){var t=e.title;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("button",{type:"button",className:"d-inline-block btn px-0 mt-n2","data-toggle":"tooltip","data-placement":"top",title:t,children:Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-info-circle-fill text-primary-color",viewBox:"0 0 16 16",children:Object(a.jsx)("path",{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"})})})})}},52:function(e,t,n){"use strict";n(0);var r=n(1);t.a=function(e){var t=e.src,n=e.alt,o=e.style,a=e.className,c=e.width,i=e.height,u=e.align;return Object(r.jsx)("img",{src:t,alt:n,style:o,className:a,width:c,height:i,align:u})}},53:function(e,t,n){"use strict";n(0);var r=n(1);t.a=function(e){var t=e.type,n=e.name,o=e.value,a=e.id,c=e.className,i=e.onChange,u=e.children,s=e.checked,l=void 0!==s&&s,d=e.placeholder,f=void 0===d?null:d,p=e.disabled,h=void 0!==p&&p,m=e.options,b=void 0===m?null:m,y=e.multiple,j=void 0!==y&&y,v=e.property,g=e.valueProperty,O=e.noDataMessage,x=void 0===O?"No Data Found":O,w=e.defaultValue,S=void 0===w?null:w;return"radio"===t||"checkbox"===t?Object(r.jsxs)("div",{className:"my-0",children:[Object(r.jsx)("input",{type:t,name:n,value:o,className:c&&"mr-2 ".concat(c),onChange:i,checked:l,disabled:h,id:a}),Object(r.jsx)("label",{htmlFor:a,className:"font-medium ml-2",children:u})]}):"select"===t?Object(r.jsxs)("div",{className:"my-0 py-0",children:[u&&Object(r.jsx)("label",{htmlFor:a,className:"font-demi",children:u}),"\u2003",Object(r.jsx)("select",{name:n,className:c?"mr-2 form-control ".concat(c):"mr-2 form-control",value:o,onChange:i,multiple:j&&j,size:j?"15":"",id:a,defaultValue:S,children:b.length>0?b.map((function(e,t){return Object(r.jsx)("option",{value:g?e[g]:e.id,disabled:e.disabled,children:v?e[v]:e},e.id||t)})):Object(r.jsx)("option",{className:"font-demi",disabled:!0,children:x})})]}):Object(r.jsxs)("div",{className:"my-2",children:[Object(r.jsx)("label",{htmlFor:a,className:"font-demi",children:u}),Object(r.jsx)("input",{type:t,name:n,value:o,className:"file"===t?"ml-3 ".concat(c):"form-control ".concat(c),onChange:i,checked:l,placeholder:f,id:a})]})}},54:function(e,t,n){var r=n(61);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},55:function(e,t,n){"use strict";var r=n(4),o=n(8),a=n(48),c=n.n(a),i=n(0),u=n.n(i),s=n(50),l=["bsPrefix","variant","animation","size","children","as","className"],d=u.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.variant,i=e.animation,d=e.size,f=e.children,p=e.as,h=void 0===p?"div":p,m=e.className,b=Object(o.a)(e,l),y=(n=Object(s.a)(n,"spinner"))+"-"+i;return u.a.createElement(h,Object(r.a)({ref:t},b,{className:c()(m,y,d&&y+"-"+d,a&&"text-"+a)}),f)}));d.displayName="Spinner",t.a=d},56:function(e,t,n){"use strict";t.a={forbiddenResource:"Requested resource is forbidden",noGroup:"No Group Found",noFolder:"No Folder Found",noUploads:"No Uploads Found",noPageShort:"Error: Page Not Found!",noPageLong:"We could not find the page you were searching for",groupCreate:"Successfully created the group",deletedUser:"Successfully deleted the user",confirmDeletion:"Deletion not confirmed",loading:"Loading...",jobsAdded:"Your jobs have been added to job queue",createdFolder:"Successfully created the folder",deletedFolder:"Successfully deleted the folder",updatedFolderProps:"Successfully updated the folder properties",movedFolder:"Successfully moved the folder",copiedFolder:"Successfully copied the folder",unlinkedFolder:"Successfully unlinked the folder",createdLicense:"Successfully created the license",scheduleUploadDeletion:"Successfully scheduled selected uploads for deletion",selectUploadsToDelete:"Select the uploads to delete",scheduleUploadMovement:"Successfully scheduled the selected uploads movement",selectUploadsToMove:"Select the uploads to move",scheduledUploadCopy:"Successfully scheduled the selected uploads for copy",selectUploadsToCopy:"Select the uploads to copy",uploadSuccess:"Successfully uploaded the files",scheduledAnalysis:"Analysis for the file is scheduled",queuedUpload:"The upload has been queued its upload id is"}},57:function(e,t,n){"use strict";var r="".concat("http","://").concat("localhost/repo/api/v2"),o={jobs:{details:function(e){return"".concat(r,"/jobs/").concat(e)},scheduleAnalysis:function(){return"".concat(r,"/jobs")},scheduleReport:function(){return"".concat(r,"/report")},downloadReport:function(e){return"".concat(r,"/report/").concat(e)}},auth:{tokens:function(){return"".concat(r,"/tokens")}},search:{search:function(){return"".concat(r,"/search")}},users:{self:function(){return"".concat(r,"/users/self")},getAll:function(){return"".concat(r,"/users")},getSingle:function(e){return"".concat(r,"/users/").concat(e)},delete:function(e){return"".concat(r,"/users/").concat(e)}},folders:{getAll:function(){return"".concat(r,"/folders")},getSingle:function(e){return"".concat(r,"/folders/").concat(e)},create:function(){return"".concat(r,"/folders")},read:function(e){return"".concat(r,"/folders/").concat(e)},edit:function(e){return"".concat(r,"/folders/").concat(e)},delete:function(e){return"".concat(r,"/folders/").concat(e)},move:function(e){return"".concat(r,"/folders/").concat(e)}},upload:{uploadCreate:function(){return"".concat(r,"/uploads")},getId:function(e){return"".concat(r,"/uploads/").concat(e)}},browse:{get:function(){return"".concat(r,"/uploads")}},organize:{uploads:{get:function(){return"".concat(r,"/uploads")},delete:function(e){return"".concat(r,"/uploads/").concat(e)},move:function(e){return"".concat(r,"/uploads/").concat(e)},copy:function(e){return"".concat(r,"/uploads/").concat(e)}}},admin:{groups:{create:function(){return"".concat(r,"/groups")},getAll:function(){return"".concat(r,"/groups")}}},license:{get:function(){return"".concat(r,"/license")},createCandidateLicense:function(){return"".concat(r,"/license")}},info:{info:function(){return"".concat(r,"/info")},health:function(){return"".concat(r,"/health")}}};t.a=o},58:function(e,t,n){"use strict";var r=n(64),o=n(65),a=n(69),c=n(70),i=n(74),u=n(75),s=n(76),l=n(77),d=Symbol("encodeFragmentIdentifier");function f(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function p(e,t){return t.encode?t.strict?i(e):encodeURIComponent(e):e}function h(e,t){return t.decode?u(e):e}function m(e){return Array.isArray(e)?e.sort():"object"===typeof e?m(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function b(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function y(e){var t=(e=b(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function j(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function v(e,t){f((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"comma":case"separator":return function(t,n,r){var o="string"===typeof n&&n.includes(e.arrayFormatSeparator),a="string"===typeof n&&!o&&h(n,e).includes(e.arrayFormatSeparator);n=a?h(n,e):n;var c=o||a?n.split(e.arrayFormatSeparator).map((function(t){return h(t,e)})):null===n?n:h(n,e);r[t]=c};case"bracket-separator":return function(t,n,r){var o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),o){var a=null===n?[]:n.split(e.arrayFormatSeparator).map((function(t){return h(t,e)}));void 0!==r[t]?r[t]=[].concat(r[t],a):r[t]=a}else r[t]=n?h(n,e):n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t),r=Object.create(null);if("string"!==typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;var c,i=a(e.split("&"));try{for(i.s();!(c=i.n()).done;){var u=c.value;if(""!==u){var l=s(t.decode?u.replace(/\+/g," "):u,"="),d=o(l,2),p=d[0],b=d[1];b=void 0===b?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?b:h(b,t),n(h(p,t),b,r)}}}catch(N){i.e(N)}finally{i.f()}for(var y=0,v=Object.keys(r);y<v.length;y++){var g=v[y],O=r[g];if("object"===typeof O&&null!==O)for(var x=0,w=Object.keys(O);x<w.length;x++){var S=w[x];O[S]=j(O[S],t)}else r[g]=j(O,t)}return!1===t.sort?r:(!0===t.sort?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?e[t]=m(n):e[t]=n,e}),Object.create(null))}t.extract=y,t.parse=v,t.stringify=function(e,t){if(!e)return"";f((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var n=function(n){return t.skipNull&&(null===(r=e[n])||void 0===r)||t.skipEmptyString&&""===e[n];var r},r=function(e){switch(e.arrayFormat){case"index":return function(t){return function(n,r){var o=n.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(c(n),null===r?[[p(t,e),"[",o,"]"].join("")]:[[p(t,e),"[",p(o,e),"]=",p(r,e)].join("")])}};case"bracket":return function(t){return function(n,r){return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(c(n),null===r?[[p(t,e),"[]"].join("")]:[[p(t,e),"[]=",p(r,e)].join("")])}};case"comma":case"separator":case"bracket-separator":var t="bracket-separator"===e.arrayFormat?"[]=":"=";return function(n){return function(r,o){return void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?r:(o=null===o?"":o,0===r.length?[[p(n,e),t,p(o,e)].join("")]:[[r,p(o,e)].join(e.arrayFormatSeparator)])}};default:return function(t){return function(n,r){return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(c(n),null===r?[p(t,e)]:[[p(t,e),"=",p(r,e)].join("")])}}}}(t),o={},a=0,i=Object.keys(e);a<i.length;a++){var u=i[a];n(u)||(o[u]=e[u])}var s=Object.keys(o);return!1!==t.sort&&s.sort(t.sort),s.map((function(n){var o=e[n];return void 0===o?"":null===o?p(n,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?p(n,t)+"[]":o.reduce(r(n),[]).join("&"):p(n,t)+"="+p(o,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var n=s(e,"#"),r=o(n,2),a=r[0],c=r[1];return Object.assign({url:a.split("?")[0]||"",query:v(y(e),t)},t&&t.parseFragmentIdentifier&&c?{fragmentIdentifier:h(c,t)}:{})},t.stringifyUrl=function(e,n){n=Object.assign(r({encode:!0,strict:!0},d,!0),n);var o=b(e.url).split("?")[0]||"",a=t.extract(e.url),c=t.parse(a,{sort:!1}),i=Object.assign(c,e.query),u=t.stringify(i,n);u&&(u="?".concat(u));var s=function(e){var t="",n=e.indexOf("#");return-1!==n&&(t=e.slice(n)),t}(e.url);return e.fragmentIdentifier&&(s="#".concat(n[d]?p(e.fragmentIdentifier,n):e.fragmentIdentifier)),"".concat(o).concat(u).concat(s)},t.pick=function(e,n,o){o=Object.assign(r({parseFragmentIdentifier:!0},d,!1),o);var a=t.parseUrl(e,o),c=a.url,i=a.query,u=a.fragmentIdentifier;return t.stringifyUrl({url:c,query:l(i,n),fragmentIdentifier:u},o)},t.exclude=function(e,n,r){var o=Array.isArray(n)?function(e){return!n.includes(e)}:function(e,t){return!n(e,t)};return t.pick(e,o,r)}},59:function(e,t,n){"use strict";var r=n(60),o=n(15),a=n(58),c=n(47),i=n(56),u=n(14);t.a=function e(t){var n,s,l=t.url,d=t.method,f=t.credentials,p=void 0!==f&&f,h=t.body,m=t.groupName,b=t.headers,y=void 0===b?{}:b,j=t.queryParams,v=t.isMultipart,g=void 0!==v&&v,O=t.noHeaders,x=void 0!==O&&O,w=t.addGroupName,S=void 0===w||w,N=t.retries,k=void 0===N?0:N,F=t.isFile,A=void 0!==F&&F;(n=g?new Headers(Object(o.a)({},y)):new Headers(Object(o.a)({"content-type":"application/json",accept:"application/json"},y)),A&&(n=new Headers(Object(o.a)({},y))),S)&&n.append("groupName",m||Object(u.c)("currentGroup")||(null===(s=Object(u.c)("user"))||void 0===s?void 0:s.default_group));x&&(n={});var C={method:d,headers:n,body:h},E=l;return C.body=h?g?h:JSON.stringify(h):null,p&&(C.credentials=p),j&&(E="".concat(l,"?").concat(Object(a.stringify)(j))),fetch(E,C).then((function(t){if(t.ok){var n,o=Object(r.a)(t.headers.entries());try{for(o.s();!(n=o.n()).done;){var a=n.value;"x-total-pages"===a[0]&&Object(u.h)("pages",a[1])}}catch(s){o.e(s)}finally{o.f()}return A?t:t.json()}return k>0?setTimeout((function(){e({url:l,method:d,headers:y,retries:k-1})}),1e4):t.json().then((function(e){var n={status:t.status,ok:!1,message:e.message,body:e};return 403===e.code?e.message?Object(c.e)({message:e.message}):Object(c.e)({message:i.a.forbiddenResource}):Promise.reject(n)}))}))}},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(26);function o(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(r.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){u=!0,c=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw c}}}}},61:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},62:function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(60),o=function(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=n.length,o=0;o<e;o++)t+=n.charAt(Math.floor(Math.random()*r));return t},a=function(e){return Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t},(new Date).addDays(e).toISOString().split("T")[0]},c=function(e){if(!e)return e;var t=e.split(" ");return 1===t.length?t[0].substring(0,2).toUpperCase():t.map((function(e,t){return t<3?e[0]:null})).join("").toUpperCase()},i=function(e,t){window.scrollTo({top:0}),t({type:"danger",text:e.message})},u=function(e){var t=e.match(/report\/([0-9]+)/);return null!=t?t[1]:null},s=function(e){var t,n=e.split(";"),o="download.txt",a=Object(r.a)(n);try{for(a.s();!(t=a.n()).done;){var c=t.value.trim().match(/filename="(.*)"/);if(null!=c){o=c[1];break}}}catch(i){a.e(i)}finally{a.f()}return o}},64:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},65:function(e,t,n){var r=n(66),o=n(67),a=n(54),c=n(68);e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||c()}},66:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},67:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}},68:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},69:function(e,t,n){var r=n(54);e.exports=function(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=r(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){u=!0,c=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw c}}}}},70:function(e,t,n){var r=n(71),o=n(72),a=n(54),c=n(73);e.exports=function(e){return r(e)||o(e)||a(e)||c()}},71:function(e,t,n){var r=n(61);e.exports=function(e){if(Array.isArray(e))return r(e)}},72:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},73:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},74:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},75:function(e,t,n){"use strict";var r="%[a-f0-9]{2}",o=new RegExp(r,"gi"),a=new RegExp("("+r+")+","gi");function c(e,t){try{return decodeURIComponent(e.join(""))}catch(o){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],c(n),c(r))}function i(e){try{return decodeURIComponent(e)}catch(r){for(var t=e.match(o),n=1;n<t.length;n++)t=(e=c(t,n).join("")).match(o);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var n={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},r=a.exec(e);r;){try{n[r[0]]=decodeURIComponent(r[0])}catch(t){var o=i(r[0]);o!==r[0]&&(n[r[0]]=o)}r=a.exec(e)}n["%C2"]="\ufffd";for(var c=Object.keys(n),u=0;u<c.length;u++){var s=c[u];e=e.replace(new RegExp(s,"g"),n[s])}return e}(e)}}},76:function(e,t,n){"use strict";e.exports=function(e,t){if("string"!==typeof e||"string"!==typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]}},77:function(e,t,n){"use strict";e.exports=function(e,t){for(var n={},r=Object.keys(e),o=Array.isArray(t),a=0;a<r.length;a++){var c=r[a],i=e[c];(o?-1!==t.indexOf(c):t(c,i,e))&&(n[c]=i)}return n}},78:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"g",(function(){return f})),n.d(t,"a",(function(){return p}));var r=n(57),o=n(47),a=n(59),c=function(e,t,n){var c=r.a.folders.move(t);return Object(a.a)({url:c,method:"PUT",headers:{Authorization:Object(o.a)(),parent:e,action:n}})},i=function(e){return function(e){var t=r.a.folders.getAll();return Object(a.a)({url:t,method:"GET",headers:{Authorization:Object(o.a)()},groupName:e})}(e).then((function(e){return e}))},u=function(e){return function(e){var t=r.a.folders.getSingle(e);return Object(a.a)({url:t,method:"GET",headers:{Authorization:Object(o.a)()}})}(e).then((function(e){return e}))},s=function(e){return function(e){var t=r.a.folders.delete(e);return Object(a.a)({url:t,method:"DELETE",headers:{Authorization:Object(o.a)()}})}(e.id).then((function(e){return e}))},l=function(e){return function(e,t,n){var c=r.a.folders.create();return Object(a.a)({url:c,method:"POST",headers:{Authorization:Object(o.a)(),parentFolder:e,folderName:t,folderDescription:n}})}(e.parentFolder,e.folderName,e.folderDescription).then((function(e){return e}))},d=function(e){return function(e,t,n){var c=r.a.folders.edit(n);return Object(a.a)({url:c,method:"PATCH",headers:{Authorization:Object(o.a)(),name:e,description:t}})}(e.name,e.description,e.id).then((function(e){return e}))},f=function(e){var t=e.parent,n=e.id;return c(t,n,"move").then((function(e){return e}))},p=function(e){var t=e.parent,n=e.id;return c(t,n,"copy").then((function(e){return e}))}}}]);
//# sourceMappingURL=13.81b63ce0.chunk.js.map