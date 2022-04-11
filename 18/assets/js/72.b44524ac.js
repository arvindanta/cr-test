(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{996:function(n,t,a){"use strict";a.r(t);var s=a(47),e=Object(s.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[n._v("#")]),n._v(" Examples")]),n._v(" "),a("p",[n._v("This page contains examples for creating layouts by combining various css utils.")]),n._v(" "),a("h2",{attrs:{id:"example-using-border-font-colors-and-typography"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-using-border-font-colors-and-typography"}},[n._v("#")]),n._v(" Example using border, font colors and typography")]),n._v(" "),a("vue-live",{attrs:{layoutProps:{lang:"html"},code:'<style>\n  .details {\n    width: 70%;\n  }\n</style>\n<template>\n  <div class="details fw-bg-smoke-25">\n    <div\n      class="header fw-type-h6 fw-py-16 fw-px-16 fw-b-b-1 fw-b-solid fw-b-smoke-100"\n    >\n      Object details\n    </div>\n    <div class="body">\n      <table>\n        <tr class="fw-b-0">\n          <td class="fw-b-0 fw-type-sm">Booking Id</td>\n          <td class="fw-b-0 fw-type-h6">#123124</td>\n        </tr>\n        <tr class="fw-b-0">\n          <td class="fw-b-0 fw-type-sm">Hotel</td>\n          <a href="#">\n            <td class="fw-b-0 fw-type-h6 fw-color-azure-800">Leela palace</td>\n          </a>\n        </tr>\n        <tr class="fw-b-0">\n          <td class="fw-b-0 fw-type-sm">Customer Name</td>\n          <a href="#">\n            <td class="fw-b-0 fw-type-h6 fw-color-azure-800">Daniel</td>\n          </a>\n        </tr>\n        <tr class="fw-b-0">\n          <td class="fw-b-0 fw-type-sm">Number of rooms</td>\n          <td class="fw-b-0 fw-type-h6">2</td>\n        </tr>\n        <tr class="fw-b-0">\n          <td class="fw-b-0 fw-type-sm">Booking Amount</td>\n          <td class="fw-b-0 fw-type-h6">4,550</td>\n        </tr>\n        <tr class="fw-b-0">\n          <td class="fw-b-0 fw-type-sm">ID Number</td>\n          <td class="fw-b-0 fw-type-h6">HDG25098797</td>\n        </tr>\n        <tr class="fw-b-0">\n          <td class="fw-b-0 fw-type-sm">Contact number</td>\n          <td class="fw-b-0 fw-type-h6">573627382384</td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</template>\n',requires:{}}}),a("h2",{attrs:{id:"example-using-card-and-typography"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-using-card-and-typography"}},[n._v("#")]),n._v(" Example using card and typography")]),n._v(" "),a("vue-live",{attrs:{layoutProps:{lang:"html"},code:'<template>\n  <div>\n    <div class="fw-card-1 fw-p-20 fw-flex fw-flex-column" style="width: 30%;">\n      <div class="fw-flex fw-flex-row">\n        <span class="fw-flex-grow fw-type-h7">Booking ID</span>\n        <span class="fw-type-xs"><fw-icon name="arrow-right"></fw-icon></span>\n      </div>\n      <a href="#">\n        <div class="fw-type-h6 fw-color-azure-800">#1237483</div>\n      </a>\n\n      <div class="fw-mt-20">\n        <div class="fw-type-h7">Hotel</div>\n        <a href="#">\n          <div class="fw-type-h6 fw-mt-4 fw-color-azure-800">Leela Palace</div>\n        </a>\n      </div>\n\n      <div class="fw-mt-20">\n        <div class="fw-type-h7">Customer Name</div>\n        <a href="#">\n          <div class="fw-type-h6 fw-mt-4 fw-color-azure-800">David</div>\n        </a>\n      </div>\n    </div>\n  </div>\n</template>\n',requires:{}}}),a("h2",{attrs:{id:"example-using-accordians-cards-and-typography"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-using-accordians-cards-and-typography"}},[n._v("#")]),n._v(" Example using accordians, cards and typography")]),n._v(" "),a("vue-live",{attrs:{layoutProps:{lang:"html"},code:'<div style="width:336px;">\n  <fw-accordion\n    style="--fw-accordion-border: 1px solid #F5F7F9; --fw-accordion-box-shadow: 0px 1px 8px rgba(152, 152, 152, 0.13); --fw-accordion-border-radius: 4px;"\n    expanded="true"\n  >\n    <fw-accordion-title\n      truncate-on-overflow="true"\n      style="--fw-accordion-title-background-color: #F5F7F9;"\n    >\n      <fw-icon name="email"></fw-icon>\n      <span style="padding-left: 5px;">Tickets</span>\n    </fw-accordion-title>\n    <fw-accordion-body style="--fw-accordion-body-background-color: #FFFFFF">\n      <div>\n        <div class="fw-card-1 fw-py-16 fw-px-20 fw-flex fw-flex-row">\n          <div>\n            <fw-avatar\n              size="medium"\n              image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"\n            ></fw-avatar>\n          </div>\n          <div class="fw-flex-grow fw-px-16 fw-flex fw-flex-column">\n            <div class="fw-type-xs">#123745</div>\n            <div\n              class="fw-type-sm fw-mb-16"\n              style="white-space:nowrap;overflow:hidden; \n text-overflow:ellipsis; width: 160px;"\n            >\n              Unclean rooms and washrooms\n            </div>\n            <div class="fw-type-xs">\n              <fw-label value="Pending" color="yellow"></fw-label>\n            </div>\n          </div>\n          <div>\n            <span class="fw-type-xs"\n              ><fw-icon name="chevron-right"></fw-icon\n            ></span>\n          </div>\n        </div>\n      </div>\n      <div class="fw-mt-8">\n        <div class="fw-card-1 fw-py-16 fw-px-20 fw-flex fw-flex-row">\n          <div>\n            <fw-avatar\n              size="medium"\n              image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"\n            ></fw-avatar>\n          </div>\n          <div class="fw-flex-grow fw-px-16 fw-flex fw-flex-column">\n            <div class="fw-type-xs">#123745</div>\n            <div\n              class="fw-type-sm fw-mb-16"\n              style="white-space:nowrap;overflow:hidden; \n text-overflow:ellipsis; width: 160px;"\n            >\n              Requesting partial refund\n            </div>\n            <div class="fw-type-xs">\n              <fw-label value="Pending" color="yellow"></fw-label>\n            </div>\n          </div>\n          <div>\n            <span class="fw-type-xs"\n              ><fw-icon name="chevron-right"></fw-icon\n            ></span>\n          </div>\n        </div>\n      </div>\n\n      <br />\n      <div class="fw-flex fw-justify-between">\n        <fw-button color="secondary">View all tickets</fw-button>\n        <fw-button color="secondary">Add a ticket</fw-button>\n      </div>\n    </fw-accordion-body>\n  </fw-accordion>\n</div>\n',requires:{}}}),a("h2",{attrs:{id:"example-using-font-colors-and-typography"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-using-font-colors-and-typography"}},[n._v("#")]),n._v(" Example using font colors and typography")]),n._v(" "),a("vue-live",{attrs:{layoutProps:{lang:"html"},code:'<style>\n  tr {\n    background-color: #fff;\n  }\n  td {\n    width: 70%;\n  }\n</style>\n<template>\n  <div class="details">\n    <table>\n      <tr class="fw-b-0">\n        <td class="fw-type-sm fw-b-0 fw-pt-20">Booking Id</td>\n        <td class="fw-type-h6 fw-b-0 fw-pt-20">#123124</td>\n      </tr>\n      <tr class="fw-b-0">\n        <td class="fw-type-sm fw-b-0 fw-pt-20">Hotel</td>\n        <a href="#">\n          <td class="fw-type-h6 fw-color-azure-800 fw-b-0 fw-pt-20">\n            Hotel Ampala\n          </td>\n        </a>\n      </tr>\n\n      <tr class="fw-b-0">\n        <td class="fw-type-sm fw-b-0 fw-pt-20">Customer Name</td>\n        <a href="#">\n          <td class="fw-type-h6 fw-color-azure-800 fw-b-0 fw-pt-20">Daniel</td>\n        </a>\n      </tr>\n\n      <tr class="fw-b-0">\n        <td class="fw-type-sm fw-b-0 fw-pt-20">Number of rooms</td>\n        <td class="fw-type-h6 fw-b-0 fw-pt-20">2</td>\n      </tr>\n\n      <tr class="fw-b-0">\n        <td class="fw-type-sm fw-b-0 fw-pt-20">Booking Amount</td>\n        <td class="fw-type-h6 fw-b-0 fw-pt-20">4,550</td>\n      </tr>\n\n      <tr class="fw-b-0">\n        <td class="fw-type-sm fw-b-0 fw-pt-20">ID Number</td>\n        <td class="fw-type-h6 fw-b-0 fw-pt-20">HDG25098797</td>\n      </tr>\n\n      <tr class="fw-b-0">\n        <td class="fw-type-sm fw-b-0 fw-pt-20">Contact number</td>\n        <td class="fw-type-h6 fw-b-0 fw-pt-20">573627382384</td>\n      </tr>\n    </table>\n  </div>\n</template>\n',requires:{}}})],1)}),[],!1,null,null,null);t.default=e.exports}}]);