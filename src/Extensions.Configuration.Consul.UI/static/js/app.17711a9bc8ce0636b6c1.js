webpackJsonp([1],{"+mSg":function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),o=s("woOf"),a=s.n(o),i=s("fZjL"),d=s.n(i),l=s("W3Iv"),c=s.n(l),r=s("pFYg"),h=s.n(r),u={name:"tree-row",props:{node:{type:Object,required:!0},depth:Number,customOptions:Object,customStyles:Object,parentNode:Object},data:function(){return{styles:{row:{width:"500px",cursor:"pointer",child:{height:"35px"}},expanded:{class:"expanded_icon"},addNode:{class:"add_icon",style:{color:"#007AD5"}},editNode:{class:"edit_icon",style:{color:"#007AD5"}},deleteNode:{class:"delete_icon",style:{color:"#EE5F5B"}},selectIcon:{class:"folder_icon",style:{color:"#007AD5"},active:{class:"folder_icon_active",style:{color:"#2ECC71"}}},text:{style:{},active:{style:{"font-weight":"bold",color:"#2ECC71"}}}},options:{events:{expanded:{state:!0,fn:this.toggleExpanded},selected:{state:!1,fn:this.toggleSelected},checked:{state:!1,fn:this.toggleChecked},editableName:{state:!1,fn:null,calledEvent:null}},addNode:{state:!1,fn:null,appearOnHover:!1},editNode:{state:!1,fn:null,appearOnHover:!1},deleteNode:{state:!1,fn:null,appearOnHover:!1},showTags:!1},checked:!1,expanded:!1,selected:!1}},watch:{checked:function(){this.node.state.checked=this.checked},expanded:function(){this.node.state.expanded=this.expanded},selected:function(){this.node.state.selected=this.selected}},mounted:function(){this.copyOptions(this.customOptions,this.options),this.copyOptions(this.customStyles,this.styles),this.node.state?(this.checked=this.node.state.checked,this.expanded=this.node.state.expanded,this.selected=this.node.state.selected):this.node.state={checked:!1,expanded:!1,selected:!1}},methods:{toggleEvent:function(e,t){if("editableName"==e&&this.options.events.editableName.calledEvent)this.toggleEvent(this.options.events.editableName.calledEvent,t);else if(1==this.options.events[e].state){(0,this.options.events[e].fn)(t,this)}},toggleExpanded:function(e,t){this.expanded=!this.expanded,this.node.state.expanded=this.expanded,this.$nextTick(function(){this.$emit("emitNodeExpanded",e,this.expanded)})},toggleSelected:function(e,t){this.selected=!this.selected,this.node.state.selected=this.selected,this.$emit("emitNodeSelected",e)},toggleChecked:function(e,t){this.checked=!this.checked,this.node.state.checked=this.checked,this.$nextTick(function(){this.callNodesChecked(this.checked),this.$emit("emitNodeChecked",e)})},emitNodeSelected:function(e){this.$emit("emitNodeSelected",e)},emitNodeExpanded:function(e,t){this.$emit("emitNodeExpanded",e,t)},emitNodeChecked:function(e){this.$emit("emitNodeChecked",e)},recCallNodes:function(e,t,s){var n=this;s.forEach(function(s){s.state||(s.state={checked:!1,expanded:!1,selected:!1}),s.state[t]=e,s.nodes&&n.recCallNodes(e,t,s.nodes)})},callNodesChecked:function(e){this.checked=e;for(var t=0;t<this.$children.length;t++)this.$children[t].callNodesChecked(e);0==this.$children.length&&this.node.nodes&&this.node.nodes.length>0&&this.recCallNodes(e,"checked",this.node.nodes)},callNodesDeselect:function(){this.selected=!1,this.node.state.selected=this.selected;for(var e=0;e<this.$children.length;e++)this.$children[e].callNodesDeselect();0==this.$children.length&&this.node.nodes&&this.node.nodes.length>0&&this.recCallNodes(!1,"selected",this.node.nodes)},callSpecificChild:function(e,t,s){for(var n=this,o=function(o){var a=n.$children[o].$props.node.id;if(e.find(function(e){return e==a}))return n.$children[o][t](s),{v:!1}},a=0;a<this.$children.length;a++){var i=o(a);if("object"===(void 0===i?"undefined":h()(i)))return i.v}},callNodeChecked:function(e){var t=e.arrIds,s=e.value;t[t.length-1]==this.node.id?(this.checked=s,this.callNodesChecked(this.checked)):(this.expanded=!0,this.$nextTick(function(){this.callSpecificChild(t,"callNodeChecked",e)}))},callNodeSelected:function(e){var t=e.arrIds,s=e.value;t[t.length-1]==this.node.id?this.selected=s:(this.expanded=!0,this.$nextTick(function(){this.callSpecificChild(t,"callNodeSelected",e)}))},callNodeExpanded:function(e){var t=e.arrIds,s=e.value;0==s&&0==this.expanded||(t[t.length-1]!=this.node.id?(this.expanded=!0,this.$nextTick(function(){this.callSpecificChild(t,"callNodeExpanded",e)})):this.expanded=s)},copyOptions:function(e,t){for(var s in e)t[s]&&"object"==h()(e[s])?this.copyOptions(e[s],t[s]):t[s]=e[s]}}},p={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",{staticClass:"node",style:e.styles.row,attrs:{"data-id":e.node.id}},[s("div",{staticClass:"row_data",style:e.styles.row.child,on:{click:function(t){return e.toggleEvent("selected",e.node,"node",t)}}},[s("span",{staticClass:"indents",on:{click:function(t){t.stopPropagation(),1==e.options.events.expanded.state&&void 0!=e.node.nodes&&e.node.nodes.length>0&&e.toggleEvent("expanded",e.node)}}},[e._l(e.depth,function(e,t){return s("span",{key:t,staticClass:"tree-indent"})}),e._v(" "),1==e.options.events.expanded.state&&void 0!=e.node.nodes&&e.node.nodes.length>0?s("i",{class:[{expanded:1==e.expanded},e.styles.expanded.class,"icon-expanded"]}):1!=e.options.events.expanded.state||void 0!=e.node.nodes&&0!=e.node.nodes.length?s("i"):s("span",{staticClass:"small-tree-indent"})],2),e._v(" "),1==e.options.events.selected.state?s("i",{class:e.expanded?e.styles.selectIcon.active.class:e.styles.selectIcon.class,style:e.selected?e.styles.selectIcon.active.style:e.styles.selectIcon.style,on:{click:function(t){return t.stopPropagation(),e.toggleEvent("selected",e.node)}}}):e._e(),e._v(" "),1==e.options.events.checked.state?s("input",{attrs:{type:"checkbox",name:"item[]","data-id":e.node.id},domProps:{checked:e.checked},on:{click:function(t){return e.toggleEvent("checked",e.node)}}}):e._e(),e._v(" "),s("span",{staticClass:"content"},[s("span",{staticClass:"capitalize",class:{selected:e.selected},style:e.selected?e.styles.text.active.style:e.styles.text.style,attrs:{"data-toggle":"tooltip","data-placement":"top",title:e.node.definition},on:{click:function(t){t.stopPropagation(),e.options.events.editableName.state&&e.toggleEvent("editableName",e.node)}}},[s("span",{staticClass:"key",class:[{folder_icon:0==e.node.type}]},[e._v(e._s(e.node.name))]),e._v(" "),2==e.node.type?s("span",{staticClass:"split"},[e._v(":")]):e._e(),e._v(" "),s("span",{staticClass:"text"},[e._v(e._s(e.node.text))])]),e._v(" "),s("span",{staticClass:"icon-panel"},[1==e.options.addNode.state?s("span",{staticClass:"icon_parent",on:{click:function(t){return t.stopPropagation(),e.options.addNode.fn(e.node)}}},[s("i",{class:[{"icon-hover":e.options.addNode.appearOnHover},e.styles.addNode.class],style:e.styles.addNode.style})]):e._e(),e._v(" "),1==e.options.editNode.state&&2==e.node.type?s("span",{staticClass:"icon_parent",on:{click:function(t){return t.stopPropagation(),e.options.editNode.fn(e.node)}}},[s("i",{class:[{"icon-hover":e.options.editNode.appearOnHover},e.styles.editNode.class],style:e.styles.editNode.style})]):e._e(),e._v(" "),1==e.options.deleteNode.state?s("span",{staticClass:"icon_parent",on:{click:function(t){return t.stopPropagation(),e.options.deleteNode.fn(e.parentNode,e.node)}}},[s("i",{class:[{"icon-hover":e.options.deleteNode.appearOnHover},e.styles.deleteNode.class],style:e.styles.deleteNode.style})]):e._e(),e._v(" "),1==e.options.showTags&&e.node.tags?s("span",[void 0!=e.node.tags[0]&&null!=e.node.tags[0]&&e.node.tags[0]?s("span",{staticClass:"badge"},[e._v(e._s(e.node.tags[0]))]):e._e()]):e._e()])])]),e._v(" "),e.expanded?s("ul",[e._l(e.node.nodes,function(t){return[s("tree-row",{key:t.id,attrs:{"custom-options":e.customOptions,"custom-styles":e.customStyles,depth:e.depth+1,node:t,"parent-node":e.node},on:{emitNodeChecked:e.emitNodeChecked,emitNodeExpanded:e.emitNodeExpanded,emitNodeSelected:e.emitNodeSelected}})]})],2):e._e()])},staticRenderFns:[]};var f=s("VU/8")(u,p,!1,function(e){s("+mSg")},"data-v-7e3bb4b2",null).exports,v={name:"tree",props:{customOptions:{default:function(){return{}},type:Object},customStyles:{default:function(){return{}},type:Object},id:String,nodes:{type:Array,required:!0}},data:function(){return{styles:{tree:{height:"auto",display:"inline-block"}},options:{treeEvents:{expanded:{state:!1,fn:null},collapsed:{state:!1,fn:null},selected:{state:!1,fn:null},checked:{state:!1,fn:null}}},selectedNode:null,expandedNodes:{},force:!0}},components:{"tree-row":f},mounted:function(){this.copyOptions(this.customOptions,this.options),this.copyOptions(this.customStyles,this.styles)},methods:{forceRender:function(e){var t=this;this.nodes=[],this.$nextTick(function(){t.nodes=e})},copyOptions:function(e,t){for(var s in e)t[s]&&"object"==h()(e[s])?this.copyOptions(e[s],t[s]):t[s]=e[s]},recFindNodePath:function(e,t,s,n){var o=this,a=[];return t.forEach(function(t){var i=[];return e==t.id&&n>=s?(a.unshift(t.id),!1):t.nodes&&n>s&&null!=(i=o.recFindNodePath(e,t.nodes,s+1,n))?(i.unshift(t.id),a=i,!1):void 0}),0==a.length?null:a},findNodePath:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9999;return this.recFindNodePath(e,this.nodes,1,t)},recFindNode:function(e,t,s,n){var o=this,a=null;return t.forEach(function(t){var i=[];return e==t.id&&n>=s?(a=t,!1):t.nodes&&n>s&&null!=(i=o.recFindNode(e,t.nodes,s+1,n))?(a=i,!1):void 0}),a},findNode:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9999;return this.recFindNode(e,this.nodes,1,t)},onNodeSelected:function(e){var t=this;if(null==this.selectedNode&&1==e.state.selected)this.selectedNode=e;else if(null!=this.selectedNode&&0==e.state.selected)this.selectedNode=null;else if(null!=this.selectedNode&&1==e.state.selected){var s=this.findNodePath(this.selectedNode.id,this.selectedNode.depth);this.callSpecificChild(s,"callNodeSelected",{value:!1,arrIds:s}),this.selectedNode=e,this.$nextTick(function(){var e=t.findNodePath(t.selectedNode.id,t.selectedNode.depth);t.callSpecificChild(e,"callNodeSelected",{value:!0,arrIds:e})})}var n=null;this.options.treeEvents.selected&&1==this.options.treeEvents.selected.state&&(n=this.customOptions.treeEvents.selected.fn);var o=null!=this.selectedNode;n&&n(e.id,o)},onNodeExpanded:function(e,t){0==t?this.nodeCollapsed(e.id,null,e.depth):this.nodeExpanded(e.id,null,e.depth);var s=null;1==t&&this.options.treeEvents.expanded&&1==this.options.treeEvents.expanded.state?s=this.customOptions.treeEvents.expanded.fn:this.options.treeEvents.collapsed&&1==this.options.treeEvents.collapsed.state&&(s=this.customOptions.treeEvents.collapsed.fn),s&&s(e.id,t)},onNodeChecked:function(e){var t=null;this.options.treeEvents.checked&&1==this.options.treeEvents.checked.state&&(t=this.customOptions.treeEvents.checked.fn);var s=e.state.checked;t&&t(e.id,s)},callSpecificChild:function(e,t,s){for(var n=this,o=function(o){var a=n.$children[o].$props.node.id;if(e.find(function(e){return e==a}))return n.$children[o][t](s),{v:!1}},a=0;a<this.$children.length;a++){var i=o(a);if("object"===(void 0===i?"undefined":h()(i)))return i.v}},doCheckNode:function(e,t,s){var n=this.findNodePath(e,t);n&&this.callSpecificChild(n,"callNodeChecked",{value:s,arrIds:n})},checkNode:function(e,t){this.doCheckNode(e,t,!0)},uncheckNode:function(e,t){this.doCheckNode(e,t,!1)},getSelectedNode:function(){return this.selectedNode},getCheckedNodes:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.getNodesData(e,{checked:!0},t)},getExpandedNodes:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.getNodesData(e,{expanded:!0},t)},checkAllNodes:function(){for(var e=0;e<this.$children.length;e++)this.$children[e].callNodesChecked(!0)},uncheckAllNodes:function(){for(var e=0;e<this.$children.length;e++)this.$children[e].callNodesChecked(!1)},recExpandAllNodes:function(e){for(var t={},s=0;s<e.length;s++)e[s].state.expanded=!0,e[s].nodes&&(t[e[s].id]=this.recExpandAllNodes(e[s].nodes));return t},expandAllNodes:function(){for(var e={},t=0;t<this.nodes.length;t++)this.nodes[t].state.expanded=!0,this.nodes[t].nodes&&(e[this.nodes[t].id]=this.recExpandAllNodes(this.nodes[t].nodes));this.expandedNodes=e,this.forceRender(this.nodes)},recCollapseAllNodes:function(e){var t=this;c()(e).forEach(function(e){t.findNode(e[0]).state.expanded=!1,e[1]&&d()(e[1]).length>0&&t.recCollapseAllNodes(e[1])})},collapseAllNodes:function(){var e=this;c()(this.expandedNodes).forEach(function(t){e.findNode(t[0]).state.expanded=!1,t[1]&&d()(t[1]).length>0&&e.recCollapseAllNodes(t[1])}),this.expandedNodes={},this.forceRender(this.nodes)},deselectAllNodes:function(){this.selectedNode=null;for(var e=0;e<this.$children.length;e++)this.$children[e].callNodesDeselect()},expandNode:function(e,t){var s=this.findNodePath(e,t);this.nodeExpanded(e,s),this.callSpecificChild(s,"callNodeExpanded",{value:!0,arrIds:s})},selectNode:function(e,t){var s=this.findNode(e,t),n=this;if(this.selectedNode){var o=this.findNodePath(this.selectedNode.id,this.selectedNode.depth);this.callSpecificChild(o,"callNodeSelected",{value:!1,arrIds:o})}this.selectedNode=s,this.selectedNode&&this.$nextTick(function(){var e=n.findNodePath(n.selectedNode.id,n.selectedNode.depth);n.callSpecificChild(e,"callNodeSelected",{value:!0,arrIds:e})})},nodeExpanded:function(e,t,s){void 0==t&&(t=this.findNodePath(e,s));var n=this.expandedNodes;t.forEach(function(e){n[e]||(n[e]={}),n=n[e]})},collapseNode:function(e,t){var s=this.findNodePath(e,t);this.nodeCollapsed(e,s),this.callSpecificChild(s,"callNodeExpanded",{value:!1,arrIds:s})},nodeCollapsed:function(e,t,s){void 0==t&&(t=this.findNodePath(e,s));var n=this.expandedNodes;t.forEach(function(e,s){if(!n[e])return!1;s==t.length-1&&n[e]&&delete n[e],n=n[e]})},recGetVisibleNodes:function(e,t,s){var n=this,o=t.$props.node;return 1==s?e.push(o):e.push(o.id),t.$children.forEach(function(t){e=n.recGetVisibleNodes(e,t,s)}),e},getVisibleNodes:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this,s=[];return this.$children.forEach(function(n){s=t.recGetVisibleNodes(s,n,e)}),s},recGetNodesData:function(e,t,s){var n=this,o=[];return void 0==s?o:(s.forEach(function(s){s.state&&d()(s.state).filter(function(e){return t[e]==s.state[e]}).length==d()(t).length&&(Array.isArray(e)?o.push(d()(s).filter(function(t){return e.includes(t)}).reduce(function(e,t){return e[t]=s[t],e},{})):o.push(s[e])),o=o.concat(n.recGetNodesData(e,t,s.nodes))}),o)},recGetNodesDataWithFormat:function(e,t,s){var n=this,o={};return void 0==s||0==s.length?o:(s.forEach(function(s){s.state&&d()(s.state).filter(function(e){return t[e]==s.state[e]}).length==d()(t).length?o[s.id]=n.recGetNodesDataWithFormat(e,t,s.nodes):a()(o,n.recGetNodesDataWithFormat(e,t,s.nodes))}),o)},getNodesData:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return 0==(arguments.length>2&&void 0!==arguments[2]&&arguments[2])?this.recGetNodesData(e,t,this.nodes):this.recGetNodesDataWithFormat(e,t,this.nodes)}}},_={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"tree"}},[e.force?s("ul",{style:e.styles.tree},[e._l(e.nodes,function(t){return[s("tree-row",{key:t.id,attrs:{"custom-options":e.customOptions,"custom-styles":e.customStyles,depth:1,node:t,"parent-node":t},on:{emitNodeChecked:e.onNodeChecked,emitNodeExpanded:e.onNodeExpanded,emitNodeSelected:e.onNodeSelected}})]})],2):e._e()])},staticRenderFns:[]},m=s("VU/8")(v,_,!1,null,null,null).exports,g=s("HveU"),w=s("mtWM"),y="http://localhost:5342/api";y="/api";var k={name:"app",mounted:function(){this.load()},data:function(){return{logined:!1,newkey:null,newkey_value:null,update_key:null,update_key_value:null,isFolder:!1,treeDisplayData:[],currentParentNode:null,currentNode:null,errorMsg:"Operation error!",password:null,reEnter_password:null,set_password_error_message:null,login_error_message:null,new_key_error_message:null,change_password_error_message:null}},methods:{EndWith:function(e,t){var s=e.length-t.length;return s>=0&&e.lastIndexOf(t)==s},load:function(){var e=this;this.$refs.loading.open(),w.get(y+"/key/nodes",{headers:{Authorization:"Bearer "+localStorage.getItem("access_token")}}).then(function(t){e.treeDisplayData=t.data,e.logined=!0}).catch(function(t){t.response&&401==t.response.status&&e.check_auth()}).then(function(){e.$refs.loading.close()})},open_new_key:function(e){this.currentNode=e||{type:0,id:""},this.$refs.create_key.open()},input_key:function(e){this.newkey?(this.isFolder=this.EndWith(this.newkey,"/"),this.EndWith(this.newkey,":")?this.new_key_error_message='Key is not allowed to end with " : "':this.new_key_error_message=null):this.isFolder=!1},new_key_submit:function(){if(!this.EndWith(this.newkey,":")){this.$refs.create_key.close();var e=this.currentNode.id+(0==this.currentNode.type||this.EndWith(this.currentNode.id,":")?"":":")+this.newkey;this.$refs.loading.open();var t=this;w.put(y+"/key/put",{key:e,value:this.newkey_value},{headers:{Authorization:"Bearer "+localStorage.getItem("access_token")}}).then(function(e){t.new_key_error_message=null,t.currentNode=null,t.newkey=null,t.newkey_value=null,t.load()}).catch(function(e){err.response&&401==err.response.status?t.check_auth():(t.new_key_error_message=e.response.data,t.$refs.create_key.open())}).then(function(){t.$refs.loading.close()})}},open_update_key:function(e){this.currentNode=e,this.update_key=e.name,this.update_key_value=e.text,this.$refs.update_key.open()},update_key_submit:function(){this.$refs.update_key.close(),this.$refs.loading.open();var e=this;w.put("http://localhost:5342/key/put",{key:this.currentNode.id,value:this.update_key_value},{headers:{Authorization:"Bearer "+localStorage.getItem("access_token")}}).then(function(t){e.load()}).catch(function(t){err.response&&401==err.response.status?e.check_auth():e.$refs.error.open()}).then(function(){e.$refs.loading.close(),e.update_key=null,e.update_key_value=null,e.currentNode=null})},delete_confirm:function(e,t){this.currentNode=t,this.currentParentNode=e,this.$refs.confirm.open()},canncel_delete:function(){this.$refs.confirm.close(),this.currentParentNode=null,this.currentNode=null},delete_key_submit:function(){this.$refs.confirm.close(),this.$refs.loading.open();var e=this,t=(this.currentParentNode,this.currentNode);w.delete(y+"/key/delete/"+(void 0!=t.nodes&&t.nodes.length>0&&t.type<2?"true":"false"),{data:{key:t.id},headers:{Authorization:"Bearer "+localStorage.getItem("access_token")}}).then(function(t){e.load()}).catch(function(t){err.response&&401==err.response.status?e.check_auth():e.$refs.error.open()}).then(function(){e.$refs.loading.close()})},check_auth:function(){var e=this;this.$refs.loading.open(),w.get(y+"/account/check").then(function(t){0==t.data?(e.$refs.loading.close(),e.$refs.set_password.open()):(e.$refs.loading.close(),e.login_error_message=null,e.password=null,e.$refs.login.open())}).catch(function(t){e.$refs.error.open()}).then(function(){e.$refs.loading.close()})},set_password:function(){var e=this;this.$refs.loading.open(),w.post(y+"/account/set",{password:e.password,reEnter:e.reEnter_password}).then(function(t){e.$refs.set_password.close(),localStorage.setItem("access_token",t.data),e.load()}).catch(function(t){t.response&&t.response.data&&(e.set_password_error_message=t.response.data)}).then(function(){e.$refs.loading.close()})},login:function(){var e=this;w.post(y+"/account/login",{password:e.password}).then(function(t){e.$refs.login.close(),localStorage.setItem("access_token",t.data),e.logined=!0,e.load()}).catch(function(t){t.response&&t.response.data&&(e.login_error_message=t.response.data)}).then(function(){})},logout:function(){localStorage.removeItem("access_token"),this.logined=!1,this.check_auth()},changePassword:function(){this.changePassword={},this.$refs.change_password.open()},change_password_submit:function(){var e=this;this.$refs.loading.open(),w.put(y+"/account/change.password",{oldPassword:e.changePassword.oldPassword,newPassword:e.changePassword.newPassword,reEnter:e.changePassword.reEnter_password}).then(function(t){e.$refs.change_password.close(),localStorage.setItem("access_token",t.data)}).catch(function(t){t.response&&t.response.data&&(e.change_password_error_message=t.response.data)}).then(function(){e.$refs.loading.close()})}},components:{tree:m,SweetModal:g.a,SweetModalTab:g.b},computed:{myCustomStyles:function(){return{tree:{height:"auto",maxHeight:"none",overflowY:"none",display:"block"},row:{width:"100%",cursor:"pointer",child:{height:"35px"}},expanded:{class:"icon-closed"}}},myCustomOptions:function(){return{treeEvents:{expanded:{state:!0,fn:null},collapsed:{state:!1,fn:null},selected:{state:!1,fn:null},checked:{state:!0,fn:this.myCheckedFunction}},events:{expanded:{state:!0,fn:{}},selected:{state:!1,fn:null},checked:{state:!1,fn:null},editableName:{state:!1,fn:null,calledEvent:null}},addNode:{state:!0,fn:this.open_new_key,appearOnHover:!0},editNode:{state:!0,fn:this.open_update_key,appearOnHover:!0},deleteNode:{state:!0,fn:this.delete_confirm,appearOnHover:!0},showTags:!0}}}},N={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("header",[s("span",[e._v("Consul configuration center")]),e._v(" "),e.logined?s("div",{staticClass:"menu"},[s("span",{staticClass:"menu_icon"}),e._v(" "),s("ul",[s("li",{on:{click:e.changePassword}},[s("a",[e._v("Change password")])]),e._v(" "),s("li",{on:{click:e.logout}},[s("a",[e._v("Sign out")])])])]):e._e()]),e._v(" "),e.logined?s("div",{staticClass:"tool"},[s("a",{staticClass:"add_icon new",on:{click:function(t){return e.open_new_key(null)}}},[e._v("NEW KEY/VALUE")])]):e._e(),e._v(" "),s("tree",{attrs:{id:"my-tree-id","custom-options":e.myCustomOptions,"custom-styles":e.myCustomStyles,nodes:e.treeDisplayData}}),e._v(" "),s("sweet-modal",{ref:"loading",attrs:{"overlay-theme":"dark","modal-theme":"dark",blocking:!0,"hide-close-button":!0}},[e._v("loading...")]),e._v(" "),s("sweet-modal",{ref:"create_key",attrs:{title:"New Key/Value","modal-theme":"dark"}},[s("div",{staticClass:"row"},[s("span",[e._v("Key or folder")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newkey,expression:"newkey"}],attrs:{type:"text",placeholder:"To create a folder, end a key with /"},domProps:{value:e.newkey},on:{input:[function(t){t.target.composing||(e.newkey=t.target.value)},e.input_key]}})]),e._v(" "),0==e.isFolder?s("div",{staticClass:"row"},[s("span",[e._v("Value")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newkey_value,expression:"newkey_value"}],attrs:{type:"text"},domProps:{value:e.newkey_value},on:{input:function(t){t.target.composing||(e.newkey_value=t.target.value)}}})]):e._e(),e._v(" "),s("span",{staticStyle:{color:"#D93600"}},[e._v(e._s(e.new_key_error_message))]),e._v(" "),s("a",{staticClass:"btn",attrs:{slot:"button",color:"light-grey"},on:{click:e.new_key_submit},slot:"button"},[e._v("Save")])]),e._v(" "),s("sweet-modal",{ref:"update_key",attrs:{title:e.update_key,"modal-theme":"dark"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.update_key_value,expression:"update_key_value"}],attrs:{type:"text"},domProps:{value:e.update_key_value},on:{input:function(t){t.target.composing||(e.update_key_value=t.target.value)}}}),e._v(" "),s("a",{staticClass:"btn",attrs:{slot:"button",color:"light-grey"},on:{click:e.update_key_submit},slot:"button"},[e._v("Save")])]),e._v(" "),s("sweet-modal",{ref:"success",attrs:{icon:"success","modal-theme":"dark"}},[e._v("Successfully saved!")]),e._v(" "),s("sweet-modal",{ref:"error",attrs:{icon:"error","modal-theme":"dark"}},[e._v(e._s(e.errorMsg))]),e._v(" "),s("sweet-modal",{ref:"confirm",attrs:{icon:"warning","modal-theme":"dark"}},[e._v("\n    Are you sure you want to delete?\n    "),s("a",{staticClass:"btn",attrs:{slot:"button",color:"light-grey"},on:{click:e.canncel_delete},slot:"button"},[e._v("No")]),e._v(" "),s("a",{staticClass:"btn",attrs:{slot:"button",color:"light-grey"},on:{click:e.delete_key_submit},slot:"button"},[e._v("Yes")])]),e._v(" "),s("sweet-modal",{ref:"set_password",attrs:{title:"Set password","modal-theme":"dark",blocking:!0,"hide-close-button":!0}},[s("div",{staticClass:"row"},[s("span",[e._v("Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",minlength:"6",maxlength:"18"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"row"},[s("span",[e._v("Re-Enter")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.reEnter_password,expression:"reEnter_password"}],attrs:{type:"password",minlength:"6",maxlength:"18"},domProps:{value:e.reEnter_password},on:{input:function(t){t.target.composing||(e.reEnter_password=t.target.value)}}})]),e._v(" "),s("span",{staticStyle:{color:"#D93600"}},[e._v(e._s(e.set_password_error_message))]),e._v(" "),s("a",{staticClass:"btn",attrs:{slot:"button",color:"light-grey"},on:{click:e.set_password},slot:"button"},[e._v("Save")])]),e._v(" "),s("sweet-modal",{ref:"change_password",attrs:{title:"Change password","modal-theme":"dark"}},[s("div",{staticClass:"row"},[s("span",[e._v("Old password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.changePassword.oldPassword,expression:"changePassword.oldPassword"}],attrs:{type:"password",minlength:"6",maxlength:"18"},domProps:{value:e.changePassword.oldPassword},on:{input:function(t){t.target.composing||e.$set(e.changePassword,"oldPassword",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"row"},[s("span",[e._v("New password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.changePassword.newPassword,expression:"changePassword.newPassword"}],attrs:{type:"password",minlength:"6",maxlength:"18"},domProps:{value:e.changePassword.newPassword},on:{input:function(t){t.target.composing||e.$set(e.changePassword,"newPassword",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"row"},[s("span",[e._v("Re-Enter")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.changePassword.reEnter_password,expression:"changePassword.reEnter_password"}],attrs:{type:"password",minlength:"6",maxlength:"18"},domProps:{value:e.changePassword.reEnter_password},on:{input:function(t){t.target.composing||e.$set(e.changePassword,"reEnter_password",t.target.value)}}})]),e._v(" "),s("span",{staticStyle:{color:"#D93600"}},[e._v(e._s(e.change_password_error_message))]),e._v(" "),s("a",{staticClass:"btn",attrs:{slot:"button",color:"light-grey"},on:{click:e.change_password_submit},slot:"button"},[e._v("Save")])]),e._v(" "),s("sweet-modal",{ref:"login",attrs:{title:"Sign in","modal-theme":"dark",blocking:!0,"hide-close-button":!0}},[s("div",{staticClass:"row"},[s("span",[e._v("Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",minlength:"6",maxlength:"18"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),s("span",{staticStyle:{color:"#D93600"}},[e._v(e._s(e.login_error_message))]),e._v(" "),s("a",{staticClass:"btn",attrs:{slot:"button",color:"light-grey"},on:{click:e.login},slot:"button"},[e._v("Sign in")])])],1)},staticRenderFns:[]};var b=s("VU/8")(k,N,!1,function(e){s("qpdp")},null,null).exports;n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:b},template:"<App/>"})},PwnR:function(e,t){},YfoY:function(e,t,s){"use strict";var n=s("Gu7T"),o=s.n(n),a={name:"SweetModal",props:{title:{type:String,required:!1,default:""},overlayTheme:{type:String,required:!1,default:"light"},modalTheme:{type:String,required:!1,default:"light"},blocking:{type:Boolean,required:!1,default:!1},pulseOnBlock:{type:Boolean,required:!1,default:!0},icon:{type:String,required:!1,default:""},hideCloseButton:{type:Boolean,required:!1,default:!1},enableMobileFullscreen:{type:Boolean,required:!1,default:!0},width:{type:[Number,String],required:!1,default:null}},mounted:function(){this.tabs=this.$children.filter(function(e){return e.cmpName&&"tab"==e.cmpName}),this.has_tabs&&(this.currentTab=this._changeTab(this.tabs[0])),document.addEventListener("keyup",this._onDocumentKeyup)},beforeDestroy:function(){document.removeEventListener("keyup",this._onDocumentKeyup)},data:function(){return{visible:!1,is_open:!1,is_bouncing:!1,tabs:[],backups:{body:{height:null,overflow:null}}}},computed:{has_title:function(){return this.title||this.$slots.title},has_tabs:function(){return this.tabs.length>0},has_content:function(){return this.$slots.default},current_tab:function(){return this.tabs.filter(function(e){return!0===e.active})[0]},overlay_classes:function(){return["sweet-modal-overlay","theme-"+this.overlayTheme,"sweet-modal-clickable",{"is-visible":this.visible,blocking:this.blocking}]},modal_classes:function(){return["sweet-modal","theme-"+this.modalTheme,{"has-title":this.has_title,"has-tabs":this.has_tabs,"has-content":this.has_content,"has-icon":this.icon,"is-mobile-fullscreen":this.enableMobileFullscreen,"is-visible":this.visible,"is-alert":this.icon&&!this.has_tabs||!this.icon&&!this.title&&!this.$slots.title,bounce:this.is_bouncing}]},modal_style:function(){var e=this.width,t=null;return null!==e&&(Number(e)==e&&(e+="px"),t="none"),{width:e,maxWidth:t}}},methods:{open:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(t&&this.has_tabs){var s=this.tabs.filter(function(e){return e.id===t});if(s.length>0)this.currentTab=this._changeTab(s[0]);else{var n=this.tabs[t];n&&(this.currentTab=this._changeTab(n))}}this.is_open=!0,this._lockBody(),this._animateIcon(),setTimeout(function(){return e.visible=!0},30),this.$emit("open")},close:function(){var e=this;this.visible=!1,this._unlockBody(),setTimeout(function(){return e.is_open=!1},300),this.$emit("close")},bounce:function(){var e=this;this.is_bouncing=!0,setTimeout(function(){return e.is_bouncing=!1},330)},_lockBody:function(){this.backups.body.height=document.body.style.height,this.backups.body.overflow=document.body.style.overflow,document.body.style.height="100%",document.body.style.overflow="hidden"},_unlockBody:function(){document.body.style.height=this.backups.body.height,document.body.style.overflow=this.backups.body.overflow},_onOverlayClick:function(e){e.target.classList&&!e.target.classList.contains("sweet-modal-clickable")||(this.blocking?this.pulseOnBlock&&this.bounce():this.close())},_onDocumentKeyup:function(e){27==e.keyCode&&(this.blocking?this.pulseOnBlock&&this.bounce():this.close())},_changeTab:function(e){this.tabs.map(function(t){return t.active=t==e}),this.currentTab=e},_getClassesForTab:function(e){return["sweet-modal-tab",{active:e.active,disabled:e.disabled}]},_animateIcon:function(){var e=this;if(this.icon)switch(this.icon){case"success":setTimeout(function(){e._applyClasses(e.$refs.icon_success,{"":["animate"],".sweet-modal-tip":["animateSuccessTip"],".sweet-modal-long":["animateSuccessLong"]})},80);break;case"warning":this._applyClasses(this.$refs.icon_warning,{"":["pulseWarning"],".sweet-modal-body":["pulseWarningIns"],".sweet-modal-dot":["pulseWarningIns"]});break;case"error":setTimeout(function(){e._applyClasses(e.$refs.icon_error,{"":["animateErrorIcon"],".sweet-modal-x-mark":["animateXMark"]})},80)}},_applyClasses:function(e,t){for(var s in t){var n,a,i=t[s],d=void 0;(n=(d=""==s?e:e.querySelector(s)).classList).remove.apply(n,o()(i)),(a=d.classList).add.apply(a,o()(i))}}}},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:e.is_open,expression:"is_open"}],class:e.overlay_classes,on:{click:e._onOverlayClick}},[s("div",{class:e.modal_classes,style:e.modal_style},[s("div",{staticClass:"sweet-box-actions"},[e._t("box-action"),e._v(" "),e.hideCloseButton?e._e():s("div",{staticClass:"sweet-action-close",on:{click:e.close}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",fill:"#292c34"}})])])],2),e._v(" "),e.has_title||e.has_tabs?s("div",{staticClass:"sweet-title"},[e.has_tabs&&!e.has_title?[s("ul",{staticClass:"sweet-modal-tabs"},e._l(e.tabs,function(t){return s("li",{class:e._getClassesForTab(t)},[s("a",{attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),e._changeTab(t)}}},[s("div",{staticClass:"sweet-modal-valign"},[t.icon?s("span",{staticClass:"sweet-modal-tab-icon",domProps:{innerHTML:e._s(t.icon)}}):e._e(),e._v(" "),s("span",{staticClass:"sweet-modal-tab-title"},[e._v(e._s(t.title))])])])])}),0)]:e._e(),e._v(" "),e.has_title?[e.title?s("h2",{domProps:{innerHTML:e._s(e.title)}}):e._e(),e._v(" "),e._t("title")]:e._e()],2):e._e(),e._v(" "),e.has_title&&e.has_tabs?s("ul",{staticClass:"sweet-modal-tabs"},e._l(e.tabs,function(t){return s("li",{class:e._getClassesForTab(t)},[s("a",{attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),e._changeTab(t)}}},[s("div",{staticClass:"sweet-modal-valign"},[t.icon?s("span",{staticClass:"sweet-modal-tab-icon",domProps:{innerHTML:e._s(t.icon)}}):e._e(),e._v(" "),s("span",{staticClass:"sweet-modal-tab-title"},[e._v(e._s(t.title))])])])])}),0):e._e(),e._v(" "),s("div",{ref:"content",staticClass:"sweet-content"},["error"==e.icon?s("div",{ref:"icon_error",staticClass:"sweet-modal-icon sweet-modal-error"},[e._m(0)]):e._e(),e._v(" "),"warning"==e.icon?s("div",{ref:"icon_warning",staticClass:"sweet-modal-icon sweet-modal-warning"},[s("span",{staticClass:"sweet-modal-body"}),e._v(" "),s("span",{staticClass:"sweet-modal-dot"})]):e._e(),e._v(" "),"info"==e.icon?s("div",{ref:"icon_info",staticClass:"sweet-modal-icon sweet-modal-info"}):e._e(),e._v(" "),"success"==e.icon?s("div",{ref:"icon_success",staticClass:"sweet-modal-icon sweet-modal-success"},[s("span",{staticClass:"sweet-modal-line sweet-modal-tip"}),e._v(" "),s("span",{staticClass:"sweet-modal-line sweet-modal-long"}),e._v(" "),s("div",{staticClass:"sweet-modal-placeholder"}),e._v(" "),s("div",{staticClass:"sweet-modal-fix"})]):e._e(),e._v(" "),e.$slots.default?s("div",{staticClass:"sweet-content-content"},[e._t("default")],2):e._e()]),e._v(" "),e.$slots.button?s("div",{staticClass:"sweet-buttons"},[e._t("button")],2):e._e()])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"sweet-modal-x-mark"},[t("span",{staticClass:"sweet-modal-line sweet-modal-left"}),this._v(" "),t("span",{staticClass:"sweet-modal-line sweet-modal-right"})])}]};var d=s("VU/8")(a,i,!1,function(e){s("PwnR")},null,null);t.a=d.exports},cdRd:function(e,t){},iiMH:function(e,t,s){"use strict";var n={props:{title:{type:String,required:!0},id:{type:String,required:!0},icon:{type:String,required:!1,default:null},disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{active:!1}},computed:{cmpName:function(){return"tab"}}},o={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{class:["sweet-modal-tab",{active:this.active}]},[this._t("default")],2)},staticRenderFns:[]};var a=s("VU/8")(n,o,!1,function(e){s("cdRd")},null,null);t.a=a.exports},qpdp:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.17711a9bc8ce0636b6c1.js.map