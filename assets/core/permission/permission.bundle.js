!function(e){var a={};function t(n){if(a[n])return a[n].exports;var s=a[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)t.d(n,s,function(a){return e[a]}.bind(null,s));return n},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=60)}([function(e,a,t){e.exports=t(1)(0)},function(e,a){e.exports=_xe_dll_common},function(e,a,t){e.exports=t(1)(4)},function(e,a,t){e.exports=t(1)(140)},function(e,a,t){e.exports=t(1)(3)},function(e,a,t){e.exports=t(1)(437)},function(e,a,t){e.exports=t(1)(17)},function(e,a,t){e.exports=t(1)(8)},,function(e,a,t){e.exports=t(1)(138)},function(e,a,t){e.exports=t(1)(397)},function(e,a,t){e.exports=t(21)},,function(e,a,t){e.exports=t(1)(70)},,,function(e,a,t){e.exports=t(1)(136)},,,,,function(e,a,t){var n=t(22);e.exports=n},function(e,a,t){t(23);var n=t(27);n.JSON||(n.JSON={stringify:JSON.stringify}),e.exports=function(e,a,t){return n.JSON.stringify.apply(null,arguments)}},function(e,a,t){var n=t(24),s=t(25),l=t(26),r=s("JSON","stringify"),c=/[\uD800-\uDFFF]/g,i=/^[\uD800-\uDBFF]$/,o=/^[\uDC00-\uDFFF]$/,u=function(e,a,t){var n=t.charAt(a-1),s=t.charAt(a+1);return i.test(e)&&!o.test(s)||o.test(e)&&!i.test(n)?"\\u"+e.charCodeAt(0).toString(16):e},p=l((function(){return'"\\udf06\\ud834"'!==r("\udf06\ud834")||'"\\udead"'!==r("\udead")}));r&&n({target:"JSON",stat:!0,forced:p},{stringify:function(e,a,t){var n=r.apply(null,arguments);return"string"==typeof n?n.replace(c,u):n}})},function(e,a,t){e.exports=t(1)(10)},function(e,a,t){e.exports=t(1)(68)},function(e,a,t){e.exports=t(1)(23)},function(e,a,t){e.exports=t(1)(18)},function(e,a,t){e.exports=t(1)(71)},function(e,a,t){e.exports=t(1)(19)},,,,,function(e,a,t){e.exports=t(1)(165)},function(e,a,t){e.exports=t(1)(78)},,,,,,,,,,function(e,a,t){e.exports=t(1)(5)},,,,,,,,,,,,,,,function(e,a,t){"use strict";t.r(a);t(16),t(13),t(61),t(34),t(35);var n=t(11),s=t.n(n),l=t(28),r=t.n(l),c=t(29),i=t.n(c),o=t(3),u=t.n(o),p=t(10),d=t.n(p),g=t(6),v=t.n(g),f=t(45),h=t.n(f),m=t(9),_=t.n(m),x=t(2),y=t.n(x),b=t(4),T=t.n(b),R=t(7),k=t.n(R),U=t(0),S=t.n(U),w=t(5),G=13,j=9,$=8,O=38,A=40,E=27,I=function(){function e(a){var t=a.$wrapper,n=a.key,s=a.userSearchUrl,l=a.groupSearchUrl,r=a.permission,c=a.type,i=a.vgroupAll;T()(this,e),this.$wrapper=t,this.key=n,this.userSearchUrl=s,this.groupSearchUrl=l,this.permission=r,this.type=c,this.vgroupAll=i,this.query="",this.suggestion=[],this.placeholder=w.default.Lang.trans("xe::explainIncludeUserOrGroup"),this.selectedIndex="",this.includeSelectedIndex=-1,this.excludeSelectedIndex=-1,this.MIN_QUERY_LENGTH=2}return k()(e,[{key:"bindEvents",value:function(){var e,a,t=this;this.$wrapper.on("change",".chkModeAble",(function(e){var a,n;S()(e.target).is(":checked")?y()(a=t.$wrapper).call(a,"input:not(.chkModeAble)").prop("disabled",!0):y()(n=t.$wrapper).call(n,"input:not(.chkModeAble)").prop("disabled",!1)})),this.$wrapper.on("keydown",".inputUserGroup",(function(e){var a,n,s=_()(a=e.target.value).call(a),l=S()(this),r=e.keyCode,c=y()(n=l.parent()).call(n,".ReactTags__suggestions ul"),i=l.data("input");if(s.length>=t.MIN_QUERY_LENGTH){if(c.length>0){var o=h()(l.data("index"),10),p=0;switch(r){case O:p=0==o?y()(c).call(c,"li").length-1:o-1,l.data("index",p),y()(c).call(c,"li").eq(p).addClass("active").siblings().removeClass("active");break;case A:p=o==y()(c).call(c,"li").length-1?0:o+1,l.data("index",p),y()(c).call(c,"li").eq(p).addClass("active").siblings().removeClass("active");break;case G:case j:if(e.preventDefault(),y()(c).call(c,"li.active").length>0){var g,f=y()(c).call(c,"li.active").data("tag"),m="",x="",b="";"user"==c.data("target")?"include"==i?(m=t.type+"User",x="user",b="@"):(m=t.type+"Except",x="except",b="@"):(m=t.type+"Group",x="group",b="%");var T=t.permission[x],R=!1;T.length>0?(v()(T).call(T,(function(e,a){e.id===f.id&&(R=!0)})),R||t.permission[x].push(f)):t.permission[x].push(f);var k,U,w,I,M=d()(g=t.permission[x]).call(g,(function(e){return e.id}));if(!R)y()(k=c.closest(".ReactTags__tags")).call(k,"[name="+m+"]").val(_()(U=M.join()).call(U)),y()(w=c.closest(".ReactTags__tags")).call(w,"."+x+"Wrap").append(u()(I='<span class="ReactTags__tag">'.concat(b+(f.display_name||f.name),'<a class="ReactTags__remove btnRemoveTag" data-id="')).call(I,f.id,'">x</a></span>'));c.remove(),l.val("").data("index",-1).focus()}e.preventDefault();break;case E:t[i+"SelectedIndex"]=0,c.parent().empty(),l.focus()}}}else if($===r){var L,N=y()(L=l.closest(".ReactTags__tags")).call(L,".ReactTags__selected span");!s&&N.length>0&&t.removeTag(N.eq(N.length-1))}})),y()(e=this.$wrapper).call(e,".ReactTags__suggestions").on("mouseenter","li",(function(){var e=S()(this);e.closest("ul");e.addClass("active").siblings().removeClass("active")})),y()(a=this.$wrapper).call(a,".ReactTags__suggestions").on("click","li",(function(){var e,a,n=S()(this),s=n.data("tag"),l=n.closest("ul"),r=y()(e=n.closest(".ReactTags__tagInput")).call(e,"input:text"),c=r.data("input"),i=(s.id,""),o="",p="";"user"==l.data("target")?"include"==c?(i=t.type+"User",o="user",p="@"):(i=t.type+"Except",o="except",p="@"):(i=t.type+"Group",o="group",p="%");var g=t.permission[o],f=!1;g.length>0?(v()(g).call(g,(function(e,a){e.id===s.id&&(f=!0)})),f||t.permission[o].push(s)):t.permission[o].push(s);var h,m,x,b,T=d()(a=t.permission[o]).call(a,(function(e){return e.id}));f||(y()(h=l.closest(".ReactTags__tags")).call(h,"[name="+i+"]").val(_()(m=T.join()).call(m)),y()(x=l.closest(".ReactTags__tags")).call(x,"."+o+"Wrap").append(u()(b='<span class="ReactTags__tag">'.concat(p+(s.display_name||s.name),'<a class="ReactTags__remove btnRemoveTag" data-id="')).call(b,s.id,'">x</a></span>')));l.remove(),r.val("").data("index",-1).focus()})),this.$wrapper.on("keyup",".inputUserGroup",(function(e){var a,n,s,l=_()(a=e.target.value).call(a),r=S()(this),c=e.keyCode;if(l.length>=t.MIN_QUERY_LENGTH){if(-1==i()(n=[G,j,O,A,E,37,39]).call(n,c)){var o;switch("<ul>",'<li>Searching ... <span class="spinner" role="spinner"><span class="spinner-icon"></span></span></li>',"</ul>",y()(o=r.parent()).call(o,".ReactTags__suggestions").html('<ul><li>Searching ... <span class="spinner" role="spinner"><span class="spinner-icon"></span></span></li></ul>'),l.substr(0,1)){case"@":l=l.substr(1,l.length),t.searchUser(r,l);break;case"%":l=l.substr(1,l.length),t.searchGroup(r,l)}}}else y()(s=r.parent()).call(s,".ReactTags__suggestions").empty()})),this.$wrapper.on("click",".btnRemoveTag",(function(e){e.preventDefault(),t.removeTag(S()(this).closest("span"))}))}},{key:"makeIt",value:function(e,a){var t=_()(a).call(a).replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&"),n=RegExp(t,"gi");return(e.display_name||e.name).replace(n,"<mark>$&</mark>")}},{key:"removeTag",value:function(e){var a,t,n,s=this,l=e.closest(".ReactTags__selected").data("ptype"),c=e.data("id"),i="";switch(l){case"user":i=s.type+"User";break;case"except":i=s.type+"Except";break;case"group":i=s.type+"Group"}var o=s.permission[l];v()(o).call(o,(function(e,a){var t;e.id!==c&&r()(t=s.permission[l]).call(t,a,1)}));var u=d()(a=s.permission[l]).call(a,(function(e){return e.id}));y()(t=e.closest(".ReactTags__tags")).call(t,"[name="+i+"]").val(_()(n=u.join()).call(n)),e.remove()}},{key:"searchUser",value:function(e,a){var t=this,n=t.userSearchUrl;w.default.ajax({url:n+"/"+a,method:"get",dataType:"json",cache:!1,success:function(n){if(n.length>0){var l,r="";r+='<ul data-target="user">',v()(n).call(n,(function(e,n){r+='<li class="" data-tag=\''.concat(s()(e),"'>"),r+="<span>".concat(t.makeIt(e,a),"</span>"),r+="</li>"})),r+="</ul>",y()(l=e.parent()).call(l,".ReactTags__suggestions").html(r)}else{var c;y()(c=e.parent()).call(c,".ReactTags__suggestions").empty()}},error:function(e,a,t){}})}},{key:"searchGroup",value:function(e,a){var t=this,n=t.groupSearchUrl;w.default.ajax({url:n+"/"+a,method:"get",dataType:"json",cache:!1,success:function(n){if(n.length>0){var l,r="";r+='<ul data-target="group">',v()(n).call(n,(function(e,n){r+="<li data-tag='".concat(s()(e),"'>"),r+="<span>".concat(t.makeIt(e,a),"</span>"),r+="</li>"})),r+="</ul>",y()(l=e.parent()).call(l,".ReactTags__suggestions").html(r)}else{var c;y()(c=e.parent()).call(c,".ReactTags__suggestions").empty()}},error:function(e,a,t){}})}},{key:"render",value:function(){var e,a,t,n,s,l,r,c,i,o,p,g,f,h,m=this,x=this.permission.mode,y=this.permission.rating,b=!1,T=[{value:"super",name:w.default.Lang.trans("xe::userRatingAdministrator")},{value:"manager",name:w.default.Lang.trans("xe::userRatingManager")},{value:"user",name:w.default.Lang.trans("xe::user")},{value:"guest",name:w.default.Lang.trans("xe::guest")}],R=!1;"manual"!==x&&"inherit"!==x||(b=!0,"manual"!==x&&(R=!0));var k,U=d()(e=this.permission.group).call(e,(function(e){return e.id})),S=d()(a=this.permission.user).call(a,(function(e){return e.id})),G=d()(t=this.permission.except).call(t,(function(e){return e.id})),j="";if(j+="<div>",b){var $,O,A="inherit"===x?'checked="checked"':"";j+='<div class="form-group">',j+='<div class="checkbox">',j+=u()($=u()(O='<label><input type="checkbox" name="'.concat(this.type+"Mode",'" class="chkModeAble" value="inherit" ')).call(O,A," /> ")).call($,w.default.Lang.trans("xe::inheritMode"),"</label>"),j+="</div>",j+="</div>"}(j+='<div class="form-group">',j+="<label>회원 등급</label>",j+='<div class="radio">',v()(T).call(T,(function(e){var a,t,n,s,l=e.value==y?"checked":"";j+=u()(a=u()(t=u()(n=u()(s='<label><input type="radio" '.concat(R?'disabled="disabled"':"",' name="')).call(s,m.type+"Rating",'" value="')).call(n,e.value,'" ')).call(t,l?'checked="checked"':""," /> ")).call(a,e.name," &nbsp;</label>")})),j+="</div>",j+="</div>",j+='<div class="form-group">',j+="<label>".concat(w.default.Lang.trans("xe::includeUserOrGroup"),"</label>"),j+='<div class="ReactTags__tags">',j+='<div class="ReactTags__selected groupWrap" data-ptype="group">',v()(n=this.permission.group).call(n,(function(e){var a,t=e,n="%"+(t.display_name||t.name);j+=u()(a='<span class="ReactTags__tag">'.concat(n,'<a href="#" class="ReactTags__remove btnRemoveTag" data-id="')).call(a,t.id,'">x</a></span>')})),j+="</div>",j+='<div class="ReactTags__selected userWrap" data-ptype="user">',v()(s=this.permission.user).call(s,(function(e){var a,t="@"+(e.display_name||e.name);j+=u()(a='<span class="ReactTags__tag">'.concat(t,'<a href="#" class="ReactTags__remove btnRemoveTag" data-id="')).call(a,e.id,'|">x</a></span>')})),j+="</div>",j+='<div class="ReactTags__tagInput">',j+=u()(l=u()(r='<input type="text" placeholder="'.concat(this.placeholder,'" class="form-control inputUserGroup" data-input="include" ')).call(r,R?'disabled="disabled"':"",' value="')).call(l,this.query,'" data-index="-1" />'),j+='<div class="ReactTags__suggestions" data-input="include"></div>',j+="</div>",j+=u()(c='<input type="hidden" name="'.concat(this.type+"Group",'" class="form-control includeGroups" value="')).call(c,_()(i=U.join()).call(i),'" />'),j+=u()(o='<input type="hidden" name="'.concat(this.type+"User",'" class="form-control includeUsers" value="')).call(o,_()(p=S.join()).call(p),'" />'),j+="</div>",j+="</div>",this.vgroupAll.length>=1)&&(j+='<div class="form-group">',j+="<label>".concat(w.default.Lang.trans("xe::includeVGroup"),"</label>"),j+=d()(k=m.vgroupAll).call(k,(function(e){var a,t,n,s,l=!1;return-1!=function(e,a){for(var t=0;t<a.length;t++)if(a[t]==e)return t;return-1}(e.id,this.permission.vgroup)&&(l=!0),u()(a=u()(t=u()(n=u()(s='<label><input type="checkbox" '.concat(R?'disabled="disabled"':"",' name="')).call(s,m.type+"VGroup[]",'" value="')).call(n,e.id,'" ')).call(t,l?'checked="checked"':""," /> ")).call(a,e.title," &nbsp;</label>")})),j+="</div>");j+='<div class="form-group">',j+="<label>".concat(w.default.Lang.trans("xe::excludeUser"),"</label>"),j+='<div class="ReactTags__tags">',j+='<div class="ReactTags__selected exceptWrap" data-ptype="except">',v()(g=this.permission.except).call(g,(function(e){var a,t=e.display_name||e.name;t="@"+t,j+=u()(a='<span class="ReactTags__tag">'.concat(t,'<a href="#" class="ReactTags__remove btnRemoveTag" data-id="')).call(a,e.id,'">x</a></span>')})),j+="</div>",j+='<div class="ReactTags__tagInput">',j+=u()(f='<input type="text" placeholder="'.concat(w.default.Lang.trans("xe::explainExcludeUser"),'" class="form-control inputUserGroup" data-input="exclude" ')).call(f,R?'disabled="disabled"':"",' data-index="-1" />'),j+='<div class="ReactTags__suggestions" data-input="exclude"></div>',j+="</div>",j+=u()(h='<input type="hidden" name="'.concat(this.type+"Except",'" class="form-control excludeUsers" value="')).call(h,G,'" />'),j+="</div>",j+="</div>",j+="</div>",this.$wrapper.html(j)}}]),e}();S()(".__xe__uiobject_permission").each((function(e){var a=S()(this),t=a.data("data"),n=a.data("key"),s=a.data("type"),l=a.data("userUrl"),r=a.data("groupUrl"),c=a.data("vgroupAll"),i=new I({$wrapper:a,key:n,userSearchUrl:l,groupSearchUrl:r,permission:t,type:s,vgroupAll:c});i.render(),i.bindEvents()}))},function(e,a,t){e.exports=t(1)(264)}]);