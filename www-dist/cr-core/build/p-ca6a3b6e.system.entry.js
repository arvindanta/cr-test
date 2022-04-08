var __awaiter=this&&this.__awaiter||function(e,t,r,i){function n(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,a){function s(e){try{o(i.next(e))}catch(t){a(t)}}function l(e){try{o(i["throw"](e))}catch(t){a(t)}}function o(e){e.done?r(e.value):n(e.value).then(s,l)}o((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},i,n,a,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(e){return function(t){return o([e,t])}}function o(s){if(i)throw new TypeError("Generator is already executing.");while(r)try{if(i=1,n&&(a=s[0]&2?n["return"]:s[0]?n["throw"]||((a=n["return"])&&a.call(n),0):n.next)&&!(a=a.call(n,s[1])).done)return a;if(n=0,a)s=[s[0]&2,a.value];switch(s[0]){case 0:case 1:a=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;n=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){r.label=s[1];break}if(s[0]===6&&r.label<a[1]){r.label=a[1];a=s;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(s);break}if(a[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(l){s=[6,l];n=0}finally{i=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t){for(var r=0,i=t.length,n=e.length;r<i;r++,n++)e[n]=t[r];return e};System.register(["./p-348d2216.system.js"],(function(e){"use strict";var t,r,i,n,a;return{setters:[function(e){t=e.r;r=e.c;i=e.h;n=e.e;a=e.i}],execute:function(){function s(e){var t=[];var r=false;var i=e?e.toString():"";if(e){r=Array.isArray(e)?true:false;if(r){t=__spreadArray([],e)}else{t=i!==""?i.split(","):[]}}return{isArray:r,strSelectedValues:i,arrSelectedValues:t}}function l(e,t,r,i,n){if(e===void 0){e=null}if(t===void 0){t=-1}if(r===void 0){r=true}if(i===void 0){i=false}if(n===void 0){n=null}if(t<0||!e||e.length<=0||t>e.length-1){return n}if(!n){n=[]}var a=e[t].value;var s=n.length>0?n.includes(a):false;if(!r&&i&&s){var l=-1;var o=n.length;for(var u=0;u<o;u++){if(n[u]===a){l=u;break}}n=__spreadArray(__spreadArray([],n.slice(0,l)),n.slice(l+1))}else if(r&&!s){if(i){n=__spreadArray(__spreadArray([],n),[a])}else{n=[a]}}return n}function o(e,t,r,i){if(e===void 0){e=null}if(t===void 0){t=false}if(r===void 0){r=null}if(i===void 0){i=false}if(!e||e.length===0){return-1}var n=-1;var a=false;var s=e.length;for(var l=0;l<s;l++){var o=e[l];var u=o.value;o.index=l;if(i){o.isCheckbox=t}var c=r&&r.includes(u)?true:false;var f=c;if(!t){if(!a&&c){a=true;f=true}else{f=false}}o.selected=f;if(f&&n===-1){n=l;o.setAttribute("tabindex","0")}else{o.setAttribute("tabindex","-1")}}return n}function u(e,t,r,i){if(t===void 0){t=null}if(r===void 0){r=0}if(i===void 0){i=false}if(!t||t.length===0){return{index:r,changeSelection:false,selected:false}}if(r<0){r=0}switch(e){case"ArrowDown":case"ArrowRight":t[r].setAttribute("tabindex","-1");r=++r%t.length;t[r].setAttribute("tabindex","0");t[r].setFocus();break;case"ArrowUp":case"ArrowLeft":t[r].setAttribute("tabindex","-1");r=r===0?t.length-1:--r;t[r].setAttribute("tabindex","0");t[r].setFocus();break;case"Enter":case"Space":{t[r].setFocus();var n=t[r].selected;if(!i&&n){return}var a=i?!n:true;return{index:r,changeSelection:true,selected:a}}}return{index:r,changeSelection:false,selected:false}}var c=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0;gap:12px}';var f=e("fw_toggle_group",function(){function e(e){t(this,e);this.fwChange=r(this,"fwChange",7);this.selectedIndex=-1;this.isInputFormatArray=false;this.multiple=false;this.value=null;this.arrSelectedItems=null;this.label="";this.name=""}e.prototype.setSelectedValues=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.value=e;return[2]}))}))};e.prototype.watchSelectedValuesChangeHandler=function(){this.parseSelectedItems();this.updateSelection()};e.prototype.keyupHandler=function(e){var t=this.arrChildElements;if(!t||t.length===0){return}var r=u(e.code,this.arrChildElements,this.selectedIndex,this.multiple);this.selectedIndex=r.index;if(r.changeSelection){var i=l(t,this.selectedIndex,r.selected,this.multiple,this.arrSelectedItems);this.arrSelectedItems=__spreadArray([],i);this.dispatchSelectionChangeEvent()}};e.prototype.toggleChangeHandler=function(e){var t=e.detail;this.selectedIndex=t.index;var r=l(this.arrChildElements,this.selectedIndex,t.selected,this.multiple,this.arrSelectedItems);this.arrSelectedItems=r;this.dispatchSelectionChangeEvent()};e.prototype.componentWillLoad=function(){this.parseSelectedItems()};e.prototype.componentDidLoad=function(){var e=this.host;this.arrChildElements=e.children;this.updateSelection(true)};e.prototype.dispatchSelectionChangeEvent=function(){var e=this.arrSelectedItems.toString();if(e!==this.value){this.value=e;this.fwChange.emit({value:!this.isInputFormatArray?e:__spreadArray([],this.arrSelectedItems)})}};e.prototype.parseSelectedItems=function(){var e=s(this.value);if(this.value!==e.strSelectedValues){this.value=e.strSelectedValues}this.isInputFormatArray=e.isArray;this.arrSelectedItems=e.arrSelectedValues};e.prototype.updateSelection=function(e){if(e===void 0){e=false}var t=o(this.arrChildElements,this.multiple,this.arrSelectedItems,e);if(t!==-1&&this.selectedIndex===-1){this.selectedIndex=t}};e.prototype.render=function(){return i(n,{"aria-label":this.label},i("slot",null))};Object.defineProperty(e.prototype,"host",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{value:["watchSelectedValuesChangeHandler"]}},enumerable:false,configurable:true});return e}());f.style=c}}}));