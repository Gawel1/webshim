webshims.register("mediacontrols",function(a,b,c){"use strict";var d=b.cfg.mediaelement.jme,e=d.selector,f=a.jme,g='<div class="{%class%}"></div>',h='<button class="{%class%}" type="button" aria-label="{%text%}"></button>',i='<div class="{%class%} media-range" aria-label="{%text%}"></div>',j='<div  class="{%class%}">00:00</div>',k=function(){var a,b="";if(c.Audio)try{a=new Audio,a.volume=.55,b=Math.round(100*a.volume)/100==.55?"":" no-volume-api"}catch(d){}return b}(),l=function(){var a={},c=/\{\{(.+?)\}\}/gim;return function(e,h){return e||(e=d.barTemplate),(!a[e]||h)&&(a[e]=e.replace(c,function(a,c){var d=f.plugins[c];return d?(d.structure||(b.warn("no structure option provided for plugin: "+c+". Fallback to standard div"),d.structure=g),d.structure.replace("{%class%}",c).replace("{%text%}",d.text||"")):a})),a[e]||""}}(),m=/iP(hone|od|ad)/i.test(navigator.platform)&&parseInt((navigator.appVersion.match(/OS (\d+)_\d+/)||["","8"])[1],10)<7,n=function(){n.loaded||(n.loaded=!0,b.loader.loadList(["mediacontrols-lazy","range-ui"]))},o=function(c){c||(c="_create");var d=function(e,f){var g=this,h=arguments;n(),b.ready("mediacontrols-lazy",function(){return d!=g[c]&&a.data(f[0])?g[c].apply(g,h):void b.error("stop too much recursion")})};return d};b.loader.addModule("mediacontrols-lazy",{src:"jme/mediacontrols-lazy"});var p={_create:o()};f.plugins.useractivity=p,f.defineProp("controlbar",{set:function(e,g){g=!!g;var h,i,j=f.data(e),k=a("div.jme-mediaoverlay, div.jme-controlbar",j.player),n="";if(g&&!k[0])if(j._controlbar)j._controlbar.appendTo(j.player);else{m&&(j.media.removeAttr("controls"),j.media.mediaLoad()),j.media.prop("controls",!1),n=l(),j._controlbar=a(d.barStructure),k=j._controlbar.find("div.jme-cb-box").addClass("media-controls"),h=j._controlbar.filter(".jme-media-overlay"),h=h.add(k),a(n).appendTo(k),j._controlbar.appendTo(j.player),j.player.jmeFn("addControls",h),i=function(){var a={},b=[{size:290,name:"xx-small",names:"s xs xxs"},{size:380,name:"x-small",names:"s xs"},{size:478,name:"small",names:"s"},{size:756,name:"medium",names:"m"},{size:1024,name:"large",names:"l"},{size:Number.MAX_VALUE,name:"x-large",names:"l xl"}],c=b.length;return function(){var d,e=0,f=j.player.outerWidth(),g=Math.max(parseInt(j.player.css("fontSize"),10)||16,13);for(f*=16/g;c>e;e++)if(b[e].size>=f){d=b[e];break}a.name!=d.name&&(a=d,j.player.attr("data-playersize",d.name),j.player.attr("data-playersizes",d.names))}}();var o=a('<div class="ws-poster" />').insertAfter(j.media),q=function(){var a,b,d,e=c.swfmini&&swfmini.hasFlashPlayerVersion("10.0.3"),f=/youtube\.com\/[watch\?|v\/]+/i,g=j.media.prop("paused"),h=j.media.prop("ended");return g&&j.player.addClass("initial-state"),h&&j.player.addClass("ended-state"),"backgroundSize"in o[0].style||j.player.addClass("no-backgroundsize"),j.media.on("play playing waiting seeked seeking timeupdate",function(){g&&(g=!1,j.player.removeClass("initial-state")),h&&(h=!1,j.player.removeClass("ended-state"))}),j.media.on("ended",function(){h||j.media.prop("loop")||!j.media.prop("ended")||(h=!0,j.player.addClass("ended-state"))}),function(){var c=j.media.attr("poster"),i=!!c,k=j.media.prop("currentSrc")||"",l=f.test(k),m=e&&i?!1:l;!i&&l&&(c=k.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i)||"",c&&(c="https://img.youtube.com/vi/"+c[1]+"/0.jpg",i=!!c)),d!==c&&(d=c,o[0].style.backgroundImage=c?"url("+c+")":""),a!==i&&(a=i,j.player[i?"removeClass":"addClass"]("no-poster")),j.media.prop("paused")&&(j.player.addClass("initial-state"),g=!0),h&&(h=!1,j.player.removeClass("ended-state")),b!==m&&(b=m,j.player[m?"addClass":"removeClass"]("has-ytposter"))}}();p._create(j.player,j.media,j.player),j.media.on("emptied loadstart",function(){setTimeout(q)}),i(),q(),b.ready("dom-support",function(){j.player.onWSOff("updateshadowdom",i),h.add(j._controlbar).add(o).addClass(b.shadowClass),b.addShadowDom()})}else g||k.detach();return g}}),f.registerPlugin("play-pause",{structure:h,text:"play / pause",_create:o()}),f.registerPlugin("mute-unmute",{structure:h,text:"mute / unmute",_create:o()}),f.registerPlugin("jme-media-overlay",{_create:o()}),f.registerPlugin("volume-slider",{structure:i,text:"volume level",_create:o()}),f.registerPlugin("time-slider",{structure:i,options:{format:["mm","ss"]},text:"time position",_create:o()}),f.defineProp("format",{set:function(b,c){a.isArray(c)||(c=c.split(":"));var d=f.data(b);return d.format=c,a(b).triggerHandler("updatetimeformat"),d.player.triggerHandler("updatetimeformat"),"noDataSet"}}),f.registerPlugin("duration-display",{structure:j,options:{format:"mm:ss"},_create:o()}),f.defineProp("countdown",{set:function(b,c){var d=f.data(b);return d.countdown=!!c,a(b).triggerHandler("updatetimeformat"),d.player.triggerHandler("updatetimeformat"),"noDataSet"}}),f.registerPlugin("currenttime-display",{structure:j,options:{format:"mm:ss",countdown:!1},_create:o()}),f.registerPlugin("poster-display",{structure:"<div />",options:{},_create:o()}),f.registerPlugin("fullscreen",{options:{fullscreen:!0,autoplayfs:!1},structure:h,text:"enter fullscreen / exit fullscreen",_create:o()}),f.registerPlugin("mediaconfigmenu",{structure:h,text:"configuration",_create:o()}),f.registerPlugin("captions",{structure:h,text:"subtitles",_create:function(b,c,d){var e=c.find("track").filter(':not([kind]), [kind="subtitles"], [data-kind="subtitles"], [kind="captions"], [data-kind="captions"]');b.wsclonedcheckbox=a(b).clone().attr({role:"checkbox"}).insertBefore(b),d.attr("data-tracks",e.length>1?"many":e.length),b.attr("aria-haspopup","true"),o().apply(this,arguments)}}),f.registerPlugin("chapters",{structure:h,text:"chapters",_create:function(a,c,d){var e=c.find("track").filter('[kind="chapters"], [data-kind="chapters"]');a.attr("aria-haspopup","true"),e.length&&(b._polyfill(["track"]),d.addClass("has-chapter-tracks")),o().apply(this,arguments)}}),b.ready(b.cfg.mediaelement.plugins.concat(["mediaelement","jme-base"]),function(){d.barTemplate||(d.barTemplate='<div class="play-pause-container">{{play-pause}}</div><div class="playlist-container"><div class="playlist-box"><div class="playlist-button-container">{{playlist-prev}}</div><div class="playlist-button-container">{{playlist-next}}</div></div></div><div class="currenttime-container">{{currenttime-display}}</div><div class="progress-container">{{time-slider}}</div><div class="duration-container">{{duration-display}}</div><div class="mute-container">{{mute-unmute}}</div><div class="volume-container">{{volume-slider}}</div><div class="chapters-container"><div class="chapters-controls mediamenu-wrapper">{{chapters}}</div></div><div class="subtitle-container mediamenu-wrapper"><div class="subtitle-controls">{{captions}}</div></div><div class="mediaconfig-container"><div class="mediaconfig-controls mediamenu-wrapper">{{mediaconfigmenu}}</div></div><div class="fullscreen-container">{{fullscreen}}</div>'),d.barStructure||(d.barStructure='<div class="jme-media-overlay"></div><div class="jme-controlbar'+k+'" tabindex="-1"><div class="jme-cb-box"></div></div>'),b.addReady(function(b,c){a(e,b).add(c.filter(e)).jmeProp("controlbar",!0)})}),b.ready("WINDOWLOAD",n)});