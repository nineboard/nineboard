!function(t){var e={};function n(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=57)}({0:function(t,e,n){t.exports=n(1)(0)},1:function(t,e){t.exports=_xe_dll_common},13:function(t,e,n){t.exports=n(1)(70)},2:function(t,e,n){t.exports=n(1)(4)},44:function(t,e,n){t.exports=n(1)(434)},57:function(t,e,n){"use strict";n.r(e);n(13);var a=n(6),o=n.n(a),i=n(2),c=n.n(i),r=n(0),l=n.n(r),d=n(44),s=function(){this.group="",this.databaseName="",this.containerName="",this.$container="",this.init=function(t,e){var n,a,o;this.group=t,this.databaseName=e,this.containerName="__xe_container_DF_setting_"+t,this.$container=l()("#"+this.containerName),this.$container.$form=c()(n=this.$container).call(n,".__xe_add_form"),this.$container.$modal=c()(a=this.$container).call(a,".__xe_df_modal"),this.$container.$modal.$body=c()(o=this.$container.$modal).call(o,".modal-body"),this.validator=new d.default,this.attachEvent(),this.closeAll=function(){this.$container.$modal.xeModal("hide")}},this.attachEvent=function(){var t=this;this.$container.on("click",".__xe_btn_add",(function(){var e;t.$container.$modal.$body.html(t.formClone()),t.$container.$modal.xeModal("show");var n=c()(e=t.$container.$modal).call(e,".dynamic-lang-editor-box");n.addClass("lang-editor-box"),n.each((function(t,e){window.langEditorBoxRender(l()(e))}))})),this.$container.on("click",".__xe_btn_submit",(function(){t.store(this)})),this.$container.on("click",".__xe_btn_close",(function(){t.close(this)})),this.$container.on("click",".__xe_btn_edit",(function(e){e.preventDefault(),t.closeAll(),t.edit(this)})),this.$container.on("click",".__xe_btn_delete",(function(e){e.preventDefault(),t.destroy(this),t.closeAll()})),this.$container.on("change",".__xe_type_id",(function(e){var n=l()(this).closest("form"),a=c()(n).call(n,'[name="skinId"]');c()(a).call(a,"option").remove(),a.prop("disabled",!0),t.getSkinOption(n)})),this.$container.on("change",".__xe_skin_id",(function(e){var n=l()(this).closest("form");t.getAdditionalConfigure(n)})),this.$container.on("click",".__xe_checkbox-config",(function(t){var e=l()(t.target),n=l()(this).closest("form");c()(n).call(n,'[name="'+e.data("name")+'"]').val(1==e.prop("checked")?"true":"false")}))},this.getFormContainer=function(t){return t.closest(".__xe_form_container")},this.close=function(t){l()(t).closest("form").remove(),this.$container.$modal.xeModal("hide")},this.getList=function(){var t={group:this.group},e=this;window.XE.ajax({context:this.$container[0],type:"get",dataType:"json",data:t,url:window.XE.route("manage.dynamicField.index")}).done((function(t,n,a){var o;for(var i in c()(o=e.$container).call(o,"#df-tbody tr").remove(),t.list)e.addrow(t.list[i])}))},this.formClone=function(){var t=this.$container.$form.clone().removeClass("__xe_add_form");return t.show(),t},this.addrow=function(t){var e,n,a,o,i,r,l=c()(e=this.$container).call(e,".__xe_row").clone();(l.removeClass("__xe_row"),l.addClass("__xe_row_"+t.id),l.data("id",t.id),c()(l).call(l,"td.__xe_column_id").html(t.id),c()(l).call(l,"td.__xe_column_label").html(t.label),c()(l).call(l,"td.__xe_column_typeName").html(t.typeName),c()(l).call(l,"td.__xe_column_skinName").html(t.skinName),c()(l).call(l,"td.__xe_column_use").html(1==t.use?"True":"False"),0!=c()(n=c()(a=this.$container).call(a,".__xe_tbody")).call(n,".__xe_row_"+t.id).length)?c()(o=c()(i=this.$container).call(i,".__xe_tbody")).call(o,".__xe_row_"+t.id).replaceWith(l.show()):(this.removeRow(t.id),c()(r=this.$container).call(r,".__xe_tbody").append(l.show()))},this.removeRow=function(t){var e,n;c()(e=c()(n=this.$container).call(n,".__xe_tbody")).call(e,".__xe_row_"+t).remove()},this.edit=function(t){var e=l()(t).closest("tr").data("id"),n=this.formClone();n.data("isEdit","1"),n.attr("action",window.XE.route("manage.dynamicField.update")),this.$container.$modal.$body.html(n),this.$container.$modal.xeModal("show");var a={group:this.group,id:e},o=this;window.XE.ajax({context:this.$container.$modal.$body[0],type:"get",dataType:"json",data:a,url:window.XE.route("manage.dynamicField.getEditInfo"),success:function(t){c()(n).call(n,'[name="id"]').val(t.config.id).prop("readonly",!0),c()(n).call(n,'[name="typeId"] option').each((function(){var e=l()(this);e.val()!=t.config.typeId&&e.remove()}));var e=c()(n).call(n,".dynamic-lang-editor-box");e.addClass("lang-editor-box"),e.each((function(e,n){l()(n).data("lang-key",t.config[l()(n).data("name")]),window.langEditorBoxRender(l()(n))})),c()(n).call(n,'[name="use"]').val(o.checkBox(t.config.use)?"true":"false"),c()(n).call(n,'[name="required"]').val(o.checkBox(t.config.required)?"true":"false"),c()(n).call(n,'[name="sortable"]').val(o.checkBox(t.config.sortable)?"true":"false"),c()(n).call(n,'[name="searchable"]').val(o.checkBox(t.config.searchable)?"true":"false"),c()(n).call(n,'[data-name="use"]').prop("checked",o.checkBox(t.config.use)),c()(n).call(n,'[data-name="required"]').prop("checked",o.checkBox(t.config.required)),c()(n).call(n,'[data-name="searchable"]').prop("checked",o.checkBox(t.config.searchable)),o.getSkinOption(n)}})},this.checkBox=function(t){var e=!1;return null==t?e=!1:"false"==t?e=!1:"true"==t?e=!0:1==t&&(e=!0),e},this.destroy=function(t){if(!1!==confirm("이동작은 되돌릴 수 없습니다. 계속하시겠습니까?")){var e=l()(t).closest("tr").data("id"),n={group:this.group,databaseName:this.databaseName,id:e},a=this;window.XE.ajax({context:this.$container[0],type:"post",dataType:"json",data:n,url:window.XE.route("manage.dynamicField.destroy"),success:function(t){var e=t.id;t.id==t.updateid&&a.openStep("close"),a.removeRow(e)}})}},this.getSkinOption=function(t){var e=t.serialize(),n=this;c()(t).call(t,".__xe_additional_configure").html(""),""!=c()(t).call(t,'[name="typeId"]').val()&&window.XE.ajax({context:this.$container.$modal.$body[0],type:"get",dataType:"json",data:e,url:window.XE.route("manage.dynamicField.getSkinOption"),success:function(e){n.skinOptions(t,e.skins,e.skinId)}})},this.skinOptions=function(t,e,n){var a=c()(t).call(t,'[name="skinId"]');for(var o in c()(a).call(a,"option").remove(),e){var i=l()("<option>").attr("value",o).text(e[o]);a.append(i)}null!=n&&""!=n&&a.val(n),a.prop("disabled",!1),this.getAdditionalConfigure(t)},this.getAdditionalConfigure=function(t){var e,n={};o()(e=t.serializeArray()).call(e,(function(t){n[t.name]=t.value})),window.XE.get("manage.dynamicField.getAdditionalConfigure",n,{headers:{"X-XE-Async-Expose":!0}}).then((function(e){c()(t).call(t,".__xe_additional_configure").html(e.data.result)}))},this.store=function(t){var e,n=c()(e=this.$container.$modal.$body).call(e,"form"),a=this;try{this.validateCheck(n)}catch(t){return}var o=n.serialize();window.XE.ajax({context:this.$container.$modal.$body[0],type:"post",dataType:"json",data:o,url:n.attr("action"),success:function(e){a.addrow(e),a.close(t)}})},this.setValidateRule=function(t,e){var n=this.validator.getRuleName(t);null!=e&&null!=n&&this.validator.setRules(n,e)},this.validateCheck=function(t){this.validator.check(t)}};e.default=s;var u=new s;u.init(window.dynamicFieldData.group,window.dynamicFieldData.databaseName),u.getList()},6:function(t,e,n){t.exports=n(1)(17)}});