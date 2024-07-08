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
(0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_1__.initGame)(
  { type: "human", name: "player-1" },
  { type: "human", name: "player-2" }
);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEJoQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7QUNBc0I7QUFDNkI7O0FBRW5EO0FBQ0EsZ0VBQVE7QUFDUixJQUFJLGlDQUFpQztBQUNyQyxJQUFJO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20tbWFuaXAvZG9tLW1hbmlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS1sb2dpYy9nYW1lLWxvZ2ljLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkL2dhbWVib2FyZC1jbGFzcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci9wbGF5ZXItY2xhc3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwL3NoaXAtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogR2VuZXJhbCBSZXNldCAqL1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogQm9keSBTdHlsaW5nICovXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMWE3OGFlLCAjNDMxZGQ5KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG59XG5cbi8qIFRpdGxlIFN0eWxpbmcgKi9cbmgxIHtcbiAgZm9udC1zaXplOiAzZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbi8qIEJvYXJkIENvbnRhaW5lcnMgKi9cbi5ib2FyZHMge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDcwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4vKiBQbGF5ZXIgQ29udGFpbmVycyAqL1xuLnBsYXllci0xLWNvbnRhaW5lcixcbi5wbGF5ZXItMi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIEJvYXJkIFN0eWxpbmcgKi9cbi5wbGF5ZXItMS1ib2FyZCxcbi5wbGF5ZXItMi1ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MzM1ODtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogQ2hhbmdlZCB0byBlbnN1cmUgY29udGVudCBpbnNpZGUgaXMgbm90IGNsaXBwZWQgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYm9hcmQtbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTMwcHg7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogQm94IFN0eWxpbmcgKi9cbi5ib3gge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiBFbnN1cmUgY29udGVudCBpbnNpZGUgaXMgbm90IGNsaXBwZWQgKi9cbn1cblxuLmJveDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTc4YWU7XG59XG5cbi8qIFNoaXAgU3R5bGluZyAqL1xuLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLnNoaXAuaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGZvbnQtc2l6ZTogMS4wNGVtO1xuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XG59XG5cbi5zaGlwLnN1bmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuODtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xufVxuXG4vKiBNaXNzZWQgU2hvdCBTdHlsaW5nICovXG4ubWlzc2VkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA1LCAxMDcsIDEwNSk7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLyogUGxheWVyIFRleHQgU3R5bGluZyAqL1xuLnBsYXllci0xLXRleHQsXG4ucGxheWVyLTItdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLyogVXRpbGl0eSBDbGFzc2VzICovXG4uaGFsZi1vcGFjaXR5IHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4vKiBDb29yZGluYXRlIE51bWJlciBTdHlsaW5nICovXG4uY29vcmQtbnVtLXVwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yZW07IC8qIEFkanVzdCBhcyBuZWNlc3NhcnkgKi9cbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIC8qIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTsgKi9cbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAycHggNXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB6LWluZGV4OiAxMDsgLyogRW5zdXJlIGl0J3MgYWJvdmUgb3RoZXIgZWxlbWVudHMgKi9cbn1cblxuLmNvb3JkLW51bS1sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogLTJlbTsgLyogQWRqdXN0IGFzIG5lY2Vzc2FyeSAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC8qIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTsgKi9cbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAycHggNXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB6LWluZGV4OiAxMDsgLyogRW5zdXJlIGl0J3MgYWJvdmUgb3RoZXIgZWxlbWVudHMgKi9cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsa0JBQWtCO0FBQ2xCO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsYUFBYTtFQUNiLG9EQUFvRDtFQUNwRCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZ0NBQWdDO0FBQ2xDOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUEsc0JBQXNCO0FBQ3RCOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUEsa0JBQWtCO0FBQ2xCOztFQUVFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFFLG9EQUFvRDtFQUN2RSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBRSx5Q0FBeUM7QUFDOUQ7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkOztBQUVBLHdCQUF3QjtBQUN4Qjs7RUFFRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVMsRUFBRSx3QkFBd0I7RUFDbkMsU0FBUztFQUNULDJCQUEyQjtFQUMzQixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBRSxxQ0FBcUM7QUFDcEQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVUsRUFBRSx3QkFBd0I7RUFDcEMsMkJBQTJCO0VBQzNCLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVyxFQUFFLHFDQUFxQztBQUNwRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHZW5lcmFsIFJlc2V0ICovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogQm9keSBTdHlsaW5nICovXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMWE3OGFlLCAjNDMxZGQ5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmlhbFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIFRpdGxlIFN0eWxpbmcgKi9cXG5oMSB7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG5cXG4vKiBCb2FyZCBDb250YWluZXJzICovXFxuLmJvYXJkcyB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA3MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyogUGxheWVyIENvbnRhaW5lcnMgKi9cXG4ucGxheWVyLTEtY29udGFpbmVyLFxcbi5wbGF5ZXItMi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogQm9hcmQgU3R5bGluZyAqL1xcbi5wbGF5ZXItMS1ib2FyZCxcXG4ucGxheWVyLTItYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MzM1ODtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiBDaGFuZ2VkIHRvIGVuc3VyZSBjb250ZW50IGluc2lkZSBpcyBub3QgY2xpcHBlZCAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYm9hcmQtbGFiZWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMzBweDtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIEJveCBTdHlsaW5nICovXFxuLmJveCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIEVuc3VyZSBjb250ZW50IGluc2lkZSBpcyBub3QgY2xpcHBlZCAqL1xcbn1cXG5cXG4uYm94OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTc4YWU7XFxufVxcblxcbi8qIFNoaXAgU3R5bGluZyAqL1xcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc2hpcC5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgZm9udC1zaXplOiAxLjA0ZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XFxufVxcblxcbi5zaGlwLnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLyogTWlzc2VkIFNob3QgU3R5bGluZyAqL1xcbi5taXNzZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNSwgMTA3LCAxMDUpO1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4vKiBQbGF5ZXIgVGV4dCBTdHlsaW5nICovXFxuLnBsYXllci0xLXRleHQsXFxuLnBsYXllci0yLXRleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbi8qIFV0aWxpdHkgQ2xhc3NlcyAqL1xcbi5oYWxmLW9wYWNpdHkge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4vKiBDb29yZGluYXRlIE51bWJlciBTdHlsaW5nICovXFxuLmNvb3JkLW51bS11cCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0yZW07IC8qIEFkanVzdCBhcyBuZWNlc3NhcnkgKi9cXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIC8qIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTsgKi9cXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDJweCA1cHg7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHotaW5kZXg6IDEwOyAvKiBFbnN1cmUgaXQncyBhYm92ZSBvdGhlciBlbGVtZW50cyAqL1xcbn1cXG5cXG4uY29vcmQtbnVtLWxlZnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiAtMmVtOyAvKiBBZGp1c3QgYXMgbmVjZXNzYXJ5ICovXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7ICovXFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAycHggNXB4O1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICB6LWluZGV4OiAxMDsgLyogRW5zdXJlIGl0J3MgYWJvdmUgb3RoZXIgZWxlbWVudHMgKi9cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7XG4gIGdldFBsYXllcnMsXG4gIGdldEdhbWVTdGF0ZSxcbiAgY2hhbmdlQ3VycmVudFBsYXllcixcbiAgZ2V0Q3VycmVudFBsYXllcixcbiAgZ2V0T3Bwb3NpbmdQbGF5ZXIsXG4gIGdldEN1cnJlbnRQbGF5ZXJEb21Cb2FyZCxcbiAgZ2V0Tm9uQ3VycmVudFBsYXllckRvbUJvYXJkLFxufSBmcm9tIFwiLi4vZ2FtZS1sb2dpYy9nYW1lLWxvZ2ljXCI7XG5cbmZ1bmN0aW9uIGluaXREb20oKSB7XG4gIHBvcHVsYXRlQm9hcmQoKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVCb2FyZCgpIHtcbiAgY29uc3QgYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZFwiKTtcblxuICBib2FyZHMuZm9yRWFjaCgoYm9hcmQsIGluZGV4KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBjb25zdCByb3dJbmRleCA9IGk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgY29uc3QgY29sdW1uSW5kZXggPSBqO1xuICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVEaXYoXCJib3hcIik7XG5cbiAgICAgICAgZGl2LmRhdGFzZXQucm93ID0gcm93SW5kZXg7XG4gICAgICAgIGRpdi5kYXRhc2V0LmNvbHVtbiA9IGNvbHVtbkluZGV4O1xuICAgICAgICBkaXYuZGF0YXNldC5wbGF5ZXIgPSBpbmRleDtcblxuICAgICAgICAvLyBnZW5lcmF0ZUNvb3JkTnVtcyhbcm93SW5kZXgsIGNvbHVtbkluZGV4XSk7XG4gICAgICAgIGlmIChyb3dJbmRleCA9PT0gMCkge1xuICAgICAgICAgIGNvbnN0IHNwYW4gPSBjcmVhdGVTcGFuKFwiY29vcmQtbnVtLXVwXCIsIGNvbHVtbkluZGV4KTtcbiAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbHVtbkluZGV4ID09PSAwKSB7XG4gICAgICAgICAgY29uc3Qgc3BhbiA9IGNyZWF0ZVNwYW4oXCJjb29yZC1udW0tbGVmdFwiLCByb3dJbmRleCk7XG4gICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICB9XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVEaXZDbGljayk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlQ29vcmROdW1zKGRpdikge1xuICBjb25zdCBkaXZSb3cgPSBwYXJzZUludChkaXYuZGF0YXNldC5yb3cpO1xuICBjb25zdCBkaXZDb2x1bW4gPSBwYXJzZUludChkaXYuZGF0YXNldC5jb2x1bW4pO1xuICBpZiAoZGl2Um93ID09PSAwICYmIGRpdkNvbHVtbiA9PT0gMCkge1xuICAgIGNvbnN0IHNwYW4xID0gY3JlYXRlU3BhbihcImNvb3JkLW51bS11cFwiLCBkaXZDb2x1bW4pO1xuICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuMSk7XG4gICAgY29uc3Qgc3BhbjIgPSBjcmVhdGVTcGFuKFwiY29vcmQtbnVtLWxlZnRcIiwgZGl2Um93KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc3BhbjIpO1xuICB9IGVsc2UgaWYgKGRpdlJvdyA9PT0gMCkge1xuICAgIGNvbnN0IHNwYW4gPSBjcmVhdGVTcGFuKFwiY29vcmQtbnVtLXVwXCIsIGRpdkNvbHVtbik7XG4gICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICB9IGVsc2UgaWYgKGRpdkNvbHVtbiA9PT0gMCkge1xuICAgIGNvbnN0IHNwYW4gPSBjcmVhdGVTcGFuKFwiY29vcmQtbnVtLWxlZnRcIiwgZGl2Um93KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlRGl2Q2xpY2soZSkge1xuICAvLyBpZiBoaXQgc2hpcCBpcyBzdWNjZXNmdWxcbiAgaWYgKGhpdFNoaXAoZS50YXJnZXQuZGF0YXNldCkpIHtcbiAgICAvLyBjb250aW51ZSBwbGF5aW5nIHdpdGggdGhlIGN1cnJlbnQgcGxheWVyXG4gICAgY29uc3QgY3VycmVudFBsYXllciA9XG4gICAgICBnZXRQbGF5ZXJzKClbcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5wbGF5ZXIpXS5wbGF5ZXI7XG4gICAgLy8gY2hlY2sgaWYgYWxsIHNoaXBzIHN1bmtcbiAgICBpZiAoY3VycmVudFBsYXllci5nYW1lYm9hcmQuaGFzQWxsU2hpcHNCZWVuU3VuaygpKSB7XG4gICAgICAvLyBkaXNwbGF5IHdpbm5pbmcgcGxheWVyXG4gICAgICAvLyBkaXNwbGF5V2lubmVyKClcbiAgICAgIGNvbnNvbGUubG9nKFwid2lubmVyIGlzXCIsIGdldEN1cnJlbnRQbGF5ZXIoKSk7XG4gICAgfVxuICAgIC8vIGlmIGhpdCBzaGlwIGlzIG5vdCBzdWNjZXNzZnVsXG4gIH0gZWxzZSB7XG4gICAgLy8gY2hhbmdlIHRoZSBjdXJyZW50IHBsYXllclxuICAgIGNoYW5nZUN1cnJlbnRQbGF5ZXIoKTtcbiAgICAvLyByZW5kZXJDdXJyZW50UGxheWVyRGlzcGxheSgpO1xuICB9XG5cbiAgcG9wdWxhdGVHYW1lYm9hcmRzKCk7XG4gIHJlbmRlckN1cnJlbnRQbGF5ZXJUZXh0KGdldEN1cnJlbnRQbGF5ZXIoKSk7XG59XG5cbmZ1bmN0aW9uIGhpdFNoaXAocGxheWVyKSB7XG4gIGNvbnN0IHBsYXllckRhdGFzZXQgPSB7IC4uLnBsYXllciB9O1xuXG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBnZXRQbGF5ZXJzKClbcGFyc2VJbnQocGxheWVyRGF0YXNldC5wbGF5ZXIpXTtcbiAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gY3VycmVudFBsYXllci5wbGF5ZXIuZ2FtZWJvYXJkO1xuXG4gIGNvbnN0IHhfY29vcmQgPSBwYXJzZUludChwbGF5ZXJEYXRhc2V0LmNvbHVtbik7XG4gIGNvbnN0IHlfY29vcmQgPSBwYXJzZUludChwbGF5ZXJEYXRhc2V0LnJvdyk7XG4gIGNvbnN0IGNvb3JkID0gW3hfY29vcmQsIHlfY29vcmRdO1xuICByZXR1cm4gcGxheWVyR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmQpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUdhbWVib2FyZHMoKSB7XG4gIGNvbnN0IHBsYXllcnMgPSBnZXRQbGF5ZXJzKCk7XG4gIGNvbnNvbGUubG9nKHBsYXllcnMpO1xuICByZW5kZXJQbGF5ZXJOYW1lcyhwbGF5ZXJzKTtcbiAgcmVuZGVyQ3VycmVudFBsYXllclRleHQoZ2V0Q3VycmVudFBsYXllcigpKTtcbiAgcmVuZGVyQ3VycmVudFBsYXllckRpc3BsYXkoKTtcbiAgcGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICByZW5kZXJQbGF5ZXJCb2FyZChwbGF5ZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ3VycmVudFBsYXllckRpc3BsYXkoKSB7XG4gIC8vIGdldCBwbGF5ZXIgYm9hcmQgZGl2c1xuICBjb25zdCBQbGF5ZXIxQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0xLWJvYXJkXCIpO1xuICBjb25zdCBQbGF5ZXIyQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0yLWJvYXJkXCIpO1xuXG4gIC8vIHJlc2V0IGJvYXJkcyBvcGFjaXR5XG4gIFBsYXllcjFCb2FyZERpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGFsZi1vcGFjaXR5XCIpO1xuICBQbGF5ZXIyQm9hcmREaXYuY2xhc3NMaXN0LnJlbW92ZShcImhhbGYtb3BhY2l0eVwiKTtcblxuICAvLyBzZXQgY3VycmVudCBwbGF5ZXIgYm9hcmQgb3BhY2l0eVxuICBjb25zdCBjdXJyZW50UGxheWVyID0gZ2V0Q3VycmVudFBsYXllcigpO1xuICBjb25zdCBjdXJyZW50UGxheWVyQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGAuJHtjdXJyZW50UGxheWVyLm5hbWV9LWJvYXJkYFxuICApO1xuICBjdXJyZW50UGxheWVyQm9hcmREaXYuY2xhc3NMaXN0LmFkZChcImhhbGYtb3BhY2l0eVwiKTtcblxuICAvLyBzZXQgcGxheWVycyBib2FyZCBldmVudExpc3RlbmVyc1xuICBjb25zdCBub25DdXJyZW50UGxheWVyQm9hcmQgPSBbLi4uZ2V0Tm9uQ3VycmVudFBsYXllckRvbUJvYXJkKCldO1xuICBjb25zdCBjdXJyZW50UGxheWVyQm9hcmQgPSBbLi4uZ2V0Q3VycmVudFBsYXllckRvbUJvYXJkKCldO1xuICAvLyBzZXQgY3VycmVudCBwbGF5ZXJzIGJvYXJkIHVuY2xpY2thYmxlXG4gIGN1cnJlbnRQbGF5ZXJCb2FyZC5mb3JFYWNoKChkaXYpID0+IHtcbiAgICBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZURpdkNsaWNrKTtcbiAgfSk7XG4gIC8vIHNldCBub24gY3VycmVudCBwbGF5ZXJzIGJvYXJkIGNsaWNrYWJsZVxuICBub25DdXJyZW50UGxheWVyQm9hcmQuZm9yRWFjaCgoZGl2KSA9PiB7XG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVEaXZDbGljayk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQbGF5ZXJCb2FyZChwbGF5ZXIpIHtcbiAgLy8gaWYgcGxheWVyIGlzIHNvbWV0aGluZyBvdGhlciB0aGFuIGh1bWFuIGRvbnQgcmVuZGVyXG4gIGlmIChwbGF5ZXIudHlwZSA9PT0gXCJhaVwiKSByZXR1cm47XG5cbiAgY29uc3QgY3VycmVudFBsYXllciA9IHBsYXllci5wbGF5ZXI7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gQXJyYXkuZnJvbShwbGF5ZXIuYm9hcmQpO1xuXG4gIC8vcmVuZGVyIGN1cnJlbnRjb29yZHNcbiAgY3VycmVudFBsYXllci5nYW1lYm9hcmQuY3VycmVudENvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGZpbmRDb3JyZXNwb25kaW5nRGl2KGNvb3JkLCBwbGF5ZXJCb2FyZCk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICB9KTtcblxuICAvL3JlbmRlciBzdWNjZXNzZnVsIGhpdHNob3RzXG4gIGN1cnJlbnRQbGF5ZXIuZ2FtZWJvYXJkLmhpdFNob3RzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZmluZENvcnJlc3BvbmRpbmdEaXYoY29vcmQsIHBsYXllckJvYXJkKTtcblxuICAgIGRpdi50ZXh0Q29udGVudCA9IFwi4p2MXCI7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgZ2VuZXJhdGVDb29yZE51bXMoZGl2KTtcbiAgICAvLyBwcmV2ZW50IGNsaWNraW5nIHRoZSBzYW1lIGNvb3JkIGFnYWluXG4gICAgZGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVEaXZDbGljayk7XG4gIH0pO1xuXG4gIC8vcmVuZGVyIG1pc3NlZHNob3RzXG4gIGN1cnJlbnRQbGF5ZXIuZ2FtZWJvYXJkLm1pc3NlZFNob3RzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZmluZENvcnJlc3BvbmRpbmdEaXYoY29vcmQsIHBsYXllckJvYXJkKTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBcIvCflJhcIjtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcIm1pc3NlZFwiKTtcbiAgICBnZW5lcmF0ZUNvb3JkTnVtcyhkaXYpO1xuICAgIC8vIHByZXZlbnQgY2xpY2tpbmcgdGhlIHNhbWUgY29vcmQgYWdhaW5cbiAgICBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZURpdkNsaWNrKTtcbiAgfSk7XG5cbiAgLy8gLy9yZW5kZXIgc3Vycm91bmRpbmdDb29yZHNcbiAgLy8gY3VycmVudFBsYXllci5nYW1lYm9hcmQuc3Vycm91bmRpbmdDb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgLy8gICBjb25zdCBkaXYgPSBmaW5kQ29ycmVzcG9uZGluZ0Rpdihjb29yZCwgcGxheWVyQm9hcmQpO1xuICAvLyAgIGRpdi50ZXh0Q29udGVudCA9IFwi8J+UmFwiO1xuICAvLyAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibWlzc2VkXCIpO1xuICAvLyAgIC8vIHByZXZlbnQgY2xpY2tpbmcgdGhlIHNhbWUgY29vcmQgYWdhaW5cbiAgLy8gICBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZURpdkNsaWNrKTtcbiAgLy8gfSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRDb3JyZXNwb25kaW5nRGl2KGNvb3JkLCBib2FyZCkge1xuICBjb25zdCBbeF9jb29yZCwgeV9jb29yZF0gPSBjb29yZDtcblxuICBjb25zdCBkaXYgPSBib2FyZC5maW5kKChkaXYpID0+IHtcbiAgICBjb25zdCByb3cgPSBwYXJzZUludChkaXYuZGF0YXNldC5yb3cpO1xuICAgIGNvbnN0IGNvbHVtbiA9IHBhcnNlSW50KGRpdi5kYXRhc2V0LmNvbHVtbik7XG4gICAgcmV0dXJuIHJvdyA9PT0geV9jb29yZCAmJiBjb2x1bW4gPT09IHhfY29vcmQ7XG4gIH0pO1xuXG4gIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBsYXllck5hbWVzKHBsYXllcnMpIHtcbiAgY29uc3QgcGxheWVyMURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTEtdGV4dFwiKTtcbiAgY29uc3QgcGxheWVyMkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTItdGV4dFwiKTtcblxuICBwbGF5ZXIxRGl2LnRleHRDb250ZW50ID0gXCJcIjtcbiAgcGxheWVyMkRpdi50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgcGxheWVyMURpdi5hcHBlbmRDaGlsZChjcmVhdGVIZWFkaW5nKGAke3BsYXllcnNbMF0ucGxheWVyLm5hbWV9YCwgXCJoMlwiKSk7XG4gIHBsYXllcjJEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGluZyhgJHtwbGF5ZXJzWzFdLnBsYXllci5uYW1lfWAsIFwiaDJcIikpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDdXJyZW50UGxheWVyVGV4dChwbGF5ZXIpIHtcbiAgY29uc3QgY3VycmVudFBsYXllckhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC1wbGF5ZXItaGVhZGVyXCIpO1xuICBjdXJyZW50UGxheWVySGVhZGVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRpbmcoYCR7cGxheWVyLm5hbWV9IGlzIGF0dGFja2luZy4uLmAsIFwiaDFcIik7XG5cbiAgY3VycmVudFBsYXllckhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkaW5nKHRleHQsIGhlYWRpbmcpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChoZWFkaW5nKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gdGV4dDtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTcGFuKGNsYXNzTmFtZSwgdGV4dCkge1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICBzcGFuLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblxuICByZXR1cm4gc3Bhbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGl2KGNsYXNzTmFtZSkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgeyBpbml0RG9tLCBwb3B1bGF0ZUdhbWVib2FyZHMgfTtcbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9wbGF5ZXIvcGxheWVyLWNsYXNzXCI7XG5pbXBvcnQgeyBpbml0RG9tLCBwb3B1bGF0ZUdhbWVib2FyZHMgfSBmcm9tIFwiLi4vZG9tLW1hbmlwL2RvbS1tYW5pcFwiO1xuXG5sZXQgcGxheWVycyA9IFtdO1xubGV0IGdhbWVTdGF0ZTtcblxuZnVuY3Rpb24gZ2V0Qm9hcmRzRE9NKGluZGV4KSB7XG4gIGNvbnN0IGJvYXJkcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZFwiKSk7XG4gIGNvbnN0IGJvYXJkc0NoaWxkTm9kZXMgPSBbYm9hcmRzWzBdLmNoaWxkcmVuLCBib2FyZHNbMV0uY2hpbGRyZW5dO1xuICByZXR1cm4gYm9hcmRzQ2hpbGROb2Rlc1tpbmRleF07XG59XG5cbmZ1bmN0aW9uIGluaXRQbGF5ZXJzKHBsYXllcjFUeXBlLCBwbGF5ZXIyVHlwZSwgcGxheWVyMU5hbWUsIHBsYXllcjJOYW1lKSB7XG4gIHBsYXllcnMgPSBbXG4gICAge1xuICAgICAgcGxheWVyOiBjcmVhdGVQbGF5ZXIocGxheWVyMVR5cGUsIHBsYXllcjFOYW1lKSxcbiAgICAgIGJvYXJkOiBnZXRCb2FyZHNET00oMCksXG4gICAgfSxcbiAgICB7XG4gICAgICBwbGF5ZXI6IGNyZWF0ZVBsYXllcihwbGF5ZXIyVHlwZSwgcGxheWVyMk5hbWUpLFxuICAgICAgYm9hcmQ6IGdldEJvYXJkc0RPTSgxKSxcbiAgICB9LFxuICBdO1xufVxuZnVuY3Rpb24gaW5pdEdhbWVTdGF0ZSgpIHtcbiAgZ2FtZVN0YXRlID0ge1xuICAgIGN1cnJlbnRQbGF5ZXI6IHBsYXllcnNbMF0ucGxheWVyLFxuICAgIGN1cnJlbnRQbGF5ZXJCb2FyZDogcGxheWVyc1swXS5ib2FyZCxcbiAgICBpc0ZpbmlzaGVkOiBmYWxzZSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGxheWVyKHBsYXllclR5cGUsIHBsYXllck5hbWUpIHtcbiAgcmV0dXJuIG5ldyBQbGF5ZXIocGxheWVyVHlwZSwgcGxheWVyTmFtZSk7XG59XG5mdW5jdGlvbiBnZXRQbGF5ZXJzKCkge1xuICByZXR1cm4gcGxheWVycztcbn1cbmZ1bmN0aW9uIGdldEdhbWVTdGF0ZSgpIHtcbiAgcmV0dXJuIGdhbWVTdGF0ZTtcbn1cbmZ1bmN0aW9uIGdldEN1cnJlbnRQbGF5ZXIoKSB7XG4gIHJldHVybiBnYW1lU3RhdGUuY3VycmVudFBsYXllcjtcbn1cbmZ1bmN0aW9uIGdldEN1cnJlbnRQbGF5ZXJEb21Cb2FyZCgpIHtcbiAgcmV0dXJuIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyQm9hcmQ7XG59XG5mdW5jdGlvbiBnZXROb25DdXJyZW50UGxheWVyRG9tQm9hcmQoKSB7XG4gIHJldHVybiBnYW1lU3RhdGUuY3VycmVudFBsYXllciA9PT0gcGxheWVyc1swXS5wbGF5ZXJcbiAgICA/IHBsYXllcnNbMV0uYm9hcmRcbiAgICA6IHBsYXllcnNbMF0uYm9hcmQ7XG59XG5mdW5jdGlvbiBnZXRPcHBvc2luZ1BsYXllcigpIHtcbiAgcmV0dXJuIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyID09PSBwbGF5ZXJzWzBdLnBsYXllclxuICAgID8gcGxheWVyc1sxXS5wbGF5ZXJcbiAgICA6IHBsYXllcnNbMF0ucGxheWVyO1xufVxuZnVuY3Rpb24gY2hhbmdlQ3VycmVudFBsYXllcigpIHtcbiAgZ2FtZVN0YXRlLmN1cnJlbnRQbGF5ZXIgPVxuICAgIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyID09PSBwbGF5ZXJzWzBdLnBsYXllclxuICAgICAgPyAoZ2FtZVN0YXRlLmN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJzWzFdLnBsYXllcilcbiAgICAgIDogKGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyID0gcGxheWVyc1swXS5wbGF5ZXIpO1xuXG4gIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyQm9hcmQgPVxuICAgIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyID09PSBwbGF5ZXJzWzBdLnBsYXllclxuICAgICAgPyBwbGF5ZXJzWzBdLmJvYXJkXG4gICAgICA6IHBsYXllcnNbMV0uYm9hcmQ7XG59XG5cbmZ1bmN0aW9uIGluaXRHYW1lKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgaW5pdERvbSgpO1xuICBpbml0UGxheWVycyhwbGF5ZXIxLnR5cGUsIHBsYXllcjIudHlwZSwgcGxheWVyMS5uYW1lLCBwbGF5ZXIyLm5hbWUpO1xuICBpbml0R2FtZVN0YXRlKCk7XG4gIHBvcHVsYXRlR2FtZWJvYXJkcygpO1xufVxuXG5leHBvcnQge1xuICBpbml0R2FtZSxcbiAgZ2V0UGxheWVycyxcbiAgZ2V0R2FtZVN0YXRlLFxuICBjaGFuZ2VDdXJyZW50UGxheWVyLFxuICBnZXRDdXJyZW50UGxheWVyLFxuICBnZXRPcHBvc2luZ1BsYXllcixcbiAgZ2V0Q3VycmVudFBsYXllckRvbUJvYXJkLFxuICBnZXROb25DdXJyZW50UGxheWVyRG9tQm9hcmQsXG59O1xuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuLi9zaGlwL3NoaXAtY2xhc3NcIjtcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgIHRoaXMubWlzc2VkU2hvdHMgPSBbXTtcbiAgICB0aGlzLmhpdFNob3RzID0gW107XG4gICAgdGhpcy5jdXJyZW50Q29vcmRzID0gW107XG4gICAgdGhpcy5zdXJyb3VuZGluZ0Nvb3JkcyA9IFtdO1xuICAgIHRoaXMuX2dlbmVyYXRlU2hpcE1hcCgpO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKSB7XG4gICAgY29uc3Qgc2hpcCA9IHRoaXMuX2dldFNoaXAoY29vcmRpbmF0ZSk7XG4gICAgaWYgKHNoaXAgJiYgIXNoaXAuc3Vuaykge1xuICAgICAgc2hpcC5oaXQoKTtcbiAgICAgIHRoaXMuaGl0U2hvdHMucHVzaChjb29yZGluYXRlKTtcbiAgICAgIHRoaXMuY3VycmVudENvb3Jkcy5zcGxpY2UoXG4gICAgICAgIGZpbmRJbmRleG9mSXRlbUluQXJyYXkodGhpcy5jdXJyZW50Q29vcmRzLCBjb29yZGluYXRlKSxcbiAgICAgICAgMVxuICAgICAgKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1pc3NlZFNob3RzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaGFzQWxsU2hpcHNCZWVuU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5zaGlwcy5ldmVyeSgoc2hpcCkgPT4ge1xuICAgICAgcmV0dXJuIHNoaXAuc2hpcC5zdW5rID09PSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgX2dldFNoaXAoY29vcmRpbmF0ZSkge1xuICAgIGZvciAoY29uc3Qgc2hpcCBvZiB0aGlzLnNoaXBzKSB7XG4gICAgICBmb3IgKGNvbnN0IGNvb3JkIG9mIHNoaXAuY29vcmRzKSB7XG4gICAgICAgIGlmIChhcnJheXNFcXVhbChjb29yZCwgY29vcmRpbmF0ZSkpIHtcbiAgICAgICAgICByZXR1cm4gc2hpcC5zaGlwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgX2dlbmVyYXRlU2hpcE1hcCgpIHtcbiAgICB0aGlzLnNoaXBzLnB1c2godGhpcy5fZ2VuZXJhdGVTaGlwKDQpKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICB0aGlzLnNoaXBzLnB1c2godGhpcy5fZ2VuZXJhdGVTaGlwKDMpKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgdGhpcy5zaGlwcy5wdXNoKHRoaXMuX2dlbmVyYXRlU2hpcCgyKSk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgIHRoaXMuc2hpcHMucHVzaCh0aGlzLl9nZW5lcmF0ZVNoaXAoMSkpO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudENvb3Jkcyk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zdXJyb3VuZGluZ0Nvb3Jkcyk7XG4gICAgLy8gdGhpcy5zdXJyb3VuZGluZ0Nvb3JkcyA9IFsuLi5uZXcgU2V0KHRoaXMuc3Vycm91bmRpbmdDb29yZHMpXTtcbiAgICB0aGlzLnN1cnJvdW5kaW5nQ29vcmRzID0gcmVtb3ZlRHVwbGljYXRlQXJyYXlzKHRoaXMuc3Vycm91bmRpbmdDb29yZHMpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3Vycm91bmRpbmdDb29yZHMpO1xuICB9XG5cbiAgX2dlbmVyYXRlU2hpcChsZW5ndGgsIHhfY29vcmQgPSBudWxsLCB5X2Nvb3JkID0gbnVsbCkge1xuICAgIGNvbnN0IGNvb3JkcyA9IHRoaXMuX2dlbmVyYXRlQ29vcmQobGVuZ3RoLCB4X2Nvb3JkLCB5X2Nvb3JkKTtcbiAgICByZXR1cm4ge1xuICAgICAgY29vcmRzLFxuICAgICAgc2hpcDogbmV3IFNoaXAobGVuZ3RoKSxcbiAgICB9O1xuICB9XG5cbiAgX2dlbmVyYXRlQ29vcmQobGVuZ3RoLCB4X2Nvb3JkID0gbnVsbCwgeV9jb29yZCA9IG51bGwpIHtcbiAgICBsZXQgeCA9IHhfY29vcmQgPT09IG51bGwgPyB0aGlzLl9nZW5lcmF0ZVJhbmRvbU51bWJlcigpIDogeF9jb29yZDtcbiAgICBsZXQgeSA9IHlfY29vcmQgPT09IG51bGwgPyB0aGlzLl9nZW5lcmF0ZVJhbmRvbU51bWJlcigpIDogeV9jb29yZDtcbiAgICBjb25zdCBvcmllbnRhdGlvblggPSBNYXRoLnJhbmRvbSgpID49IDAuNTtcbiAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjAwO1xuXG4gICAgd2hpbGUgKGF0dGVtcHRzIDwgbWF4QXR0ZW1wdHMpIHtcbiAgICAgIGF0dGVtcHRzKys7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX2lzVmFsaWRDb29yZCh4LCB5LCBsZW5ndGgsIG9yaWVudGF0aW9uWCkgJiZcbiAgICAgICAgIXRoaXMuX3ByZWRpY3RDb2xsaXNpb25XaXRoQ3VycmVudENvb3JkcyhcbiAgICAgICAgICBvcmllbnRhdGlvblggPyBcInhcIiA6IFwieVwiLFxuICAgICAgICAgIHgsXG4gICAgICAgICAgeSxcbiAgICAgICAgICBsZW5ndGhcbiAgICAgICAgKSAmJlxuICAgICAgICAhdGhpcy5fcHJlZGljdENvbGxpc2lvbldpdGhTdXJyb3VuZGluZ0Nvb3JkcyhcbiAgICAgICAgICBvcmllbnRhdGlvblggPyBcInhcIiA6IFwieVwiLFxuICAgICAgICAgIHgsXG4gICAgICAgICAgeSxcbiAgICAgICAgICBsZW5ndGhcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgeCA9IHRoaXMuX2dlbmVyYXRlUmFuZG9tTnVtYmVyKCk7XG4gICAgICB5ID0gdGhpcy5fZ2VuZXJhdGVSYW5kb21OdW1iZXIoKTtcbiAgICB9XG5cbiAgICBpZiAoYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBnZW5lcmF0ZSB2YWxpZCBjb29yZGluYXRlcyBhZnRlciAke21heEF0dGVtcHRzfSBhdHRlbXB0c2BcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgY29vcmRBcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb29yZEFyci5wdXNoKFt4LCB5XSk7XG4gICAgICB0aGlzLmN1cnJlbnRDb29yZHMucHVzaChbeCwgeV0pO1xuICAgICAgaWYgKG9yaWVudGF0aW9uWCkge1xuICAgICAgICB4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB5Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zdXJyb3VuZGluZ0Nvb3Jkcy5wdXNoKFxuICAgICAgLi4udGhpcy5fZ2V0U3Vycm91bmRpbmdDb29yZHMoY29vcmRBcnIsIGxlbmd0aCwgb3JpZW50YXRpb25YKVxuICAgICk7XG5cbiAgICByZXR1cm4gY29vcmRBcnI7XG4gIH1cblxuICBfZ2V0U3Vycm91bmRpbmdDb29yZHMoY29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb25YKSB7XG4gICAgY29uc3Qgc3VyQ29vcmRBcnJheSA9IFtdO1xuICAgIHN1ckNvb3JkQXJyYXkucHVzaCh0aGlzLl9nZXRVcHBlclJvd0Nvb3Jkcyhjb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvblgpKTtcbiAgICBzdXJDb29yZEFycmF5LnB1c2godGhpcy5fZ2V0Qm90dG9tUm93Q29vcmRzKGNvb3JkLCBsZW5ndGgsIG9yaWVudGF0aW9uWCkpO1xuICAgIHN1ckNvb3JkQXJyYXkucHVzaCh0aGlzLl9nZXRSaWdodENvb3Jkcyhjb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvblgpKTtcbiAgICBzdXJDb29yZEFycmF5LnB1c2godGhpcy5fZ2V0TGVmdENvb3Jkcyhjb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvblgpKTtcblxuICAgIHJldHVybiBzdXJDb29yZEFycmF5LmZsYXQoKTtcbiAgfVxuXG4gIF9nZXRVcHBlclJvd0Nvb3Jkcyhjb29yZHMsIGxlbmd0aCwgb3JpZW50YXRpb25YKSB7XG4gICAgY29uc3QgdXBwZXJSb3cgPSBbXTtcbiAgICBsZXQgW3hfY29vcmQsIHlfY29vcmRdID0gY29vcmRzWzBdO1xuXG4gICAgeV9jb29yZC0tO1xuICAgIHhfY29vcmQtLTtcblxuICAgIGxldCB1cHBlclJvd0xlbmd0aCA9IG9yaWVudGF0aW9uWCA/IGxlbmd0aCArIDIgOiAzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXBwZXJSb3dMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX2lzV2l0aGluQm91bmRzKFt4X2Nvb3JkLCB5X2Nvb3JkXSkpIHtcbiAgICAgICAgdXBwZXJSb3cucHVzaChbeF9jb29yZCwgeV9jb29yZF0pO1xuICAgICAgfVxuICAgICAgeF9jb29yZCsrO1xuICAgIH1cblxuICAgIHJldHVybiB1cHBlclJvdztcbiAgfVxuXG4gIF9nZXRCb3R0b21Sb3dDb29yZHMoY29vcmRzLCBsZW5ndGgsIG9yaWVudGF0aW9uWCkge1xuICAgIGNvbnN0IGJvdHRvbVJvdyA9IFtdO1xuICAgIGxldCBbeF9jb29yZCwgeV9jb29yZF0gPSBjb29yZHNbbGVuZ3RoIC0gMV07XG5cbiAgICB5X2Nvb3JkKys7XG4gICAgeF9jb29yZCsrO1xuXG4gICAgbGV0IGJvdHRvbVJvd0xlbmd0aCA9IG9yaWVudGF0aW9uWCA/IGxlbmd0aCArIDIgOiAzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm90dG9tUm93TGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9pc1dpdGhpbkJvdW5kcyhbeF9jb29yZCwgeV9jb29yZF0pKSB7XG4gICAgICAgIGJvdHRvbVJvdy5wdXNoKFt4X2Nvb3JkLCB5X2Nvb3JkXSk7XG4gICAgICB9XG4gICAgICB4X2Nvb3JkLS07XG4gICAgfVxuICAgIHJldHVybiBib3R0b21Sb3c7XG4gIH1cblxuICBfZ2V0UmlnaHRDb29yZHMoY29vcmRzLCBsZW5ndGgsIG9yaWVudGF0aW9uWCkge1xuICAgIGNvbnN0IHJpZ2h0ID0gW107XG4gICAgbGV0IFt4X2Nvb3JkLCB5X2Nvb3JkXSA9IGNvb3Jkc1tsZW5ndGggLSAxXTtcbiAgICB4X2Nvb3JkKys7XG5cbiAgICBsZXQgcmlnaHRMZW5ndGggPSBvcmllbnRhdGlvblggPyAxIDogbGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmlnaHRMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX2lzV2l0aGluQm91bmRzKFt4X2Nvb3JkLCB5X2Nvb3JkXSkpIHtcbiAgICAgICAgcmlnaHQucHVzaChbeF9jb29yZCwgeV9jb29yZF0pO1xuICAgICAgfVxuICAgICAgeV9jb29yZC0tO1xuICAgIH1cblxuICAgIHJldHVybiByaWdodDtcbiAgfVxuXG4gIF9nZXRMZWZ0Q29vcmRzKGNvb3JkcywgbGVuZ3RoLCBvcmllbnRhdGlvblgpIHtcbiAgICBjb25zdCBsZWZ0ID0gW107XG4gICAgbGV0IHhfY29vcmQ7XG4gICAgbGV0IHlfY29vcmQ7XG4gICAgaWYgKG9yaWVudGF0aW9uWCkge1xuICAgICAgW3hfY29vcmQsIHlfY29vcmRdID0gY29vcmRzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBbeF9jb29yZCwgeV9jb29yZF0gPSBjb29yZHNbbGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIHhfY29vcmQtLTtcblxuICAgIGxldCBsZWZ0TGVuZ3RoID0gb3JpZW50YXRpb25YID8gMSA6IGxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlZnRMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX2lzV2l0aGluQm91bmRzKFt4X2Nvb3JkLCB5X2Nvb3JkXSkpIHtcbiAgICAgICAgbGVmdC5wdXNoKFt4X2Nvb3JkLCB5X2Nvb3JkXSk7XG4gICAgICB9XG4gICAgICB5X2Nvb3JkLS07XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZnQ7XG4gIH1cblxuICBfcHJlZGljdENvbGxpc2lvbldpdGhDdXJyZW50Q29vcmRzKG9yaWFudGF0aW9uLCB4LCB5LCBsZW5ndGgpIHtcbiAgICBjb25zdCB0ZW1wQXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdGVtcEFyci5wdXNoKFt4LCB5XSk7XG4gICAgICBpZiAob3JpYW50YXRpb24gPT09IFwieFwiKSB4Kys7XG4gICAgICBlbHNlIHkrKztcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGFycmF5IG9mIHRlbXBBcnIpIHtcbiAgICAgIGlmICh0aGlzLl9oYXNDb29yZENvbGxpc2lvbihhcnJheSwgdGhpcy5jdXJyZW50Q29vcmRzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgX3ByZWRpY3RDb2xsaXNpb25XaXRoU3Vycm91bmRpbmdDb29yZHMob3JpYW50YXRpb24sIHgsIHksIGxlbmd0aCkge1xuICAgIGNvbnN0IHRlbXBBcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB0ZW1wQXJyLnB1c2goW3gsIHldKTtcbiAgICAgIGlmIChvcmlhbnRhdGlvbiA9PT0gXCJ4XCIpIHgrKztcbiAgICAgIGVsc2UgeSsrO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgYXJyYXkgb2YgdGVtcEFycikge1xuICAgICAgaWYgKHRoaXMuX2hhc0Nvb3JkQ29sbGlzaW9uKGFycmF5LCB0aGlzLnN1cnJvdW5kaW5nQ29vcmRzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgX2lzV2l0aGluQm91bmRzKGNvb3JkKSB7XG4gICAgY29uc3QgW3hfY29vcmQsIHlfY29vcmRdID0gY29vcmQ7XG4gICAgcmV0dXJuIHhfY29vcmQgPj0gMCAmJiB4X2Nvb3JkIDwgMTAgJiYgeV9jb29yZCA+PSAwICYmIHlfY29vcmQgPCAxMDtcbiAgfVxuXG4gIF9pc1ZhbGlkQ29vcmQoeCwgeSwgbGVuZ3RoLCBvcmllbnRhdGlvblgpIHtcbiAgICBpZiAob3JpZW50YXRpb25YKSB7XG4gICAgICByZXR1cm4geCArIGxlbmd0aCA8PSAxMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHkgKyBsZW5ndGggPD0gMTA7XG4gICAgfVxuICB9XG5cbiAgX2dlbmVyYXRlUmFuZG9tTnVtYmVyKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIH1cblxuICBfaGFzQ29vcmRDb2xsaXNpb24oY29vcmQsIG90aGVyQ29vcmQpIHtcbiAgICByZXR1cm4gb3RoZXJDb29yZC5zb21lKChleGlzdGluZ0Nvb3JkKSA9PlxuICAgICAgYXJyYXlzRXF1YWwoZXhpc3RpbmdDb29yZCwgY29vcmQpXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcnJheXNFcXVhbChhcnIxLCBhcnIyKSB7XG4gIGlmIChhcnIxLmxlbmd0aCAhPT0gYXJyMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGFycjEuZXZlcnkoKGVsZW1lbnQsIGluZGV4KSA9PiBlbGVtZW50ID09PSBhcnIyW2luZGV4XSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleG9mSXRlbUluQXJyYXkoYXJyYXksIGl0ZW0pIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJheXNFcXVhbChhcnJheVtpXSwgaXRlbSkpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5mdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVBcnJheXMoYXJyYXlzKSB7XG4gIGNvbnN0IHVuaXF1ZUFycmF5cyA9IG5ldyBTZXQoYXJyYXlzLm1hcChKU09OLnN0cmluZ2lmeSkpO1xuICByZXR1cm4gQXJyYXkuZnJvbSh1bmlxdWVBcnJheXMpLm1hcChKU09OLnBhcnNlKTtcbn1cblxuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi4vZ2FtZWJvYXJkL2dhbWVib2FyZC1jbGFzc1wiO1xuXG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBuYW1lKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICB9XG59XG5cbmV4cG9ydCB7IFBsYXllciB9O1xuIiwiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMubnVtYmVyX2hpdCA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gIH1cbiAgZ2V0U3RhdHVzKCkge1xuICAgIHJldHVybiB7IGxlbmd0aDogdGhpcy5sZW5ndGgsIGhpdDogdGhpcy5udW1iZXJfaGl0LCBzdW5rOiB0aGlzLnN1bmsgfTtcbiAgfVxuICBoaXQoKSB7XG4gICAgaWYgKCF0aGlzLnN1bmspIHtcbiAgICAgIHRoaXMubnVtYmVyX2hpdCsrO1xuICAgICAgdGhpcy5zdW5rID0gdGhpcy5pc1N1bmsoKTtcbiAgICB9XG4gIH1cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLm51bWJlcl9oaXQgPT09IHRoaXMubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCB7IFNoaXAgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgaW5pdEdhbWUgfSBmcm9tIFwiLi9nYW1lLWxvZ2ljL2dhbWUtbG9naWNcIjtcblxuLy8gaW5pdEdhbWUoXCJodW1hblwiLCBcImh1bWFuXCIpO1xuaW5pdEdhbWUoXG4gIHsgdHlwZTogXCJodW1hblwiLCBuYW1lOiBcInBsYXllci0xXCIgfSxcbiAgeyB0eXBlOiBcImh1bWFuXCIsIG5hbWU6IFwicGxheWVyLTJcIiB9XG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9