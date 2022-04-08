var __awaiter=this&&this.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{l(r.next(e))}catch(t){o(t)}}function a(e){try{l(r["throw"](e))}catch(t){o(t)}}function l(e){e.done?n(e.value):i(e.value).then(s,a)}l((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return l([e,t])}}function l(s){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=s[0]&2?i["return"]:s[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;if(i=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;i=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=t.call(e,n)}catch(a){s=[6,a];i=0}finally{r=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-348d2216.system.js"],(function(e){"use strict";var t,n,r,i,o;return{setters:[function(e){t=e.r;n=e.c;r=e.h;i=e.e;o=e.i}],execute:function(){var s=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{margin:0}.alert{position:relative;display:-ms-flexbox;display:flex;width:100%;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:inherit;padding:8px 6px;background-color:transparent}.alert--success{background:#e0f5f1;border:1px solid #b4e5da}.alert--success .alert__message{border-left:1px solid #b4e5da}.alert--warning{background:#fef1e1;border:1px solid #fedcb3}.alert--warning .alert__message{border-left:1px solid #fedcb3}.alert--info{background:#e5f2fd;border:1px solid #bbdcfe}.alert--info .alert__message{border-left:1px solid #bbdcfe}.alert--error{border:1px solid #ffd0d6;background:#ffecf0}.alert--error .alert__message{border-left:1px solid #ffd0d6}.alert__icon{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;-ms-flex-item-align:start;align-self:flex-start;margin-right:8px}.alert__message{padding-left:12px;-ms-flex:1 1 auto;flex:1 1 auto;color:#12344d;font-size:14px;font-weight:400;line-height:20px}.alert__message ::slotted(a){font-weight:500;color:#365dbe;text-decoration:none}.alert__close{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;-ms-flex-item-align:start;align-self:flex-start;padding-right:6px;padding-left:12px;cursor:pointer}';var a={error:"alert",warning:"info",info:"info",success:"success"};var l={error:"#e43538",warning:"#c7502f",info:"#264966",success:"#00795b"};var f=e("fw_inline_message",function(){function e(e){t(this,e);this.fwShow=n(this,"fwShow",7);this.fwHide=n(this,"fwHide",7);this.closable=true;this.type="info";this.duration=Infinity;this.open=true}e.prototype.startAutoHide=function(){var e=this;clearTimeout(this.autoHideTimeout);if(this.open&&this.duration<Infinity){this.autoHideTimeout=setTimeout((function(){return e.hide()}),this.duration)}};e.prototype.handleOpen=function(){if(this.open){this.host.style.display="flex";this.fwShow.emit();if(this.duration<Infinity){this.startAutoHide()}}else{clearTimeout(this.autoHideTimeout);this.host.style.display="none";this.fwHide.emit()}};e.prototype.handleDurationChange=function(){this.startAutoHide()};e.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(this.open){return[2]}this.open=true;return[2]}))}))};e.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(!this.open){return[2]}this.open=false;return[2]}))}))};e.prototype.connectedCallback=function(){this.host.style.display=this.open?"flex":"none"};e.prototype.disconnectedCallback=function(){clearTimeout(this.autoHideTimeout)};e.prototype.handleKeyUp=function(e){if(e.code==="Enter"){e.preventDefault();this.hide()}};e.prototype.handleClose=function(){this.hide()};e.prototype.render=function(){var e=this;return r(i,{role:"alert","aria-hidden":this.open?"false":"true"},r("div",{class:"alert "+"alert--"+this.type},r("span",{class:"alert__icon"},r("fw-icon",{name:a[this.type],color:l[this.type]})),r("span",{class:"alert__message"},r("slot",null)),this.closable&&r("span",{class:"alert__close",role:"button",tabindex:"0",onKeyUp:function(t){return e.handleKeyUp(t)},onClick:function(){return e.handleClose()}},r("fw-icon",{name:"cross",color:"#12344d",size:8,library:"system"}))))};Object.defineProperty(e.prototype,"host",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{open:["handleOpen"],duration:["handleDurationChange"]}},enumerable:false,configurable:true});return e}());f.style=s}}}));