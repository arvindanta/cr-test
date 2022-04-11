import{r as t,c as i,h as s,i as e,F as o}from"./p-8adda833.js";import{d as n,b as a,e as r,h,r as l,a as c}from"./p-627873c4.js";import{i as d}from"./p-1bba5d39.js";import{F as p}from"./p-fe7a4722.js";var f=function(t,i,s,e){var o,n=arguments.length,a=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,i,s,e);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(n<3?o(a):n>3?o(i,s,a):o(i,s))||a);return n>3&&a&&Object.defineProperty(i,s,a),a};let u=class{constructor(s){t(this,s),this.fwChange=i(this,"fwChange",7),this.fwLoading=i(this,"fwLoading",7),this.isInternalValueChange=!1,this.arrowKeyCounter=0,this.optionRefs=[],this.defaultSearchFunction=(t,i)=>new Promise((s=>{const e=t.toLowerCase();s(""!==e?i.filter((t=>t.text.toLowerCase().includes(e))):i)})),this.filteredOptions=[],this.selectOptions=[],this.selectedOptionsState=[],this.isLoading=!1,this.options=[],this.value="",this.max=Number.MAX_VALUE,this.multiple=!1,this.searchable=!1,this.variant="standard",this.checkbox=!1,this.notFoundText="",this.search=this.defaultSearchFunction,this.searchText="",this.noDataText="",this.debounceTimer=300,this.selectedOptions=[],this.allowDeselect=!0,this.handleSearchWithDebounce=n((t=>{this.isLoading=!0,this.fwLoading.emit({isLoading:this.isLoading}),this.search(t,this.selectOptions).then((t=>{this.filteredOptions=(null==t?void 0:t.length)>0?this.serializeData(t):[{text:this.notFoundText,disabled:!0}],this.isLoading=!1,this.fwLoading.emit({isLoading:this.isLoading})}))}),this,this.debounceTimer)}fwSelectedHandler(t){const{value:i,selected:s}=t.detail;if(s){const t=this.filteredOptions.filter((t=>t.value===i))[0];this.selectedOptionsState=this.multiple?[...this.selectedOptionsState,t]:[t]}else this.selectedOptionsState=this.multiple?this.selectedOptionsState.filter((t=>t.value!==i)):[];this.isInternalValueChange=!0,this.setValue(this.selectedOptionsState)}onKeyDown(t){switch(t.key){case"ArrowDown":this.arrowKeyCounter=r(this.arrowKeyCounter,this.optionRefs.length-1),this.optionRefs[this.arrowKeyCounter].setFocus(),t.preventDefault(),t.stopPropagation();break;case"ArrowUp":this.arrowKeyCounter=a(this.arrowKeyCounter,this.optionRefs.length-1),this.optionRefs[this.arrowKeyCounter].setFocus(),t.preventDefault(),t.stopPropagation()}}async clearFilter(){this.filteredOptions=this.selectOptions,this.searchable&&(this.searchInput.value="")}async scrollToLastSelected(){var t;this.filteredOptions.length>0&&this.valueExists()&&(null===(t=this.container.querySelector(`fw-select-option[id='${this.host.id}-option-${this.getLastSelectedValue()}']`))||void 0===t||t.scrollIntoView({block:"nearest"}))}async getSelectedOptions(){return this.selectedOptionsState}async setSelectedValues(t){this.options&&(this.selectedOptionsState=this.options.filter((i=>this.isValueEqual(t,i))),this.isInternalValueChange=!0,this.setValue(this.selectedOptionsState))}async setSelectedOptions(t){this.selectedOptionsState=t,this.isInternalValueChange=!0,this.setValue(t)}async setFocus(){this.optionRefs=[...this.container.getElementsByTagName("fw-select-option")];const t=this.getLastSelectedValue();if(t&&this.optionRefs.length>0){const i=this.optionRefs.findIndex((i=>i.value===t));this.arrowKeyCounter=-1===i?0:i}this.optionRefs[this.arrowKeyCounter].setFocus()}onOptionsChange(t){this.setDataSource(t)}onValueChange(t,i){JSON.stringify(t)!==JSON.stringify(i)&&(t?this.validateValue(t):t=this.multiple?[]:"",this.selectOptions=this.selectOptions.map((i=>(i.selected=this.isValueEqual(t,i),i))),this.isInternalValueChange||(this.selectedOptionsState=(this.options.length>0?this.options:this.selectedOptionsState).filter((i=>this.isValueEqual(t,i)))),this.fwChange.emit({value:t,meta:{selectedOptions:this.selectedOptionsState}}),this.isInternalValueChange=!1)}onFilterTextChange(t){this.handleSearchWithDebounce(t)}valueExists(){return this.multiple?this.value.length>0:!!this.value}validateValue(t){if(this.multiple&&!Array.isArray(t))throw new Error("Value must be a array for multi-select");if(!this.multiple&&"string"!=typeof t&&"number"!=typeof t)throw new Error("Value must be a string for single-select")}getLastSelectedValue(){if(this.valueExists())return this.multiple?this.value.slice(-1)[0]:this.value}setSelectedOptionsByValue(t){if(!this.options)throw new Error("Options must be passed if value is set");this.selectedOptionsState=this.options.filter((i=>this.isValueEqual(t,i)))}serializeData(t){return t.map((t=>{var i;return Object.assign(Object.assign({},t),{checkbox:t.checkbox||this.checkbox,variant:t.variant||this.variant,selected:this.isValueEqual(this.value,t)||t.selected,disabled:t.disabled||this.multiple&&(null===(i=this.value)||void 0===i?void 0:i.length)>=this.max,allowDeselect:this.allowDeselect})}))}isValueEqual(t,i){return this.multiple?t.includes(i.value):t===i.value}setValue(t){this.value=(null==t?void 0:t.length)>0?this.multiple?t.map((t=>t.value)):t[0].value:this.multiple?[]:""}setDataSource(t){this.selectOptions=t.length>0?this.serializeData(t):[{text:this.noDataText,disabled:!0}],this.filteredOptions=this.selectOptions}renderSelectOptions(t){return t.map((t=>s("fw-select-option",Object.assign({id:`${this.host.id}-option-${t.value}`,key:t.value},t))))}renderSearchInput(){return s("fw-input",{ref:t=>this.searchInput=t,placeholder:this.searchText,onInput:()=>this.handleSearchWithDebounce(this.searchInput.value)})}componentWillLoad(){if(this.validateValue(this.value),this.selectedOptions.length>0?(this.selectedOptionsState=this.selectedOptions,this.value=this.multiple?this.selectedOptionsState.map((t=>t.value)):this.selectedOptionsState[0].value):this.valueExists()?this.setSelectedOptionsByValue(this.value):this.setValue([]),this.multiple&&"string"==typeof this.value)throw Error("value must be a array of string when multiple is true");this.setDataSource(this.options)}render(){return s("div",{class:"container",ref:t=>{this.container=t}},this.searchable&&this.renderSearchInput(),this.renderSelectOptions(this.filteredOptions))}get host(){return e(this)}static get watchers(){return{options:["onOptionsChange"],value:["onValueChange"],filterText:["onFilterTextChange"]}}};f([d({keyName:"search.noItemsFound"})],u.prototype,"notFoundText",void 0),f([d({keyName:"search.search"})],u.prototype,"searchText",void 0),f([d({keyName:"search.noDataAvailable"})],u.prototype,"noDataText",void 0),u.style=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.container{margin:0px;padding:12px 8px 8px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}';var b=function(t,i,s,e){var o,n=arguments.length,a=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,i,s,e);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(n<3?o(a):n>3?o(i,s,a):o(i,s))||a);return n>3&&a&&Object.defineProperty(i,s,a),a};let x=class{constructor(s){t(this,s),this.fwChange=i(this,"fwChange",7),this.fwFocus=i(this,"fwFocus",7),this.fwBlur=i(this,"fwBlur",7),this.tagRefs=[],this.tagArrowKeyCounter=0,this.changeEmittable=()=>!this.disabled,this.innerOnFocus=t=>{this.changeEmittable()&&(this.hasFocus=!0,this.fwFocus.emit(t))},this.innerOnClick=()=>{this.setFocus(),"mail"!==this.variant&&this.openDropdown()},this.innerOnBlur=t=>{this.changeEmittable()&&(this.hasFocus=!1,this.fwBlur.emit({event:t,name:this.name}))},this.openDropdown=()=>{!this.isExpanded&&this.changeEmittable()&&this.popover.show()},this.closeDropdown=()=>{this.isExpanded&&this.changeEmittable()&&this.popover.hide()},this.isExpanded=!1,this.hasFocus=!1,this.didInit=!1,this.selectedOptionsState=[],this.isLoading=!1,this.focusedOptionId="",this.hasHintTextSlot=!1,this.hasWarningTextSlot=!1,this.hasErrorTextSlot=!1,this.label="",this.name="",this.type="text",this.state="normal",this.readonly=!1,this.required=!1,this.forceSelect=!0,this.disabled=!1,this.multiple=!1,this.max=Number.MAX_VALUE,this.variant="standard",this.optionsVariant="standard",this.searchable=!0,this.checkbox=!1,this.notFoundText="",this.noDataText="",this.debounceTimer=300,this.selectedOptions=[],this.sameWidth=!0,this.optionsPlacement="bottom",this.tagVariant="standard",this.caret=!0,this.labelledBy="",this.allowDeselect=!0,this.hintText="",this.warningText="",this.errorText="",this.tagContainerKeyDown=t=>{switch(t.key){case"Escape":this.innerOnBlur(t),this.closeDropdown();break;case"ArrowLeft":this.tagArrowKeyCounter--,this.tagArrowKeyCounter>=0?this.focusOnTag(this.tagArrowKeyCounter):this.tagArrowKeyCounter=0,t.stopImmediatePropagation();break;case"ArrowRight":this.tagArrowKeyCounter++,this.tagArrowKeyCounter>=this.value.length?this.selectInput.focus():this.focusOnTag(this.tagArrowKeyCounter),t.stopImmediatePropagation()}}}onDropdownClose(){this.clearInput(),this.isExpanded=!1,this.multiple&&this.selectInput.focus()}onDropdownOpen(){this.isExpanded=!0}onLoading(t){this.isLoading=t.detail.isLoading,"mail"!==this.variant||this.isLoading||this.selectInput.value&&this.openDropdown()}fwSelectedHandler(t){var i,s;"FW-LIST-OPTIONS"===t.composedPath()[0].tagName&&(this.selectedOptionsState=null===(s=null===(i=t.detail)||void 0===i?void 0:i.meta)||void 0===s?void 0:s.selectedOptions,this.value=t.detail.value,this.renderInput(),this.multiple&&"mail"!==this.variant||this.closeDropdown(),t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault(),this.fwChange.emit(this.selectedOptionsState.length>0?{name:this.name,value:this.value,meta:{selectedOptions:this.selectedOptionsState}}:{name:this.name,value:this.value,meta:{shouldValidate:!1,selectedOptions:this.selectedOptionsState}}))}fwCloseHandler(t){this.value=this.value.filter((i=>i!==t.detail.value))}onKeyDown(t){switch(t.key){case"ArrowDown":this.innerOnClick(),this.fwListOptions.setFocus(),t.preventDefault(),t.stopPropagation();break;case"ArrowLeft":case"Backspace":this.multiple&&""===this.selectInput.value&&this.focusOnTagContainer();break;case"Escape":this.innerOnBlur(t),this.closeDropdown();break;case"Tab":this.closeDropdown()}}onOptionFocus(t){"FW-SELECT-OPTION"===t.composedPath()[0].tagName&&(this.focusedOptionId=t.detail.id)}onOptionBlur(t){"FW-SELECT-OPTION"===t.composedPath()[0].tagName&&(this.focusedOptionId="")}optionsChangedHandler(){this.renderInput()}async getSelectedItem(){return this.fwListOptions.getSelectedOptions()}async setSelectedValues(t){this.fwListOptions.setSelectedValues(t),this.renderInput()}async setSelectedOptions(t){this.fwListOptions.setSelectedOptions(t),this.renderInput()}async setFocus(){var t;null===(t=this.selectInput)||void 0===t||t.focus()}focusOnTagContainer(){this.tagRefs=[...this.tagContainer.getElementsByTagName("fw-tag")],this.tagArrowKeyCounter=this.value.length-1,this.focusOnTag(this.tagArrowKeyCounter)}focusOnTag(t){var i;null===(i=this.tagRefs[t])||void 0===i||i.setFocus()}clearInput(){this.multiple||!this.value?this.selectInput.value="":this.renderInput()}isValueEqual(t,i){return this.multiple?t.includes(i.value):t===i.value}valueExists(){return this.value&&(this.multiple?this.value.length>0:!!this.value)}onInput(){this.selectInput.value?(this.searchValue=this.selectInput.value.toLowerCase(),"mail"!==this.variant&&this.openDropdown()):"mail"===this.variant&&this.closeDropdown()}renderTags(){if(this.multiple&&Array.isArray(this.value))return this.selectedOptionsState.map((t=>{if(this.isValueEqual(this.value,t))return s("fw-tag",{variant:this.tagVariant,graphicsProps:t.graphicsProps,text:t.text,disabled:t.disabled,value:t.value,focusable:!1})}))}renderInput(){this.selectedOptionsState.length>0?this.selectInput&&(this.selectInput.value="",this.selectInput.value=this.multiple?this.selectInput.value:this.selectedOptionsState[0].text||""):this.selectInput&&(this.selectInput.value="")}componentWillLoad(){var t,i;this.handleSlotChange(),"mail"===this.variant&&(this.caret=!1,this.multiple=!0);const s=Array.from(this.host.querySelectorAll("fw-select-option"));if(this.selectedOptions.length>0&&(this.selectedOptionsState=this.selectedOptions,this.value=this.multiple?this.selectedOptions.map((t=>t.value)):this.selectedOptions[0].value),this.multiple){if(this.multiple&&"string"==typeof this.value)throw Error("value must be a array of string when multiple is true");this.value=(null===(t=this.value)||void 0===t?void 0:t.length)>0?this.value:[]}else this.value=this.value?this.value:"";const e=s.map((t=>({html:t.html,text:t.html?t.optionText:t.textContent,value:t.value,selected:this.isValueEqual(this.value,t)||t.selected,disabled:t.disabled||this.disabled,htmlContent:t.html?t.innerHTML:""})));if(this.dataSource=0===e.length?this.options:e,!this.multiple&&this.value&&0===this.selectedOptions.length?this.selectedOptionsState=this.dataSource.filter((t=>this.value===t.value)):this.multiple&&this.value.length!==this.selectedOptions.length&&(this.selectedOptionsState=this.dataSource.filter((t=>this.isValueEqual(this.value,t)))),(null===(i=this.dataSource)||void 0===i?void 0:i.length)>0){const t=this.dataSource.filter((t=>t.selected)),i=t.map((t=>t.value)),s=this.multiple?i:i[0];i.length>0&&JSON.stringify(this.value)!==JSON.stringify(s)&&(this.value=s,this.selectedOptionsState=t)}this.host.addEventListener("focus",this.setFocus),this.hostId=this.host.id||""}componentDidLoad(){this.renderInput(),this.didInit=!0}disconnectedCallback(){var t;this.host.removeEventListener("focus",this.setFocus),null===(t=this.host.shadowRoot)||void 0===t||t.removeEventListener("slotchange",this.handleSlotChange)}expandWatcher(t){var i,s,e,o;if("button"===this.variant){const n=null===(o=null===(e=null===(s=null===(i=this.host.shadowRoot)||void 0===i?void 0:i.querySelector(".select-container"))||void 0===s?void 0:s.querySelector("fw-button"))||void 0===e?void 0:e.shadowRoot)||void 0===o?void 0:o.querySelector("fw-icon");n&&(n.name=t?"chevron-up":"chevron-down")}}handleSlotChange(){this.hasHintTextSlot=h(this.host,"hint-text"),this.hasWarningTextSlot=h(this.host,"warning-text"),this.hasErrorTextSlot=h(this.host,"error-text")}getAriaDescribedBy(){return"normal"===this.state?`hint-${this.name}`:"error"===this.state?`error-${this.name}`:"warning"===this.state?`warning-${this.name}`:null}render(){const{host:t,name:i,value:e}=this;return l(t,i,e),s(p,{inputId:this.name,label:this.label,labelId:`${this.label}-${this.name}`,state:this.state,hintTextId:`hint-${this.name}`,hintText:this.hintText,hasHintTextSlot:this.hasHintTextSlot,errorTextId:`error-${this.name}`,errorText:this.errorText,hasErrorTextSlot:this.hasErrorTextSlot,warningTextId:`warning-${this.name}`,warningText:this.warningText,hasWarningTextSlot:this.hasWarningTextSlot,required:this.required},s("div",{"aria-disabled":this.disabled,class:{"has-focus":this.hasFocus}},s("div",{class:{"select-container":!0,[this.state]:!0},role:"combobox","aria-controls":`${this.hostId}-listbox`,"aria-haspopup":"listbox","aria-expanded":this.isExpanded,"aria-owns":`${this.hostId}-listbox`},s("fw-popover",{distance:"8",trigger:"manual",ref:t=>this.popover=t,"same-width":this.sameWidth,placement:this.optionsPlacement},s("div",{slot:"popover-trigger",class:{"input-container":"button"!==this.variant,[this.state]:!0,"select-disabled":this.disabled},onClick:()=>this.innerOnClick(),onKeyDown:c(this.innerOnClick)},"button"===this.variant?s("fw-button",{style:{"--fw-button-label-vertical-padding":"7px"},"show-caret-icon":!0,id:`${this.hostId}-btn`,color:"secondary",class:this.host.classList.value.includes("first")?"fw-button-group__button--first":"fw-button-group__button--last"},this.value):s(o,null,s("div",{class:"input-container-inner"},this.multiple&&s("div",{class:"tag-container",onFocus:this.focusOnTagContainer,ref:t=>this.tagContainer=t,onKeyDown:this.tagContainerKeyDown},this.renderTags()),s("input",{ref:t=>this.selectInput=t,class:{"multiple-select":this.multiple},autoComplete:"off",disabled:this.disabled,name:this.name,id:this.name,placeholder:this.valueExists()?"":this.placeholder||"",readOnly:this.readonly,required:this.required,type:this.type,value:"","aria-autocomplete":"list","aria-activedescendant":this.focusedOptionId,onInput:()=>this.onInput(),onFocus:t=>this.innerOnFocus(t),onBlur:t=>this.innerOnBlur(t),"aria-invalid":"error"===this.state,"aria-describedby":`hint-${this.name} error-${this.name}`})),this.isLoading?s("fw-spinner",{size:"small"}):this.caret&&s("span",{class:{"dropdown-status-icon":!0,expanded:this.isExpanded}},s("fw-icon",{name:"chevron-down",size:8,library:"system"})))),s("fw-list-options",{ref:t=>this.fwListOptions=t,id:`${this.hostId}-listbox`,role:"listbox","aria-labelledby":this.labelledBy||`${this.hostId}-label`,notFoundText:this.notFoundText,debounceTimer:this.debounceTimer,noDataText:this.noDataText,search:this.search,selectedOptions:this.selectedOptions,variant:this.optionsVariant,"filter-text":this.searchValue,options:this.dataSource,value:this.value,multiple:this.multiple,max:this.max,checkbox:this.checkbox,allowDeselect:this.allowDeselect,slot:"popover-content"})))))}get host(){return e(this)}static get watchers(){return{dataSource:["optionsChangedHandler"],isExpanded:["expandWatcher"]}}};b([d({keyName:"search.noItemsFound"})],x.prototype,"notFoundText",void 0),b([d({keyName:"search.noDataAvailable"})],x.prototype,"noDataText",void 0),x.style=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.field-control{position:relative}.field-control-label{display:block;font-size:12px;color:var(--fw-input-label-color, #475867);font-weight:600;margin-bottom:4px;padding-left:2px;line-height:20px}.field-control-label.required::after{content:"*";position:relative;display:inline-block;top:2px;font-size:14px;color:#d72d30;padding-left:2px;font-weight:700}.field-control-hint-text{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", "Roboto", "Helvetica Neue", arial, sans-serif;font-size:12px;line-height:20px;margin-top:4px;margin-bottom:0;color:var(--fw-input-hint-color, #acb6be);position:inherit;display:block;padding-left:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-error-text{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", "Roboto", "Helvetica Neue", arial, sans-serif;font-size:12px;line-height:20px;margin-top:4px;margin-bottom:0;color:var(--fw-input-error-color, #d72d30);position:inherit;display:block;padding-left:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-warning-text{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", "Roboto", "Helvetica Neue", arial, sans-serif;font-size:12px;line-height:20px;margin-top:4px;margin-bottom:0;color:var(--fw-input-warning-color, #f8ab59);position:inherit;display:block;padding-left:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host{display:block}.input-container{width:calc(100% - 10px);border:var(--fw-select-border, 1px solid #cfd7df);border-radius:var(--fw-select-border-radius, 4px);padding-left:10px;background-color:#fff;-webkit-box-shadow:none;box-shadow:none;min-height:22px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;}.input-container .input-container-inner{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-wrap:wrap;flex-wrap:wrap}.input-container .input-container-inner .tag-container{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input-container .input-container-inner .tag-container fw-tag{margin:4px 4px 4px 0px}.input-container .input-container-inner input{-ms-flex-positive:1;flex-grow:1;border:none;font-size:14px;font-weight:500;letter-spacing:0;line-height:1.4;background-color:#fff;min-width:20px;min-height:22px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;margin:4px 0px}.input-container .input-container-inner input:focus{border:none;outline:none}.input-container .input-container-inner input.multi-select{width:auto}.input-container .input-container-inner input:disabled{background-color:#f5f7f9 !important;border-color:transparent;cursor:not-allowed}.input-container fw-spinner{margin-right:8px}@media (prefers-reduced-motion){.input-container:hover,.input-container:focus{-webkit-transition:none;transition:none}}.input-container:hover,.input-container:focus{border:1px #475867 solid;-webkit-transition:0.2s linear;transition:0.2s linear}.input-container.error{border-color:#d72d30}.input-container.error>span.help-block{color:#d72d30}.input-container.warning{border-color:#f8ab59}.input-container.warning>span.help-block{color:#f8ab59}.input-container.select-disabled{color:#ebeff3;background-color:#f5f7f9 !important;border-style:solid;cursor:not-allowed}.input-container.select-disabled:hover{border:1px solid #cfd7df}:host(.has-focus) .input-container{outline:none;background:#fff;border:1px solid transparent;-webkit-box-shadow:0 0 0 2px #2c5cc5;box-shadow:0 0 0 2px #2c5cc5}:host(.has-focus) .input-container.error{border-color:#d72d30;-webkit-box-shadow:none;box-shadow:none}:host(.has-focus) .input-container.error>span.help-block{color:#d72d30}:host(.has-focus) .input-container.warning{border-color:#f8ab59;-webkit-box-shadow:0 0 0 1px #f8ab59;box-shadow:0 0 0 1px #f8ab59}:host(.has-focus) .input-container.warning>span.help-block{color:#f8ab59}.select-container{margin-bottom:var(--fw-select-margin-bottom, 0px);width:inherit;height:inherit;position:relative}.select-container .dropdown{z-index:99}.select-container .dropdown-status-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;min-width:20px;min-height:20px;-webkit-transition:all 0.15s;transition:all 0.15s;--icon-color:$color-elephant-800}.select-container .help-block{font-size:12px;margin-top:4px;line-height:20px;color:#acb6be;position:inherit;margin-bottom:0;display:block;padding-left:2px}.select-container .dropdown-status-icon.expanded{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.select-container.error{border-color:#d72d30}.select-container.error>span.help-block{color:#d72d30}.select-container.warning{border-color:#f8ab59}.select-container.warning>span.help-block{color:#f8ab59}::-webkit-input-placeholder{color:#92a2b1;opacity:1}::-moz-placeholder{color:#92a2b1;opacity:1}:-ms-input-placeholder{color:#92a2b1;opacity:1}::-ms-input-placeholder{color:#92a2b1;opacity:1}::placeholder{color:#92a2b1;opacity:1}:-ms-input-placeholder{color:#92a2b1}::-ms-input-placeholder{color:#92a2b1}';let g=class{constructor(s){t(this,s),this.fwSelected=i(this,"fwSelected",7),this.fwFocus=i(this,"fwFocus",7),this.fwBlur=i(this,"fwBlur",7),this.selected=!1,this.disabled=!1,this.html=!1,this.variant="standard",this.checkbox=!1,this.allowDeselect=!0}async setFocus(){this.rowContainer.focus()}onKeyDown(t){switch(t.key){case"Enter":this.onOptionSelected()}}onOptionSelected(){if(this.disabled)return;if(this.selected&&!this.allowDeselect)return;this.selected=!this.selected;const{value:t,selected:i}=this;this.fwSelected.emit({value:t,selected:i})}renderInnerHtml(){const t=this.createDescription(),i=this.checkbox?this.createCheckbox():"",e=s("span",{class:"selected-icon"},this.selected&&s("fw-icon",{name:"check",size:12,color:"#2C5CC5",library:"system"}));switch(this.variant){case"standard":return s(o,null,i,t,e);case"icon":return s(o,null,i,this.createIcon(),t,e);case"avatar":return s(o,null,i,this.createAvatar(),t,e)}}createDescription(){return this.subText?s("div",{class:"description "+("icon"===this.variant?"icon-margin ":"standard-margin ")},s("span",{class:"description-text"},this.text),s("span",{class:"description-subText"},this.subText)):s("span",{class:"description "+("icon"===this.variant?"icon-margin ":"standard-margin ")},this.text)}createIcon(){return s("fw-icon",Object.assign({},this.graphicsProps))}createCheckbox(){return s("fw-checkbox",{checked:this.selected})}createAvatar(){return s("fw-avatar",Object.assign({size:"small"},this.graphicsProps))}render(){return s("div",{role:"option",tabindex:"-1","aria-selected":this.selected,ref:t=>this.rowContainer=t,class:"select-option "+(this.selected&&!this.checkbox?"selected ":"")+(this.disabled?"disabled ":"")+(this.html?"":(this.subText?"multi-line ":"single-line ")+this.variant+" select-center"),onMouseDown:()=>this.onOptionSelected(),onFocus:()=>this.fwFocus.emit({id:this.host.id}),onBlur:t=>this.fwBlur.emit(t)},this.html?"":this.text?this.renderInnerHtml():s("slot",null))}componentDidLoad(){this.html&&(this.rowContainer.innerHTML=this.htmlContent)}get host(){return e(this)}};g.style=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.select-center{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.select-option{cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:#12344d;font-size:14px;border-radius:4px;list-style:none;line-height:1.45;word-break:break-word;word-wrap:break-word;position:relative;margin-bottom:4px;padding-right:8px}.select-option.single-line{padding-top:6px;padding-bottom:6px}.select-option.multi-line{padding-top:8px;padding-bottom:8px}.select-option.standard{padding-left:0px}.select-option.icon{padding-left:10px}.select-option.avatar{padding-left:4px}.select-option.selected{font-weight:600;background-color:#e5f2fd}.select-option.selected:hover,.select-option.selected:focus{background-color:#e5f2fd}.select-option:hover{background-color:#ebeff3}.select-option:focus{background-color:#ebeff3;outline:#2c5cc5 auto 1px}.select-option.disabled{color:#92a2b1;position:relative;cursor:not-allowed;background-color:#f5f7f9}.select-option .description{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.select-option .description-text{font-weight:600}.select-option .description-subText{font-weight:400;font-size:12px;color:#475867}.select-option .description.icon-margin{margin-left:18px}.select-option .description.standard-margin{margin-left:12px}.select-option .selected-icon{min-width:24px;min-height:24px;margin-left:auto;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.select-option fw-icon{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}';let m=class{constructor(s){t(this,s),this.fwClosed=i(this,"fwClosed",7),this.variant="standard",this.graphicsProps={},this.closable=!0,this.focusable=!0,this.removeTag=()=>{if(this.disabled||!this.closable)return;const{value:t,text:i}=this;this.fwClosed.emit({value:t,text:i})}}onKeyDown(t){switch(t.key){case"Backspace":this.removeTag(),t.preventDefault()}}async setFocus(){this.tagContainer.focus()}renderContent(){switch(this.variant){case"standard":return s("span",{class:"content"},this.text);case"avatar":return[s("fw-avatar",Object.assign({size:"xsmall"},this.graphicsProps)),s("span",{class:"content"},this.text)]}}render(){return s("div",{role:"button",tabindex:"-1",class:`tag tag-${this.variant}`,ref:t=>this.tagContainer=t},this.renderContent(),this.closable&&s("span",{role:"button",tabIndex:this.focusable?0:-1,class:`remove-btn ${this.variant} ${this.disabled?"disabled":""}`,onClick:()=>this.removeTag(),onKeyDown:c(this.removeTag)},s("fw-icon",{name:"cross",size:8,library:"system"})))}get host(){return e(this)}};m.style=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.tag{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;color:#12344d;font-size:14px;word-break:break-all}.tag .content{line-height:20px;vertical-align:middle}.tag-standard{padding:2px 2px 2px 8px;border-radius:4px;font-weight:600;background-color:#ebeff3}.tag-avatar{padding:4px;border-radius:24px;font-weight:400;background:-webkit-gradient(linear, left top, left bottom, color-stop(2.56%, #f5f7f9), color-stop(95.75%, #f3f5f7));background:linear-gradient(180deg, #f5f7f9 2.56%, #f3f5f7 95.75%)}.tag-avatar fw-avatar{margin-right:8px}.tag .remove-btn{margin-left:8px;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:#264966;font-size:16px}.tag .remove-btn.standard{min-height:20px;min-width:20px;border-radius:4px}.tag .remove-btn.avatar{min-height:24px;min-width:24px;border-radius:16px}.tag .remove-btn.avatar:hover,.tag .remove-btn.avatar:focus{background-color:#fff;cursor:pointer}.tag .remove-btn:hover,.tag .remove-btn:focus{background-color:#cfd7df;cursor:pointer}.tag .remove-btn.disabled{color:#447093;background-color:#ebeff3;cursor:not-allowed}';export{u as fw_list_options,x as fw_select,g as fw_select_option,m as fw_tag}