(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{949:function(t,e,a){"use strict";a.r(e);var n=a(47),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"drag-container-fw-drag-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#drag-container-fw-drag-container"}},[t._v("#")]),t._v(" Drag Container (fw-drag-container)")]),t._v(" "),a("p",[t._v("fw-drag-container can be used to reorder a list items via drag and drop or move/copy items between two fw-drag-container elements.")]),t._v(" "),a("h2",{attrs:{id:"demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[t._v("#")]),t._v(" Demo")]),t._v(" "),a("p",[t._v("fw-drag-container is a custom component with an open shadow that acts as a wrapper to the list items having "),a("code",[t._v("draggable")]),t._v(" attribute as true, that can be dragged and dropped with in the wrapper to change their order.")]),t._v(" "),a("vue-live",{attrs:{layoutProps:{lang:"html"},code:'<template>\n  <div>\n    <fw-label value="Sort items within a container"></fw-label>\n    <fw-drag-container class="drag-container" id="defaultSort">\n      <fw-drag-item>Item 1</fw-drag-item>\n      <fw-drag-item>Item 2</fw-drag-item>\n      <fw-drag-item>Item 3</fw-drag-item>\n      <fw-drag-item\n        >Item 4 <fw-icon slot="suffix" name="bulb"></fw-icon>\n      </fw-drag-item>\n    </fw-drag-container>\n    <br />\n    <fw-label value="Pinned items within a container"></fw-label>\n    <fw-drag-container class="drag-container" id="pinnedSort">\n      <fw-drag-item pinned="top">Item 1</fw-drag-item>\n      <fw-drag-item>Item 2</fw-drag-item>\n      <fw-drag-item>Item 3</fw-drag-item>\n      <fw-drag-item>Item 4</fw-drag-item>\n      <fw-drag-item pinned="bottom">Item 5</fw-drag-item>\n    </fw-drag-container>\n  </div>\n</template>\n<style>\n  .drag-container {\n    width: 300px;\n    padding: 20px;\n    border: 1px solid black;\n  }\n  fw-drag-item {\n    margin-bottom: 8px;\n  }\n</style>\n',requires:{}}}),a("p",[t._v("Demo for dragging items from one container to another container.")]),t._v(" "),a("vue-live",{attrs:{layoutProps:{lang:"html"},code:'<template>\n  <div>\n    <fw-label value="Copying items from on container to another"></fw-label>\n    <fw-label\n      value="Item 1-5 are allows to be sorted with Item 6-9 but not the other way around."\n    ></fw-label>\n    <div class="container">\n      <fw-drag-container class="drag-container" sortable="false" id="from">\n        <fw-drag-item>Item 1</fw-drag-item>\n        <fw-drag-item>Item 2</fw-drag-item>\n        <fw-drag-item>Item 3</fw-drag-item>\n        <fw-drag-item>Item 4</fw-drag-item>\n        <fw-drag-item>Item 5</fw-drag-item>\n      </fw-drag-container>\n\n      <fw-drag-container\n        class="drag-container"\n        id="to"\n        accept-from="from"\n        placeholder-class="placeholder"\n      >\n        <fw-drag-item>Item 6</fw-drag-item>\n        <fw-drag-item>Item 7</fw-drag-item>\n        <fw-drag-item>Item 8</fw-drag-item>\n        <fw-drag-item>Item 9</fw-drag-item>\n      </fw-drag-container>\n    </div>\n    <fw-label value="Moving items from on container to another"></fw-label>\n    <fw-label\n      value="Item 1-5 are allows to be sorted with Item 6-9 but not the other way around."\n    ></fw-label>\n    <div class="container">\n      <fw-drag-container class="drag-container" sortable="false" id="moveFrom">\n        <fw-drag-item>Item 1</fw-drag-item>\n        <fw-drag-item>Item 2</fw-drag-item>\n        <fw-drag-item>Item 3</fw-drag-item>\n        <fw-drag-item>Item 4</fw-drag-item>\n        <fw-drag-item>Item 5</fw-drag-item>\n      </fw-drag-container>\n\n      <fw-drag-container\n        class="drag-container"\n        id="moveTo"\n        accept-from="moveFrom"\n        placeholder-class="placeholder"\n        copy="false"\n      >\n        <fw-drag-item>Item 6</fw-drag-item>\n        <fw-drag-item>Item 7</fw-drag-item>\n        <fw-drag-item>Item 8</fw-drag-item>\n        <fw-drag-item>Item 9</fw-drag-item>\n      </fw-drag-container>\n    </div>\n  </div>\n</template>\n<style>\n  .container {\n    width: 400px;\n    padding: 20px;\n    border: 1px solid black;\n    display: flex;\n    justify-content: space-between;\n  }\n  .drag-container {\n    width: 150px;\n    padding: 20px;\n    border: 1px solid black;\n  }\n  fw-drag-item {\n    margin-bottom: 8px;\n  }\n  .placeholder {\n    width: 150px;\n    background-color: blueviolet;\n    height: 5px;\n  }\n</style>\n',requires:{}}}),a("p",[a("code",[t._v("fwDrop")]),t._v(" event will be emitted during a successful drop event, and can be used to detect the dropped item.")]),t._v(" "),a("vue-live",{attrs:{layoutProps:{lang:"html"},code:"<fw-drag-container id=\"drop\">\n  <fw-drag-item>Item 1</fw-drag-item>\n  <fw-drag-item>Item 2</fw-drag-item>\n  <fw-drag-item>Item 3</fw-drag-item>\n  <fw-drag-item>Item 4</fw-drag-item>\n  <fw-drag-item>Item 5</fw-drag-item>\n</fw-drag-container>\n<script type=\"application/javascript\">\n  var drop = document.getElementById('drop');\n  drop.addEventListener('fwDrop', (e) => {\n    console.log(e.detail);\n  });\n<\/script>\n",requires:{}}}),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" drop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'drop'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndrop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fwDrop'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),t._v(" "),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Attribute")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("acceptFrom")])]),t._v(" "),a("td",[a("code",[t._v("accept-from")])]),t._v(" "),a("td",[t._v("Id of the fw-sortable element from which draggable content can be accepted. Add comma separated id's for multiple containers.")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("''")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("addOnDrop")])]),t._v(" "),a("td",[a("code",[t._v("add-on-drop")])]),t._v(" "),a("td",[t._v("Whether the drag element should be added to the container on drop. If set to false, the placeholder will be retained.")]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("true")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("copy")])]),t._v(" "),a("td",[a("code",[t._v("copy")])]),t._v(" "),a("td",[t._v("Whether the drag element should be moved or copied.")]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("true")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("placeholderClass")])]),t._v(" "),a("td",[a("code",[t._v("placeholder-class")])]),t._v(" "),a("td",[t._v("The class name for the drag/drop placeholder. Add space separated class names for multiple classes")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("''")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("sortable")])]),t._v(" "),a("td",[a("code",[t._v("sortable")])]),t._v(" "),a("td",[t._v("Whether the list should be sortable.")]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("true")])])])])]),t._v(" "),a("h2",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Event")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("fwDrop")])]),t._v(" "),a("td",[t._v("Triggered when an draggable item is dropped inside the container.")]),t._v(" "),a("td",[a("code",[t._v("CustomEvent<void>")])])])])]),t._v(" "),a("h2",{attrs:{id:"dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[t._v("#")]),t._v(" Dependencies")]),t._v(" "),a("h3",{attrs:{id:"used-by"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#used-by"}},[t._v("#")]),t._v(" Used by")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"../data-table"}},[t._v("fw-data-table")])])]),t._v(" "),a("h3",{attrs:{id:"graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graph"}},[t._v("#")]),t._v(" Graph")]),t._v(" "),a("div",{staticClass:"language-mermaid extra-class"},[a("pre",{pre:!0,attrs:{class:"language-mermaid"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("graph")]),t._v(" TD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  fw-data-table "),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("--\x3e")]),t._v(" fw-drag-container\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("style")]),t._v(" fw-drag-container "),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("#f9f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("stroke")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("#333"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("stroke-width")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("4px")]),t._v("\n")])])]),a("hr"),t._v(" "),a("p",[t._v("Built with ❤ at Freshworks")])],1)}),[],!1,null,null,null);e.default=r.exports}}]);