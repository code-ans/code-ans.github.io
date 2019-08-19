(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25f84476"],{"2ab5":function(t,e,a){"use strict";function s(t){return new Promise(function(e){setTimeout(function(){return e()},t)})}a.d(e,"a",function(){return s})},"3b2b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tasks full-container is-flex is-flex-column"},[a("TaskTabs",{attrs:{tabs:t.tabs,currentTab:t.currentTab,isTaskListMatched:t.isTaskListMatched},on:{remove:t.handleTabDelete,select:function(e){t.currentTab=e}}}),t.isInitialized?t._l(t.tabs.list,function(e){return a("TaskDetail",{key:e,attrs:{id:e,currentTab:t.currentTab,item:t.tasks.data[t.currentTab],codes:t.codes},on:{add:t.handleTaskAdd,save:t.handleTaskSave,mounted:t.handleTabMounted}})}):t._e(),a("div",{staticClass:"is-flex-auto is-flex-column",class:null===t.currentTab?"is-flex":"is-hidden"},[a("TaskTableTopbar",{attrs:{query:t.query,selectStatus:t.selectStatus},on:{add:t.handleTabCreate,search:t.handleSearch,delete:function(e){return t.$wait(t.handleTaskDelete)},"input-query":function(e){t.query=e}}}),t.isLoading.length?a("Loader"):t.$router.hasMatched({name:"task list"})?a("div",{staticClass:"is-flex-auto",staticStyle:{padding:"0.5rem","padding-top":"0"}},[a("TaskTable",{attrs:{tasks:t.tasks,selectStatus:t.selectStatus},on:{"select-all":t.handleSelectAll,"select-task":t.handleTaskSelect,"task-detail-click":t.handleTabCreate}})],1):t._e(),a("div",{staticStyle:{margin:"0.5rem","margin-top":"0"}},[a("Pagination",{attrs:{page:t.tasks.page,total:t.tasks.total,perPage:t.tasks.perPage},on:{"change-page":t.handleChangePage}})],1)],1)],2)},i=[],n=(a("96cf"),a("3b8d")),r=(a("ac6a"),a("7216")),c=a("2ab5"),l=a("1799"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"tabs is-boxed",staticStyle:{"margin-bottom":"0"}},[a("ul",[a("li",{class:null===t.currentTab&&"is-active"},[a("a",{on:{click:function(e){return t.$emit("select",null)}}},[t._v("Tasks")])]),t._l(t.tabs.list,function(e){return a("li",{key:e,class:t.currentTab===e&&"is-active"},[a("a",{on:{click:function(a){return t.$emit("select",e)}}},[a("span",[t._v("\n            "+t._s(t.getTaskDescription(e,t.tabs.data[e]))+"\n          ")]),a("span",{staticClass:"icon"},[a("i",{staticClass:"iconfont icon-close",staticStyle:{cursor:"pointer"},on:{click:function(a){return a.stopPropagation(),t.$emit("remove",e)}}})])])])})],2)])])},u=[],d={name:"TaskTabs",props:{currentTab:{required:!0},tabs:{required:!0}},methods:{getTaskDescription:function(t,e){return-1===t?"New Task":e?""===e.description?"No Description":e.description:void 0}}},h=d,f=(a("3eb4"),a("2877")),p=Object(f["a"])(h,o,u,!1,null,"6635aceb",null),k=p.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"is-flex-auto table-container"},[a("table",{staticClass:"table is-nowrapped is-bordered is-fullwidth"},[a("thead",[a("td",{staticStyle:{width:"1px",cursor:"pointer"},on:{click:function(e){return t.$emit("select-all")}}},[a("Checkbox",{attrs:{value:t.selectStatus}})],1),a("th",{staticClass:"is-centered"},[t._v("Operation")]),a("th",[t._v("Discription")]),a("th",[t._v("Plant")]),a("th",[t._v("Area")]),a("th",[t._v("Cost Center")]),a("th",[t._v("Work Load")]),a("th",[t._v("Utilization")]),a("th",[t._v("Time")]),a("th",[t._v("Created At")])]),a("tbody",t._l(t.tasks.list,function(e){return a("tr",t._b({key:e},"tr",t.tasks.data[e],!1),[a("td",{staticStyle:{cursor:"pointer"},on:{click:function(a){return t.$emit("select-task",e)}}},[a("Checkbox",{attrs:{value:t.tasks.data[e].isSelected}})],1),a("td",{staticClass:"is-centered"},[a("a",{staticClass:"has-text-info",on:{click:function(a){return t.$emit("task-detail-click",e)}}},[t._v("\n            Detail\n          ")])]),a("td",[t._v(t._s(t.tasks.data[e].description))]),a("td",[t._v(t._s(t.tasks.data[e].plant))]),a("td",[t._v(t._s(t.tasks.data[e].area))]),a("td",[t._v(t._s(t.tasks.data[e].cost_center))]),a("td"),a("td"),a("td"),a("td",[t._v(t._s(t.tasks.data[e].created_at))])])}),0)])])},T=[],v={name:"TaskTable",props:{tasks:{type:Object,required:!0},selectStatus:{required:!0}}},m=v,g=Object(f["a"])(m,b,T,!1,null,null,null),S=g.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"is-flex",staticStyle:{padding:"0.5rem"}},[a("div",{staticClass:"buttons has-addons",staticStyle:{"margin-bottom":"0"}},[a("a",{staticClass:"button",staticStyle:{"margin-bottom":"0"},on:{click:function(e){return t.$emit("add",-1)}}},[t._m(0),a("span",[t._v("New")])]),a("a",{staticClass:"button",staticStyle:{"margin-bottom":"0"},attrs:{disabled:!1===t.selectStatus},on:{click:function(e){return t.$emit("delete")}}},[t._m(1),a("span",[t._v("Delete")])])]),a("div",{staticStyle:{width:"0.5rem"}}),a("div",{staticClass:"field has-addons"},[a("div",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{type:"text"},domProps:{value:t.query},on:{input:function(e){t.$emit("input-query",e.target.value.trim())},keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("search")}}})]),a("div",{staticClass:"control"},[a("a",{staticClass:"button is-info",on:{click:function(e){return t.$emit("search")}}},[t._m(2)])])])])},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"iconfont icon-create-item"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"iconfont icon-delete"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"iconfont icon-search"})])}],y={name:"TaskTableTopbar",props:{query:{required:!0},selectStatus:{required:!0}}},L=y,x=Object(f["a"])(L,_,C,!1,null,null,null),$=x.exports,w=a("0298"),P={name:"TaskManage",components:{TaskTabs:k,TaskTable:S,TaskTableTopbar:$,TaskDetail:w["default"],Pagination:l["a"]},data:function(){return{currentTab:null,tabs:{list:[],data:{}},page:1,query:"",perPage:50,tasks:{list:[],data:{},page:1,total:0,perPage:50},codes:{list:[],data:{}},isLoading:[],isInitialized:!1}},computed:{params:function(){var t={},e=this.page,a=this.perPage,s=this.query;return t.page=e,t.perPage=a,""!==s&&(t.query=s),t},isTaskListMatched:function(){return"/tasks"===this.$route.path},selectStatus:function(){var t=!1,e=!1;for(var a in this.tasks.data){var s=this.tasks.data[a];if(!0===s.isSelected?t=!0:e=!0,t&&e)return"minus"}return!!t},selectedTasks:function(){var t=this,e=[];return this.tasks.list.forEach(function(a){var s=t.tasks.data[a];s.isSelected&&e.push(s)}),e}},methods:{handleSleep:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading.push(0),t.next=3,Object(c["a"])(666);case 3:this.isLoading.pop();case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getTasks:function(){var t=this,e=function(e){var a={},s=[],i=e.data;i.data.forEach(function(t){s.push(t.id),t.isSelected=!1,a[t.id]=t}),t.tasks={data:a,list:s,page:i.page,total:i.total,perPage:i.perPage}};this.isLoading.push(0),r["a"].post("tasks/search",this.params).then(e).finally(function(){return t.isLoading.pop()})},getCodes:function(){var t=this,e=function(e){var a={},s=[];e.data.forEach(function(t){s.push(t.code),a[t.code]=t}),t.codes={data:a,list:s}};this.isLoading.push(0),r["a"].post("codes/search").then(e).finally(function(){return t.isLoading.pop()})},handleTabCreate:function(t){var e=this.tabs.list;-1===e.indexOf(t)&&e.length<=5&&e.push(t),-1!==e.indexOf(t)&&(this.currentTab=t)},handleTabDelete:function(t){this.currentTab=null;var e=this.tabs,a=e.list,s=e.data;a.splice(a.indexOf(t),1),this.$delete(s,t)},handleTabMounted:function(t){var e=this.tabs.data;this.$set(e,t.id,t)},handleSelectAll:function(){var t=this,e=this.tasks.list.map(function(e){return t.tasks.data[e]});switch(this.selectStatus){case"minus":case!1:e.forEach(function(t){return t.isSelected=!0});break;case!0:e.forEach(function(t){return t.isSelected=!1})}},handleTaskDelete:function(){var t=this,e=this.selectedTasks.map(function(t){return t.id});if(0!==e.length){var a=function(){e.forEach(function(e){t.tasks.list.splice(t.tasks.list.indexOf(e),1),t.$delete(t.tasks.data,e)})};return r["a"].post("tasks/delete",{ids:e}).then(a).catch(function(t){return console.log(t)})}},handleTaskAdd:function(t){var e=this.tabs,a=e.list,s=e.data,i=t.id;this.currentTab=i,this.$delete(s,-1),this.$set(a,a.indexOf(-1),i),this.$set(s,i,t),t.isSelected=!1,this.tasks.list.unshift(i),this.$set(this.tasks.data,i,t)},handleTaskSave:function(t){t.isSelected=!1,this.$set(this.tasks.data,t.id,t)},handleSearch:function(){this.page=1,this.getTasks()},handleTaskSelect:function(t){var e=this.tasks.data[t];e.isSelected=!e.isSelected},handleChangePage:function(t){this.page=t,this.getTasks()}},created:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isInitialized=!1,t.next=3,this.handleSleep();case 3:return t.next=5,this.getCodes();case 5:return t.next=7,this.getTasks();case 7:this.isInitialized=!0;case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},O=P,q=Object(f["a"])(O,s,i,!1,null,null,null);e["default"]=q.exports},"3b45":function(t,e,a){},"3eb4":function(t,e,a){"use strict";var s=a("3b45"),i=a.n(s);i.a},ac6a:function(t,e,a){for(var s=a("cadf"),i=a("0d58"),n=a("2aba"),r=a("7726"),c=a("32e9"),l=a("84f2"),o=a("2b4c"),u=o("iterator"),d=o("toStringTag"),h=l.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(f),k=0;k<p.length;k++){var b,T=p[k],v=f[T],m=r[T],g=m&&m.prototype;if(g&&(g[u]||c(g,u,h),g[d]||c(g,d,T),l[T]=h,v))for(b in s)g[b]||n(g,b,s[b],!0)}}}]);
//# sourceMappingURL=chunk-25f84476.97c54c4d.js.map