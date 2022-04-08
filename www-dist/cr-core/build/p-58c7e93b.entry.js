import{r as t,c as i,h as o,i as e}from"./p-8adda833.js";import{i as s}from"./p-627873c4.js";import{i as a}from"./p-1bba5d39.js";var r=function(t,i,o,e){var s,a=arguments.length,r=a<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,o):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,i,o,e);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(a<3?s(r):a>3?s(i,o,r):s(i,o))||r);return a>3&&r&&Object.defineProperty(i,o,r),r};let l=class{constructor(o){t(this,o),this.fwSubmit=i(this,"fwSubmit",7),this.fwOpen=i(this,"fwOpen",7),this.fwClose=i(this,"fwClose",7),this.firstFocusElement=null,this.lastFocusElement=null,this.hasCloseIconButton=!0,this.icon="",this.size="standard",this.submitText="",this.cancelText="",this.submitDisabled=!1,this.submitColor="primary",this.hideFooter=!1,this.slider=!1,this.isOpen=!1,this.accessibilityAdded=!1,this.escapeHandler=null,this.styleVariation={closeColor:{modal:"#5D7587",slider:"#FFFFFF"},closeSize:{modal:10,slider:12}}}componentWillLoad(){if(this.modalTitle||(this.modalTitle=this.el.querySelector("fw-modal-title")),this.modalFooter||(this.modalFooter=this.el.querySelector("fw-modal-footer"),this.modalFooter&&(this.modalFooter.submit=this.submit.bind(this),this.modalFooter.close=this.close.bind(this))),this.modalContent||(this.modalContent=this.el.querySelector("fw-modal-content")),this.hideFooter&&this.modalFooter&&this.modalFooter.parentNode.removeChild(this.modalFooter),!this.modalContent&&(this.modalTitle||this.modalFooter))throw new Error("Composition Error: fw-modal component must have fw-modal-content component when          either fw-modal-header or fw-modal-footer components are used for modal composition")}visibilityChange(t){t?(document.body.style.overflow="hidden",this.addAccesibilityEvents(),this.fwOpen.emit()):(document.body.style.overflow="auto",this.removeAccesibilityEvents(),this.fwClose.emit())}async close(){return this.isOpen=!1,!0}async open(){return this.isOpen=!0,!0}submit(){this.fwSubmit.emit()}addAccesibilityEvents(){if(!this.accessibilityAdded){const t=(()=>{let t=[];const i=(o,e=!0)=>{e&&(t=[]),(o=o.shadowRoot?o.shadowRoot:o).querySelectorAll("*").forEach((o=>{s(o)?t.push(o):"SLOT"===o.nodeName?o.assignedElements({flatten:!0}).forEach((t=>i(t,!1))):o.shadowRoot&&i(o,!1)}))};return i(this.el),t})();if(t.length&&(this.firstFocusElement=t[0],this.lastFocusElement=t[t.length-1],this.lastFocusElement.addEventListener("keydown",(t=>{!t.shiftKey&&9===t.keyCode&&this.focusElement(this.firstFocusElement)})),this.firstFocusElement.addEventListener("keydown",(t=>{t.shiftKey&&9===t.keyCode&&this.focusElement(this.lastFocusElement)}))),this.firstFocusElement){const t=this.el.shadowRoot.querySelector(".modal");t&&t.addEventListener("animationend",(()=>{this.isOpen&&this.focusElement(this.firstFocusElement)}))}this.accessibilityAdded=!0}this.escapeHandler=(t=>{27===t.keyCode&&(this.isOpen=!1)}).bind(this),document.addEventListener("keydown",this.escapeHandler)}removeAccesibilityEvents(){this.escapeHandler&&(document.removeEventListener("keydown",this.escapeHandler),this.escapeHandler=null)}focusElement(t){setTimeout((()=>t.focus()),1)}renderIcon(){return o("fw-icon",{class:"icon",name:this.icon,size:16})}renderTitle(){return o("fw-modal-title",{icon:this.icon,titleText:this.titleText,description:this.description})}renderContent(){return o("fw-modal-content",null,o("slot",null))}renderFooter(){return o("fw-modal-footer",{submitText:this.submitText,cancelText:this.cancelText,submitDisabled:this.submitDisabled,submitColor:this.submitColor,submit:this.submit.bind(this),close:this.close.bind(this)})}render(){const t=this.styleVariation;return o("div",{class:{"modal-overlay":!0,visible:this.isOpen,slider:this.slider}},o("div",{class:{modal:!0,[this.size]:!0},"aria-modal":"true"},this.hasCloseIconButton&&o("button",{class:"close-btn",onClick:()=>this.close()},o("fw-icon",{name:"cross-big",library:"system",color:this.slider?t.closeColor.slider:t.closeColor.modal,size:this.slider?t.closeSize.slider:t.closeSize.modal})),o("div",{class:"modal-container"},this.modalTitle?"":this.titleText?this.renderTitle():"",this.modalContent?o("slot",null):this.renderContent(),this.hideFooter||this.modalFooter?"":this.renderFooter())))}get el(){return e(this)}static get watchers(){return{isOpen:["visibilityChange"]}}};r([a({keyName:"modal.ok"})],l.prototype,"submitText",void 0),r([a({keyName:"modal.cancel"})],l.prototype,"cancelText",void 0),l.style=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.modal-overlay{height:100vh;width:100vw;position:fixed;top:0;right:0;bottom:0;left:0;display:none;z-index:990;background-color:rgba(18, 52, 77, 0.5);-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all 0.3s linear;transition:all 0.3s linear}.modal{position:relative;display:-ms-flexbox;display:flex;max-height:70vh;background:#fff;-webkit-box-shadow:0px 2px 18px rgba(18, 52, 77, 0.2);box-shadow:0px 2px 18px rgba(18, 52, 77, 0.2);border-radius:4px;z-index:999;-webkit-animation:"modal-entry" 0.5s 1;animation:"modal-entry" 0.5s 1}.modal .modal-container{position:relative;width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.modal .modal-container .content{padding:0px 32px 32px;overflow:visible;-webkit-box-sizing:border-box;box-sizing:border-box}.modal .close-btn{background-color:transparent;background-image:none;border:1px solid transparent;color:#264966;padding:4px 6px;min-width:16px;height:24px;position:absolute;top:8px;right:8px;-webkit-transition:all 0.3s;transition:all 0.3s;z-index:1}.modal .close-btn:hover,.modal .close-btn:focus{background-color:#ebeff3;border-radius:4px;border-color:#ebeff3;cursor:pointer}.standard{width:512px}.small{width:424px}.large{width:800px}.modal-overlay.slider{-ms-flex-pack:end;justify-content:flex-end}.modal-overlay.slider .modal{height:100vh;max-height:100vh;border-radius:0px;width:600px;-webkit-animation:"modal-entry-right" 0.5s 1;animation:"modal-entry-right" 0.5s 1}.modal-overlay.slider .modal .close-btn{height:24px;width:24px;-webkit-box-sizing:border-box;box-sizing:border-box;top:0px;right:600px;background-color:#12344d;border-radius:2px 0px 0px 2px;padding:0px;margin:0px;line-height:24px;text-align:center}.modal-overlay.slider .modal .close-btn:hover,.modal-overlay.slider .modal .close-btn:focus,.modal-overlay.slider .modal .close-btn:focus-visible{background-color:#12344d;border-radius:2px 0px 0px 2px;border-color:#12344d;outline:0px}.modal-overlay.slider .modal .close-btn:focus,.modal-overlay.slider .modal .close-btn:focus-visible{border:1px solid #2c5cc5;-webkit-box-shadow:#2c5cc5 0px 0px 0px 1px;box-shadow:#2c5cc5 0px 0px 0px 1px}.modal-overlay.slider .modal .close-btn fw-icon{height:12px;width:12px}.modal-overlay.slider .modal.small,.modal-overlay.slider .modal.standard,.modal-overlay.slider .modal.large{width:600px}.visible{display:-ms-flexbox;display:flex}@-webkit-keyframes modal-entry{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes modal-entry{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes modal-entry-right{0%{-webkit-transform:translateX(calc(100% - 520px));transform:translateX(calc(100% - 520px))}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes modal-entry-right{0%{-webkit-transform:translateX(calc(100% - 520px));transform:translateX(calc(100% - 520px))}100%{-webkit-transform:translateX(0);transform:translateX(0)}}';export{l as fw_modal}