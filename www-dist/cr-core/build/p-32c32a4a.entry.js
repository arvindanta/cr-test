import{r as e,h as s,e as a,i}from"./p-8adda833.js";let t=class{constructor(s){e(this,s),this.draggable=!1,this.disabled=!1,this.showDragIcon=!0}componentDidLoad(){var e,s;this.pinned||(null===(e=this.dragIcon)||void 0===e||e.addEventListener("mousedown",this.toggleDraggable.bind(this)),null===(s=this.dragIcon)||void 0===s||s.addEventListener("mouseout",this.toggleDraggable.bind(this)))}toggleDraggable(){this.draggable=!this.draggable}disconnectedCallback(){var e,s;null===(e=this.dragIcon)||void 0===e||e.removeEventListener("mousedown",this.toggleDraggable),null===(s=this.dragIcon)||void 0===s||s.removeEventListener("mouseout",this.toggleDraggable)}render(){return s(a,{draggable:this.draggable},s("div",{class:{"drag-item":!0},draggable:this.draggable},this.showDragIcon&&s("span",{class:"drag-item__prefix"},s("fw-icon",{class:{"drag-icon":!0,drag:!this.pinned},name:this.pinned?"lock":"drag",ref:e=>this.dragIcon=e})),s("span",{class:"drag-item__label"},s("slot",null)),s("span",{class:"drag-item__suffix"},s("slot",{name:"suffix"}))))}get el(){return i(this)}};t.style=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block}.drag-item{display:-ms-flexbox;display:flex;background:#ffffff;border:1px solid #ebeff3;-webkit-box-shadow:0px 2px 4px rgba(18, 52, 77, 0.06);box-shadow:0px 2px 4px rgba(18, 52, 77, 0.06);border-radius:4px;padding:8px 12px;-ms-flex-align:center;align-items:center;margin:8px 0px}.drag-item .drag-item__label{-ms-flex:1 1 auto;flex:1 1 auto}.drag-item .drag-item__prefix{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.drag-item .drag-item__suffix{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.drag-item .drag-icon{padding-right:12px}.drag-item .drag-icon.drag:hover,.drag-item .drag-icon.drag:focus{cursor:-webkit-grab;cursor:grab}';export{t as fw_drag_item}