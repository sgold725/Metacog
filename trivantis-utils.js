﻿
		/*
 * Copyright (C) 2007 Trivantis Corporation
 */

	
var u=undefined,n=null,t=true,f=false;if (window.jQuery) triv$=jQuery.noConflict(t);function webtoraAppl(){this.is=new browserProperties();if (this.designTime) this.designTime();};webtoraAppl.eventsStartingWithOn=['abort','afterprint','beforeprint','beforeunload','blur','canplay','canplaythrough','change','click','contextmenu','copy','cut','dblclick','delete','drag','dragend','dragenter','dragexit','draggesture','dragleave','dragover','dragstart','drop','durationchange','emptied','ended','error','focus','focusin','focusout','hashchange','input','invalid','keydown','keypress','keyup','load','loadeddata','loadedmetadata','loadstart','message','message','mousedown','mouseenter','mouseleave','mousemove','mouseout','mouseover','mouseup','mousewheel','offline','online','open','pagehide','pageshow','paste','pause','play','playing','popstate','progress','ratechange','reset','resize','scroll','search','seeked','seeking','select','selectstart','show','stalled','storage','submit','suspend','timeupdate','toggle','touchcancel','touchend','touchmove','touchstart','unload','volumechange','waiting','wheel'];webtoraAppl.eventsWithFullName=['animationend','animationiteration','animationstart','transitionend','data','id'];var MAX_TO_SPEED=10+1;function browserProperties(){var A=this;A.console=n;A.getBrowserWidth=n;A.getBrowserHeight=n;A.Win=f;A.Mac=f;A.v=-1;A.ie=f;A.ie6=f;A.ie7=f;A.ie8=f;A.ie8orLess=f;A.ie9=f;A.ie9orLess=f;A.ie10=f;A.ie10orLess=f;A.ie11=f;A.ie11orMore=f;A.ieEdge=f;A.ieVer='';A.ieVerNum=-1;A.activeX=f;A.ff=f;A.ffVer='';A.ffVerNum=-1;A.chrome=f;A.chromeVer='';A.chromeVerNum=-1;A.safari=f;A.safariWin=f;A.safariVer='';A.safariVerNum=-1;A.opera=f;A.operaVer='';A.webkit=f;A.webkitVer='';A.moz=f;A.mozVer='';A.gecko=f;A.geckoVer='';A.gecko10=f;A.ns=f;A.ns5=f;A.nsMac=f;A.min=f;A.iOS=f;A.mobile=f;A.html5FileDragDrop=f;A.supportedBrowser=f;A.wmpVersion=-1;try{var B=navigator,C=B.appName.toLowerCase(),D=B.appVersion,E=B.platform.toLowerCase(),F=B.userAgent.toLowerCase();var G=function(a,b,c){if (!a||!a.length||a.length<b+1) return c;return a[b];};A.console=function(){return typeof console!='undefined'&&(typeof console.log=='function'||(A.ie8&&typeof console.log=='object'));};A.getBrowserWidth=function(){return document.documentElement.offsetWidth;};A.getBrowserHeight=function(){return document.documentElement.offsetHeight;};A.Win=(E.indexOf("win")>=0);A.Mac=(E.indexOf("mac")>=0);A.v=parseInt(D,10);if (C=="microsoft internet explorer"&&A.v>=4){A.ie=t;A.ie6=(D.indexOf('MSIE 6')>0);A.ie7=(D.indexOf('MSIE 7')>0);A.ie8=(D.indexOf('MSIE 8')>0);A.ie9=(D.indexOf('MSIE 9')>0);A.ie10=(D.indexOf('MSIE 10')>0);A.ieVer=G(F.match(/msie ([^\s]+);/),1,'');}else if (C=='netscape'&&D.indexOf('Edge')>0){A.ieEdge=t;}else if (C=='netscape'&&D.indexOf('rv:')>0){var H=n;if (H=='ff'){A.ff=t;A.ffVer='25';A.ffVerNum=(parseFloat(A.ffVer.split('.').splice(0,2).join('.')));}else if (H=='chrome'){A.chrome=t;A.chromeVer='25';A.chromeVerNum=parseFloat(A.chromeVer.split('.').splice(0,2).join('.'));}else{A.ie=t;A.ie11=(D.indexOf('rv:11')>0);A.ieVer=G(F.match(/rv:([0-9.]+)/),1,'');}}else if (F.indexOf('firefox/')!=-1){A.ff=t;A.ffVer=G(F.match(/firefox\/([^\s]+)/),1,'');A.ffVerNum=(parseFloat(A.ffVer.split('.').splice(0,2).join('.')));}else if (F.match(/op[e]*r[a]*\//)){A.opera=t;A.operaVer=G(F.match(/op[e]*r[a]*\/([^\s]+)/),1,'');}else if (F.indexOf('chrome/')!=-1){A.chrome=t;A.chromeVer=G(F.match(/chrome\/([^\s]+)/),1,'');A.chromeVerNum=parseFloat(A.chromeVer.split('.').splice(0,2).join('.'));}else if (B.vendor&&B.vendor.indexOf('Apple')!=-1&&F.indexOf('safari/')!=-1?t:f){A.safari=t;A.safariWin=(A.Win?t:f);A.safariVer=G(F.match(/version\/([^\s]+)/),1,'');A.safariVerNum=parseFloat(A.safariVer.split('.').splice(0,2).join('.'));};if (A.ie){A.ie8orLess=(A.ie6||A.ie7||A.ie8);A.ie9orLess=(A.ie8orLess||A.ie9);A.ie10orLess=(A.ie9orLess||A.ie10);A.ie11orMore=(A.ie11);A.ieVerNum=parseFloat(A.ieVer.split('.').splice(0,2).join('.'));A.activeX=A.ie10orLess;};if (F.indexOf(" applewebkit/")!=-1){A.webkit=t;A.webkitVer=G(F.match(/applewebkit\/([^\s]+)/),1,'');};if (F.indexOf('mozilla/')!=-1){A.moz=t;A.mozVer=G(F.match(/mozilla\/(\d+\.\d+)/),1,'');};if (F.indexOf('gecko/')!=-1){A.gecko=t;A.geckoVer=G(F.match(/gecko\/(\d+)/),1,'');A.gecko10=(A.geckoVer<20051111);};if (A.opera||(C=="netscape"&&A.v>=4)){A.ns=t;A.ns5=(A.opera||A.v==5);A.nsMac=A.Mac;};A.min=(A.ns||A.ie);A.iOS=F.match(/iPhone|iPad|iPod/i)||(F.match(/iOS|mac os/i)&&B.maxTouchPoints&&B.maxTouchPoints>2);A.mobile=f;if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|playbook|plucker|pocket|psp|series(4|6)0|silk|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)) A.mobile=t;A.html5FileDragDrop=((A.ff&&A.ffVerNum>=3.6)||(A.chrome&&A.chromeVerNum>=22)||(A.safari&&A.safariVerNum>=10)||(A.ie10||A.ie11orMore||A.ieEdge));A.supportedBrowser=(A.ff?A.ffVerNum>=11:A.safari?A.safariVerNum>=6:A.ie?(A.ieVerNum>=11&&parseInt(document.documentMode)>=11):A.ieEdge?A.ieEdge:A.chrome?A.chromeVerNum>=11:f);A.wmpVersion=6;var I=n;try{if (window.ActiveXObject) I=new ActiveXObject("WMPlayer.OCX.7");else if (window.GeckoActiveXObject) I=new GeckoActiveXObject("WMPlayer.OCX.7");else if (B.mimeTypes["application/x-mplayer2"]) I=B.mimeTypes["application/x-mplayer2"].enabledPlugin;}catch (e){};if (I&&I.versionInfo) A.wmpVersion=I.versionInfo.slice(0,I.versionInfo.indexOf('.'));}catch (e){var J='Error initializing browser properties: '+String(e);var K='User agent: '+navigator.userAgent;if (A.console&&A.console()){console.log(J);console.log('   '+K);}else alert(J+'\n\n'+K);};A.flashVer=-1;A.flashVersion=function(d,g,h){if (A.flashVer==-1){if (B.plugins!=null&&B.plugins.length>0){if (B.plugins["Shockwave Flash 2.0"]||B.plugins["Shockwave Flash"]){var L=B.plugins["Shockwave Flash 2.0"]?" 2.0":"";var M=B.plugins["Shockwave Flash"+L].description;var N=M.split(" ");var O=N[2].split(".");var P=O[0];var Q=O[1];var R=N[3];if (R=="") R=N[4];if (R[0]=="d"){R=R.substring(1);}else if (R[0]=="r"){R=R.substring(1);if (R.indexOf("d")>0) R=R.substring(0,R.indexOf("d"));};A.flashVer=P+"."+Q+"."+R;}}else if (A.ie&&!A.Mac&&!A.op){var S;try{S=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");A.flashVer=S.GetVariable("$version");}catch (e){};if (!A.flashVer){try{S=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");A.flashVer="WIN 6,0,21,0";S.AllowScriptAccess="always";A.flashVer=S.GetVariable("$version");}catch (e){}}}};if (A.flashVer==-1) return f;if (A.flashVer!=0){var T;if (A.ie10orLess&&!A.Mac&&!A.op){var U=A.flashVer.split(" ");var W=U[1];T=W.split(",");}else{T=A.flashVer.split(".");};var P=T[0];var Q=T[1];var R=T[2];if (P>parseFloat(d)) return t;if (P==parseFloat(d)){if (Q>parseFloat(g)) return t;if (Q==parseFloat(g)){if (R>=parseFloat(h)) return t;}};return f;}};};function includeLocaleSpecificFiles(A,B,C){var D='<script type="text/javascript" src="XXXXX"></script>',E='<link rel="stylesheet" type="text/css" href="XXXXX"/>';B=(B?B.replace(RegExp("[/]*$"),'')+'/':'');if (!C)	C=['js/strings.js','css/lang.css'];while (C&&C.length){var F=/\.js$/.test(C[0]);document.write((F?D:E).replace('XXXXX',B+theLang.getLocalePath(A,C[0])));C.shift();}};var TRgEx={};TRgEx.flash=/.*(\.SWF|\.SPL|\.FLV)$/i;TRgEx.flashAudio=/.*(\.flv)$/i;TRgEx.flashAnim=/.*(\.SWF|\.SPL)$/i;TRgEx.COMMA_SEP_NUM=/^(?:(?:[-+]?)(?:(?=(\.)?\d)(?:\d*|\d{1,3}(?:\,\d{3})*)(?:(?:\.)(?:\d{0,}))?)(?:(?:[Ee])(?:(?:[-+]?)(?:\d+))|))$/;TRgEx.skinDefCss=/(.*\/)*trivantis-player\.css$/gi;TRgEx.skinName=/(?:.*\/)?(?:trivantis-|control-)?(.*?)(?:-skin)?\.(css|png)$/gi;TRgEx.getSkinName=function(A){return A.match(TRgEx.skinDefCss)?'default':A.replace(TRgEx.skinName,'$1');};function jsRect(x,y,w,h,A){this.set(x,y,w,h);if (A){this.width=w-x;this.height=h-y;}};jsRect.prototype.init=function(){this.set(0,0,0,0);};jsRect.prototype.setUseMathFloor=function(x,y,w,h){var A=this;A.set(x,y,w,h);trivArExec(['x','y','width','height'],function(B){ A[B]=Math.floor(A[B]);});};jsRect.prototype.set=function(x,y,w,h){if (isNaN(x)){this.x=0;if (typeof(x)!='undefined'&&theApp) theApp.error("invalid left specified for rectangle: "+x,t);}else this.x=x;if (isNaN(y)){this.y=0;if (typeof(y)!='undefined'&&theApp) theApp.error("invalid top specified for rectangle: "+y,t);}else this.y=y;if (isNaN(w)){this.width=0;if (typeof(w)!='undefined'&&theApp) theApp.error("invalid width specified for rectangle: "+w,t);}else this.width=w;if (isNaN(h)){this.height=0;if (typeof(h)!='undefined'&&theApp) theApp.error("invalid height specified for rectangle: "+h,t);}else this.height=h;};jsRect.prototype.setRect=function(r){this.set(r.x,r.y,r.width,r.height);};jsRect.prototype.setSize=function(w,h){this.set(this.x,this.y,w,h);};jsRect.prototype.left=function(){return this.x;};jsRect.prototype.top=function(){return this.y;};jsRect.prototype.right=function(){return this.x+this.width;};jsRect.prototype.bottom=function(){return this.y+this.height;};jsRect.prototype.isEqual=function(A){return this.isPosEqual(A)&&this.isSizeEqual(A);};jsRect.prototype.isPosEqual=function(A){return (this.x==A.x&&this.y==A.y);};jsRect.prototype.isSizeEqual=function(A){return (this.width==A.width&&this.height==A.height);};jsRect.prototype.copy=function(){return new jsRect(this.x,this.y,this.width,this.height);};jsRect.prototype.inRect=function(x,y){var A=this;return (A.x<=x&&x<=(A.x+A.width)&&A.y<=y&&y<=(A.y+A.height));};jsRect.intersectRect=function(A,B,C){C=C||0;return!(B.x>(A.x+A.width-C)||(B.x+B.width-C)<A.x||B.y>(A.y+A.height-C)||(B.y+B.height-C)<A.y);};jsRect.prototype.deflateRect=function(A,B){this.x+=A;this.y+=B;this.width-=A*2;this.height-=B*2;return this;};jsRect.prototype.getCenter=function(){return new jsPoint(Math.floor(this.x+this.width/2),Math.floor(this.y + this.height/2));};function jsPoint(x,y){this.set(x,y);};jsPoint.prototype.init=function(){this.set(0,0);};jsPoint.prototype.set=function(x,y){if (isNaN(x)){this.x=0;if (typeof(x)!='undefined'&&theApp) theApp.error("invalid X specified for point: "+x,t);}else this.x=x;if (isNaN(y)){this.y=0;if (typeof(y)!='undefined'&&theApp) theApp.error("invalid Y specified for point: "+y,t);}else this.y=y;};jsPoint.prototype.isEqual=function(A){for (var i in this){if (this[i]!=A[i]) return f;};return t;};jsPoint.prototype.copy=function(){return new jsPoint(this.x,this.y);};function isEnterKey(e){return (getKeyCode(e)===13);};function getKeyCode(e){e=e||window.event;return (typeof e.which=="number")?e.which:e.keyCode;};function cancelEvent(e){if (document.all) e=event;if (!e) return f;if (e.preventDefault) e.preventDefault();if (e.stopPropagation) e.stopPropagation();else if (e.preventBubble) e.preventBubble();e.returnValue=f;e.cancelBubble=t;try {if (theApp&&theApp.is.ie10orLess) e.keyCode=0;} catch (e) {};return f;};String.prototype.IContains=function(A){return (this.toUpperCase().indexOf(A.toUpperCase())>-1);};function rand(X){return Math.floor(X*(Math.random() % 1));};function randMinMax(A,B){return A+rand(B-A+1);};function divide(A,B){return (A/B);};function jsTrans(){if (this.init&&typeof this.init=='function') this.init();};jsTrans.isFIFO=function(A){if((A>=24&&A<=31)||this.isFloat(A)) return 1;return 0;};jsTrans.isFloat=function(A){if(A==36||A==37||A==38||A==39) return 1;return 0;};jsTrans.xlateTrans=function(A,B,C,D){if(A==33){var E=Math.floor(2*(Math.random() % 1));if(C) A=randMinMax(1,23);else if(B==0){if(E!=0) A=randMinMax(5,8);else A=randMinMax(35,39);}else{if(E!=0) A=randMinMax(1,23);else A=randMinMax(35,39);}}else if(A==32){if(C) A=randMinMax(1,23);else if(D) A=randMinMax(24,31);else if(B==0){var E=Math.floor(3*(Math.random() % 1));if(E==0) 		A=randMinMax(5,8);else if(E==1)	A=randMinMax(24,31);else 				A=randMinMax(35,39);}else{if(Math.floor(2*(Math.random() % 1))!=0) A=randMinMax(1,31);else A=randMinMax(35,39);}};return A;};function trivIssueShowActs(A,B){trivArExec(A,function(D){var C=(B===1?D.isVis:D.dwFlags&0x20);if (C&&(D.isVisible()||D.cwObj.getTrans(t))) D.show();});};function trivArExec(A,B,C){var D=(A&&A.length?A.length:0);var E=C?-1:1;var i=C?(D-1):0;for (;(i>=0&&i<D);i+=E) if (B(A[i],i,A)===f) return f;return t;};webtoraAppl.prototype.SetTimeout=function(A,B,C,D,E){return (E||window).setTimeout(function(){if (D) A.apply(C,[].concat(D));else A.apply(C);},B);};webtoraAppl.prototype.getPubStr=function(A){return window[A];};webtoraAppl.prototype.updateFocusCssColor=function(A,B){var C=getCSSRule('*',f,B,n);var D=A.replace('#',''),r=parseInt(D.substring(0,2),16),g=parseInt(D.substring(2,4),16),b=parseInt(D.substring(4,6),16);var E='rgba('+r+','+g+','+b+','+0.8+')';trivArExec(C,function(J){if (J.cssText&&J.cssText.indexOf("fInd")>-1&&J.cssText.indexOf("rgba(")>-1){if(theApp.is.ie9orLess){if (J.style&&J.style.outline) J.style.outline=J.style.outline.replace(J.style.outline,A);if (J.style&&J.style.outlineColor) J.style.outlineColor=J.style.outlineColor.replace(J.style.outlineColor,A);if (J.style&&J.style.borderColor) J.style.borderColor=J.style.borderColor.replace(J.style.borderColor,A);if (J.style&&J.style.borderTopColor) J.style.borderTopColor=J.style.borderTopColor.replace(J.style.borderTopColor,A);if (J.style&&J.style.borderRightColor) J.style.borderRightColor=J.style.borderRightColor.replace(J.style.borderRightColor,A);if (J.style&&J.style.borderBottomColor) J.style.borderBottomColor=J.style.borderBottomColor.replace(J.style.borderBottomColor,A);if (J.style&&J.style.borderLeftColor) J.style.borderLeftColor=J.style.borderLeftColor.replace(J.style.borderLeftColor,A);if (J.style&&J.style.boxShadow){var F=/\brgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/g;var G=/\brgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+(\.\d{1,2})?)\s*\)/g;J.style.boxShadow=J.style.boxShadow.replace(F,A);J.style.boxShadow=J.style.boxShadow.replace(G,E);}}else{if (J.style&&J.style["outline"]) J.style["outline"]=J.style["outline"].replace(J.style["outline"],A);if (J.style&&J.style["outline-color"]) J.style["outline-color"]=J.style["outline-color"].replace(J.style["outline-color"],A);if (J.style&&J.style["border-color"]) J.style["border-color"]=J.style["border-color"].replace(J.style["border-color"],A);if (J.style&&J.style["border-top-color"]) J.style["border-top-color"]=J.style["border-top-color"].replace(J.style["border-top-color"],A);if (J.style&&J.style["border-right-color"]) J.style["border-right-color"]=J.style["border-right-color"].replace(J.style["border-right-color"],A);if (J.style&&J.style["border-bottom-color"]) J.style["border-bottom-color"]=J.style["border-bottom-color"].replace(J.style["border-bottom-color"],A);if (J.style&&J.style["border-left-color"]) J.style["border-left-color"]=J.style["border-left-color"].replace(J.style["border-left-color"],A);if (J.style&&J.style["box-shadow"]){var F=/\brgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/g;var G=/\brgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+(\.\d{1,2})?)\s*\)/g;J.style["box-shadow"]=J.style["box-shadow"].replace(F,A);J.style["box-shadow"]=J.style["box-shadow"].replace(G,E);}}}});};webtoraAppl.prototype.updateFocusCssWidth=function(A,B){var C=getCSSRule('*',f,B,n);trivArExec(C,function(E){if (E.cssText&&E.cssText.indexOf("fInd")>-1&&E.cssText.indexOf("0px 0px 6px")>-1){var D=/\b0px\s*0px\s*6px\s*(\d+)px/g;if(theApp.is.ie9orLess&&E.style&&E.style.boxShadow) E.style.boxShadow=E.style.boxShadow.replace(D,"0px 0px 6px "+(A)+'px');else {if (E.style&&E.style["box-shadow"]){E.style["box-shadow"]=E.style["box-shadow"].replace(D,"0px 0px 6px "+(A)+'px');};if (E.style&&E.style["-webkit-box-shadow"]){E.style["-webkit-box-shadow"]=E.style["-webkit-box-shadow"].replace(D,"0px 0px 6px "+(A)+'px');};if (E.style&&E.style["-moz-box-shadow"]){E.style["-moz-box-shadow"]=E.style["-moz-box-shadow"].replace(D,"0px 0px 6px "+(A)+'px');}}}});};webtoraAppl.prototype.isDevelopment=function(){return!!window.isDevelopment;};webtoraAppl.prototype.log=function(A,B){try{if (this.is.console()&&(!B||this.isDevelopment())) console.log(A);}catch (e){}};webtoraAppl.prototype.warn=function(A,B){try{if (this.is.console()&&console.warn&&(!B||this.isDevelopment())) console.warn(A);}catch (e){}};webtoraAppl.prototype.error=function(A,B){try{if (this.is.console()&&console.error&&(!B||this.isDevelopment())){console.error(A);}}catch (e){}};webtoraAppl.prototype.errorWithMsg=function(A,B,C,D){if (A) this.error(A,C);if (B) this.error(B,D);};webtoraAppl.prototype.getOrgPlan=function(){return this.user.org.plan;};webtoraAppl.prototype.cleanDOMTree=function(A,B,C){var D=n;if (A){if (!(triv$.isArray(A)||(A.item&&A.length))) A=[A];var E=GetLength(A);for (var i=0;i<E;i++){D=A[i];if (D&&(!D.id||D.id.indexOf('WebWin_content')==-1)){if (C!==t){try {var F=D.tagName&&D.tagName.toLowerCase()=='iframe'?F=D.contentWindow.document.body.childNodes:D.childNodes;this.cleanDOMTree(F,B,C);} catch(e) {theApp.errorWithMsg('error cleaning up',e,t,t);}};this.clearEvHndlrs(D,B);}}}};webtoraAppl.prototype.clearEvHndlrs=function(A,B){if (A&&A.nodeType&&A.nodeType===1){trivArExec (webtoraAppl.eventsStartingWithOn,function(C) { A['on'+C]=n;});trivArExec (webtoraAppl.eventsWithFullName,function(D) { A[D]=n;});if (B) B(A);}};function hasAncestor(A,B,C,D,E){if (typeof D=='string') D=[D];if (typeof E=='string') E=[E];while (A&&A!=B){if (A.nodeType==1&&(!C||A.tagName.toUpperCase()==C.toUpperCase())){if (D){for (var i=0;i<D.length;i++){if (A.id==D[i]) return A;}}else if (E){for (var i=0;i<E.length;i++){if (A[E[i]]!=u) return A;}}else{return A;}};A=A.parentNode;};return n;};function removeAllChildren(A,B){for (var i=A.childNodes.length-1;i>=0;i--){var C=f;for (var j=B.length-1;j>=0&&!C;j--){if (B[j]==A.childNodes[i]) C=t;};if (!C) A.removeChild(A.childNodes[i]);};for (i=A.childNodes.length-1;i>=0;i--) removeAllChildren(A.childNodes[i],B);};function getLocStr(A,B){if (A){var C=[];for (var i=0;i<arguments.length-1;i++) C[i]=arguments[i+1];var i=A.indexOf("##");var c,D,E;while (i>-1){c=A.charAt(i+2);c=c*1;D=A.substring(0,i);E=A.substring(i+3,A.length);A=D+(C.length>c?C[c]:'')+E;i=A.indexOf("##");}};return A;};function getURLParams(A){A=A||window.location.search;var B={},C=/[?&]?([^=]+)=([^&]*)/g,D=C.exec(A);while (D){B[decodeURIComponent(D[1])]=decodeURIComponent(D[2]);D=C.exec(A);};return B;};function parseKeyFromGDocURL(A){var B=A.match(/.*(formKey)=([^#&]+).*/i);if (!B) B=A.match(/.*(key)=([^#&]+).*/i);if (B&&B.length>2) return [B[1],B[2]];return n;};function getCSS(A){if (A){for (var i=0;i<document.styleSheets.length;i++){var B=document.styleSheets[i];var C=new RegExp(A+'$|'+A+'[\\?&]','i');if (C.test(B.href)) return B;}};return n;};function getCSSRule(A,B,C,D){A=A.toLowerCase();var E=[];var F=getDisplayDocument();if (F.styleSheets){for (var i=0;i<F.styleSheets.length;i++){if (D&&i>0) break;try{var G=F.styleSheets[i];if (D) G=D;else{if (C){var H=new RegExp(C+'$|'+C+'[\\?&]','i');if (!H.test(G.href)) continue;}};var I=0;var J=f;do{try {J=(G.cssRules?G.cssRules[I]:G.rules[I]);if (J){if (J.selectorText&&J.selectorText.toLowerCase()==A){if (B=='delete'){if (G.cssRules) G.deleteRule(I);else G.removeRule(I);return t;}else{return J;}}else if (A=='*') {if (B=='delete'){if (G.cssRules) G.deleteRule(I);else G.removeRule(I);return t;}else{E.push(J);}}}} catch (e) {theApp.warn("Could not access stylesheeet (probably external): "+G.href,t);};I++;}while (J);}catch (e){theApp.errorWithMsg('error getting style',e,t,t);}}};if (A=='*') return E;else return f;};function addCSSRule(A){if (document.styleSheets){if (!getCSSRule(A)){if (document.styleSheets[0].addRule) document.styleSheets[0].addRule(A,null,0);else document.styleSheets[0].insertRule(A+' { }',0);}};return getCSSRule(A);};function setTrivantisTextDefaults(A){try{var B=function(D){if (!D) return;D.style.marginTop=A.mT;D.style.marginBottom=A.mB;D.style.lineHeight=A.lh;};var C='trivantis-common.css';if (theApp.is.ie8){B(getCSSRule('.ttxt p',f,C));B(getCSSRule('.ttxt ul',f,C));B(getCSSRule('.ttxt ol',f,C));B(getCSSRule('.ttxt li',f,C));}else{B(getCSSRule('.ttxt p, .ttxt ul, .ttxt ol, .ttxt li',f,C));}}catch (e){}};(function() {var A={easing:{linear:function(B) {return B;},quadratic:function(C) {return Math.pow(C,2);},swing:function(D) {return 0.5-Math.cos(D*Math.PI)/2;},circ:function(E) {return 1-Math.sin(Math.acos(E));},back:function(F,x) {return Math.pow(F,2)*((x+1)*F-x);},bounce:function(G) {for (var a=0,b=1;1;a+=b,b/=2) {if (G>=(7-4*a)/11) {return-Math.pow((11-6*a-11*G)/4,2)+Math.pow(b,2);}}},elastic:function(H,x) {return Math.pow(2,10*(H-1))*Math.cos(20*Math.PI*x/3*H);}},animate:function(I) {var J=new Date();var K=setInterval(function() {var L=new Date()-J;var M=L/I.duration;if (M>1) {M=1;};I.progress=M;var N=I.delta(M);I.step(N);if (M==1) {clearInterval(K);I.complete();}},I.delay||10);},fadeOut:function(O,P) {var Q=1;this.animate({duration:P.duration,delta:function(R) {R=this.progress;return A.easing.swing(R);},complete:P.complete,step:function(S) {O.style.opacity=Q-S;}});},fadeIn:function(T,U,W) {var X=0;this.animate({duration:W.duration,delta:function(Y) {Y=this.progress;return A.easing.swing(Y);},complete:W.complete,step:function(Z) {T.style.opacity=X+Z;if (U) U.style.opacity=X+Z;}});}};window.FX=A;})();function  padDigits(n,A,z){z=z||'0';n=n+'';return n.length>=A?n:new Array(A-n.length+1).join(z)+n;};function stringToSlug(A){A=A.replace(/^\s+|\s+$/g,'');A=A.toLowerCase();var B="àáäâèéëêìíïîòóöôùúüûñç·/_,:;";var C="aaaaeeeeiiiioooouuuunc------";for (var i=0,l=B.length;i<l;i++) A=A.replace(new RegExp(B.charAt(i),'g'),C.charAt(i));A=A.replace(/[^a-z0-9 -]/g,'') .replace(/\s+/g,'-') .replace(/-+/g,'-');return A;};function trivGetAttrs(A,B,C,D){var E=[];if (B&&C) return E;for (var F in A){if (F===u) continue;if (typeof A[F]=='function') continue;if (D&&F.StartsWith('__')) continue;if (C){if (F.isInteger()) E.push(F);}else if (!B||!F.isInteger()){E.push(F);}};if (A&&window.theApp&&theApp.is.chrome){var G=['message','arguments','type','stack'];for (var i=0;i<G.length;i++){if (A[G[i]]&&!E.Contains(G[i])) E.push(G[i]);}};return E.sort();};function GetLength(A){try { return (A&&A.length?A.length:0);} catch (e) {};return 0;};function getAttribsFromPublisherWin(A){A=A?A:window.parent;if (A) for (var B in A){var C=A[B],D=typeof C;if (D!='object'&&D!='function'&&window[B]==u) window[B]=C;}};if (!Object.keys){Object.keys=function(A){var B=[],k;for (k in A){if (Object.prototype.hasOwnProperty.call(A,k)){B.push(k);}};return B;};};if (!Array.prototype.indexOf){Array.prototype.indexOf=function(A){var B=this.length>>>0,C=Number(arguments[1])||0;C=(C<0)?Math.ceil(C):Math.floor(C);if (C<0) C+=B;for (;C<B;C++){if (C in this&&this[C]===A) return C;};return-1;};};if (!String.prototype.trim){String.prototype.trim=function(){return this.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g,'');};};if (!('remove' in Element.prototype)) {Element.prototype.remove=function() {if (this.parentNode) {this.parentNode.removeChild(this);}};};function getXMLDom(A){if(A.responseXML!=null){var B=A.responseXML.documentElement;if(!B&&window.ActiveXObject){B=new ActiveXObject("Microsoft.XMLDOM");B.async="false";B.loadXML(A.responseXML);}else B.normalize();return B;}else return n;};function getXMLValue(A,B,C){var D=A.getElementsByTagName(B)[0];var E=C;if(D&&D.firstChild){E=D.firstChild.data;if(E){E=E.replace(/&gt;/g,'>');E=E.replace(/&lt;/g,'<');if(E.indexOf('\\u')>=0){E=E.replace(/\n/g,'\\n');E=E.replace(/"/g,'&quot;');E=eval("\""+E+"\"");E=E.replace(/&quot;/g,'"');};if(E.indexOf('gStrings.')>=0) E=eval(E);}};return E;};function loadJSCSSfile(A,B){var C=n;if(B=='js'){C=document.createElement('script');C.setAttribute("type","text/javascript");C.setAttribute("src",A);}else if(B=='css'){C=document.createElement("link");C.setAttribute("rel","stylesheet");C.setAttribute("type","text/css");C.setAttribute("href",A);};if (typeof C!="undefined") document.getElementsByTagName("head")[0].appendChild(C);};var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var A="",B,r,i,s,o,C,a,D=0;e=Base64._utf8_encode(e);while (D<e.length){B=e.charCodeAt(D++);r=e.charCodeAt(D++);i=e.charCodeAt(D++);s=B>>2;o=(B&3)<<4|r>>4;C=(r&15)<<2|i>>6;a=i&63;if (isNaN(r)){C=a=64;}else if (isNaN(i)){a=64;};A=A+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(C)+this._keyStr.charAt(a);};return A;},decode:function(e){var A="",B,r,i,s,o,C,a,D=0;e=e.replace(/[^A-Za-z0-9+\/=]/g,"");while (D<e.length){s=this._keyStr.indexOf(e.charAt(D++));o=this._keyStr.indexOf(e.charAt(D++));C=this._keyStr.indexOf(e.charAt(D++));a=this._keyStr.indexOf(e.charAt(D++));B=s<<2|o>>4;r=(o&15)<<4|C>>2;i=(C&3)<<6|a;A=A+String.fromCharCode(B);if (C!=64){A=A+String.fromCharCode(r);};if (a!=64){A=A+String.fromCharCode(i);}};A=Base64._utf8_decode(A);return A;},_utf8_encode:function(e){e=e.replace(/\\r\\n/g,"\\n");var A="";for (var B=0;B<e.length;B++){var r=e.charCodeAt(B);if (r<128){A+=String.fromCharCode(r);}else if (r>127&&r<2048){A+=String.fromCharCode(r>>6|192);A+=String.fromCharCode(r&63|128);}else{A+=String.fromCharCode(r>>12|224);A+=String.fromCharCode(r>>6&63|128);A+=String.fromCharCode(r&63|128);}};return A;},_utf8_decode:function(e){var A="",B=0,r=0,C=0;while (B<e.length){r=e.charCodeAt(B);if (r<128){A+=String.fromCharCode(r);B++;}else if (r>191&&r<224){C=e.charCodeAt(B+1);A+=String.fromCharCode((r&31)<<6|C&63);B+=2;}else{C=e.charCodeAt(B+1);c3=e.charCodeAt(B+2);A+=String.fromCharCode((r&15)<<12|(C&63)<<6|c3&63);B+=3;}};return A;}};function delProtoVar(A,B){for (var i=A;i<B;i++) delete window['p'+i];};function getDisplayWindow(){return window;};function getDisplayDocument(){return document;};function getWebWindowInfo(){var A,B,C=n,D,E=n;if (window.name=='Trivantis_WebWindow'){A=window.parent;B=A.document.getElementsByTagName('iframe');if (B) for (var i=0;!C&&i<B.length;i++){if (B[i].contentWindow==window) C=B[i];};if (C) D=C.id.substring('WebWin_content_'.length);E={'width':triv$(window).width(),'height':triv$(window).height(),'webwndObjId':parseInt('0'+D)};};return E;};
