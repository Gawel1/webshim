var swfmini=function(){function e(){if(!P){try{var e=x.getElementsByTagName("body")[0].appendChild(h("span"));e.parentNode.removeChild(e)}catch(t){return}P=!0;for(var a=T.length,i=0;a>i;i++)T[i]()}}function t(e){P?e():T[T.length]=e}function a(){}function i(){C&&n()}function n(){var e=x.getElementsByTagName("body")[0],t=h(v);t.setAttribute("type",w);var a=e.appendChild(t);if(a){var i=0;(function(){if(typeof a.GetVariable!=f){var n=a.GetVariable("$version");n&&(n=n.split(" ")[1].split(","),A.pv=[parseInt(n[0],10),parseInt(n[1],10),parseInt(n[2],10)])}else if(10>i)return i++,setTimeout(arguments.callee,10),void 0;e.removeChild(t),a=null})()}}function r(e){var t=null,a=u(e);if(a&&"OBJECT"==a.nodeName)if(typeof a.SetVariable!=f)t=a;else{var i=a.getElementsByTagName(v)[0];i&&(t=i)}return t}function s(e,t,a){var i,n=u(a);if(A.wk&&312>A.wk)return i;if(n)if(typeof e.id==f&&(e.id=a),A.ie&&A.win){var r="";for(var s in e)e[s]!=Object.prototype[s]&&("data"==s.toLowerCase()?t.movie=e[s]:"styleclass"==s.toLowerCase()?r+=' class="'+e[s]+'"':"classid"!=s.toLowerCase()&&(r+=" "+s+'="'+e[s]+'"'));var l="";for(var c in t)t[c]!=Object.prototype[c]&&(l+='<param name="'+c+'" value="'+t[c]+'" />');n.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+r+">"+l+"</object>",E[E.length]=e.id,i=u(e.id)}else{var d=h(v);d.setAttribute("type",w);for(var p in e)e[p]!=Object.prototype[p]&&("styleclass"==p.toLowerCase()?d.setAttribute("class",e[p]):"classid"!=p.toLowerCase()&&d.setAttribute(p,e[p]));for(var m in t)t[m]!=Object.prototype[m]&&"movie"!=m.toLowerCase()&&o(d,m,t[m]);n.parentNode.replaceChild(d,n),i=d}return i}function o(e,t,a){var i=h("param");i.setAttribute("name",t),i.setAttribute("value",a),e.appendChild(i)}function l(e){var t=u(e);t&&"OBJECT"==t.nodeName&&(A.ie&&A.win?(t.style.display="none",function(){4==t.readyState?c(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function c(e){var t=u(e);if(t){for(var a in t)"function"==typeof t[a]&&(t[a]=null);t.parentNode.removeChild(t)}}function u(e){var t=null;try{t=x.getElementById(e)}catch(a){}return t}function h(e){return x.createElement(e)}function d(e){var t=A.pv,a=e.split(".");return a[0]=parseInt(a[0],10),a[1]=parseInt(a[1],10)||0,a[2]=parseInt(a[2],10)||0,t[0]>a[0]||t[0]==a[0]&&t[1]>a[1]||t[0]==a[0]&&t[1]==a[1]&&t[2]>=a[2]?!0:!1}function p(e,t){if(j){var a,i=t?"visible":"hidden";P&&a&&u(e)&&(u(e).style.visibility=i)}}var f="undefined",v="object",m=window.webshims,g="Shockwave Flash",y="ShockwaveFlash.ShockwaveFlash",w="application/x-shockwave-flash",b=window,x=document,k=navigator,C=!1,T=[i],E=[],S=[],P=!1,j=!0,A=function(){var e=typeof x.getElementById!=f&&typeof x.getElementsByTagName!=f&&typeof x.createElement!=f,t=k.userAgent.toLowerCase(),a=k.platform.toLowerCase(),i=a?/win/.test(a):/win/.test(t),n=a?/mac/.test(a):/mac/.test(t),r=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,s=!1,o=[0,0,0],l=null;if(typeof k.plugins!=f&&typeof k.plugins[g]==v)l=k.plugins[g].description,!l||typeof k.mimeTypes!=f&&k.mimeTypes[w]&&!k.mimeTypes[w].enabledPlugin||(C=!0,s=!1,l=l.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),o[0]=parseInt(l.replace(/^(.*)\..*$/,"$1"),10),o[1]=parseInt(l.replace(/^.*\.(.*)\s.*$/,"$1"),10),o[2]=/[a-zA-Z]/.test(l)?parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof b.ActiveXObject!=f)try{var c=new ActiveXObject(y);c&&(l=c.GetVariable("$version"),l&&(s=!0,l=l.split(" ")[1].split(","),o=[parseInt(l[0],10),parseInt(l[1],10),parseInt(l[2],10)]))}catch(u){}return{w3:e,pv:o,wk:r,ie:s,win:i,mac:n}}();return function(){A.ie&&A.win&&window.attachEvent&&window.attachEvent("onunload",function(){for(var e=S.length,t=0;e>t;t++)S[t][0].detachEvent(S[t][1],S[t][2]);for(var a=E.length,i=0;a>i;i++)l(E[i]);for(var n in A)A[n]=null;A=null;for(var r in swfmini)swfmini[r]=null;swfmini=null})}(),m.ready("DOM",e),{registerObject:function(){},getObjectById:function(e){return A.w3?r(e):void 0},embedSWF:function(e,a,i,n,r,o,l,c,u,h){var m={success:!1,id:a};A.w3&&!(A.wk&&312>A.wk)&&e&&a&&i&&n&&r?(p(a,!1),t(function(){i+="",n+="";var t={};if(u&&typeof u===v)for(var o in u)t[o]=u[o];t.data=e,t.width=i,t.height=n;var g={};if(c&&typeof c===v)for(var y in c)g[y]=c[y];if(l&&typeof l===v)for(var w in l)typeof g.flashvars!=f?g.flashvars+="&"+w+"="+l[w]:g.flashvars=w+"="+l[w];if(d(r)){var b=s(t,g,a);t.id==a&&p(a,!0),m.success=!0,m.ref=b}else p(a,!0);h&&h(m)})):h&&h(m)},switchOffAutoHideShow:function(){j=!1},ua:A,getFlashPlayerVersion:function(){return{major:A.pv[0],minor:A.pv[1],release:A.pv[2]}},hasFlashPlayerVersion:d,createSWF:function(e,t,a){return A.w3?s(e,t,a):void 0},showExpressInstall:function(){},removeSWF:function(e){A.w3&&l(e)},createCSS:function(){},addDomLoadEvent:t,addLoadEvent:a,expressInstallCallback:function(){}}}();webshims.register("form-core",function(e,t,a,i,n,r){"use strict";t.capturingEventPrevented=function(t){if(!t._isPolyfilled){var a=t.isDefaultPrevented,i=t.preventDefault;t.preventDefault=function(){return clearTimeout(e.data(t.target,t.type+"DefaultPrevented")),e.data(t.target,t.type+"DefaultPrevented",setTimeout(function(){e.removeData(t.target,t.type+"DefaultPrevented")},30)),i.apply(this,arguments)},t.isDefaultPrevented=function(){return!(!a.apply(this,arguments)&&!e.data(t.target,t.type+"DefaultPrevented"))},t._isPolyfilled=!0}},Modernizr.formvalidation&&!t.bugs.bustedValidity&&t.capturingEvents(["invalid"],!0);var s=function(t){return(e.prop(t,"validity")||{valid:1}).valid},o=function(){var a=["form-validation"];r.lazyCustomMessages&&(r.customMessages=!0,a.push("form-message")),r.customDatalist&&(r.fD=!0,a.push("form-datalist")),r.addValidators&&a.push("form-validators"),t.reTest(a),e(i).off(".lazyloadvalidation")},l=/^(?:form|fieldset)$/i,c=function(t){var a=!1;return e(t).jProp("elements").each(function(){return!l.test(t.nodeName||"")&&(a=e(this).is(":invalid"))?!1:n}),a},u=function(){if(e.extend(e.expr[":"],{"valid-element":function(t){return l.test(t.nodeName||"")?!c(t):!(!e.prop(t,"willValidate")||!s(t))},"invalid-element":function(t){return l.test(t.nodeName||"")?c(t):!(!e.prop(t,"willValidate")||s(t))},"required-element":function(t){return!(!e.prop(t,"willValidate")||!e.prop(t,"required"))},"user-error":function(t){return e.prop(t,"willValidate")&&e(t).hasClass("user-error")},"optional-element":function(t){return!(!e.prop(t,"willValidate")||e.prop(t,"required")!==!1)}}),["valid","invalid","required","optional"].forEach(function(t){e.expr[":"][t]=e.expr[":"][t+"-element"]}),"unknown"==typeof i.activeElement){var a=e.expr[":"].focus;e.expr[":"].focus=function(){try{return a.apply(this,arguments)}catch(e){t.error(e)}return!1}}};e.expr.filters?u():t.ready("sizzle",u),t.triggerInlineForm=function(t,a){e(t).trigger(a)};var h=function(e,a,i){o(),t.ready("form-validation",function(){e[a].apply(e,i)})},d="transitionDelay"in i.documentElement.style?"":" no-transition",p=t.cfg.wspopover;p.position||p.position===!1||(p.position={at:"left bottom",my:"left top",collision:"fit flip"}),t.wsPopover={id:0,_create:function(){this.options=e.extend(!0,{},p,this.options),this.id=t.wsPopover.id++,this.eventns=".wsoverlay"+this.id,this.timers={},this.element=e('<div class="ws-popover'+d+'" tabindex="-1"><div class="ws-po-outerbox"><div class="ws-po-arrow"><div class="ws-po-arrowbox" /></div><div class="ws-po-box" /></div></div>'),this.contentElement=e(".ws-po-box",this.element),this.lastElement=e([]),this.bindElement(),this.element.data("wspopover",this)},options:{},content:function(e){this.contentElement.html(e)},bindElement:function(){var e=this,t=function(){e.stopBlur=!1};this.preventBlur=function(){e.stopBlur=!0,clearTimeout(e.timers.stopBlur),e.timers.stopBlur=setTimeout(t,9)},this.element.on({mousedown:this.preventBlur})},show:function(){h(this,"show",arguments)}},t.validityAlert={showFor:function(){h(this,"showFor",arguments)}},t.getContentValidationMessage=function(a,i,r){t.errorbox&&t.errorbox.initIvalContentMessage&&t.errorbox.initIvalContentMessage(a);var s=e(a).data("errormessage")||a.getAttribute("x-moz-errormessage")||"";return r&&s[r]?s=s[r]:s&&(i=i||e.prop(a,"validity")||{valid:1},i.valid&&(s="")),"object"==typeof s&&(i=i||e.prop(a,"validity")||{valid:1},i.valid||(e.each(i,function(e,t){return t&&"valid"!=e&&s[e]?(s=s[e],!1):n}),"object"==typeof s&&(i.typeMismatch&&s.badInput&&(s=s.badInput),i.badInput&&s.typeMismatch&&(s=s.typeMismatch)))),"object"==typeof s&&(s=s.defaultMessage),s||""},e.fn.getErrorMessage=function(a){var i="",n=this[0];return n&&(i=t.getContentValidationMessage(n,!1,a)||e.prop(n,"customValidationMessage")||e.prop(n,"validationMessage")),i},e(i).on("focusin.lazyloadvalidation",function(t){"form"in t.target&&(t.target.list||e(t.target).is(":invalid"))&&o()}),t.ready("WINDOWLOAD",o)}),function(e,t){"use strict";var a,i,n=t.$,r=e.audio&&e.video,s=!1,o=t.bugs,l="mediaelement-jaris",c=function(){t.ready(l,function(){t.mediaelement.createSWF||(t.mediaelement.loadSwf=!0,t.reTest([l],r))})},u=t.cfg,h=u.mediaelement;if(!h)return t.error("mediaelement wasn't implemented but loaded"),void 0;if(r){var d=document.createElement("video");if(e.videoBuffered="buffered"in d,e.mediaDefaultMuted="defaultMuted"in d,s="loop"in d,t.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),e.videoBuffered||(t.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),t.loader.loadList(["mediaelement-native-fix"])),!h.preferFlash){var p={1:1},f=function(e){var a,r,s;!h.preferFlash&&(n(e.target).is("audio, video")||(s=e.target.parentNode)&&n("source",s).last()[0]==e.target)&&(a=n(e.target).closest("audio, video"))&&(r=a.prop("error"))&&!p[r.code]&&n(function(){i&&!h.preferFlash?(c(),t.ready("WINDOWLOAD "+l,function(){setTimeout(function(){h.preferFlash||!t.mediaelement.createSWF||a.is(".nonnative-api-active")||(h.preferFlash=!0,document.removeEventListener("error",f,!0),n("audio, video").each(function(){t.mediaelement.selectSource(this)}),t.error("switching mediaelements option to 'preferFlash', due to an error with native player: "+e.target.src+" Mediaerror: "+a.prop("error")+"first error: "+r))},9)})):document.removeEventListener("error",f,!0)})};document.addEventListener("error",f,!0),n("audio, video").each(function(){var e=n.prop(this,"error");return e&&!p[e]?(f({target:this}),!1):void 0})}}e.track&&!o.track&&function(){if(o.track||(o.track="number"!=typeof n("<track />")[0].readyState),!o.track)try{new TextTrackCue(2,3,"")}catch(e){o.track=!0}}(),a=e.track&&!o.track,t.register("mediaelement-core",function(t,n,o,u,h,d){i=swfmini.hasFlashPlayerVersion("9.0.115"),t("html").addClass(i?"swf":"no-swf");var p=n.mediaelement;p.parseRtmp=function(e){var t,a,i,r=e.src.split("://"),s=r[1].split("/");for(e.server=r[0]+"://"+s[0]+"/",e.streamId=[],t=1,a=s.length;a>t;t++)i||-1===s[t].indexOf(":")||(s[t]=s[t].split(":")[1],i=!0),i?e.streamId.push(s[t]):e.server+=s[t]+"/";e.streamId.length||n.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var f=function(e,a){e=t(e);var i,n={src:e.attr("src")||"",elem:e,srcProp:e.prop("src")};return n.src?(i=e.attr("data-server"),null!=i&&(n.server=i),i=e.attr("type")||e.attr("data-type"),i?(n.type=i,n.container=t.trim(i.split(";")[0])):(a||(a=e[0].nodeName.toLowerCase(),"source"==a&&(a=(e.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),n.server?(n.type=a+"/rtmp",n.container=a+"/rtmp"):(i=p.getTypeForSrc(n.src,a,n),i&&(n.type=i,n.container=i))),n.container||t(e).attr("data-wsrecheckmimetype",""),i=e.attr("media"),i&&(n.media=i),("audio/rtmp"==n.type||"video/rtmp"==n.type)&&(n.server?n.streamId=n.src:p.parseRtmp(n)),n):n},v=!i&&"postMessage"in o&&r,m=function(){m.loaded||(m.loaded=!0,d.noAutoTrack||n.ready("WINDOWLOAD",function(){y(),n.loader.loadList(["track-ui"])}))},g=function(){var e;return function(){!e&&v&&(e=!0,n.loader.loadScript("https://www.youtube.com/player_api"),t(function(){n._polyfill(["mediaelement-yt"])}))}}(),y=function(){i?c():g()};n.addPolyfill("mediaelement-yt",{test:!v,d:["dom-support"]}),p.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},p.mimeTypes.source=t.extend({},p.mimeTypes.audio,p.mimeTypes.video),p.getTypeForSrc=function(e,a){if(-1!=e.indexOf("youtube.com/watch?")||-1!=e.indexOf("youtube.com/v/"))return"video/youtube";if(0===e.indexOf("rtmp"))return a+"/rtmp";e=e.split("?")[0].split("#")[0].split("."),e=e[e.length-1];var i;return t.each(p.mimeTypes[a],function(t,a){return-1!==a.indexOf(e)?(i=t,!1):h}),i},p.srces=function(e,a){if(e=t(e),!a){a=[];var i=e[0].nodeName.toLowerCase(),n=f(e,i);return n.src?a.push(n):t("source",e).each(function(){n=f(this,i),n.src&&a.push(n)}),a}e.removeAttr("src").removeAttr("type").find("source").remove(),t.isArray(a)||(a=[a]),a.forEach(function(a){"string"==typeof a&&(a={src:a}),e.append(t(u.createElement("source")).attr(a))})},t.fn.loadMediaSrc=function(e,a){return this.each(function(){a!==h&&(t(this).removeAttr("poster"),a&&t.attr(this,"poster",a)),p.srces(this,e),t(this).mediaLoad()})},p.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],p.canThirdPlaySrces=function(e,a){var n="";return(i||v)&&(e=t(e),a=a||p.srces(e),t.each(a,function(e,t){return t.container&&t.src&&(i&&-1!=p.swfMimeTypes.indexOf(t.container)||v&&"video/youtube"==t.container)?(n=t,!1):h})),n};var w={};p.canNativePlaySrces=function(e,a){var i="";if(r){e=t(e);var n=(e[0].nodeName||"").toLowerCase(),s=(w[n]||{prop:{_supvalue:!1}}).prop._supvalue||e[0].canPlayType;if(!s)return i;a=a||p.srces(e),t.each(a,function(t,a){return a.type&&s.call(e[0],a.type)?(i=a,!1):h})}return i};var b=/^\s*application\/octet\-stream\s*$/i,x=function(){var e=b.test(t.attr(this,"type")||"");return e&&t(this).removeAttr("type"),e};p.setError=function(e,a){if(t("source",e).filter(x).length){n.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{t(e).mediaLoad()}catch(i){}}else a||(a="can't play sources"),t(e).pause().data("mediaerror",a),n.error("mediaelementError: "+a),setTimeout(function(){t(e).data("mediaerror")&&t(e).addClass("media-error").trigger("mediaerror")},1)};var k=function(){var e,a=i?l:"mediaelement-yt";return function(i,r,s){n.ready(a,function(){p.createSWF&&t(i).parent()[0]?p.createSWF(i,r,s):e||(e=!0,y(),k(i,r,s))}),e||!v||p.createSWF||g()}}(),C=function(e,t,a,i,n){var r;a||a!==!1&&t&&"third"==t.isActive?(r=p.canThirdPlaySrces(e,i),r?k(e,r,t):n?p.setError(e,!1):C(e,t,!1,i,!0)):(r=p.canNativePlaySrces(e,i),r?t&&"third"==t.isActive&&p.setActive(e,"html5",t):n?(p.setError(e,!1),t&&"third"==t.isActive&&p.setActive(e,"html5",t)):C(e,t,!0,i,!0))},T=/^(?:embed|object|datalist)$/i,E=function(e,a){var i=n.data(e,"mediaelementBase")||n.data(e,"mediaelementBase",{}),r=p.srces(e),s=e.parentNode;clearTimeout(i.loadTimer),t(e).removeClass("media-error"),t.data(e,"mediaerror",!1),r.length&&s&&1==s.nodeType&&!T.test(s.nodeName||"")&&(a=a||n.data(e,"mediaelement"),p.sortMedia&&r.sort(p.sortMedia),C(e,a,d.preferFlash||h,r))};p.selectSource=E,t(u).on("ended",function(e){var a=n.data(e.target,"mediaelement");(!s||a&&"html5"!=a.isActive||t.prop(e.target,"loop"))&&setTimeout(function(){!t.prop(e.target,"paused")&&t.prop(e.target,"loop")&&t(e.target).prop("currentTime",0).play()},1)});var S=!1,P=function(){var a=function(){if(n.implement(this,"mediaelement")&&(E(this),e.mediaDefaultMuted||null==t.attr(this,"muted")||t.prop(this,"muted",!0),r&&(!s||"ActiveXObject"in o))){var a,i,l=this,c=function(){var e=t.prop(l,"buffered");if(e){for(var a="",i=0,n=e.length;n>i;i++)a+=e.end(i);return a}},u=function(){var e=c();e!=i&&(i=e,n.info("needed to trigger progress manually"),t(l).triggerHandler("progress"))};t(this).on({"play loadstart progress":function(e){"progress"==e.type&&(i=c()),clearTimeout(a),a=setTimeout(u,400)},"emptied stalled mediaerror abort suspend":function(e){"emptied"==e.type&&(i=!1),clearTimeout(a)}}),"ActiveXObject"in o&&t.prop(this,"paused")&&!t.prop(this,"readyState")&&t(this).is('audio[preload="none"][controls]:not([autoplay],.nonnative-api-active)')&&t(this).prop("preload","metadata").mediaLoad()}};n.ready("dom-support",function(){S=!0,s||n.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(e){var a;a=n.defineNodeNameProperty(e,"load",{prop:{value:function(){var e=n.data(this,"mediaelement");E(this,e),!r||e&&"html5"!=e.isActive||!a.prop._supvalue||a.prop._supvalue.apply(this,arguments)}}}),w[e]=n.defineNodeNameProperty(e,"canPlayType",{prop:{value:function(a){var n="";return r&&w[e].prop._supvalue&&(n=w[e].prop._supvalue.call(this,a),"no"==n&&(n="")),!n&&i&&(a=t.trim((a||"").split(";")[0]),-1!=p.swfMimeTypes.indexOf(a)&&(n="maybe")),n}}})}),n.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,t=n.data(e,"mediaelementBase")||n.data(e,"mediaelementBase",{});clearTimeout(t.loadTimer),t.loadTimer=setTimeout(function(){E(e),e=null},9)}}),n.addReady(function(e,i){var n=t("video, audio",e).add(i.filter("video, audio")).each(a);!m.loaded&&t("track",n).length&&m(),n=null})}),r&&!S&&n.addReady(function(e,a){S||t("video, audio",e).add(a.filter("video, audio")).each(function(){return p.canNativePlaySrces(this)?h:(y(),S=!0,!1)})})};a&&n.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),r?(n.isReady("mediaelement-core",!0),P(),n.ready("WINDOWLOAD mediaelement",y)):n.ready(l,P),n.ready("track",m)})}(Modernizr,webshims);