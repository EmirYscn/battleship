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
  border: 1px solid #ffffff38;
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
  background-color: #89acd7;
  border-radius: 2px;
}

.ship.hit {
  /* background-color: red; */
  cursor: default;
  font-size: 1.04em;
  /* border: 2px solid yellow; */
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
  background-color: rgba(183, 189, 183, 0.3);
  /* opacity: 0.7; */
}
.surround {
  cursor: default;
  background-color: rgba(0, 0, 0, 0.1);
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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,kBAAkB;AAClB;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,oDAAoD;EACpD,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,YAAY;EACZ,yBAAyB;EACzB,gCAAgC;AAClC;;AAEA,kBAAkB;AAClB;EACE,cAAc;EACd,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA,qBAAqB;AACrB;EACE,UAAU;EACV,WAAW;EACX,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;EACZ,mBAAmB;AACrB;;AAEA,sBAAsB;AACtB;;EAEE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA,kBAAkB;AAClB;;EAEE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,iBAAiB,EAAE,oDAAoD;EACvE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,gBAAgB;EAChB,YAAY;AACd;;AAEA,gBAAgB;AAChB;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,2BAA2B;EAC3B,iBAAiB;EACjB,sCAAsC;EACtC,kBAAkB;EAClB,iBAAiB,EAAE,yCAAyC;AAC9D;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,iBAAiB;AACjB;EACE,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;EAC3B,eAAe;EACf,iBAAiB;EACjB,8BAA8B;AAChC;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,qBAAqB;AACvB;;AAEA,wBAAwB;AACxB;EACE,eAAe;EACf,0CAA0C;EAC1C,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,oCAAoC;AACtC;;AAEA,wBAAwB;AACxB;;EAEE,YAAY;EACZ,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA,oBAAoB;AACpB;EACE,YAAY;AACd;;AAEA,8BAA8B;AAC9B;EACE,kBAAkB;EAClB,SAAS,EAAE,wBAAwB;EACnC,SAAS;EACT,2BAA2B;EAC3B,oCAAoC;EACpC,YAAY;EACZ,gBAAgB;EAChB,cAAc;EACd,kBAAkB;EAClB,WAAW,EAAE,qCAAqC;AACpD;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU,EAAE,wBAAwB;EACpC,2BAA2B;EAC3B,oCAAoC;EACpC,YAAY;EACZ,gBAAgB;EAChB,cAAc;EACd,kBAAkB;EAClB,WAAW,EAAE,qCAAqC;AACpD","sourcesContent":["/* General Reset */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Body Styling */\nbody {\n  height: 100vh;\n  background: linear-gradient(90deg, #1a78ae, #431dd9);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2em;\n  color: white;\n  text-transform: uppercase;\n  font-family: \"Arial\", sans-serif;\n}\n\n/* Title Styling */\nh1 {\n  font-size: 3em;\n  letter-spacing: 0.1em;\n  margin-bottom: 0.5em;\n}\n\n/* Board Containers */\n.boards {\n  width: 90%;\n  height: 70%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.2);\n  padding: 1em;\n  border-radius: 10px;\n}\n\n/* Player Containers */\n.player-1-container,\n.player-2-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2em;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Board Styling */\n.player-1-board,\n.player-2-board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  align-items: center;\n  border: 2px solid white;\n  width: 500px;\n  height: 500px;\n  background-color: #083358;\n  border-radius: 8px;\n  overflow: visible; /* Changed to ensure content inside is not clipped */\n  position: relative;\n}\n\n.board-label {\n  position: absolute;\n  top: -30px;\n  font-size: 1.5em;\n  color: white;\n}\n\n/* Box Styling */\n.box {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #ffffff38;\n  cursor: crosshair;\n  transition: background-color 0.3s ease;\n  position: relative;\n  overflow: visible; /* Ensure content inside is not clipped */\n}\n\n.box:hover {\n  background-color: #1a78ae;\n}\n\n/* Ship Styling */\n.ship {\n  background-color: #89acd7;\n  border-radius: 2px;\n}\n\n.ship.hit {\n  /* background-color: red; */\n  cursor: default;\n  font-size: 1.04em;\n  /* border: 2px solid yellow; */\n}\n\n.ship.sunk {\n  background-color: gray;\n  color: white;\n  opacity: 0.8;\n  border: 2px solid red;\n}\n\n/* Missed Shot Styling */\n.missed {\n  cursor: default;\n  background-color: rgba(183, 189, 183, 0.3);\n  /* opacity: 0.7; */\n}\n.surround {\n  cursor: default;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n/* Player Text Styling */\n.player-1-text,\n.player-2-text {\n  color: white;\n  text-transform: uppercase;\n  font-size: 1.5em;\n}\n\n/* Utility Classes */\n.half-opacity {\n  opacity: 0.5;\n}\n\n/* Coordinate Number Styling */\n.coord-num-up {\n  position: absolute;\n  top: -2em; /* Adjust as necessary */\n  left: 50%;\n  transform: translateX(-50%);\n  /* background: rgba(0, 0, 0, 0.5); */\n  color: white;\n  padding: 2px 5px;\n  font-size: 1em;\n  border-radius: 3px;\n  z-index: 10; /* Ensure it's above other elements */\n}\n\n.coord-num-left {\n  position: absolute;\n  top: 50%;\n  left: -2em; /* Adjust as necessary */\n  transform: translateY(-50%);\n  /* background: rgba(0, 0, 0, 0.5); */\n  color: white;\n  padding: 2px 5px;\n  font-size: 1em;\n  border-radius: 3px;\n  z-index: 10; /* Ensure it's above other elements */\n}\n"],"sourceRoot":""}]);
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
    const currentPlayer = (0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getPlayers)()[parseInt(e.target.dataset.player)];
    // check if any ship is sunk
    const x_coord = parseInt(e.target.dataset.column);
    const y_coord = parseInt(e.target.dataset.row);

    const currentShip = currentPlayer.player.gameboard._getShip([
      x_coord,
      y_coord,
    ]);
    if (currentShip.sunk) {
      const surroundingCoords =
        currentPlayer.player.gameboard._getShipSurroundingCoords([
          x_coord,
          y_coord,
        ]);
      currentPlayer.player.gameboard.surroundingShots.push(
        ...surroundingCoords
      );
      // renderGameboardData(currentPlayer, surroundingCoords, "▪️", "surround");
    }
    if (currentPlayer.player.gameboard.hasAllShipsBeenSunk()) {
      // check if all ships sunk
      // display winning player
      // displayWinner()
      console.log("winner is", (0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getCurrentPlayer)());
      setEndGameState();
      return;
    }
    // if hit ship is not successful
  } else {
    // change the current player
    (0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.changeCurrentPlayer)();
    renderHeaderInfo((0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getCurrentPlayer)(), "is attacking...");
  }

  populateGameboards();
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
  renderHeaderInfo((0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getCurrentPlayer)(), "is attacking...");
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
  setBoardOpacity();

  // set players board eventListeners
  const nonCurrentPlayerBoard = [...(0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getNonCurrentPlayerDomBoard)()];
  const currentPlayerBoard = [...(0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getCurrentPlayerDomBoard)()];
  // set current players board unclickable
  setPlayerBoardEventListener(currentPlayerBoard, true);
  // set non current players board clickable
  setPlayerBoardEventListener(nonCurrentPlayerBoard, false);
}
function setBoardOpacity(shouldSetBothBoard = false) {
  const currentPlayer = (0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getCurrentPlayer)();
  const nonCurrentPlayer = (0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getOpposingPlayer)();
  if (shouldSetBothBoard) {
    const opposinglayerBoardDiv = document.querySelector(
      `.${nonCurrentPlayer.name}-board`
    );
    opposinglayerBoardDiv.classList.add("half-opacity");
  }
  const currentPlayerBoardDiv = document.querySelector(
    `.${currentPlayer.name}-board`
  );
  currentPlayerBoardDiv.classList.add("half-opacity");
}
function setEndGameState() {
  populateGameboards();
  renderHeaderInfo((0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getCurrentPlayer)(), "has won");
  (0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.setGameState)("isFinished", true);
  const nonCurrentPlayerBoard = [...(0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getNonCurrentPlayerDomBoard)()];
  const currentPlayerBoard = [...(0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getCurrentPlayerDomBoard)()];
  console.log(currentPlayerBoard);
  console.log(nonCurrentPlayerBoard);
  setPlayerBoardEventListener(currentPlayerBoard, true);
  setPlayerBoardEventListener(nonCurrentPlayerBoard, true);
  setBoardOpacity(true);
}
function setPlayerBoardEventListener(board, shouldRemoveEventListener) {
  if (shouldRemoveEventListener) {
    board.forEach((div) => {
      div.removeEventListener("click", handleDivClick);
    });
  } else {
    board.forEach((div) => {
      div.addEventListener("click", handleDivClick);
    });
  }
}

function renderPlayerBoard(player) {
  const currentPlayer = player.player;

  //render currentcoords
  // if player is ai dont render currentcoords
  if (player.player.type !== "ai") {
    renderGameboardData(
      player,
      currentPlayer.gameboard.currentCoords,
      "",
      "ship",
      false
    );
  }

  //render successful hitshots
  renderGameboardData(player, currentPlayer.gameboard.hitShots, "❌", "hit");

  //render missedshots
  renderGameboardData(
    player,
    currentPlayer.gameboard.missedShots,
    "▪️",
    "missed"
  );

  // render surrounding shots
  renderGameboardData(
    player,
    currentPlayer.gameboard.surroundingShots,
    "▪️",
    "surround"
  );
}

function renderGameboardData(
  player,
  data,
  text,
  className,
  shouldRemoveEventListener = true
) {
  const playerBoard = Array.from(player.board);

  data.forEach((coord) => {
    const div = findCorrespondingDiv(coord, playerBoard);

    div.textContent = text;
    div.classList.add(className);
    generateCoordNums(div);
    // prevent clicking the same coord again
    if (shouldRemoveEventListener) {
      div.removeEventListener("click", handleDivClick);
    }
  });
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

function renderHeaderInfo(player, text) {
  const currentPlayerHeader = document.querySelector(".current-player-header");
  currentPlayerHeader.innerHTML = "";
  const header = createHeading(`${player.name} ${text}`, "h1");

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
/* harmony export */   initGame: () => (/* binding */ initGame),
/* harmony export */   setGameState: () => (/* binding */ setGameState)
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
function setGameState(key, value) {
  gameState[`${key}`] = value;
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
    this.surroundingShots = [];
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
  _getShipSurroundingCoords(coordinate) {
    for (const ship of this.ships) {
      for (const coord of ship.coords) {
        if (arraysEqual(coord, coordinate)) {
          return ship.surroundingCoords;
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
    console.log(this.ships);
  }

  _generateShip(length, x_coord = null, y_coord = null) {
    const { coords, surroundingCoords } = this._generateCoord(
      length,
      x_coord,
      y_coord
    );
    return {
      coords,
      surroundingCoords,
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

    const coords = [];
    for (let i = 0; i < length; i++) {
      coords.push([x, y]);
      this.currentCoords.push([x, y]);
      if (orientationX) {
        x++;
      } else {
        y++;
      }
    }

    const surroundingCoords = this._getSurroundingCoords(
      coords,
      length,
      orientationX
    );
    this.surroundingCoords.push(...surroundingCoords);

    return { coords, surroundingCoords };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7QUNBc0I7QUFDNkI7O0FBRW5EO0FBQ0EsZ0VBQVE7QUFDUixJQUFJLGlDQUFpQztBQUNyQyxJQUFJO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20tbWFuaXAvZG9tLW1hbmlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS1sb2dpYy9nYW1lLWxvZ2ljLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkL2dhbWVib2FyZC1jbGFzcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci9wbGF5ZXItY2xhc3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwL3NoaXAtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogR2VuZXJhbCBSZXNldCAqL1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogQm9keSBTdHlsaW5nICovXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMWE3OGFlLCAjNDMxZGQ5KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG59XG5cbi8qIFRpdGxlIFN0eWxpbmcgKi9cbmgxIHtcbiAgZm9udC1zaXplOiAzZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbi8qIEJvYXJkIENvbnRhaW5lcnMgKi9cbi5ib2FyZHMge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDcwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4vKiBQbGF5ZXIgQ29udGFpbmVycyAqL1xuLnBsYXllci0xLWNvbnRhaW5lcixcbi5wbGF5ZXItMi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIEJvYXJkIFN0eWxpbmcgKi9cbi5wbGF5ZXItMS1ib2FyZCxcbi5wbGF5ZXItMi1ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MzM1ODtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogQ2hhbmdlZCB0byBlbnN1cmUgY29udGVudCBpbnNpZGUgaXMgbm90IGNsaXBwZWQgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYm9hcmQtbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTMwcHg7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogQm94IFN0eWxpbmcgKi9cbi5ib3gge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmMzg7XG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogRW5zdXJlIGNvbnRlbnQgaW5zaWRlIGlzIG5vdCBjbGlwcGVkICovXG59XG5cbi5ib3g6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE3OGFlO1xufVxuXG4vKiBTaGlwIFN0eWxpbmcgKi9cbi5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg5YWNkNztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uc2hpcC5oaXQge1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgZm9udC1zaXplOiAxLjA0ZW07XG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdzsgKi9cbn1cblxuLnNoaXAuc3VuayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC44O1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG59XG5cbi8qIE1pc3NlZCBTaG90IFN0eWxpbmcgKi9cbi5taXNzZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgzLCAxODksIDE4MywgMC4zKTtcbiAgLyogb3BhY2l0eTogMC43OyAqL1xufVxuLnN1cnJvdW5kIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi8qIFBsYXllciBUZXh0IFN0eWxpbmcgKi9cbi5wbGF5ZXItMS10ZXh0LFxuLnBsYXllci0yLXRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi8qIFV0aWxpdHkgQ2xhc3NlcyAqL1xuLmhhbGYtb3BhY2l0eSB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLyogQ29vcmRpbmF0ZSBOdW1iZXIgU3R5bGluZyAqL1xuLmNvb3JkLW51bS11cCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMmVtOyAvKiBBZGp1c3QgYXMgbmVjZXNzYXJ5ICovXG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7ICovXG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMnB4IDVweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgei1pbmRleDogMTA7IC8qIEVuc3VyZSBpdCdzIGFib3ZlIG90aGVyIGVsZW1lbnRzICovXG59XG5cbi5jb29yZC1udW0tbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IC0yZW07IC8qIEFkanVzdCBhcyBuZWNlc3NhcnkgKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7ICovXG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMnB4IDVweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgei1pbmRleDogMTA7IC8qIEVuc3VyZSBpdCdzIGFib3ZlIG90aGVyIGVsZW1lbnRzICovXG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGtCQUFrQjtBQUNsQjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGFBQWE7RUFDYixvREFBb0Q7RUFDcEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGdDQUFnQztBQUNsQzs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBLHNCQUFzQjtBQUN0Qjs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBLGtCQUFrQjtBQUNsQjs7RUFFRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBRSxvREFBb0Q7RUFDdkUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUUseUNBQXlDO0FBQzlEOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsZUFBZTtFQUNmLDBDQUEwQztFQUMxQyxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7QUFDdEM7O0FBRUEsd0JBQXdCO0FBQ3hCOztFQUVFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLFlBQVk7QUFDZDs7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUyxFQUFFLHdCQUF3QjtFQUNuQyxTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVyxFQUFFLHFDQUFxQztBQUNwRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVSxFQUFFLHdCQUF3QjtFQUNwQywyQkFBMkI7RUFDM0Isb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXLEVBQUUscUNBQXFDO0FBQ3BEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdlbmVyYWwgUmVzZXQgKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBCb2R5IFN0eWxpbmcgKi9cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxYTc4YWUsICM0MzFkZDkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LWZhbWlseTogXFxcIkFyaWFsXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogVGl0bGUgU3R5bGluZyAqL1xcbmgxIHtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcblxcbi8qIEJvYXJkIENvbnRhaW5lcnMgKi9cXG4uYm9hcmRzIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4vKiBQbGF5ZXIgQ29udGFpbmVycyAqL1xcbi5wbGF5ZXItMS1jb250YWluZXIsXFxuLnBsYXllci0yLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBCb2FyZCBTdHlsaW5nICovXFxuLnBsYXllci0xLWJvYXJkLFxcbi5wbGF5ZXItMi1ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgzMzU4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIENoYW5nZWQgdG8gZW5zdXJlIGNvbnRlbnQgaW5zaWRlIGlzIG5vdCBjbGlwcGVkICovXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ib2FyZC1sYWJlbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0zMHB4O1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogQm94IFN0eWxpbmcgKi9cXG4uYm94IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmMzg7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIEVuc3VyZSBjb250ZW50IGluc2lkZSBpcyBub3QgY2xpcHBlZCAqL1xcbn1cXG5cXG4uYm94OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTc4YWU7XFxufVxcblxcbi8qIFNoaXAgU3R5bGluZyAqL1xcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4OWFjZDc7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi5zaGlwLmhpdCB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBmb250LXNpemU6IDEuMDRlbTtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdzsgKi9cXG59XFxuXFxuLnNoaXAuc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbn1cXG5cXG4vKiBNaXNzZWQgU2hvdCBTdHlsaW5nICovXFxuLm1pc3NlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MywgMTg5LCAxODMsIDAuMyk7XFxuICAvKiBvcGFjaXR5OiAwLjc7ICovXFxufVxcbi5zdXJyb3VuZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi8qIFBsYXllciBUZXh0IFN0eWxpbmcgKi9cXG4ucGxheWVyLTEtdGV4dCxcXG4ucGxheWVyLTItdGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLyogVXRpbGl0eSBDbGFzc2VzICovXFxuLmhhbGYtb3BhY2l0eSB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi8qIENvb3JkaW5hdGUgTnVtYmVyIFN0eWxpbmcgKi9cXG4uY29vcmQtbnVtLXVwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTJlbTsgLyogQWRqdXN0IGFzIG5lY2Vzc2FyeSAqL1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLyogYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpOyAqL1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMnB4IDVweDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgei1pbmRleDogMTA7IC8qIEVuc3VyZSBpdCdzIGFib3ZlIG90aGVyIGVsZW1lbnRzICovXFxufVxcblxcbi5jb29yZC1udW0tbGVmdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IC0yZW07IC8qIEFkanVzdCBhcyBuZWNlc3NhcnkgKi9cXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC8qIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTsgKi9cXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDJweCA1cHg7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHotaW5kZXg6IDEwOyAvKiBFbnN1cmUgaXQncyBhYm92ZSBvdGhlciBlbGVtZW50cyAqL1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtcbiAgZ2V0UGxheWVycyxcbiAgY2hhbmdlQ3VycmVudFBsYXllcixcbiAgZ2V0Q3VycmVudFBsYXllcixcbiAgZ2V0T3Bwb3NpbmdQbGF5ZXIsXG4gIGdldEN1cnJlbnRQbGF5ZXJEb21Cb2FyZCxcbiAgZ2V0Tm9uQ3VycmVudFBsYXllckRvbUJvYXJkLFxuICBnZXRHYW1lU3RhdGUsXG4gIHNldEdhbWVTdGF0ZSxcbn0gZnJvbSBcIi4uL2dhbWUtbG9naWMvZ2FtZS1sb2dpY1wiO1xuXG5mdW5jdGlvbiBpbml0RG9tKCkge1xuICBwb3B1bGF0ZUJvYXJkKCk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlQm9hcmQoKSB7XG4gIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmRcIik7XG5cbiAgYm9hcmRzLmZvckVhY2goKGJvYXJkLCBpbmRleCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgY29uc3Qgcm93SW5kZXggPSBpO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGNvbHVtbkluZGV4ID0gajtcbiAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlRGl2KFwiYm94XCIpO1xuXG4gICAgICAgIGRpdi5kYXRhc2V0LnJvdyA9IHJvd0luZGV4O1xuICAgICAgICBkaXYuZGF0YXNldC5jb2x1bW4gPSBjb2x1bW5JbmRleDtcbiAgICAgICAgZGl2LmRhdGFzZXQucGxheWVyID0gaW5kZXg7XG5cbiAgICAgICAgLy8gZ2VuZXJhdGVDb29yZE51bXMoW3Jvd0luZGV4LCBjb2x1bW5JbmRleF0pO1xuICAgICAgICBpZiAocm93SW5kZXggPT09IDApIHtcbiAgICAgICAgICBjb25zdCBzcGFuID0gY3JlYXRlU3BhbihcImNvb3JkLW51bS11cFwiLCBjb2x1bW5JbmRleCk7XG4gICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2x1bW5JbmRleCA9PT0gMCkge1xuICAgICAgICAgIGNvbnN0IHNwYW4gPSBjcmVhdGVTcGFuKFwiY29vcmQtbnVtLWxlZnRcIiwgcm93SW5kZXgpO1xuICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgfVxuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRGl2Q2xpY2spO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUNvb3JkTnVtcyhkaXYpIHtcbiAgY29uc3QgZGl2Um93ID0gcGFyc2VJbnQoZGl2LmRhdGFzZXQucm93KTtcbiAgY29uc3QgZGl2Q29sdW1uID0gcGFyc2VJbnQoZGl2LmRhdGFzZXQuY29sdW1uKTtcbiAgaWYgKGRpdlJvdyA9PT0gMCAmJiBkaXZDb2x1bW4gPT09IDApIHtcbiAgICBjb25zdCBzcGFuMSA9IGNyZWF0ZVNwYW4oXCJjb29yZC1udW0tdXBcIiwgZGl2Q29sdW1uKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc3BhbjEpO1xuICAgIGNvbnN0IHNwYW4yID0gY3JlYXRlU3BhbihcImNvb3JkLW51bS1sZWZ0XCIsIGRpdlJvdyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHNwYW4yKTtcbiAgfSBlbHNlIGlmIChkaXZSb3cgPT09IDApIHtcbiAgICBjb25zdCBzcGFuID0gY3JlYXRlU3BhbihcImNvb3JkLW51bS11cFwiLCBkaXZDb2x1bW4pO1xuICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgfSBlbHNlIGlmIChkaXZDb2x1bW4gPT09IDApIHtcbiAgICBjb25zdCBzcGFuID0gY3JlYXRlU3BhbihcImNvb3JkLW51bS1sZWZ0XCIsIGRpdlJvdyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURpdkNsaWNrKGUpIHtcbiAgLy8gaWYgaGl0IHNoaXAgaXMgc3VjY2VzZnVsXG4gIGlmIChoaXRTaGlwKGUudGFyZ2V0LmRhdGFzZXQpKSB7XG4gICAgLy8gY29udGludWUgcGxheWluZyB3aXRoIHRoZSBjdXJyZW50IHBsYXllclxuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBnZXRQbGF5ZXJzKClbcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5wbGF5ZXIpXTtcbiAgICAvLyBjaGVjayBpZiBhbnkgc2hpcCBpcyBzdW5rXG4gICAgY29uc3QgeF9jb29yZCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uKTtcbiAgICBjb25zdCB5X2Nvb3JkID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5yb3cpO1xuXG4gICAgY29uc3QgY3VycmVudFNoaXAgPSBjdXJyZW50UGxheWVyLnBsYXllci5nYW1lYm9hcmQuX2dldFNoaXAoW1xuICAgICAgeF9jb29yZCxcbiAgICAgIHlfY29vcmQsXG4gICAgXSk7XG4gICAgaWYgKGN1cnJlbnRTaGlwLnN1bmspIHtcbiAgICAgIGNvbnN0IHN1cnJvdW5kaW5nQ29vcmRzID1cbiAgICAgICAgY3VycmVudFBsYXllci5wbGF5ZXIuZ2FtZWJvYXJkLl9nZXRTaGlwU3Vycm91bmRpbmdDb29yZHMoW1xuICAgICAgICAgIHhfY29vcmQsXG4gICAgICAgICAgeV9jb29yZCxcbiAgICAgICAgXSk7XG4gICAgICBjdXJyZW50UGxheWVyLnBsYXllci5nYW1lYm9hcmQuc3Vycm91bmRpbmdTaG90cy5wdXNoKFxuICAgICAgICAuLi5zdXJyb3VuZGluZ0Nvb3Jkc1xuICAgICAgKTtcbiAgICAgIC8vIHJlbmRlckdhbWVib2FyZERhdGEoY3VycmVudFBsYXllciwgc3Vycm91bmRpbmdDb29yZHMsIFwi4paq77iPXCIsIFwic3Vycm91bmRcIik7XG4gICAgfVxuICAgIGlmIChjdXJyZW50UGxheWVyLnBsYXllci5nYW1lYm9hcmQuaGFzQWxsU2hpcHNCZWVuU3VuaygpKSB7XG4gICAgICAvLyBjaGVjayBpZiBhbGwgc2hpcHMgc3Vua1xuICAgICAgLy8gZGlzcGxheSB3aW5uaW5nIHBsYXllclxuICAgICAgLy8gZGlzcGxheVdpbm5lcigpXG4gICAgICBjb25zb2xlLmxvZyhcIndpbm5lciBpc1wiLCBnZXRDdXJyZW50UGxheWVyKCkpO1xuICAgICAgc2V0RW5kR2FtZVN0YXRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGlmIGhpdCBzaGlwIGlzIG5vdCBzdWNjZXNzZnVsXG4gIH0gZWxzZSB7XG4gICAgLy8gY2hhbmdlIHRoZSBjdXJyZW50IHBsYXllclxuICAgIGNoYW5nZUN1cnJlbnRQbGF5ZXIoKTtcbiAgICByZW5kZXJIZWFkZXJJbmZvKGdldEN1cnJlbnRQbGF5ZXIoKSwgXCJpcyBhdHRhY2tpbmcuLi5cIik7XG4gIH1cblxuICBwb3B1bGF0ZUdhbWVib2FyZHMoKTtcbn1cblxuZnVuY3Rpb24gaGl0U2hpcChwbGF5ZXIpIHtcbiAgY29uc3QgcGxheWVyRGF0YXNldCA9IHsgLi4ucGxheWVyIH07XG5cbiAgY29uc3QgY3VycmVudFBsYXllciA9IGdldFBsYXllcnMoKVtwYXJzZUludChwbGF5ZXJEYXRhc2V0LnBsYXllcildO1xuICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBjdXJyZW50UGxheWVyLnBsYXllci5nYW1lYm9hcmQ7XG5cbiAgY29uc3QgeF9jb29yZCA9IHBhcnNlSW50KHBsYXllckRhdGFzZXQuY29sdW1uKTtcbiAgY29uc3QgeV9jb29yZCA9IHBhcnNlSW50KHBsYXllckRhdGFzZXQucm93KTtcbiAgY29uc3QgY29vcmQgPSBbeF9jb29yZCwgeV9jb29yZF07XG4gIHJldHVybiBwbGF5ZXJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZCk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlR2FtZWJvYXJkcygpIHtcbiAgY29uc3QgcGxheWVycyA9IGdldFBsYXllcnMoKTtcbiAgY29uc29sZS5sb2cocGxheWVycyk7XG4gIHJlbmRlclBsYXllck5hbWVzKHBsYXllcnMpO1xuICByZW5kZXJIZWFkZXJJbmZvKGdldEN1cnJlbnRQbGF5ZXIoKSwgXCJpcyBhdHRhY2tpbmcuLi5cIik7XG4gIHJlbmRlckN1cnJlbnRQbGF5ZXJEaXNwbGF5KCk7XG4gIHBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgcmVuZGVyUGxheWVyQm9hcmQocGxheWVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckN1cnJlbnRQbGF5ZXJEaXNwbGF5KCkge1xuICAvLyBnZXQgcGxheWVyIGJvYXJkIGRpdnNcbiAgY29uc3QgUGxheWVyMUJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItMS1ib2FyZFwiKTtcbiAgY29uc3QgUGxheWVyMkJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItMi1ib2FyZFwiKTtcblxuICAvLyByZXNldCBib2FyZHMgb3BhY2l0eVxuICBQbGF5ZXIxQm9hcmREaXYuY2xhc3NMaXN0LnJlbW92ZShcImhhbGYtb3BhY2l0eVwiKTtcbiAgUGxheWVyMkJvYXJkRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoYWxmLW9wYWNpdHlcIik7XG5cbiAgLy8gc2V0IGN1cnJlbnQgcGxheWVyIGJvYXJkIG9wYWNpdHlcbiAgc2V0Qm9hcmRPcGFjaXR5KCk7XG5cbiAgLy8gc2V0IHBsYXllcnMgYm9hcmQgZXZlbnRMaXN0ZW5lcnNcbiAgY29uc3Qgbm9uQ3VycmVudFBsYXllckJvYXJkID0gWy4uLmdldE5vbkN1cnJlbnRQbGF5ZXJEb21Cb2FyZCgpXTtcbiAgY29uc3QgY3VycmVudFBsYXllckJvYXJkID0gWy4uLmdldEN1cnJlbnRQbGF5ZXJEb21Cb2FyZCgpXTtcbiAgLy8gc2V0IGN1cnJlbnQgcGxheWVycyBib2FyZCB1bmNsaWNrYWJsZVxuICBzZXRQbGF5ZXJCb2FyZEV2ZW50TGlzdGVuZXIoY3VycmVudFBsYXllckJvYXJkLCB0cnVlKTtcbiAgLy8gc2V0IG5vbiBjdXJyZW50IHBsYXllcnMgYm9hcmQgY2xpY2thYmxlXG4gIHNldFBsYXllckJvYXJkRXZlbnRMaXN0ZW5lcihub25DdXJyZW50UGxheWVyQm9hcmQsIGZhbHNlKTtcbn1cbmZ1bmN0aW9uIHNldEJvYXJkT3BhY2l0eShzaG91bGRTZXRCb3RoQm9hcmQgPSBmYWxzZSkge1xuICBjb25zdCBjdXJyZW50UGxheWVyID0gZ2V0Q3VycmVudFBsYXllcigpO1xuICBjb25zdCBub25DdXJyZW50UGxheWVyID0gZ2V0T3Bwb3NpbmdQbGF5ZXIoKTtcbiAgaWYgKHNob3VsZFNldEJvdGhCb2FyZCkge1xuICAgIGNvbnN0IG9wcG9zaW5nbGF5ZXJCb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7bm9uQ3VycmVudFBsYXllci5uYW1lfS1ib2FyZGBcbiAgICApO1xuICAgIG9wcG9zaW5nbGF5ZXJCb2FyZERpdi5jbGFzc0xpc3QuYWRkKFwiaGFsZi1vcGFjaXR5XCIpO1xuICB9XG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXJCb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC4ke2N1cnJlbnRQbGF5ZXIubmFtZX0tYm9hcmRgXG4gICk7XG4gIGN1cnJlbnRQbGF5ZXJCb2FyZERpdi5jbGFzc0xpc3QuYWRkKFwiaGFsZi1vcGFjaXR5XCIpO1xufVxuZnVuY3Rpb24gc2V0RW5kR2FtZVN0YXRlKCkge1xuICBwb3B1bGF0ZUdhbWVib2FyZHMoKTtcbiAgcmVuZGVySGVhZGVySW5mbyhnZXRDdXJyZW50UGxheWVyKCksIFwiaGFzIHdvblwiKTtcbiAgc2V0R2FtZVN0YXRlKFwiaXNGaW5pc2hlZFwiLCB0cnVlKTtcbiAgY29uc3Qgbm9uQ3VycmVudFBsYXllckJvYXJkID0gWy4uLmdldE5vbkN1cnJlbnRQbGF5ZXJEb21Cb2FyZCgpXTtcbiAgY29uc3QgY3VycmVudFBsYXllckJvYXJkID0gWy4uLmdldEN1cnJlbnRQbGF5ZXJEb21Cb2FyZCgpXTtcbiAgY29uc29sZS5sb2coY3VycmVudFBsYXllckJvYXJkKTtcbiAgY29uc29sZS5sb2cobm9uQ3VycmVudFBsYXllckJvYXJkKTtcbiAgc2V0UGxheWVyQm9hcmRFdmVudExpc3RlbmVyKGN1cnJlbnRQbGF5ZXJCb2FyZCwgdHJ1ZSk7XG4gIHNldFBsYXllckJvYXJkRXZlbnRMaXN0ZW5lcihub25DdXJyZW50UGxheWVyQm9hcmQsIHRydWUpO1xuICBzZXRCb2FyZE9wYWNpdHkodHJ1ZSk7XG59XG5mdW5jdGlvbiBzZXRQbGF5ZXJCb2FyZEV2ZW50TGlzdGVuZXIoYm9hcmQsIHNob3VsZFJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgaWYgKHNob3VsZFJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICBib2FyZC5mb3JFYWNoKChkaXYpID0+IHtcbiAgICAgIGRpdi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRGl2Q2xpY2spO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGJvYXJkLmZvckVhY2goKGRpdikgPT4ge1xuICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVEaXZDbGljayk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyUGxheWVyQm9hcmQocGxheWVyKSB7XG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIucGxheWVyO1xuXG4gIC8vcmVuZGVyIGN1cnJlbnRjb29yZHNcbiAgLy8gaWYgcGxheWVyIGlzIGFpIGRvbnQgcmVuZGVyIGN1cnJlbnRjb29yZHNcbiAgaWYgKHBsYXllci5wbGF5ZXIudHlwZSAhPT0gXCJhaVwiKSB7XG4gICAgcmVuZGVyR2FtZWJvYXJkRGF0YShcbiAgICAgIHBsYXllcixcbiAgICAgIGN1cnJlbnRQbGF5ZXIuZ2FtZWJvYXJkLmN1cnJlbnRDb29yZHMsXG4gICAgICBcIlwiLFxuICAgICAgXCJzaGlwXCIsXG4gICAgICBmYWxzZVxuICAgICk7XG4gIH1cblxuICAvL3JlbmRlciBzdWNjZXNzZnVsIGhpdHNob3RzXG4gIHJlbmRlckdhbWVib2FyZERhdGEocGxheWVyLCBjdXJyZW50UGxheWVyLmdhbWVib2FyZC5oaXRTaG90cywgXCLinYxcIiwgXCJoaXRcIik7XG5cbiAgLy9yZW5kZXIgbWlzc2Vkc2hvdHNcbiAgcmVuZGVyR2FtZWJvYXJkRGF0YShcbiAgICBwbGF5ZXIsXG4gICAgY3VycmVudFBsYXllci5nYW1lYm9hcmQubWlzc2VkU2hvdHMsXG4gICAgXCLilqrvuI9cIixcbiAgICBcIm1pc3NlZFwiXG4gICk7XG5cbiAgLy8gcmVuZGVyIHN1cnJvdW5kaW5nIHNob3RzXG4gIHJlbmRlckdhbWVib2FyZERhdGEoXG4gICAgcGxheWVyLFxuICAgIGN1cnJlbnRQbGF5ZXIuZ2FtZWJvYXJkLnN1cnJvdW5kaW5nU2hvdHMsXG4gICAgXCLilqrvuI9cIixcbiAgICBcInN1cnJvdW5kXCJcbiAgKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyR2FtZWJvYXJkRGF0YShcbiAgcGxheWVyLFxuICBkYXRhLFxuICB0ZXh0LFxuICBjbGFzc05hbWUsXG4gIHNob3VsZFJlbW92ZUV2ZW50TGlzdGVuZXIgPSB0cnVlXG4pIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBBcnJheS5mcm9tKHBsYXllci5ib2FyZCk7XG5cbiAgZGF0YS5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGZpbmRDb3JyZXNwb25kaW5nRGl2KGNvb3JkLCBwbGF5ZXJCb2FyZCk7XG5cbiAgICBkaXYudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZ2VuZXJhdGVDb29yZE51bXMoZGl2KTtcbiAgICAvLyBwcmV2ZW50IGNsaWNraW5nIHRoZSBzYW1lIGNvb3JkIGFnYWluXG4gICAgaWYgKHNob3VsZFJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIGRpdi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRGl2Q2xpY2spO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRDb3JyZXNwb25kaW5nRGl2KGNvb3JkLCBib2FyZCkge1xuICBjb25zdCBbeF9jb29yZCwgeV9jb29yZF0gPSBjb29yZDtcblxuICBjb25zdCBkaXYgPSBib2FyZC5maW5kKChkaXYpID0+IHtcbiAgICBjb25zdCByb3cgPSBwYXJzZUludChkaXYuZGF0YXNldC5yb3cpO1xuICAgIGNvbnN0IGNvbHVtbiA9IHBhcnNlSW50KGRpdi5kYXRhc2V0LmNvbHVtbik7XG4gICAgcmV0dXJuIHJvdyA9PT0geV9jb29yZCAmJiBjb2x1bW4gPT09IHhfY29vcmQ7XG4gIH0pO1xuXG4gIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBsYXllck5hbWVzKHBsYXllcnMpIHtcbiAgY29uc3QgcGxheWVyMURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTEtdGV4dFwiKTtcbiAgY29uc3QgcGxheWVyMkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTItdGV4dFwiKTtcblxuICBwbGF5ZXIxRGl2LnRleHRDb250ZW50ID0gXCJcIjtcbiAgcGxheWVyMkRpdi50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgcGxheWVyMURpdi5hcHBlbmRDaGlsZChjcmVhdGVIZWFkaW5nKGAke3BsYXllcnNbMF0ucGxheWVyLm5hbWV9YCwgXCJoMlwiKSk7XG4gIHBsYXllcjJEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGluZyhgJHtwbGF5ZXJzWzFdLnBsYXllci5uYW1lfWAsIFwiaDJcIikpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJIZWFkZXJJbmZvKHBsYXllciwgdGV4dCkge1xuICBjb25zdCBjdXJyZW50UGxheWVySGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LXBsYXllci1oZWFkZXJcIik7XG4gIGN1cnJlbnRQbGF5ZXJIZWFkZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGluZyhgJHtwbGF5ZXIubmFtZX0gJHt0ZXh0fWAsIFwiaDFcIik7XG5cbiAgY3VycmVudFBsYXllckhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkaW5nKHRleHQsIGhlYWRpbmcpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChoZWFkaW5nKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gdGV4dDtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTcGFuKGNsYXNzTmFtZSwgdGV4dCkge1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICBzcGFuLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblxuICByZXR1cm4gc3Bhbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGl2KGNsYXNzTmFtZSkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgeyBpbml0RG9tLCBwb3B1bGF0ZUdhbWVib2FyZHMgfTtcbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9wbGF5ZXIvcGxheWVyLWNsYXNzXCI7XG5pbXBvcnQgeyBpbml0RG9tLCBwb3B1bGF0ZUdhbWVib2FyZHMgfSBmcm9tIFwiLi4vZG9tLW1hbmlwL2RvbS1tYW5pcFwiO1xuXG5sZXQgcGxheWVycyA9IFtdO1xubGV0IGdhbWVTdGF0ZTtcblxuZnVuY3Rpb24gZ2V0Qm9hcmRzRE9NKGluZGV4KSB7XG4gIGNvbnN0IGJvYXJkcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZFwiKSk7XG4gIGNvbnN0IGJvYXJkc0NoaWxkTm9kZXMgPSBbYm9hcmRzWzBdLmNoaWxkcmVuLCBib2FyZHNbMV0uY2hpbGRyZW5dO1xuICByZXR1cm4gYm9hcmRzQ2hpbGROb2Rlc1tpbmRleF07XG59XG5cbmZ1bmN0aW9uIGluaXRQbGF5ZXJzKHBsYXllcjFUeXBlLCBwbGF5ZXIyVHlwZSwgcGxheWVyMU5hbWUsIHBsYXllcjJOYW1lKSB7XG4gIHBsYXllcnMgPSBbXG4gICAge1xuICAgICAgcGxheWVyOiBjcmVhdGVQbGF5ZXIocGxheWVyMVR5cGUsIHBsYXllcjFOYW1lKSxcbiAgICAgIGJvYXJkOiBnZXRCb2FyZHNET00oMCksXG4gICAgfSxcbiAgICB7XG4gICAgICBwbGF5ZXI6IGNyZWF0ZVBsYXllcihwbGF5ZXIyVHlwZSwgcGxheWVyMk5hbWUpLFxuICAgICAgYm9hcmQ6IGdldEJvYXJkc0RPTSgxKSxcbiAgICB9LFxuICBdO1xufVxuZnVuY3Rpb24gaW5pdEdhbWVTdGF0ZSgpIHtcbiAgZ2FtZVN0YXRlID0ge1xuICAgIGN1cnJlbnRQbGF5ZXI6IHBsYXllcnNbMF0ucGxheWVyLFxuICAgIGN1cnJlbnRQbGF5ZXJCb2FyZDogcGxheWVyc1swXS5ib2FyZCxcbiAgICBpc0ZpbmlzaGVkOiBmYWxzZSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGxheWVyKHBsYXllclR5cGUsIHBsYXllck5hbWUpIHtcbiAgcmV0dXJuIG5ldyBQbGF5ZXIocGxheWVyVHlwZSwgcGxheWVyTmFtZSk7XG59XG5mdW5jdGlvbiBnZXRQbGF5ZXJzKCkge1xuICByZXR1cm4gcGxheWVycztcbn1cbmZ1bmN0aW9uIGdldEdhbWVTdGF0ZSgpIHtcbiAgcmV0dXJuIGdhbWVTdGF0ZTtcbn1cbmZ1bmN0aW9uIHNldEdhbWVTdGF0ZShrZXksIHZhbHVlKSB7XG4gIGdhbWVTdGF0ZVtgJHtrZXl9YF0gPSB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGdldEN1cnJlbnRQbGF5ZXIoKSB7XG4gIHJldHVybiBnYW1lU3RhdGUuY3VycmVudFBsYXllcjtcbn1cbmZ1bmN0aW9uIGdldEN1cnJlbnRQbGF5ZXJEb21Cb2FyZCgpIHtcbiAgcmV0dXJuIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyQm9hcmQ7XG59XG5mdW5jdGlvbiBnZXROb25DdXJyZW50UGxheWVyRG9tQm9hcmQoKSB7XG4gIHJldHVybiBnYW1lU3RhdGUuY3VycmVudFBsYXllciA9PT0gcGxheWVyc1swXS5wbGF5ZXJcbiAgICA/IHBsYXllcnNbMV0uYm9hcmRcbiAgICA6IHBsYXllcnNbMF0uYm9hcmQ7XG59XG5mdW5jdGlvbiBnZXRPcHBvc2luZ1BsYXllcigpIHtcbiAgcmV0dXJuIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyID09PSBwbGF5ZXJzWzBdLnBsYXllclxuICAgID8gcGxheWVyc1sxXS5wbGF5ZXJcbiAgICA6IHBsYXllcnNbMF0ucGxheWVyO1xufVxuZnVuY3Rpb24gY2hhbmdlQ3VycmVudFBsYXllcigpIHtcbiAgZ2FtZVN0YXRlLmN1cnJlbnRQbGF5ZXIgPVxuICAgIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyID09PSBwbGF5ZXJzWzBdLnBsYXllclxuICAgICAgPyAoZ2FtZVN0YXRlLmN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJzWzFdLnBsYXllcilcbiAgICAgIDogKGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyID0gcGxheWVyc1swXS5wbGF5ZXIpO1xuXG4gIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyQm9hcmQgPVxuICAgIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyID09PSBwbGF5ZXJzWzBdLnBsYXllclxuICAgICAgPyBwbGF5ZXJzWzBdLmJvYXJkXG4gICAgICA6IHBsYXllcnNbMV0uYm9hcmQ7XG59XG5cbmZ1bmN0aW9uIGluaXRHYW1lKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgaW5pdERvbSgpO1xuICBpbml0UGxheWVycyhwbGF5ZXIxLnR5cGUsIHBsYXllcjIudHlwZSwgcGxheWVyMS5uYW1lLCBwbGF5ZXIyLm5hbWUpO1xuICBpbml0R2FtZVN0YXRlKCk7XG4gIHBvcHVsYXRlR2FtZWJvYXJkcygpO1xufVxuXG5leHBvcnQge1xuICBpbml0R2FtZSxcbiAgZ2V0UGxheWVycyxcbiAgZ2V0R2FtZVN0YXRlLFxuICBjaGFuZ2VDdXJyZW50UGxheWVyLFxuICBnZXRDdXJyZW50UGxheWVyLFxuICBnZXRPcHBvc2luZ1BsYXllcixcbiAgZ2V0Q3VycmVudFBsYXllckRvbUJvYXJkLFxuICBnZXROb25DdXJyZW50UGxheWVyRG9tQm9hcmQsXG4gIHNldEdhbWVTdGF0ZSxcbn07XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4uL3NoaXAvc2hpcC1jbGFzc1wiO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNoaXBzID0gW107XG4gICAgdGhpcy5taXNzZWRTaG90cyA9IFtdO1xuICAgIHRoaXMuaGl0U2hvdHMgPSBbXTtcbiAgICB0aGlzLmN1cnJlbnRDb29yZHMgPSBbXTtcbiAgICB0aGlzLnN1cnJvdW5kaW5nQ29vcmRzID0gW107XG4gICAgdGhpcy5zdXJyb3VuZGluZ1Nob3RzID0gW107XG4gICAgdGhpcy5fZ2VuZXJhdGVTaGlwTWFwKCk7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCBzaGlwID0gdGhpcy5fZ2V0U2hpcChjb29yZGluYXRlKTtcbiAgICBpZiAoc2hpcCAmJiAhc2hpcC5zdW5rKSB7XG4gICAgICBzaGlwLmhpdCgpO1xuICAgICAgdGhpcy5oaXRTaG90cy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgdGhpcy5jdXJyZW50Q29vcmRzLnNwbGljZShcbiAgICAgICAgZmluZEluZGV4b2ZJdGVtSW5BcnJheSh0aGlzLmN1cnJlbnRDb29yZHMsIGNvb3JkaW5hdGUpLFxuICAgICAgICAxXG4gICAgICApO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWlzc2VkU2hvdHMucHVzaChjb29yZGluYXRlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBoYXNBbGxTaGlwc0JlZW5TdW5rKCkge1xuICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KChzaGlwKSA9PiB7XG4gICAgICByZXR1cm4gc2hpcC5zaGlwLnN1bmsgPT09IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBfZ2V0U2hpcChjb29yZGluYXRlKSB7XG4gICAgZm9yIChjb25zdCBzaGlwIG9mIHRoaXMuc2hpcHMpIHtcbiAgICAgIGZvciAoY29uc3QgY29vcmQgb2Ygc2hpcC5jb29yZHMpIHtcbiAgICAgICAgaWYgKGFycmF5c0VxdWFsKGNvb3JkLCBjb29yZGluYXRlKSkge1xuICAgICAgICAgIHJldHVybiBzaGlwLnNoaXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgX2dldFNoaXBTdXJyb3VuZGluZ0Nvb3Jkcyhjb29yZGluYXRlKSB7XG4gICAgZm9yIChjb25zdCBzaGlwIG9mIHRoaXMuc2hpcHMpIHtcbiAgICAgIGZvciAoY29uc3QgY29vcmQgb2Ygc2hpcC5jb29yZHMpIHtcbiAgICAgICAgaWYgKGFycmF5c0VxdWFsKGNvb3JkLCBjb29yZGluYXRlKSkge1xuICAgICAgICAgIHJldHVybiBzaGlwLnN1cnJvdW5kaW5nQ29vcmRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgX2dlbmVyYXRlU2hpcE1hcCgpIHtcbiAgICB0aGlzLnNoaXBzLnB1c2godGhpcy5fZ2VuZXJhdGVTaGlwKDQpKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICB0aGlzLnNoaXBzLnB1c2godGhpcy5fZ2VuZXJhdGVTaGlwKDMpKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgdGhpcy5zaGlwcy5wdXNoKHRoaXMuX2dlbmVyYXRlU2hpcCgyKSk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgIHRoaXMuc2hpcHMucHVzaCh0aGlzLl9nZW5lcmF0ZVNoaXAoMSkpO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudENvb3Jkcyk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zdXJyb3VuZGluZ0Nvb3Jkcyk7XG4gICAgLy8gdGhpcy5zdXJyb3VuZGluZ0Nvb3JkcyA9IFsuLi5uZXcgU2V0KHRoaXMuc3Vycm91bmRpbmdDb29yZHMpXTtcbiAgICB0aGlzLnN1cnJvdW5kaW5nQ29vcmRzID0gcmVtb3ZlRHVwbGljYXRlQXJyYXlzKHRoaXMuc3Vycm91bmRpbmdDb29yZHMpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3Vycm91bmRpbmdDb29yZHMpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc2hpcHMpO1xuICB9XG5cbiAgX2dlbmVyYXRlU2hpcChsZW5ndGgsIHhfY29vcmQgPSBudWxsLCB5X2Nvb3JkID0gbnVsbCkge1xuICAgIGNvbnN0IHsgY29vcmRzLCBzdXJyb3VuZGluZ0Nvb3JkcyB9ID0gdGhpcy5fZ2VuZXJhdGVDb29yZChcbiAgICAgIGxlbmd0aCxcbiAgICAgIHhfY29vcmQsXG4gICAgICB5X2Nvb3JkXG4gICAgKTtcbiAgICByZXR1cm4ge1xuICAgICAgY29vcmRzLFxuICAgICAgc3Vycm91bmRpbmdDb29yZHMsXG4gICAgICBzaGlwOiBuZXcgU2hpcChsZW5ndGgpLFxuICAgIH07XG4gIH1cblxuICBfZ2VuZXJhdGVDb29yZChsZW5ndGgsIHhfY29vcmQgPSBudWxsLCB5X2Nvb3JkID0gbnVsbCkge1xuICAgIGxldCB4ID0geF9jb29yZCA9PT0gbnVsbCA/IHRoaXMuX2dlbmVyYXRlUmFuZG9tTnVtYmVyKCkgOiB4X2Nvb3JkO1xuICAgIGxldCB5ID0geV9jb29yZCA9PT0gbnVsbCA/IHRoaXMuX2dlbmVyYXRlUmFuZG9tTnVtYmVyKCkgOiB5X2Nvb3JkO1xuICAgIGNvbnN0IG9yaWVudGF0aW9uWCA9IE1hdGgucmFuZG9tKCkgPj0gMC41O1xuICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDA7XG5cbiAgICB3aGlsZSAoYXR0ZW1wdHMgPCBtYXhBdHRlbXB0cykge1xuICAgICAgYXR0ZW1wdHMrKztcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5faXNWYWxpZENvb3JkKHgsIHksIGxlbmd0aCwgb3JpZW50YXRpb25YKSAmJlxuICAgICAgICAhdGhpcy5fcHJlZGljdENvbGxpc2lvbldpdGhDdXJyZW50Q29vcmRzKFxuICAgICAgICAgIG9yaWVudGF0aW9uWCA/IFwieFwiIDogXCJ5XCIsXG4gICAgICAgICAgeCxcbiAgICAgICAgICB5LFxuICAgICAgICAgIGxlbmd0aFxuICAgICAgICApICYmXG4gICAgICAgICF0aGlzLl9wcmVkaWN0Q29sbGlzaW9uV2l0aFN1cnJvdW5kaW5nQ29vcmRzKFxuICAgICAgICAgIG9yaWVudGF0aW9uWCA/IFwieFwiIDogXCJ5XCIsXG4gICAgICAgICAgeCxcbiAgICAgICAgICB5LFxuICAgICAgICAgIGxlbmd0aFxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB4ID0gdGhpcy5fZ2VuZXJhdGVSYW5kb21OdW1iZXIoKTtcbiAgICAgIHkgPSB0aGlzLl9nZW5lcmF0ZVJhbmRvbU51bWJlcigpO1xuICAgIH1cblxuICAgIGlmIChhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHRvIGdlbmVyYXRlIHZhbGlkIGNvb3JkaW5hdGVzIGFmdGVyICR7bWF4QXR0ZW1wdHN9IGF0dGVtcHRzYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb29yZHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb29yZHMucHVzaChbeCwgeV0pO1xuICAgICAgdGhpcy5jdXJyZW50Q29vcmRzLnB1c2goW3gsIHldKTtcbiAgICAgIGlmIChvcmllbnRhdGlvblgpIHtcbiAgICAgICAgeCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeSsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN1cnJvdW5kaW5nQ29vcmRzID0gdGhpcy5fZ2V0U3Vycm91bmRpbmdDb29yZHMoXG4gICAgICBjb29yZHMsXG4gICAgICBsZW5ndGgsXG4gICAgICBvcmllbnRhdGlvblhcbiAgICApO1xuICAgIHRoaXMuc3Vycm91bmRpbmdDb29yZHMucHVzaCguLi5zdXJyb3VuZGluZ0Nvb3Jkcyk7XG5cbiAgICByZXR1cm4geyBjb29yZHMsIHN1cnJvdW5kaW5nQ29vcmRzIH07XG4gIH1cblxuICBfZ2V0U3Vycm91bmRpbmdDb29yZHMoY29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb25YKSB7XG4gICAgY29uc3Qgc3VyQ29vcmRBcnJheSA9IFtdO1xuICAgIHN1ckNvb3JkQXJyYXkucHVzaCh0aGlzLl9nZXRVcHBlclJvd0Nvb3Jkcyhjb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvblgpKTtcbiAgICBzdXJDb29yZEFycmF5LnB1c2godGhpcy5fZ2V0Qm90dG9tUm93Q29vcmRzKGNvb3JkLCBsZW5ndGgsIG9yaWVudGF0aW9uWCkpO1xuICAgIHN1ckNvb3JkQXJyYXkucHVzaCh0aGlzLl9nZXRSaWdodENvb3Jkcyhjb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvblgpKTtcbiAgICBzdXJDb29yZEFycmF5LnB1c2godGhpcy5fZ2V0TGVmdENvb3Jkcyhjb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvblgpKTtcblxuICAgIHJldHVybiBzdXJDb29yZEFycmF5LmZsYXQoKTtcbiAgfVxuXG4gIF9nZXRVcHBlclJvd0Nvb3Jkcyhjb29yZHMsIGxlbmd0aCwgb3JpZW50YXRpb25YKSB7XG4gICAgY29uc3QgdXBwZXJSb3cgPSBbXTtcbiAgICBsZXQgW3hfY29vcmQsIHlfY29vcmRdID0gY29vcmRzWzBdO1xuXG4gICAgeV9jb29yZC0tO1xuICAgIHhfY29vcmQtLTtcblxuICAgIGxldCB1cHBlclJvd0xlbmd0aCA9IG9yaWVudGF0aW9uWCA/IGxlbmd0aCArIDIgOiAzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXBwZXJSb3dMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX2lzV2l0aGluQm91bmRzKFt4X2Nvb3JkLCB5X2Nvb3JkXSkpIHtcbiAgICAgICAgdXBwZXJSb3cucHVzaChbeF9jb29yZCwgeV9jb29yZF0pO1xuICAgICAgfVxuICAgICAgeF9jb29yZCsrO1xuICAgIH1cblxuICAgIHJldHVybiB1cHBlclJvdztcbiAgfVxuXG4gIF9nZXRCb3R0b21Sb3dDb29yZHMoY29vcmRzLCBsZW5ndGgsIG9yaWVudGF0aW9uWCkge1xuICAgIGNvbnN0IGJvdHRvbVJvdyA9IFtdO1xuICAgIGxldCBbeF9jb29yZCwgeV9jb29yZF0gPSBjb29yZHNbbGVuZ3RoIC0gMV07XG5cbiAgICB5X2Nvb3JkKys7XG4gICAgeF9jb29yZCsrO1xuXG4gICAgbGV0IGJvdHRvbVJvd0xlbmd0aCA9IG9yaWVudGF0aW9uWCA/IGxlbmd0aCArIDIgOiAzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm90dG9tUm93TGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9pc1dpdGhpbkJvdW5kcyhbeF9jb29yZCwgeV9jb29yZF0pKSB7XG4gICAgICAgIGJvdHRvbVJvdy5wdXNoKFt4X2Nvb3JkLCB5X2Nvb3JkXSk7XG4gICAgICB9XG4gICAgICB4X2Nvb3JkLS07XG4gICAgfVxuICAgIHJldHVybiBib3R0b21Sb3c7XG4gIH1cblxuICBfZ2V0UmlnaHRDb29yZHMoY29vcmRzLCBsZW5ndGgsIG9yaWVudGF0aW9uWCkge1xuICAgIGNvbnN0IHJpZ2h0ID0gW107XG4gICAgbGV0IFt4X2Nvb3JkLCB5X2Nvb3JkXSA9IGNvb3Jkc1tsZW5ndGggLSAxXTtcbiAgICB4X2Nvb3JkKys7XG5cbiAgICBsZXQgcmlnaHRMZW5ndGggPSBvcmllbnRhdGlvblggPyAxIDogbGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmlnaHRMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX2lzV2l0aGluQm91bmRzKFt4X2Nvb3JkLCB5X2Nvb3JkXSkpIHtcbiAgICAgICAgcmlnaHQucHVzaChbeF9jb29yZCwgeV9jb29yZF0pO1xuICAgICAgfVxuICAgICAgeV9jb29yZC0tO1xuICAgIH1cblxuICAgIHJldHVybiByaWdodDtcbiAgfVxuXG4gIF9nZXRMZWZ0Q29vcmRzKGNvb3JkcywgbGVuZ3RoLCBvcmllbnRhdGlvblgpIHtcbiAgICBjb25zdCBsZWZ0ID0gW107XG4gICAgbGV0IHhfY29vcmQ7XG4gICAgbGV0IHlfY29vcmQ7XG4gICAgaWYgKG9yaWVudGF0aW9uWCkge1xuICAgICAgW3hfY29vcmQsIHlfY29vcmRdID0gY29vcmRzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBbeF9jb29yZCwgeV9jb29yZF0gPSBjb29yZHNbbGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIHhfY29vcmQtLTtcblxuICAgIGxldCBsZWZ0TGVuZ3RoID0gb3JpZW50YXRpb25YID8gMSA6IGxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlZnRMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX2lzV2l0aGluQm91bmRzKFt4X2Nvb3JkLCB5X2Nvb3JkXSkpIHtcbiAgICAgICAgbGVmdC5wdXNoKFt4X2Nvb3JkLCB5X2Nvb3JkXSk7XG4gICAgICB9XG4gICAgICB5X2Nvb3JkLS07XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZnQ7XG4gIH1cblxuICBfcHJlZGljdENvbGxpc2lvbldpdGhDdXJyZW50Q29vcmRzKG9yaWFudGF0aW9uLCB4LCB5LCBsZW5ndGgpIHtcbiAgICBjb25zdCB0ZW1wQXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdGVtcEFyci5wdXNoKFt4LCB5XSk7XG4gICAgICBpZiAob3JpYW50YXRpb24gPT09IFwieFwiKSB4Kys7XG4gICAgICBlbHNlIHkrKztcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGFycmF5IG9mIHRlbXBBcnIpIHtcbiAgICAgIGlmICh0aGlzLl9oYXNDb29yZENvbGxpc2lvbihhcnJheSwgdGhpcy5jdXJyZW50Q29vcmRzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgX3ByZWRpY3RDb2xsaXNpb25XaXRoU3Vycm91bmRpbmdDb29yZHMob3JpYW50YXRpb24sIHgsIHksIGxlbmd0aCkge1xuICAgIGNvbnN0IHRlbXBBcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB0ZW1wQXJyLnB1c2goW3gsIHldKTtcbiAgICAgIGlmIChvcmlhbnRhdGlvbiA9PT0gXCJ4XCIpIHgrKztcbiAgICAgIGVsc2UgeSsrO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgYXJyYXkgb2YgdGVtcEFycikge1xuICAgICAgaWYgKHRoaXMuX2hhc0Nvb3JkQ29sbGlzaW9uKGFycmF5LCB0aGlzLnN1cnJvdW5kaW5nQ29vcmRzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgX2lzV2l0aGluQm91bmRzKGNvb3JkKSB7XG4gICAgY29uc3QgW3hfY29vcmQsIHlfY29vcmRdID0gY29vcmQ7XG4gICAgcmV0dXJuIHhfY29vcmQgPj0gMCAmJiB4X2Nvb3JkIDwgMTAgJiYgeV9jb29yZCA+PSAwICYmIHlfY29vcmQgPCAxMDtcbiAgfVxuXG4gIF9pc1ZhbGlkQ29vcmQoeCwgeSwgbGVuZ3RoLCBvcmllbnRhdGlvblgpIHtcbiAgICBpZiAob3JpZW50YXRpb25YKSB7XG4gICAgICByZXR1cm4geCArIGxlbmd0aCA8PSAxMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHkgKyBsZW5ndGggPD0gMTA7XG4gICAgfVxuICB9XG5cbiAgX2dlbmVyYXRlUmFuZG9tTnVtYmVyKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIH1cblxuICBfaGFzQ29vcmRDb2xsaXNpb24oY29vcmQsIG90aGVyQ29vcmQpIHtcbiAgICByZXR1cm4gb3RoZXJDb29yZC5zb21lKChleGlzdGluZ0Nvb3JkKSA9PlxuICAgICAgYXJyYXlzRXF1YWwoZXhpc3RpbmdDb29yZCwgY29vcmQpXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcnJheXNFcXVhbChhcnIxLCBhcnIyKSB7XG4gIGlmIChhcnIxLmxlbmd0aCAhPT0gYXJyMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGFycjEuZXZlcnkoKGVsZW1lbnQsIGluZGV4KSA9PiBlbGVtZW50ID09PSBhcnIyW2luZGV4XSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleG9mSXRlbUluQXJyYXkoYXJyYXksIGl0ZW0pIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJheXNFcXVhbChhcnJheVtpXSwgaXRlbSkpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5mdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVBcnJheXMoYXJyYXlzKSB7XG4gIGNvbnN0IHVuaXF1ZUFycmF5cyA9IG5ldyBTZXQoYXJyYXlzLm1hcChKU09OLnN0cmluZ2lmeSkpO1xuICByZXR1cm4gQXJyYXkuZnJvbSh1bmlxdWVBcnJheXMpLm1hcChKU09OLnBhcnNlKTtcbn1cblxuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi4vZ2FtZWJvYXJkL2dhbWVib2FyZC1jbGFzc1wiO1xuXG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBuYW1lKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICB9XG59XG5cbmV4cG9ydCB7IFBsYXllciB9O1xuIiwiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMubnVtYmVyX2hpdCA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gIH1cbiAgZ2V0U3RhdHVzKCkge1xuICAgIHJldHVybiB7IGxlbmd0aDogdGhpcy5sZW5ndGgsIGhpdDogdGhpcy5udW1iZXJfaGl0LCBzdW5rOiB0aGlzLnN1bmsgfTtcbiAgfVxuICBoaXQoKSB7XG4gICAgaWYgKCF0aGlzLnN1bmspIHtcbiAgICAgIHRoaXMubnVtYmVyX2hpdCsrO1xuICAgICAgdGhpcy5zdW5rID0gdGhpcy5pc1N1bmsoKTtcbiAgICB9XG4gIH1cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLm51bWJlcl9oaXQgPT09IHRoaXMubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCB7IFNoaXAgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgaW5pdEdhbWUgfSBmcm9tIFwiLi9nYW1lLWxvZ2ljL2dhbWUtbG9naWNcIjtcblxuLy8gaW5pdEdhbWUoXCJodW1hblwiLCBcImh1bWFuXCIpO1xuaW5pdEdhbWUoXG4gIHsgdHlwZTogXCJodW1hblwiLCBuYW1lOiBcInBsYXllci0xXCIgfSxcbiAgeyB0eXBlOiBcImh1bWFuXCIsIG5hbWU6IFwicGxheWVyLTJcIiB9XG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9