var f=(r,a,n)=>new Promise((c,o)=>{var l=e=>{try{i(n.next(e))}catch(t){o(t)}},s=e=>{try{i(n.throw(e))}catch(t){o(t)}},i=e=>e.done?c(e.value):Promise.resolve(e.value).then(l,s);i((n=n.apply(r,a)).next())});import{B as h,u as b}from"./useTable.c32db87a.js";import{T as _}from"./useForm.dd386f9b.js";import{u as g}from"./index.619f2d9c.js";import{M as C,c as T,s as w}from"./MenuDrawer.4594b085.js";import{h as B}from"./friend.66fea858.js";import{_ as D,f as F}from"./index.b5767c15.js";import{B as S,a1 as m,D as E,F as R,w as u,a6 as p,ae as k}from"./vendor.bf608252.js";import"./index.a0d81b95.js";import"./index.16f79384.js";/* empty css               *//* empty css               */import"./useWindowSizeFn.011a8160.js";import"./useContentViewHeight.7c09605f.js";/* empty css               *//* empty css               *//* empty css               */import"./index.2ef00d7c.js";/* empty css                */import"./sortable.esm.b519ac50.js";/* empty css                *//* empty css              *//* empty css               */import"./index.60d5a54a.js";import"./download.fc1ca708.js";/* empty css               */import"./index.dec1cd2a.js";const y=S({name:"FriendList",components:{BasicTable:h,MenuDrawer:C,TableAction:_},setup(){const[r,{openDrawer:a}]=g(),[n,{reload:c}]=b({title:"\u53CB\u94FE\u5217\u8868",api:B,beforeFetch:t=>{t.from=o==null?void 0:o._id},columns:T,formConfig:{labelWidth:120,schemas:w},isTreeTable:!1,pagination:!0,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!0,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}}),{userInfo:o}=F();function l(){a(!0,{isUpdate:!1,record:{from:o==null?void 0:o._id}})}function s(t){a(!0,{record:t,isUpdate:!0})}function i(t){return f(this,null,function*(){e()})}function e(){c()}return{registerTable:n,registerDrawer:r,handleCreate:l,handleEdit:s,handleDelete:i,handleSuccess:e}}}),v=k(" \u65B0\u589E\u53CB\u94FE ");function A(r,a,n,c,o,l){const s=m("a-button"),i=m("TableAction"),e=m("BasicTable"),t=m("MenuDrawer");return E(),R("div",null,[u(e,{onRegister:r.registerTable},{toolbar:p(()=>[u(s,{type:"primary",onClick:r.handleCreate},{default:p(()=>[v]),_:1},8,["onClick"])]),action:p(({record:d})=>[u(i,{actions:[{icon:"clarity:note-edit-line",onClick:r.handleEdit.bind(null,d)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:r.handleDelete.bind(null,d)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),u(t,{onRegister:r.registerDrawer,onSuccess:r.handleSuccess},null,8,["onRegister","onSuccess"])])}var ie=D(y,[["render",A]]);export{ie as default};