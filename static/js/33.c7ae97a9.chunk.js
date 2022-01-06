(this.webpackJsonpfossologyui=this.webpackJsonpfossologyui||[]).push([[33],{187:function(e,n,t){"use strict";t.r(n);var c=t(24),a=t(15),r=t(23),o=t(0),i=t(56),s=t(49),u=t(51),d=t(88),l=t(78),p=t(93),h=t(89),j=t(14),f=t(62),b=t(1);n.default=function(){var e,n,t={folderId:1,uploadDescription:"",accessLevel:"protected",ignoreScm:!1,uploadType:"vcs"},m={analysis:Object(j.a)(),decider:{nomosMonk:!1,bulkReused:!1,newScanner:!1,ojoDecider:!1},reuse:{reuseUpload:0,reuseGroup:null===(e=Object(j.c)("user"))||void 0===e?void 0:e.default_group,reuseMain:!1,reuseEnhanced:!1,reuseReport:!1,reuseCopyright:!1}},O=Object(o.useState)(t),g=Object(r.a)(O,2),y=g[0],v=g[1],x=Object(o.useState)([{id:1,name:"Software Repository",description:"Top Folder",parent:null}]),k=Object(r.a)(x,2),C=k[0],w=k[1],S=Object(o.useState)(m),N=Object(r.a)(S,2),A=N[0],L=N[1],T=Object(o.useState)({vcsType:"git",vcsUrl:"",vcsBranch:"",vcsName:"",vcsUsername:"",vcsPassword:""}),D=Object(r.a)(T,2),U=D[0],M=D[1],E=Object(o.useState)(),I=Object(r.a)(E,2),G=I[0],R=I[1],P=Object(o.useState)(!1),F=Object(r.a)(P,2),z=F[0],_=F[1],V=Object(o.useState)(!1),B=Object(r.a)(V,2),H=B[0],J=B[1],q=function(e){"checkbox"===e.target.type?v(Object(a.a)(Object(a.a)({},y),{},Object(c.a)({},e.target.name,e.target.checked))):"file"===e.target.type?v(Object(a.a)(Object(a.a)({},y),{},Object(c.a)({},e.target.name,e.target.files[0]))):v(Object(a.a)(Object(a.a)({},y),{},Object(c.a)({},e.target.name,e.target.value)))},K=function(e){M(Object(a.a)(Object(a.a)({},U),{},Object(c.a)({},e.target.name,e.target.value)))};return Object(o.useEffect)((function(){Object(l.e)().then((function(e){w(e)})).catch((function(e){Object(f.e)(e,R),J(!0)}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(s.a,{title:"Upload from Version Control System"}),Object(b.jsxs)("div",{className:"main-container my-3",children:[H&&Object(b.jsx)(u.a,{type:G.type,message:G.text,setShow:J}),Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-lg-8 col-md-12 col-sm-12 col-12",children:[Object(b.jsx)("h3",{className:"font-size-main-heading",children:"Upload From Version Control System"}),Object(b.jsx)("p",{className:"font-demi my-3",children:"To manage your own group permissions go into Admin > Groups > Manage Group Users. To manage permissions for this one upload, go to Admin > Upload Permissions."}),Object(b.jsx)("p",{children:"You can upload source code from a version control system; one risk is that FOSSology will store your username/password of a repository to database, also run checkout source code from command line with username and password explicitly."}),Object(b.jsxs)("form",{className:"my-3",children:[Object(b.jsx)(u.c,{type:"select",name:"folderId",id:"upload-folder-id",onChange:function(e){return q(e)},options:C,property:"name",value:null===C||void 0===C?void 0:C.id,children:"Select the folder for storing the uploaded files:"}),Object(b.jsx)(u.c,{type:"select",name:"vcsType",id:"upload-vcs-type",onChange:function(e){return K(e)},options:[{id:"git",type:"Git"},{id:"svn",type:"SVN"}],property:"type",children:"Select the type of version control system:"}),Object(b.jsx)(u.c,{type:"text",name:"vcsUrl",id:"upload-vcs-url-repo",onChange:function(e){return K(e)},value:U.vcsUrl,children:"Enter the URL of the repo:"}),Object(b.jsx)("div",{className:"font-size-small",children:"Note: The URL can begin with HTTP://, HTTPS:// . When do git upload, if https url fails, please try http URL."}),Object(b.jsx)(u.c,{type:"text",name:"vcsBranch",id:"upload-vcs-branch",onChange:function(e){return K(e)},value:U.vcsBranch,children:"(Optional for Git) Branch name:"}),Object(b.jsx)(u.c,{type:"text",name:"vcsUsername",id:"upload-vcs-username",onChange:function(e){return K(e)},value:U.vcsUsername,children:"(Optional) Username:"}),Object(b.jsx)(u.c,{type:"text",name:"vcsPassword",id:"upload-vcs-branch",onChange:function(e){return K(e)},value:U.vcsPassword,children:"(Optional) Password:"}),Object(b.jsx)(u.c,{type:"text",name:"vcsName",id:"upload-vcs-name",onChange:function(e){return K(e)},value:U.vcsName,children:"(Optional) Enter a viewable name for this file (directory):"}),Object(b.jsx)("div",{className:"font-size-small",children:"Note: If no name is provided, then the uploaded file (directory) name will be used."}),Object(b.jsx)("div",{className:"my-2",children:Object(b.jsxs)("label",{htmlFor:"upload",className:"font-demi",children:["(Optional) Enter a description of this file:",Object(b.jsx)("textarea",{name:"uploadDescription",className:"form-control",value:y.uploadDescription,id:"upload-file-description",rows:"3",onChange:function(e){return q(e)}})]})}),Object(b.jsx)(d.a,{accessLevel:y.accessLevel,ignoreScm:y.ignoreScm,analysis:A.analysis,decider:A.decider,reuse:A.reuse,handleChange:q,handleScanChange:function(e){var n=e.target.name;Object.keys(A.analysis).find((function(e){return e===n}))?L(Object(a.a)(Object(a.a)({},A),{},{analysis:Object(a.a)(Object(a.a)({},A.analysis),{},Object(c.a)({},e.target.name,e.target.checked))})):Object.keys(A.decider).find((function(e){return e===n}))?L(Object(a.a)(Object(a.a)({},A),{},{decider:Object(a.a)(Object(a.a)({},A.decider),{},Object(c.a)({},e.target.name,e.target.checked))})):L(Object(a.a)(Object(a.a)({},A),{},{reuse:Object(a.a)(Object(a.a)({},A.reuse),{},Object(c.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:parseInt(e.target.value,10)||e.target.value))}))}}),Object(b.jsx)(u.b,{type:"submit",onClick:function(e){e.preventDefault(),_(!0),Object(p.c)(y,U).then((function(e){window.scrollTo({top:0}),R({type:"success",text:"".concat(i.a.queuedUpload," #").concat(e.message)}),n=e.message})).then((function(){return Object(p.d)(n,10)})).then((function(){return setTimeout((function(){return Object(h.b)(y.folderId,n,A).then((function(){window.scrollTo({top:0}),R({type:"success",text:i.a.scheduledAnalysis}),v(t),L(m)})).catch((function(e){Object(f.e)(e,R)}))}),2e5)})).catch((function(e){Object(f.e)(e,R)})).finally((function(){_(!1),J(!0)}))},className:"mt-4",children:z?Object(b.jsx)(u.d,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):"Upload"})]})]})})]})]})}},62:function(e,n,t){"use strict";t.d(n,"f",(function(){return a})),t.d(n,"a",(function(){return r})),t.d(n,"c",(function(){return o})),t.d(n,"e",(function(){return i})),t.d(n,"d",(function(){return s})),t.d(n,"b",(function(){return u}));var c=t(60),a=function(e){for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=t.length,a=0;a<e;a++)n+=t.charAt(Math.floor(Math.random()*c));return n},r=function(e){return Date.prototype.addDays=function(e){var n=new Date(this.valueOf());return n.setDate(n.getDate()+e),n},(new Date).addDays(e).toISOString().split("T")[0]},o=function(e){if(!e)return e;var n=e.split(" ");return 1===n.length?n[0].substring(0,2).toUpperCase():n.map((function(e,n){return n<3?e[0]:null})).join("").toUpperCase()},i=function(e,n){window.scrollTo({top:0}),n({type:"danger",text:e.message})},s=function(e){var n=e.match(/report\/([0-9]+)/);return null!=n?n[1]:null},u=function(e){var n,t=e.split(";"),a="download.txt",r=Object(c.a)(t);try{for(r.s();!(n=r.n()).done;){var o=n.value.trim().match(/filename="(.*)"/);if(null!=o){a=o[1];break}}}catch(i){r.e(i)}finally{r.f()}return a}},86:function(e,n,t){"use strict";t.d(n,"c",(function(){return i})),t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return u}));var c=t(57),a=t(47),r=t(59),o=t(14),i=function(){return Object(o.c)("groups")},s=function(){return function(){var e=c.a.admin.groups.getAll();return Object(r.a)({url:e,method:"GET",headers:{Authorization:Object(a.a)()},addGroupName:!1})}().then((function(e){return Object(o.h)("groups",e),e}))},u=function(e){return function(e){var n=c.a.admin.groups.create();return Object(r.a)({url:n,method:"POST",headers:{Authorization:Object(a.a)(),name:e},addGroupName:!1})}(e).then((function(e){return e}))}},88:function(e,n,t){"use strict";var c=t(0),a=t(51),r=t(1);var o=function(e){var n=e.ignoreScm,t=e.handleChange;return Object(r.jsx)("div",{id:"upload-ignore-files",className:"mt-4",children:Object(r.jsxs)(a.c,{type:"checkbox",checked:n,name:"ignoreScm",id:"upload-ignore-scm",onChange:function(e){return t(e)},children:["Ignore SCM files (Git, SVN, TFS) and files with particular Mimetype\xa0",Object(r.jsx)(a.e,{title:"Configure mimetypes from Admin-Customize-Skip MimeTypes from scanning"})]})})};var i=function(e){var n=e.accessLevel,t=e.handleChange;return Object(r.jsxs)("div",{id:"upload-access-level",className:"mt-4",children:[Object(r.jsxs)(a.c,{type:"radio",value:"private",name:"accessLevel",id:"upload-access-level-private",checked:"private"===n,onChange:function(e){return t(e)},children:["Visible only for active group\xa0",Object(r.jsx)(a.e,{title:"which is the currently selected group"})]}),Object(r.jsxs)(a.c,{type:"radio",value:"protected",name:"accessLevel",id:"upload-access-level-protected",checked:"protected"===n,onChange:function(e){return t(e)},children:["Visible for all groups\xa0",Object(r.jsx)(a.e,{title:"which are accessible by you now"})]}),Object(r.jsxs)(a.c,{type:"radio",value:"public",name:"accessLevel",id:"upload-access-level-public",checked:"public"===n,onChange:function(e){return t(e)},children:["Make Public\xa0",Object(r.jsx)(a.e,{title:"visible for all users"})]})]})},s=t(53);var u=function(e){var n=e.analysis,t=e.handleChange;return Object(r.jsxs)("div",{id:"uplod-optional-analysis",className:"mt-4",children:[Object(r.jsx)("p",{className:"font-demi",children:"Select optional analysis"}),Object(r.jsx)(s.a,{type:"checkbox",checked:n.bucket,name:"bucket",id:"upload-analysis-bucket",onChange:function(e){return t(e)},children:"Bucket Analysis"}),Object(r.jsx)(s.a,{type:"checkbox",checked:n.copyrightEmailAuthor,name:"copyrightEmailAuthor",id:"upload-analysis-copyright-email-author",onChange:function(e){return t(e)},children:"Copyright/Email/URL/Author Analysis"}),Object(r.jsx)(s.a,{type:"checkbox",checked:n.ecc,name:"ecc",id:"upload-analysis-ecc",onChange:function(e){return t(e)},children:"ECC Analysis, scanning for text fragments potentially relevant for export control"}),Object(r.jsx)(s.a,{type:"checkbox",checked:n.keyword,name:"keyword",id:"upload-analysis-keyword",onChange:function(e){return t(e)},children:"Keyword Analysis"}),Object(r.jsx)(s.a,{type:"checkbox",checked:n.mime,name:"mime",id:"upload-analysis-mime",onChange:function(e){return t(e)},children:"MIME-type Analysis (Determine mimetype of every file. Not needed for licenses or buckets)"}),Object(r.jsx)(s.a,{type:"checkbox",checked:n.monk,name:"monk",id:"upload-analysis-monk",onChange:function(e){return t(e)},children:"Monk License Analysis, scanning for licenses performing a text comparison"}),Object(r.jsx)(s.a,{type:"checkbox",checked:n.nomos,name:"nomos",id:"upload-analysis-nomos",onChange:function(e){return t(e)},children:"Nomos License Analysis, scanning for licenses using regular expressions"}),Object(r.jsx)(s.a,{type:"checkbox",checked:n.ojo,name:"ojo",id:"upload-analysis-ojo",onChange:function(e){return t(e)},children:"Ojo License Analysis, scanning for licenses using SPDX-License-Identifier"}),Object(r.jsx)(s.a,{type:"checkbox",checked:n.package,name:"package",id:"upload-analysis-package",onChange:function(e){return t(e)},children:"Package Analysis (Parse package headers)"})]})};var d=function(e){var n=e.decider,t=e.handleChange;return Object(r.jsxs)("div",{id:"upload-concluded-license-decider",className:"mt-4",children:[Object(r.jsxs)("p",{className:"font-demi",children:["Automatic Concluded License Decider,",Object(r.jsx)(a.e,{title:"only for relevant files"})," based on"]}),Object(r.jsx)(a.c,{type:"checkbox",checked:n.nomosMonk,name:"nomosMonk",id:"upload-decider-nomos-monk",onChange:function(e){return t(e)},children:"... scanners matches if all Nomos findings are within the Monk findings"}),Object(r.jsx)(a.c,{type:"checkbox",checked:n.ojoDecider,name:"ojoDecider",id:"upload-decider-ojo-decider",onChange:function(e){return t(e)},children:".. scanners matches if Ojo findings are no contradiction with other findings"}),Object(r.jsx)(a.c,{type:"checkbox",checked:n.bulkReused,name:"bulkReused",id:"upload-decider-bulk-reused",onChange:function(e){return t(e)},children:"... bulk phrases from reused packages"}),Object(r.jsx)(a.c,{type:"checkbox",checked:n.newScanner,name:"newScanner",id:"upload-decider-new-scanner",onChange:function(e){return t(e)},children:"... new scanner results, i.e., decisions were marked as work in progress if new scanner finds additional licenses"})]})},l=t(24),p=t(15),h=t(23),j=t(78),f=t(90),b=t(86),m=t(56),O=function(e){var n=e.reuse,t=e.handleChange,o=Object(c.useState)({groupList:[{id:3,name:"fossy"}],folderList:[{id:1,name:"Software Repository",description:"Top Folder",parent:null}],uploadList:[{folderId:1,uploadId:null,uploadName:"",uploadDescription:""}],reuseFolder:1}),i=Object(h.a)(o,2),s=i[0],u=i[1];Object(c.useEffect)((function(){u((function(e){return Object(p.a)(Object(p.a)({},e),{},{groupList:Object(b.c)()})}))}),[]),Object(c.useEffect)((function(){Object(j.e)(n.reuseGroup).then((function(e){u((function(n){return Object(p.a)(Object(p.a)({},n),{},{folderList:e})}))})).catch((function(){}))}),[n.reuseGroup]),Object(c.useEffect)((function(){Object(f.c)(s.reuseFolder,n.reuseGroup).then((function(e){u((function(n){return Object(p.a)(Object(p.a)({},n),{},{uploadList:e})}))})).catch((function(){}))}),[n.reuseGroup,s.reuseFolder]);return Object(r.jsxs)("div",{id:"upload-reuse",className:"mt-4",children:[Object(r.jsxs)("p",{className:"font-demi",children:["(Optional) Reuse",Object(r.jsx)(a.e,{title:"copy clearing decisions if there is the same file hash between two files"})]}),Object(r.jsx)(a.c,{type:"select",name:"reuseGroup",id:"upload-file-reuse-group",onChange:t,options:s.groupList,value:n.reuseGroup,property:"name",valueProperty:"name",noDataMessage:m.a.noGroup,children:"Select the reuse group:"}),Object(r.jsx)(a.c,{type:"select",name:"reuseFolder",id:"upload-file-reuse-folder",onChange:function(e){u((function(n){return Object(p.a)(Object(p.a)({},n),{},Object(l.a)({},e.target.name,e.target.value))}))},options:s.folderList,value:s.reuseFolder,property:"name",noDataMessage:m.a.noFolder,children:"Select the reuse folder:"}),Object(r.jsx)(a.c,{type:"select",name:"reuseUpload",id:"upload-file-reuse-upload",onChange:t,options:s.uploadList,value:parseInt(n.reuseUpload,10),property:"uploadname",valueProperty:"id",noDataMessage:m.a.noUploads,children:"Select the reuse upload:"}),Object(r.jsxs)(a.c,{type:"checkbox",checked:n.reuseEnhanced,name:"reuseEnhanced",id:"upload-file-reuse-enhanced",onChange:t,children:["Enhanced reuse (slower)",Object(r.jsx)(a.e,{title:"will copy a clearing decision if the two files differ by one line determined by a diff tool"})]}),Object(r.jsxs)(a.c,{type:"checkbox",checked:n.reuseMain,name:"reuseMain",id:"upload-file-reuse-main",onChange:t,children:["Reuse main license/s",Object(r.jsx)(a.e,{title:"will copy a main license decision if any"})]}),Object(r.jsxs)(a.c,{type:"checkbox",checked:n.reuseReport,name:"reuseReport",id:"upload-file-reuse-report",onChange:t,children:["Reuse report configuration settings",Object(r.jsx)(a.e,{title:"use to copy all the information from conf page(if any)"})]}),Object(r.jsxs)(a.c,{type:"checkbox",checked:n.reuseCopyright,name:"reuseCopyright",id:"upload-file-reuse-copyright",onChange:t,children:["Reuse edited and deactivated copyrights",Object(r.jsx)(a.e,{title:"use to copy edited and deactivated copyrights from the reused package"})]})]})};n.a=function(e){var n=e.accessLevel,t=e.ignoreScm,c=e.analysis,a=e.decider,s=e.reuse,l=e.handleChange,p=e.handleScanChange;return Object(r.jsxs)(r.Fragment,{children:[t&&Object(r.jsx)(o,{ignoreScm:t,handleChange:l}),n&&Object(r.jsx)(i,{accessLevel:n,handleChange:l}),c&&Object(r.jsx)(u,{analysis:c,handleChange:p}),a&&Object(r.jsx)(d,{decider:a,handleChange:p}),s&&Object(r.jsx)(O,{reuse:s,handleChange:p})]})}},89:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return s})),t.d(n,"a",(function(){return u}));var c=t(57),a=t(47),r=t(59),o=t(62),i=function(e,n,t){return function(e,n,t){var o=c.a.jobs.scheduleAnalysis(),i=null===t||void 0===t?void 0:t.analysis,s=i.bucket,u=i.copyrightEmailAuthor,d=i.ecc,l=i.keyword,p=i.mime,h=i.monk,j=i.nomos,f=i.ojo,b=null===t||void 0===t?void 0:t.decider,m=b.nomosMonk,O=b.bulkReused,g=b.newScanner,y=b.ojoDecider,v=null===t||void 0===t?void 0:t.reuse,x=v.reuseUpload,k=v.reuseGroup,C=v.reuseMain,w=v.reuseEnhanced,S=v.reuseReport,N=v.reuseCopyright;return Object(r.a)({url:o,method:"POST",headers:{Authorization:Object(a.a)(),folderId:e,uploadId:n},body:{analysis:{bucket:s,copyright_email_author:u,ecc:d,keyword:l,mime:p,monk:h,nomos:j,ojo:f,package:t.analysis.package},decider:{nomos_monk:m,bulk_reused:O,new_scanner:g,ojo_decider:y},reuse:{reuse_upload:x,reuse_group:k,reuse_main:C,reuse_enhanced:w,reuse_report:S,reuse_copyright:N}}})}(e,n,t).then((function(e){return e}))},s=function(e,n){return function(e,n){var t=c.a.jobs.scheduleReport();return Object(r.a)({url:t,method:"GET",headers:{Authorization:Object(a.a)(),uploadId:e,reportFormat:n}})}(e,n).then((function(e){return e}))},u=function(e){var n=Object(o.d)(e);return null===n?null:function(e){var n=c.a.jobs.downloadReport(e);return Object(r.a)({url:n,method:"GET",headers:{Authorization:Object(a.a)()},isFile:!0})}(n).then((function(e){return e}))}},93:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"c",(function(){return l})),t.d(n,"b",(function(){return p})),t.d(n,"d",(function(){return h}));var c=t(15),a=t(9),r=t.n(a),o=t(57),i=t(47),s=t(59),u=function(e,n,t,c,a){var r=o.a.upload.uploadCreate(),u=new FormData;return a&&u.append("fileInput",a,null===a||void 0===a?void 0:a.name),Object(s.a)({url:r,method:"POST",isMultipart:!0,headers:{Authorization:Object(i.a)(),folderId:e,uploadDescription:n,accessLevel:t,ignoreScm:c,uploadType:""},body:u})};u.propTypes={folderId:r.a.number,uploadDescription:r.a.string,accessLevel:r.a.string,ignoreScm:r.a.bool,fileInput:r.a.string};var d=function(e){var n=e.folderId,t=e.uploadDescription,c=e.accessLevel,a=e.ignoreScm,r=e.fileInput;return u(n,t,c,a,r).then((function(e){return e}))},l=function(e,n){return function(e,n){var t=o.a.upload.uploadCreate();return Object(s.a)({url:t,method:"POST",credentials:!1,headers:Object(c.a)(Object(c.a)({},e),{},{Authorization:Object(i.a)()}),body:n})}(e,n).then((function(e){return e}))},p=function(e,n){return function(e,n){var t=o.a.upload.uploadCreate();return Object(s.a)({url:t,method:"POST",headers:Object(c.a)(Object(c.a)({},e),{},{Authorization:Object(i.a)()}),body:n})}(e,n).then((function(e){return e}))},h=function(e,n){return function(e,n){var t=o.a.upload.getId(e);return Object(s.a)({url:t,method:"GET",retries:n,headers:{Authorization:Object(i.a)()}})}(e,n).then((function(e){return e}))}}}]);
//# sourceMappingURL=33.c7ae97a9.chunk.js.map