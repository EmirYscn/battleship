/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body Styling */
body {
  height: 100vh;
  background: linear-gradient(90deg, #1a78ae, #431dd9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
  color: white;
  text-transform: uppercase;
  font-family: "Arial", sans-serif;
}

/* Title Styling */
h1 {
  font-size: 3em;
  letter-spacing: 0.1em;
  margin-bottom: 0.5em;
}

/* Board Containers */
.boards {
  width: 90%;
  height: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  padding: 1em;
  border-radius: 10px;
}

/* Player Containers */
.player-1-container,
.player-2-container {
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  align-items: center;
}

/* Board Styling */
.player-1-board,
.player-2-board {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  align-items: center;
  border: 2px solid white;
  width: 500px;
  height: 500px;
  background-color: #083358;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.board-label {
  position: absolute;
  top: -30px;
  font-size: 1.5em;
  color: white;
}

/* Box Styling */
.box {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  cursor: crosshair;
  transition: background-color 0.3s ease;
}

.box:hover {
  background-color: #1a78ae;
}

/* Ship Styling */
.ship {
  background-color: black;
}

.ship.hit {
  background-color: red;
  cursor: default;
  font-size: 1.5em;
  border: 2px solid yellow;
}

.ship.sunk {
  background-color: gray;
  color: white;
  opacity: 0.8;
  border: 2px solid red;
}

/* Missed Shot Styling */
.missed {
  cursor: default;
  background-color: rgb(105, 107, 105);
  opacity: 0.7;
}

/* Player Text Styling */
.player-1-text,
.player-2-text {
  color: white;
  text-transform: uppercase;
  font-size: 1.5em;
}

/* Utility Classes */
.half-opacity {
  opacity: 0.5;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,kBAAkB;AAClB;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,oDAAoD;EACpD,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,YAAY;EACZ,yBAAyB;EACzB,gCAAgC;AAClC;;AAEA,kBAAkB;AAClB;EACE,cAAc;EACd,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA,qBAAqB;AACrB;EACE,UAAU;EACV,WAAW;EACX,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;EACZ,mBAAmB;AACrB;;AAEA,sBAAsB;AACtB;;EAEE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA,kBAAkB;AAClB;;EAEE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,gBAAgB;EAChB,YAAY;AACd;;AAEA,gBAAgB;AAChB;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,sCAAsC;AACxC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,iBAAiB;AACjB;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,wBAAwB;AAC1B;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,qBAAqB;AACvB;;AAEA,wBAAwB;AACxB;EACE,eAAe;EACf,oCAAoC;EACpC,YAAY;AACd;;AAEA,wBAAwB;AACxB;;EAEE,YAAY;EACZ,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA,oBAAoB;AACpB;EACE,YAAY;AACd","sourcesContent":["/* General Reset */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Body Styling */\nbody {\n  height: 100vh;\n  background: linear-gradient(90deg, #1a78ae, #431dd9);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2em;\n  color: white;\n  text-transform: uppercase;\n  font-family: \"Arial\", sans-serif;\n}\n\n/* Title Styling */\nh1 {\n  font-size: 3em;\n  letter-spacing: 0.1em;\n  margin-bottom: 0.5em;\n}\n\n/* Board Containers */\n.boards {\n  width: 90%;\n  height: 70%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.2);\n  padding: 1em;\n  border-radius: 10px;\n}\n\n/* Player Containers */\n.player-1-container,\n.player-2-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Board Styling */\n.player-1-board,\n.player-2-board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  align-items: center;\n  border: 2px solid white;\n  width: 500px;\n  height: 500px;\n  background-color: #083358;\n  border-radius: 8px;\n  overflow: hidden;\n  position: relative;\n}\n\n.board-label {\n  position: absolute;\n  top: -30px;\n  font-size: 1.5em;\n  color: white;\n}\n\n/* Box Styling */\n.box {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid white;\n  cursor: crosshair;\n  transition: background-color 0.3s ease;\n}\n\n.box:hover {\n  background-color: #1a78ae;\n}\n\n/* Ship Styling */\n.ship {\n  background-color: black;\n}\n\n.ship.hit {\n  background-color: red;\n  cursor: default;\n  font-size: 1.5em;\n  border: 2px solid yellow;\n}\n\n.ship.sunk {\n  background-color: gray;\n  color: white;\n  opacity: 0.8;\n  border: 2px solid red;\n}\n\n/* Missed Shot Styling */\n.missed {\n  cursor: default;\n  background-color: rgb(105, 107, 105);\n  opacity: 0.7;\n}\n\n/* Player Text Styling */\n.player-1-text,\n.player-2-text {\n  color: white;\n  text-transform: uppercase;\n  font-size: 1.5em;\n}\n\n/* Utility Classes */\n.half-opacity {\n  opacity: 0.5;\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/dom-manip/dom-manip.js":
/*!************************************!*\
  !*** ./src/dom-manip/dom-manip.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initDom: () => (/* binding */ initDom),
/* harmony export */   populateGameboards: () => (/* binding */ populateGameboards)
/* harmony export */ });
/* harmony import */ var _game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game-logic/game-logic */ "./src/game-logic/game-logic.js");


function initDom() {
  populateBoard();
}

function populateBoard() {
  const boards = document.querySelectorAll(".board");

  boards.forEach((board, index) => {
    for (let i = 0; i < 10; i++) {
      const rowIndex = i;
      for (let j = 0; j < 10; j++) {
        const columnIndex = j;
        const div = createDiv("box");

        div.dataset.row = rowIndex;
        div.dataset.column = columnIndex;
        div.dataset.player = index;
        board.appendChild(div);

        div.addEventListener("click", handleDivClick);
      }
    }
  });
}

function handleDivClick(e) {
  // if hit ship is succesful
  if (hitShip(e.target.dataset)) {
    // continue playing with the current player
    const currentPlayer =
      (0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getPlayers)()[parseInt(e.target.dataset.player)].player;
    // check if all ships sunk
    if (currentPlayer.gameboard.hasAllShipsBeenSunk()) {
      // display winning player
      // displayWinner()
      console.log("winner is", (0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getCurrentPlayer)());
    }
    // if hit ship is not successful
  } else {
    // change the current player
    (0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.changeCurrentPlayer)();
    renderCurrentPlayerDisplay();
  }

  populateGameboards();
  renderCurrentPlayerText((0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getCurrentPlayer)());
}

function hitShip(player) {
  const playerDataset = { ...player };

  const currentPlayer = (0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getPlayers)()[parseInt(playerDataset.player)];
  const playerGameboard = currentPlayer.player.gameboard;

  const x_coord = parseInt(playerDataset.row);
  const y_coord = parseInt(playerDataset.column);
  const coord = [x_coord, y_coord];
  return playerGameboard.receiveAttack(coord);
}

function populateGameboards() {
  const players = (0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getPlayers)();
  renderPlayerNames(players);
  renderCurrentPlayerText((0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getCurrentPlayer)());
  renderCurrentPlayerDisplay();
  players.forEach((player) => {
    renderPlayerBoard(player);
  });
}

function renderCurrentPlayerDisplay() {
  // get player board divs
  const Player1BoardDiv = document.querySelector(".player-1-board");
  const Player2BoardDiv = document.querySelector(".player-2-board");

  // reset boards opacity
  Player1BoardDiv.classList.remove("half-opacity");
  Player2BoardDiv.classList.remove("half-opacity");

  // set current player board opacity
  const currentPlayer = (0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getCurrentPlayer)();
  const currentPlayerBoardDiv = document.querySelector(
    `.${currentPlayer.name}-board`
  );
  currentPlayerBoardDiv.classList.add("half-opacity");
}

function renderPlayerBoard(player) {
  // if player is something other than human dont render
  if (player.type === "ai") return;

  const currentPlayer = player.player;
  const playerBoard = Array.from(player.board);

  //render currentcoords
  currentPlayer.gameboard.currentCoords.forEach((coord) => {
    const div = findCorrespondingDiv(coord, playerBoard);
    div.classList.add("ship");
  });

  //render successful hitshots
  currentPlayer.gameboard.hitShots.forEach((coord) => {
    const div = findCorrespondingDiv(coord, playerBoard);
    div.textContent = "❌";
    div.classList.add("hit");
    // prevent clicking the same coord again
    div.removeEventListener("click", handleDivClick);
  });

  //render missedshots
  currentPlayer.gameboard.missedShots.forEach((coord) => {
    const div = findCorrespondingDiv(coord, playerBoard);
    div.textContent = "🔘";
    div.classList.add("missed");
    // prevent clicking the same coord again
    div.removeEventListener("click", handleDivClick);
  });
}

function findCorrespondingDiv(coord, board) {
  const [x_coord, y_coord] = coord;

  const div = board.find((div) => {
    const row = parseInt(div.dataset.row);
    const column = parseInt(div.dataset.column);
    return row === x_coord && column === y_coord;
  });

  return div;
}

function renderPlayerNames(players) {
  const player1Div = document.querySelector(".player-1-text");
  const player2Div = document.querySelector(".player-2-text");

  player1Div.textContent = "";
  player2Div.textContent = "";

  player1Div.appendChild(createHeading(`${players[0].player.name}`, "h2"));
  player2Div.appendChild(createHeading(`${players[1].player.name}`, "h2"));
}

function renderCurrentPlayerText(player) {
  const currentPlayerHeader = document.querySelector(".current-player-header");
  currentPlayerHeader.innerHTML = "";
  const header = createHeading(`${player.name} is attacking...`, "h1");

  currentPlayerHeader.appendChild(header);
}

function createHeading(text, heading) {
  const header = document.createElement(heading);
  header.textContent = text;

  return header;
}

function createDiv(className) {
  const div = document.createElement("div");
  div.classList.add(className);
  return div;
}




/***/ }),

/***/ "./src/game-logic/game-logic.js":
/*!**************************************!*\
  !*** ./src/game-logic/game-logic.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeCurrentPlayer: () => (/* binding */ changeCurrentPlayer),
/* harmony export */   getCurrentPlayer: () => (/* binding */ getCurrentPlayer),
/* harmony export */   getGameState: () => (/* binding */ getGameState),
/* harmony export */   getOpposingPlayer: () => (/* binding */ getOpposingPlayer),
/* harmony export */   getPlayers: () => (/* binding */ getPlayers),
/* harmony export */   initGame: () => (/* binding */ initGame)
/* harmony export */ });
/* harmony import */ var _player_player_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../player/player-class */ "./src/player/player-class.js");
/* harmony import */ var _dom_manip_dom_manip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-manip/dom-manip */ "./src/dom-manip/dom-manip.js");



let players = [];
let gameState;

function getBoardsDOM(index) {
  const boards = Array.from(document.querySelectorAll(".board"));
  const boardsChildNodes = [boards[0].children, boards[1].children];
  return boardsChildNodes[index];
}

function initPlayers(player1Type, player2Type, player1Name, player2Name) {
  players = [
    {
      player: createPlayer(player1Type, player1Name),
      board: getBoardsDOM(0),
    },
    {
      player: createPlayer(player2Type, player2Name),
      board: getBoardsDOM(1),
    },
  ];
}
function initGameState() {
  gameState = { currentPlayer: players[0].player, isFinished: false };
}

function createPlayer(playerType, playerName) {
  return new _player_player_class__WEBPACK_IMPORTED_MODULE_0__.Player(playerType, playerName);
}
function getPlayers() {
  return players;
}
function getGameState() {
  return gameState;
}
function getCurrentPlayer() {
  return gameState.currentPlayer;
}
function getOpposingPlayer() {
  return gameState.currentPlayer === players[0].player
    ? players[1].player
    : players[0].player;
}
function changeCurrentPlayer() {
  gameState.currentPlayer =
    gameState.currentPlayer === players[0].player
      ? (gameState.currentPlayer = players[1].player)
      : (gameState.currentPlayer = players[0].player);
}

function initGame(player1, player2) {
  (0,_dom_manip_dom_manip__WEBPACK_IMPORTED_MODULE_1__.initDom)();
  initPlayers(player1.type, player2.type, player1.name, player2.name);
  initGameState();
  (0,_dom_manip_dom_manip__WEBPACK_IMPORTED_MODULE_1__.populateGameboards)();
}




/***/ }),

/***/ "./src/gameboard/gameboard-class.js":
/*!******************************************!*\
  !*** ./src/gameboard/gameboard-class.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship_ship_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ship/ship-class */ "./src/ship/ship-class.js");


class Gameboard {
  constructor() {
    this.ships = [];
    this.missedShots = [];
    this.hitShots = [];
    this.currentCoords = [];
    this.surroundingCoords = [];
    this._generateShipMap();
  }
  receiveAttack(coordinate) {
    // get the ship object with matching coordinate
    const ship = this._getShip(coordinate);
    if (ship && !ship.sunk) {
      // if ship found and not sunk yet, call hit() on it
      ship.hit();
      //then remove from currentCoords and move to hitShots
      this.hitShots.push(coordinate);
      this.currentCoords.splice(
        findIndexofItemInArray(this.currentCoords, coordinate),
        1
      );
      return true;
      // if not ship not found, push coordinate to missedShots array
    } else {
      this.missedShots.push(coordinate);
      return false;
    }
  }

  hasAllShipsBeenSunk() {
    return this.ships.every((ship) => {
      return ship.ship.sunk === true;
    });
  }

  _getShip(coordinate) {
    for (const ship of this.ships) {
      for (const coord of ship.coords) {
        if (arraysEqual(coord, coordinate)) {
          return ship.ship;
        }
      }
    }
    return null;
  }

  _generateShipMap() {
    // generate four 1-length ships
    for (let i = 0; i < 4; i++) {
      this.ships.push(this._generateShip(1));
    }
    // // generate three 2-length ships
    for (let i = 0; i < 3; i++) {
      this.ships.push(this._generateShip(2));
    }
    // // generate two 3-length ships
    for (let i = 0; i < 2; i++) {
      this.ships.push(this._generateShip(3));
    }
    // // generate one 4-length ship
    this.ships.push(this._generateShip(4));

    console.log(this.currentCoords);
    console.log(this.surroundingCoords);
  }

  _generateShip(length, x_coord = null, y_coord = null) {
    const coords = this._generateCoord(length, x_coord, y_coord);
    return {
      coords,
      ship: new _ship_ship_class__WEBPACK_IMPORTED_MODULE_0__.Ship(length),
    };
  }
  _generateCoord(length, x_coord = null, y_coord = null) {
    // set random (x,y) coordinates
    let x = x_coord === null ? this._generateRandomNumber() : x_coord;
    let y = y_coord === null ? this._generateRandomNumber() : y_coord;

    // pick a direction to extend the ship
    const orientationX = Math.random() >= 0.5;

    while (true) {
      if (
        this._isValidCoord(x, y, length, orientationX) &&
        !this._predictCollisionWithCurrentCoords(
          orientationX ? "x" : "y",
          x,
          y,
          length
        ) &&
        !this._predictCollisionWithSurroundingCoords(
          orientationX ? "x" : "y",
          x,
          y,
          length
        )
      ) {
        break;
      }
      x = this._generateRandomNumber();
      y = this._generateRandomNumber();
    }

    const coordArr = [];
    for (let i = 0; i < length; i++) {
      coordArr.push([x, y]);
      this.currentCoords.push([x, y]);
      if (orientationX) {
        x++;
      } else {
        y++;
      }
    }
    // console.log(coordArr);
    this._getSurroundingCoords(coordArr, length, orientationX).forEach(
      (element) => {
        this.surroundingCoords.push(element);
      }
    );
    // this.surroundingCoords.push(
    //   this._getSurroundingCoords(coordArr, length, orientationX)
    // );
    return coordArr;
  }

  _getSurroundingCoords(coord, length, orientationX) {
    const surCoordArray = [];

    surCoordArray.push(this._getUpperRowCoords(coord, length, orientationX));
    surCoordArray.push(this._getBottomRowCoords(coord, length, orientationX));
    surCoordArray.push(this._getRightCoords(coord, length, orientationX));
    surCoordArray.push(this._getLeftCoords(coord, length, orientationX));

    // console.log(`current coord with length: ${length}: `, coord);
    // console.log(
    //   `surrounding coords with length:${length} `,
    //   surCoordArray.flat()
    // );
    return surCoordArray.flat();
  }

  _getUpperRowCoords(coords, length, orientationX) {
    const upperRow = [];
    let [x_coord, y_coord] = coords[0];

    y_coord--;
    x_coord--;

    let upperRowLength = orientationX ? length + 2 : 3;
    for (let i = 0; i < upperRowLength; i++) {
      if (this._isWithinBounds([x_coord, y_coord])) {
        upperRow.push([x_coord, y_coord]);
      }
      x_coord++;
    }

    return upperRow;
  }
  _getBottomRowCoords(coords, length, orientationX) {
    const bottomRow = [];
    let [x_coord, y_coord] = coords[length - 1];

    y_coord++;
    x_coord++;

    let bottomRowLength = orientationX ? length + 2 : 3;
    for (let i = 0; i < bottomRowLength; i++) {
      if (this._isWithinBounds([x_coord, y_coord])) {
        bottomRow.push([x_coord, y_coord]);
      }
      x_coord--;
    }
    return bottomRow;
  }
  _getRightCoords(coords, length, orientationX) {
    const right = [];

    let [x_coord, y_coord] = coords[length - 1];
    x_coord++;

    let rightLength = orientationX ? 1 : length;
    for (let i = 0; i < rightLength; i++) {
      if (this._isWithinBounds([x_coord, y_coord])) {
        right.push([x_coord, y_coord]);
      }
      y_coord--;
    }

    return right;
  }
  _getLeftCoords(coords, length, orientationX) {
    const left = [];

    let [x_coord, y_coord] = coords[0];
    x_coord--;

    let leftLength = orientationX ? 1 : length;
    for (let i = 0; i < leftLength; i++) {
      if (this._isWithinBounds([x_coord, y_coord])) {
        left.push([x_coord, y_coord]);
      }
      y_coord--;
    }

    return left;
  }

  _predictCollisionWithCurrentCoords(oriantation, x, y, length) {
    const tempArr = [];
    for (let i = 0; i < length; i++) {
      tempArr.push([x, y]);
      if (oriantation === "x") x++;
      else y++;
    }
    // [6,9] [7,9] [8,9] [9,9]
    for (const array of tempArr) {
      if (this._hasCoordCollision(array, this.currentCoords)) {
        return true;
      }
    }
    return false;
  }
  _predictCollisionWithSurroundingCoords(oriantation, x, y, length) {
    const tempArr = [];
    for (let i = 0; i < length; i++) {
      tempArr.push([x, y]);
      if (oriantation === "x") x++;
      else y++;
    }
    // [6,9] [7,9] [8,9] [9,9]
    for (const array of tempArr) {
      if (this._hasCoordCollision(array, this.surroundingCoords)) {
        return true;
      }
    }
    return false;
  }

  _isWithinBounds(coord) {
    const [x_coord, y_coord] = coord;
    return x_coord >= 0 && x_coord < 10 && y_coord >= 0 && y_coord < 10;
  }

  _isValidCoord(x, y, length, orientationX) {
    if (orientationX) {
      return x + length <= 10;
    } else {
      return y + length <= 10;
    }
  }
  _generateRandomNumber() {
    return Math.floor(Math.random() * 10);
  }
  _hasCoordCollision(coord, otherCoord) {
    return otherCoord.some((existingCoord) =>
      arraysEqual(existingCoord, coord)
    );
    // also check with surrounding coord array
  }
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((element, index) => element === arr2[index]);
}

function findIndexofItemInArray(array, item) {
  for (var i = 0; i < array.length; i++) {
    // This if statement depends on the format of your array
    if (array[i][0] == item[0] && array[i][1] == item[1]) {
      return i; // Found it
    }
  }
  return -1; // Not found
}




/***/ }),

/***/ "./src/player/player-class.js":
/*!************************************!*\
  !*** ./src/player/player-class.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard_gameboard_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboard/gameboard-class */ "./src/gameboard/gameboard-class.js");


class Player {
  constructor(type, name) {
    this.type = type;
    this.name = name;
    this.gameboard = new _gameboard_gameboard_class__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
  }
}




/***/ }),

/***/ "./src/ship/ship-class.js":
/*!********************************!*\
  !*** ./src/ship/ship-class.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length) {
    this.length = length;
    this.number_hit = 0;
    this.sunk = false;
  }
  getStatus() {
    return { length: this.length, hit: this.number_hit, sunk: this.sunk };
  }
  hit() {
    if (!this.sunk) {
      this.number_hit++;
      this.sunk = this.isSunk();
    }
  }
  isSunk() {
    return this.number_hit === this.length;
  }
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _game_logic_game_logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-logic/game-logic */ "./src/game-logic/game-logic.js");



// initGame("human", "human");
(0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_1__.initGame)(
  { type: "human", name: "player-1" },
  { type: "human", name: "player-2" }
);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sd0ZBQXdGLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxZQUFZLE9BQU8sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxZQUFZLE9BQU8sVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxpREFBaUQsY0FBYyxlQUFlLDJCQUEyQixHQUFHLDhCQUE4QixrQkFBa0IseURBQXlELGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixhQUFhLGlCQUFpQiw4QkFBOEIsdUNBQXVDLEdBQUcsNkJBQTZCLG1CQUFtQiwwQkFBMEIseUJBQXlCLEdBQUcscUNBQXFDLGVBQWUsZ0JBQWdCLGtCQUFrQixrQ0FBa0Msd0JBQXdCLG1DQUFtQyxpQkFBaUIsd0JBQXdCLEdBQUcsd0VBQXdFLGtCQUFrQiwyQkFBMkIsYUFBYSw0QkFBNEIsd0JBQXdCLEdBQUcsNERBQTRELGtCQUFrQiwyQ0FBMkMsd0NBQXdDLHdCQUF3Qiw0QkFBNEIsaUJBQWlCLGtCQUFrQiw4QkFBOEIsdUJBQXVCLHFCQUFxQix1QkFBdUIsR0FBRyxrQkFBa0IsdUJBQXVCLGVBQWUscUJBQXFCLGlCQUFpQixHQUFHLDZCQUE2QixpQkFBaUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsNEJBQTRCLHNCQUFzQiwyQ0FBMkMsR0FBRyxnQkFBZ0IsOEJBQThCLEdBQUcsK0JBQStCLDRCQUE0QixHQUFHLGVBQWUsMEJBQTBCLG9CQUFvQixxQkFBcUIsNkJBQTZCLEdBQUcsZ0JBQWdCLDJCQUEyQixpQkFBaUIsaUJBQWlCLDBCQUEwQixHQUFHLHdDQUF3QyxvQkFBb0IseUNBQXlDLGlCQUFpQixHQUFHLGdFQUFnRSxpQkFBaUIsOEJBQThCLHFCQUFxQixHQUFHLDBDQUEwQyxpQkFBaUIsR0FBRyxxQkFBcUI7QUFDaDNHO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDckkxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksdUZBQU8sVUFBVSx1RkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUN4QmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1BrQzs7QUFFbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGtFQUFVO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHdFQUFnQjtBQUMvQztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSSwyRUFBbUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQix3RUFBZ0I7QUFDMUM7O0FBRUE7QUFDQSwwQkFBMEI7O0FBRTFCLHdCQUF3QixrRUFBVTtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGtFQUFVO0FBQzVCO0FBQ0EsMEJBQTBCLHdFQUFnQjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHdFQUFnQjtBQUN4QztBQUNBLFFBQVEsbUJBQW1CO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMENBQTBDLHVCQUF1QjtBQUNqRSwwQ0FBMEMsdUJBQXVCO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxhQUFhOztBQUUvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0tTO0FBQ3FCOztBQUVyRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0EsYUFBYSx3REFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDZEQUFPO0FBQ1Q7QUFDQTtBQUNBLEVBQUUsd0VBQWtCO0FBQ3BCOztBQVNFOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEV3Qzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrREFBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaURBQWlELE9BQU87QUFDeEQ7QUFDQSwyQ0FBMkMsUUFBUTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Um9DOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpRUFBUztBQUNsQztBQUNBOztBQUVrQjs7Ozs7Ozs7Ozs7Ozs7O0FDVmxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWdCOzs7Ozs7O1VDcEJoQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7QUNBc0I7QUFDNkI7O0FBRW5EO0FBQ0EsZ0VBQVE7QUFDUixJQUFJLGlDQUFpQztBQUNyQyxJQUFJO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20tbWFuaXAvZG9tLW1hbmlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS1sb2dpYy9nYW1lLWxvZ2ljLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkL2dhbWVib2FyZC1jbGFzcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci9wbGF5ZXItY2xhc3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwL3NoaXAtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogR2VuZXJhbCBSZXNldCAqL1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogQm9keSBTdHlsaW5nICovXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMWE3OGFlLCAjNDMxZGQ5KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG59XG5cbi8qIFRpdGxlIFN0eWxpbmcgKi9cbmgxIHtcbiAgZm9udC1zaXplOiAzZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbi8qIEJvYXJkIENvbnRhaW5lcnMgKi9cbi5ib2FyZHMge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDcwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4vKiBQbGF5ZXIgQ29udGFpbmVycyAqL1xuLnBsYXllci0xLWNvbnRhaW5lcixcbi5wbGF5ZXItMi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIEJvYXJkIFN0eWxpbmcgKi9cbi5wbGF5ZXItMS1ib2FyZCxcbi5wbGF5ZXItMi1ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MzM1ODtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ib2FyZC1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMzBweDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBCb3ggU3R5bGluZyAqL1xuLmJveCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBjdXJzb3I6IGNyb3NzaGFpcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG59XG5cbi5ib3g6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE3OGFlO1xufVxuXG4vKiBTaGlwIFN0eWxpbmcgKi9cbi5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5zaGlwLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBmb250LXNpemU6IDEuNWVtO1xuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XG59XG5cbi5zaGlwLnN1bmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuODtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xufVxuXG4vKiBNaXNzZWQgU2hvdCBTdHlsaW5nICovXG4ubWlzc2VkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA1LCAxMDcsIDEwNSk7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLyogUGxheWVyIFRleHQgU3R5bGluZyAqL1xuLnBsYXllci0xLXRleHQsXG4ucGxheWVyLTItdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLyogVXRpbGl0eSBDbGFzc2VzICovXG4uaGFsZi1vcGFjaXR5IHtcbiAgb3BhY2l0eTogMC41O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxrQkFBa0I7QUFDbEI7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxhQUFhO0VBQ2Isb0RBQW9EO0VBQ3BELGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixnQ0FBZ0M7QUFDbEM7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQSxzQkFBc0I7QUFDdEI7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQSxrQkFBa0I7QUFDbEI7O0VBRUUsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkOztBQUVBLHdCQUF3QjtBQUN4Qjs7RUFFRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR2VuZXJhbCBSZXNldCAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIEJvZHkgU3R5bGluZyAqL1xcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzFhNzhhZSwgIzQzMWRkOSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiBUaXRsZSBTdHlsaW5nICovXFxuaDEge1xcbiAgZm9udC1zaXplOiAzZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuLyogQm9hcmQgQ29udGFpbmVycyAqL1xcbi5ib2FyZHMge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogNzAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi8qIFBsYXllciBDb250YWluZXJzICovXFxuLnBsYXllci0xLWNvbnRhaW5lcixcXG4ucGxheWVyLTItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIEJvYXJkIFN0eWxpbmcgKi9cXG4ucGxheWVyLTEtYm9hcmQsXFxuLnBsYXllci0yLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODMzNTg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYm9hcmQtbGFiZWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMzBweDtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIEJveCBTdHlsaW5nICovXFxuLmJveCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcbn1cXG5cXG4uYm94OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTc4YWU7XFxufVxcblxcbi8qIFNoaXAgU3R5bGluZyAqL1xcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc2hpcC5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcXG59XFxuXFxuLnNoaXAuc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbn1cXG5cXG4vKiBNaXNzZWQgU2hvdCBTdHlsaW5nICovXFxuLm1pc3NlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA1LCAxMDcsIDEwNSk7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi8qIFBsYXllciBUZXh0IFN0eWxpbmcgKi9cXG4ucGxheWVyLTEtdGV4dCxcXG4ucGxheWVyLTItdGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLyogVXRpbGl0eSBDbGFzc2VzICovXFxuLmhhbGYtb3BhY2l0eSB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1xuICBnZXRQbGF5ZXJzLFxuICBnZXRHYW1lU3RhdGUsXG4gIGNoYW5nZUN1cnJlbnRQbGF5ZXIsXG4gIGdldEN1cnJlbnRQbGF5ZXIsXG4gIGdldE9wcG9zaW5nUGxheWVyLFxufSBmcm9tIFwiLi4vZ2FtZS1sb2dpYy9nYW1lLWxvZ2ljXCI7XG5cbmZ1bmN0aW9uIGluaXREb20oKSB7XG4gIHBvcHVsYXRlQm9hcmQoKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVCb2FyZCgpIHtcbiAgY29uc3QgYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZFwiKTtcblxuICBib2FyZHMuZm9yRWFjaCgoYm9hcmQsIGluZGV4KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBjb25zdCByb3dJbmRleCA9IGk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgY29uc3QgY29sdW1uSW5kZXggPSBqO1xuICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVEaXYoXCJib3hcIik7XG5cbiAgICAgICAgZGl2LmRhdGFzZXQucm93ID0gcm93SW5kZXg7XG4gICAgICAgIGRpdi5kYXRhc2V0LmNvbHVtbiA9IGNvbHVtbkluZGV4O1xuICAgICAgICBkaXYuZGF0YXNldC5wbGF5ZXIgPSBpbmRleDtcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZURpdkNsaWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVEaXZDbGljayhlKSB7XG4gIC8vIGlmIGhpdCBzaGlwIGlzIHN1Y2Nlc2Z1bFxuICBpZiAoaGl0U2hpcChlLnRhcmdldC5kYXRhc2V0KSkge1xuICAgIC8vIGNvbnRpbnVlIHBsYXlpbmcgd2l0aCB0aGUgY3VycmVudCBwbGF5ZXJcbiAgICBjb25zdCBjdXJyZW50UGxheWVyID1cbiAgICAgIGdldFBsYXllcnMoKVtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnBsYXllcildLnBsYXllcjtcbiAgICAvLyBjaGVjayBpZiBhbGwgc2hpcHMgc3Vua1xuICAgIGlmIChjdXJyZW50UGxheWVyLmdhbWVib2FyZC5oYXNBbGxTaGlwc0JlZW5TdW5rKCkpIHtcbiAgICAgIC8vIGRpc3BsYXkgd2lubmluZyBwbGF5ZXJcbiAgICAgIC8vIGRpc3BsYXlXaW5uZXIoKVxuICAgICAgY29uc29sZS5sb2coXCJ3aW5uZXIgaXNcIiwgZ2V0Q3VycmVudFBsYXllcigpKTtcbiAgICB9XG4gICAgLy8gaWYgaGl0IHNoaXAgaXMgbm90IHN1Y2Nlc3NmdWxcbiAgfSBlbHNlIHtcbiAgICAvLyBjaGFuZ2UgdGhlIGN1cnJlbnQgcGxheWVyXG4gICAgY2hhbmdlQ3VycmVudFBsYXllcigpO1xuICAgIHJlbmRlckN1cnJlbnRQbGF5ZXJEaXNwbGF5KCk7XG4gIH1cblxuICBwb3B1bGF0ZUdhbWVib2FyZHMoKTtcbiAgcmVuZGVyQ3VycmVudFBsYXllclRleHQoZ2V0Q3VycmVudFBsYXllcigpKTtcbn1cblxuZnVuY3Rpb24gaGl0U2hpcChwbGF5ZXIpIHtcbiAgY29uc3QgcGxheWVyRGF0YXNldCA9IHsgLi4ucGxheWVyIH07XG5cbiAgY29uc3QgY3VycmVudFBsYXllciA9IGdldFBsYXllcnMoKVtwYXJzZUludChwbGF5ZXJEYXRhc2V0LnBsYXllcildO1xuICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBjdXJyZW50UGxheWVyLnBsYXllci5nYW1lYm9hcmQ7XG5cbiAgY29uc3QgeF9jb29yZCA9IHBhcnNlSW50KHBsYXllckRhdGFzZXQucm93KTtcbiAgY29uc3QgeV9jb29yZCA9IHBhcnNlSW50KHBsYXllckRhdGFzZXQuY29sdW1uKTtcbiAgY29uc3QgY29vcmQgPSBbeF9jb29yZCwgeV9jb29yZF07XG4gIHJldHVybiBwbGF5ZXJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZCk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlR2FtZWJvYXJkcygpIHtcbiAgY29uc3QgcGxheWVycyA9IGdldFBsYXllcnMoKTtcbiAgcmVuZGVyUGxheWVyTmFtZXMocGxheWVycyk7XG4gIHJlbmRlckN1cnJlbnRQbGF5ZXJUZXh0KGdldEN1cnJlbnRQbGF5ZXIoKSk7XG4gIHJlbmRlckN1cnJlbnRQbGF5ZXJEaXNwbGF5KCk7XG4gIHBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgcmVuZGVyUGxheWVyQm9hcmQocGxheWVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckN1cnJlbnRQbGF5ZXJEaXNwbGF5KCkge1xuICAvLyBnZXQgcGxheWVyIGJvYXJkIGRpdnNcbiAgY29uc3QgUGxheWVyMUJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItMS1ib2FyZFwiKTtcbiAgY29uc3QgUGxheWVyMkJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItMi1ib2FyZFwiKTtcblxuICAvLyByZXNldCBib2FyZHMgb3BhY2l0eVxuICBQbGF5ZXIxQm9hcmREaXYuY2xhc3NMaXN0LnJlbW92ZShcImhhbGYtb3BhY2l0eVwiKTtcbiAgUGxheWVyMkJvYXJkRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoYWxmLW9wYWNpdHlcIik7XG5cbiAgLy8gc2V0IGN1cnJlbnQgcGxheWVyIGJvYXJkIG9wYWNpdHlcbiAgY29uc3QgY3VycmVudFBsYXllciA9IGdldEN1cnJlbnRQbGF5ZXIoKTtcbiAgY29uc3QgY3VycmVudFBsYXllckJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgLiR7Y3VycmVudFBsYXllci5uYW1lfS1ib2FyZGBcbiAgKTtcbiAgY3VycmVudFBsYXllckJvYXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJoYWxmLW9wYWNpdHlcIik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBsYXllckJvYXJkKHBsYXllcikge1xuICAvLyBpZiBwbGF5ZXIgaXMgc29tZXRoaW5nIG90aGVyIHRoYW4gaHVtYW4gZG9udCByZW5kZXJcbiAgaWYgKHBsYXllci50eXBlID09PSBcImFpXCIpIHJldHVybjtcblxuICBjb25zdCBjdXJyZW50UGxheWVyID0gcGxheWVyLnBsYXllcjtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBBcnJheS5mcm9tKHBsYXllci5ib2FyZCk7XG5cbiAgLy9yZW5kZXIgY3VycmVudGNvb3Jkc1xuICBjdXJyZW50UGxheWVyLmdhbWVib2FyZC5jdXJyZW50Q29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZmluZENvcnJlc3BvbmRpbmdEaXYoY29vcmQsIHBsYXllckJvYXJkKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gIH0pO1xuXG4gIC8vcmVuZGVyIHN1Y2Nlc3NmdWwgaGl0c2hvdHNcbiAgY3VycmVudFBsYXllci5nYW1lYm9hcmQuaGl0U2hvdHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICBjb25zdCBkaXYgPSBmaW5kQ29ycmVzcG9uZGluZ0Rpdihjb29yZCwgcGxheWVyQm9hcmQpO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IFwi4p2MXCI7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgLy8gcHJldmVudCBjbGlja2luZyB0aGUgc2FtZSBjb29yZCBhZ2FpblxuICAgIGRpdi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRGl2Q2xpY2spO1xuICB9KTtcblxuICAvL3JlbmRlciBtaXNzZWRzaG90c1xuICBjdXJyZW50UGxheWVyLmdhbWVib2FyZC5taXNzZWRTaG90cy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGZpbmRDb3JyZXNwb25kaW5nRGl2KGNvb3JkLCBwbGF5ZXJCb2FyZCk7XG4gICAgZGl2LnRleHRDb250ZW50ID0gXCLwn5SYXCI7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJtaXNzZWRcIik7XG4gICAgLy8gcHJldmVudCBjbGlja2luZyB0aGUgc2FtZSBjb29yZCBhZ2FpblxuICAgIGRpdi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRGl2Q2xpY2spO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmluZENvcnJlc3BvbmRpbmdEaXYoY29vcmQsIGJvYXJkKSB7XG4gIGNvbnN0IFt4X2Nvb3JkLCB5X2Nvb3JkXSA9IGNvb3JkO1xuXG4gIGNvbnN0IGRpdiA9IGJvYXJkLmZpbmQoKGRpdikgPT4ge1xuICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KGRpdi5kYXRhc2V0LnJvdyk7XG4gICAgY29uc3QgY29sdW1uID0gcGFyc2VJbnQoZGl2LmRhdGFzZXQuY29sdW1uKTtcbiAgICByZXR1cm4gcm93ID09PSB4X2Nvb3JkICYmIGNvbHVtbiA9PT0geV9jb29yZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUGxheWVyTmFtZXMocGxheWVycykge1xuICBjb25zdCBwbGF5ZXIxRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItMS10ZXh0XCIpO1xuICBjb25zdCBwbGF5ZXIyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItMi10ZXh0XCIpO1xuXG4gIHBsYXllcjFEaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICBwbGF5ZXIyRGl2LnRleHRDb250ZW50ID0gXCJcIjtcblxuICBwbGF5ZXIxRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRpbmcoYCR7cGxheWVyc1swXS5wbGF5ZXIubmFtZX1gLCBcImgyXCIpKTtcbiAgcGxheWVyMkRpdi5hcHBlbmRDaGlsZChjcmVhdGVIZWFkaW5nKGAke3BsYXllcnNbMV0ucGxheWVyLm5hbWV9YCwgXCJoMlwiKSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckN1cnJlbnRQbGF5ZXJUZXh0KHBsYXllcikge1xuICBjb25zdCBjdXJyZW50UGxheWVySGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LXBsYXllci1oZWFkZXJcIik7XG4gIGN1cnJlbnRQbGF5ZXJIZWFkZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGluZyhgJHtwbGF5ZXIubmFtZX0gaXMgYXR0YWNraW5nLi4uYCwgXCJoMVwiKTtcblxuICBjdXJyZW50UGxheWVySGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRpbmcodGV4dCwgaGVhZGluZykge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGhlYWRpbmcpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpdihjbGFzc05hbWUpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IHsgaW5pdERvbSwgcG9wdWxhdGVHYW1lYm9hcmRzIH07XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyL3BsYXllci1jbGFzc1wiO1xuaW1wb3J0IHsgaW5pdERvbSwgcG9wdWxhdGVHYW1lYm9hcmRzIH0gZnJvbSBcIi4uL2RvbS1tYW5pcC9kb20tbWFuaXBcIjtcblxubGV0IHBsYXllcnMgPSBbXTtcbmxldCBnYW1lU3RhdGU7XG5cbmZ1bmN0aW9uIGdldEJvYXJkc0RPTShpbmRleCkge1xuICBjb25zdCBib2FyZHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmRcIikpO1xuICBjb25zdCBib2FyZHNDaGlsZE5vZGVzID0gW2JvYXJkc1swXS5jaGlsZHJlbiwgYm9hcmRzWzFdLmNoaWxkcmVuXTtcbiAgcmV0dXJuIGJvYXJkc0NoaWxkTm9kZXNbaW5kZXhdO1xufVxuXG5mdW5jdGlvbiBpbml0UGxheWVycyhwbGF5ZXIxVHlwZSwgcGxheWVyMlR5cGUsIHBsYXllcjFOYW1lLCBwbGF5ZXIyTmFtZSkge1xuICBwbGF5ZXJzID0gW1xuICAgIHtcbiAgICAgIHBsYXllcjogY3JlYXRlUGxheWVyKHBsYXllcjFUeXBlLCBwbGF5ZXIxTmFtZSksXG4gICAgICBib2FyZDogZ2V0Qm9hcmRzRE9NKDApLFxuICAgIH0sXG4gICAge1xuICAgICAgcGxheWVyOiBjcmVhdGVQbGF5ZXIocGxheWVyMlR5cGUsIHBsYXllcjJOYW1lKSxcbiAgICAgIGJvYXJkOiBnZXRCb2FyZHNET00oMSksXG4gICAgfSxcbiAgXTtcbn1cbmZ1bmN0aW9uIGluaXRHYW1lU3RhdGUoKSB7XG4gIGdhbWVTdGF0ZSA9IHsgY3VycmVudFBsYXllcjogcGxheWVyc1swXS5wbGF5ZXIsIGlzRmluaXNoZWQ6IGZhbHNlIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYXllcihwbGF5ZXJUeXBlLCBwbGF5ZXJOYW1lKSB7XG4gIHJldHVybiBuZXcgUGxheWVyKHBsYXllclR5cGUsIHBsYXllck5hbWUpO1xufVxuZnVuY3Rpb24gZ2V0UGxheWVycygpIHtcbiAgcmV0dXJuIHBsYXllcnM7XG59XG5mdW5jdGlvbiBnZXRHYW1lU3RhdGUoKSB7XG4gIHJldHVybiBnYW1lU3RhdGU7XG59XG5mdW5jdGlvbiBnZXRDdXJyZW50UGxheWVyKCkge1xuICByZXR1cm4gZ2FtZVN0YXRlLmN1cnJlbnRQbGF5ZXI7XG59XG5mdW5jdGlvbiBnZXRPcHBvc2luZ1BsYXllcigpIHtcbiAgcmV0dXJuIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyID09PSBwbGF5ZXJzWzBdLnBsYXllclxuICAgID8gcGxheWVyc1sxXS5wbGF5ZXJcbiAgICA6IHBsYXllcnNbMF0ucGxheWVyO1xufVxuZnVuY3Rpb24gY2hhbmdlQ3VycmVudFBsYXllcigpIHtcbiAgZ2FtZVN0YXRlLmN1cnJlbnRQbGF5ZXIgPVxuICAgIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyID09PSBwbGF5ZXJzWzBdLnBsYXllclxuICAgICAgPyAoZ2FtZVN0YXRlLmN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJzWzFdLnBsYXllcilcbiAgICAgIDogKGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyID0gcGxheWVyc1swXS5wbGF5ZXIpO1xufVxuXG5mdW5jdGlvbiBpbml0R2FtZShwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gIGluaXREb20oKTtcbiAgaW5pdFBsYXllcnMocGxheWVyMS50eXBlLCBwbGF5ZXIyLnR5cGUsIHBsYXllcjEubmFtZSwgcGxheWVyMi5uYW1lKTtcbiAgaW5pdEdhbWVTdGF0ZSgpO1xuICBwb3B1bGF0ZUdhbWVib2FyZHMoKTtcbn1cblxuZXhwb3J0IHtcbiAgaW5pdEdhbWUsXG4gIGdldFBsYXllcnMsXG4gIGdldEdhbWVTdGF0ZSxcbiAgY2hhbmdlQ3VycmVudFBsYXllcixcbiAgZ2V0Q3VycmVudFBsYXllcixcbiAgZ2V0T3Bwb3NpbmdQbGF5ZXIsXG59O1xuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuLi9zaGlwL3NoaXAtY2xhc3NcIjtcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgIHRoaXMubWlzc2VkU2hvdHMgPSBbXTtcbiAgICB0aGlzLmhpdFNob3RzID0gW107XG4gICAgdGhpcy5jdXJyZW50Q29vcmRzID0gW107XG4gICAgdGhpcy5zdXJyb3VuZGluZ0Nvb3JkcyA9IFtdO1xuICAgIHRoaXMuX2dlbmVyYXRlU2hpcE1hcCgpO1xuICB9XG4gIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSkge1xuICAgIC8vIGdldCB0aGUgc2hpcCBvYmplY3Qgd2l0aCBtYXRjaGluZyBjb29yZGluYXRlXG4gICAgY29uc3Qgc2hpcCA9IHRoaXMuX2dldFNoaXAoY29vcmRpbmF0ZSk7XG4gICAgaWYgKHNoaXAgJiYgIXNoaXAuc3Vuaykge1xuICAgICAgLy8gaWYgc2hpcCBmb3VuZCBhbmQgbm90IHN1bmsgeWV0LCBjYWxsIGhpdCgpIG9uIGl0XG4gICAgICBzaGlwLmhpdCgpO1xuICAgICAgLy90aGVuIHJlbW92ZSBmcm9tIGN1cnJlbnRDb29yZHMgYW5kIG1vdmUgdG8gaGl0U2hvdHNcbiAgICAgIHRoaXMuaGl0U2hvdHMucHVzaChjb29yZGluYXRlKTtcbiAgICAgIHRoaXMuY3VycmVudENvb3Jkcy5zcGxpY2UoXG4gICAgICAgIGZpbmRJbmRleG9mSXRlbUluQXJyYXkodGhpcy5jdXJyZW50Q29vcmRzLCBjb29yZGluYXRlKSxcbiAgICAgICAgMVxuICAgICAgKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgICAgLy8gaWYgbm90IHNoaXAgbm90IGZvdW5kLCBwdXNoIGNvb3JkaW5hdGUgdG8gbWlzc2VkU2hvdHMgYXJyYXlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5taXNzZWRTaG90cy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGhhc0FsbFNoaXBzQmVlblN1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpcHMuZXZlcnkoKHNoaXApID0+IHtcbiAgICAgIHJldHVybiBzaGlwLnNoaXAuc3VuayA9PT0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIF9nZXRTaGlwKGNvb3JkaW5hdGUpIHtcbiAgICBmb3IgKGNvbnN0IHNoaXAgb2YgdGhpcy5zaGlwcykge1xuICAgICAgZm9yIChjb25zdCBjb29yZCBvZiBzaGlwLmNvb3Jkcykge1xuICAgICAgICBpZiAoYXJyYXlzRXF1YWwoY29vcmQsIGNvb3JkaW5hdGUpKSB7XG4gICAgICAgICAgcmV0dXJuIHNoaXAuc2hpcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIF9nZW5lcmF0ZVNoaXBNYXAoKSB7XG4gICAgLy8gZ2VuZXJhdGUgZm91ciAxLWxlbmd0aCBzaGlwc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICB0aGlzLnNoaXBzLnB1c2godGhpcy5fZ2VuZXJhdGVTaGlwKDEpKTtcbiAgICB9XG4gICAgLy8gLy8gZ2VuZXJhdGUgdGhyZWUgMi1sZW5ndGggc2hpcHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgdGhpcy5zaGlwcy5wdXNoKHRoaXMuX2dlbmVyYXRlU2hpcCgyKSk7XG4gICAgfVxuICAgIC8vIC8vIGdlbmVyYXRlIHR3byAzLWxlbmd0aCBzaGlwc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICB0aGlzLnNoaXBzLnB1c2godGhpcy5fZ2VuZXJhdGVTaGlwKDMpKTtcbiAgICB9XG4gICAgLy8gLy8gZ2VuZXJhdGUgb25lIDQtbGVuZ3RoIHNoaXBcbiAgICB0aGlzLnNoaXBzLnB1c2godGhpcy5fZ2VuZXJhdGVTaGlwKDQpKTtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudENvb3Jkcyk7XG4gICAgY29uc29sZS5sb2codGhpcy5zdXJyb3VuZGluZ0Nvb3Jkcyk7XG4gIH1cblxuICBfZ2VuZXJhdGVTaGlwKGxlbmd0aCwgeF9jb29yZCA9IG51bGwsIHlfY29vcmQgPSBudWxsKSB7XG4gICAgY29uc3QgY29vcmRzID0gdGhpcy5fZ2VuZXJhdGVDb29yZChsZW5ndGgsIHhfY29vcmQsIHlfY29vcmQpO1xuICAgIHJldHVybiB7XG4gICAgICBjb29yZHMsXG4gICAgICBzaGlwOiBuZXcgU2hpcChsZW5ndGgpLFxuICAgIH07XG4gIH1cbiAgX2dlbmVyYXRlQ29vcmQobGVuZ3RoLCB4X2Nvb3JkID0gbnVsbCwgeV9jb29yZCA9IG51bGwpIHtcbiAgICAvLyBzZXQgcmFuZG9tICh4LHkpIGNvb3JkaW5hdGVzXG4gICAgbGV0IHggPSB4X2Nvb3JkID09PSBudWxsID8gdGhpcy5fZ2VuZXJhdGVSYW5kb21OdW1iZXIoKSA6IHhfY29vcmQ7XG4gICAgbGV0IHkgPSB5X2Nvb3JkID09PSBudWxsID8gdGhpcy5fZ2VuZXJhdGVSYW5kb21OdW1iZXIoKSA6IHlfY29vcmQ7XG5cbiAgICAvLyBwaWNrIGEgZGlyZWN0aW9uIHRvIGV4dGVuZCB0aGUgc2hpcFxuICAgIGNvbnN0IG9yaWVudGF0aW9uWCA9IE1hdGgucmFuZG9tKCkgPj0gMC41O1xuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5faXNWYWxpZENvb3JkKHgsIHksIGxlbmd0aCwgb3JpZW50YXRpb25YKSAmJlxuICAgICAgICAhdGhpcy5fcHJlZGljdENvbGxpc2lvbldpdGhDdXJyZW50Q29vcmRzKFxuICAgICAgICAgIG9yaWVudGF0aW9uWCA/IFwieFwiIDogXCJ5XCIsXG4gICAgICAgICAgeCxcbiAgICAgICAgICB5LFxuICAgICAgICAgIGxlbmd0aFxuICAgICAgICApICYmXG4gICAgICAgICF0aGlzLl9wcmVkaWN0Q29sbGlzaW9uV2l0aFN1cnJvdW5kaW5nQ29vcmRzKFxuICAgICAgICAgIG9yaWVudGF0aW9uWCA/IFwieFwiIDogXCJ5XCIsXG4gICAgICAgICAgeCxcbiAgICAgICAgICB5LFxuICAgICAgICAgIGxlbmd0aFxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB4ID0gdGhpcy5fZ2VuZXJhdGVSYW5kb21OdW1iZXIoKTtcbiAgICAgIHkgPSB0aGlzLl9nZW5lcmF0ZVJhbmRvbU51bWJlcigpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvb3JkQXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29vcmRBcnIucHVzaChbeCwgeV0pO1xuICAgICAgdGhpcy5jdXJyZW50Q29vcmRzLnB1c2goW3gsIHldKTtcbiAgICAgIGlmIChvcmllbnRhdGlvblgpIHtcbiAgICAgICAgeCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeSsrO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhjb29yZEFycik7XG4gICAgdGhpcy5fZ2V0U3Vycm91bmRpbmdDb29yZHMoY29vcmRBcnIsIGxlbmd0aCwgb3JpZW50YXRpb25YKS5mb3JFYWNoKFxuICAgICAgKGVsZW1lbnQpID0+IHtcbiAgICAgICAgdGhpcy5zdXJyb3VuZGluZ0Nvb3Jkcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgfVxuICAgICk7XG4gICAgLy8gdGhpcy5zdXJyb3VuZGluZ0Nvb3Jkcy5wdXNoKFxuICAgIC8vICAgdGhpcy5fZ2V0U3Vycm91bmRpbmdDb29yZHMoY29vcmRBcnIsIGxlbmd0aCwgb3JpZW50YXRpb25YKVxuICAgIC8vICk7XG4gICAgcmV0dXJuIGNvb3JkQXJyO1xuICB9XG5cbiAgX2dldFN1cnJvdW5kaW5nQ29vcmRzKGNvb3JkLCBsZW5ndGgsIG9yaWVudGF0aW9uWCkge1xuICAgIGNvbnN0IHN1ckNvb3JkQXJyYXkgPSBbXTtcblxuICAgIHN1ckNvb3JkQXJyYXkucHVzaCh0aGlzLl9nZXRVcHBlclJvd0Nvb3Jkcyhjb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvblgpKTtcbiAgICBzdXJDb29yZEFycmF5LnB1c2godGhpcy5fZ2V0Qm90dG9tUm93Q29vcmRzKGNvb3JkLCBsZW5ndGgsIG9yaWVudGF0aW9uWCkpO1xuICAgIHN1ckNvb3JkQXJyYXkucHVzaCh0aGlzLl9nZXRSaWdodENvb3Jkcyhjb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvblgpKTtcbiAgICBzdXJDb29yZEFycmF5LnB1c2godGhpcy5fZ2V0TGVmdENvb3Jkcyhjb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvblgpKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGBjdXJyZW50IGNvb3JkIHdpdGggbGVuZ3RoOiAke2xlbmd0aH06IGAsIGNvb3JkKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcbiAgICAvLyAgIGBzdXJyb3VuZGluZyBjb29yZHMgd2l0aCBsZW5ndGg6JHtsZW5ndGh9IGAsXG4gICAgLy8gICBzdXJDb29yZEFycmF5LmZsYXQoKVxuICAgIC8vICk7XG4gICAgcmV0dXJuIHN1ckNvb3JkQXJyYXkuZmxhdCgpO1xuICB9XG5cbiAgX2dldFVwcGVyUm93Q29vcmRzKGNvb3JkcywgbGVuZ3RoLCBvcmllbnRhdGlvblgpIHtcbiAgICBjb25zdCB1cHBlclJvdyA9IFtdO1xuICAgIGxldCBbeF9jb29yZCwgeV9jb29yZF0gPSBjb29yZHNbMF07XG5cbiAgICB5X2Nvb3JkLS07XG4gICAgeF9jb29yZC0tO1xuXG4gICAgbGV0IHVwcGVyUm93TGVuZ3RoID0gb3JpZW50YXRpb25YID8gbGVuZ3RoICsgMiA6IDM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cHBlclJvd0xlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5faXNXaXRoaW5Cb3VuZHMoW3hfY29vcmQsIHlfY29vcmRdKSkge1xuICAgICAgICB1cHBlclJvdy5wdXNoKFt4X2Nvb3JkLCB5X2Nvb3JkXSk7XG4gICAgICB9XG4gICAgICB4X2Nvb3JkKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVwcGVyUm93O1xuICB9XG4gIF9nZXRCb3R0b21Sb3dDb29yZHMoY29vcmRzLCBsZW5ndGgsIG9yaWVudGF0aW9uWCkge1xuICAgIGNvbnN0IGJvdHRvbVJvdyA9IFtdO1xuICAgIGxldCBbeF9jb29yZCwgeV9jb29yZF0gPSBjb29yZHNbbGVuZ3RoIC0gMV07XG5cbiAgICB5X2Nvb3JkKys7XG4gICAgeF9jb29yZCsrO1xuXG4gICAgbGV0IGJvdHRvbVJvd0xlbmd0aCA9IG9yaWVudGF0aW9uWCA/IGxlbmd0aCArIDIgOiAzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm90dG9tUm93TGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9pc1dpdGhpbkJvdW5kcyhbeF9jb29yZCwgeV9jb29yZF0pKSB7XG4gICAgICAgIGJvdHRvbVJvdy5wdXNoKFt4X2Nvb3JkLCB5X2Nvb3JkXSk7XG4gICAgICB9XG4gICAgICB4X2Nvb3JkLS07XG4gICAgfVxuICAgIHJldHVybiBib3R0b21Sb3c7XG4gIH1cbiAgX2dldFJpZ2h0Q29vcmRzKGNvb3JkcywgbGVuZ3RoLCBvcmllbnRhdGlvblgpIHtcbiAgICBjb25zdCByaWdodCA9IFtdO1xuXG4gICAgbGV0IFt4X2Nvb3JkLCB5X2Nvb3JkXSA9IGNvb3Jkc1tsZW5ndGggLSAxXTtcbiAgICB4X2Nvb3JkKys7XG5cbiAgICBsZXQgcmlnaHRMZW5ndGggPSBvcmllbnRhdGlvblggPyAxIDogbGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmlnaHRMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX2lzV2l0aGluQm91bmRzKFt4X2Nvb3JkLCB5X2Nvb3JkXSkpIHtcbiAgICAgICAgcmlnaHQucHVzaChbeF9jb29yZCwgeV9jb29yZF0pO1xuICAgICAgfVxuICAgICAgeV9jb29yZC0tO1xuICAgIH1cblxuICAgIHJldHVybiByaWdodDtcbiAgfVxuICBfZ2V0TGVmdENvb3Jkcyhjb29yZHMsIGxlbmd0aCwgb3JpZW50YXRpb25YKSB7XG4gICAgY29uc3QgbGVmdCA9IFtdO1xuXG4gICAgbGV0IFt4X2Nvb3JkLCB5X2Nvb3JkXSA9IGNvb3Jkc1swXTtcbiAgICB4X2Nvb3JkLS07XG5cbiAgICBsZXQgbGVmdExlbmd0aCA9IG9yaWVudGF0aW9uWCA/IDEgOiBsZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZWZ0TGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9pc1dpdGhpbkJvdW5kcyhbeF9jb29yZCwgeV9jb29yZF0pKSB7XG4gICAgICAgIGxlZnQucHVzaChbeF9jb29yZCwgeV9jb29yZF0pO1xuICAgICAgfVxuICAgICAgeV9jb29yZC0tO1xuICAgIH1cblxuICAgIHJldHVybiBsZWZ0O1xuICB9XG5cbiAgX3ByZWRpY3RDb2xsaXNpb25XaXRoQ3VycmVudENvb3JkcyhvcmlhbnRhdGlvbiwgeCwgeSwgbGVuZ3RoKSB7XG4gICAgY29uc3QgdGVtcEFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHRlbXBBcnIucHVzaChbeCwgeV0pO1xuICAgICAgaWYgKG9yaWFudGF0aW9uID09PSBcInhcIikgeCsrO1xuICAgICAgZWxzZSB5Kys7XG4gICAgfVxuICAgIC8vIFs2LDldIFs3LDldIFs4LDldIFs5LDldXG4gICAgZm9yIChjb25zdCBhcnJheSBvZiB0ZW1wQXJyKSB7XG4gICAgICBpZiAodGhpcy5faGFzQ29vcmRDb2xsaXNpb24oYXJyYXksIHRoaXMuY3VycmVudENvb3JkcykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBfcHJlZGljdENvbGxpc2lvbldpdGhTdXJyb3VuZGluZ0Nvb3JkcyhvcmlhbnRhdGlvbiwgeCwgeSwgbGVuZ3RoKSB7XG4gICAgY29uc3QgdGVtcEFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHRlbXBBcnIucHVzaChbeCwgeV0pO1xuICAgICAgaWYgKG9yaWFudGF0aW9uID09PSBcInhcIikgeCsrO1xuICAgICAgZWxzZSB5Kys7XG4gICAgfVxuICAgIC8vIFs2LDldIFs3LDldIFs4LDldIFs5LDldXG4gICAgZm9yIChjb25zdCBhcnJheSBvZiB0ZW1wQXJyKSB7XG4gICAgICBpZiAodGhpcy5faGFzQ29vcmRDb2xsaXNpb24oYXJyYXksIHRoaXMuc3Vycm91bmRpbmdDb29yZHMpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBfaXNXaXRoaW5Cb3VuZHMoY29vcmQpIHtcbiAgICBjb25zdCBbeF9jb29yZCwgeV9jb29yZF0gPSBjb29yZDtcbiAgICByZXR1cm4geF9jb29yZCA+PSAwICYmIHhfY29vcmQgPCAxMCAmJiB5X2Nvb3JkID49IDAgJiYgeV9jb29yZCA8IDEwO1xuICB9XG5cbiAgX2lzVmFsaWRDb29yZCh4LCB5LCBsZW5ndGgsIG9yaWVudGF0aW9uWCkge1xuICAgIGlmIChvcmllbnRhdGlvblgpIHtcbiAgICAgIHJldHVybiB4ICsgbGVuZ3RoIDw9IDEwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geSArIGxlbmd0aCA8PSAxMDtcbiAgICB9XG4gIH1cbiAgX2dlbmVyYXRlUmFuZG9tTnVtYmVyKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIH1cbiAgX2hhc0Nvb3JkQ29sbGlzaW9uKGNvb3JkLCBvdGhlckNvb3JkKSB7XG4gICAgcmV0dXJuIG90aGVyQ29vcmQuc29tZSgoZXhpc3RpbmdDb29yZCkgPT5cbiAgICAgIGFycmF5c0VxdWFsKGV4aXN0aW5nQ29vcmQsIGNvb3JkKVxuICAgICk7XG4gICAgLy8gYWxzbyBjaGVjayB3aXRoIHN1cnJvdW5kaW5nIGNvb3JkIGFycmF5XG4gIH1cbn1cblxuZnVuY3Rpb24gYXJyYXlzRXF1YWwoYXJyMSwgYXJyMikge1xuICBpZiAoYXJyMS5sZW5ndGggIT09IGFycjIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBhcnIxLmV2ZXJ5KChlbGVtZW50LCBpbmRleCkgPT4gZWxlbWVudCA9PT0gYXJyMltpbmRleF0pO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXhvZkl0ZW1JbkFycmF5KGFycmF5LCBpdGVtKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBUaGlzIGlmIHN0YXRlbWVudCBkZXBlbmRzIG9uIHRoZSBmb3JtYXQgb2YgeW91ciBhcnJheVxuICAgIGlmIChhcnJheVtpXVswXSA9PSBpdGVtWzBdICYmIGFycmF5W2ldWzFdID09IGl0ZW1bMV0pIHtcbiAgICAgIHJldHVybiBpOyAvLyBGb3VuZCBpdFxuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7IC8vIE5vdCBmb3VuZFxufVxuXG5leHBvcnQgeyBHYW1lYm9hcmQgfTtcbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuLi9nYW1lYm9hcmQvZ2FtZWJvYXJkLWNsYXNzXCI7XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIG5hbWUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgUGxheWVyIH07XG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5udW1iZXJfaGl0ID0gMDtcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgfVxuICBnZXRTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHsgbGVuZ3RoOiB0aGlzLmxlbmd0aCwgaGl0OiB0aGlzLm51bWJlcl9oaXQsIHN1bms6IHRoaXMuc3VuayB9O1xuICB9XG4gIGhpdCgpIHtcbiAgICBpZiAoIXRoaXMuc3Vuaykge1xuICAgICAgdGhpcy5udW1iZXJfaGl0Kys7XG4gICAgICB0aGlzLnN1bmsgPSB0aGlzLmlzU3VuaygpO1xuICAgIH1cbiAgfVxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtYmVyX2hpdCA9PT0gdGhpcy5sZW5ndGg7XG4gIH1cbn1cblxuZXhwb3J0IHsgU2hpcCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBpbml0R2FtZSB9IGZyb20gXCIuL2dhbWUtbG9naWMvZ2FtZS1sb2dpY1wiO1xuXG4vLyBpbml0R2FtZShcImh1bWFuXCIsIFwiaHVtYW5cIik7XG5pbml0R2FtZShcbiAgeyB0eXBlOiBcImh1bWFuXCIsIG5hbWU6IFwicGxheWVyLTFcIiB9LFxuICB7IHR5cGU6IFwiaHVtYW5cIiwgbmFtZTogXCJwbGF5ZXItMlwiIH1cbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=