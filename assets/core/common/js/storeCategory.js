!function(t){function e(n){if(o[n])return o[n].exports;var s=o[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var o={};e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=138)}({1:function(t,e,o){"use strict";var n,s,i;"function"==typeof Symbol&&Symbol.iterator;!function(o,a){s=[e],n=a,void 0!==(i="function"==typeof n?n.apply(e,s):n)&&(t.exports=i)}(0,function(t){var e=jQuery=window.jQuery;DynamicLoadManager.cssLoad("/assets/core/common/css/griper.css"),t.options={toastContainer:{template:'<div class="__xe_toast_container xe-toast-container"></div>',boxTemplate:'<div class="toast_box"></div>'},toast:{classSet:{danger:"xe-danger",positive:"xe-positive",warning:"xe-warning",success:"xe-success",fail:"xe-fail",error:"xe-danger",info:"xe-positive"},expireTimes:{"xe-danger":0,"xe-positive":5,"xe-warning":10,"xe-success":2,"xe-fail":5},status:{500:"xe-danger",401:"xe-warning"},template:'<div class="alert-dismissable xe-alert" style="display:none;"><button type="button" class="__xe_close xe-btn-alert-close" aria-label="Close"><i class="xi-close"></i></button><span class="message"></span></div>'},form:{selectors:{elementGroup:".form-group",errorText:".__xe_error_text"},classes:{message:["error-text","__xe_error_text"]},tags:{message:"p"}}},t.toast=function(t,e,o){var n="";n=-1!=navigator.userAgent.toLowerCase().indexOf("mobile")?o&&-1!=o.indexOf("top")?"top":"bottom":o||"bottom",this.toast.fn.add(t,e,n)};var o=null,n={};t.toast.fn=t.toast.prototype={constructor:t.toast,options:t.options.toast,statusToType:function(t){var e=this.options.status[t];return void 0===e?"danger":e.split("-")[1]},add:function(e,o,n){return t.toast.fn.create(e,o,n),this},create:function(o,n,s){var i=0,o=this.options.classSet[o]||"xe-danger";0!=this.options.expireTimes[o]&&(i=parseInt((new Date).getTime()/1e3)+this.options.expireTimes[o]);var a=e(this.options.template);a.attr("data-expire-time",i).addClass(o).find(".message").remove(),a.append(n),s&&-1!=s.indexOf("top")?t.toast.fn.container(s).prepend(a):t.toast.fn.container(s).append(a),this.show(a)},show:function(t){t.slideDown("slow")},destroy:function(t){t.slideUp("slow",function(){t.remove()})},container:function(s){if(n.hasOwnProperty(s))return n[s];var i={};switch(s||(s="bottom"),s){case"top":e.extend(i,{top:0,bottom:"initial",margin:"0 auto"});break;case"topLeft":e.extend(i,{margin:0,top:0,left:0,right:"initial",bottom:"initial",minWidth:"50%"});break;case"topRight":e.extend(i,{margin:0,top:0,right:0,left:"initial",bottom:"initial",minWidth:"50%"});break;case"bottom":e.extend(i,{bottom:0,left:0,right:0,top:"initial",margin:"0 auto"});break;case"bottomLeft":e.extend(i,{margin:0,bottom:0,left:0,right:"initial",top:"initial",minWidth:"50%"});break;case"bottomRight":e.extend(i,{margin:0,bottom:0,left:"initial",right:0,top:"initial",minWidth:"50%"})}o=e(t.options.toastContainer.boxTemplate);var a=e(t.options.toastContainer.template).append(o).css(i);n[s]=o,e("body").append(a),a.on("click","button.__xe_close",function(o){t.toast.fn.destroy(e(this).parents(".xe-alert")),o.preventDefault()});return function(o){var n;return function(){n=setInterval(function(){var n=parseInt((new Date).getTime()/1e3);o.find("div.xe-alert").each(function(){var o=parseInt(e(this).data("expire-time"));0!=o&&n>o&&t.toast.fn.destroy(e(this))})},1e3)}}(o)(),o}},t.form=function(e,o){t.form.fn.putByElement(e,o)},t.form.fn=t.form.prototype={constructor:t.form,options:t.options.form,getGroup:function(t){return t.closest(this.options.selectors.elementGroup)},putByElement:function(t,e){this.put(this.getGroup(t),e,t)},put:function(t,o,n){1==t.length?t.append(e("<"+this.options.tags.message+">").addClass(this.options.classes.message.join(" ")).text(o)):0==t.length&&n.after(e("<"+this.options.tags.message+">").addClass(this.options.classes.message.join(" ")).text(o))},clear:function(t){t.find(this.options.tags.message+this.options.selectors.errorText).remove()}}})},138:function(t,e,o){"use strict";var n=o(1),s=function(t){return t&&t.__esModule?t:{default:t}}(n);$("#btnCreateCategory").on("click",function(t){var e=t.target,o=$(e).closest("form").find('[name="id"]').val(),n={};if(!o)return void s.default.form($(e),"You must first create a category ID.");s.default.form.fn.clear($(e).closest("form")),n.categoryName=o,XE.ajax({type:"post",dataType:"json",data:n,url:storeCategoryInfo.url,success:function(t){var o=$(e).closest(".__xe_df_category");o.find('[name="category_id"]').val(t.id),o.find("button").hide(),o.append($("<a>").text(storeCategoryInfo.text).prop("target","_blank").prop("href","/settings/category/"+t.id))}})})}});