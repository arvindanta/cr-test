var __awaiter=this&&this.__awaiter||function(t,e,i,n){function o(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,s){function r(t){try{l(n.next(t))}catch(e){s(e)}}function a(t){try{l(n["throw"](t))}catch(e){s(e)}}function l(t){t.done?i(t.value):o(t.value).then(r,a)}l((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,o,s,r;return r={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function a(t){return function(e){return l([t,e])}}function l(r){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,o&&(s=r[0]&2?o["return"]:r[0]?o["throw"]||((s=o["return"])&&s.call(o),0):o.next)&&!(s=s.call(o,r[1])).done)return s;if(o=0,s)r=[r[0]&2,s.value];switch(r[0]){case 0:case 1:s=r;break;case 4:i.label++;return{value:r[1],done:false};case 5:i.label++;o=r[1];r=[0];continue;case 7:r=i.ops.pop();i.trys.pop();continue;default:if(!(s=i.trys,s=s.length>0&&s[s.length-1])&&(r[0]===6||r[0]===2)){i=0;continue}if(r[0]===3&&(!s||r[1]>s[0]&&r[1]<s[3])){i.label=r[1];break}if(r[0]===6&&i.label<s[1]){i.label=s[1];s=r;break}if(s&&i.label<s[2]){i.label=s[2];i.ops.push(r);break}if(s[2])i.ops.pop();i.trys.pop();continue}r=e.call(t,i)}catch(a){r=[6,a];o=0}finally{n=s=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(t,e){for(var i=0,n=e.length,o=t.length;i<n;i++,o++)t[o]=e[i];return t};System.register(["./p-348d2216.system.js","./p-1bb863ef.system.js","./p-454c6693.system.js","./p-ced917de.system.js"],(function(t){"use strict";var e,i,n,o,s,r,a,l,c,u,h,p,d;return{setters:[function(t){e=t.r;i=t.c;n=t.h;o=t.i;s=t.F},function(t){r=t.d;a=t.b;l=t.e;c=t.h;u=t.r;h=t.a},function(t){p=t.i},function(t){d=t.F}],execute:function(){var f=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.container{margin:0px;padding:12px 8px 8px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}';var g=undefined&&undefined.__decorate||function(t,e,i,n){var o=arguments.length,s=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)if(r=t[a])s=(o<3?r(s):o>3?r(e,i,s):r(e,i))||s;return o>3&&s&&Object.defineProperty(e,i,s),s};var b=t("fw_list_options",function(){function t(t){var n=this;e(this,t);this.fwChange=i(this,"fwChange",7);this.fwLoading=i(this,"fwLoading",7);this.isInternalValueChange=false;this.arrowKeyCounter=0;this.optionRefs=[];this.defaultSearchFunction=function(t,e){return new Promise((function(i){var n=t.toLowerCase();var o=n!==""?e.filter((function(t){return t.text.toLowerCase().includes(n)})):e;i(o)}))};this.filteredOptions=[];this.selectOptions=[];this.selectedOptionsState=[];this.isLoading=false;this.options=[];this.value="";this.max=Number.MAX_VALUE;this.multiple=false;this.searchable=false;this.variant="standard";this.checkbox=false;this.notFoundText="";this.search=this.defaultSearchFunction;this.searchText="";this.noDataText="";this.debounceTimer=300;this.selectedOptions=[];this.allowDeselect=true;this.handleSearchWithDebounce=r((function(t){n.isLoading=true;n.fwLoading.emit({isLoading:n.isLoading});n.search(t,n.selectOptions).then((function(t){n.filteredOptions=(t===null||t===void 0?void 0:t.length)>0?n.serializeData(t):[{text:n.notFoundText,disabled:true}];n.isLoading=false;n.fwLoading.emit({isLoading:n.isLoading})}))}),this,this.debounceTimer)}t.prototype.fwSelectedHandler=function(t){var e=t.detail,i=e.value,n=e.selected;if(n){var o=this.filteredOptions.filter((function(t){return t.value===i}))[0];this.selectedOptionsState=this.multiple?__spreadArray(__spreadArray([],this.selectedOptionsState),[o]):[o]}else{this.selectedOptionsState=this.multiple?this.selectedOptionsState.filter((function(t){return t.value!==i})):[]}this.isInternalValueChange=true;this.setValue(this.selectedOptionsState)};t.prototype.onKeyDown=function(t){switch(t.key){case"ArrowDown":this.arrowKeyCounter=l(this.arrowKeyCounter,this.optionRefs.length-1);this.optionRefs[this.arrowKeyCounter].setFocus();t.preventDefault();t.stopPropagation();break;case"ArrowUp":this.arrowKeyCounter=a(this.arrowKeyCounter,this.optionRefs.length-1);this.optionRefs[this.arrowKeyCounter].setFocus();t.preventDefault();t.stopPropagation();break}};t.prototype.clearFilter=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.filteredOptions=this.selectOptions;if(this.searchable){this.searchInput.value=""}return[2]}))}))};t.prototype.scrollToLastSelected=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){if(this.filteredOptions.length>0&&this.valueExists()){(t=this.container.querySelector("fw-select-option[id='"+this.host.id+"-option-"+this.getLastSelectedValue()+"']"))===null||t===void 0?void 0:t.scrollIntoView({block:"nearest"})}return[2]}))}))};t.prototype.getSelectedOptions=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.selectedOptionsState]}))}))};t.prototype.setSelectedValues=function(t){return __awaiter(this,void 0,void 0,(function(){var e=this;return __generator(this,(function(i){if(this.options){this.selectedOptionsState=this.options.filter((function(i){return e.isValueEqual(t,i)}));this.isInternalValueChange=true;this.setValue(this.selectedOptionsState)}return[2]}))}))};t.prototype.setSelectedOptions=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.selectedOptionsState=t;this.isInternalValueChange=true;this.setValue(t);return[2]}))}))};t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;return __generator(this,(function(i){this.optionRefs=__spreadArray([],this.container.getElementsByTagName("fw-select-option"));t=this.getLastSelectedValue();if(t&&this.optionRefs.length>0){e=this.optionRefs.findIndex((function(e){return e.value===t}));this.arrowKeyCounter=e===-1?0:e}this.optionRefs[this.arrowKeyCounter].setFocus();return[2]}))}))};t.prototype.onOptionsChange=function(t){this.setDataSource(t)};t.prototype.onValueChange=function(t,e){var i=this;if(JSON.stringify(t)!==JSON.stringify(e)){if(t){this.validateValue(t)}else{t=this.multiple?[]:""}this.selectOptions=this.selectOptions.map((function(e){e.selected=i.isValueEqual(t,e);return e}));if(!this.isInternalValueChange){var n=this.options.length>0?this.options:this.selectedOptionsState;this.selectedOptionsState=n.filter((function(e){return i.isValueEqual(t,e)}))}this.fwChange.emit({value:t,meta:{selectedOptions:this.selectedOptionsState}});this.isInternalValueChange=false}};t.prototype.onFilterTextChange=function(t){this.handleSearchWithDebounce(t)};t.prototype.valueExists=function(){return this.multiple?this.value.length>0:!!this.value};t.prototype.validateValue=function(t){if(this.multiple&&!Array.isArray(t)){throw new Error("Value must be a array for multi-select")}if(!this.multiple&&typeof t!=="string"&&typeof t!=="number"){throw new Error("Value must be a string for single-select")}};t.prototype.getLastSelectedValue=function(){if(this.valueExists()){return this.multiple?this.value.slice(-1)[0]:this.value}};t.prototype.setSelectedOptionsByValue=function(t){var e=this;if(this.options){this.selectedOptionsState=this.options.filter((function(i){return e.isValueEqual(t,i)}))}else{throw new Error("Options must be passed if value is set")}};t.prototype.serializeData=function(t){var e=this;return t.map((function(t){var i;return Object.assign(Object.assign({},t),{checkbox:t.checkbox||e.checkbox,variant:t.variant||e.variant,selected:e.isValueEqual(e.value,t)||t.selected,disabled:t.disabled||e.multiple&&((i=e.value)===null||i===void 0?void 0:i.length)>=e.max,allowDeselect:e.allowDeselect})}))};t.prototype.isValueEqual=function(t,e){return this.multiple?t.includes(e.value):t===e.value};t.prototype.setValue=function(t){if((t===null||t===void 0?void 0:t.length)>0){this.value=this.multiple?t.map((function(t){return t.value})):t[0].value}else{this.value=this.multiple?[]:""}};t.prototype.setDataSource=function(t){if(t.length>0){this.selectOptions=this.serializeData(t)}else{this.selectOptions=[{text:this.noDataText,disabled:true}]}this.filteredOptions=this.selectOptions};t.prototype.renderSelectOptions=function(t){var e=this;return t.map((function(t){return n("fw-select-option",Object.assign({id:e.host.id+"-option-"+t.value,key:t.value},t))}))};t.prototype.renderSearchInput=function(){var t=this;return n("fw-input",{ref:function(e){return t.searchInput=e},placeholder:this.searchText,onInput:function(){return t.handleSearchWithDebounce(t.searchInput.value)}})};t.prototype.componentWillLoad=function(){this.validateValue(this.value);if(this.selectedOptions.length>0){this.selectedOptionsState=this.selectedOptions;this.value=this.multiple?this.selectedOptionsState.map((function(t){return t.value})):this.selectedOptionsState[0].value}else if(this.valueExists()){this.setSelectedOptionsByValue(this.value)}else{this.setValue([])}if(this.multiple&&typeof this.value==="string"){throw Error("value must be a array of string when multiple is true")}this.setDataSource(this.options)};t.prototype.render=function(){var t=this;return n("div",{class:"container",ref:function(e){t.container=e}},this.searchable&&this.renderSearchInput(),this.renderSelectOptions(this.filteredOptions))};Object.defineProperty(t.prototype,"host",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{options:["onOptionsChange"],value:["onValueChange"],filterText:["onFilterTextChange"]}},enumerable:false,configurable:true});return t}());g([p({keyName:"search.noItemsFound"})],b.prototype,"notFoundText",void 0);g([p({keyName:"search.search"})],b.prototype,"searchText",void 0);g([p({keyName:"search.noDataAvailable"})],b.prototype,"noDataText",void 0);b.style=f;var m=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.field-control{position:relative}.field-control-label{display:block;font-size:12px;color:var(--fw-input-label-color, #475867);font-weight:600;margin-bottom:4px;padding-left:2px;line-height:20px}.field-control-label.required::after{content:"*";position:relative;display:inline-block;top:2px;font-size:14px;color:#d72d30;padding-left:2px;font-weight:700}.field-control-hint-text{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", "Roboto", "Helvetica Neue", arial, sans-serif;font-size:12px;line-height:20px;margin-top:4px;margin-bottom:0;color:var(--fw-input-hint-color, #acb6be);position:inherit;display:block;padding-left:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-error-text{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", "Roboto", "Helvetica Neue", arial, sans-serif;font-size:12px;line-height:20px;margin-top:4px;margin-bottom:0;color:var(--fw-input-error-color, #d72d30);position:inherit;display:block;padding-left:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-warning-text{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", "Roboto", "Helvetica Neue", arial, sans-serif;font-size:12px;line-height:20px;margin-top:4px;margin-bottom:0;color:var(--fw-input-warning-color, #f8ab59);position:inherit;display:block;padding-left:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host{display:block}.input-container{width:calc(100% - 10px);border:var(--fw-select-border, 1px solid #cfd7df);border-radius:var(--fw-select-border-radius, 4px);padding-left:10px;background-color:#fff;-webkit-box-shadow:none;box-shadow:none;min-height:22px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;}.input-container .input-container-inner{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-wrap:wrap;flex-wrap:wrap}.input-container .input-container-inner .tag-container{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input-container .input-container-inner .tag-container fw-tag{margin:4px 4px 4px 0px}.input-container .input-container-inner input{-ms-flex-positive:1;flex-grow:1;border:none;font-size:14px;font-weight:500;letter-spacing:0;line-height:1.4;background-color:#fff;min-width:20px;min-height:22px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;margin:4px 0px}.input-container .input-container-inner input:focus{border:none;outline:none}.input-container .input-container-inner input.multi-select{width:auto}.input-container .input-container-inner input:disabled{background-color:#f5f7f9 !important;border-color:transparent;cursor:not-allowed}.input-container fw-spinner{margin-right:8px}@media (prefers-reduced-motion){.input-container:hover,.input-container:focus{-webkit-transition:none;transition:none}}.input-container:hover,.input-container:focus{border:1px #475867 solid;-webkit-transition:0.2s linear;transition:0.2s linear}.input-container.error{border-color:#d72d30}.input-container.error>span.help-block{color:#d72d30}.input-container.warning{border-color:#f8ab59}.input-container.warning>span.help-block{color:#f8ab59}.input-container.select-disabled{color:#ebeff3;background-color:#f5f7f9 !important;border-style:solid;cursor:not-allowed}.input-container.select-disabled:hover{border:1px solid #cfd7df}:host(.has-focus) .input-container{outline:none;background:#fff;border:1px solid transparent;-webkit-box-shadow:0 0 0 2px #2c5cc5;box-shadow:0 0 0 2px #2c5cc5}:host(.has-focus) .input-container.error{border-color:#d72d30;-webkit-box-shadow:none;box-shadow:none}:host(.has-focus) .input-container.error>span.help-block{color:#d72d30}:host(.has-focus) .input-container.warning{border-color:#f8ab59;-webkit-box-shadow:0 0 0 1px #f8ab59;box-shadow:0 0 0 1px #f8ab59}:host(.has-focus) .input-container.warning>span.help-block{color:#f8ab59}.select-container{margin-bottom:var(--fw-select-margin-bottom, 0px);width:inherit;height:inherit;position:relative}.select-container .dropdown{z-index:99}.select-container .dropdown-status-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;min-width:20px;min-height:20px;-webkit-transition:all 0.15s;transition:all 0.15s;--icon-color:$color-elephant-800}.select-container .help-block{font-size:12px;margin-top:4px;line-height:20px;color:#acb6be;position:inherit;margin-bottom:0;display:block;padding-left:2px}.select-container .dropdown-status-icon.expanded{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.select-container.error{border-color:#d72d30}.select-container.error>span.help-block{color:#d72d30}.select-container.warning{border-color:#f8ab59}.select-container.warning>span.help-block{color:#f8ab59}::-webkit-input-placeholder{color:#92a2b1;opacity:1}::-moz-placeholder{color:#92a2b1;opacity:1}:-ms-input-placeholder{color:#92a2b1;opacity:1}::-ms-input-placeholder{color:#92a2b1;opacity:1}::placeholder{color:#92a2b1;opacity:1}:-ms-input-placeholder{color:#92a2b1}::-ms-input-placeholder{color:#92a2b1}';var v=undefined&&undefined.__decorate||function(t,e,i,n){var o=arguments.length,s=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)if(r=t[a])s=(o<3?r(s):o>3?r(e,i,s):r(e,i))||s;return o>3&&s&&Object.defineProperty(e,i,s),s};var x=t("fw_select",function(){function t(t){var n=this;e(this,t);this.fwChange=i(this,"fwChange",7);this.fwFocus=i(this,"fwFocus",7);this.fwBlur=i(this,"fwBlur",7);this.tagRefs=[];this.tagArrowKeyCounter=0;this.changeEmittable=function(){return!n.disabled};this.innerOnFocus=function(t){if(n.changeEmittable()){n.hasFocus=true;n.fwFocus.emit(t)}};this.innerOnClick=function(){n.setFocus();if(n.variant!=="mail"){n.openDropdown()}};this.innerOnBlur=function(t){if(n.changeEmittable()){n.hasFocus=false;n.fwBlur.emit({event:t,name:n.name})}};this.openDropdown=function(){if(!n.isExpanded&&n.changeEmittable()){n.popover.show()}};this.closeDropdown=function(){if(n.isExpanded&&n.changeEmittable()){n.popover.hide()}};this.isExpanded=false;this.hasFocus=false;this.didInit=false;this.selectedOptionsState=[];this.isLoading=false;this.focusedOptionId="";this.hasHintTextSlot=false;this.hasWarningTextSlot=false;this.hasErrorTextSlot=false;this.label="";this.name="";this.type="text";this.state="normal";this.readonly=false;this.required=false;this.forceSelect=true;this.disabled=false;this.multiple=false;this.max=Number.MAX_VALUE;this.variant="standard";this.optionsVariant="standard";this.searchable=true;this.checkbox=false;this.notFoundText="";this.noDataText="";this.debounceTimer=300;this.selectedOptions=[];this.sameWidth=true;this.optionsPlacement="bottom";this.tagVariant="standard";this.caret=true;this.labelledBy="";this.allowDeselect=true;this.hintText="";this.warningText="";this.errorText="";this.tagContainerKeyDown=function(t){switch(t.key){case"Escape":n.innerOnBlur(t);n.closeDropdown();break;case"ArrowLeft":n.tagArrowKeyCounter--;if(n.tagArrowKeyCounter>=0){n.focusOnTag(n.tagArrowKeyCounter)}else{n.tagArrowKeyCounter=0}t.stopImmediatePropagation();break;case"ArrowRight":n.tagArrowKeyCounter++;if(n.tagArrowKeyCounter>=n.value.length){n.selectInput.focus()}else{n.focusOnTag(n.tagArrowKeyCounter)}t.stopImmediatePropagation();break}}}t.prototype.onDropdownClose=function(){this.clearInput();this.isExpanded=false;this.multiple&&this.selectInput.focus()};t.prototype.onDropdownOpen=function(){this.isExpanded=true};t.prototype.onLoading=function(t){this.isLoading=t.detail.isLoading;if(this.variant==="mail"&&!this.isLoading){this.selectInput.value&&this.openDropdown()}};t.prototype.fwSelectedHandler=function(t){var e,i;if(t.composedPath()[0].tagName==="FW-LIST-OPTIONS"){this.selectedOptionsState=(i=(e=t.detail)===null||e===void 0?void 0:e.meta)===null||i===void 0?void 0:i.selectedOptions;this.value=t.detail.value;this.renderInput();if(!this.multiple||this.variant==="mail"){this.closeDropdown()}t.stopImmediatePropagation();t.stopPropagation();t.preventDefault();if(this.selectedOptionsState.length>0){this.fwChange.emit({name:this.name,value:this.value,meta:{selectedOptions:this.selectedOptionsState}})}else{this.fwChange.emit({name:this.name,value:this.value,meta:{shouldValidate:false,selectedOptions:this.selectedOptionsState}})}}};t.prototype.fwCloseHandler=function(t){this.value=this.value.filter((function(e){return e!==t.detail.value}))};t.prototype.onKeyDown=function(t){switch(t.key){case"ArrowDown":this.innerOnClick();this.fwListOptions.setFocus();t.preventDefault();t.stopPropagation();break;case"ArrowLeft":case"Backspace":if(this.multiple&&this.selectInput.value===""){this.focusOnTagContainer()}break;case"Escape":this.innerOnBlur(t);this.closeDropdown();break;case"Tab":this.closeDropdown();break}};t.prototype.onOptionFocus=function(t){if(t.composedPath()[0].tagName==="FW-SELECT-OPTION"){this.focusedOptionId=t.detail.id}};t.prototype.onOptionBlur=function(t){if(t.composedPath()[0].tagName==="FW-SELECT-OPTION"){this.focusedOptionId=""}};t.prototype.optionsChangedHandler=function(){this.renderInput()};t.prototype.getSelectedItem=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.fwListOptions.getSelectedOptions()]}))}))};t.prototype.setSelectedValues=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.fwListOptions.setSelectedValues(t);this.renderInput();return[2]}))}))};t.prototype.setSelectedOptions=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.fwListOptions.setSelectedOptions(t);this.renderInput();return[2]}))}))};t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){(t=this.selectInput)===null||t===void 0?void 0:t.focus();return[2]}))}))};t.prototype.focusOnTagContainer=function(){this.tagRefs=__spreadArray([],this.tagContainer.getElementsByTagName("fw-tag"));this.tagArrowKeyCounter=this.value.length-1;this.focusOnTag(this.tagArrowKeyCounter)};t.prototype.focusOnTag=function(t){var e;(e=this.tagRefs[t])===null||e===void 0?void 0:e.setFocus()};t.prototype.clearInput=function(){if(!this.multiple&&this.value){this.renderInput();return}this.selectInput.value=""};t.prototype.isValueEqual=function(t,e){return this.multiple?t.includes(e.value):t===e.value};t.prototype.valueExists=function(){return this.value&&(this.multiple?this.value.length>0:!!this.value)};t.prototype.onInput=function(){if(this.selectInput.value){this.searchValue=this.selectInput.value.toLowerCase();this.variant!=="mail"&&this.openDropdown()}else{this.variant==="mail"&&this.closeDropdown()}};t.prototype.renderTags=function(){var t=this;if(this.multiple&&Array.isArray(this.value)){return this.selectedOptionsState.map((function(e){if(t.isValueEqual(t.value,e)){return n("fw-tag",{variant:t.tagVariant,graphicsProps:e.graphicsProps,text:e.text,disabled:e.disabled,value:e.value,focusable:false})}}))}};t.prototype.renderInput=function(){if(this.selectedOptionsState.length>0){if(this.selectInput){this.selectInput.value="";this.selectInput.value=this.multiple?this.selectInput.value:this.selectedOptionsState[0].text||""}}else{if(this.selectInput){this.selectInput.value=""}}};t.prototype.componentWillLoad=function(){var t=this;var e,i;this.handleSlotChange();if(this.variant==="mail"){this.caret=false;this.multiple=true}var n=Array.from(this.host.querySelectorAll("fw-select-option"));if(this.selectedOptions.length>0){this.selectedOptionsState=this.selectedOptions;this.value=this.multiple?this.selectedOptions.map((function(t){return t.value})):this.selectedOptions[0].value}if(this.multiple){if(this.multiple&&typeof this.value==="string"){throw Error("value must be a array of string when multiple is true")}this.value=((e=this.value)===null||e===void 0?void 0:e.length)>0?this.value:[]}else{this.value=this.value?this.value:""}var o=n.map((function(e){return{html:e.html,text:e.html?e.optionText:e.textContent,value:e.value,selected:t.isValueEqual(t.value,e)||e.selected,disabled:e.disabled||t.disabled,htmlContent:e.html?e.innerHTML:""}}));this.dataSource=o.length===0?this.options:o;if(!this.multiple&&this.value&&this.selectedOptions.length===0){this.selectedOptionsState=this.dataSource.filter((function(e){return t.value===e.value}))}else if(this.multiple&&this.value.length!==this.selectedOptions.length){this.selectedOptionsState=this.dataSource.filter((function(e){return t.isValueEqual(t.value,e)}))}if(((i=this.dataSource)===null||i===void 0?void 0:i.length)>0){var s=this.dataSource.filter((function(t){return t.selected}));var r=s.map((function(t){return t.value}));var a=this.multiple?r:r[0];if(r.length>0&&JSON.stringify(this.value)!==JSON.stringify(a)){this.value=a;this.selectedOptionsState=s}}this.host.addEventListener("focus",this.setFocus);this.hostId=this.host.id||""};t.prototype.componentDidLoad=function(){this.renderInput();this.didInit=true};t.prototype.disconnectedCallback=function(){var t;this.host.removeEventListener("focus",this.setFocus);(t=this.host.shadowRoot)===null||t===void 0?void 0:t.removeEventListener("slotchange",this.handleSlotChange)};t.prototype.expandWatcher=function(t){var e,i,n,o;if(this.variant==="button"){var s=(o=(n=(i=(e=this.host.shadowRoot)===null||e===void 0?void 0:e.querySelector(".select-container"))===null||i===void 0?void 0:i.querySelector("fw-button"))===null||n===void 0?void 0:n.shadowRoot)===null||o===void 0?void 0:o.querySelector("fw-icon");s&&(s.name=t?"chevron-up":"chevron-down")}};t.prototype.handleSlotChange=function(){this.hasHintTextSlot=c(this.host,"hint-text");this.hasWarningTextSlot=c(this.host,"warning-text");this.hasErrorTextSlot=c(this.host,"error-text")};t.prototype.getAriaDescribedBy=function(){if(this.state==="normal")return"hint-"+this.name;else if(this.state==="error")return"error-"+this.name;else if(this.state==="warning")return"warning-"+this.name;return null};t.prototype.render=function(){var t,e;var i=this;var o=this,r=o.host,a=o.name,l=o.value;u(r,a,l);return n(d,{inputId:this.name,label:this.label,labelId:this.label+"-"+this.name,state:this.state,hintTextId:"hint-"+this.name,hintText:this.hintText,hasHintTextSlot:this.hasHintTextSlot,errorTextId:"error-"+this.name,errorText:this.errorText,hasErrorTextSlot:this.hasErrorTextSlot,warningTextId:"warning-"+this.name,warningText:this.warningText,hasWarningTextSlot:this.hasWarningTextSlot,required:this.required},n("div",{"aria-disabled":this.disabled,class:{"has-focus":this.hasFocus}},n("div",{class:(t={"select-container":true},t[this.state]=true,t),role:"combobox","aria-controls":this.hostId+"-listbox","aria-haspopup":"listbox","aria-expanded":this.isExpanded,"aria-owns":this.hostId+"-listbox"},n("fw-popover",{distance:"8",trigger:"manual",ref:function(t){return i.popover=t},"same-width":this.sameWidth,placement:this.optionsPlacement},n("div",{slot:"popover-trigger",class:(e={"input-container":this.variant!=="button"},e[this.state]=true,e["select-disabled"]=this.disabled,e),onClick:function(){return i.innerOnClick()},onKeyDown:h(this.innerOnClick)},this.variant==="button"?n("fw-button",{style:{"--fw-button-label-vertical-padding":"7px"},"show-caret-icon":true,id:this.hostId+"-btn",color:"secondary",class:this.host.classList.value.includes("first")?"fw-button-group__button--first":"fw-button-group__button--last"},this.value):n(s,null,n("div",{class:"input-container-inner"},this.multiple&&n("div",{class:"tag-container",onFocus:this.focusOnTagContainer,ref:function(t){return i.tagContainer=t},onKeyDown:this.tagContainerKeyDown},this.renderTags()),n("input",{ref:function(t){return i.selectInput=t},class:{"multiple-select":this.multiple},autoComplete:"off",disabled:this.disabled,name:this.name,id:this.name,placeholder:this.valueExists()?"":this.placeholder||"",readOnly:this.readonly,required:this.required,type:this.type,value:"","aria-autocomplete":"list","aria-activedescendant":this.focusedOptionId,onInput:function(){return i.onInput()},onFocus:function(t){return i.innerOnFocus(t)},onBlur:function(t){return i.innerOnBlur(t)},"aria-invalid":this.state==="error","aria-describedby":"hint-"+this.name+" error-"+this.name})),this.isLoading?n("fw-spinner",{size:"small"}):this.caret&&n("span",{class:{"dropdown-status-icon":true,expanded:this.isExpanded}},n("fw-icon",{name:"chevron-down",size:8,library:"system"})))),n("fw-list-options",{ref:function(t){return i.fwListOptions=t},id:this.hostId+"-listbox",role:"listbox","aria-labelledby":this.labelledBy||this.hostId+"-label",notFoundText:this.notFoundText,debounceTimer:this.debounceTimer,noDataText:this.noDataText,search:this.search,selectedOptions:this.selectedOptions,variant:this.optionsVariant,"filter-text":this.searchValue,options:this.dataSource,value:this.value,multiple:this.multiple,max:this.max,checkbox:this.checkbox,allowDeselect:this.allowDeselect,slot:"popover-content"})))))};Object.defineProperty(t.prototype,"host",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{dataSource:["optionsChangedHandler"],isExpanded:["expandWatcher"]}},enumerable:false,configurable:true});return t}());v([p({keyName:"search.noItemsFound"})],x.prototype,"notFoundText",void 0);v([p({keyName:"search.noDataAvailable"})],x.prototype,"noDataText",void 0);x.style=m;var w=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.select-center{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.select-option{cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:#12344d;font-size:14px;border-radius:4px;list-style:none;line-height:1.45;word-break:break-word;word-wrap:break-word;position:relative;margin-bottom:4px;padding-right:8px}.select-option.single-line{padding-top:6px;padding-bottom:6px}.select-option.multi-line{padding-top:8px;padding-bottom:8px}.select-option.standard{padding-left:0px}.select-option.icon{padding-left:10px}.select-option.avatar{padding-left:4px}.select-option.selected{font-weight:600;background-color:#e5f2fd}.select-option.selected:hover,.select-option.selected:focus{background-color:#e5f2fd}.select-option:hover{background-color:#ebeff3}.select-option:focus{background-color:#ebeff3;outline:#2c5cc5 auto 1px}.select-option.disabled{color:#92a2b1;position:relative;cursor:not-allowed;background-color:#f5f7f9}.select-option .description{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.select-option .description-text{font-weight:600}.select-option .description-subText{font-weight:400;font-size:12px;color:#475867}.select-option .description.icon-margin{margin-left:18px}.select-option .description.standard-margin{margin-left:12px}.select-option .selected-icon{min-width:24px;min-height:24px;margin-left:auto;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.select-option fw-icon{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}';var y=t("fw_select_option",function(){function t(t){e(this,t);this.fwSelected=i(this,"fwSelected",7);this.fwFocus=i(this,"fwFocus",7);this.fwBlur=i(this,"fwBlur",7);this.selected=false;this.disabled=false;this.html=false;this.variant="standard";this.checkbox=false;this.allowDeselect=true}t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.rowContainer.focus();return[2]}))}))};t.prototype.onKeyDown=function(t){switch(t.key){case"Enter":this.onOptionSelected();break}};t.prototype.onOptionSelected=function(){if(this.disabled){return}if(this.selected&&!this.allowDeselect){return}this.selected=!this.selected;var t=this,e=t.value,i=t.selected;this.fwSelected.emit({value:e,selected:i})};t.prototype.renderInnerHtml=function(){var t=this.createDescription();var e=this.checkbox?this.createCheckbox():"";var i=n("span",{class:"selected-icon"},this.selected&&n("fw-icon",{name:"check",size:12,color:"#2C5CC5",library:"system"}));switch(this.variant){case"standard":return n(s,null,e,t,i);case"icon":return n(s,null,e,this.createIcon(),t,i);case"avatar":return n(s,null,e,this.createAvatar(),t,i)}};t.prototype.createDescription=function(){return this.subText?n("div",{class:"description "+(this.variant==="icon"?"icon-margin ":"standard-margin ")},n("span",{class:"description-text"},this.text),n("span",{class:"description-subText"},this.subText)):n("span",{class:"description "+(this.variant==="icon"?"icon-margin ":"standard-margin ")},this.text)};t.prototype.createIcon=function(){return n("fw-icon",Object.assign({},this.graphicsProps))};t.prototype.createCheckbox=function(){return n("fw-checkbox",{checked:this.selected})};t.prototype.createAvatar=function(){return n("fw-avatar",Object.assign({size:"small"},this.graphicsProps))};t.prototype.render=function(){var t=this;return n("div",{role:"option",tabindex:"-1","aria-selected":this.selected,ref:function(e){return t.rowContainer=e},class:"select-option "+(this.selected&&!this.checkbox?"selected ":"")+(this.disabled?"disabled ":"")+(this.html?"":(this.subText?"multi-line ":"single-line ")+(this.variant+" "+"select-center")),onMouseDown:function(){return t.onOptionSelected()},onFocus:function(){return t.fwFocus.emit({id:t.host.id})},onBlur:function(e){return t.fwBlur.emit(e)}},this.html?"":this.text?this.renderInnerHtml():n("slot",null))};t.prototype.componentDidLoad=function(){if(this.html){this.rowContainer.innerHTML=this.htmlContent}};Object.defineProperty(t.prototype,"host",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());y.style=w;var O=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.tag{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;color:#12344d;font-size:14px;word-break:break-all}.tag .content{line-height:20px;vertical-align:middle}.tag-standard{padding:2px 2px 2px 8px;border-radius:4px;font-weight:600;background-color:#ebeff3}.tag-avatar{padding:4px;border-radius:24px;font-weight:400;background:-webkit-gradient(linear, left top, left bottom, color-stop(2.56%, #f5f7f9), color-stop(95.75%, #f3f5f7));background:linear-gradient(180deg, #f5f7f9 2.56%, #f3f5f7 95.75%)}.tag-avatar fw-avatar{margin-right:8px}.tag .remove-btn{margin-left:8px;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:#264966;font-size:16px}.tag .remove-btn.standard{min-height:20px;min-width:20px;border-radius:4px}.tag .remove-btn.avatar{min-height:24px;min-width:24px;border-radius:16px}.tag .remove-btn.avatar:hover,.tag .remove-btn.avatar:focus{background-color:#fff;cursor:pointer}.tag .remove-btn:hover,.tag .remove-btn:focus{background-color:#cfd7df;cursor:pointer}.tag .remove-btn.disabled{color:#447093;background-color:#ebeff3;cursor:not-allowed}';var k=t("fw_tag",function(){function t(t){var n=this;e(this,t);this.fwClosed=i(this,"fwClosed",7);this.variant="standard";this.graphicsProps={};this.closable=true;this.focusable=true;this.removeTag=function(){if(n.disabled||!n.closable){return}var t=n,e=t.value,i=t.text;n.fwClosed.emit({value:e,text:i})}}t.prototype.onKeyDown=function(t){switch(t.key){case"Backspace":this.removeTag();t.preventDefault();break}};t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.tagContainer.focus();return[2]}))}))};t.prototype.renderContent=function(){switch(this.variant){case"standard":return n("span",{class:"content"},this.text);case"avatar":{return[n("fw-avatar",Object.assign({size:"xsmall"},this.graphicsProps)),n("span",{class:"content"},this.text)]}}};t.prototype.render=function(){var t=this;return n("div",{role:"button",tabindex:"-1",class:"tag tag-"+this.variant,ref:function(e){return t.tagContainer=e}},this.renderContent(),this.closable&&n("span",{role:"button",tabIndex:this.focusable?0:-1,class:"remove-btn "+this.variant+" "+(this.disabled?"disabled":""),onClick:function(){return t.removeTag()},onKeyDown:h(this.removeTag)},n("fw-icon",{name:"cross",size:8,library:"system"})))};Object.defineProperty(t.prototype,"host",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());k.style=O}}}));