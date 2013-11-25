webshims.register("form-validators",function(e,t,i,n){"use strict";(function(){t.refreshCustomValidityRules&&t.error("form-validators already included. please remove custom-validity.js");var i,a,r={},o=!1,s=function(e){t.refreshCustomValidityRules(e.target)},u=function(){return!u.types[this.type]};u.types={hidden:1,image:1,button:1,reset:1,submit:1},t.customErrorMessages={},t.addCustomValidityRule=function(i,n,a){r[i]=n,t.customErrorMessages[i]||(t.customErrorMessages[i]=[],t.customErrorMessages[i][""]=a||i),o&&e("input, select, textarea").filter(u).each(function(){l(this)})},t.refreshCustomValidityRules=function(n){if(a){var o=e(n).data()||e.data(n,{}),s=o.customMismatchedRule,u=e.prop(n,"validity")||{},l="",c=function(a,r){i=!0,a?(o.customMismatchedRule=r,"string"!=typeof a&&(a=t.getContentValidationMessage(n,!1,r),a&&"object"==typeof a&&(a=a[r]),a&&"string"==typeof a||(a=t.customErrorMessages[r][t.activeLang()]||t.customErrorMessages[r][""]||a.customError||a.defaultMessage||""))):(a="",o.customMismatchedRule=""),e(n).setCustomValidity(a),i=!1};if(s||u.valid||o.dependentValidation&&!o.dependentValidation._init){var d=e(n).val();e.each(r,function(e,t){return l=t(n,d,o,c)||"",s=e,l?!1:undefined}),"async"==l||!l&&u.valid||c(l,s)}return l}};var l=t.refreshCustomValidityRules;t.ready("forms form-validation",function(){e.propHooks.setCustomValidity={get:function(t){return i||e.data(t,"customMismatchedRule",""),null}},setTimeout(function(){t.addReady(function(t,i){a=!0,e("input, select, textarea",t).add(i.filter("input, select, textarea")).filter(u).each(function(){l(this)}),o=!0}),e(n).on("refreshCustomValidityRules",s)},9)})})(),function(){var a=t.cfg.forms,r=t.addCustomValidityRule,o=function(e){return n.getElementById(e)};r("partialPattern",function(e,t,i){return i=i.partialPattern,t&&i?!RegExp("("+i+")","i").test(t):undefined},"This format is not allowed here."),r("tooShort",function(e,t,i){return t&&i.minlength?i.minlength>t.length:undefined},"Entered value is too short.");var s={};r("group-required",function(i){var a=i.name;if(a&&"checkbox"===i.type&&e(i).hasClass("group-required")){var r=e(i.form&&i.form[a]||n.getElementsByName(a)),o=r.filter(":checked:enabled");return s[a]&&clearTimeout(s[a]),s[a]=setTimeout(function(){r.addClass("group-required").off("click.groupRequired").on("click.groupRequired",function(){r.filter(".group-required").each(function(){t.refreshCustomValidityRules(this)})})},9),!o[0]}},"Please check one of these checkboxes."),r("creditcard",function(t,i){if(i&&e(t).hasClass("creditcard-input")){if(i=i.replace(/\-/g,""),i!=1*i)return!0;for(var n,a=i.length,r=0,o=1;a--;)n=parseInt(i.charAt(a),10)*o,r+=n-9*(n>9),o^=3;return!(0===r%10&&r>0)}},"Please enter a valid credit card number");var u={prop:"value","from-prop":"value",toggle:!1},l=function(t){return e(t.form[t.name]).filter('[type="radio"]')};t.ready("form-validation",function(){t.modules&&(l=t.modules["form-core"].getGroupElements||l)}),r("dependent",function(i,a,r){if(r=r.dependentValidation){var o,s=function(t){var n=e.prop(r.masterElement,r["from-prop"]);o&&(n=-1!==e.inArray(n,o)),r.toggle&&(n=!n),e.prop(i,r.prop,n),t&&e(i).getShadowElement().filter(".user-error, .user-success").trigger("refreshvalidityui")};if(!r._init||!r.masterElement){if("string"==typeof r&&(r={from:r}),r.masterElement=n.getElementById(r.from)||n.getElementsByName(r.from||[])[0],!r.masterElement||!r.masterElement.form)return;/radio|checkbox/i.test(r.masterElement.type)?(r["from-prop"]||(r["from-prop"]="checked"),r.prop||"checked"!=r["from-prop"]||(r.prop="disabled")):r["from-prop"]||(r["from-prop"]="value"),0===r["from-prop"].indexOf("value:")&&(o=r["from-prop"].replace("value:","").split("||"),r["from-prop"]="value"),r=e.data(i,"dependentValidation",e.extend({_init:!0},u,r)),"value"!==r.prop||o?e("radio"===r.masterElement.type&&l(r.masterElement)||r.masterElement).bind("change",s):e(r.masterElement).bind("change",function(){t.refreshCustomValidityRules(i),e(i).getShadowElement().filter(".user-error, .user-success").trigger("refreshvalidityui")})}return"value"!=r.prop||o?(s(),""):e.prop(r.masterElement,"value")!=a}},"The value of this field does not repeat the value of the other field"),i.JSON&&r("ajaxvalidate",function(i,n,r){if(n&&r.ajaxvalidate){var s;if(!r.remoteValidate){"string"==typeof r.ajaxvalidate?r.ajaxvalidate={url:r.ajaxvalidate,depends:e([])}:r.ajaxvalidate.depends=r.ajaxvalidate.depends?e(r.ajaxvalidate.depends).map(o):e([]),r.ajaxvalidate.depends.on("refreshCustomValidityRules",function(){t.refreshCustomValidityRules(i)}),s=r.ajaxvalidate;var u={ajaxLoading:!1,restartAjax:!1,message:"async",cache:{},update:function(t){this.ajaxLoading?this.restartAjax=t:(this.restartAjax=!1,this.ajaxLoading=!0,e.ajax(e.extend({},s,{url:s.url,dataType:"json",depData:t,data:a.fullRemoteForm||s.fullForm?e(i).jProp("form").serializeArray():t,success:this.getResponse,complete:this._complete})))},_complete:function(){u.ajaxLoading=!1,u.restartAjax&&this.update(u.restartAjax),u.restartAjax=!1},getResponse:function(t){t?"string"==typeof t&&(t=JSON.parse(t)):t={message:"",valid:!0},u.message="message"in t?t.message:!t.valid,u.lastMessage=u.message,u.blockUpdate=!0,e(i).triggerHandler("refreshvalidityui"),u.message="async",u.blockUpdate=!1},getData:function(){var t;return t={},t[e.prop(i,"name")||e.prop(i,"id")]=e(i).val(),s.depends.each(function(){return e(this).is(":invalid")?(t=!1,!1):(t[e.prop(this,"name")||e.prop(this,"id")]=e(this).val(),undefined)}),t},getTempMessage:function(){var e,t,i="async";if(r.remoteValidate.blockUpdate)i=u.message;else if(e=this.getData()){try{t=JSON.stringify(e)}catch(n){}t===this.lastString?i=this.ajaxLoading?"async":this.lastMessage:(this.lastString=t,this.lastMessage="async",clearTimeout(r.remoteValidate.timer),r.remoteValidate.timer=setTimeout(function(){r.remoteValidate.update(e)},9))}else i="";return i}};r.remoteValidate=u}return r.remoteValidate.getTempMessage()}},"remote error")}()});