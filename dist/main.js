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
  gap: 2em;
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
  overflow: visible; /* Changed to ensure content inside is not clipped */
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
  position: relative;
  overflow: visible; /* Ensure content inside is not clipped */
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
  font-size: 1.04em;
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

/* Coordinate Number Styling */
.coord-num-up {
  position: absolute;
  top: -2em; /* Adjust as necessary */
  left: 50%;
  transform: translateX(-50%);
  /* background: rgba(0, 0, 0, 0.5); */
  color: white;
  padding: 2px 5px;
  font-size: 1em;
  border-radius: 3px;
  z-index: 10; /* Ensure it's above other elements */
}

.coord-num-left {
  position: absolute;
  top: 50%;
  left: -2em; /* Adjust as necessary */
  transform: translateY(-50%);
  /* background: rgba(0, 0, 0, 0.5); */
  color: white;
  padding: 2px 5px;
  font-size: 1em;
  border-radius: 3px;
  z-index: 10; /* Ensure it's above other elements */
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,kBAAkB;AAClB;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,oDAAoD;EACpD,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,YAAY;EACZ,yBAAyB;EACzB,gCAAgC;AAClC;;AAEA,kBAAkB;AAClB;EACE,cAAc;EACd,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA,qBAAqB;AACrB;EACE,UAAU;EACV,WAAW;EACX,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;EACZ,mBAAmB;AACrB;;AAEA,sBAAsB;AACtB;;EAEE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA,kBAAkB;AAClB;;EAEE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,iBAAiB,EAAE,oDAAoD;EACvE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,gBAAgB;EAChB,YAAY;AACd;;AAEA,gBAAgB;AAChB;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,sCAAsC;EACtC,kBAAkB;EAClB,iBAAiB,EAAE,yCAAyC;AAC9D;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,iBAAiB;AACjB;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,iBAAiB;EACjB,wBAAwB;AAC1B;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,qBAAqB;AACvB;;AAEA,wBAAwB;AACxB;EACE,eAAe;EACf,oCAAoC;EACpC,YAAY;AACd;;AAEA,wBAAwB;AACxB;;EAEE,YAAY;EACZ,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA,oBAAoB;AACpB;EACE,YAAY;AACd;;AAEA,8BAA8B;AAC9B;EACE,kBAAkB;EAClB,SAAS,EAAE,wBAAwB;EACnC,SAAS;EACT,2BAA2B;EAC3B,oCAAoC;EACpC,YAAY;EACZ,gBAAgB;EAChB,cAAc;EACd,kBAAkB;EAClB,WAAW,EAAE,qCAAqC;AACpD;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU,EAAE,wBAAwB;EACpC,2BAA2B;EAC3B,oCAAoC;EACpC,YAAY;EACZ,gBAAgB;EAChB,cAAc;EACd,kBAAkB;EAClB,WAAW,EAAE,qCAAqC;AACpD","sourcesContent":["/* General Reset */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Body Styling */\nbody {\n  height: 100vh;\n  background: linear-gradient(90deg, #1a78ae, #431dd9);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2em;\n  color: white;\n  text-transform: uppercase;\n  font-family: \"Arial\", sans-serif;\n}\n\n/* Title Styling */\nh1 {\n  font-size: 3em;\n  letter-spacing: 0.1em;\n  margin-bottom: 0.5em;\n}\n\n/* Board Containers */\n.boards {\n  width: 90%;\n  height: 70%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.2);\n  padding: 1em;\n  border-radius: 10px;\n}\n\n/* Player Containers */\n.player-1-container,\n.player-2-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2em;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Board Styling */\n.player-1-board,\n.player-2-board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  align-items: center;\n  border: 2px solid white;\n  width: 500px;\n  height: 500px;\n  background-color: #083358;\n  border-radius: 8px;\n  overflow: visible; /* Changed to ensure content inside is not clipped */\n  position: relative;\n}\n\n.board-label {\n  position: absolute;\n  top: -30px;\n  font-size: 1.5em;\n  color: white;\n}\n\n/* Box Styling */\n.box {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid white;\n  cursor: crosshair;\n  transition: background-color 0.3s ease;\n  position: relative;\n  overflow: visible; /* Ensure content inside is not clipped */\n}\n\n.box:hover {\n  background-color: #1a78ae;\n}\n\n/* Ship Styling */\n.ship {\n  background-color: black;\n}\n\n.ship.hit {\n  background-color: red;\n  cursor: default;\n  font-size: 1.04em;\n  border: 2px solid yellow;\n}\n\n.ship.sunk {\n  background-color: gray;\n  color: white;\n  opacity: 0.8;\n  border: 2px solid red;\n}\n\n/* Missed Shot Styling */\n.missed {\n  cursor: default;\n  background-color: rgb(105, 107, 105);\n  opacity: 0.7;\n}\n\n/* Player Text Styling */\n.player-1-text,\n.player-2-text {\n  color: white;\n  text-transform: uppercase;\n  font-size: 1.5em;\n}\n\n/* Utility Classes */\n.half-opacity {\n  opacity: 0.5;\n}\n\n/* Coordinate Number Styling */\n.coord-num-up {\n  position: absolute;\n  top: -2em; /* Adjust as necessary */\n  left: 50%;\n  transform: translateX(-50%);\n  /* background: rgba(0, 0, 0, 0.5); */\n  color: white;\n  padding: 2px 5px;\n  font-size: 1em;\n  border-radius: 3px;\n  z-index: 10; /* Ensure it's above other elements */\n}\n\n.coord-num-left {\n  position: absolute;\n  top: 50%;\n  left: -2em; /* Adjust as necessary */\n  transform: translateY(-50%);\n  /* background: rgba(0, 0, 0, 0.5); */\n  color: white;\n  padding: 2px 5px;\n  font-size: 1em;\n  border-radius: 3px;\n  z-index: 10; /* Ensure it's above other elements */\n}\n"],"sourceRoot":""}]);
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

        // generateCoordNums([rowIndex, columnIndex]);
        if (rowIndex === 0) {
          const span = createSpan("coord-num-up", columnIndex);
          div.appendChild(span);
        }
        if (columnIndex === 0) {
          const span = createSpan("coord-num-left", rowIndex);
          div.appendChild(span);
        }
        board.appendChild(div);

        div.addEventListener("click", handleDivClick);
      }
    }
  });
}
function generateCoordNums(div) {
  const divRow = parseInt(div.dataset.row);
  const divColumn = parseInt(div.dataset.column);
  if (divRow === 0 && divColumn === 0) {
    const span1 = createSpan("coord-num-up", divColumn);
    div.appendChild(span1);
    const span2 = createSpan("coord-num-left", divRow);
    div.appendChild(span2);
  } else if (divRow === 0) {
    const span = createSpan("coord-num-up", divColumn);
    div.appendChild(span);
  } else if (divColumn === 0) {
    const span = createSpan("coord-num-left", divRow);
    div.appendChild(span);
  }
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
    // renderCurrentPlayerDisplay();
  }

  populateGameboards();
  renderCurrentPlayerText((0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getCurrentPlayer)());
}

function hitShip(player) {
  const playerDataset = { ...player };

  const currentPlayer = (0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getPlayers)()[parseInt(playerDataset.player)];
  const playerGameboard = currentPlayer.player.gameboard;

  const x_coord = parseInt(playerDataset.column);
  const y_coord = parseInt(playerDataset.row);
  const coord = [x_coord, y_coord];
  return playerGameboard.receiveAttack(coord);
}

function populateGameboards() {
  const players = (0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getPlayers)();
  console.log(players);
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

  // set players board eventListeners
  const nonCurrentPlayerBoard = [...(0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getNonCurrentPlayerDomBoard)()];
  const currentPlayerBoard = [...(0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getCurrentPlayerDomBoard)()];
  // set current players board unclickable
  currentPlayerBoard.forEach((div) => {
    div.removeEventListener("click", handleDivClick);
  });
  // set non current players board clickable
  nonCurrentPlayerBoard.forEach((div) => {
    div.addEventListener("click", handleDivClick);
  });
}

function renderPlayerBoard(player) {
  const currentPlayer = player.player;
  const playerBoard = Array.from(player.board);

  //render currentcoords
  // if player is ai dont render currentcoords
  if (player.player.type !== "ai") {
    currentPlayer.gameboard.currentCoords.forEach((coord) => {
      const div = findCorrespondingDiv(coord, playerBoard);
      div.classList.add("ship");
    });
  }

  //render successful hitshots
  currentPlayer.gameboard.hitShots.forEach((coord) => {
    const div = findCorrespondingDiv(coord, playerBoard);

    div.textContent = "❌";
    div.classList.add("hit");
    generateCoordNums(div);
    // prevent clicking the same coord again
    div.removeEventListener("click", handleDivClick);
  });

  //render missedshots
  currentPlayer.gameboard.missedShots.forEach((coord) => {
    const div = findCorrespondingDiv(coord, playerBoard);
    div.textContent = "🔘";
    div.classList.add("missed");
    generateCoordNums(div);
    // prevent clicking the same coord again
    div.removeEventListener("click", handleDivClick);
  });

  // //render surroundingCoords
  // currentPlayer.gameboard.surroundingCoords.forEach((coord) => {
  //   const div = findCorrespondingDiv(coord, playerBoard);
  //   div.textContent = "🔘";
  //   div.classList.add("missed");
  //   // prevent clicking the same coord again
  //   div.removeEventListener("click", handleDivClick);
  // });
}

function findCorrespondingDiv(coord, board) {
  const [x_coord, y_coord] = coord;

  const div = board.find((div) => {
    const row = parseInt(div.dataset.row);
    const column = parseInt(div.dataset.column);
    return row === y_coord && column === x_coord;
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

function createSpan(className, text) {
  const span = document.createElement("span");
  span.textContent = text;
  span.classList.add(className);

  return span;
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
/* harmony export */   getCurrentPlayerDomBoard: () => (/* binding */ getCurrentPlayerDomBoard),
/* harmony export */   getGameState: () => (/* binding */ getGameState),
/* harmony export */   getNonCurrentPlayerDomBoard: () => (/* binding */ getNonCurrentPlayerDomBoard),
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
  gameState = {
    currentPlayer: players[0].player,
    currentPlayerBoard: players[0].board,
    isFinished: false,
  };
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
function getCurrentPlayerDomBoard() {
  return gameState.currentPlayerBoard;
}
function getNonCurrentPlayerDomBoard() {
  return gameState.currentPlayer === players[0].player
    ? players[1].board
    : players[0].board;
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

  gameState.currentPlayerBoard =
    gameState.currentPlayer === players[0].player
      ? players[0].board
      : players[1].board;
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
    const ship = this._getShip(coordinate);
    if (ship && !ship.sunk) {
      ship.hit();
      this.hitShots.push(coordinate);
      this.currentCoords.splice(
        findIndexofItemInArray(this.currentCoords, coordinate),
        1
      );
      return true;
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
    this.ships.push(this._generateShip(4));

    for (let i = 0; i < 2; i++) {
      this.ships.push(this._generateShip(3));
    }

    for (let i = 0; i < 3; i++) {
      this.ships.push(this._generateShip(2));
    }

    for (let i = 0; i < 4; i++) {
      this.ships.push(this._generateShip(1));
    }

    // console.log(this.currentCoords);
    // console.log(this.surroundingCoords);
    // this.surroundingCoords = [...new Set(this.surroundingCoords)];
    this.surroundingCoords = removeDuplicateArrays(this.surroundingCoords);
    // console.log(this.surroundingCoords);
  }

  _generateShip(length, x_coord = null, y_coord = null) {
    const coords = this._generateCoord(length, x_coord, y_coord);
    return {
      coords,
      ship: new _ship_ship_class__WEBPACK_IMPORTED_MODULE_0__.Ship(length),
    };
  }

  _generateCoord(length, x_coord = null, y_coord = null) {
    let x = x_coord === null ? this._generateRandomNumber() : x_coord;
    let y = y_coord === null ? this._generateRandomNumber() : y_coord;
    const orientationX = Math.random() >= 0.5;
    let attempts = 0;
    const maxAttempts = 200;

    while (attempts < maxAttempts) {
      attempts++;
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

    if (attempts >= maxAttempts) {
      throw new Error(
        `Failed to generate valid coordinates after ${maxAttempts} attempts`
      );
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

    this.surroundingCoords.push(
      ...this._getSurroundingCoords(coordArr, length, orientationX)
    );

    return coordArr;
  }

  _getSurroundingCoords(coord, length, orientationX) {
    const surCoordArray = [];
    surCoordArray.push(this._getUpperRowCoords(coord, length, orientationX));
    surCoordArray.push(this._getBottomRowCoords(coord, length, orientationX));
    surCoordArray.push(this._getRightCoords(coord, length, orientationX));
    surCoordArray.push(this._getLeftCoords(coord, length, orientationX));

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
    let x_coord;
    let y_coord;
    if (orientationX) {
      [x_coord, y_coord] = coords[0];
    } else {
      [x_coord, y_coord] = coords[length - 1];
    }
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
  }
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((element, index) => element === arr2[index]);
}

function findIndexofItemInArray(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (arraysEqual(array[i], item)) {
      return i;
    }
  }
  return -1;
}
function removeDuplicateArrays(arrays) {
  const uniqueArrays = new Set(arrays.map(JSON.stringify));
  return Array.from(uniqueArrays).map(JSON.parse);
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
(0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_1__.initGame)({ type: "human", name: "player-1" }, { type: "ai", name: "player-2" });

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztVQ3BCaEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7O0FDQXNCO0FBQzZCOztBQUVuRDtBQUNBLGdFQUFRLEdBQUcsaUNBQWlDLElBQUksOEJBQThCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLW1hbmlwL2RvbS1tYW5pcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUtbG9naWMvZ2FtZS1sb2dpYy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC9nYW1lYm9hcmQtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIvcGxheWVyLWNsYXNzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC9zaGlwLWNsYXNzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEdlbmVyYWwgUmVzZXQgKi9cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIEJvZHkgU3R5bGluZyAqL1xuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzFhNzhhZSwgIzQzMWRkOSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xufVxuXG4vKiBUaXRsZSBTdHlsaW5nICovXG5oMSB7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuXG4vKiBCb2FyZCBDb250YWluZXJzICovXG4uYm9hcmRzIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA3MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyogUGxheWVyIENvbnRhaW5lcnMgKi9cbi5wbGF5ZXItMS1jb250YWluZXIsXG4ucGxheWVyLTItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBCb2FyZCBTdHlsaW5nICovXG4ucGxheWVyLTEtYm9hcmQsXG4ucGxheWVyLTItYm9hcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODMzNTg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIENoYW5nZWQgdG8gZW5zdXJlIGNvbnRlbnQgaW5zaWRlIGlzIG5vdCBjbGlwcGVkICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJvYXJkLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0zMHB4O1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIEJveCBTdHlsaW5nICovXG4uYm94IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogRW5zdXJlIGNvbnRlbnQgaW5zaWRlIGlzIG5vdCBjbGlwcGVkICovXG59XG5cbi5ib3g6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE3OGFlO1xufVxuXG4vKiBTaGlwIFN0eWxpbmcgKi9cbi5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5zaGlwLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBmb250LXNpemU6IDEuMDRlbTtcbiAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xufVxuXG4uc2hpcC5zdW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbn1cblxuLyogTWlzc2VkIFNob3QgU3R5bGluZyAqL1xuLm1pc3NlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNSwgMTA3LCAxMDUpO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi8qIFBsYXllciBUZXh0IFN0eWxpbmcgKi9cbi5wbGF5ZXItMS10ZXh0LFxuLnBsYXllci0yLXRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi8qIFV0aWxpdHkgQ2xhc3NlcyAqL1xuLmhhbGYtb3BhY2l0eSB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLyogQ29vcmRpbmF0ZSBOdW1iZXIgU3R5bGluZyAqL1xuLmNvb3JkLW51bS11cCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMmVtOyAvKiBBZGp1c3QgYXMgbmVjZXNzYXJ5ICovXG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7ICovXG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMnB4IDVweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgei1pbmRleDogMTA7IC8qIEVuc3VyZSBpdCdzIGFib3ZlIG90aGVyIGVsZW1lbnRzICovXG59XG5cbi5jb29yZC1udW0tbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IC0yZW07IC8qIEFkanVzdCBhcyBuZWNlc3NhcnkgKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7ICovXG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMnB4IDVweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgei1pbmRleDogMTA7IC8qIEVuc3VyZSBpdCdzIGFib3ZlIG90aGVyIGVsZW1lbnRzICovXG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGtCQUFrQjtBQUNsQjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGFBQWE7RUFDYixvREFBb0Q7RUFDcEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGdDQUFnQztBQUNsQzs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBLHNCQUFzQjtBQUN0Qjs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBLGtCQUFrQjtBQUNsQjs7RUFFRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBRSxvREFBb0Q7RUFDdkUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUUseUNBQXlDO0FBQzlEOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDs7QUFFQSx3QkFBd0I7QUFDeEI7O0VBRUUsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsWUFBWTtBQUNkOztBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTLEVBQUUsd0JBQXdCO0VBQ25DLFNBQVM7RUFDVCwyQkFBMkI7RUFDM0Isb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXLEVBQUUscUNBQXFDO0FBQ3BEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVLEVBQUUsd0JBQXdCO0VBQ3BDLDJCQUEyQjtFQUMzQixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBRSxxQ0FBcUM7QUFDcERcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR2VuZXJhbCBSZXNldCAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIEJvZHkgU3R5bGluZyAqL1xcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzFhNzhhZSwgIzQzMWRkOSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiBUaXRsZSBTdHlsaW5nICovXFxuaDEge1xcbiAgZm9udC1zaXplOiAzZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuLyogQm9hcmQgQ29udGFpbmVycyAqL1xcbi5ib2FyZHMge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogNzAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi8qIFBsYXllciBDb250YWluZXJzICovXFxuLnBsYXllci0xLWNvbnRhaW5lcixcXG4ucGxheWVyLTItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIEJvYXJkIFN0eWxpbmcgKi9cXG4ucGxheWVyLTEtYm9hcmQsXFxuLnBsYXllci0yLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODMzNTg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogQ2hhbmdlZCB0byBlbnN1cmUgY29udGVudCBpbnNpZGUgaXMgbm90IGNsaXBwZWQgKi9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJvYXJkLWxhYmVsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTMwcHg7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBCb3ggU3R5bGluZyAqL1xcbi5ib3gge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiBFbnN1cmUgY29udGVudCBpbnNpZGUgaXMgbm90IGNsaXBwZWQgKi9cXG59XFxuXFxuLmJveDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE3OGFlO1xcbn1cXG5cXG4vKiBTaGlwIFN0eWxpbmcgKi9cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnNoaXAuaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGZvbnQtc2l6ZTogMS4wNGVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xcbn1cXG5cXG4uc2hpcC5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxufVxcblxcbi8qIE1pc3NlZCBTaG90IFN0eWxpbmcgKi9cXG4ubWlzc2VkIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDUsIDEwNywgMTA1KTtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLyogUGxheWVyIFRleHQgU3R5bGluZyAqL1xcbi5wbGF5ZXItMS10ZXh0LFxcbi5wbGF5ZXItMi10ZXh0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4vKiBVdGlsaXR5IENsYXNzZXMgKi9cXG4uaGFsZi1vcGFjaXR5IHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLyogQ29vcmRpbmF0ZSBOdW1iZXIgU3R5bGluZyAqL1xcbi5jb29yZC1udW0tdXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMmVtOyAvKiBBZGp1c3QgYXMgbmVjZXNzYXJ5ICovXFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7ICovXFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAycHggNXB4O1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICB6LWluZGV4OiAxMDsgLyogRW5zdXJlIGl0J3MgYWJvdmUgb3RoZXIgZWxlbWVudHMgKi9cXG59XFxuXFxuLmNvb3JkLW51bS1sZWZ0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogLTJlbTsgLyogQWRqdXN0IGFzIG5lY2Vzc2FyeSAqL1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLyogYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpOyAqL1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMnB4IDVweDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgei1pbmRleDogMTA7IC8qIEVuc3VyZSBpdCdzIGFib3ZlIG90aGVyIGVsZW1lbnRzICovXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1xuICBnZXRQbGF5ZXJzLFxuICBnZXRHYW1lU3RhdGUsXG4gIGNoYW5nZUN1cnJlbnRQbGF5ZXIsXG4gIGdldEN1cnJlbnRQbGF5ZXIsXG4gIGdldE9wcG9zaW5nUGxheWVyLFxuICBnZXRDdXJyZW50UGxheWVyRG9tQm9hcmQsXG4gIGdldE5vbkN1cnJlbnRQbGF5ZXJEb21Cb2FyZCxcbn0gZnJvbSBcIi4uL2dhbWUtbG9naWMvZ2FtZS1sb2dpY1wiO1xuXG5mdW5jdGlvbiBpbml0RG9tKCkge1xuICBwb3B1bGF0ZUJvYXJkKCk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlQm9hcmQoKSB7XG4gIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmRcIik7XG5cbiAgYm9hcmRzLmZvckVhY2goKGJvYXJkLCBpbmRleCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgY29uc3Qgcm93SW5kZXggPSBpO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGNvbHVtbkluZGV4ID0gajtcbiAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlRGl2KFwiYm94XCIpO1xuXG4gICAgICAgIGRpdi5kYXRhc2V0LnJvdyA9IHJvd0luZGV4O1xuICAgICAgICBkaXYuZGF0YXNldC5jb2x1bW4gPSBjb2x1bW5JbmRleDtcbiAgICAgICAgZGl2LmRhdGFzZXQucGxheWVyID0gaW5kZXg7XG5cbiAgICAgICAgLy8gZ2VuZXJhdGVDb29yZE51bXMoW3Jvd0luZGV4LCBjb2x1bW5JbmRleF0pO1xuICAgICAgICBpZiAocm93SW5kZXggPT09IDApIHtcbiAgICAgICAgICBjb25zdCBzcGFuID0gY3JlYXRlU3BhbihcImNvb3JkLW51bS11cFwiLCBjb2x1bW5JbmRleCk7XG4gICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2x1bW5JbmRleCA9PT0gMCkge1xuICAgICAgICAgIGNvbnN0IHNwYW4gPSBjcmVhdGVTcGFuKFwiY29vcmQtbnVtLWxlZnRcIiwgcm93SW5kZXgpO1xuICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgfVxuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRGl2Q2xpY2spO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUNvb3JkTnVtcyhkaXYpIHtcbiAgY29uc3QgZGl2Um93ID0gcGFyc2VJbnQoZGl2LmRhdGFzZXQucm93KTtcbiAgY29uc3QgZGl2Q29sdW1uID0gcGFyc2VJbnQoZGl2LmRhdGFzZXQuY29sdW1uKTtcbiAgaWYgKGRpdlJvdyA9PT0gMCAmJiBkaXZDb2x1bW4gPT09IDApIHtcbiAgICBjb25zdCBzcGFuMSA9IGNyZWF0ZVNwYW4oXCJjb29yZC1udW0tdXBcIiwgZGl2Q29sdW1uKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc3BhbjEpO1xuICAgIGNvbnN0IHNwYW4yID0gY3JlYXRlU3BhbihcImNvb3JkLW51bS1sZWZ0XCIsIGRpdlJvdyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHNwYW4yKTtcbiAgfSBlbHNlIGlmIChkaXZSb3cgPT09IDApIHtcbiAgICBjb25zdCBzcGFuID0gY3JlYXRlU3BhbihcImNvb3JkLW51bS11cFwiLCBkaXZDb2x1bW4pO1xuICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgfSBlbHNlIGlmIChkaXZDb2x1bW4gPT09IDApIHtcbiAgICBjb25zdCBzcGFuID0gY3JlYXRlU3BhbihcImNvb3JkLW51bS1sZWZ0XCIsIGRpdlJvdyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURpdkNsaWNrKGUpIHtcbiAgLy8gaWYgaGl0IHNoaXAgaXMgc3VjY2VzZnVsXG4gIGlmIChoaXRTaGlwKGUudGFyZ2V0LmRhdGFzZXQpKSB7XG4gICAgLy8gY29udGludWUgcGxheWluZyB3aXRoIHRoZSBjdXJyZW50IHBsYXllclxuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPVxuICAgICAgZ2V0UGxheWVycygpW3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQucGxheWVyKV0ucGxheWVyO1xuICAgIC8vIGNoZWNrIGlmIGFsbCBzaGlwcyBzdW5rXG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIuZ2FtZWJvYXJkLmhhc0FsbFNoaXBzQmVlblN1bmsoKSkge1xuICAgICAgLy8gZGlzcGxheSB3aW5uaW5nIHBsYXllclxuICAgICAgLy8gZGlzcGxheVdpbm5lcigpXG4gICAgICBjb25zb2xlLmxvZyhcIndpbm5lciBpc1wiLCBnZXRDdXJyZW50UGxheWVyKCkpO1xuICAgIH1cbiAgICAvLyBpZiBoaXQgc2hpcCBpcyBub3Qgc3VjY2Vzc2Z1bFxuICB9IGVsc2Uge1xuICAgIC8vIGNoYW5nZSB0aGUgY3VycmVudCBwbGF5ZXJcbiAgICBjaGFuZ2VDdXJyZW50UGxheWVyKCk7XG4gICAgLy8gcmVuZGVyQ3VycmVudFBsYXllckRpc3BsYXkoKTtcbiAgfVxuXG4gIHBvcHVsYXRlR2FtZWJvYXJkcygpO1xuICByZW5kZXJDdXJyZW50UGxheWVyVGV4dChnZXRDdXJyZW50UGxheWVyKCkpO1xufVxuXG5mdW5jdGlvbiBoaXRTaGlwKHBsYXllcikge1xuICBjb25zdCBwbGF5ZXJEYXRhc2V0ID0geyAuLi5wbGF5ZXIgfTtcblxuICBjb25zdCBjdXJyZW50UGxheWVyID0gZ2V0UGxheWVycygpW3BhcnNlSW50KHBsYXllckRhdGFzZXQucGxheWVyKV07XG4gIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IGN1cnJlbnRQbGF5ZXIucGxheWVyLmdhbWVib2FyZDtcblxuICBjb25zdCB4X2Nvb3JkID0gcGFyc2VJbnQocGxheWVyRGF0YXNldC5jb2x1bW4pO1xuICBjb25zdCB5X2Nvb3JkID0gcGFyc2VJbnQocGxheWVyRGF0YXNldC5yb3cpO1xuICBjb25zdCBjb29yZCA9IFt4X2Nvb3JkLCB5X2Nvb3JkXTtcbiAgcmV0dXJuIHBsYXllckdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVHYW1lYm9hcmRzKCkge1xuICBjb25zdCBwbGF5ZXJzID0gZ2V0UGxheWVycygpO1xuICBjb25zb2xlLmxvZyhwbGF5ZXJzKTtcbiAgcmVuZGVyUGxheWVyTmFtZXMocGxheWVycyk7XG4gIHJlbmRlckN1cnJlbnRQbGF5ZXJUZXh0KGdldEN1cnJlbnRQbGF5ZXIoKSk7XG4gIHJlbmRlckN1cnJlbnRQbGF5ZXJEaXNwbGF5KCk7XG4gIHBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgcmVuZGVyUGxheWVyQm9hcmQocGxheWVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckN1cnJlbnRQbGF5ZXJEaXNwbGF5KCkge1xuICAvLyBnZXQgcGxheWVyIGJvYXJkIGRpdnNcbiAgY29uc3QgUGxheWVyMUJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItMS1ib2FyZFwiKTtcbiAgY29uc3QgUGxheWVyMkJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItMi1ib2FyZFwiKTtcblxuICAvLyByZXNldCBib2FyZHMgb3BhY2l0eVxuICBQbGF5ZXIxQm9hcmREaXYuY2xhc3NMaXN0LnJlbW92ZShcImhhbGYtb3BhY2l0eVwiKTtcbiAgUGxheWVyMkJvYXJkRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoYWxmLW9wYWNpdHlcIik7XG5cbiAgLy8gc2V0IGN1cnJlbnQgcGxheWVyIGJvYXJkIG9wYWNpdHlcbiAgY29uc3QgY3VycmVudFBsYXllciA9IGdldEN1cnJlbnRQbGF5ZXIoKTtcbiAgY29uc3QgY3VycmVudFBsYXllckJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgLiR7Y3VycmVudFBsYXllci5uYW1lfS1ib2FyZGBcbiAgKTtcbiAgY3VycmVudFBsYXllckJvYXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJoYWxmLW9wYWNpdHlcIik7XG5cbiAgLy8gc2V0IHBsYXllcnMgYm9hcmQgZXZlbnRMaXN0ZW5lcnNcbiAgY29uc3Qgbm9uQ3VycmVudFBsYXllckJvYXJkID0gWy4uLmdldE5vbkN1cnJlbnRQbGF5ZXJEb21Cb2FyZCgpXTtcbiAgY29uc3QgY3VycmVudFBsYXllckJvYXJkID0gWy4uLmdldEN1cnJlbnRQbGF5ZXJEb21Cb2FyZCgpXTtcbiAgLy8gc2V0IGN1cnJlbnQgcGxheWVycyBib2FyZCB1bmNsaWNrYWJsZVxuICBjdXJyZW50UGxheWVyQm9hcmQuZm9yRWFjaCgoZGl2KSA9PiB7XG4gICAgZGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVEaXZDbGljayk7XG4gIH0pO1xuICAvLyBzZXQgbm9uIGN1cnJlbnQgcGxheWVycyBib2FyZCBjbGlja2FibGVcbiAgbm9uQ3VycmVudFBsYXllckJvYXJkLmZvckVhY2goKGRpdikgPT4ge1xuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRGl2Q2xpY2spO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUGxheWVyQm9hcmQocGxheWVyKSB7XG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIucGxheWVyO1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IEFycmF5LmZyb20ocGxheWVyLmJvYXJkKTtcblxuICAvL3JlbmRlciBjdXJyZW50Y29vcmRzXG4gIC8vIGlmIHBsYXllciBpcyBhaSBkb250IHJlbmRlciBjdXJyZW50Y29vcmRzXG4gIGlmIChwbGF5ZXIucGxheWVyLnR5cGUgIT09IFwiYWlcIikge1xuICAgIGN1cnJlbnRQbGF5ZXIuZ2FtZWJvYXJkLmN1cnJlbnRDb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IGZpbmRDb3JyZXNwb25kaW5nRGl2KGNvb3JkLCBwbGF5ZXJCb2FyZCk7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgfSk7XG4gIH1cblxuICAvL3JlbmRlciBzdWNjZXNzZnVsIGhpdHNob3RzXG4gIGN1cnJlbnRQbGF5ZXIuZ2FtZWJvYXJkLmhpdFNob3RzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZmluZENvcnJlc3BvbmRpbmdEaXYoY29vcmQsIHBsYXllckJvYXJkKTtcblxuICAgIGRpdi50ZXh0Q29udGVudCA9IFwi4p2MXCI7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgZ2VuZXJhdGVDb29yZE51bXMoZGl2KTtcbiAgICAvLyBwcmV2ZW50IGNsaWNraW5nIHRoZSBzYW1lIGNvb3JkIGFnYWluXG4gICAgZGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVEaXZDbGljayk7XG4gIH0pO1xuXG4gIC8vcmVuZGVyIG1pc3NlZHNob3RzXG4gIGN1cnJlbnRQbGF5ZXIuZ2FtZWJvYXJkLm1pc3NlZFNob3RzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZmluZENvcnJlc3BvbmRpbmdEaXYoY29vcmQsIHBsYXllckJvYXJkKTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBcIvCflJhcIjtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcIm1pc3NlZFwiKTtcbiAgICBnZW5lcmF0ZUNvb3JkTnVtcyhkaXYpO1xuICAgIC8vIHByZXZlbnQgY2xpY2tpbmcgdGhlIHNhbWUgY29vcmQgYWdhaW5cbiAgICBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZURpdkNsaWNrKTtcbiAgfSk7XG5cbiAgLy8gLy9yZW5kZXIgc3Vycm91bmRpbmdDb29yZHNcbiAgLy8gY3VycmVudFBsYXllci5nYW1lYm9hcmQuc3Vycm91bmRpbmdDb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgLy8gICBjb25zdCBkaXYgPSBmaW5kQ29ycmVzcG9uZGluZ0Rpdihjb29yZCwgcGxheWVyQm9hcmQpO1xuICAvLyAgIGRpdi50ZXh0Q29udGVudCA9IFwi8J+UmFwiO1xuICAvLyAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibWlzc2VkXCIpO1xuICAvLyAgIC8vIHByZXZlbnQgY2xpY2tpbmcgdGhlIHNhbWUgY29vcmQgYWdhaW5cbiAgLy8gICBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZURpdkNsaWNrKTtcbiAgLy8gfSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRDb3JyZXNwb25kaW5nRGl2KGNvb3JkLCBib2FyZCkge1xuICBjb25zdCBbeF9jb29yZCwgeV9jb29yZF0gPSBjb29yZDtcblxuICBjb25zdCBkaXYgPSBib2FyZC5maW5kKChkaXYpID0+IHtcbiAgICBjb25zdCByb3cgPSBwYXJzZUludChkaXYuZGF0YXNldC5yb3cpO1xuICAgIGNvbnN0IGNvbHVtbiA9IHBhcnNlSW50KGRpdi5kYXRhc2V0LmNvbHVtbik7XG4gICAgcmV0dXJuIHJvdyA9PT0geV9jb29yZCAmJiBjb2x1bW4gPT09IHhfY29vcmQ7XG4gIH0pO1xuXG4gIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBsYXllck5hbWVzKHBsYXllcnMpIHtcbiAgY29uc3QgcGxheWVyMURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTEtdGV4dFwiKTtcbiAgY29uc3QgcGxheWVyMkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTItdGV4dFwiKTtcblxuICBwbGF5ZXIxRGl2LnRleHRDb250ZW50ID0gXCJcIjtcbiAgcGxheWVyMkRpdi50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgcGxheWVyMURpdi5hcHBlbmRDaGlsZChjcmVhdGVIZWFkaW5nKGAke3BsYXllcnNbMF0ucGxheWVyLm5hbWV9YCwgXCJoMlwiKSk7XG4gIHBsYXllcjJEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGluZyhgJHtwbGF5ZXJzWzFdLnBsYXllci5uYW1lfWAsIFwiaDJcIikpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDdXJyZW50UGxheWVyVGV4dChwbGF5ZXIpIHtcbiAgY29uc3QgY3VycmVudFBsYXllckhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC1wbGF5ZXItaGVhZGVyXCIpO1xuICBjdXJyZW50UGxheWVySGVhZGVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRpbmcoYCR7cGxheWVyLm5hbWV9IGlzIGF0dGFja2luZy4uLmAsIFwiaDFcIik7XG5cbiAgY3VycmVudFBsYXllckhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkaW5nKHRleHQsIGhlYWRpbmcpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChoZWFkaW5nKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gdGV4dDtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTcGFuKGNsYXNzTmFtZSwgdGV4dCkge1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICBzcGFuLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblxuICByZXR1cm4gc3Bhbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGl2KGNsYXNzTmFtZSkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgeyBpbml0RG9tLCBwb3B1bGF0ZUdhbWVib2FyZHMgfTtcbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9wbGF5ZXIvcGxheWVyLWNsYXNzXCI7XG5pbXBvcnQgeyBpbml0RG9tLCBwb3B1bGF0ZUdhbWVib2FyZHMgfSBmcm9tIFwiLi4vZG9tLW1hbmlwL2RvbS1tYW5pcFwiO1xuXG5sZXQgcGxheWVycyA9IFtdO1xubGV0IGdhbWVTdGF0ZTtcblxuZnVuY3Rpb24gZ2V0Qm9hcmRzRE9NKGluZGV4KSB7XG4gIGNvbnN0IGJvYXJkcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZFwiKSk7XG4gIGNvbnN0IGJvYXJkc0NoaWxkTm9kZXMgPSBbYm9hcmRzWzBdLmNoaWxkcmVuLCBib2FyZHNbMV0uY2hpbGRyZW5dO1xuICByZXR1cm4gYm9hcmRzQ2hpbGROb2Rlc1tpbmRleF07XG59XG5cbmZ1bmN0aW9uIGluaXRQbGF5ZXJzKHBsYXllcjFUeXBlLCBwbGF5ZXIyVHlwZSwgcGxheWVyMU5hbWUsIHBsYXllcjJOYW1lKSB7XG4gIHBsYXllcnMgPSBbXG4gICAge1xuICAgICAgcGxheWVyOiBjcmVhdGVQbGF5ZXIocGxheWVyMVR5cGUsIHBsYXllcjFOYW1lKSxcbiAgICAgIGJvYXJkOiBnZXRCb2FyZHNET00oMCksXG4gICAgfSxcbiAgICB7XG4gICAgICBwbGF5ZXI6IGNyZWF0ZVBsYXllcihwbGF5ZXIyVHlwZSwgcGxheWVyMk5hbWUpLFxuICAgICAgYm9hcmQ6IGdldEJvYXJkc0RPTSgxKSxcbiAgICB9LFxuICBdO1xufVxuZnVuY3Rpb24gaW5pdEdhbWVTdGF0ZSgpIHtcbiAgZ2FtZVN0YXRlID0ge1xuICAgIGN1cnJlbnRQbGF5ZXI6IHBsYXllcnNbMF0ucGxheWVyLFxuICAgIGN1cnJlbnRQbGF5ZXJCb2FyZDogcGxheWVyc1swXS5ib2FyZCxcbiAgICBpc0ZpbmlzaGVkOiBmYWxzZSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGxheWVyKHBsYXllclR5cGUsIHBsYXllck5hbWUpIHtcbiAgcmV0dXJuIG5ldyBQbGF5ZXIocGxheWVyVHlwZSwgcGxheWVyTmFtZSk7XG59XG5mdW5jdGlvbiBnZXRQbGF5ZXJzKCkge1xuICByZXR1cm4gcGxheWVycztcbn1cbmZ1bmN0aW9uIGdldEdhbWVTdGF0ZSgpIHtcbiAgcmV0dXJuIGdhbWVTdGF0ZTtcbn1cbmZ1bmN0aW9uIGdldEN1cnJlbnRQbGF5ZXIoKSB7XG4gIHJldHVybiBnYW1lU3RhdGUuY3VycmVudFBsYXllcjtcbn1cbmZ1bmN0aW9uIGdldEN1cnJlbnRQbGF5ZXJEb21Cb2FyZCgpIHtcbiAgcmV0dXJuIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyQm9hcmQ7XG59XG5mdW5jdGlvbiBnZXROb25DdXJyZW50UGxheWVyRG9tQm9hcmQoKSB7XG4gIHJldHVybiBnYW1lU3RhdGUuY3VycmVudFBsYXllciA9PT0gcGxheWVyc1swXS5wbGF5ZXJcbiAgICA/IHBsYXllcnNbMV0uYm9hcmRcbiAgICA6IHBsYXllcnNbMF0uYm9hcmQ7XG59XG5mdW5jdGlvbiBnZXRPcHBvc2luZ1BsYXllcigpIHtcbiAgcmV0dXJuIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyID09PSBwbGF5ZXJzWzBdLnBsYXllclxuICAgID8gcGxheWVyc1sxXS5wbGF5ZXJcbiAgICA6IHBsYXllcnNbMF0ucGxheWVyO1xufVxuZnVuY3Rpb24gY2hhbmdlQ3VycmVudFBsYXllcigpIHtcbiAgZ2FtZVN0YXRlLmN1cnJlbnRQbGF5ZXIgPVxuICAgIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyID09PSBwbGF5ZXJzWzBdLnBsYXllclxuICAgICAgPyAoZ2FtZVN0YXRlLmN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJzWzFdLnBsYXllcilcbiAgICAgIDogKGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyID0gcGxheWVyc1swXS5wbGF5ZXIpO1xuXG4gIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyQm9hcmQgPVxuICAgIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyID09PSBwbGF5ZXJzWzBdLnBsYXllclxuICAgICAgPyBwbGF5ZXJzWzBdLmJvYXJkXG4gICAgICA6IHBsYXllcnNbMV0uYm9hcmQ7XG59XG5cbmZ1bmN0aW9uIGluaXRHYW1lKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgaW5pdERvbSgpO1xuICBpbml0UGxheWVycyhwbGF5ZXIxLnR5cGUsIHBsYXllcjIudHlwZSwgcGxheWVyMS5uYW1lLCBwbGF5ZXIyLm5hbWUpO1xuICBpbml0R2FtZVN0YXRlKCk7XG4gIHBvcHVsYXRlR2FtZWJvYXJkcygpO1xufVxuXG5leHBvcnQge1xuICBpbml0R2FtZSxcbiAgZ2V0UGxheWVycyxcbiAgZ2V0R2FtZVN0YXRlLFxuICBjaGFuZ2VDdXJyZW50UGxheWVyLFxuICBnZXRDdXJyZW50UGxheWVyLFxuICBnZXRPcHBvc2luZ1BsYXllcixcbiAgZ2V0Q3VycmVudFBsYXllckRvbUJvYXJkLFxuICBnZXROb25DdXJyZW50UGxheWVyRG9tQm9hcmQsXG59O1xuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuLi9zaGlwL3NoaXAtY2xhc3NcIjtcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgIHRoaXMubWlzc2VkU2hvdHMgPSBbXTtcbiAgICB0aGlzLmhpdFNob3RzID0gW107XG4gICAgdGhpcy5jdXJyZW50Q29vcmRzID0gW107XG4gICAgdGhpcy5zdXJyb3VuZGluZ0Nvb3JkcyA9IFtdO1xuICAgIHRoaXMuX2dlbmVyYXRlU2hpcE1hcCgpO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKSB7XG4gICAgY29uc3Qgc2hpcCA9IHRoaXMuX2dldFNoaXAoY29vcmRpbmF0ZSk7XG4gICAgaWYgKHNoaXAgJiYgIXNoaXAuc3Vuaykge1xuICAgICAgc2hpcC5oaXQoKTtcbiAgICAgIHRoaXMuaGl0U2hvdHMucHVzaChjb29yZGluYXRlKTtcbiAgICAgIHRoaXMuY3VycmVudENvb3Jkcy5zcGxpY2UoXG4gICAgICAgIGZpbmRJbmRleG9mSXRlbUluQXJyYXkodGhpcy5jdXJyZW50Q29vcmRzLCBjb29yZGluYXRlKSxcbiAgICAgICAgMVxuICAgICAgKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1pc3NlZFNob3RzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaGFzQWxsU2hpcHNCZWVuU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5zaGlwcy5ldmVyeSgoc2hpcCkgPT4ge1xuICAgICAgcmV0dXJuIHNoaXAuc2hpcC5zdW5rID09PSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgX2dldFNoaXAoY29vcmRpbmF0ZSkge1xuICAgIGZvciAoY29uc3Qgc2hpcCBvZiB0aGlzLnNoaXBzKSB7XG4gICAgICBmb3IgKGNvbnN0IGNvb3JkIG9mIHNoaXAuY29vcmRzKSB7XG4gICAgICAgIGlmIChhcnJheXNFcXVhbChjb29yZCwgY29vcmRpbmF0ZSkpIHtcbiAgICAgICAgICByZXR1cm4gc2hpcC5zaGlwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgX2dlbmVyYXRlU2hpcE1hcCgpIHtcbiAgICB0aGlzLnNoaXBzLnB1c2godGhpcy5fZ2VuZXJhdGVTaGlwKDQpKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICB0aGlzLnNoaXBzLnB1c2godGhpcy5fZ2VuZXJhdGVTaGlwKDMpKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgdGhpcy5zaGlwcy5wdXNoKHRoaXMuX2dlbmVyYXRlU2hpcCgyKSk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgIHRoaXMuc2hpcHMucHVzaCh0aGlzLl9nZW5lcmF0ZVNoaXAoMSkpO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudENvb3Jkcyk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zdXJyb3VuZGluZ0Nvb3Jkcyk7XG4gICAgLy8gdGhpcy5zdXJyb3VuZGluZ0Nvb3JkcyA9IFsuLi5uZXcgU2V0KHRoaXMuc3Vycm91bmRpbmdDb29yZHMpXTtcbiAgICB0aGlzLnN1cnJvdW5kaW5nQ29vcmRzID0gcmVtb3ZlRHVwbGljYXRlQXJyYXlzKHRoaXMuc3Vycm91bmRpbmdDb29yZHMpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3Vycm91bmRpbmdDb29yZHMpO1xuICB9XG5cbiAgX2dlbmVyYXRlU2hpcChsZW5ndGgsIHhfY29vcmQgPSBudWxsLCB5X2Nvb3JkID0gbnVsbCkge1xuICAgIGNvbnN0IGNvb3JkcyA9IHRoaXMuX2dlbmVyYXRlQ29vcmQobGVuZ3RoLCB4X2Nvb3JkLCB5X2Nvb3JkKTtcbiAgICByZXR1cm4ge1xuICAgICAgY29vcmRzLFxuICAgICAgc2hpcDogbmV3IFNoaXAobGVuZ3RoKSxcbiAgICB9O1xuICB9XG5cbiAgX2dlbmVyYXRlQ29vcmQobGVuZ3RoLCB4X2Nvb3JkID0gbnVsbCwgeV9jb29yZCA9IG51bGwpIHtcbiAgICBsZXQgeCA9IHhfY29vcmQgPT09IG51bGwgPyB0aGlzLl9nZW5lcmF0ZVJhbmRvbU51bWJlcigpIDogeF9jb29yZDtcbiAgICBsZXQgeSA9IHlfY29vcmQgPT09IG51bGwgPyB0aGlzLl9nZW5lcmF0ZVJhbmRvbU51bWJlcigpIDogeV9jb29yZDtcbiAgICBjb25zdCBvcmllbnRhdGlvblggPSBNYXRoLnJhbmRvbSgpID49IDAuNTtcbiAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjAwO1xuXG4gICAgd2hpbGUgKGF0dGVtcHRzIDwgbWF4QXR0ZW1wdHMpIHtcbiAgICAgIGF0dGVtcHRzKys7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX2lzVmFsaWRDb29yZCh4LCB5LCBsZW5ndGgsIG9yaWVudGF0aW9uWCkgJiZcbiAgICAgICAgIXRoaXMuX3ByZWRpY3RDb2xsaXNpb25XaXRoQ3VycmVudENvb3JkcyhcbiAgICAgICAgICBvcmllbnRhdGlvblggPyBcInhcIiA6IFwieVwiLFxuICAgICAgICAgIHgsXG4gICAgICAgICAgeSxcbiAgICAgICAgICBsZW5ndGhcbiAgICAgICAgKSAmJlxuICAgICAgICAhdGhpcy5fcHJlZGljdENvbGxpc2lvbldpdGhTdXJyb3VuZGluZ0Nvb3JkcyhcbiAgICAgICAgICBvcmllbnRhdGlvblggPyBcInhcIiA6IFwieVwiLFxuICAgICAgICAgIHgsXG4gICAgICAgICAgeSxcbiAgICAgICAgICBsZW5ndGhcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgeCA9IHRoaXMuX2dlbmVyYXRlUmFuZG9tTnVtYmVyKCk7XG4gICAgICB5ID0gdGhpcy5fZ2VuZXJhdGVSYW5kb21OdW1iZXIoKTtcbiAgICB9XG5cbiAgICBpZiAoYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBnZW5lcmF0ZSB2YWxpZCBjb29yZGluYXRlcyBhZnRlciAke21heEF0dGVtcHRzfSBhdHRlbXB0c2BcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgY29vcmRBcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb29yZEFyci5wdXNoKFt4LCB5XSk7XG4gICAgICB0aGlzLmN1cnJlbnRDb29yZHMucHVzaChbeCwgeV0pO1xuICAgICAgaWYgKG9yaWVudGF0aW9uWCkge1xuICAgICAgICB4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB5Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zdXJyb3VuZGluZ0Nvb3Jkcy5wdXNoKFxuICAgICAgLi4udGhpcy5fZ2V0U3Vycm91bmRpbmdDb29yZHMoY29vcmRBcnIsIGxlbmd0aCwgb3JpZW50YXRpb25YKVxuICAgICk7XG5cbiAgICByZXR1cm4gY29vcmRBcnI7XG4gIH1cblxuICBfZ2V0U3Vycm91bmRpbmdDb29yZHMoY29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb25YKSB7XG4gICAgY29uc3Qgc3VyQ29vcmRBcnJheSA9IFtdO1xuICAgIHN1ckNvb3JkQXJyYXkucHVzaCh0aGlzLl9nZXRVcHBlclJvd0Nvb3Jkcyhjb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvblgpKTtcbiAgICBzdXJDb29yZEFycmF5LnB1c2godGhpcy5fZ2V0Qm90dG9tUm93Q29vcmRzKGNvb3JkLCBsZW5ndGgsIG9yaWVudGF0aW9uWCkpO1xuICAgIHN1ckNvb3JkQXJyYXkucHVzaCh0aGlzLl9nZXRSaWdodENvb3Jkcyhjb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvblgpKTtcbiAgICBzdXJDb29yZEFycmF5LnB1c2godGhpcy5fZ2V0TGVmdENvb3Jkcyhjb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvblgpKTtcblxuICAgIHJldHVybiBzdXJDb29yZEFycmF5LmZsYXQoKTtcbiAgfVxuXG4gIF9nZXRVcHBlclJvd0Nvb3Jkcyhjb29yZHMsIGxlbmd0aCwgb3JpZW50YXRpb25YKSB7XG4gICAgY29uc3QgdXBwZXJSb3cgPSBbXTtcbiAgICBsZXQgW3hfY29vcmQsIHlfY29vcmRdID0gY29vcmRzWzBdO1xuXG4gICAgeV9jb29yZC0tO1xuICAgIHhfY29vcmQtLTtcblxuICAgIGxldCB1cHBlclJvd0xlbmd0aCA9IG9yaWVudGF0aW9uWCA/IGxlbmd0aCArIDIgOiAzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXBwZXJSb3dMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX2lzV2l0aGluQm91bmRzKFt4X2Nvb3JkLCB5X2Nvb3JkXSkpIHtcbiAgICAgICAgdXBwZXJSb3cucHVzaChbeF9jb29yZCwgeV9jb29yZF0pO1xuICAgICAgfVxuICAgICAgeF9jb29yZCsrO1xuICAgIH1cblxuICAgIHJldHVybiB1cHBlclJvdztcbiAgfVxuXG4gIF9nZXRCb3R0b21Sb3dDb29yZHMoY29vcmRzLCBsZW5ndGgsIG9yaWVudGF0aW9uWCkge1xuICAgIGNvbnN0IGJvdHRvbVJvdyA9IFtdO1xuICAgIGxldCBbeF9jb29yZCwgeV9jb29yZF0gPSBjb29yZHNbbGVuZ3RoIC0gMV07XG5cbiAgICB5X2Nvb3JkKys7XG4gICAgeF9jb29yZCsrO1xuXG4gICAgbGV0IGJvdHRvbVJvd0xlbmd0aCA9IG9yaWVudGF0aW9uWCA/IGxlbmd0aCArIDIgOiAzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm90dG9tUm93TGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9pc1dpdGhpbkJvdW5kcyhbeF9jb29yZCwgeV9jb29yZF0pKSB7XG4gICAgICAgIGJvdHRvbVJvdy5wdXNoKFt4X2Nvb3JkLCB5X2Nvb3JkXSk7XG4gICAgICB9XG4gICAgICB4X2Nvb3JkLS07XG4gICAgfVxuICAgIHJldHVybiBib3R0b21Sb3c7XG4gIH1cblxuICBfZ2V0UmlnaHRDb29yZHMoY29vcmRzLCBsZW5ndGgsIG9yaWVudGF0aW9uWCkge1xuICAgIGNvbnN0IHJpZ2h0ID0gW107XG4gICAgbGV0IFt4X2Nvb3JkLCB5X2Nvb3JkXSA9IGNvb3Jkc1tsZW5ndGggLSAxXTtcbiAgICB4X2Nvb3JkKys7XG5cbiAgICBsZXQgcmlnaHRMZW5ndGggPSBvcmllbnRhdGlvblggPyAxIDogbGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmlnaHRMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX2lzV2l0aGluQm91bmRzKFt4X2Nvb3JkLCB5X2Nvb3JkXSkpIHtcbiAgICAgICAgcmlnaHQucHVzaChbeF9jb29yZCwgeV9jb29yZF0pO1xuICAgICAgfVxuICAgICAgeV9jb29yZC0tO1xuICAgIH1cblxuICAgIHJldHVybiByaWdodDtcbiAgfVxuXG4gIF9nZXRMZWZ0Q29vcmRzKGNvb3JkcywgbGVuZ3RoLCBvcmllbnRhdGlvblgpIHtcbiAgICBjb25zdCBsZWZ0ID0gW107XG4gICAgbGV0IHhfY29vcmQ7XG4gICAgbGV0IHlfY29vcmQ7XG4gICAgaWYgKG9yaWVudGF0aW9uWCkge1xuICAgICAgW3hfY29vcmQsIHlfY29vcmRdID0gY29vcmRzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBbeF9jb29yZCwgeV9jb29yZF0gPSBjb29yZHNbbGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIHhfY29vcmQtLTtcblxuICAgIGxldCBsZWZ0TGVuZ3RoID0gb3JpZW50YXRpb25YID8gMSA6IGxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlZnRMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX2lzV2l0aGluQm91bmRzKFt4X2Nvb3JkLCB5X2Nvb3JkXSkpIHtcbiAgICAgICAgbGVmdC5wdXNoKFt4X2Nvb3JkLCB5X2Nvb3JkXSk7XG4gICAgICB9XG4gICAgICB5X2Nvb3JkLS07XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZnQ7XG4gIH1cblxuICBfcHJlZGljdENvbGxpc2lvbldpdGhDdXJyZW50Q29vcmRzKG9yaWFudGF0aW9uLCB4LCB5LCBsZW5ndGgpIHtcbiAgICBjb25zdCB0ZW1wQXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdGVtcEFyci5wdXNoKFt4LCB5XSk7XG4gICAgICBpZiAob3JpYW50YXRpb24gPT09IFwieFwiKSB4Kys7XG4gICAgICBlbHNlIHkrKztcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGFycmF5IG9mIHRlbXBBcnIpIHtcbiAgICAgIGlmICh0aGlzLl9oYXNDb29yZENvbGxpc2lvbihhcnJheSwgdGhpcy5jdXJyZW50Q29vcmRzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgX3ByZWRpY3RDb2xsaXNpb25XaXRoU3Vycm91bmRpbmdDb29yZHMob3JpYW50YXRpb24sIHgsIHksIGxlbmd0aCkge1xuICAgIGNvbnN0IHRlbXBBcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB0ZW1wQXJyLnB1c2goW3gsIHldKTtcbiAgICAgIGlmIChvcmlhbnRhdGlvbiA9PT0gXCJ4XCIpIHgrKztcbiAgICAgIGVsc2UgeSsrO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgYXJyYXkgb2YgdGVtcEFycikge1xuICAgICAgaWYgKHRoaXMuX2hhc0Nvb3JkQ29sbGlzaW9uKGFycmF5LCB0aGlzLnN1cnJvdW5kaW5nQ29vcmRzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgX2lzV2l0aGluQm91bmRzKGNvb3JkKSB7XG4gICAgY29uc3QgW3hfY29vcmQsIHlfY29vcmRdID0gY29vcmQ7XG4gICAgcmV0dXJuIHhfY29vcmQgPj0gMCAmJiB4X2Nvb3JkIDwgMTAgJiYgeV9jb29yZCA+PSAwICYmIHlfY29vcmQgPCAxMDtcbiAgfVxuXG4gIF9pc1ZhbGlkQ29vcmQoeCwgeSwgbGVuZ3RoLCBvcmllbnRhdGlvblgpIHtcbiAgICBpZiAob3JpZW50YXRpb25YKSB7XG4gICAgICByZXR1cm4geCArIGxlbmd0aCA8PSAxMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHkgKyBsZW5ndGggPD0gMTA7XG4gICAgfVxuICB9XG5cbiAgX2dlbmVyYXRlUmFuZG9tTnVtYmVyKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIH1cblxuICBfaGFzQ29vcmRDb2xsaXNpb24oY29vcmQsIG90aGVyQ29vcmQpIHtcbiAgICByZXR1cm4gb3RoZXJDb29yZC5zb21lKChleGlzdGluZ0Nvb3JkKSA9PlxuICAgICAgYXJyYXlzRXF1YWwoZXhpc3RpbmdDb29yZCwgY29vcmQpXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcnJheXNFcXVhbChhcnIxLCBhcnIyKSB7XG4gIGlmIChhcnIxLmxlbmd0aCAhPT0gYXJyMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGFycjEuZXZlcnkoKGVsZW1lbnQsIGluZGV4KSA9PiBlbGVtZW50ID09PSBhcnIyW2luZGV4XSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleG9mSXRlbUluQXJyYXkoYXJyYXksIGl0ZW0pIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJheXNFcXVhbChhcnJheVtpXSwgaXRlbSkpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5mdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVBcnJheXMoYXJyYXlzKSB7XG4gIGNvbnN0IHVuaXF1ZUFycmF5cyA9IG5ldyBTZXQoYXJyYXlzLm1hcChKU09OLnN0cmluZ2lmeSkpO1xuICByZXR1cm4gQXJyYXkuZnJvbSh1bmlxdWVBcnJheXMpLm1hcChKU09OLnBhcnNlKTtcbn1cblxuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi4vZ2FtZWJvYXJkL2dhbWVib2FyZC1jbGFzc1wiO1xuXG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBuYW1lKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICB9XG59XG5cbmV4cG9ydCB7IFBsYXllciB9O1xuIiwiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMubnVtYmVyX2hpdCA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gIH1cbiAgZ2V0U3RhdHVzKCkge1xuICAgIHJldHVybiB7IGxlbmd0aDogdGhpcy5sZW5ndGgsIGhpdDogdGhpcy5udW1iZXJfaGl0LCBzdW5rOiB0aGlzLnN1bmsgfTtcbiAgfVxuICBoaXQoKSB7XG4gICAgaWYgKCF0aGlzLnN1bmspIHtcbiAgICAgIHRoaXMubnVtYmVyX2hpdCsrO1xuICAgICAgdGhpcy5zdW5rID0gdGhpcy5pc1N1bmsoKTtcbiAgICB9XG4gIH1cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLm51bWJlcl9oaXQgPT09IHRoaXMubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCB7IFNoaXAgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgaW5pdEdhbWUgfSBmcm9tIFwiLi9nYW1lLWxvZ2ljL2dhbWUtbG9naWNcIjtcblxuLy8gaW5pdEdhbWUoXCJodW1hblwiLCBcImh1bWFuXCIpO1xuaW5pdEdhbWUoeyB0eXBlOiBcImh1bWFuXCIsIG5hbWU6IFwicGxheWVyLTFcIiB9LCB7IHR5cGU6IFwiYWlcIiwgbmFtZTogXCJwbGF5ZXItMlwiIH0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9