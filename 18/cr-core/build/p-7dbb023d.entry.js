import{r as e,c as o,h as t,e as i,i as f}from"./p-8adda833.js";let r=class{constructor(t){e(this,t),this.fwToggled=o(this,"fwToggled",7),this.selected=!1,this.disabled=!1,this.baseClassName="fw-card-radio",this.type="card",this.selectable=!0,this.isCheckbox=!1,this.index=-1,this.value="",this.header="",this.description="",this.name=""}async setFocus(){this.button.focus()}listenClickHandler(e){if(this.disabled)return e.preventDefault(),void e.stopPropagation();if(e.detail&&e.detail>1)return;let o=!0,t=!1;this.selectable&&(this.isCheckbox?t=!this.selected:(t=!0,this.selected&&(o=!1))),this.selected=t,o&&this.fwToggled.emit({index:this.index,value:this.value,selected:t})}componentWillLoad(){switch(this.type){case"card":this.baseClassName="fw-toggle-card-button";break;case"icon":this.baseClassName="fw-toggle-icon-button"}}getClassName(){const e=this.baseClassName;let o=e;return this.selectable&&this.selected&&(o+=" "+e+"--selected",o+=this.isCheckbox?" "+e+"--selected--checkbox":" "+e+"--selected--radio"),this.disabled&&(o+=" "+e+"--disabled"),o}render(){const e=this.baseClassName,o=this.getClassName(),f=this.type;return t(i,{tabIndex:"-1"},"card"===f&&t("button",{ref:e=>this.button=e,class:o,"aria-disabled":this.disabled},t("label",{class:`${e}-header`},this.header),this.description&&""!==this.description&&t("p",{class:`${e}-description`},this.description),this.selected?t("span",{class:`${e}-tick`},t("fw-icon",{size:10,name:"check",color:"#FFFFFF",library:"system"})):""),"icon"===f&&t("button",{ref:e=>this.button=e,class:o,"aria-disabled":this.disabled},t("slot",{name:"toggle-icon"})),"custom"===f&&t("slot",null))}get host(){return f(this)}};r.style=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block}@media screen and (prefers-reduced-motion: reduce){.fw-toggle-card-button,.fw-toggle-card-button-tick,.fw-toggle-icon-button{-webkit-transition:none;transition:none}}.fw-toggle-card-button{width:var(--fw-toggle-group-button-card-width, 240px);height:var(--fw-toggle-group-button-card-height, 112px);-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;cursor:pointer;outline:0;padding:12px;border-radius:8px;background:#fff;border:1px solid #cfd7df;-webkit-box-shadow:inset 0px 1px 2px rgba(24, 50, 71, 0.05);box-shadow:inset 0px 1px 2px rgba(24, 50, 71, 0.05);-webkit-transition:background-color 0.3s;transition:background-color 0.3s;position:relative}.fw-toggle-card-button .fw-toggle-card-button-header{width:100%;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:20px;text-align:left;color:#12344d;font-size:16px;font-weight:600;margin-bottom:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:inline-block}.fw-toggle-card-button .fw-toggle-card-button-description{width:100%;margin:0;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:left;color:#475867;font-size:14px;font-weight:400;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;line-height:16px;max-height:var(--fw-toggle-group-button-card-description-max-height, 48px);-webkit-line-clamp:var(--fw-toggle-group-button-card-description-max-lines, 3);-webkit-box-orient:vertical}.fw-toggle-card-button .fw-toggle-card-button-tick{width:20px;height:20px;position:absolute;top:-8px;right:-8px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:50%;outline:2px solid #fff;background-color:#2c5cc5;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;opacity:1}.fw-toggle-card-button:hover{background:#ebeff3}.fw-toggle-card-button:focus{border:1px solid #e5f2fd;-webkit-box-shadow:0 0 0 1px #e5f2fd;box-shadow:0 0 0 1px #e5f2fd}.fw-toggle-card-button--disabled{cursor:not-allowed;opacity:0.6}.fw-toggle-card-button--selected{background:#e5f2fd;border:1px solid #bbdcfe;-webkit-box-shadow:0px 1px 4px #ebeff3;box-shadow:0px 1px 4px #ebeff3}.fw-toggle-card-button--selected .fw-toggle-card-button-tick{opacity:1}.fw-toggle-card-button--selected--checkbox{cursor:pointer}.fw-toggle-card-button--selected--checkbox:hover{background:#e5f2fd;border:1px solid #bbdcfe;-webkit-box-shadow:0px 1px 4px #ebeff3;box-shadow:0px 1px 4px #ebeff3}.fw-toggle-card-button--selected--checkbox:hover .fw-toggle-card-button-tick{opacity:0.5}.fw-toggle-card-button--selected--checkbox:active{background:#e5f2fd;border:1px solid #bbdcfe;-webkit-box-shadow:0px 1px 4px #ebeff3;box-shadow:0px 1px 4px #ebeff3}.fw-toggle-card-button--selected--checkbox:active .fw-toggle-card-button-tick{opacity:0.1}.fw-toggle-card-button--selected--checkbox:focus{background:#e5f2fd;border:1px solid #bbdcfe;-webkit-box-shadow:0px 1px 4px #ebeff3;box-shadow:0px 1px 4px #ebeff3}.fw-toggle-card-button--selected--checkbox:focus .fw-toggle-card-button-tick{opacity:1}.fw-toggle-card-button--selected--radio{cursor:unset;pointer-events:none}.fw-toggle-card-button--selected--radio:hover{background:#e5f2fd;border:1px solid #bbdcfe;-webkit-box-shadow:0px 1px 4px #ebeff3;box-shadow:0px 1px 4px #ebeff3}.fw-toggle-card-button--selected--radio:focus{background:#e5f2fd;border:1px solid #bbdcfe;-webkit-box-shadow:0px 1px 4px #ebeff3;box-shadow:0px 1px 4px #ebeff3}.fw-toggle-icon-button{width:var(--fw-toggle-group-button-icon-button-width, 42px);height:var(--fw-toggle-group-button-icon-button-height, 36px);-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;outline:0;padding:0;background:-webkit-gradient(linear, left top, left bottom, color-stop(2.56%, #ffffff), color-stop(95.75%, #f5f7f9));background:linear-gradient(180deg, #ffffff 2.56%, #f5f7f9 95.75%);border:1px solid #cfd7df;border-radius:4px;-webkit-transition:background-color 0.3s;transition:background-color 0.3s}.fw-toggle-icon-button:hover{background:#f5f7f9}.fw-toggle-icon-button:focus{background:-webkit-gradient(linear, left top, left bottom, color-stop(2.56%, #ffffff), color-stop(95.75%, #f5f7f9));background:linear-gradient(180deg, #ffffff 2.56%, #f5f7f9 95.75%);border:2px solid #2c5cc5;-webkit-box-shadow:0px 1px 4px #ebeff3;box-shadow:0px 1px 4px #ebeff3}.fw-toggle-icon-button--disabled{cursor:not-allowed;opacity:0.6}.fw-toggle-icon-button--selected{background:-webkit-gradient(linear, left top, left bottom, color-stop(2.56%, #ffffff), color-stop(95.75%, #f5f7f9));background:linear-gradient(180deg, #ffffff 2.56%, #f5f7f9 95.75%);border:2px solid #2c5cc5;-webkit-box-shadow:0px 1px 4px #ebeff3;box-shadow:0px 1px 4px #ebeff3}.fw-toggle-icon-button--selected--checkbox{cursor:pointer}.fw-toggle-icon-button--selected--checkbox:hover{background:#f5f7f9}.fw-toggle-icon-button--selected--checkbox:focus{background:-webkit-gradient(linear, left top, left bottom, color-stop(2.56%, #ffffff), color-stop(95.75%, #f5f7f9));background:linear-gradient(180deg, #ffffff 2.56%, #f5f7f9 95.75%);border:2px solid #2c5cc5;-webkit-box-shadow:0px 1px 4px #ebeff3;box-shadow:0px 1px 4px #ebeff3}.fw-toggle-icon-button--selected--radio{cursor:unset;pointer-events:none}.fw-toggle-icon-button--selected--radio:hover{background:-webkit-gradient(linear, left top, left bottom, color-stop(2.56%, #ffffff), color-stop(95.75%, #f5f7f9));background:linear-gradient(180deg, #ffffff 2.56%, #f5f7f9 95.75%);border:2px solid #2c5cc5;-webkit-box-shadow:0px 1px 4px #ebeff3;box-shadow:0px 1px 4px #ebeff3}.fw-toggle-icon-button--selected--radio:focus{background:-webkit-gradient(linear, left top, left bottom, color-stop(2.56%, #ffffff), color-stop(95.75%, #f5f7f9));background:linear-gradient(180deg, #ffffff 2.56%, #f5f7f9 95.75%);border:2px solid #2c5cc5;-webkit-box-shadow:0px 1px 4px #ebeff3;box-shadow:0px 1px 4px #ebeff3}';export{r as fw_toggle_group_button}