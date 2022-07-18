"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/contact.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/contact.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Italianno-Regular-OTF.otf */ "./src/fonts/Italianno-Regular-OTF.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/contact-bg.jpg */ "./src/img/contact-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/map.svg */ "./src/img/map.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Italianno\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n:root {\n  font-family: system-ui;\n  /* (62.5/100) * 16px = 10px */\n  font-size: 62.5%;\n  /* 14px */\n  --font-size-small: 1.4rem;\n  /* 16px */\n  --font-size-default: 1.6rem;\n  /* 24px */\n  --font-size-large: 2.4rem;\n}\n\nbody {\n  font-size: var(--font-size-default);\n  min-height: 100vh;\n}\n\n.contact-content {\n  font-family: \"Italianno\";\n  display: grid;\n  grid-template-columns: 1fr 1.1fr;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: left;\n}\n\n.contact-us {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.form-cont {\n  text-align: center;\n  display: grid;\n  gap: 1rem;\n  padding: 1rem;\n}\n\n.label-size {\n  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);\n  background-color: rgba(0, 128, 0, 0.76);\n  padding: 1rem;\n  font-size: 3rem;\n}\n\n#text,\n#email,\n#message {\n  font-size: 3rem;\n  border: none;\n  border-bottom: 2px dashed orangered;\n  border-radius: 5px;\n  width: 100%;\n}\n\n#message {\n  height: 150px;\n}\n\n.red-label{\n  background-color: #ff4400e3;\n}\n\n.no-margin {\n  margin: 0;\n}\n\n.send-bt {\n  font-size: 3rem;\n  font-weight: bold;\n  background-color: #ff4400e3;\n  border: none;\n  padding: 1rem;\n  width: 100%;\n  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);\n}\n\n.send-bt:active {\n  box-shadow: inset 1px 2px 5px black;\n  transform: translateX(1px) translateY(1px);\n}\n\n.no-pad {\n  padding: 0;\n}\n\n.navbar {\n  display: flex;\n  background-color: green;\n  align-items: center;\n  padding: 1rem;\n  gap: 1rem;\n}\n\n.flexbar-one,\n.flexbar-two {\n  list-style: none;\n  display: flex;\n  gap: 1rem;\n}\n\n.no-style-link {\n  text-decoration: none;\n  color: inherit;\n}\n\n.flexbar-one {\n  width: 70%;\n  justify-content: space-between;\n  font-size: 4rem;\n}\n\n.flexbar-two {\n  width: 30%;\n  justify-content: flex-end;\n}\n\n.white-hover:hover {\n  color: white;\n}\n\n.contact {\n  padding: 1rem;\n  display: grid;\n  grid-template-rows: 245px 306px;\n  justify-items: end;\n}\n\n.address {\n  font-size: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.red-address {\n  border-radius: 5px;\n  background-color: #ff4500c2;\n  width: 80%;\n}\n\n.map {\n  border-radius: 5px;\n  height: 300px;\n  width: 80%;\n  background-color: white;\n  grid-row: 2;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.surligne{\n  text-decoration: underline;\n}", "",{"version":3,"sources":["webpack://./src/css/contact.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,4CAA8C;AAChD;;AAEA;EACE,sBAAsB;EACtB,6BAA6B;EAC7B,gBAAgB;EAChB,SAAS;EACT,yBAAyB;EACzB,SAAS;EACT,2BAA2B;EAC3B,SAAS;EACT,yBAAyB;AAC3B;;AAEA;EACE,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,gCAAgC;EAChC,yDAA8C;EAC9C,4BAA4B;EAC5B,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,SAAS;EACT,aAAa;AACf;;AAEA;EACE,sDAAsD;EACtD,uCAAuC;EACvC,aAAa;EACb,eAAe;AACjB;;AAEA;;;EAGE,eAAe;EACf,YAAY;EACZ,mCAAmC;EACnC,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,2BAA2B;EAC3B,YAAY;EACZ,aAAa;EACb,WAAW;EACX,sDAAsD;AACxD;;AAEA;EACE,mCAAmC;EACnC,0CAA0C;AAC5C;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,SAAS;AACX;;AAEA;;EAEE,gBAAgB;EAChB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,yBAAyB;AAC3B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,aAAa;EACb,+BAA+B;EAC/B,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,2BAA2B;EAC3B,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,UAAU;EACV,uBAAuB;EACvB,WAAW;EACX,yDAAqC;EACrC,4BAA4B;EAC5B,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,0BAA0B;AAC5B","sourcesContent":["@font-face {\n  font-family: \"Italianno\";\n  src: url(\"../fonts/Italianno-Regular-OTF.otf\");\n}\n\n:root {\n  font-family: system-ui;\n  /* (62.5/100) * 16px = 10px */\n  font-size: 62.5%;\n  /* 14px */\n  --font-size-small: 1.4rem;\n  /* 16px */\n  --font-size-default: 1.6rem;\n  /* 24px */\n  --font-size-large: 2.4rem;\n}\n\nbody {\n  font-size: var(--font-size-default);\n  min-height: 100vh;\n}\n\n.contact-content {\n  font-family: \"Italianno\";\n  display: grid;\n  grid-template-columns: 1fr 1.1fr;\n  background-image: url(\"../img/contact-bg.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: left;\n}\n\n.contact-us {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.form-cont {\n  text-align: center;\n  display: grid;\n  gap: 1rem;\n  padding: 1rem;\n}\n\n.label-size {\n  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);\n  background-color: rgba(0, 128, 0, 0.76);\n  padding: 1rem;\n  font-size: 3rem;\n}\n\n#text,\n#email,\n#message {\n  font-size: 3rem;\n  border: none;\n  border-bottom: 2px dashed orangered;\n  border-radius: 5px;\n  width: 100%;\n}\n\n#message {\n  height: 150px;\n}\n\n.red-label{\n  background-color: #ff4400e3;\n}\n\n.no-margin {\n  margin: 0;\n}\n\n.send-bt {\n  font-size: 3rem;\n  font-weight: bold;\n  background-color: #ff4400e3;\n  border: none;\n  padding: 1rem;\n  width: 100%;\n  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);\n}\n\n.send-bt:active {\n  box-shadow: inset 1px 2px 5px black;\n  transform: translateX(1px) translateY(1px);\n}\n\n.no-pad {\n  padding: 0;\n}\n\n.navbar {\n  display: flex;\n  background-color: green;\n  align-items: center;\n  padding: 1rem;\n  gap: 1rem;\n}\n\n.flexbar-one,\n.flexbar-two {\n  list-style: none;\n  display: flex;\n  gap: 1rem;\n}\n\n.no-style-link {\n  text-decoration: none;\n  color: inherit;\n}\n\n.flexbar-one {\n  width: 70%;\n  justify-content: space-between;\n  font-size: 4rem;\n}\n\n.flexbar-two {\n  width: 30%;\n  justify-content: flex-end;\n}\n\n.white-hover:hover {\n  color: white;\n}\n\n.contact {\n  padding: 1rem;\n  display: grid;\n  grid-template-rows: 245px 306px;\n  justify-items: end;\n}\n\n.address {\n  font-size: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.red-address {\n  border-radius: 5px;\n  background-color: #ff4500c2;\n  width: 80%;\n}\n\n.map {\n  border-radius: 5px;\n  height: 300px;\n  width: 80%;\n  background-color: white;\n  grid-row: 2;\n  background-image: url(../img/map.svg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.surligne{\n  text-decoration: underline;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/home.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/home.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Italianno-Regular-OTF.otf */ "./src/fonts/Italianno-Regular-OTF.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/logo-bg.jpg */ "./src/img/logo-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/pizlogo.png */ "./src/img/pizlogo.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/flour.jpg */ "./src/img/flour.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../img/wood-bg.jpg */ "./src/img/wood-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../img/pizza-star.png */ "./src/img/pizza-star.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Italianno\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n:root {\n  font-family: system-ui;\n  /* (62.5/100) * 16px = 10px */\n  font-size: 62.5%;\n  /* 14px */\n  --font-size-small: 1.4rem;\n  /* 16px */\n  --font-size-default: 1.6rem;\n  /* 24px */\n  --font-size-large: 2.4rem;\n}\n\nbody {\n  font-size: var(--font-size-default);\n  min-height: 100vh;\n}\n\n#content {\n  font-family: \"Italianno\";\n  display: grid;\n  grid-template-columns: 1fr 1.1fr;\n}\n\n.logo {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: 200px 0fr 100px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position: center;\n  background-size: cover;\n}\n\n.flex-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n}\n\n.pizlogo {\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  border-radius: 50%;\n  background-color: green;\n  height: 95%;\n  width: 55%;\n  opacity: 0.9;\n  min-width: 185px;\n}\n\n.redop-bg {\n  padding: 1rem;\n  background-color: #ff4400c0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\n\n.no-margin {\n  margin: 0;\n}\n\n.no-pad {\n  padding: 0;\n}\n\n.green-h1 {\n  color: #052605;\n  font-size: 6rem;\n}\n\n.about {\n  font-size: 2.5rem;\n  font-weight: bold;\n}\n\n.center-bt {\n  font-size: 3rem;\n  font-weight: bold;\n  background-color: green;\n  border-radius: 20%;\n  border: none;\n  padding: 0.5rem;\n}\n\n.center-bt:active {\n  box-shadow: inset 1px 2px 5px black;\n  transform: translateX(1px) translateY(1px);\n}\n\n.present {\n  display: grid;\n}\n\n.first-half {\n  display: grid;\n  grid-template-rows: 0fr 3fr;\n}\n\n.navbar {\n  display: flex;\n  background-color: green;\n  align-items: center;\n  padding: 1rem;\n  gap: 1rem;\n}\n\n.flexbar-one,\n.flexbar-two {\n  list-style: none;\n  display: flex;\n  gap: 1rem;\n}\n\n.no-style-link {\n  text-decoration: none;\n  color: inherit;\n}\n\n.flexbar-one {\n  width: 70%;\n  justify-content: space-between;\n  font-size: 4rem;\n}\n\n.flexbar-two {\n  width: 30%;\n  justify-content: flex-end;\n}\n\n.white-hover:hover {\n  color: white;\n}\n\n.flour {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.menu-star {\n  gap: 1rem;\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: 40% 60%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.describ {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-weight: bold;\n  text-align: center;\n  font-size: 3rem;\n}\n\n.big-text {\n  font-size: 6rem;\n  color: red;\n}\n\n.pizza {\n  height: 100%;\n  width: 90%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.surligne{\n  text-decoration: underline;\n}", "",{"version":3,"sources":["webpack://./src/css/home.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,4CAA8C;AAChD;;AAEA;EACE,sBAAsB;EACtB,6BAA6B;EAC7B,gBAAgB;EAChB,SAAS;EACT,yBAAyB;EACzB,SAAS;EACT,2BAA2B;EAC3B,SAAS;EACT,yBAAyB;AAC3B;;AAEA;EACE,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mCAAmC;EACnC,yDAAyC;EACzC,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,wBAAwB;EACxB,2BAA2B;EAC3B,4BAA4B;EAC5B,yDAAyC;EACzC,kBAAkB;EAClB,uBAAuB;EACvB,WAAW;EACX,UAAU;EACV,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,mCAAmC;EACnC,0CAA0C;AAC5C;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,SAAS;AACX;;AAEA;;EAEE,gBAAgB;EAChB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,yBAAyB;AAC3B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,yDAAuC;EACvC,sBAAsB;EACtB,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;EACE,SAAS;EACT,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,yDAAyC;EACzC,sBAAsB;EACtB,2BAA2B;EAC3B,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,yDAA4C;EAC5C,wBAAwB;EACxB,2BAA2B;EAC3B,4BAA4B;AAC9B;;AAEA;EACE,0BAA0B;AAC5B","sourcesContent":["@font-face {\n  font-family: \"Italianno\";\n  src: url(\"../fonts/Italianno-Regular-OTF.otf\");\n}\n\n:root {\n  font-family: system-ui;\n  /* (62.5/100) * 16px = 10px */\n  font-size: 62.5%;\n  /* 14px */\n  --font-size-small: 1.4rem;\n  /* 16px */\n  --font-size-default: 1.6rem;\n  /* 24px */\n  --font-size-large: 2.4rem;\n}\n\nbody {\n  font-size: var(--font-size-default);\n  min-height: 100vh;\n}\n\n#content {\n  font-family: \"Italianno\";\n  display: grid;\n  grid-template-columns: 1fr 1.1fr;\n}\n\n.logo {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: 200px 0fr 100px;\n  background-image: url(../img/logo-bg.jpg);\n  background-position: center;\n  background-size: cover;\n}\n\n.flex-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n}\n\n.pizlogo {\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: url(../img/pizlogo.png);\n  border-radius: 50%;\n  background-color: green;\n  height: 95%;\n  width: 55%;\n  opacity: 0.9;\n  min-width: 185px;\n}\n\n.redop-bg {\n  padding: 1rem;\n  background-color: #ff4400c0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\n\n.no-margin {\n  margin: 0;\n}\n\n.no-pad {\n  padding: 0;\n}\n\n.green-h1 {\n  color: #052605;\n  font-size: 6rem;\n}\n\n.about {\n  font-size: 2.5rem;\n  font-weight: bold;\n}\n\n.center-bt {\n  font-size: 3rem;\n  font-weight: bold;\n  background-color: green;\n  border-radius: 20%;\n  border: none;\n  padding: 0.5rem;\n}\n\n.center-bt:active {\n  box-shadow: inset 1px 2px 5px black;\n  transform: translateX(1px) translateY(1px);\n}\n\n.present {\n  display: grid;\n}\n\n.first-half {\n  display: grid;\n  grid-template-rows: 0fr 3fr;\n}\n\n.navbar {\n  display: flex;\n  background-color: green;\n  align-items: center;\n  padding: 1rem;\n  gap: 1rem;\n}\n\n.flexbar-one,\n.flexbar-two {\n  list-style: none;\n  display: flex;\n  gap: 1rem;\n}\n\n.no-style-link {\n  text-decoration: none;\n  color: inherit;\n}\n\n.flexbar-one {\n  width: 70%;\n  justify-content: space-between;\n  font-size: 4rem;\n}\n\n.flexbar-two {\n  width: 30%;\n  justify-content: flex-end;\n}\n\n.white-hover:hover {\n  color: white;\n}\n\n.flour {\n  background-image: url(../img/flour.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.menu-star {\n  gap: 1rem;\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: 40% 60%;\n  background-image: url(../img/wood-bg.jpg);\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.describ {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-weight: bold;\n  text-align: center;\n  font-size: 3rem;\n}\n\n.big-text {\n  font-size: 6rem;\n  color: red;\n}\n\n.pizza {\n  height: 100%;\n  width: 90%;\n  background-image: url(../img/pizza-star.png);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.surligne{\n  text-decoration: underline;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/menu.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/menu.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Italianno-Regular-OTF.otf */ "./src/fonts/Italianno-Regular-OTF.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/wood-menu.jpg */ "./src/img/wood-menu.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Italianno\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n:root {\n  font-family: system-ui;\n  /* (62.5/100) * 16px = 10px */\n  font-size: 62.5%;\n  /* 14px */\n  --font-size-small: 1.4rem;\n  /* 16px */\n  --font-size-default: 1.6rem;\n  /* 24px */\n  --font-size-large: 2.4rem;\n\n  overflow-y:scroll;\n\n}\n\nbody {\n  font-size: var(--font-size-default);\n  min-height: 100vh;\n}\n\n.menu-content {\n  font-family: \"Italianno\";\n  display: grid;\n  grid-template-columns: 1fr 1.1fr;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.menu {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  padding: 1rem;\n  gap: 1rem;\n}\n\n.no-margin {\n  margin: 0;\n}\n\n.pizza-menu {\n  display: grid;\n  font-size: 3rem;\n  padding: 1rem;\n  background-color: #ff4400e3;\n  text-align: center;\n  clip-path: polygon(\n    0% 10%,\n    10% 10%,\n    10% 0%,\n    90% 0%,\n    90% 10%,\n    100% 10%,\n    100% 90%,\n    90% 90%,\n    90% 100%,\n    10% 100%,\n    10% 90%,\n    0% 90%\n  );\n  align-items: center;\n  justify-items: center;\n  align-content: center;\n}\n\n.pizza-img {\n  width: 180px;\n}\n\n.pizza-name {\n  font-size: 4rem;\n  color: green;\n}\n\n.centered-w {\n  width: 70%;\n}\n\n.orderes-bt {\n  font-size: 3rem;\n  font-weight: bold;\n  background-color: green;\n  border-radius: 20%;\n  border: none;\n  padding: 1rem;\n}\n\n.orderes-bt:active {\n  box-shadow: inset 1px 2px 5px black;\n  transform: translateX(1px) translateY(1px);\n}\n\n.no-pad {\n  padding: 0;\n}\n\n.present {\n  display: grid;\n}\n\n.first-half {\n  display: grid;\n  grid-template-rows: 0fr 3fr;\n}\n\n.navbar {\n  display: flex;\n  background-color: green;\n  align-items: center;\n  padding: 1rem;\n  gap: 1rem;\n}\n\n.flexbar-one,\n.flexbar-two {\n  list-style: none;\n  display: flex;\n  gap: 1rem;\n}\n\n.no-style-link {\n  text-decoration: none;\n  color: inherit;\n}\n\n.flexbar-one {\n  width: 70%;\n  justify-content: space-between;\n  font-size: 4rem;\n}\n\n.flexbar-two {\n  width: 30%;\n  justify-content: flex-end;\n}\n\n.white-hover:hover {\n  color: white;\n}\n\n.star-dish {\n  display: grid;\n  grid-template-rows: 400px 200px;\n}\n\n.redorange-wr {\n  clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);\n  background-color: #ff4500;\n}\n\n.sfincione {\n  clip-path: polygon(0 0, 100% 0, 100% 74%, 0% 100%);\n  background-color: #008000c7;\n  font-size: 3rem;\n  padding: 1rem;\n  grid-template-rows: 200px 200px;\n  display: grid;\n  justify-items: center;\n}\n\n.pizza-sfinc {\n  width: 310px;\n}\n\n.pizza-name-two {\n  color: red;\n  font-size: 4rem;\n}\n\n.flex-reserv {\n  display: flex;\n  justify-content: center;\n}\n\n.red-title {\n  background-color: orangered;\n  border-radius: 5px;\n}\n\n.align-bt {\n  align-self: center;\n}\n\n.underdash {\n  border-bottom: 2px dashed orangered;\n}\n\n.reservation {\n  border-radius: 5px;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  text-align: center;\n  font-size: 3rem;\n  background-color: white;\n}\n\n.surligne{\n  text-decoration: underline;\n}", "",{"version":3,"sources":["webpack://./src/css/menu.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,4CAA8C;AAChD;;AAEA;EACE,sBAAsB;EACtB,6BAA6B;EAC7B,gBAAgB;EAChB,SAAS;EACT,yBAAyB;EACzB,SAAS;EACT,2BAA2B;EAC3B,SAAS;EACT,yBAAyB;;EAEzB,iBAAiB;;AAEnB;;AAEA;EACE,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,gCAAgC;EAChC,yDAA6C;EAC7C,2BAA2B;EAC3B,4BAA4B;EAC5B,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,2DAA2D;EAC3D,aAAa;EACb,SAAS;AACX;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,eAAe;EACf,aAAa;EACb,2BAA2B;EAC3B,kBAAkB;EAClB;;;;;;;;;;;;;GAaC;EACD,mBAAmB;EACnB,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,mCAAmC;EACnC,0CAA0C;AAC5C;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,SAAS;AACX;;AAEA;;EAEE,gBAAgB;EAChB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,yBAAyB;AAC3B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,kDAAkD;EAClD,yBAAyB;AAC3B;;AAEA;EACE,kDAAkD;EAClD,2BAA2B;EAC3B,eAAe;EACf,aAAa;EACb,+BAA+B;EAC/B,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,0BAA0B;AAC5B","sourcesContent":["@font-face {\n  font-family: \"Italianno\";\n  src: url(\"../fonts/Italianno-Regular-OTF.otf\");\n}\n\n:root {\n  font-family: system-ui;\n  /* (62.5/100) * 16px = 10px */\n  font-size: 62.5%;\n  /* 14px */\n  --font-size-small: 1.4rem;\n  /* 16px */\n  --font-size-default: 1.6rem;\n  /* 24px */\n  --font-size-large: 2.4rem;\n\n  overflow-y:scroll;\n\n}\n\nbody {\n  font-size: var(--font-size-default);\n  min-height: 100vh;\n}\n\n.menu-content {\n  font-family: \"Italianno\";\n  display: grid;\n  grid-template-columns: 1fr 1.1fr;\n  background-image: url(\"../img/wood-menu.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.menu {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  padding: 1rem;\n  gap: 1rem;\n}\n\n.no-margin {\n  margin: 0;\n}\n\n.pizza-menu {\n  display: grid;\n  font-size: 3rem;\n  padding: 1rem;\n  background-color: #ff4400e3;\n  text-align: center;\n  clip-path: polygon(\n    0% 10%,\n    10% 10%,\n    10% 0%,\n    90% 0%,\n    90% 10%,\n    100% 10%,\n    100% 90%,\n    90% 90%,\n    90% 100%,\n    10% 100%,\n    10% 90%,\n    0% 90%\n  );\n  align-items: center;\n  justify-items: center;\n  align-content: center;\n}\n\n.pizza-img {\n  width: 180px;\n}\n\n.pizza-name {\n  font-size: 4rem;\n  color: green;\n}\n\n.centered-w {\n  width: 70%;\n}\n\n.orderes-bt {\n  font-size: 3rem;\n  font-weight: bold;\n  background-color: green;\n  border-radius: 20%;\n  border: none;\n  padding: 1rem;\n}\n\n.orderes-bt:active {\n  box-shadow: inset 1px 2px 5px black;\n  transform: translateX(1px) translateY(1px);\n}\n\n.no-pad {\n  padding: 0;\n}\n\n.present {\n  display: grid;\n}\n\n.first-half {\n  display: grid;\n  grid-template-rows: 0fr 3fr;\n}\n\n.navbar {\n  display: flex;\n  background-color: green;\n  align-items: center;\n  padding: 1rem;\n  gap: 1rem;\n}\n\n.flexbar-one,\n.flexbar-two {\n  list-style: none;\n  display: flex;\n  gap: 1rem;\n}\n\n.no-style-link {\n  text-decoration: none;\n  color: inherit;\n}\n\n.flexbar-one {\n  width: 70%;\n  justify-content: space-between;\n  font-size: 4rem;\n}\n\n.flexbar-two {\n  width: 30%;\n  justify-content: flex-end;\n}\n\n.white-hover:hover {\n  color: white;\n}\n\n.star-dish {\n  display: grid;\n  grid-template-rows: 400px 200px;\n}\n\n.redorange-wr {\n  clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);\n  background-color: #ff4500;\n}\n\n.sfincione {\n  clip-path: polygon(0 0, 100% 0, 100% 74%, 0% 100%);\n  background-color: #008000c7;\n  font-size: 3rem;\n  padding: 1rem;\n  grid-template-rows: 200px 200px;\n  display: grid;\n  justify-items: center;\n}\n\n.pizza-sfinc {\n  width: 310px;\n}\n\n.pizza-name-two {\n  color: red;\n  font-size: 4rem;\n}\n\n.flex-reserv {\n  display: flex;\n  justify-content: center;\n}\n\n.red-title {\n  background-color: orangered;\n  border-radius: 5px;\n}\n\n.align-bt {\n  align-self: center;\n}\n\n.underdash {\n  border-bottom: 2px dashed orangered;\n}\n\n.reservation {\n  border-radius: 5px;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  text-align: center;\n  font-size: 3rem;\n  background-color: white;\n}\n\n.surligne{\n  text-decoration: underline;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n         ========================================================================== */\n\n/**\n       * Remove the margin in all browsers.\n       */\n\nbody {\n  margin: 0;\n}\n\n/**\n       * Render the `main` element consistently in IE.\n       */\n\nmain {\n  display: block;\n}\n\n/**\n       * Correct the font size and margin on `h1` elements within `section` and\n       * `article` contexts in Chrome, Firefox, and Safari.\n       */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n         ========================================================================== */\n\n/**\n       * 1. Add the correct box sizing in Firefox.\n       * 2. Show the overflow in Edge and IE.\n       */\n\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n       * 1. Correct the inheritance and scaling of font size in all browsers.\n       * 2. Correct the odd `em` font sizing in all browsers.\n       */\n\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Text-level semantics\n         ========================================================================== */\n\n/**\n       * Remove the gray background on active links in IE 10.\n       */\n\na {\n  background-color: transparent;\n}\n\n/**\n       * 1. Remove the bottom border in Chrome 57-\n       * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n       */\n\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n       * Add the correct font weight in Chrome, Edge, and Safari.\n       */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n       * 1. Correct the inheritance and scaling of font size in all browsers.\n       * 2. Correct the odd `em` font sizing in all browsers.\n       */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n       * Add the correct font size in all browsers.\n       */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n       * Prevent `sub` and `sup` elements from affecting the line height in\n       * all browsers.\n       */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n         ========================================================================== */\n\n/**\n       * Remove the border on images inside links in IE 10.\n       */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n         ========================================================================== */\n\n/**\n       * 1. Change the font styles in all browsers.\n       * 2. Remove the margin in Firefox and Safari.\n       */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n       * Show the overflow in IE.\n       * 1. Show the overflow in Edge.\n       */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n       * Remove the inheritance of text transform in Edge, Firefox, and IE.\n       * 1. Remove the inheritance of text transform in Firefox.\n       */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n       * Correct the inability to style clickable types in iOS and Safari.\n       */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n       * Remove the inner border and padding in Firefox.\n       */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n       * Restore the focus styles unset by the previous rule.\n       */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n       * Correct the padding in Firefox.\n       */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n       * 1. Correct the text wrapping in Edge and IE.\n       * 2. Correct the color inheritance from `fieldset` elements in IE.\n       * 3. Remove the padding so developers are not caught out when they zero out\n       *    `fieldset` elements in all browsers.\n       */\n\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n       * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n       */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n       * Remove the default vertical scrollbar in IE 10+.\n       */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n       * 1. Add the correct box sizing in IE 10.\n       * 2. Remove the padding in IE 10.\n       */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n       * Correct the cursor style of increment and decrement buttons in Chrome.\n       */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n       * 1. Correct the odd appearance in Chrome and Safari.\n       * 2. Correct the outline style in Safari.\n       */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n       * Remove the inner padding in Chrome and Safari on macOS.\n       */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n       * 1. Correct the inability to style clickable types in iOS and Safari.\n       * 2. Change font properties to `inherit` in Safari.\n       */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n         ========================================================================== */\n\n/*\n       * Add the correct display in Edge, IE 10+, and Firefox.\n       */\n\ndetails {\n  display: block;\n}\n\n/*\n       * Add the correct display in all browsers.\n       */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n         ========================================================================== */\n\n/**\n       * Add the correct display in IE 10+.\n       */\n\ntemplate {\n  display: none;\n}\n\n/**\n       * Add the correct display in IE 10.\n       */\n\n[hidden] {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB;EACjB,MAAM;EACN,8BAA8B;EAC9B,MAAM;AACR;;AAEA;qFACqF;;AAErF;;QAEQ;;AAER;EACE,SAAS;AACX;;AAEA;;QAEQ;;AAER;EACE,cAAc;AAChB;;AAEA;;;QAGQ;;AAER;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;qFACqF;;AAErF;;;QAGQ;;AAER;EACE,uBAAuB;EACvB,MAAM;EACN,SAAS;EACT,MAAM;EACN,iBAAiB;EACjB,MAAM;AACR;;AAEA;;;QAGQ;;AAER;EACE,iCAAiC;EACjC,MAAM;EACN,cAAc;EACd,MAAM;AACR;;AAEA;qFACqF;;AAErF;;QAEQ;;AAER;EACE,6BAA6B;AAC/B;;AAEA;;;QAGQ;;AAER;EACE,mBAAmB;EACnB,MAAM;EACN,0BAA0B;EAC1B,MAAM;EACN,iCAAiC;EACjC,MAAM;AACR;;AAEA;;QAEQ;;AAER;;EAEE,mBAAmB;AACrB;;AAEA;;;QAGQ;;AAER;;;EAGE,iCAAiC;EACjC,MAAM;EACN,cAAc;EACd,MAAM;AACR;;AAEA;;QAEQ;;AAER;EACE,cAAc;AAChB;;AAEA;;;QAGQ;;AAER;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;qFACqF;;AAErF;;QAEQ;;AAER;EACE,kBAAkB;AACpB;;AAEA;qFACqF;;AAErF;;;QAGQ;;AAER;;;;;EAKE,oBAAoB;EACpB,MAAM;EACN,eAAe;EACf,MAAM;EACN,iBAAiB;EACjB,MAAM;EACN,SAAS;EACT,MAAM;AACR;;AAEA;;;QAGQ;;AAER;;EAEE,MAAM;EACN,iBAAiB;AACnB;;AAEA;;;QAGQ;;AAER;;EAEE,MAAM;EACN,oBAAoB;AACtB;;AAEA;;QAEQ;;AAER;;;;EAIE,0BAA0B;AAC5B;;AAEA;;QAEQ;;AAER;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;QAEQ;;AAER;;;;EAIE,8BAA8B;AAChC;;AAEA;;QAEQ;;AAER;EACE,8BAA8B;AAChC;;AAEA;;;;;QAKQ;;AAER;EACE,sBAAsB;EACtB,MAAM;EACN,cAAc;EACd,MAAM;EACN,cAAc;EACd,MAAM;EACN,eAAe;EACf,MAAM;EACN,UAAU;EACV,MAAM;EACN,mBAAmB;EACnB,MAAM;AACR;;AAEA;;QAEQ;;AAER;EACE,wBAAwB;AAC1B;;AAEA;;QAEQ;;AAER;EACE,cAAc;AAChB;;AAEA;;;QAGQ;;AAER;;EAEE,sBAAsB;EACtB,MAAM;EACN,UAAU;EACV,MAAM;AACR;;AAEA;;QAEQ;;AAER;;EAEE,YAAY;AACd;;AAEA;;;QAGQ;;AAER;EACE,6BAA6B;EAC7B,MAAM;EACN,oBAAoB;EACpB,MAAM;AACR;;AAEA;;QAEQ;;AAER;EACE,wBAAwB;AAC1B;;AAEA;;;QAGQ;;AAER;EACE,0BAA0B;EAC1B,MAAM;EACN,aAAa;EACb,MAAM;AACR;;AAEA;qFACqF;;AAErF;;QAEQ;;AAER;EACE,cAAc;AAChB;;AAEA;;QAEQ;;AAER;EACE,kBAAkB;AACpB;;AAEA;qFACqF;;AAErF;;QAEQ;;AAER;EACE,aAAa;AACf;;AAEA;;QAEQ;;AAER;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n         ========================================================================== */\n\n/**\n       * Remove the margin in all browsers.\n       */\n\nbody {\n  margin: 0;\n}\n\n/**\n       * Render the `main` element consistently in IE.\n       */\n\nmain {\n  display: block;\n}\n\n/**\n       * Correct the font size and margin on `h1` elements within `section` and\n       * `article` contexts in Chrome, Firefox, and Safari.\n       */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n         ========================================================================== */\n\n/**\n       * 1. Add the correct box sizing in Firefox.\n       * 2. Show the overflow in Edge and IE.\n       */\n\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n       * 1. Correct the inheritance and scaling of font size in all browsers.\n       * 2. Correct the odd `em` font sizing in all browsers.\n       */\n\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Text-level semantics\n         ========================================================================== */\n\n/**\n       * Remove the gray background on active links in IE 10.\n       */\n\na {\n  background-color: transparent;\n}\n\n/**\n       * 1. Remove the bottom border in Chrome 57-\n       * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n       */\n\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n       * Add the correct font weight in Chrome, Edge, and Safari.\n       */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n       * 1. Correct the inheritance and scaling of font size in all browsers.\n       * 2. Correct the odd `em` font sizing in all browsers.\n       */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n       * Add the correct font size in all browsers.\n       */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n       * Prevent `sub` and `sup` elements from affecting the line height in\n       * all browsers.\n       */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n         ========================================================================== */\n\n/**\n       * Remove the border on images inside links in IE 10.\n       */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n         ========================================================================== */\n\n/**\n       * 1. Change the font styles in all browsers.\n       * 2. Remove the margin in Firefox and Safari.\n       */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n       * Show the overflow in IE.\n       * 1. Show the overflow in Edge.\n       */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n       * Remove the inheritance of text transform in Edge, Firefox, and IE.\n       * 1. Remove the inheritance of text transform in Firefox.\n       */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n       * Correct the inability to style clickable types in iOS and Safari.\n       */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n       * Remove the inner border and padding in Firefox.\n       */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n       * Restore the focus styles unset by the previous rule.\n       */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n       * Correct the padding in Firefox.\n       */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n       * 1. Correct the text wrapping in Edge and IE.\n       * 2. Correct the color inheritance from `fieldset` elements in IE.\n       * 3. Remove the padding so developers are not caught out when they zero out\n       *    `fieldset` elements in all browsers.\n       */\n\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n       * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n       */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n       * Remove the default vertical scrollbar in IE 10+.\n       */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n       * 1. Add the correct box sizing in IE 10.\n       * 2. Remove the padding in IE 10.\n       */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n       * Correct the cursor style of increment and decrement buttons in Chrome.\n       */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n       * 1. Correct the odd appearance in Chrome and Safari.\n       * 2. Correct the outline style in Safari.\n       */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n       * Remove the inner padding in Chrome and Safari on macOS.\n       */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n       * 1. Correct the inability to style clickable types in iOS and Safari.\n       * 2. Change font properties to `inherit` in Safari.\n       */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n         ========================================================================== */\n\n/*\n       * Add the correct display in Edge, IE 10+, and Firefox.\n       */\n\ndetails {\n  display: block;\n}\n\n/*\n       * Add the correct display in all browsers.\n       */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n         ========================================================================== */\n\n/**\n       * Add the correct display in IE 10+.\n       */\n\ntemplate {\n  display: none;\n}\n\n/**\n       * Add the correct display in IE 10.\n       */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/contact.css":
/*!*****************************!*\
  !*** ./src/css/contact.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./contact.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/contact.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/home.css":
/*!**************************!*\
  !*** ./src/css/home.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/menu.css":
/*!**************************!*\
  !*** ./src/css/menu.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/normalize.css":
/*!*******************************!*\
  !*** ./src/css/normalize.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/normalize.css */ "./src/css/normalize.css");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact */ "./src/pages/contact.js");




(0,_pages_home__WEBPACK_IMPORTED_MODULE_1__["default"])()
let home = document.querySelector(".flexbar-one").children[0]
let menu = document.querySelector(".flexbar-one").children[1]
let contact = document.querySelector(".flexbar-one").children[2]
let content = document.getElementById("content")
let homeTab = () => {
    content.innerHTML = ""
    ;(0,_pages_home__WEBPACK_IMPORTED_MODULE_1__["default"])()
    let home = document.querySelector(".flexbar-one").children[0]
    let menu = document.querySelector(".flexbar-one").children[1]
    let contact = document.querySelector(".flexbar-one").children[2]
    home.addEventListener("click", homeTab)
    menu.addEventListener("click", menuTab)
    contact.addEventListener("click", contactTab)
}
let menuTab = () => {
    content.innerHTML = ""
    ;(0,_pages_menu__WEBPACK_IMPORTED_MODULE_2__["default"])()
    let home = document.querySelector(".flexbar-one").children[0]
    let menu = document.querySelector(".flexbar-one").children[1]
    let contact = document.querySelector(".flexbar-one").children[2]
    home.addEventListener("click", homeTab)
    menu.addEventListener("click", menuTab)
    contact.addEventListener("click", contactTab)
}
let contactTab = () => {
    content.innerHTML = ""
    ;(0,_pages_contact__WEBPACK_IMPORTED_MODULE_3__["default"])()
    let home = document.querySelector(".flexbar-one").children[0]
    let menu = document.querySelector(".flexbar-one").children[1]
    let contact = document.querySelector(".flexbar-one").children[2]
    home.addEventListener("click", homeTab)
    menu.addEventListener("click", menuTab)
    contact.addEventListener("click", contactTab)
}
home.addEventListener("click", homeTab)
menu.addEventListener("click", menuTab)
contact.addEventListener("click", contactTab)



/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_contact_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/contact.css */ "./src/css/contact.css");


let contactLoad = () => {

    const content = document.getElementById("content");
    const contactUs = document.createElement("div");
    const form = document.createElement("form");
    const divOne = document.createElement("div");
    const divTwo = document.createElement("div");
    const divThree = document.createElement("div");
    const divFour = document.createElement("div");
    const divFive = document.createElement("div");
    const divSix = document.createElement("div");
    const divSeven = document.createElement("div");
    const divEight = document.createElement("div");
    const labelOne = document.createElement("label");
    const labelTwo = document.createElement("label");
    const labelThree = document.createElement("label");
    const inputOne = document.createElement("input");
    const inputTwo = document.createElement("input");
    const textArea = document.createElement("textarea");
    const button = document.createElement("button");
    const contact = document.createElement("div");
    const address = document.createElement("div");
    const map = document.createElement("div");
    const par = document.createElement("p");

    content.classList.add('contact-content')
    content.appendChild(contactUs).classList.add("contact-us")
    contactUs.appendChild(form).classList.add("form-cont")
    form.appendChild(divOne).classList.add("label-size")
    divOne.appendChild(labelOne).setAttribute("for", "text")
    labelOne.textContent = "Name"
    form.appendChild(divTwo).appendChild(inputOne).setAttribute("type", "text")
    inputOne.setAttribute("id", "text")
    form.appendChild(divThree).classList.add('label-size', "red-label")
    divThree.appendChild(labelTwo).setAttribute("for", "email")
    labelTwo.textContent = "Email"
    form.appendChild(divFour).appendChild(inputTwo).setAttribute("type", "email")
    inputTwo.setAttribute("id", "email")
    form.appendChild(divFive).classList.add('label-size')
    divFive.appendChild(labelThree).setAttribute('for', 'message')
    labelThree.textContent = "Message"
    form.appendChild(divSix).appendChild(textArea).setAttribute("id", "message")
    textArea.setAttribute("name", "")
    textArea.setAttribute("cols", "30")
    textArea.setAttribute("rows", "10")
    form.appendChild(divSeven).appendChild(button).classList.add('white-hover', 'send-bt')
    button.setAttribute("type", "submit")
    button.textContent = "Send"

    const navbar = document.createElement("nav");
    const listOne = document.createElement("ul");
    const liOne = document.createElement("li");
    const linkTwo = document.createElement("a");
    const liTwo = document.createElement("li");
    const linkThree = document.createElement("a");
    const liThree = document.createElement("li");
    const linkFour = document.createElement("a");
    const listTwo = document.createElement("ul");
    const liFour = document.createElement("li");
    const linkFive = document.createElement("a");
    const svgOne = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const pathOne = document.createElementNS('http://www.w3.org/2000/svg',"path");
    const liFive = document.createElement("li");
    const linkSix = document.createElement("a");
    const svgTwo = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const pathTwo = document.createElementNS('http://www.w3.org/2000/svg',"path");
    const liSix = document.createElement("li");
    const linkSeven = document.createElement("a");
    const svgThree = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const pathThree = document.createElementNS('http://www.w3.org/2000/svg',"path");

    content.appendChild(divEight)
    divEight.appendChild(navbar).classList.add("navbar")
    navbar.appendChild(listOne).classList.add("flexbar-one", "no-margin", "no-pad")
    listOne.appendChild(liOne).classList.add("white-hover")
    liOne.appendChild(linkTwo).classList.add("no-style-link")
    linkTwo.setAttribute("href", "#!")
    linkTwo.textContent = "Home"
    listOne.appendChild(liTwo).classList.add("white-hover")
    liTwo.appendChild(linkThree).classList.add("no-style-link")
    linkThree.setAttribute("href", "#!")
    linkThree.textContent = "Menu"
    listOne.appendChild(liThree).classList.add("white-hover")
    liThree.appendChild(linkFour).classList.add("no-style-link", "surligne")
    linkFour.setAttribute("href", "#!")
    linkFour.textContent = "Contact"
    navbar.appendChild(listTwo).classList.add("flexbar-two", "no-margin", "no-pad")
    listTwo.appendChild(liFour).classList.add("white-hover")
    liFour.appendChild(linkFive).classList.add("no-style-link")
    linkFive.setAttribute("href", "#!")
    linkFive.appendChild(svgOne)
    svgOne.setAttribute("style", "width: 24px; height: 24px")
    svgOne.setAttribute("viewBox", "0 0 24 24")
    svgOne.appendChild(pathOne).setAttributeNS(null, "fill", "currentColor")
    svgOne.appendChild(pathOne).setAttributeNS(null, "d", "M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z")
    listTwo.appendChild(liFive).classList.add("white-hover")
    liFive.appendChild(linkSix).classList.add("no-style-link")
    linkSix.setAttribute("href", "#!")
    linkSix.appendChild(svgTwo)
    svgTwo.setAttribute("style", "width: 24px; height: 24px")
    svgTwo.setAttribute("viewBox", "0 0 24 24")
    svgTwo.appendChild(pathTwo).setAttributeNS(null, "fill", "currentColor")
    svgTwo.appendChild(pathTwo).setAttributeNS(null, "d", "M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z")
    listTwo.appendChild(liSix).classList.add("white-hover")
    liSix.appendChild(linkSeven).classList.add("no-style-link")
    linkSeven.setAttribute("href", "#!")
    linkSeven.appendChild(svgThree)
    svgThree.setAttribute("style", "width: 24px; height: 24px")
    svgThree.setAttribute("viewBox", "0 0 24 24")
    svgThree.appendChild(pathThree).setAttributeNS(null, "fill", "currentColor")
    svgThree.appendChild(pathThree).setAttributeNS(null, "d", "M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z")

    divEight.appendChild(contact).classList.add("contact")
    contact.appendChild(address).classList.add("address")
    address.appendChild(par).classList.add("red-address", "no-margin")
    par.innerHTML = `Pizza Luigi, Via Normanni, 90138, Palermo PA, Sicily, Italy<br />(+39)
    091-7401111<br />contact@pizza-luigi.it`
    contact.appendChild(map). classList.add("map")
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactLoad);


/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/home.css */ "./src/css/home.css");


let homeLoad = () => {

    const content = document.getElementById("content");
    const header = document.createElement("header");
    const flexCenterOne = document.createElement("div");
    const pizLogo = document.createElement("div");
    const redOp = document.createElement("div");
    const titleOne = document.createElement("h1");
    const parOne = document.createElement("p");
    const flexCenterTwo = document.createElement("div");
    const button = document.createElement("button");
    const linkOne = document.createElement("a");
    const main = document.createElement("main");
    const firstHalf = document.createElement("div");
    const navbar = document.createElement("nav");
    const listOne = document.createElement("ul");
    const liOne = document.createElement("li");
    const linkTwo = document.createElement("a");
    const liTwo = document.createElement("li");
    const linkThree = document.createElement("a");
    const liThree = document.createElement("li");
    const linkFour = document.createElement("a");
    const listTwo = document.createElement("ul");
    const liFour = document.createElement("li");
    const linkFive = document.createElement("a");
    const svgOne = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const pathOne = document.createElementNS('http://www.w3.org/2000/svg',"path");
    const liFive = document.createElement("li");
    const linkSix = document.createElement("a");
    const svgTwo = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const pathTwo = document.createElementNS('http://www.w3.org/2000/svg',"path");
    const liSix = document.createElement("li");
    const linkSeven = document.createElement("a");
    const svgThree = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const pathThree = document.createElementNS('http://www.w3.org/2000/svg',"path");
    const flour = document.createElement("div");
    const menuStar = document.createElement("div");
    const describ = document.createElement("div");
    const parTwo = document.createElement("p");
    const parThree = document.createElement("p");
    const parFour = document.createElement("p");
    const pizza = document.createElement("div");

    content.appendChild(header).classList.add("logo")
    header.appendChild(flexCenterOne).classList.add("flex-center")
    flexCenterOne.appendChild(pizLogo).classList.add("pizlogo")
    header.appendChild(redOp).classList.add("redop-bg")
    redOp.appendChild(titleOne).classList.add("no-margin")
    titleOne.innerHTML = `Not just a Pizza, <span class="green-h1">An Experience</span>`
    redOp.appendChild(parOne).classList.add("no-margin", "about")
    parOne.innerHTML = `From our modest beginnings in 1964, Pizza Luigi has grown to become
    the most recognized pizzeria in Sicily.<br />We create food we are
    proud to serve and believe in giving back to our community.`
    header.appendChild(flexCenterTwo).classList.add("flex-center")
    flexCenterTwo.appendChild(button).classList.add("white-hover", "center-bt")
    button.appendChild(linkOne).classList.add("no-style-link")
    linkOne.textContent = "Order"
    linkOne.setAttribute("href", "#!")
    content.appendChild(main).classList.add("present")
    main.appendChild(firstHalf).classList.add("first-half")
    firstHalf.appendChild(navbar).classList.add("navbar")
    navbar.appendChild(listOne).classList.add("flexbar-one", "no-margin", "no-pad")
    listOne.appendChild(liOne).classList.add("white-hover")
    liOne.appendChild(linkTwo).classList.add("no-style-link", "surligne")
    linkTwo.setAttribute("href", "#!")
    linkTwo.textContent = "Home"
    listOne.appendChild(liTwo).classList.add("white-hover")
    liTwo.appendChild(linkThree).classList.add("no-style-link")
    linkThree.setAttribute("href", "#!")
    linkThree.textContent = "Menu"
    listOne.appendChild(liThree).classList.add("white-hover")
    liThree.appendChild(linkFour).classList.add("no-style-link")
    linkFour.setAttribute("href", "#!")
    linkFour.textContent = "Contact"
    navbar.appendChild(listTwo).classList.add("flexbar-two", "no-margin", "no-pad")
    listTwo.appendChild(liFour).classList.add("white-hover")
    liFour.appendChild(linkFive).classList.add("no-style-link")
    linkFive.setAttribute("href", "#!")
    linkFive.appendChild(svgOne)
    svgOne.setAttribute("style", "width: 24px; height: 24px")
    svgOne.setAttribute("viewBox", "0 0 24 24")
    svgOne.appendChild(pathOne).setAttributeNS(null, "fill", "currentColor")
    svgOne.appendChild(pathOne).setAttributeNS(null, "d", "M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z")
    listTwo.appendChild(liFive).classList.add("white-hover")
    liFive.appendChild(linkSix).classList.add("no-style-link")
    linkSix.setAttribute("href", "#!")
    linkSix.appendChild(svgTwo)
    svgTwo.setAttribute("style", "width: 24px; height: 24px")
    svgTwo.setAttribute("viewBox", "0 0 24 24")
    svgTwo.appendChild(pathTwo).setAttributeNS(null, "fill", "currentColor")
    svgTwo.appendChild(pathTwo).setAttributeNS(null, "d", "M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z")
    listTwo.appendChild(liSix).classList.add("white-hover")
    liSix.appendChild(linkSeven).classList.add("no-style-link")
    linkSeven.setAttribute("href", "#!")
    linkSeven.appendChild(svgThree)
    svgThree.setAttribute("style", "width: 24px; height: 24px")
    svgThree.setAttribute("viewBox", "0 0 24 24")
    svgThree.appendChild(pathThree).setAttributeNS(null, "fill", "currentColor")
    svgThree.appendChild(pathThree).setAttributeNS(null, "d", "M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z")
    firstHalf.appendChild(flour).classList.add("flour")
    main.appendChild(menuStar).classList.add("menu-star")
    menuStar.appendChild(describ).classList.add("describ")
    describ.appendChild(parTwo).textContent = "Our most popular wood-fired pizza"
    parTwo.classList.add("no-margin")
    describ.appendChild(parThree).textContent = "Diavola"
    parThree.classList.add("no-margin", "big-text")
    describ.appendChild(parFour).textContent = `Pepperoni, ham, black olives, basil & oregano, bell peppers,
    mushroom and mozzarella`
    parFour.classList.add("no-margin")
    menuStar.appendChild(pizza).classList.add("pizza")
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeLoad);


/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/menu.css */ "./src/css/menu.css");
/* harmony import */ var _img_cheese_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/cheese.svg */ "./src/img/cheese.svg");
/* harmony import */ var _img_lenga_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/lenga.svg */ "./src/img/lenga.svg");
/* harmony import */ var _img_mix_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/mix.svg */ "./src/img/mix.svg");
/* harmony import */ var _img_original_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/original.svg */ "./src/img/original.svg");
/* harmony import */ var _img_pepperoni_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/pepperoni.svg */ "./src/img/pepperoni.svg");
/* harmony import */ var _img_sfincione_palermitano_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/sfincione-palermitano.svg */ "./src/img/sfincione-palermitano.svg");
/* harmony import */ var _img_wood_menu_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/wood-menu.jpg */ "./src/img/wood-menu.jpg");









let menuLoad = () => {

    const content = document.getElementById("content");
    const menu = document.createElement("div");
    const menuOne = document.createElement("div");
    const menuTwo = document.createElement("div");
    const menuThree = document.createElement("div");
    const menuFour = document.createElement("div");
    const menuFive = document.createElement("div");
    const menuSix = document.createElement("div");
    const imgOne = new Image();
    const imgTwo = new Image();
    const imgThree = new Image();
    const imgFour = new Image();
    const imgFive = new Image();
    const button = document.createElement("button");
    const parOne = document.createElement("p");
    const parTwo = document.createElement("p");
    const parThree = document.createElement("p");
    const parFour = document.createElement("p");
    const parFive = document.createElement("p");
    const present = document.createElement("div");

    content.classList.add("menu-content")
    content.appendChild(menu).classList.add("menu")
    menu.appendChild(menuOne).classList.add("pizza-menu")
    menuOne.appendChild(imgOne).classList.add("pizza-img")
    imgOne.setAttribute("src", "./images/6af82e95c10ac19dfaa2.svg")
    imgOne.setAttribute("alt", "Pepperoni Pizza")
    menuOne.appendChild(parOne).classList.add("no-margin", "centered-w")
    parOne.innerHTML = `<span class="pizza-name">Saucisson </span>Pepperoni, onions, bell
    peppers & roasted garlic`
    menu.appendChild(menuTwo).classList.add("pizza-menu")
    menuTwo.appendChild(imgTwo).classList.add("pizza-img")
    imgTwo.setAttribute("src", "./images/478aa0d73281508ec278.svg")
    imgTwo.setAttribute("alt", "Pizza Alla Pala")
    menuTwo.appendChild(parTwo).classList.add("no-margin", "centered-w")
    parTwo.innerHTML = `<span class="pizza-name">Alla Pala </span>Sliced tomatoes, black
    olives, mozzarella, basil & oregano`
    menu.appendChild(menuThree).classList.add("pizza-menu")
    menuThree.appendChild(imgThree).classList.add("pizza-img")
    imgThree.setAttribute("src", "./images/636f447cd521bfaa8c40.svg")
    imgThree.setAttribute("alt", "Pizza Quattro Formaggi")
    menuThree.appendChild(parThree).classList.add("no-margin", "centered-w")
    parThree.innerHTML = `<span class="pizza-name">Quattro Formaggi </span>Mozzarella,
    taleggio, scamorza & gorgonzola cheese`
    menu.appendChild(menuFour).classList.add("pizza-menu")
    menuFour.appendChild(imgFour).classList.add("pizza-img")
    imgFour.setAttribute("src", "./images/1813818d02aa5d9fc8c5.svg")
    imgFour.setAttribute("alt", "Pizza Napoletana")
    menuFour.appendChild(parFour).classList.add("no-margin", "centered-w")
    parFour.innerHTML = `<span class="pizza-name">Napoletana </span>Mozzarella balls,
    parmesan, basil`
    menu.appendChild(menuFive).classList.add("pizza-menu")
    menuFive.appendChild(imgFive).classList.add("pizza-img")
    imgFive.setAttribute("src", "./images/1e1f80e04a2759226713.svg")
    imgFive.setAttribute("alt", "Pizza La Carne")
    menuFive.appendChild(parFive).classList.add("no-margin", "centered-w")
    parFive.innerHTML = `<span class="pizza-name">La Carne </span>Bacon, pepperoni, ham,
    shiitake, honey`
    menu.appendChild(menuSix).classList.add("pizza-menu")
    menuSix.appendChild(button).classList.add("orderes-bt", "white-hover")
    button.textContent = "View All"

    const firstHalf = document.createElement("div");
    const navbar = document.createElement("nav");
    const listOne = document.createElement("ul");
    const liOne = document.createElement("li");
    const linkTwo = document.createElement("a");
    const liTwo = document.createElement("li");
    const linkThree = document.createElement("a");
    const liThree = document.createElement("li");
    const linkFour = document.createElement("a");
    const listTwo = document.createElement("ul");
    const liFour = document.createElement("li");
    const linkFive = document.createElement("a");
    const svgOne = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const pathOne = document.createElementNS('http://www.w3.org/2000/svg',"path");
    const liFive = document.createElement("li");
    const linkSix = document.createElement("a");
    const svgTwo = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const pathTwo = document.createElementNS('http://www.w3.org/2000/svg',"path");
    const liSix = document.createElement("li");
    const linkSeven = document.createElement("a");
    const svgThree = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const pathThree = document.createElementNS('http://www.w3.org/2000/svg',"path");

    content.appendChild(present).classList.add("present")
    present.appendChild(firstHalf).classList.add("first-half")
    firstHalf.appendChild(navbar).classList.add("navbar")
    navbar.appendChild(listOne).classList.add("flexbar-one", "no-margin", "no-pad")
    listOne.appendChild(liOne).classList.add("white-hover")
    liOne.appendChild(linkTwo).classList.add("no-style-link")
    linkTwo.setAttribute("href", "#!")
    linkTwo.textContent = "Home"
    listOne.appendChild(liTwo).classList.add("white-hover")
    liTwo.appendChild(linkThree).classList.add("no-style-link", "surligne")
    linkThree.setAttribute("href", "#!")
    linkThree.textContent = "Menu"
    listOne.appendChild(liThree).classList.add("white-hover")
    liThree.appendChild(linkFour).classList.add("no-style-link")
    linkFour.setAttribute("href", "#!")
    linkFour.textContent = "Contact"
    navbar.appendChild(listTwo).classList.add("flexbar-two", "no-margin", "no-pad")
    listTwo.appendChild(liFour).classList.add("white-hover")
    liFour.appendChild(linkFive).classList.add("no-style-link")
    linkFive.setAttribute("href", "#!")
    linkFive.appendChild(svgOne)
    svgOne.setAttribute("style", "width: 24px; height: 24px")
    svgOne.setAttribute("viewBox", "0 0 24 24")
    svgOne.appendChild(pathOne).setAttributeNS(null, "fill", "currentColor")
    svgOne.appendChild(pathOne).setAttributeNS(null, "d", "M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z")
    listTwo.appendChild(liFive).classList.add("white-hover")
    liFive.appendChild(linkSix).classList.add("no-style-link")
    linkSix.setAttribute("href", "#!")
    linkSix.appendChild(svgTwo)
    svgTwo.setAttribute("style", "width: 24px; height: 24px")
    svgTwo.setAttribute("viewBox", "0 0 24 24")
    svgTwo.appendChild(pathTwo).setAttributeNS(null, "fill", "currentColor")
    svgTwo.appendChild(pathTwo).setAttributeNS(null, "d", "M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z")
    listTwo.appendChild(liSix).classList.add("white-hover")
    liSix.appendChild(linkSeven).classList.add("no-style-link")
    linkSeven.setAttribute("href", "#!")
    linkSeven.appendChild(svgThree)
    svgThree.setAttribute("style", "width: 24px; height: 24px")
    svgThree.setAttribute("viewBox", "0 0 24 24")
    svgThree.appendChild(pathThree).setAttributeNS(null, "fill", "currentColor")
    svgThree.appendChild(pathThree).setAttributeNS(null, "d", "M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z")

    const star = document.createElement("div");
    const orange = document.createElement("div");
    const sfinc = document.createElement("div");
    const imgSix = new Image();
    const parSix = document.createElement("p");
    const div = document.createElement("div");
    const flexres = document.createElement("div");
    const res = document.createElement("div");
    const parSeven = document.createElement("p");
    const parEight = document.createElement("p");
    const parNine = document.createElement("p");
    const parTen = document.createElement("p");
    const parEleven = document.createElement("p");
    const buttonTwo = document.createElement("button");

    firstHalf.appendChild(star).classList.add("star-dish")
    star.appendChild(orange).classList.add("redorange-wr")
    orange.appendChild(sfinc).classList.add("sfincione")
    sfinc.appendChild(imgSix).classList.add("pizza-sfinc")
    imgSix.setAttribute("src", "./images/28e93770885fd67893c4.svg")
    imgSix.setAttribute("alt", "Pizza Sfincione Palermitano")
    sfinc.appendChild(parSix).classList.add("no-margin")
    parSix.innerHTML = `<span class="pizza-name-two">Sfincione Palermitano </span>Our
    original Sicilian pizza with onions, anchovies, tomatoes, herbs,
    caciocavallo & toma`
    star.appendChild(div).appendChild(flexres).classList.add("flex-reserv")
    flexres.appendChild(res).classList.add("reservation")
    res.appendChild(parSeven).classList.add("no-margin", "red-title")
    parSeven.textContent = "Reservation"
    res.appendChild(parEight).classList.add("no-margin")
    parEight.textContent = "Opening Times"
    res.appendChild(parNine).classList.add("no-margin", "underdash")
    parNine.textContent = "Week Days: 10:30 am - 9:00 pm"
    res.appendChild(parTen).classList.add("no-margin", "underdash")
    parTen.textContent = "Saturday-Sunday: 11:30 am - 10:30 pm"
    res.appendChild(parEleven).classList.add("no-margin", "underdash")
    parEleven.textContent = "Book your table for lunch or dinner"
    res.appendChild(buttonTwo).classList.add("orderes-bt", "align-bt", "white-hover")
    buttonTwo.textContent = "Book"
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuLoad);


/***/ }),

/***/ "./src/fonts/Italianno-Regular-OTF.otf":
/*!*********************************************!*\
  !*** ./src/fonts/Italianno-Regular-OTF.otf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/d7a7c06d7ff96913df56.otf";

/***/ }),

/***/ "./src/img/cheese.svg":
/*!****************************!*\
  !*** ./src/img/cheese.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/636f447cd521bfaa8c40.svg";

/***/ }),

/***/ "./src/img/contact-bg.jpg":
/*!********************************!*\
  !*** ./src/img/contact-bg.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/d2f00610a00c11b4be79.jpg";

/***/ }),

/***/ "./src/img/flour.jpg":
/*!***************************!*\
  !*** ./src/img/flour.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/47622275407820ed2cc6.jpg";

/***/ }),

/***/ "./src/img/lenga.svg":
/*!***************************!*\
  !*** ./src/img/lenga.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/478aa0d73281508ec278.svg";

/***/ }),

/***/ "./src/img/logo-bg.jpg":
/*!*****************************!*\
  !*** ./src/img/logo-bg.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/0a8cc76b8418416f025a.jpg";

/***/ }),

/***/ "./src/img/map.svg":
/*!*************************!*\
  !*** ./src/img/map.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/2a02eb0172a8619114e8.svg";

/***/ }),

/***/ "./src/img/mix.svg":
/*!*************************!*\
  !*** ./src/img/mix.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/1e1f80e04a2759226713.svg";

/***/ }),

/***/ "./src/img/original.svg":
/*!******************************!*\
  !*** ./src/img/original.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/1813818d02aa5d9fc8c5.svg";

/***/ }),

/***/ "./src/img/pepperoni.svg":
/*!*******************************!*\
  !*** ./src/img/pepperoni.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/6af82e95c10ac19dfaa2.svg";

/***/ }),

/***/ "./src/img/pizlogo.png":
/*!*****************************!*\
  !*** ./src/img/pizlogo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/6d251c0212c5db18eb7f.png";

/***/ }),

/***/ "./src/img/pizza-star.png":
/*!********************************!*\
  !*** ./src/img/pizza-star.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/c83b0009df88ba66e0cc.png";

/***/ }),

/***/ "./src/img/sfincione-palermitano.svg":
/*!*******************************************!*\
  !*** ./src/img/sfincione-palermitano.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/28e93770885fd67893c4.svg";

/***/ }),

/***/ "./src/img/wood-bg.jpg":
/*!*****************************!*\
  !*** ./src/img/wood-bg.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/d6a81e3a07fbf608e9e2.jpg";

/***/ }),

/***/ "./src/img/wood-menu.jpg":
/*!*******************************!*\
  !*** ./src/img/wood-menu.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/33c9c65ba2bb97a2a6bb.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxZQUFZLE9BQU8sT0FBTyxNQUFNLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFFBQVEsUUFBUSxNQUFNLFNBQVMsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sT0FBTyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sTUFBTSxRQUFRLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sU0FBUyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFL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QVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QzRCOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUhEOztBQUV6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSEM7QUFDRTtBQUNEO0FBQ0Y7QUFDSztBQUNDO0FBQ1k7QUFDWjs7QUFFOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvY29udGFjdC5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9ob21lLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL21lbnUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9jb250YWN0LmNzcz9kMWQ4Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvaG9tZS5jc3M/MDg0NSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL21lbnUuY3NzP2RkZWMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9ub3JtYWxpemUuY3NzPzZkNTQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0l0YWxpYW5uby1SZWd1bGFyLU9URi5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvY29udGFjdC1iZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvbWFwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkl0YWxpYW5ub1xcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XFxuICAvKiAoNjIuNS8xMDApICogMTZweCA9IDEwcHggKi9cXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICAvKiAxNHB4ICovXFxuICAtLWZvbnQtc2l6ZS1zbWFsbDogMS40cmVtO1xcbiAgLyogMTZweCAqL1xcbiAgLS1mb250LXNpemUtZGVmYXVsdDogMS42cmVtO1xcbiAgLyogMjRweCAqL1xcbiAgLS1mb250LXNpemUtbGFyZ2U6IDIuNHJlbTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1kZWZhdWx0KTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uY29udGFjdC1jb250ZW50IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSXRhbGlhbm5vXFxcIjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjFmcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XFxufVxcblxcbi5jb250YWN0LXVzIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0tY29udCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmxhYmVsLXNpemUge1xcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDI1JSAwJSwgMTAwJSAwJSwgNzUlIDEwMCUsIDAlIDEwMCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjgsIDAsIDAuNzYpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuI3RleHQsXFxuI2VtYWlsLFxcbiNtZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgb3JhbmdlcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNtZXNzYWdlIHtcXG4gIGhlaWdodDogMTUwcHg7XFxufVxcblxcbi5yZWQtbGFiZWx7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0NDAwZTM7XFxufVxcblxcbi5uby1tYXJnaW4ge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc2VuZC1idCB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQ0MDBlMztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGNsaXAtcGF0aDogcG9seWdvbigyNSUgMCUsIDEwMCUgMCUsIDc1JSAxMDAlLCAwJSAxMDAlKTtcXG59XFxuXFxuLnNlbmQtYnQ6YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAycHggNXB4IGJsYWNrO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCkgdHJhbnNsYXRlWSgxcHgpO1xcbn1cXG5cXG4ubm8tcGFkIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5mbGV4YmFyLW9uZSxcXG4uZmxleGJhci10d28ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5uby1zdHlsZS1saW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uZmxleGJhci1vbmUge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuLmZsZXhiYXItdHdvIHtcXG4gIHdpZHRoOiAzMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ud2hpdGUtaG92ZXI6aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY29udGFjdCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjQ1cHggMzA2cHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XFxufVxcblxcbi5hZGRyZXNzIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnJlZC1hZGRyZXNzIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQ1MDBjMjtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi5tYXAge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiA4MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGdyaWQtcm93OiAyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4uc3VybGlnbmV7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9jb250YWN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtFQUN4Qiw0Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsU0FBUztFQUNULHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyx5REFBOEM7RUFDOUMsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzREFBc0Q7RUFDdEQsdUNBQXVDO0VBQ3ZDLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBOzs7RUFHRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDViw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gseURBQXFDO0VBQ3JDLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJdGFsaWFubm9cXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL0l0YWxpYW5uby1SZWd1bGFyLU9URi5vdGZcXFwiKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcXG4gIC8qICg2Mi41LzEwMCkgKiAxNnB4ID0gMTBweCAqL1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIC8qIDE0cHggKi9cXG4gIC0tZm9udC1zaXplLXNtYWxsOiAxLjRyZW07XFxuICAvKiAxNnB4ICovXFxuICAtLWZvbnQtc2l6ZS1kZWZhdWx0OiAxLjZyZW07XFxuICAvKiAyNHB4ICovXFxuICAtLWZvbnQtc2l6ZS1sYXJnZTogMi40cmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWRlZmF1bHQpO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5jb250YWN0LWNvbnRlbnQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJdGFsaWFubm9cXFwiO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuMWZyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWcvY29udGFjdC1iZy5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcXG59XFxuXFxuLmNvbnRhY3QtdXMge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS1jb250IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ubGFiZWwtc2l6ZSB7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMjUlIDAlLCAxMDAlIDAlLCA3NSUgMTAwJSwgMCUgMTAwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC43Nik7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4jdGV4dCxcXG4jZW1haWwsXFxuI21lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCBvcmFuZ2VyZWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI21lc3NhZ2Uge1xcbiAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuLnJlZC1sYWJlbHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQ0MDBlMztcXG59XFxuXFxuLm5vLW1hcmdpbiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5zZW5kLWJ0IHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDQwMGUzO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDI1JSAwJSwgMTAwJSAwJSwgNzUlIDEwMCUsIDAlIDEwMCUpO1xcbn1cXG5cXG4uc2VuZC1idDphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDJweCA1cHggYmxhY2s7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXB4KSB0cmFuc2xhdGVZKDFweCk7XFxufVxcblxcbi5uby1wYWQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmZsZXhiYXItb25lLFxcbi5mbGV4YmFyLXR3byB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLm5vLXN0eWxlLWxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5mbGV4YmFyLW9uZSB7XFxuICB3aWR0aDogNzAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4uZmxleGJhci10d28ge1xcbiAgd2lkdGg6IDMwJTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi53aGl0ZS1ob3Zlcjpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250YWN0IHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNDVweCAzMDZweDtcXG4gIGp1c3RpZnktaXRlbXM6IGVuZDtcXG59XFxuXFxuLmFkZHJlc3Mge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ucmVkLWFkZHJlc3Mge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDUwMGMyO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLm1hcCB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL21hcC5zdmcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5zdXJsaWduZXtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0l0YWxpYW5uby1SZWd1bGFyLU9URi5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvbG9nby1iZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvcGl6bG9nby5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9pbWcvZmxvdXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vaW1nL3dvb2QtYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vaW1nL3BpenphLXN0YXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSXRhbGlhbm5vXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcXG4gIC8qICg2Mi41LzEwMCkgKiAxNnB4ID0gMTBweCAqL1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIC8qIDE0cHggKi9cXG4gIC0tZm9udC1zaXplLXNtYWxsOiAxLjRyZW07XFxuICAvKiAxNnB4ICovXFxuICAtLWZvbnQtc2l6ZS1kZWZhdWx0OiAxLjZyZW07XFxuICAvKiAyNHB4ICovXFxuICAtLWZvbnQtc2l6ZS1sYXJnZTogMi40cmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWRlZmF1bHQpO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSXRhbGlhbm5vXFxcIjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjFmcjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMDBweCAwZnIgMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmZsZXgtY2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ucGl6bG9nbyB7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgaGVpZ2h0OiA5NSU7XFxuICB3aWR0aDogNTUlO1xcbiAgb3BhY2l0eTogMC45O1xcbiAgbWluLXdpZHRoOiAxODVweDtcXG59XFxuXFxuLnJlZG9wLWJnIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0NDAwYzA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubm8tbWFyZ2luIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLm5vLXBhZCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uZ3JlZW4taDEge1xcbiAgY29sb3I6ICMwNTI2MDU7XFxuICBmb250LXNpemU6IDZyZW07XFxufVxcblxcbi5hYm91dCB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2VudGVyLWJ0IHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBib3JkZXItcmFkaXVzOiAyMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5jZW50ZXItYnQ6YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAycHggNXB4IGJsYWNrO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCkgdHJhbnNsYXRlWSgxcHgpO1xcbn1cXG5cXG4ucHJlc2VudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uZmlyc3QtaGFsZiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwZnIgM2ZyO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZmxleGJhci1vbmUsXFxuLmZsZXhiYXItdHdvIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubm8tc3R5bGUtbGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmZsZXhiYXItb25lIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5mbGV4YmFyLXR3byB7XFxuICB3aWR0aDogMzAlO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLndoaXRlLWhvdmVyOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZsb3VyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtc3RhciB7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDYwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmRlc2NyaWIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uYmlnLXRleHQge1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnBpenphIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLnN1cmxpZ25le1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaG9tZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsNENBQThDO0FBQ2hEOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLFNBQVM7RUFDVCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyx5REFBeUM7RUFDekMsMkJBQTJCO0VBQzNCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHlEQUF5QztFQUN6QyxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UseURBQXVDO0VBQ3ZDLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHlEQUF5QztFQUN6QyxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLHlEQUE0QztFQUM1Qyx3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSXRhbGlhbm5vXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9JdGFsaWFubm8tUmVndWxhci1PVEYub3RmXFxcIik7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XFxuICAvKiAoNjIuNS8xMDApICogMTZweCA9IDEwcHggKi9cXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICAvKiAxNHB4ICovXFxuICAtLWZvbnQtc2l6ZS1zbWFsbDogMS40cmVtO1xcbiAgLyogMTZweCAqL1xcbiAgLS1mb250LXNpemUtZGVmYXVsdDogMS42cmVtO1xcbiAgLyogMjRweCAqL1xcbiAgLS1mb250LXNpemUtbGFyZ2U6IDIuNHJlbTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1kZWZhdWx0KTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBmb250LWZhbWlseTogXFxcIkl0YWxpYW5ub1xcXCI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS4xZnI7XFxufVxcblxcbi5sb2dvIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjAwcHggMGZyIDEwMHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9sb2dvLWJnLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uZmxleC1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5waXpsb2dvIHtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL3BpemxvZ28ucG5nKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgaGVpZ2h0OiA5NSU7XFxuICB3aWR0aDogNTUlO1xcbiAgb3BhY2l0eTogMC45O1xcbiAgbWluLXdpZHRoOiAxODVweDtcXG59XFxuXFxuLnJlZG9wLWJnIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0NDAwYzA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubm8tbWFyZ2luIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLm5vLXBhZCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uZ3JlZW4taDEge1xcbiAgY29sb3I6ICMwNTI2MDU7XFxuICBmb250LXNpemU6IDZyZW07XFxufVxcblxcbi5hYm91dCB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2VudGVyLWJ0IHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBib3JkZXItcmFkaXVzOiAyMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5jZW50ZXItYnQ6YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAycHggNXB4IGJsYWNrO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCkgdHJhbnNsYXRlWSgxcHgpO1xcbn1cXG5cXG4ucHJlc2VudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uZmlyc3QtaGFsZiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwZnIgM2ZyO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZmxleGJhci1vbmUsXFxuLmZsZXhiYXItdHdvIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubm8tc3R5bGUtbGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmZsZXhiYXItb25lIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5mbGV4YmFyLXR3byB7XFxuICB3aWR0aDogMzAlO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLndoaXRlLWhvdmVyOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZsb3VyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvZmxvdXIuanBnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1zdGFyIHtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgNjAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy93b29kLWJnLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmRlc2NyaWIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uYmlnLXRleHQge1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnBpenphIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL3BpenphLXN0YXIucG5nKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5zdXJsaWduZXtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0l0YWxpYW5uby1SZWd1bGFyLU9URi5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvd29vZC1tZW51LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSXRhbGlhbm5vXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcXG4gIC8qICg2Mi41LzEwMCkgKiAxNnB4ID0gMTBweCAqL1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIC8qIDE0cHggKi9cXG4gIC0tZm9udC1zaXplLXNtYWxsOiAxLjRyZW07XFxuICAvKiAxNnB4ICovXFxuICAtLWZvbnQtc2l6ZS1kZWZhdWx0OiAxLjZyZW07XFxuICAvKiAyNHB4ICovXFxuICAtLWZvbnQtc2l6ZS1sYXJnZTogMi40cmVtO1xcblxcbiAgb3ZlcmZsb3cteTpzY3JvbGw7XFxuXFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtZGVmYXVsdCk7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLm1lbnUtY29udGVudCB7XFxuICBmb250LWZhbWlseTogXFxcIkl0YWxpYW5ub1xcXCI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS4xZnI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5tZW51IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLm5vLW1hcmdpbiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5waXp6YS1tZW51IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDQwMGUzO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKFxcbiAgICAwJSAxMCUsXFxuICAgIDEwJSAxMCUsXFxuICAgIDEwJSAwJSxcXG4gICAgOTAlIDAlLFxcbiAgICA5MCUgMTAlLFxcbiAgICAxMDAlIDEwJSxcXG4gICAgMTAwJSA5MCUsXFxuICAgIDkwJSA5MCUsXFxuICAgIDkwJSAxMDAlLFxcbiAgICAxMCUgMTAwJSxcXG4gICAgMTAlIDkwJSxcXG4gICAgMCUgOTAlXFxuICApO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnBpenphLWltZyB7XFxuICB3aWR0aDogMTgwcHg7XFxufVxcblxcbi5waXp6YS1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmNlbnRlcmVkLXcge1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLm9yZGVyZXMtYnQge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5vcmRlcmVzLWJ0OmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBpbnNldCAxcHggMnB4IDVweCBibGFjaztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpIHRyYW5zbGF0ZVkoMXB4KTtcXG59XFxuXFxuLm5vLXBhZCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ucHJlc2VudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uZmlyc3QtaGFsZiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwZnIgM2ZyO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZmxleGJhci1vbmUsXFxuLmZsZXhiYXItdHdvIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubm8tc3R5bGUtbGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmZsZXhiYXItb25lIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5mbGV4YmFyLXR3byB7XFxuICB3aWR0aDogMzAlO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLndoaXRlLWhvdmVyOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnN0YXItZGlzaCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MDBweCAyMDBweDtcXG59XFxuXFxuLnJlZG9yYW5nZS13ciB7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgODUlLCAwJSAxMDAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQ1MDA7XFxufVxcblxcbi5zZmluY2lvbmUge1xcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDc0JSwgMCUgMTAwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDAwYzc7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMDBweCAyMDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5waXp6YS1zZmluYyB7XFxuICB3aWR0aDogMzEwcHg7XFxufVxcblxcbi5waXp6YS1uYW1lLXR3byB7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4uZmxleC1yZXNlcnYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucmVkLXRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmFsaWduLWJ0IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnVuZGVyZGFzaCB7XFxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIG9yYW5nZXJlZDtcXG59XFxuXFxuLnJlc2VydmF0aW9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3VybGlnbmV7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tZW51LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtFQUN4Qiw0Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsU0FBUztFQUNULHlCQUF5Qjs7RUFFekIsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyx5REFBNkM7RUFDN0MsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQjs7Ozs7Ozs7Ozs7OztHQWFDO0VBQ0QsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDViw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0RBQWtEO0VBQ2xELHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtEQUFrRDtFQUNsRCwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJdGFsaWFubm9cXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL0l0YWxpYW5uby1SZWd1bGFyLU9URi5vdGZcXFwiKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcXG4gIC8qICg2Mi41LzEwMCkgKiAxNnB4ID0gMTBweCAqL1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIC8qIDE0cHggKi9cXG4gIC0tZm9udC1zaXplLXNtYWxsOiAxLjRyZW07XFxuICAvKiAxNnB4ICovXFxuICAtLWZvbnQtc2l6ZS1kZWZhdWx0OiAxLjZyZW07XFxuICAvKiAyNHB4ICovXFxuICAtLWZvbnQtc2l6ZS1sYXJnZTogMi40cmVtO1xcblxcbiAgb3ZlcmZsb3cteTpzY3JvbGw7XFxuXFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtZGVmYXVsdCk7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLm1lbnUtY29udGVudCB7XFxuICBmb250LWZhbWlseTogXFxcIkl0YWxpYW5ub1xcXCI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS4xZnI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltZy93b29kLW1lbnUuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLm1lbnUge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubm8tbWFyZ2luIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnBpenphLW1lbnUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0NDAwZTM7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oXFxuICAgIDAlIDEwJSxcXG4gICAgMTAlIDEwJSxcXG4gICAgMTAlIDAlLFxcbiAgICA5MCUgMCUsXFxuICAgIDkwJSAxMCUsXFxuICAgIDEwMCUgMTAlLFxcbiAgICAxMDAlIDkwJSxcXG4gICAgOTAlIDkwJSxcXG4gICAgOTAlIDEwMCUsXFxuICAgIDEwJSAxMDAlLFxcbiAgICAxMCUgOTAlLFxcbiAgICAwJSA5MCVcXG4gICk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucGl6emEtaW1nIHtcXG4gIHdpZHRoOiAxODBweDtcXG59XFxuXFxuLnBpenphLW5hbWUge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uY2VudGVyZWQtdyB7XFxuICB3aWR0aDogNzAlO1xcbn1cXG5cXG4ub3JkZXJlcy1idCB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLm9yZGVyZXMtYnQ6YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAycHggNXB4IGJsYWNrO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCkgdHJhbnNsYXRlWSgxcHgpO1xcbn1cXG5cXG4ubm8tcGFkIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5wcmVzZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5maXJzdC1oYWxmIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDBmciAzZnI7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5mbGV4YmFyLW9uZSxcXG4uZmxleGJhci10d28ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5uby1zdHlsZS1saW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uZmxleGJhci1vbmUge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuLmZsZXhiYXItdHdvIHtcXG4gIHdpZHRoOiAzMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ud2hpdGUtaG92ZXI6aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3Rhci1kaXNoIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwMHB4IDIwMHB4O1xcbn1cXG5cXG4ucmVkb3JhbmdlLXdyIHtcXG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSA4NSUsIDAlIDEwMCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDUwMDtcXG59XFxuXFxuLnNmaW5jaW9uZSB7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgNzQlLCAwJSAxMDAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDgwMDBjNztcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwMHB4IDIwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBpenphLXNmaW5jIHtcXG4gIHdpZHRoOiAzMTBweDtcXG59XFxuXFxuLnBpenphLW5hbWUtdHdvIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5mbGV4LXJlc2VydiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5yZWQtdGl0bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uYWxpZ24tYnQge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udW5kZXJkYXNoIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgb3JhbmdlcmVkO1xcbn1cXG5cXG4ucmVzZXJ2YXRpb24ge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5zdXJsaWduZXtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgICAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAgICAgICAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gICAgICAgKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gICAgICAgKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gICAgICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICAgICAgICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gICAgICAgKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICAgICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICAgICAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICAgICAgICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAvKiAxICovXFxuICBoZWlnaHQ6IDA7XFxuICAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgICAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAgICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAgICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgICAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAgICAgICAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAgICAgICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICAgICAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gICAgICAgKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICAgICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICAgICAgICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICAgICAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAgICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAgICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgICAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAgICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAgICAgICAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAgICAgICAqIGFsbCBicm93c2Vycy5cXG4gICAgICAgKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgICAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAgICAgKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgICAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAgICAgICAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7XFxuICAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIC8qIDEgKi9cXG4gIG1hcmdpbjogMDtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgICAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICAgICAgICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gICAgICAgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAgICAgICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAgICAgICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gICAgICAgKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAgICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICAgICAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gICAgICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICAgICAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAgICAgICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gICAgICAgKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAgICAgICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAgICAgKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAgICAgICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICAgICAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAgICAgICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gICAgICAgKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gICAgICAgKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7XFxuICAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICAgICAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gICAgICAgKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAgICAgICAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAgICAgICAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gICAgICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gICAgICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICAgICAgICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICAgICAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gICAgICAgKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICAgICAgICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICAgICAgICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICAgICAgICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICAgICAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gICAgICAgKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAgICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICAgICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gICAgICAgKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICAgICAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gICAgICAgKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAgICAgICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gICAgICAgKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgICAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAgICAgICAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICAgICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAgICAgICAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsaUJBQWlCO0VBQ2pCLE1BQU07RUFDTiw4QkFBOEI7RUFDOUIsTUFBTTtBQUNSOztBQUVBO3FGQUNxRjs7QUFFckY7O1FBRVE7O0FBRVI7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O1FBRVE7O0FBRVI7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7UUFHUTs7QUFFUjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7cUZBQ3FGOztBQUVyRjs7O1FBR1E7O0FBRVI7RUFDRSx1QkFBdUI7RUFDdkIsTUFBTTtFQUNOLFNBQVM7RUFDVCxNQUFNO0VBQ04saUJBQWlCO0VBQ2pCLE1BQU07QUFDUjs7QUFFQTs7O1FBR1E7O0FBRVI7RUFDRSxpQ0FBaUM7RUFDakMsTUFBTTtFQUNOLGNBQWM7RUFDZCxNQUFNO0FBQ1I7O0FBRUE7cUZBQ3FGOztBQUVyRjs7UUFFUTs7QUFFUjtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7O1FBR1E7O0FBRVI7RUFDRSxtQkFBbUI7RUFDbkIsTUFBTTtFQUNOLDBCQUEwQjtFQUMxQixNQUFNO0VBQ04saUNBQWlDO0VBQ2pDLE1BQU07QUFDUjs7QUFFQTs7UUFFUTs7QUFFUjs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7OztRQUdROztBQUVSOzs7RUFHRSxpQ0FBaUM7RUFDakMsTUFBTTtFQUNOLGNBQWM7RUFDZCxNQUFNO0FBQ1I7O0FBRUE7O1FBRVE7O0FBRVI7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7UUFHUTs7QUFFUjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO3FGQUNxRjs7QUFFckY7O1FBRVE7O0FBRVI7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7cUZBQ3FGOztBQUVyRjs7O1FBR1E7O0FBRVI7Ozs7O0VBS0Usb0JBQW9CO0VBQ3BCLE1BQU07RUFDTixlQUFlO0VBQ2YsTUFBTTtFQUNOLGlCQUFpQjtFQUNqQixNQUFNO0VBQ04sU0FBUztFQUNULE1BQU07QUFDUjs7QUFFQTs7O1FBR1E7O0FBRVI7O0VBRUUsTUFBTTtFQUNOLGlCQUFpQjtBQUNuQjs7QUFFQTs7O1FBR1E7O0FBRVI7O0VBRUUsTUFBTTtFQUNOLG9CQUFvQjtBQUN0Qjs7QUFFQTs7UUFFUTs7QUFFUjs7OztFQUlFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7UUFFUTs7QUFFUjs7OztFQUlFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7O1FBRVE7O0FBRVI7Ozs7RUFJRSw4QkFBOEI7QUFDaEM7O0FBRUE7O1FBRVE7O0FBRVI7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7O1FBS1E7O0FBRVI7RUFDRSxzQkFBc0I7RUFDdEIsTUFBTTtFQUNOLGNBQWM7RUFDZCxNQUFNO0VBQ04sY0FBYztFQUNkLE1BQU07RUFDTixlQUFlO0VBQ2YsTUFBTTtFQUNOLFVBQVU7RUFDVixNQUFNO0VBQ04sbUJBQW1CO0VBQ25CLE1BQU07QUFDUjs7QUFFQTs7UUFFUTs7QUFFUjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7UUFFUTs7QUFFUjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztRQUdROztBQUVSOztFQUVFLHNCQUFzQjtFQUN0QixNQUFNO0VBQ04sVUFBVTtFQUNWLE1BQU07QUFDUjs7QUFFQTs7UUFFUTs7QUFFUjs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7OztRQUdROztBQUVSO0VBQ0UsNkJBQTZCO0VBQzdCLE1BQU07RUFDTixvQkFBb0I7RUFDcEIsTUFBTTtBQUNSOztBQUVBOztRQUVROztBQUVSO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7UUFHUTs7QUFFUjtFQUNFLDBCQUEwQjtFQUMxQixNQUFNO0VBQ04sYUFBYTtFQUNiLE1BQU07QUFDUjs7QUFFQTtxRkFDcUY7O0FBRXJGOztRQUVROztBQUVSO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7UUFFUTs7QUFFUjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtxRkFDcUY7O0FBRXJGOztRQUVROztBQUVSO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztRQUVROztBQUVSO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAgICAgKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICAgICAgICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAgICAgICAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAgICAgICAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAgICAgICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gICAgICAgKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAgICAgICAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgICAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gICAgICAgKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gICAgICAgKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC8qIDEgKi9cXG4gIGhlaWdodDogMDtcXG4gIC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAgICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICAgICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAgICAgKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07XFxuICAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAgICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICAgICAgICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICAgICAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gICAgICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAgICAgICAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgICAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gICAgICAgKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gICAgICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICAgICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAgICAgKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAgICAgKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICAgICAgICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICAgICAgICogYWxsIGJyb3dzZXJzLlxcbiAgICAgICAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAgICAgKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAgICAgICAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAgICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gICAgICAgKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICAgICAgICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgLyogMSAqL1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAgICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gICAgICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAgICAgICAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICAgICAgICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICAgICAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAgICAgICAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICAgICAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgICAgICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAgICAgICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgICAgICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICAgICAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAgICAgICAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICAgICAgICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICAgICAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICAgICAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gICAgICAgKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICAgICAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAgICAgICAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICAgICAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gICAgICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAgICAgICAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICAgICAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICAgICAgICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAgICAgICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAgICAgICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gICAgICAgKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogMSAqL1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgICAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAgICAgICAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gICAgICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gICAgICAgKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gICAgICAgKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgICAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAgICAgICAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICAgICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgICAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAgICAgICAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICAvKiAxICovXFxuICBmb250OiBpbmhlcml0O1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gICAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAgICAgICAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICAgICAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICAgICAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICAgICAgICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgICAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICAgICAgICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRhY3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250YWN0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL2Nzcy9ub3JtYWxpemUuY3NzJztcbmltcG9ydCBob21lTG9hZCBmcm9tIFwiLi9wYWdlcy9ob21lXCJcbmltcG9ydCBtZW51TG9hZCBmcm9tIFwiLi9wYWdlcy9tZW51XCJcbmltcG9ydCBjb250YWN0TG9hZCBmcm9tIFwiLi9wYWdlcy9jb250YWN0XCJcbmhvbWVMb2FkKClcbmxldCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mbGV4YmFyLW9uZVwiKS5jaGlsZHJlblswXVxubGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZsZXhiYXItb25lXCIpLmNoaWxkcmVuWzFdXG5sZXQgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmxleGJhci1vbmVcIikuY2hpbGRyZW5bMl1cbmxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXG5sZXQgaG9tZVRhYiA9ICgpID0+IHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCJcbiAgICBob21lTG9hZCgpXG4gICAgbGV0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZsZXhiYXItb25lXCIpLmNoaWxkcmVuWzBdXG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZsZXhiYXItb25lXCIpLmNoaWxkcmVuWzFdXG4gICAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZsZXhiYXItb25lXCIpLmNoaWxkcmVuWzJdXG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9tZVRhYilcbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtZW51VGFiKVxuICAgIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbnRhY3RUYWIpXG59XG5sZXQgbWVudVRhYiA9ICgpID0+IHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCJcbiAgICBtZW51TG9hZCgpXG4gICAgbGV0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZsZXhiYXItb25lXCIpLmNoaWxkcmVuWzBdXG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZsZXhiYXItb25lXCIpLmNoaWxkcmVuWzFdXG4gICAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZsZXhiYXItb25lXCIpLmNoaWxkcmVuWzJdXG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9tZVRhYilcbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtZW51VGFiKVxuICAgIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbnRhY3RUYWIpXG59XG5sZXQgY29udGFjdFRhYiA9ICgpID0+IHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCJcbiAgICBjb250YWN0TG9hZCgpXG4gICAgbGV0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZsZXhiYXItb25lXCIpLmNoaWxkcmVuWzBdXG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZsZXhiYXItb25lXCIpLmNoaWxkcmVuWzFdXG4gICAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZsZXhiYXItb25lXCIpLmNoaWxkcmVuWzJdXG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9tZVRhYilcbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtZW51VGFiKVxuICAgIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbnRhY3RUYWIpXG59XG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBob21lVGFiKVxubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWVudVRhYilcbmNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbnRhY3RUYWIpXG5cbiIsImltcG9ydCAnLi4vY3NzL2NvbnRhY3QuY3NzJztcblxubGV0IGNvbnRhY3RMb2FkID0gKCkgPT4ge1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCBjb250YWN0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBjb25zdCBkaXZPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRpdlR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZGl2VGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRpdkZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRpdkZpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRpdlNpeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZGl2U2V2ZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRpdkVpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBsYWJlbE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCBsYWJlbFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCBsYWJlbFRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IGlucHV0T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGlucHV0VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1jb250ZW50JylcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RVcykuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtdXNcIilcbiAgICBjb250YWN0VXMuYXBwZW5kQ2hpbGQoZm9ybSkuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udFwiKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGl2T25lKS5jbGFzc0xpc3QuYWRkKFwibGFiZWwtc2l6ZVwiKVxuICAgIGRpdk9uZS5hcHBlbmRDaGlsZChsYWJlbE9uZSkuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGV4dFwiKVxuICAgIGxhYmVsT25lLnRleHRDb250ZW50ID0gXCJOYW1lXCJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRpdlR3bykuYXBwZW5kQ2hpbGQoaW5wdXRPbmUpLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpXG4gICAgaW5wdXRPbmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZXh0XCIpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkaXZUaHJlZSkuY2xhc3NMaXN0LmFkZCgnbGFiZWwtc2l6ZScsIFwicmVkLWxhYmVsXCIpXG4gICAgZGl2VGhyZWUuYXBwZW5kQ2hpbGQobGFiZWxUd28pLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImVtYWlsXCIpXG4gICAgbGFiZWxUd28udGV4dENvbnRlbnQgPSBcIkVtYWlsXCJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRpdkZvdXIpLmFwcGVuZENoaWxkKGlucHV0VHdvKS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZW1haWxcIilcbiAgICBpbnB1dFR3by5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVtYWlsXCIpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkaXZGaXZlKS5jbGFzc0xpc3QuYWRkKCdsYWJlbC1zaXplJylcbiAgICBkaXZGaXZlLmFwcGVuZENoaWxkKGxhYmVsVGhyZWUpLnNldEF0dHJpYnV0ZSgnZm9yJywgJ21lc3NhZ2UnKVxuICAgIGxhYmVsVGhyZWUudGV4dENvbnRlbnQgPSBcIk1lc3NhZ2VcIlxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGl2U2l4KS5hcHBlbmRDaGlsZCh0ZXh0QXJlYSkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZXNzYWdlXCIpXG4gICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIlwiKVxuICAgIHRleHRBcmVhLnNldEF0dHJpYnV0ZShcImNvbHNcIiwgXCIzMFwiKVxuICAgIHRleHRBcmVhLnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCIxMFwiKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGl2U2V2ZW4pLmFwcGVuZENoaWxkKGJ1dHRvbikuY2xhc3NMaXN0LmFkZCgnd2hpdGUtaG92ZXInLCAnc2VuZC1idCcpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIilcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlNlbmRcIlxuXG4gICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBjb25zdCBsaXN0T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGNvbnN0IGxpT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGxpbmtUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBsaVR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBsaW5rVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBsaVRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGxpbmtGb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY29uc3QgbGlzdFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBjb25zdCBsaUZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgbGlua0ZpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBzdmdPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIGNvbnN0IHBhdGhPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcInBhdGhcIik7XG4gICAgY29uc3QgbGlGaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGxpbmtTaXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBzdmdUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIGNvbnN0IHBhdGhUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcInBhdGhcIik7XG4gICAgY29uc3QgbGlTaXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgbGlua1NldmVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY29uc3Qgc3ZnVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIGNvbnN0IHBhdGhUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFwicGF0aFwiKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2RWlnaHQpXG4gICAgZGl2RWlnaHQuYXBwZW5kQ2hpbGQobmF2YmFyKS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGxpc3RPbmUpLmNsYXNzTGlzdC5hZGQoXCJmbGV4YmFyLW9uZVwiLCBcIm5vLW1hcmdpblwiLCBcIm5vLXBhZFwiKVxuICAgIGxpc3RPbmUuYXBwZW5kQ2hpbGQobGlPbmUpLmNsYXNzTGlzdC5hZGQoXCJ3aGl0ZS1ob3ZlclwiKVxuICAgIGxpT25lLmFwcGVuZENoaWxkKGxpbmtUd28pLmNsYXNzTGlzdC5hZGQoXCJuby1zdHlsZS1saW5rXCIpXG4gICAgbGlua1R3by5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiIyFcIilcbiAgICBsaW5rVHdvLnRleHRDb250ZW50ID0gXCJIb21lXCJcbiAgICBsaXN0T25lLmFwcGVuZENoaWxkKGxpVHdvKS5jbGFzc0xpc3QuYWRkKFwid2hpdGUtaG92ZXJcIilcbiAgICBsaVR3by5hcHBlbmRDaGlsZChsaW5rVGhyZWUpLmNsYXNzTGlzdC5hZGQoXCJuby1zdHlsZS1saW5rXCIpXG4gICAgbGlua1RocmVlLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjIVwiKVxuICAgIGxpbmtUaHJlZS50ZXh0Q29udGVudCA9IFwiTWVudVwiXG4gICAgbGlzdE9uZS5hcHBlbmRDaGlsZChsaVRocmVlKS5jbGFzc0xpc3QuYWRkKFwid2hpdGUtaG92ZXJcIilcbiAgICBsaVRocmVlLmFwcGVuZENoaWxkKGxpbmtGb3VyKS5jbGFzc0xpc3QuYWRkKFwibm8tc3R5bGUtbGlua1wiLCBcInN1cmxpZ25lXCIpXG4gICAgbGlua0ZvdXIuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiMhXCIpXG4gICAgbGlua0ZvdXIudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIlxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChsaXN0VHdvKS5jbGFzc0xpc3QuYWRkKFwiZmxleGJhci10d29cIiwgXCJuby1tYXJnaW5cIiwgXCJuby1wYWRcIilcbiAgICBsaXN0VHdvLmFwcGVuZENoaWxkKGxpRm91cikuY2xhc3NMaXN0LmFkZChcIndoaXRlLWhvdmVyXCIpXG4gICAgbGlGb3VyLmFwcGVuZENoaWxkKGxpbmtGaXZlKS5jbGFzc0xpc3QuYWRkKFwibm8tc3R5bGUtbGlua1wiKVxuICAgIGxpbmtGaXZlLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjIVwiKVxuICAgIGxpbmtGaXZlLmFwcGVuZENoaWxkKHN2Z09uZSlcbiAgICBzdmdPbmUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XCIpXG4gICAgc3ZnT25lLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIilcbiAgICBzdmdPbmUuYXBwZW5kQ2hpbGQocGF0aE9uZSkuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJmaWxsXCIsIFwiY3VycmVudENvbG9yXCIpXG4gICAgc3ZnT25lLmFwcGVuZENoaWxkKHBhdGhPbmUpLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiZFwiLCBcIk0xMiAyLjA0QzYuNSAyLjA0IDIgNi41MyAyIDEyLjA2QzIgMTcuMDYgNS42NiAyMS4yMSAxMC40NCAyMS45NlYxNC45Nkg3LjlWMTIuMDZIMTAuNDRWOS44NUMxMC40NCA3LjM0IDExLjkzIDUuOTYgMTQuMjIgNS45NkMxNS4zMSA1Ljk2IDE2LjQ1IDYuMTUgMTYuNDUgNi4xNVY4LjYySDE1LjE5QzEzLjk1IDguNjIgMTMuNTYgOS4zOSAxMy41NiAxMC4xOFYxMi4wNkgxNi4zNEwxNS44OSAxNC45NkgxMy41NlYyMS45NkExMCAxMCAwIDAgMCAyMiAxMi4wNkMyMiA2LjUzIDE3LjUgMi4wNCAxMiAyLjA0WlwiKVxuICAgIGxpc3RUd28uYXBwZW5kQ2hpbGQobGlGaXZlKS5jbGFzc0xpc3QuYWRkKFwid2hpdGUtaG92ZXJcIilcbiAgICBsaUZpdmUuYXBwZW5kQ2hpbGQobGlua1NpeCkuY2xhc3NMaXN0LmFkZChcIm5vLXN0eWxlLWxpbmtcIilcbiAgICBsaW5rU2l4LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjIVwiKVxuICAgIGxpbmtTaXguYXBwZW5kQ2hpbGQoc3ZnVHdvKVxuICAgIHN2Z1R3by5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcIilcbiAgICBzdmdUd28uc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKVxuICAgIHN2Z1R3by5hcHBlbmRDaGlsZChwYXRoVHdvKS5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImZpbGxcIiwgXCJjdXJyZW50Q29sb3JcIilcbiAgICBzdmdUd28uYXBwZW5kQ2hpbGQocGF0aFR3bykuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJkXCIsIFwiTTcuOCwySDE2LjJDMTkuNCwyIDIyLDQuNiAyMiw3LjhWMTYuMkE1LjgsNS44IDAgMCwxIDE2LjIsMjJINy44QzQuNiwyMiAyLDE5LjQgMiwxNi4yVjcuOEE1LjgsNS44IDAgMCwxIDcuOCwyTTcuNiw0QTMuNiwzLjYgMCAwLDAgNCw3LjZWMTYuNEM0LDE4LjM5IDUuNjEsMjAgNy42LDIwSDE2LjRBMy42LDMuNiAwIDAsMCAyMCwxNi40VjcuNkMyMCw1LjYxIDE4LjM5LDQgMTYuNCw0SDcuNk0xNy4yNSw1LjVBMS4yNSwxLjI1IDAgMCwxIDE4LjUsNi43NUExLjI1LDEuMjUgMCAwLDEgMTcuMjUsOEExLjI1LDEuMjUgMCAwLDEgMTYsNi43NUExLjI1LDEuMjUgMCAwLDEgMTcuMjUsNS41TTEyLDdBNSw1IDAgMCwxIDE3LDEyQTUsNSAwIDAsMSAxMiwxN0E1LDUgMCAwLDEgNywxMkE1LDUgMCAwLDEgMTIsN00xMiw5QTMsMyAwIDAsMCA5LDEyQTMsMyAwIDAsMCAxMiwxNUEzLDMgMCAwLDAgMTUsMTJBMywzIDAgMCwwIDEyLDlaXCIpXG4gICAgbGlzdFR3by5hcHBlbmRDaGlsZChsaVNpeCkuY2xhc3NMaXN0LmFkZChcIndoaXRlLWhvdmVyXCIpXG4gICAgbGlTaXguYXBwZW5kQ2hpbGQobGlua1NldmVuKS5jbGFzc0xpc3QuYWRkKFwibm8tc3R5bGUtbGlua1wiKVxuICAgIGxpbmtTZXZlbi5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiIyFcIilcbiAgICBsaW5rU2V2ZW4uYXBwZW5kQ2hpbGQoc3ZnVGhyZWUpXG4gICAgc3ZnVGhyZWUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XCIpXG4gICAgc3ZnVGhyZWUuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKVxuICAgIHN2Z1RocmVlLmFwcGVuZENoaWxkKHBhdGhUaHJlZSkuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJmaWxsXCIsIFwiY3VycmVudENvbG9yXCIpXG4gICAgc3ZnVGhyZWUuYXBwZW5kQ2hpbGQocGF0aFRocmVlKS5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImRcIiwgXCJNMjIuNDYsNkMyMS42OSw2LjM1IDIwLjg2LDYuNTggMjAsNi42OUMyMC44OCw2LjE2IDIxLjU2LDUuMzIgMjEuODgsNC4zMUMyMS4wNSw0LjgxIDIwLjEzLDUuMTYgMTkuMTYsNS4zNkMxOC4zNyw0LjUgMTcuMjYsNCAxNiw0QzEzLjY1LDQgMTEuNzMsNS45MiAxMS43Myw4LjI5QzExLjczLDguNjMgMTEuNzcsOC45NiAxMS44NCw5LjI3QzguMjgsOS4wOSA1LjExLDcuMzggMyw0Ljc5QzIuNjMsNS40MiAyLjQyLDYuMTYgMi40Miw2Ljk0QzIuNDIsOC40MyAzLjE3LDkuNzUgNC4zMywxMC41QzMuNjIsMTAuNSAyLjk2LDEwLjMgMi4zOCwxMEMyLjM4LDEwIDIuMzgsMTAgMi4zOCwxMC4wM0MyLjM4LDEyLjExIDMuODYsMTMuODUgNS44MiwxNC4yNEM1LjQ2LDE0LjM0IDUuMDgsMTQuMzkgNC42OSwxNC4zOUM0LjQyLDE0LjM5IDQuMTUsMTQuMzYgMy44OSwxNC4zMUM0LjQzLDE2IDYsMTcuMjYgNy44OSwxNy4yOUM2LjQzLDE4LjQ1IDQuNTgsMTkuMTMgMi41NiwxOS4xM0MyLjIyLDE5LjEzIDEuODgsMTkuMTEgMS41NCwxOS4wN0MzLjQ0LDIwLjI5IDUuNywyMSA4LjEyLDIxQzE2LDIxIDIwLjMzLDE0LjQ2IDIwLjMzLDguNzlDMjAuMzMsOC42IDIwLjMzLDguNDIgMjAuMzIsOC4yM0MyMS4xNiw3LjYzIDIxLjg4LDYuODcgMjIuNDYsNlpcIilcblxuICAgIGRpdkVpZ2h0LmFwcGVuZENoaWxkKGNvbnRhY3QpLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChhZGRyZXNzKS5jbGFzc0xpc3QuYWRkKFwiYWRkcmVzc1wiKVxuICAgIGFkZHJlc3MuYXBwZW5kQ2hpbGQocGFyKS5jbGFzc0xpc3QuYWRkKFwicmVkLWFkZHJlc3NcIiwgXCJuby1tYXJnaW5cIilcbiAgICBwYXIuaW5uZXJIVE1MID0gYFBpenphIEx1aWdpLCBWaWEgTm9ybWFubmksIDkwMTM4LCBQYWxlcm1vIFBBLCBTaWNpbHksIEl0YWx5PGJyIC8+KCszOSlcbiAgICAwOTEtNzQwMTExMTxiciAvPmNvbnRhY3RAcGl6emEtbHVpZ2kuaXRgXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChtYXApLiBjbGFzc0xpc3QuYWRkKFwibWFwXCIpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RMb2FkXG4iLCJpbXBvcnQgJy4uL2Nzcy9ob21lLmNzcyc7XG5cbmxldCBob21lTG9hZCA9ICgpID0+IHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBmbGV4Q2VudGVyT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwaXpMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCByZWRPcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGl0bGVPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29uc3QgcGFyT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgZmxleENlbnRlclR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBsaW5rT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIGNvbnN0IGZpcnN0SGFsZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBjb25zdCBsaXN0T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGNvbnN0IGxpT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGxpbmtUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBsaVR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBsaW5rVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBsaVRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGxpbmtGb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY29uc3QgbGlzdFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBjb25zdCBsaUZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgbGlua0ZpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBzdmdPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIGNvbnN0IHBhdGhPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcInBhdGhcIik7XG4gICAgY29uc3QgbGlGaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGxpbmtTaXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBzdmdUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIGNvbnN0IHBhdGhUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcInBhdGhcIik7XG4gICAgY29uc3QgbGlTaXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgbGlua1NldmVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY29uc3Qgc3ZnVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIGNvbnN0IHBhdGhUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFwicGF0aFwiKTtcbiAgICBjb25zdCBmbG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbWVudVN0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRlc2NyaWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHBhclR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHBhclRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgcGFyRm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHBpenphID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKS5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChmbGV4Q2VudGVyT25lKS5jbGFzc0xpc3QuYWRkKFwiZmxleC1jZW50ZXJcIilcbiAgICBmbGV4Q2VudGVyT25lLmFwcGVuZENoaWxkKHBpekxvZ28pLmNsYXNzTGlzdC5hZGQoXCJwaXpsb2dvXCIpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHJlZE9wKS5jbGFzc0xpc3QuYWRkKFwicmVkb3AtYmdcIilcbiAgICByZWRPcC5hcHBlbmRDaGlsZCh0aXRsZU9uZSkuY2xhc3NMaXN0LmFkZChcIm5vLW1hcmdpblwiKVxuICAgIHRpdGxlT25lLmlubmVySFRNTCA9IGBOb3QganVzdCBhIFBpenphLCA8c3BhbiBjbGFzcz1cImdyZWVuLWgxXCI+QW4gRXhwZXJpZW5jZTwvc3Bhbj5gXG4gICAgcmVkT3AuYXBwZW5kQ2hpbGQocGFyT25lKS5jbGFzc0xpc3QuYWRkKFwibm8tbWFyZ2luXCIsIFwiYWJvdXRcIilcbiAgICBwYXJPbmUuaW5uZXJIVE1MID0gYEZyb20gb3VyIG1vZGVzdCBiZWdpbm5pbmdzIGluIDE5NjQsIFBpenphIEx1aWdpIGhhcyBncm93biB0byBiZWNvbWVcbiAgICB0aGUgbW9zdCByZWNvZ25pemVkIHBpenplcmlhIGluIFNpY2lseS48YnIgLz5XZSBjcmVhdGUgZm9vZCB3ZSBhcmVcbiAgICBwcm91ZCB0byBzZXJ2ZSBhbmQgYmVsaWV2ZSBpbiBnaXZpbmcgYmFjayB0byBvdXIgY29tbXVuaXR5LmBcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZmxleENlbnRlclR3bykuY2xhc3NMaXN0LmFkZChcImZsZXgtY2VudGVyXCIpXG4gICAgZmxleENlbnRlclR3by5hcHBlbmRDaGlsZChidXR0b24pLmNsYXNzTGlzdC5hZGQoXCJ3aGl0ZS1ob3ZlclwiLCBcImNlbnRlci1idFwiKVxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChsaW5rT25lKS5jbGFzc0xpc3QuYWRkKFwibm8tc3R5bGUtbGlua1wiKVxuICAgIGxpbmtPbmUudGV4dENvbnRlbnQgPSBcIk9yZGVyXCJcbiAgICBsaW5rT25lLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjIVwiKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbikuY2xhc3NMaXN0LmFkZChcInByZXNlbnRcIilcbiAgICBtYWluLmFwcGVuZENoaWxkKGZpcnN0SGFsZikuY2xhc3NMaXN0LmFkZChcImZpcnN0LWhhbGZcIilcbiAgICBmaXJzdEhhbGYuYXBwZW5kQ2hpbGQobmF2YmFyKS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGxpc3RPbmUpLmNsYXNzTGlzdC5hZGQoXCJmbGV4YmFyLW9uZVwiLCBcIm5vLW1hcmdpblwiLCBcIm5vLXBhZFwiKVxuICAgIGxpc3RPbmUuYXBwZW5kQ2hpbGQobGlPbmUpLmNsYXNzTGlzdC5hZGQoXCJ3aGl0ZS1ob3ZlclwiKVxuICAgIGxpT25lLmFwcGVuZENoaWxkKGxpbmtUd28pLmNsYXNzTGlzdC5hZGQoXCJuby1zdHlsZS1saW5rXCIsIFwic3VybGlnbmVcIilcbiAgICBsaW5rVHdvLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjIVwiKVxuICAgIGxpbmtUd28udGV4dENvbnRlbnQgPSBcIkhvbWVcIlxuICAgIGxpc3RPbmUuYXBwZW5kQ2hpbGQobGlUd28pLmNsYXNzTGlzdC5hZGQoXCJ3aGl0ZS1ob3ZlclwiKVxuICAgIGxpVHdvLmFwcGVuZENoaWxkKGxpbmtUaHJlZSkuY2xhc3NMaXN0LmFkZChcIm5vLXN0eWxlLWxpbmtcIilcbiAgICBsaW5rVGhyZWUuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiMhXCIpXG4gICAgbGlua1RocmVlLnRleHRDb250ZW50ID0gXCJNZW51XCJcbiAgICBsaXN0T25lLmFwcGVuZENoaWxkKGxpVGhyZWUpLmNsYXNzTGlzdC5hZGQoXCJ3aGl0ZS1ob3ZlclwiKVxuICAgIGxpVGhyZWUuYXBwZW5kQ2hpbGQobGlua0ZvdXIpLmNsYXNzTGlzdC5hZGQoXCJuby1zdHlsZS1saW5rXCIpXG4gICAgbGlua0ZvdXIuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiMhXCIpXG4gICAgbGlua0ZvdXIudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIlxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChsaXN0VHdvKS5jbGFzc0xpc3QuYWRkKFwiZmxleGJhci10d29cIiwgXCJuby1tYXJnaW5cIiwgXCJuby1wYWRcIilcbiAgICBsaXN0VHdvLmFwcGVuZENoaWxkKGxpRm91cikuY2xhc3NMaXN0LmFkZChcIndoaXRlLWhvdmVyXCIpXG4gICAgbGlGb3VyLmFwcGVuZENoaWxkKGxpbmtGaXZlKS5jbGFzc0xpc3QuYWRkKFwibm8tc3R5bGUtbGlua1wiKVxuICAgIGxpbmtGaXZlLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjIVwiKVxuICAgIGxpbmtGaXZlLmFwcGVuZENoaWxkKHN2Z09uZSlcbiAgICBzdmdPbmUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XCIpXG4gICAgc3ZnT25lLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIilcbiAgICBzdmdPbmUuYXBwZW5kQ2hpbGQocGF0aE9uZSkuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJmaWxsXCIsIFwiY3VycmVudENvbG9yXCIpXG4gICAgc3ZnT25lLmFwcGVuZENoaWxkKHBhdGhPbmUpLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiZFwiLCBcIk0xMiAyLjA0QzYuNSAyLjA0IDIgNi41MyAyIDEyLjA2QzIgMTcuMDYgNS42NiAyMS4yMSAxMC40NCAyMS45NlYxNC45Nkg3LjlWMTIuMDZIMTAuNDRWOS44NUMxMC40NCA3LjM0IDExLjkzIDUuOTYgMTQuMjIgNS45NkMxNS4zMSA1Ljk2IDE2LjQ1IDYuMTUgMTYuNDUgNi4xNVY4LjYySDE1LjE5QzEzLjk1IDguNjIgMTMuNTYgOS4zOSAxMy41NiAxMC4xOFYxMi4wNkgxNi4zNEwxNS44OSAxNC45NkgxMy41NlYyMS45NkExMCAxMCAwIDAgMCAyMiAxMi4wNkMyMiA2LjUzIDE3LjUgMi4wNCAxMiAyLjA0WlwiKVxuICAgIGxpc3RUd28uYXBwZW5kQ2hpbGQobGlGaXZlKS5jbGFzc0xpc3QuYWRkKFwid2hpdGUtaG92ZXJcIilcbiAgICBsaUZpdmUuYXBwZW5kQ2hpbGQobGlua1NpeCkuY2xhc3NMaXN0LmFkZChcIm5vLXN0eWxlLWxpbmtcIilcbiAgICBsaW5rU2l4LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjIVwiKVxuICAgIGxpbmtTaXguYXBwZW5kQ2hpbGQoc3ZnVHdvKVxuICAgIHN2Z1R3by5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcIilcbiAgICBzdmdUd28uc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKVxuICAgIHN2Z1R3by5hcHBlbmRDaGlsZChwYXRoVHdvKS5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImZpbGxcIiwgXCJjdXJyZW50Q29sb3JcIilcbiAgICBzdmdUd28uYXBwZW5kQ2hpbGQocGF0aFR3bykuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJkXCIsIFwiTTcuOCwySDE2LjJDMTkuNCwyIDIyLDQuNiAyMiw3LjhWMTYuMkE1LjgsNS44IDAgMCwxIDE2LjIsMjJINy44QzQuNiwyMiAyLDE5LjQgMiwxNi4yVjcuOEE1LjgsNS44IDAgMCwxIDcuOCwyTTcuNiw0QTMuNiwzLjYgMCAwLDAgNCw3LjZWMTYuNEM0LDE4LjM5IDUuNjEsMjAgNy42LDIwSDE2LjRBMy42LDMuNiAwIDAsMCAyMCwxNi40VjcuNkMyMCw1LjYxIDE4LjM5LDQgMTYuNCw0SDcuNk0xNy4yNSw1LjVBMS4yNSwxLjI1IDAgMCwxIDE4LjUsNi43NUExLjI1LDEuMjUgMCAwLDEgMTcuMjUsOEExLjI1LDEuMjUgMCAwLDEgMTYsNi43NUExLjI1LDEuMjUgMCAwLDEgMTcuMjUsNS41TTEyLDdBNSw1IDAgMCwxIDE3LDEyQTUsNSAwIDAsMSAxMiwxN0E1LDUgMCAwLDEgNywxMkE1LDUgMCAwLDEgMTIsN00xMiw5QTMsMyAwIDAsMCA5LDEyQTMsMyAwIDAsMCAxMiwxNUEzLDMgMCAwLDAgMTUsMTJBMywzIDAgMCwwIDEyLDlaXCIpXG4gICAgbGlzdFR3by5hcHBlbmRDaGlsZChsaVNpeCkuY2xhc3NMaXN0LmFkZChcIndoaXRlLWhvdmVyXCIpXG4gICAgbGlTaXguYXBwZW5kQ2hpbGQobGlua1NldmVuKS5jbGFzc0xpc3QuYWRkKFwibm8tc3R5bGUtbGlua1wiKVxuICAgIGxpbmtTZXZlbi5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiIyFcIilcbiAgICBsaW5rU2V2ZW4uYXBwZW5kQ2hpbGQoc3ZnVGhyZWUpXG4gICAgc3ZnVGhyZWUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XCIpXG4gICAgc3ZnVGhyZWUuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKVxuICAgIHN2Z1RocmVlLmFwcGVuZENoaWxkKHBhdGhUaHJlZSkuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJmaWxsXCIsIFwiY3VycmVudENvbG9yXCIpXG4gICAgc3ZnVGhyZWUuYXBwZW5kQ2hpbGQocGF0aFRocmVlKS5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImRcIiwgXCJNMjIuNDYsNkMyMS42OSw2LjM1IDIwLjg2LDYuNTggMjAsNi42OUMyMC44OCw2LjE2IDIxLjU2LDUuMzIgMjEuODgsNC4zMUMyMS4wNSw0LjgxIDIwLjEzLDUuMTYgMTkuMTYsNS4zNkMxOC4zNyw0LjUgMTcuMjYsNCAxNiw0QzEzLjY1LDQgMTEuNzMsNS45MiAxMS43Myw4LjI5QzExLjczLDguNjMgMTEuNzcsOC45NiAxMS44NCw5LjI3QzguMjgsOS4wOSA1LjExLDcuMzggMyw0Ljc5QzIuNjMsNS40MiAyLjQyLDYuMTYgMi40Miw2Ljk0QzIuNDIsOC40MyAzLjE3LDkuNzUgNC4zMywxMC41QzMuNjIsMTAuNSAyLjk2LDEwLjMgMi4zOCwxMEMyLjM4LDEwIDIuMzgsMTAgMi4zOCwxMC4wM0MyLjM4LDEyLjExIDMuODYsMTMuODUgNS44MiwxNC4yNEM1LjQ2LDE0LjM0IDUuMDgsMTQuMzkgNC42OSwxNC4zOUM0LjQyLDE0LjM5IDQuMTUsMTQuMzYgMy44OSwxNC4zMUM0LjQzLDE2IDYsMTcuMjYgNy44OSwxNy4yOUM2LjQzLDE4LjQ1IDQuNTgsMTkuMTMgMi41NiwxOS4xM0MyLjIyLDE5LjEzIDEuODgsMTkuMTEgMS41NCwxOS4wN0MzLjQ0LDIwLjI5IDUuNywyMSA4LjEyLDIxQzE2LDIxIDIwLjMzLDE0LjQ2IDIwLjMzLDguNzlDMjAuMzMsOC42IDIwLjMzLDguNDIgMjAuMzIsOC4yM0MyMS4xNiw3LjYzIDIxLjg4LDYuODcgMjIuNDYsNlpcIilcbiAgICBmaXJzdEhhbGYuYXBwZW5kQ2hpbGQoZmxvdXIpLmNsYXNzTGlzdC5hZGQoXCJmbG91clwiKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudVN0YXIpLmNsYXNzTGlzdC5hZGQoXCJtZW51LXN0YXJcIilcbiAgICBtZW51U3Rhci5hcHBlbmRDaGlsZChkZXNjcmliKS5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpYlwiKVxuICAgIGRlc2NyaWIuYXBwZW5kQ2hpbGQocGFyVHdvKS50ZXh0Q29udGVudCA9IFwiT3VyIG1vc3QgcG9wdWxhciB3b29kLWZpcmVkIHBpenphXCJcbiAgICBwYXJUd28uY2xhc3NMaXN0LmFkZChcIm5vLW1hcmdpblwiKVxuICAgIGRlc2NyaWIuYXBwZW5kQ2hpbGQocGFyVGhyZWUpLnRleHRDb250ZW50ID0gXCJEaWF2b2xhXCJcbiAgICBwYXJUaHJlZS5jbGFzc0xpc3QuYWRkKFwibm8tbWFyZ2luXCIsIFwiYmlnLXRleHRcIilcbiAgICBkZXNjcmliLmFwcGVuZENoaWxkKHBhckZvdXIpLnRleHRDb250ZW50ID0gYFBlcHBlcm9uaSwgaGFtLCBibGFjayBvbGl2ZXMsIGJhc2lsICYgb3JlZ2FubywgYmVsbCBwZXBwZXJzLFxuICAgIG11c2hyb29tIGFuZCBtb3p6YXJlbGxhYFxuICAgIHBhckZvdXIuY2xhc3NMaXN0LmFkZChcIm5vLW1hcmdpblwiKVxuICAgIG1lbnVTdGFyLmFwcGVuZENoaWxkKHBpenphKS5jbGFzc0xpc3QuYWRkKFwicGl6emFcIilcbn1cblxuZXhwb3J0IGRlZmF1bHQgaG9tZUxvYWQ7XG4iLCJpbXBvcnQgJy4uL2Nzcy9tZW51LmNzcyc7XG5pbXBvcnQgJy4uL2ltZy9jaGVlc2Uuc3ZnJztcbmltcG9ydCAnLi4vaW1nL2xlbmdhLnN2Zyc7XG5pbXBvcnQgJy4uL2ltZy9taXguc3ZnJztcbmltcG9ydCAnLi4vaW1nL29yaWdpbmFsLnN2Zyc7XG5pbXBvcnQgJy4uL2ltZy9wZXBwZXJvbmkuc3ZnJztcbmltcG9ydCAnLi4vaW1nL3NmaW5jaW9uZS1wYWxlcm1pdGFuby5zdmcnO1xuaW1wb3J0ICcuLi9pbWcvd29vZC1tZW51LmpwZyc7XG5cbmxldCBtZW51TG9hZCA9ICgpID0+IHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbWVudU9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbWVudVR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbWVudVRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBtZW51Rm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbWVudUZpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1lbnVTaXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGltZ09uZSA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IGltZ1R3byA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IGltZ1RocmVlID0gbmV3IEltYWdlKCk7XG4gICAgY29uc3QgaW1nRm91ciA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IGltZ0ZpdmUgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHBhck9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHBhclR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHBhclRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgcGFyRm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHBhckZpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBwcmVzZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGVudFwiKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSkuY2xhc3NMaXN0LmFkZChcIm1lbnVcIilcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVPbmUpLmNsYXNzTGlzdC5hZGQoXCJwaXp6YS1tZW51XCIpXG4gICAgbWVudU9uZS5hcHBlbmRDaGlsZChpbWdPbmUpLmNsYXNzTGlzdC5hZGQoXCJwaXp6YS1pbWdcIilcbiAgICBpbWdPbmUuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pbWFnZXMvNmFmODJlOTVjMTBhYzE5ZGZhYTIuc3ZnXCIpXG4gICAgaW1nT25lLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBlcHBlcm9uaSBQaXp6YVwiKVxuICAgIG1lbnVPbmUuYXBwZW5kQ2hpbGQocGFyT25lKS5jbGFzc0xpc3QuYWRkKFwibm8tbWFyZ2luXCIsIFwiY2VudGVyZWQtd1wiKVxuICAgIHBhck9uZS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJwaXp6YS1uYW1lXCI+U2F1Y2lzc29uIDwvc3Bhbj5QZXBwZXJvbmksIG9uaW9ucywgYmVsbFxuICAgIHBlcHBlcnMgJiByb2FzdGVkIGdhcmxpY2BcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVUd28pLmNsYXNzTGlzdC5hZGQoXCJwaXp6YS1tZW51XCIpXG4gICAgbWVudVR3by5hcHBlbmRDaGlsZChpbWdUd28pLmNsYXNzTGlzdC5hZGQoXCJwaXp6YS1pbWdcIilcbiAgICBpbWdUd28uc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pbWFnZXMvNDc4YWEwZDczMjgxNTA4ZWMyNzguc3ZnXCIpXG4gICAgaW1nVHdvLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBpenphIEFsbGEgUGFsYVwiKVxuICAgIG1lbnVUd28uYXBwZW5kQ2hpbGQocGFyVHdvKS5jbGFzc0xpc3QuYWRkKFwibm8tbWFyZ2luXCIsIFwiY2VudGVyZWQtd1wiKVxuICAgIHBhclR3by5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJwaXp6YS1uYW1lXCI+QWxsYSBQYWxhIDwvc3Bhbj5TbGljZWQgdG9tYXRvZXMsIGJsYWNrXG4gICAgb2xpdmVzLCBtb3p6YXJlbGxhLCBiYXNpbCAmIG9yZWdhbm9gXG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51VGhyZWUpLmNsYXNzTGlzdC5hZGQoXCJwaXp6YS1tZW51XCIpXG4gICAgbWVudVRocmVlLmFwcGVuZENoaWxkKGltZ1RocmVlKS5jbGFzc0xpc3QuYWRkKFwicGl6emEtaW1nXCIpXG4gICAgaW1nVGhyZWUuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pbWFnZXMvNjM2ZjQ0N2NkNTIxYmZhYThjNDAuc3ZnXCIpXG4gICAgaW1nVGhyZWUuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGl6emEgUXVhdHRybyBGb3JtYWdnaVwiKVxuICAgIG1lbnVUaHJlZS5hcHBlbmRDaGlsZChwYXJUaHJlZSkuY2xhc3NMaXN0LmFkZChcIm5vLW1hcmdpblwiLCBcImNlbnRlcmVkLXdcIilcbiAgICBwYXJUaHJlZS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJwaXp6YS1uYW1lXCI+UXVhdHRybyBGb3JtYWdnaSA8L3NwYW4+TW96emFyZWxsYSxcbiAgICB0YWxlZ2dpbywgc2NhbW9yemEgJiBnb3Jnb256b2xhIGNoZWVzZWBcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVGb3VyKS5jbGFzc0xpc3QuYWRkKFwicGl6emEtbWVudVwiKVxuICAgIG1lbnVGb3VyLmFwcGVuZENoaWxkKGltZ0ZvdXIpLmNsYXNzTGlzdC5hZGQoXCJwaXp6YS1pbWdcIilcbiAgICBpbWdGb3VyLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vaW1hZ2VzLzE4MTM4MThkMDJhYTVkOWZjOGM1LnN2Z1wiKVxuICAgIGltZ0ZvdXIuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGl6emEgTmFwb2xldGFuYVwiKVxuICAgIG1lbnVGb3VyLmFwcGVuZENoaWxkKHBhckZvdXIpLmNsYXNzTGlzdC5hZGQoXCJuby1tYXJnaW5cIiwgXCJjZW50ZXJlZC13XCIpXG4gICAgcGFyRm91ci5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJwaXp6YS1uYW1lXCI+TmFwb2xldGFuYSA8L3NwYW4+TW96emFyZWxsYSBiYWxscyxcbiAgICBwYXJtZXNhbiwgYmFzaWxgXG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51Rml2ZSkuY2xhc3NMaXN0LmFkZChcInBpenphLW1lbnVcIilcbiAgICBtZW51Rml2ZS5hcHBlbmRDaGlsZChpbWdGaXZlKS5jbGFzc0xpc3QuYWRkKFwicGl6emEtaW1nXCIpXG4gICAgaW1nRml2ZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ltYWdlcy8xZTFmODBlMDRhMjc1OTIyNjcxMy5zdmdcIilcbiAgICBpbWdGaXZlLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBpenphIExhIENhcm5lXCIpXG4gICAgbWVudUZpdmUuYXBwZW5kQ2hpbGQocGFyRml2ZSkuY2xhc3NMaXN0LmFkZChcIm5vLW1hcmdpblwiLCBcImNlbnRlcmVkLXdcIilcbiAgICBwYXJGaXZlLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInBpenphLW5hbWVcIj5MYSBDYXJuZSA8L3NwYW4+QmFjb24sIHBlcHBlcm9uaSwgaGFtLFxuICAgIHNoaWl0YWtlLCBob25leWBcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVTaXgpLmNsYXNzTGlzdC5hZGQoXCJwaXp6YS1tZW51XCIpXG4gICAgbWVudVNpeC5hcHBlbmRDaGlsZChidXR0b24pLmNsYXNzTGlzdC5hZGQoXCJvcmRlcmVzLWJ0XCIsIFwid2hpdGUtaG92ZXJcIilcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlZpZXcgQWxsXCJcblxuICAgIGNvbnN0IGZpcnN0SGFsZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBjb25zdCBsaXN0T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGNvbnN0IGxpT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGxpbmtUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBsaVR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBsaW5rVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBsaVRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGxpbmtGb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY29uc3QgbGlzdFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBjb25zdCBsaUZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgbGlua0ZpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBzdmdPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIGNvbnN0IHBhdGhPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcInBhdGhcIik7XG4gICAgY29uc3QgbGlGaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGxpbmtTaXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBzdmdUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIGNvbnN0IHBhdGhUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcInBhdGhcIik7XG4gICAgY29uc3QgbGlTaXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgbGlua1NldmVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY29uc3Qgc3ZnVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIGNvbnN0IHBhdGhUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFwicGF0aFwiKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJlc2VudCkuY2xhc3NMaXN0LmFkZChcInByZXNlbnRcIilcbiAgICBwcmVzZW50LmFwcGVuZENoaWxkKGZpcnN0SGFsZikuY2xhc3NMaXN0LmFkZChcImZpcnN0LWhhbGZcIilcbiAgICBmaXJzdEhhbGYuYXBwZW5kQ2hpbGQobmF2YmFyKS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGxpc3RPbmUpLmNsYXNzTGlzdC5hZGQoXCJmbGV4YmFyLW9uZVwiLCBcIm5vLW1hcmdpblwiLCBcIm5vLXBhZFwiKVxuICAgIGxpc3RPbmUuYXBwZW5kQ2hpbGQobGlPbmUpLmNsYXNzTGlzdC5hZGQoXCJ3aGl0ZS1ob3ZlclwiKVxuICAgIGxpT25lLmFwcGVuZENoaWxkKGxpbmtUd28pLmNsYXNzTGlzdC5hZGQoXCJuby1zdHlsZS1saW5rXCIpXG4gICAgbGlua1R3by5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiIyFcIilcbiAgICBsaW5rVHdvLnRleHRDb250ZW50ID0gXCJIb21lXCJcbiAgICBsaXN0T25lLmFwcGVuZENoaWxkKGxpVHdvKS5jbGFzc0xpc3QuYWRkKFwid2hpdGUtaG92ZXJcIilcbiAgICBsaVR3by5hcHBlbmRDaGlsZChsaW5rVGhyZWUpLmNsYXNzTGlzdC5hZGQoXCJuby1zdHlsZS1saW5rXCIsIFwic3VybGlnbmVcIilcbiAgICBsaW5rVGhyZWUuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiMhXCIpXG4gICAgbGlua1RocmVlLnRleHRDb250ZW50ID0gXCJNZW51XCJcbiAgICBsaXN0T25lLmFwcGVuZENoaWxkKGxpVGhyZWUpLmNsYXNzTGlzdC5hZGQoXCJ3aGl0ZS1ob3ZlclwiKVxuICAgIGxpVGhyZWUuYXBwZW5kQ2hpbGQobGlua0ZvdXIpLmNsYXNzTGlzdC5hZGQoXCJuby1zdHlsZS1saW5rXCIpXG4gICAgbGlua0ZvdXIuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiMhXCIpXG4gICAgbGlua0ZvdXIudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIlxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChsaXN0VHdvKS5jbGFzc0xpc3QuYWRkKFwiZmxleGJhci10d29cIiwgXCJuby1tYXJnaW5cIiwgXCJuby1wYWRcIilcbiAgICBsaXN0VHdvLmFwcGVuZENoaWxkKGxpRm91cikuY2xhc3NMaXN0LmFkZChcIndoaXRlLWhvdmVyXCIpXG4gICAgbGlGb3VyLmFwcGVuZENoaWxkKGxpbmtGaXZlKS5jbGFzc0xpc3QuYWRkKFwibm8tc3R5bGUtbGlua1wiKVxuICAgIGxpbmtGaXZlLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjIVwiKVxuICAgIGxpbmtGaXZlLmFwcGVuZENoaWxkKHN2Z09uZSlcbiAgICBzdmdPbmUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XCIpXG4gICAgc3ZnT25lLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIilcbiAgICBzdmdPbmUuYXBwZW5kQ2hpbGQocGF0aE9uZSkuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJmaWxsXCIsIFwiY3VycmVudENvbG9yXCIpXG4gICAgc3ZnT25lLmFwcGVuZENoaWxkKHBhdGhPbmUpLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiZFwiLCBcIk0xMiAyLjA0QzYuNSAyLjA0IDIgNi41MyAyIDEyLjA2QzIgMTcuMDYgNS42NiAyMS4yMSAxMC40NCAyMS45NlYxNC45Nkg3LjlWMTIuMDZIMTAuNDRWOS44NUMxMC40NCA3LjM0IDExLjkzIDUuOTYgMTQuMjIgNS45NkMxNS4zMSA1Ljk2IDE2LjQ1IDYuMTUgMTYuNDUgNi4xNVY4LjYySDE1LjE5QzEzLjk1IDguNjIgMTMuNTYgOS4zOSAxMy41NiAxMC4xOFYxMi4wNkgxNi4zNEwxNS44OSAxNC45NkgxMy41NlYyMS45NkExMCAxMCAwIDAgMCAyMiAxMi4wNkMyMiA2LjUzIDE3LjUgMi4wNCAxMiAyLjA0WlwiKVxuICAgIGxpc3RUd28uYXBwZW5kQ2hpbGQobGlGaXZlKS5jbGFzc0xpc3QuYWRkKFwid2hpdGUtaG92ZXJcIilcbiAgICBsaUZpdmUuYXBwZW5kQ2hpbGQobGlua1NpeCkuY2xhc3NMaXN0LmFkZChcIm5vLXN0eWxlLWxpbmtcIilcbiAgICBsaW5rU2l4LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjIVwiKVxuICAgIGxpbmtTaXguYXBwZW5kQ2hpbGQoc3ZnVHdvKVxuICAgIHN2Z1R3by5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcIilcbiAgICBzdmdUd28uc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKVxuICAgIHN2Z1R3by5hcHBlbmRDaGlsZChwYXRoVHdvKS5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImZpbGxcIiwgXCJjdXJyZW50Q29sb3JcIilcbiAgICBzdmdUd28uYXBwZW5kQ2hpbGQocGF0aFR3bykuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJkXCIsIFwiTTcuOCwySDE2LjJDMTkuNCwyIDIyLDQuNiAyMiw3LjhWMTYuMkE1LjgsNS44IDAgMCwxIDE2LjIsMjJINy44QzQuNiwyMiAyLDE5LjQgMiwxNi4yVjcuOEE1LjgsNS44IDAgMCwxIDcuOCwyTTcuNiw0QTMuNiwzLjYgMCAwLDAgNCw3LjZWMTYuNEM0LDE4LjM5IDUuNjEsMjAgNy42LDIwSDE2LjRBMy42LDMuNiAwIDAsMCAyMCwxNi40VjcuNkMyMCw1LjYxIDE4LjM5LDQgMTYuNCw0SDcuNk0xNy4yNSw1LjVBMS4yNSwxLjI1IDAgMCwxIDE4LjUsNi43NUExLjI1LDEuMjUgMCAwLDEgMTcuMjUsOEExLjI1LDEuMjUgMCAwLDEgMTYsNi43NUExLjI1LDEuMjUgMCAwLDEgMTcuMjUsNS41TTEyLDdBNSw1IDAgMCwxIDE3LDEyQTUsNSAwIDAsMSAxMiwxN0E1LDUgMCAwLDEgNywxMkE1LDUgMCAwLDEgMTIsN00xMiw5QTMsMyAwIDAsMCA5LDEyQTMsMyAwIDAsMCAxMiwxNUEzLDMgMCAwLDAgMTUsMTJBMywzIDAgMCwwIDEyLDlaXCIpXG4gICAgbGlzdFR3by5hcHBlbmRDaGlsZChsaVNpeCkuY2xhc3NMaXN0LmFkZChcIndoaXRlLWhvdmVyXCIpXG4gICAgbGlTaXguYXBwZW5kQ2hpbGQobGlua1NldmVuKS5jbGFzc0xpc3QuYWRkKFwibm8tc3R5bGUtbGlua1wiKVxuICAgIGxpbmtTZXZlbi5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiIyFcIilcbiAgICBsaW5rU2V2ZW4uYXBwZW5kQ2hpbGQoc3ZnVGhyZWUpXG4gICAgc3ZnVGhyZWUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XCIpXG4gICAgc3ZnVGhyZWUuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKVxuICAgIHN2Z1RocmVlLmFwcGVuZENoaWxkKHBhdGhUaHJlZSkuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJmaWxsXCIsIFwiY3VycmVudENvbG9yXCIpXG4gICAgc3ZnVGhyZWUuYXBwZW5kQ2hpbGQocGF0aFRocmVlKS5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImRcIiwgXCJNMjIuNDYsNkMyMS42OSw2LjM1IDIwLjg2LDYuNTggMjAsNi42OUMyMC44OCw2LjE2IDIxLjU2LDUuMzIgMjEuODgsNC4zMUMyMS4wNSw0LjgxIDIwLjEzLDUuMTYgMTkuMTYsNS4zNkMxOC4zNyw0LjUgMTcuMjYsNCAxNiw0QzEzLjY1LDQgMTEuNzMsNS45MiAxMS43Myw4LjI5QzExLjczLDguNjMgMTEuNzcsOC45NiAxMS44NCw5LjI3QzguMjgsOS4wOSA1LjExLDcuMzggMyw0Ljc5QzIuNjMsNS40MiAyLjQyLDYuMTYgMi40Miw2Ljk0QzIuNDIsOC40MyAzLjE3LDkuNzUgNC4zMywxMC41QzMuNjIsMTAuNSAyLjk2LDEwLjMgMi4zOCwxMEMyLjM4LDEwIDIuMzgsMTAgMi4zOCwxMC4wM0MyLjM4LDEyLjExIDMuODYsMTMuODUgNS44MiwxNC4yNEM1LjQ2LDE0LjM0IDUuMDgsMTQuMzkgNC42OSwxNC4zOUM0LjQyLDE0LjM5IDQuMTUsMTQuMzYgMy44OSwxNC4zMUM0LjQzLDE2IDYsMTcuMjYgNy44OSwxNy4yOUM2LjQzLDE4LjQ1IDQuNTgsMTkuMTMgMi41NiwxOS4xM0MyLjIyLDE5LjEzIDEuODgsMTkuMTEgMS41NCwxOS4wN0MzLjQ0LDIwLjI5IDUuNywyMSA4LjEyLDIxQzE2LDIxIDIwLjMzLDE0LjQ2IDIwLjMzLDguNzlDMjAuMzMsOC42IDIwLjMzLDguNDIgMjAuMzIsOC4yM0MyMS4xNiw3LjYzIDIxLjg4LDYuODcgMjIuNDYsNlpcIilcblxuICAgIGNvbnN0IHN0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG9yYW5nZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc2ZpbmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGltZ1NpeCA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IHBhclNpeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZmxleHJlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwYXJTZXZlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHBhckVpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgcGFyTmluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHBhclRlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHBhckVsZXZlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGJ1dHRvblR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBmaXJzdEhhbGYuYXBwZW5kQ2hpbGQoc3RhcikuY2xhc3NMaXN0LmFkZChcInN0YXItZGlzaFwiKVxuICAgIHN0YXIuYXBwZW5kQ2hpbGQob3JhbmdlKS5jbGFzc0xpc3QuYWRkKFwicmVkb3JhbmdlLXdyXCIpXG4gICAgb3JhbmdlLmFwcGVuZENoaWxkKHNmaW5jKS5jbGFzc0xpc3QuYWRkKFwic2ZpbmNpb25lXCIpXG4gICAgc2ZpbmMuYXBwZW5kQ2hpbGQoaW1nU2l4KS5jbGFzc0xpc3QuYWRkKFwicGl6emEtc2ZpbmNcIilcbiAgICBpbWdTaXguc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pbWFnZXMvMjhlOTM3NzA4ODVmZDY3ODkzYzQuc3ZnXCIpXG4gICAgaW1nU2l4LnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBpenphIFNmaW5jaW9uZSBQYWxlcm1pdGFub1wiKVxuICAgIHNmaW5jLmFwcGVuZENoaWxkKHBhclNpeCkuY2xhc3NMaXN0LmFkZChcIm5vLW1hcmdpblwiKVxuICAgIHBhclNpeC5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJwaXp6YS1uYW1lLXR3b1wiPlNmaW5jaW9uZSBQYWxlcm1pdGFubyA8L3NwYW4+T3VyXG4gICAgb3JpZ2luYWwgU2ljaWxpYW4gcGl6emEgd2l0aCBvbmlvbnMsIGFuY2hvdmllcywgdG9tYXRvZXMsIGhlcmJzLFxuICAgIGNhY2lvY2F2YWxsbyAmIHRvbWFgXG4gICAgc3Rhci5hcHBlbmRDaGlsZChkaXYpLmFwcGVuZENoaWxkKGZsZXhyZXMpLmNsYXNzTGlzdC5hZGQoXCJmbGV4LXJlc2VydlwiKVxuICAgIGZsZXhyZXMuYXBwZW5kQ2hpbGQocmVzKS5jbGFzc0xpc3QuYWRkKFwicmVzZXJ2YXRpb25cIilcbiAgICByZXMuYXBwZW5kQ2hpbGQocGFyU2V2ZW4pLmNsYXNzTGlzdC5hZGQoXCJuby1tYXJnaW5cIiwgXCJyZWQtdGl0bGVcIilcbiAgICBwYXJTZXZlbi50ZXh0Q29udGVudCA9IFwiUmVzZXJ2YXRpb25cIlxuICAgIHJlcy5hcHBlbmRDaGlsZChwYXJFaWdodCkuY2xhc3NMaXN0LmFkZChcIm5vLW1hcmdpblwiKVxuICAgIHBhckVpZ2h0LnRleHRDb250ZW50ID0gXCJPcGVuaW5nIFRpbWVzXCJcbiAgICByZXMuYXBwZW5kQ2hpbGQocGFyTmluZSkuY2xhc3NMaXN0LmFkZChcIm5vLW1hcmdpblwiLCBcInVuZGVyZGFzaFwiKVxuICAgIHBhck5pbmUudGV4dENvbnRlbnQgPSBcIldlZWsgRGF5czogMTA6MzAgYW0gLSA5OjAwIHBtXCJcbiAgICByZXMuYXBwZW5kQ2hpbGQocGFyVGVuKS5jbGFzc0xpc3QuYWRkKFwibm8tbWFyZ2luXCIsIFwidW5kZXJkYXNoXCIpXG4gICAgcGFyVGVuLnRleHRDb250ZW50ID0gXCJTYXR1cmRheS1TdW5kYXk6IDExOjMwIGFtIC0gMTA6MzAgcG1cIlxuICAgIHJlcy5hcHBlbmRDaGlsZChwYXJFbGV2ZW4pLmNsYXNzTGlzdC5hZGQoXCJuby1tYXJnaW5cIiwgXCJ1bmRlcmRhc2hcIilcbiAgICBwYXJFbGV2ZW4udGV4dENvbnRlbnQgPSBcIkJvb2sgeW91ciB0YWJsZSBmb3IgbHVuY2ggb3IgZGlubmVyXCJcbiAgICByZXMuYXBwZW5kQ2hpbGQoYnV0dG9uVHdvKS5jbGFzc0xpc3QuYWRkKFwib3JkZXJlcy1idFwiLCBcImFsaWduLWJ0XCIsIFwid2hpdGUtaG92ZXJcIilcbiAgICBidXR0b25Ud28udGV4dENvbnRlbnQgPSBcIkJvb2tcIlxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW51TG9hZFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9