document.xURL="https://poki.com/";if(typeof consoleLog=='undefined'){consoleLog=console.log}
var originalEval=eval;evalx=function(){arguments[0]=arguments[0].replace("aHR0cHM6Ly9wb2tpLmNvbS9zaXRlbG9jaw==","I3ViZzIzNQ==");arguments[0]=arguments[0].replace("'location'","'xlocation'");return originalEval.apply(this,arguments)}
navigator.sendBeacon=function(){consoleLog("--fx--navigator.sendBeacon--",arguments)}
WebSocket=function(){}
xlocation=new Proxy(location,{get:function(target,property,receiver){consoleLog("--fx--xlocation--get--property--",property);let targetObj=target[property];if(typeof targetObj=="function"){return(...args)=>target[property].apply(target,args)}else{if(property=="host"||property=="hostname"){return"localhost"}
if(property=="href"){return"https://localhost/"}
if(property=="origin"){return"https://localhost/"}
return targetObj}},set:function(target,property,receiver){consoleLog("--fx--xlocation--set--property--",property,receiver);return!0}});xwindow=new Proxy(window,{get:function(target,property,receiver){if(typeof target[property]=="function"){return(...args)=>target[property].apply(target,args)}else{if(property=="location"){return target.xlocation}
return target[property]}}});PokiSDK=function(){function loadJS(FILE_URL,callback){let scriptEle=document.createElement("script");scriptEle.setAttribute("src",FILE_URL);scriptEle.setAttribute("type","text/javascript");scriptEle.setAttribute("async",!0);document.body.appendChild(scriptEle);scriptEle.addEventListener("load",()=>{consoleLog("--fx--PokiSDK--loadJS Done--");callback(!0)});scriptEle.addEventListener("error",()=>{consoleLog("--fx--PokiSDK--loadJS Error--");callback(!1)})}
this.getURLParam=function(name){return""}
this.init=function(){return new Promise((resolve,reject)=>{resolve("InitDone")})}
this.setDebug=function(debug){consoleLog("--fx--PokiSDK--setDebug--",debug)}
this.setDebugTouchOverlayController=function(debug){consoleLog("--fx--PokiSDK--setDebugTouchOverlayController--",debug)}
this.isAdBlocked=function(){consoleLog("--fx--PokiSDK--isAdBlocked--");return!1}
this.happyTime=function(scale){consoleLog("--fx--PokiSDK--happyTime--",scale)}
this.gameLoadingStart=function(){consoleLog("--fx--PokiSDK--gameLoadingStart--")}
this.gameLoadingProgress=function(progress){consoleLog("--fx--PokiSDK--gameLoadingProgress--",progress)}
this.gameLoadingFinished=function(){consoleLog("--fx--PokiSDK--gameLoadingFinished--")}
this.gameplayStart=function(){consoleLog("--fx--PokiSDK--gameplayStart--")}
this.gameplayStop=function(){consoleLog("--fx--PokiSDK--gameplayStop--")}
this.commercialBreak=function(){consoleLog("--fx--PokiSDK--commercialBreak--");return new Promise((resolve,reject)=>{loadJS("https://www.ubg235.com/ads/commercial.js",resolve)})}
this.rewardedBreak=function(){consoleLog("--fx--PokiSDK--rewardedBreak--");return new Promise((resolve,reject)=>{loadJS("https://www.ubg235.com/ads/rewarded.js",resolve)})}
this.displayAd=function(){consoleLog("--fx--PokiSDK--displayAd--",arguments)}
this.destroyAd=function(){consoleLog("--fx--PokiSDK--destroyAd--",arguments)}}
PokiSDK.prototype.initWithVideoHB=function(){consoleLog("--fx--PokiSDK--initWithVideoHB--");return new Promise((resolve,reject)=>{resolve("")})}
PokiSDK.prototype.customEvent=function(){consoleLog("--fx--PokiSDK--customEvent--")}
PokiSDK=new PokiSDK()