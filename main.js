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
  min-height: 100vh;
  background: linear-gradient(90deg, #1a78ae, #431dd9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
  color: white;
  text-transform: uppercase;
  font-family: "Arial", sans-serif;
  transition: background 0.5s ease;
}

/* Title Styling */
h1 {
  font-size: 3em;
  letter-spacing: 0.1em;
  margin-bottom: 0.5em;
  transition: color 0.3s ease;
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
  transition: background 0.3s ease, transform 0.3s ease;
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
  overflow: visible;
  position: relative;
  transition: transform 0.3s ease, border-color 0.3s ease;
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
  transition: background-color 0.3s ease, transform 0.3s ease;
  position: relative;
  overflow: visible;
}

.box:hover {
  background-color: #1a78ae;
  transform: scale(1.05);
}

/* Ship Styling */
.ship {
  background-color: #89acd7;
  border-radius: 2px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.ship.hit {
  cursor: default;
  font-size: 1.04em;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.ship.sunk {
  background-color: gray;
  color: white;
  opacity: 0.8;
  border: 2px solid red;
  transition: background-color 0.3s ease, opacity 0.3s ease,
    border-color 0.3s ease;
}

/* Missed Shot Styling */
.missed {
  cursor: default;
  background-color: rgba(183, 189, 183, 0.3);
  transition: background-color 0.3s ease, opacity 0.3s ease;
}

.surround {
  cursor: default;
  background-color: rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

/* Player Text Styling */
.player-1-text,
.player-2-text {
  color: white;
  text-transform: uppercase;
  font-size: 1.5em;
  transition: color 0.3s ease;
}

/* Utility Classes */
.half-opacity {
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

/* Coordinate Number Styling */
.coord-num-up {
  position: absolute;
  top: -2em;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  padding: 2px 5px;
  font-size: 1em;
  border-radius: 3px;
  z-index: 10;
}

.coord-num-left {
  position: absolute;
  top: 50%;
  left: -2em;
  transform: translateY(-50%);
  color: white;
  padding: 2px 5px;
  font-size: 1em;
  border-radius: 3px;
  z-index: 10;
}

.buttons {
  display: flex;
  width: 90%;
  justify-content: center;
  gap: 10em;
  margin-bottom: 2em;
}

/* Button Styling */
.btn {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  touch-action: manipulation;
  transition: box-shadow 0.2s ease, transform 0.2s ease,
    background-color 0.2s ease, color 0.2s ease;
}

.btn:active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}

.btn:hover {
  transform: translateY(-2px);
  background-color: #ececec;
  color: #000;
}

@media (min-width: 768px) {
  .btn {
    padding: 0.25em 0.75em;
  }
}

/* Hidden Styling */
.hidden {
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.hidden.show {
  opacity: 1;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* General Reset */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Body Styling */\nbody {\n  min-height: 100vh;\n  background: linear-gradient(90deg, #1a78ae, #431dd9);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2em;\n  color: white;\n  text-transform: uppercase;\n  font-family: \"Arial\", sans-serif;\n  transition: background 0.5s ease;\n}\n\n/* Title Styling */\nh1 {\n  font-size: 3em;\n  letter-spacing: 0.1em;\n  margin-bottom: 0.5em;\n  transition: color 0.3s ease;\n}\n\n/* Board Containers */\n.boards {\n  width: 90%;\n  height: 70%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.2);\n  padding: 1em;\n  border-radius: 10px;\n  transition: background 0.3s ease, transform 0.3s ease;\n}\n\n/* Player Containers */\n.player-1-container,\n.player-2-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2em;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Board Styling */\n.player-1-board,\n.player-2-board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  align-items: center;\n  border: 2px solid white;\n  width: 500px;\n  height: 500px;\n  background-color: #083358;\n  border-radius: 8px;\n  overflow: visible;\n  position: relative;\n  transition: transform 0.3s ease, border-color 0.3s ease;\n}\n\n.board-label {\n  position: absolute;\n  top: -30px;\n  font-size: 1.5em;\n  color: white;\n}\n\n/* Box Styling */\n.box {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #ffffff38;\n  cursor: crosshair;\n  transition: background-color 0.3s ease, transform 0.3s ease;\n  position: relative;\n  overflow: visible;\n}\n\n.box:hover {\n  background-color: #1a78ae;\n  transform: scale(1.05);\n}\n\n/* Ship Styling */\n.ship {\n  background-color: #89acd7;\n  border-radius: 2px;\n  transition: background-color 0.3s ease, transform 0.3s ease;\n}\n\n.ship.hit {\n  cursor: default;\n  font-size: 1.04em;\n  transition: background-color 0.3s ease, border-color 0.3s ease;\n}\n\n.ship.sunk {\n  background-color: gray;\n  color: white;\n  opacity: 0.8;\n  border: 2px solid red;\n  transition: background-color 0.3s ease, opacity 0.3s ease,\n    border-color 0.3s ease;\n}\n\n/* Missed Shot Styling */\n.missed {\n  cursor: default;\n  background-color: rgba(183, 189, 183, 0.3);\n  transition: background-color 0.3s ease, opacity 0.3s ease;\n}\n\n.surround {\n  cursor: default;\n  background-color: rgba(0, 0, 0, 0.1);\n  transition: background-color 0.3s ease;\n}\n\n/* Player Text Styling */\n.player-1-text,\n.player-2-text {\n  color: white;\n  text-transform: uppercase;\n  font-size: 1.5em;\n  transition: color 0.3s ease;\n}\n\n/* Utility Classes */\n.half-opacity {\n  opacity: 0.5;\n  transition: opacity 0.3s ease;\n}\n\n/* Coordinate Number Styling */\n.coord-num-up {\n  position: absolute;\n  top: -2em;\n  left: 50%;\n  transform: translateX(-50%);\n  color: white;\n  padding: 2px 5px;\n  font-size: 1em;\n  border-radius: 3px;\n  z-index: 10;\n}\n\n.coord-num-left {\n  position: absolute;\n  top: 50%;\n  left: -2em;\n  transform: translateY(-50%);\n  color: white;\n  padding: 2px 5px;\n  font-size: 1em;\n  border-radius: 3px;\n  z-index: 10;\n}\n\n.buttons {\n  display: flex;\n  width: 90%;\n  justify-content: center;\n  gap: 10em;\n  margin-bottom: 2em;\n}\n\n/* Button Styling */\n.btn {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-decoration: none;\n  text-transform: uppercase;\n  color: #000;\n  cursor: pointer;\n  border: 3px solid;\n  padding: 0.25em 0.5em;\n  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,\n    5px 5px 0px 0px;\n  position: relative;\n  user-select: none;\n  touch-action: manipulation;\n  transition: box-shadow 0.2s ease, transform 0.2s ease,\n    background-color 0.2s ease, color 0.2s ease;\n}\n\n.btn:active {\n  box-shadow: 0px 0px 0px 0px;\n  top: 5px;\n  left: 5px;\n}\n\n.btn:hover {\n  transform: translateY(-2px);\n  background-color: #ececec;\n  color: #000;\n}\n\n@media (min-width: 768px) {\n  .btn {\n    padding: 0.25em 0.75em;\n  }\n}\n\n/* Hidden Styling */\n.hidden {\n  opacity: 0;\n  transition: opacity 0.5s ease;\n  pointer-events: none;\n}\n\n.hidden.show {\n  opacity: 1;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/dom-manip/dom-buttons.js":
/*!**************************************!*\
  !*** ./src/dom-manip/dom-buttons.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initButtons: () => (/* binding */ initButtons),
/* harmony export */   playAgain: () => (/* binding */ playAgain)
/* harmony export */ });
/* harmony import */ var _game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game-logic/game-logic */ "./src/game-logic/game-logic.js");
/* harmony import */ var _dom_manip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-manip */ "./src/dom-manip/dom-manip.js");



function initButtons() {
  const buttonContainer = document.querySelector(".buttons");
  // reset
  buttonContainer.innerHTML = "";
  // create
  setRandomButton();
  startButton();
}
function setRandomButton() {
  const buttonContainer = document.querySelector(".buttons");

  const btn = document.createElement("button");
  btn.textContent = "Randomise 🔄";
  btn.classList.add("btn");
  btn.classList.add("random-btn");

  const player = (0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getPlayers)()[0];
  const currentPlayer = player.player;

  btn.addEventListener("click", () => {
    (0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.reInitPlayer)("human", "player-1");
  });
  buttonContainer.appendChild(btn);
}

function startButton() {
  const buttonContainer = document.querySelector(".buttons");
  const randomBtn = document.querySelector(".random-btn");
  const btn = document.createElement("button");
  btn.textContent = "Start";
  btn.classList.add("btn");
  btn.classList.add("start-btn");

  btn.addEventListener("click", () => {
    // start the game TODO
    (0,_dom_manip__WEBPACK_IMPORTED_MODULE_1__.startGame)();
    // btn.remove();
    // randomBtn.remove();
    btn.classList.add("hidden");
    randomBtn.classList.add("hidden");
    buttonContainer.classList.add("hidden");
  });

  buttonContainer.appendChild(btn);
}

function playAgain() {
  const buttonContainer = document.querySelector(".buttons");
  // reset
  buttonContainer.innerHTML = "";

  const btn = document.createElement("button");
  btn.textContent = "Play Again";
  btn.classList.add("btn");
  btn.classList.add("play-again-btn");

  btn.addEventListener("click", () => {
    (0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.initGame)(
      { type: "human", name: "player-1" },
      { type: "ai", name: "player-2" }
    );
    btn.classList.add("hidden");
    initButtons();
  });

  buttonContainer.appendChild(btn);
  buttonContainer.classList.remove("hidden");
}




/***/ }),

/***/ "./src/dom-manip/dom-manip.js":
/*!************************************!*\
  !*** ./src/dom-manip/dom-manip.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initDom: () => (/* binding */ initDom),
/* harmony export */   populateGameboards: () => (/* binding */ populateGameboards),
/* harmony export */   renderGameboardData: () => (/* binding */ renderGameboardData),
/* harmony export */   setBeforeGameState: () => (/* binding */ setBeforeGameState),
/* harmony export */   startGame: () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game-logic/game-logic */ "./src/game-logic/game-logic.js");
/* harmony import */ var _dom_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-buttons */ "./src/dom-manip/dom-buttons.js");


function initDom() {
  populateBoard();
}

function populateBoard() {
  const boards = document.querySelectorAll(".board");

  boards.forEach((board, index) => {
    board.innerHTML = "";
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
        if (index) {
          div.addEventListener("click", handleDivClick);
        }
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

async function handleDivClick(e) {
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
    (0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.changeCurrentPlayer)();
    populateGameboards();
    renderCurrentPlayerDisplay();
    // change the current player
    renderHeaderInfo((0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getCurrentPlayer)(), "is attacking...");
    const nonAIPlayer = (0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getPlayers)()[0];
    const playerGameboard = nonAIPlayer.player.gameboard;
    let aiArr = [...(0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getPlayers)()[0].board];
    aiArr.forEach((div) => {
      div.removeEventListener("click", handleDivClick);
    });
    await aiAttackWithDelay(playerGameboard);
    if (playerGameboard.hasAllShipsBeenSunk()) return;
  }

  populateGameboards();
  await new Promise((resolve) => setTimeout(resolve, 300));
  renderCurrentPlayerDisplay();
  // populateGameboards();
}

async function aiAttackWithDelay(playerGameboard) {
  while (true) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (!aiAttack()) {
      if (playerGameboard.hasAllShipsBeenSunk()) {
        console.log("winner is", (0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getCurrentPlayer)());
        setEndGameState();
        return;
      }
      (0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.changeCurrentPlayer)();
      renderHeaderInfo((0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getCurrentPlayer)(), "is attacking...");
      break;
    }
    // populateGameboards();
    renderCurrentPlayerDisplay();
  }
}

// function aiAttack() {
//   // get the board ai is attacking
//   const nonAIPlayer = getPlayers()[0];
//   const playerGameboard = nonAIPlayer.player.gameboard;

//   const attackSequence = getAttackSequence();
//   attackSequence.forEach((coord) => {
//     if (!playerGameboard.receiveAttack(coord)) {
//       return false;
//     }
//   });

//   return true;

//   // if (!playerGameboard.receiveAttack(coord)) {
//   //   changeCurrentPlayer();
//   //   renderHeaderInfo(getCurrentPlayer(), "is attacking...");
//   //   return;
//   // }
// }

// function getAttackSequence() {
//   // get the board ai is attacking
//   const nonAIPlayer = getPlayers()[0];
//   const playerGameboard = nonAIPlayer.player.gameboard;
//   const playerGameboardCurrentCoords = playerGameboard.currentCoords;

//   const attackSequence = [];

//   let coord = getAIAttackCoords();
//   attackSequence.push(coord);

//   console.log(coord);
//   console.log(playerGameboardCurrentCoords);
//   while (hasCoordCollision(coord, playerGameboardCurrentCoords)) {
//     coord = getAIAttackCoords();
//     attackSequence.push(coord);
//   }

//   return attackSequence;
// }

// function getAIAttackCoords() {
//   // get the board ai is attacking
//   const nonAIPlayer = getPlayers()[0];
//   const playerGameboard = nonAIPlayer.player.gameboard;
//   // data to check against coords
//   const hitShots = playerGameboard.hitShots;
//   const missedShots = playerGameboard.missedShots;
//   const surroundingShots = playerGameboard.surroundingShots;

//   // generate x and y coord
//   let x_coord = generateRandomNumber();
//   let y_coord = generateRandomNumber();

//   while (
//     hasCoordCollision([x_coord, y_coord], hitShots) ||
//     hasCoordCollision([x_coord, y_coord], missedShots) ||
//     hasCoordCollision([x_coord, y_coord], surroundingShots)
//   ) {
//     x_coord = generateRandomNumber();
//     y_coord = generateRandomNumber();
//   }

//   const coord = [x_coord, y_coord];

//   return coord;
// }

function aiAttack() {
  // get the board ai is attacking
  const nonAIPlayer = (0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getPlayers)()[0];
  const playerGameboard = nonAIPlayer.player.gameboard;

  if (playerGameboard.hasAllShipsBeenSunk()) {
    console.log("winner is", (0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getCurrentPlayer)());
    return false;
  }
  // data to check against coords
  const hitShots = playerGameboard.hitShots;
  const missedShots = playerGameboard.missedShots;
  const surroundingShots = playerGameboard.surroundingShots;

  // generate x and y coord
  let x_coord = generateRandomNumber();
  let y_coord = generateRandomNumber();

  while (
    hasCoordCollision([x_coord, y_coord], hitShots) ||
    hasCoordCollision([x_coord, y_coord], missedShots) ||
    hasCoordCollision([x_coord, y_coord], surroundingShots)
  ) {
    x_coord = generateRandomNumber();
    y_coord = generateRandomNumber();
  }

  const coord = [x_coord, y_coord];

  const isSuccessful = playerGameboard.receiveAttack(coord);

  const currentShip = playerGameboard._getShip([x_coord, y_coord]);

  if (currentShip && currentShip.sunk) {
    const surroundingCoords = playerGameboard._getShipSurroundingCoords([
      x_coord,
      y_coord,
    ]);
    playerGameboard.surroundingShots.push(...surroundingCoords);
  }

  return isSuccessful;
}

function hasCoordCollision(coord, otherCoord) {
  return otherCoord.some((existingCoord) => {
    // console.log(arraysEqual(existingCoord, coord));
    return arraysEqual(existingCoord, coord);
  });
}
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((element, index) => element === arr2[index]);
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
  renderPlayerNames(players);
  renderHeaderInfo((0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getCurrentPlayer)(), "is attacking...");

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
  populateGameboards();
}

function setBoardOpacity(shouldSetBothBoard = false) {
  const currentPlayer = (0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getCurrentPlayer)();
  const nonCurrentPlayer = (0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getOpposingPlayer)();
  const opposinglayerBoardDiv = document.querySelector(
    `.${nonCurrentPlayer.name}-board`
  );
  const currentPlayerBoardDiv = document.querySelector(
    `.${currentPlayer.name}-board`
  );
  opposinglayerBoardDiv.classList.remove("half-opacity");
  currentPlayerBoardDiv.classList.remove("half-opacity");
  if (shouldSetBothBoard) {
    opposinglayerBoardDiv.classList.add("half-opacity");
  }

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

  // populate play again button
  (0,_dom_buttons__WEBPACK_IMPORTED_MODULE_1__.playAgain)();
}

function setBeforeGameState() {
  const nonCurrentPlayerBoard = [...(0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getNonCurrentPlayerDomBoard)()];
  const currentPlayerBoard = [...(0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getCurrentPlayerDomBoard)()];
  setPlayerBoardEventListener(currentPlayerBoard, true);
  setPlayerBoardEventListener(nonCurrentPlayerBoard, true);
  setBoardOpacity(true);
}

function startGame() {
  const nonCurrentPlayerBoard = [...(0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getNonCurrentPlayerDomBoard)()];
  const currentPlayerBoard = [...(0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.getCurrentPlayerDomBoard)()];
  setPlayerBoardEventListener(currentPlayerBoard, false);
  setPlayerBoardEventListener(nonCurrentPlayerBoard, false);
  setBoardOpacity(false);
}

function setPlayerBoardEventListener(board, shouldRemoveEventListener) {
  console.log(board);
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
    const playerBoard = Array.from(player.board);
    playerBoard.forEach((element) => {
      element.classList.remove("ship");
    });
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
      console.log(div);
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
function generateRandomNumber() {
  return Math.floor(Math.random() * 10);
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
/* harmony export */   reInitPlayer: () => (/* binding */ reInitPlayer),
/* harmony export */   setGameState: () => (/* binding */ setGameState)
/* harmony export */ });
/* harmony import */ var _player_player_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../player/player-class */ "./src/player/player-class.js");
/* harmony import */ var _dom_manip_dom_manip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-manip/dom-manip */ "./src/dom-manip/dom-manip.js");
/* harmony import */ var _dom_manip_dom_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-manip/dom-buttons */ "./src/dom-manip/dom-buttons.js");




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
  // console.log(players);
}
function reInitPlayer(player1Type, player1Name) {
  players[0] = {
    player: createPlayer(player1Type, player1Name),
    board: getBoardsDOM(0),
  };
  initGameState();
  (0,_dom_manip_dom_manip__WEBPACK_IMPORTED_MODULE_1__.populateGameboards)();
  (0,_dom_manip_dom_manip__WEBPACK_IMPORTED_MODULE_1__.setBeforeGameState)();
  console.log(players);
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
  (0,_dom_manip_dom_manip__WEBPACK_IMPORTED_MODULE_1__.setBeforeGameState)();
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

    this.surroundingCoords = removeDuplicateArrays(this.surroundingCoords);
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
/* harmony import */ var _dom_manip_dom_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-manip/dom-buttons */ "./src/dom-manip/dom-buttons.js");




// initGame("human", "human");
(0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_1__.initGame)({ type: "human", name: "player-1" }, { type: "ai", name: "player-2" });
(0,_dom_manip_dom_buttons__WEBPACK_IMPORTED_MODULE_2__.initButtons)();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdGQUF3RixNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxPQUFPLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLFlBQVksT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLE9BQU8sT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFN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QTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFCOzs7Ozs7Ozs7Ozs7Ozs7O0FDN1NvQzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaUVBQVM7QUFDbEM7QUFDQTs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7OztBQ1ZsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVnQjs7Ozs7OztVQ3BCaEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUM2QjtBQUNHOztBQUV0RDtBQUNBLGdFQUFRLEdBQUcsaUNBQWlDLElBQUksOEJBQThCO0FBQzlFLG1FQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLW1hbmlwL2RvbS1idXR0b25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLW1hbmlwL2RvbS1tYW5pcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUtbG9naWMvZ2FtZS1sb2dpYy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC9nYW1lYm9hcmQtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIvcGxheWVyLWNsYXNzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC9zaGlwLWNsYXNzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEdlbmVyYWwgUmVzZXQgKi9cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIEJvZHkgU3R5bGluZyAqL1xuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxYTc4YWUsICM0MzFkZDkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzIGVhc2U7XG59XG5cbi8qIFRpdGxlIFN0eWxpbmcgKi9cbmgxIHtcbiAgZm9udC1zaXplOiAzZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcbn1cblxuLyogQm9hcmQgQ29udGFpbmVycyAqL1xuLmJvYXJkcyB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuXG4vKiBQbGF5ZXIgQ29udGFpbmVycyAqL1xuLnBsYXllci0xLWNvbnRhaW5lcixcbi5wbGF5ZXItMi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIEJvYXJkIFN0eWxpbmcgKi9cbi5wbGF5ZXItMS1ib2FyZCxcbi5wbGF5ZXItMi1ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MzM1ODtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3JkZXItY29sb3IgMC4zcyBlYXNlO1xufVxuXG4uYm9hcmQtbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTMwcHg7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogQm94IFN0eWxpbmcgKi9cbi5ib3gge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmMzg7XG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLmJveDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTc4YWU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi8qIFNoaXAgU3R5bGluZyAqL1xuLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODlhY2Q3O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuXG4uc2hpcC5oaXQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGZvbnQtc2l6ZTogMS4wNGVtO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgYm9yZGVyLWNvbG9yIDAuM3MgZWFzZTtcbn1cblxuLnNoaXAuc3VuayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC44O1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZSxcbiAgICBib3JkZXItY29sb3IgMC4zcyBlYXNlO1xufVxuXG4vKiBNaXNzZWQgU2hvdCBTdHlsaW5nICovXG4ubWlzc2VkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MywgMTg5LCAxODMsIDAuMyk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cblxuLnN1cnJvdW5kIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xufVxuXG4vKiBQbGF5ZXIgVGV4dCBTdHlsaW5nICovXG4ucGxheWVyLTEtdGV4dCxcbi5wbGF5ZXItMi10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEuNWVtO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XG59XG5cbi8qIFV0aWxpdHkgQ2xhc3NlcyAqL1xuLmhhbGYtb3BhY2l0eSB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG59XG5cbi8qIENvb3JkaW5hdGUgTnVtYmVyIFN0eWxpbmcgKi9cbi5jb29yZC1udW0tdXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTJlbTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMnB4IDVweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5jb29yZC1udW0tbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IC0yZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAycHggNXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogOTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMGVtO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG5cbi8qIEJ1dHRvbiBTdHlsaW5nICovXG4uYnRuIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzAwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDNweCBzb2xpZDtcbiAgcGFkZGluZzogMC4yNWVtIDAuNWVtO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDBweCAwcHgsIDJweCAycHggMHB4IDBweCwgM3B4IDNweCAwcHggMHB4LCA0cHggNHB4IDBweCAwcHgsXG4gICAgNXB4IDVweCAwcHggMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2UsXG4gICAgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UsIGNvbG9yIDAuMnMgZWFzZTtcbn1cblxuLmJ0bjphY3RpdmUge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHg7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiA1cHg7XG59XG5cbi5idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmJ0biB7XG4gICAgcGFkZGluZzogMC4yNWVtIDAuNzVlbTtcbiAgfVxufVxuXG4vKiBIaWRkZW4gU3R5bGluZyAqL1xuLmhpZGRlbiB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmhpZGRlbi5zaG93IHtcbiAgb3BhY2l0eTogMTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsa0JBQWtCO0FBQ2xCO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsaUJBQWlCO0VBQ2pCLG9EQUFvRDtFQUNwRCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7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O0FBQ25CO0VBQ0UsVUFBVTtFQUNWLDZCQUE2QjtFQUM3QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR2VuZXJhbCBSZXNldCAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIEJvZHkgU3R5bGluZyAqL1xcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxYTc4YWUsICM0MzFkZDkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LWZhbWlseTogXFxcIkFyaWFsXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cyBlYXNlO1xcbn1cXG5cXG4vKiBUaXRsZSBTdHlsaW5nICovXFxuaDEge1xcbiAgZm9udC1zaXplOiAzZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXG59XFxuXFxuLyogQm9hcmQgQ29udGFpbmVycyAqL1xcbi5ib2FyZHMge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogNzAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG59XFxuXFxuLyogUGxheWVyIENvbnRhaW5lcnMgKi9cXG4ucGxheWVyLTEtY29udGFpbmVyLFxcbi5wbGF5ZXItMi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogQm9hcmQgU3R5bGluZyAqL1xcbi5wbGF5ZXItMS1ib2FyZCxcXG4ucGxheWVyLTItYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MzM1ODtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm9yZGVyLWNvbG9yIDAuM3MgZWFzZTtcXG59XFxuXFxuLmJvYXJkLWxhYmVsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTMwcHg7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBCb3ggU3R5bGluZyAqL1xcbi5ib3gge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmYzODtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLmJveDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE3OGFlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLyogU2hpcCBTdHlsaW5nICovXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg5YWNkNztcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbn1cXG5cXG4uc2hpcC5oaXQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgZm9udC1zaXplOiAxLjA0ZW07XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgYm9yZGVyLWNvbG9yIDAuM3MgZWFzZTtcXG59XFxuXFxuLnNoaXAuc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIG9wYWNpdHkgMC4zcyBlYXNlLFxcbiAgICBib3JkZXItY29sb3IgMC4zcyBlYXNlO1xcbn1cXG5cXG4vKiBNaXNzZWQgU2hvdCBTdHlsaW5nICovXFxuLm1pc3NlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MywgMTg5LCAxODMsIDAuMyk7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2U7XFxufVxcblxcbi5zdXJyb3VuZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXG59XFxuXFxuLyogUGxheWVyIFRleHQgU3R5bGluZyAqL1xcbi5wbGF5ZXItMS10ZXh0LFxcbi5wbGF5ZXItMi10ZXh0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcbn1cXG5cXG4vKiBVdGlsaXR5IENsYXNzZXMgKi9cXG4uaGFsZi1vcGFjaXR5IHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcbn1cXG5cXG4vKiBDb29yZGluYXRlIE51bWJlciBTdHlsaW5nICovXFxuLmNvb3JkLW51bS11cCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0yZW07XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAycHggNXB4O1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLmNvb3JkLW51bS1sZWZ0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogLTJlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDJweCA1cHg7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMGVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbn1cXG5cXG4vKiBCdXR0b24gU3R5bGluZyAqL1xcbi5idG4ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzAwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogM3B4IHNvbGlkO1xcbiAgcGFkZGluZzogMC4yNWVtIDAuNWVtO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAwcHggMHB4LCAycHggMnB4IDBweCAwcHgsIDNweCAzcHggMHB4IDBweCwgNHB4IDRweCAwcHggMHB4LFxcbiAgICA1cHggNXB4IDBweCAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2UsXFxuICAgIGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLCBjb2xvciAwLjJzIGVhc2U7XFxufVxcblxcbi5idG46YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweDtcXG4gIHRvcDogNXB4O1xcbiAgbGVmdDogNXB4O1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuYnRuIHtcXG4gICAgcGFkZGluZzogMC4yNWVtIDAuNzVlbTtcXG4gIH1cXG59XFxuXFxuLyogSGlkZGVuIFN0eWxpbmcgKi9cXG4uaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uaGlkZGVuLnNob3cge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdldFBsYXllcnMsIHJlSW5pdFBsYXllciwgaW5pdEdhbWUgfSBmcm9tIFwiLi4vZ2FtZS1sb2dpYy9nYW1lLWxvZ2ljXCI7XG5pbXBvcnQge1xuICBwb3B1bGF0ZUdhbWVib2FyZHMsXG4gIHJlbmRlckdhbWVib2FyZERhdGEsXG4gIHNldEJlZm9yZUdhbWVTdGF0ZSxcbiAgc3RhcnRHYW1lLFxufSBmcm9tIFwiLi9kb20tbWFuaXBcIjtcblxuZnVuY3Rpb24gaW5pdEJ1dHRvbnMoKSB7XG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uc1wiKTtcbiAgLy8gcmVzZXRcbiAgYnV0dG9uQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIC8vIGNyZWF0ZVxuICBzZXRSYW5kb21CdXR0b24oKTtcbiAgc3RhcnRCdXR0b24oKTtcbn1cbmZ1bmN0aW9uIHNldFJhbmRvbUJ1dHRvbigpIHtcbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b25zXCIpO1xuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi50ZXh0Q29udGVudCA9IFwiUmFuZG9taXNlIPCflIRcIjtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwicmFuZG9tLWJ0blwiKTtcblxuICBjb25zdCBwbGF5ZXIgPSBnZXRQbGF5ZXJzKClbMF07XG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIucGxheWVyO1xuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlSW5pdFBsYXllcihcImh1bWFuXCIsIFwicGxheWVyLTFcIik7XG4gIH0pO1xuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRCdXR0b24oKSB7XG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uc1wiKTtcbiAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYW5kb20tYnRuXCIpO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4udGV4dENvbnRlbnQgPSBcIlN0YXJ0XCI7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xuICBidG4uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWJ0blwiKTtcblxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyBzdGFydCB0aGUgZ2FtZSBUT0RPXG4gICAgc3RhcnRHYW1lKCk7XG4gICAgLy8gYnRuLnJlbW92ZSgpO1xuICAgIC8vIHJhbmRvbUJ0bi5yZW1vdmUoKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICByYW5kb21CdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfSk7XG5cbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bik7XG59XG5cbmZ1bmN0aW9uIHBsYXlBZ2FpbigpIHtcbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b25zXCIpO1xuICAvLyByZXNldFxuICBidXR0b25Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4udGV4dENvbnRlbnQgPSBcIlBsYXkgQWdhaW5cIjtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwicGxheS1hZ2Fpbi1idG5cIik7XG5cbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaW5pdEdhbWUoXG4gICAgICB7IHR5cGU6IFwiaHVtYW5cIiwgbmFtZTogXCJwbGF5ZXItMVwiIH0sXG4gICAgICB7IHR5cGU6IFwiYWlcIiwgbmFtZTogXCJwbGF5ZXItMlwiIH1cbiAgICApO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGluaXRCdXR0b25zKCk7XG4gIH0pO1xuXG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pO1xuICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbn1cblxuZXhwb3J0IHsgaW5pdEJ1dHRvbnMsIHBsYXlBZ2FpbiB9O1xuIiwiaW1wb3J0IHtcbiAgZ2V0UGxheWVycyxcbiAgY2hhbmdlQ3VycmVudFBsYXllcixcbiAgZ2V0Q3VycmVudFBsYXllcixcbiAgZ2V0T3Bwb3NpbmdQbGF5ZXIsXG4gIGdldEN1cnJlbnRQbGF5ZXJEb21Cb2FyZCxcbiAgZ2V0Tm9uQ3VycmVudFBsYXllckRvbUJvYXJkLFxuICBnZXRHYW1lU3RhdGUsXG4gIHNldEdhbWVTdGF0ZSxcbiAgcmVJbml0UGxheWVyLFxufSBmcm9tIFwiLi4vZ2FtZS1sb2dpYy9nYW1lLWxvZ2ljXCI7XG5pbXBvcnQgeyBwbGF5QWdhaW4gfSBmcm9tIFwiLi9kb20tYnV0dG9uc1wiO1xuZnVuY3Rpb24gaW5pdERvbSgpIHtcbiAgcG9wdWxhdGVCb2FyZCgpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUJvYXJkKCkge1xuICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkXCIpO1xuXG4gIGJvYXJkcy5mb3JFYWNoKChib2FyZCwgaW5kZXgpID0+IHtcbiAgICBib2FyZC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgY29uc3Qgcm93SW5kZXggPSBpO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGNvbHVtbkluZGV4ID0gajtcbiAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlRGl2KFwiYm94XCIpO1xuXG4gICAgICAgIGRpdi5kYXRhc2V0LnJvdyA9IHJvd0luZGV4O1xuICAgICAgICBkaXYuZGF0YXNldC5jb2x1bW4gPSBjb2x1bW5JbmRleDtcbiAgICAgICAgZGl2LmRhdGFzZXQucGxheWVyID0gaW5kZXg7XG5cbiAgICAgICAgLy8gZ2VuZXJhdGVDb29yZE51bXMoW3Jvd0luZGV4LCBjb2x1bW5JbmRleF0pO1xuICAgICAgICBpZiAocm93SW5kZXggPT09IDApIHtcbiAgICAgICAgICBjb25zdCBzcGFuID0gY3JlYXRlU3BhbihcImNvb3JkLW51bS11cFwiLCBjb2x1bW5JbmRleCk7XG4gICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2x1bW5JbmRleCA9PT0gMCkge1xuICAgICAgICAgIGNvbnN0IHNwYW4gPSBjcmVhdGVTcGFuKFwiY29vcmQtbnVtLWxlZnRcIiwgcm93SW5kZXgpO1xuICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgfVxuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICBpZiAoaW5kZXgpIHtcbiAgICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZURpdkNsaWNrKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUNvb3JkTnVtcyhkaXYpIHtcbiAgY29uc3QgZGl2Um93ID0gcGFyc2VJbnQoZGl2LmRhdGFzZXQucm93KTtcbiAgY29uc3QgZGl2Q29sdW1uID0gcGFyc2VJbnQoZGl2LmRhdGFzZXQuY29sdW1uKTtcbiAgaWYgKGRpdlJvdyA9PT0gMCAmJiBkaXZDb2x1bW4gPT09IDApIHtcbiAgICBjb25zdCBzcGFuMSA9IGNyZWF0ZVNwYW4oXCJjb29yZC1udW0tdXBcIiwgZGl2Q29sdW1uKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc3BhbjEpO1xuICAgIGNvbnN0IHNwYW4yID0gY3JlYXRlU3BhbihcImNvb3JkLW51bS1sZWZ0XCIsIGRpdlJvdyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHNwYW4yKTtcbiAgfSBlbHNlIGlmIChkaXZSb3cgPT09IDApIHtcbiAgICBjb25zdCBzcGFuID0gY3JlYXRlU3BhbihcImNvb3JkLW51bS11cFwiLCBkaXZDb2x1bW4pO1xuICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgfSBlbHNlIGlmIChkaXZDb2x1bW4gPT09IDApIHtcbiAgICBjb25zdCBzcGFuID0gY3JlYXRlU3BhbihcImNvb3JkLW51bS1sZWZ0XCIsIGRpdlJvdyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZURpdkNsaWNrKGUpIHtcbiAgLy8gaWYgaGl0IHNoaXAgaXMgc3VjY2VzZnVsXG4gIGlmIChoaXRTaGlwKGUudGFyZ2V0LmRhdGFzZXQpKSB7XG4gICAgLy8gY29udGludWUgcGxheWluZyB3aXRoIHRoZSBjdXJyZW50IHBsYXllclxuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBnZXRQbGF5ZXJzKClbcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5wbGF5ZXIpXTtcbiAgICAvLyBjaGVjayBpZiBhbnkgc2hpcCBpcyBzdW5rXG4gICAgY29uc3QgeF9jb29yZCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uKTtcbiAgICBjb25zdCB5X2Nvb3JkID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5yb3cpO1xuXG4gICAgY29uc3QgY3VycmVudFNoaXAgPSBjdXJyZW50UGxheWVyLnBsYXllci5nYW1lYm9hcmQuX2dldFNoaXAoW1xuICAgICAgeF9jb29yZCxcbiAgICAgIHlfY29vcmQsXG4gICAgXSk7XG4gICAgaWYgKGN1cnJlbnRTaGlwLnN1bmspIHtcbiAgICAgIGNvbnN0IHN1cnJvdW5kaW5nQ29vcmRzID1cbiAgICAgICAgY3VycmVudFBsYXllci5wbGF5ZXIuZ2FtZWJvYXJkLl9nZXRTaGlwU3Vycm91bmRpbmdDb29yZHMoW1xuICAgICAgICAgIHhfY29vcmQsXG4gICAgICAgICAgeV9jb29yZCxcbiAgICAgICAgXSk7XG4gICAgICBjdXJyZW50UGxheWVyLnBsYXllci5nYW1lYm9hcmQuc3Vycm91bmRpbmdTaG90cy5wdXNoKFxuICAgICAgICAuLi5zdXJyb3VuZGluZ0Nvb3Jkc1xuICAgICAgKTtcbiAgICAgIC8vIHJlbmRlckdhbWVib2FyZERhdGEoY3VycmVudFBsYXllciwgc3Vycm91bmRpbmdDb29yZHMsIFwi4paq77iPXCIsIFwic3Vycm91bmRcIik7XG4gICAgfVxuICAgIGlmIChjdXJyZW50UGxheWVyLnBsYXllci5nYW1lYm9hcmQuaGFzQWxsU2hpcHNCZWVuU3VuaygpKSB7XG4gICAgICAvLyBjaGVjayBpZiBhbGwgc2hpcHMgc3Vua1xuICAgICAgLy8gZGlzcGxheSB3aW5uaW5nIHBsYXllclxuICAgICAgLy8gZGlzcGxheVdpbm5lcigpXG4gICAgICBjb25zb2xlLmxvZyhcIndpbm5lciBpc1wiLCBnZXRDdXJyZW50UGxheWVyKCkpO1xuICAgICAgc2V0RW5kR2FtZVN0YXRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGlmIGhpdCBzaGlwIGlzIG5vdCBzdWNjZXNzZnVsXG4gIH0gZWxzZSB7XG4gICAgY2hhbmdlQ3VycmVudFBsYXllcigpO1xuICAgIHBvcHVsYXRlR2FtZWJvYXJkcygpO1xuICAgIHJlbmRlckN1cnJlbnRQbGF5ZXJEaXNwbGF5KCk7XG4gICAgLy8gY2hhbmdlIHRoZSBjdXJyZW50IHBsYXllclxuICAgIHJlbmRlckhlYWRlckluZm8oZ2V0Q3VycmVudFBsYXllcigpLCBcImlzIGF0dGFja2luZy4uLlwiKTtcbiAgICBjb25zdCBub25BSVBsYXllciA9IGdldFBsYXllcnMoKVswXTtcbiAgICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBub25BSVBsYXllci5wbGF5ZXIuZ2FtZWJvYXJkO1xuICAgIGxldCBhaUFyciA9IFsuLi5nZXRQbGF5ZXJzKClbMF0uYm9hcmRdO1xuICAgIGFpQXJyLmZvckVhY2goKGRpdikgPT4ge1xuICAgICAgZGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVEaXZDbGljayk7XG4gICAgfSk7XG4gICAgYXdhaXQgYWlBdHRhY2tXaXRoRGVsYXkocGxheWVyR2FtZWJvYXJkKTtcbiAgICBpZiAocGxheWVyR2FtZWJvYXJkLmhhc0FsbFNoaXBzQmVlblN1bmsoKSkgcmV0dXJuO1xuICB9XG5cbiAgcG9wdWxhdGVHYW1lYm9hcmRzKCk7XG4gIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDMwMCkpO1xuICByZW5kZXJDdXJyZW50UGxheWVyRGlzcGxheSgpO1xuICAvLyBwb3B1bGF0ZUdhbWVib2FyZHMoKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gYWlBdHRhY2tXaXRoRGVsYXkocGxheWVyR2FtZWJvYXJkKSB7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpO1xuICAgIGlmICghYWlBdHRhY2soKSkge1xuICAgICAgaWYgKHBsYXllckdhbWVib2FyZC5oYXNBbGxTaGlwc0JlZW5TdW5rKCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ3aW5uZXIgaXNcIiwgZ2V0Q3VycmVudFBsYXllcigpKTtcbiAgICAgICAgc2V0RW5kR2FtZVN0YXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNoYW5nZUN1cnJlbnRQbGF5ZXIoKTtcbiAgICAgIHJlbmRlckhlYWRlckluZm8oZ2V0Q3VycmVudFBsYXllcigpLCBcImlzIGF0dGFja2luZy4uLlwiKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBwb3B1bGF0ZUdhbWVib2FyZHMoKTtcbiAgICByZW5kZXJDdXJyZW50UGxheWVyRGlzcGxheSgpO1xuICB9XG59XG5cbi8vIGZ1bmN0aW9uIGFpQXR0YWNrKCkge1xuLy8gICAvLyBnZXQgdGhlIGJvYXJkIGFpIGlzIGF0dGFja2luZ1xuLy8gICBjb25zdCBub25BSVBsYXllciA9IGdldFBsYXllcnMoKVswXTtcbi8vICAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gbm9uQUlQbGF5ZXIucGxheWVyLmdhbWVib2FyZDtcblxuLy8gICBjb25zdCBhdHRhY2tTZXF1ZW5jZSA9IGdldEF0dGFja1NlcXVlbmNlKCk7XG4vLyAgIGF0dGFja1NlcXVlbmNlLmZvckVhY2goKGNvb3JkKSA9PiB7XG4vLyAgICAgaWYgKCFwbGF5ZXJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZCkpIHtcbi8vICAgICAgIHJldHVybiBmYWxzZTtcbi8vICAgICB9XG4vLyAgIH0pO1xuXG4vLyAgIHJldHVybiB0cnVlO1xuXG4vLyAgIC8vIGlmICghcGxheWVyR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmQpKSB7XG4vLyAgIC8vICAgY2hhbmdlQ3VycmVudFBsYXllcigpO1xuLy8gICAvLyAgIHJlbmRlckhlYWRlckluZm8oZ2V0Q3VycmVudFBsYXllcigpLCBcImlzIGF0dGFja2luZy4uLlwiKTtcbi8vICAgLy8gICByZXR1cm47XG4vLyAgIC8vIH1cbi8vIH1cblxuLy8gZnVuY3Rpb24gZ2V0QXR0YWNrU2VxdWVuY2UoKSB7XG4vLyAgIC8vIGdldCB0aGUgYm9hcmQgYWkgaXMgYXR0YWNraW5nXG4vLyAgIGNvbnN0IG5vbkFJUGxheWVyID0gZ2V0UGxheWVycygpWzBdO1xuLy8gICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBub25BSVBsYXllci5wbGF5ZXIuZ2FtZWJvYXJkO1xuLy8gICBjb25zdCBwbGF5ZXJHYW1lYm9hcmRDdXJyZW50Q29vcmRzID0gcGxheWVyR2FtZWJvYXJkLmN1cnJlbnRDb29yZHM7XG5cbi8vICAgY29uc3QgYXR0YWNrU2VxdWVuY2UgPSBbXTtcblxuLy8gICBsZXQgY29vcmQgPSBnZXRBSUF0dGFja0Nvb3JkcygpO1xuLy8gICBhdHRhY2tTZXF1ZW5jZS5wdXNoKGNvb3JkKTtcblxuLy8gICBjb25zb2xlLmxvZyhjb29yZCk7XG4vLyAgIGNvbnNvbGUubG9nKHBsYXllckdhbWVib2FyZEN1cnJlbnRDb29yZHMpO1xuLy8gICB3aGlsZSAoaGFzQ29vcmRDb2xsaXNpb24oY29vcmQsIHBsYXllckdhbWVib2FyZEN1cnJlbnRDb29yZHMpKSB7XG4vLyAgICAgY29vcmQgPSBnZXRBSUF0dGFja0Nvb3JkcygpO1xuLy8gICAgIGF0dGFja1NlcXVlbmNlLnB1c2goY29vcmQpO1xuLy8gICB9XG5cbi8vICAgcmV0dXJuIGF0dGFja1NlcXVlbmNlO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBnZXRBSUF0dGFja0Nvb3JkcygpIHtcbi8vICAgLy8gZ2V0IHRoZSBib2FyZCBhaSBpcyBhdHRhY2tpbmdcbi8vICAgY29uc3Qgbm9uQUlQbGF5ZXIgPSBnZXRQbGF5ZXJzKClbMF07XG4vLyAgIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IG5vbkFJUGxheWVyLnBsYXllci5nYW1lYm9hcmQ7XG4vLyAgIC8vIGRhdGEgdG8gY2hlY2sgYWdhaW5zdCBjb29yZHNcbi8vICAgY29uc3QgaGl0U2hvdHMgPSBwbGF5ZXJHYW1lYm9hcmQuaGl0U2hvdHM7XG4vLyAgIGNvbnN0IG1pc3NlZFNob3RzID0gcGxheWVyR2FtZWJvYXJkLm1pc3NlZFNob3RzO1xuLy8gICBjb25zdCBzdXJyb3VuZGluZ1Nob3RzID0gcGxheWVyR2FtZWJvYXJkLnN1cnJvdW5kaW5nU2hvdHM7XG5cbi8vICAgLy8gZ2VuZXJhdGUgeCBhbmQgeSBjb29yZFxuLy8gICBsZXQgeF9jb29yZCA9IGdlbmVyYXRlUmFuZG9tTnVtYmVyKCk7XG4vLyAgIGxldCB5X2Nvb3JkID0gZ2VuZXJhdGVSYW5kb21OdW1iZXIoKTtcblxuLy8gICB3aGlsZSAoXG4vLyAgICAgaGFzQ29vcmRDb2xsaXNpb24oW3hfY29vcmQsIHlfY29vcmRdLCBoaXRTaG90cykgfHxcbi8vICAgICBoYXNDb29yZENvbGxpc2lvbihbeF9jb29yZCwgeV9jb29yZF0sIG1pc3NlZFNob3RzKSB8fFxuLy8gICAgIGhhc0Nvb3JkQ29sbGlzaW9uKFt4X2Nvb3JkLCB5X2Nvb3JkXSwgc3Vycm91bmRpbmdTaG90cylcbi8vICAgKSB7XG4vLyAgICAgeF9jb29yZCA9IGdlbmVyYXRlUmFuZG9tTnVtYmVyKCk7XG4vLyAgICAgeV9jb29yZCA9IGdlbmVyYXRlUmFuZG9tTnVtYmVyKCk7XG4vLyAgIH1cblxuLy8gICBjb25zdCBjb29yZCA9IFt4X2Nvb3JkLCB5X2Nvb3JkXTtcblxuLy8gICByZXR1cm4gY29vcmQ7XG4vLyB9XG5cbmZ1bmN0aW9uIGFpQXR0YWNrKCkge1xuICAvLyBnZXQgdGhlIGJvYXJkIGFpIGlzIGF0dGFja2luZ1xuICBjb25zdCBub25BSVBsYXllciA9IGdldFBsYXllcnMoKVswXTtcbiAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gbm9uQUlQbGF5ZXIucGxheWVyLmdhbWVib2FyZDtcblxuICBpZiAocGxheWVyR2FtZWJvYXJkLmhhc0FsbFNoaXBzQmVlblN1bmsoKSkge1xuICAgIGNvbnNvbGUubG9nKFwid2lubmVyIGlzXCIsIGdldEN1cnJlbnRQbGF5ZXIoKSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIGRhdGEgdG8gY2hlY2sgYWdhaW5zdCBjb29yZHNcbiAgY29uc3QgaGl0U2hvdHMgPSBwbGF5ZXJHYW1lYm9hcmQuaGl0U2hvdHM7XG4gIGNvbnN0IG1pc3NlZFNob3RzID0gcGxheWVyR2FtZWJvYXJkLm1pc3NlZFNob3RzO1xuICBjb25zdCBzdXJyb3VuZGluZ1Nob3RzID0gcGxheWVyR2FtZWJvYXJkLnN1cnJvdW5kaW5nU2hvdHM7XG5cbiAgLy8gZ2VuZXJhdGUgeCBhbmQgeSBjb29yZFxuICBsZXQgeF9jb29yZCA9IGdlbmVyYXRlUmFuZG9tTnVtYmVyKCk7XG4gIGxldCB5X2Nvb3JkID0gZ2VuZXJhdGVSYW5kb21OdW1iZXIoKTtcblxuICB3aGlsZSAoXG4gICAgaGFzQ29vcmRDb2xsaXNpb24oW3hfY29vcmQsIHlfY29vcmRdLCBoaXRTaG90cykgfHxcbiAgICBoYXNDb29yZENvbGxpc2lvbihbeF9jb29yZCwgeV9jb29yZF0sIG1pc3NlZFNob3RzKSB8fFxuICAgIGhhc0Nvb3JkQ29sbGlzaW9uKFt4X2Nvb3JkLCB5X2Nvb3JkXSwgc3Vycm91bmRpbmdTaG90cylcbiAgKSB7XG4gICAgeF9jb29yZCA9IGdlbmVyYXRlUmFuZG9tTnVtYmVyKCk7XG4gICAgeV9jb29yZCA9IGdlbmVyYXRlUmFuZG9tTnVtYmVyKCk7XG4gIH1cblxuICBjb25zdCBjb29yZCA9IFt4X2Nvb3JkLCB5X2Nvb3JkXTtcblxuICBjb25zdCBpc1N1Y2Nlc3NmdWwgPSBwbGF5ZXJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZCk7XG5cbiAgY29uc3QgY3VycmVudFNoaXAgPSBwbGF5ZXJHYW1lYm9hcmQuX2dldFNoaXAoW3hfY29vcmQsIHlfY29vcmRdKTtcblxuICBpZiAoY3VycmVudFNoaXAgJiYgY3VycmVudFNoaXAuc3Vuaykge1xuICAgIGNvbnN0IHN1cnJvdW5kaW5nQ29vcmRzID0gcGxheWVyR2FtZWJvYXJkLl9nZXRTaGlwU3Vycm91bmRpbmdDb29yZHMoW1xuICAgICAgeF9jb29yZCxcbiAgICAgIHlfY29vcmQsXG4gICAgXSk7XG4gICAgcGxheWVyR2FtZWJvYXJkLnN1cnJvdW5kaW5nU2hvdHMucHVzaCguLi5zdXJyb3VuZGluZ0Nvb3Jkcyk7XG4gIH1cblxuICByZXR1cm4gaXNTdWNjZXNzZnVsO1xufVxuXG5mdW5jdGlvbiBoYXNDb29yZENvbGxpc2lvbihjb29yZCwgb3RoZXJDb29yZCkge1xuICByZXR1cm4gb3RoZXJDb29yZC5zb21lKChleGlzdGluZ0Nvb3JkKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coYXJyYXlzRXF1YWwoZXhpc3RpbmdDb29yZCwgY29vcmQpKTtcbiAgICByZXR1cm4gYXJyYXlzRXF1YWwoZXhpc3RpbmdDb29yZCwgY29vcmQpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGFycmF5c0VxdWFsKGFycjEsIGFycjIpIHtcbiAgaWYgKGFycjEubGVuZ3RoICE9PSBhcnIyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gYXJyMS5ldmVyeSgoZWxlbWVudCwgaW5kZXgpID0+IGVsZW1lbnQgPT09IGFycjJbaW5kZXhdKTtcbn1cblxuZnVuY3Rpb24gaGl0U2hpcChwbGF5ZXIpIHtcbiAgY29uc3QgcGxheWVyRGF0YXNldCA9IHsgLi4ucGxheWVyIH07XG5cbiAgY29uc3QgY3VycmVudFBsYXllciA9IGdldFBsYXllcnMoKVtwYXJzZUludChwbGF5ZXJEYXRhc2V0LnBsYXllcildO1xuICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBjdXJyZW50UGxheWVyLnBsYXllci5nYW1lYm9hcmQ7XG5cbiAgY29uc3QgeF9jb29yZCA9IHBhcnNlSW50KHBsYXllckRhdGFzZXQuY29sdW1uKTtcbiAgY29uc3QgeV9jb29yZCA9IHBhcnNlSW50KHBsYXllckRhdGFzZXQucm93KTtcbiAgY29uc3QgY29vcmQgPSBbeF9jb29yZCwgeV9jb29yZF07XG4gIHJldHVybiBwbGF5ZXJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZCk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlR2FtZWJvYXJkcygpIHtcbiAgY29uc3QgcGxheWVycyA9IGdldFBsYXllcnMoKTtcbiAgcmVuZGVyUGxheWVyTmFtZXMocGxheWVycyk7XG4gIHJlbmRlckhlYWRlckluZm8oZ2V0Q3VycmVudFBsYXllcigpLCBcImlzIGF0dGFja2luZy4uLlwiKTtcblxuICBwbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgIHJlbmRlclBsYXllckJvYXJkKHBsYXllcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDdXJyZW50UGxheWVyRGlzcGxheSgpIHtcbiAgLy8gZ2V0IHBsYXllciBib2FyZCBkaXZzXG4gIGNvbnN0IFBsYXllcjFCb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTEtYm9hcmRcIik7XG4gIGNvbnN0IFBsYXllcjJCb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTItYm9hcmRcIik7XG5cbiAgLy8gcmVzZXQgYm9hcmRzIG9wYWNpdHlcbiAgUGxheWVyMUJvYXJkRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoYWxmLW9wYWNpdHlcIik7XG4gIFBsYXllcjJCb2FyZERpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGFsZi1vcGFjaXR5XCIpO1xuXG4gIC8vIHNldCBjdXJyZW50IHBsYXllciBib2FyZCBvcGFjaXR5XG4gIHNldEJvYXJkT3BhY2l0eSgpO1xuXG4gIC8vIHNldCBwbGF5ZXJzIGJvYXJkIGV2ZW50TGlzdGVuZXJzXG4gIGNvbnN0IG5vbkN1cnJlbnRQbGF5ZXJCb2FyZCA9IFsuLi5nZXROb25DdXJyZW50UGxheWVyRG9tQm9hcmQoKV07XG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXJCb2FyZCA9IFsuLi5nZXRDdXJyZW50UGxheWVyRG9tQm9hcmQoKV07XG5cbiAgLy8gc2V0IGN1cnJlbnQgcGxheWVycyBib2FyZCB1bmNsaWNrYWJsZVxuICBzZXRQbGF5ZXJCb2FyZEV2ZW50TGlzdGVuZXIoY3VycmVudFBsYXllckJvYXJkLCB0cnVlKTtcbiAgLy8gc2V0IG5vbiBjdXJyZW50IHBsYXllcnMgYm9hcmQgY2xpY2thYmxlXG4gIHNldFBsYXllckJvYXJkRXZlbnRMaXN0ZW5lcihub25DdXJyZW50UGxheWVyQm9hcmQsIGZhbHNlKTtcbiAgcG9wdWxhdGVHYW1lYm9hcmRzKCk7XG59XG5cbmZ1bmN0aW9uIHNldEJvYXJkT3BhY2l0eShzaG91bGRTZXRCb3RoQm9hcmQgPSBmYWxzZSkge1xuICBjb25zdCBjdXJyZW50UGxheWVyID0gZ2V0Q3VycmVudFBsYXllcigpO1xuICBjb25zdCBub25DdXJyZW50UGxheWVyID0gZ2V0T3Bwb3NpbmdQbGF5ZXIoKTtcbiAgY29uc3Qgb3Bwb3NpbmdsYXllckJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgLiR7bm9uQ3VycmVudFBsYXllci5uYW1lfS1ib2FyZGBcbiAgKTtcbiAgY29uc3QgY3VycmVudFBsYXllckJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgLiR7Y3VycmVudFBsYXllci5uYW1lfS1ib2FyZGBcbiAgKTtcbiAgb3Bwb3NpbmdsYXllckJvYXJkRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoYWxmLW9wYWNpdHlcIik7XG4gIGN1cnJlbnRQbGF5ZXJCb2FyZERpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGFsZi1vcGFjaXR5XCIpO1xuICBpZiAoc2hvdWxkU2V0Qm90aEJvYXJkKSB7XG4gICAgb3Bwb3NpbmdsYXllckJvYXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJoYWxmLW9wYWNpdHlcIik7XG4gIH1cblxuICBjdXJyZW50UGxheWVyQm9hcmREaXYuY2xhc3NMaXN0LmFkZChcImhhbGYtb3BhY2l0eVwiKTtcbn1cblxuZnVuY3Rpb24gc2V0RW5kR2FtZVN0YXRlKCkge1xuICBwb3B1bGF0ZUdhbWVib2FyZHMoKTtcbiAgcmVuZGVySGVhZGVySW5mbyhnZXRDdXJyZW50UGxheWVyKCksIFwiaGFzIHdvblwiKTtcbiAgc2V0R2FtZVN0YXRlKFwiaXNGaW5pc2hlZFwiLCB0cnVlKTtcbiAgY29uc3Qgbm9uQ3VycmVudFBsYXllckJvYXJkID0gWy4uLmdldE5vbkN1cnJlbnRQbGF5ZXJEb21Cb2FyZCgpXTtcbiAgY29uc3QgY3VycmVudFBsYXllckJvYXJkID0gWy4uLmdldEN1cnJlbnRQbGF5ZXJEb21Cb2FyZCgpXTtcbiAgY29uc29sZS5sb2coY3VycmVudFBsYXllckJvYXJkKTtcbiAgY29uc29sZS5sb2cobm9uQ3VycmVudFBsYXllckJvYXJkKTtcbiAgc2V0UGxheWVyQm9hcmRFdmVudExpc3RlbmVyKGN1cnJlbnRQbGF5ZXJCb2FyZCwgdHJ1ZSk7XG4gIHNldFBsYXllckJvYXJkRXZlbnRMaXN0ZW5lcihub25DdXJyZW50UGxheWVyQm9hcmQsIHRydWUpO1xuICBzZXRCb2FyZE9wYWNpdHkodHJ1ZSk7XG5cbiAgLy8gcG9wdWxhdGUgcGxheSBhZ2FpbiBidXR0b25cbiAgcGxheUFnYWluKCk7XG59XG5cbmZ1bmN0aW9uIHNldEJlZm9yZUdhbWVTdGF0ZSgpIHtcbiAgY29uc3Qgbm9uQ3VycmVudFBsYXllckJvYXJkID0gWy4uLmdldE5vbkN1cnJlbnRQbGF5ZXJEb21Cb2FyZCgpXTtcbiAgY29uc3QgY3VycmVudFBsYXllckJvYXJkID0gWy4uLmdldEN1cnJlbnRQbGF5ZXJEb21Cb2FyZCgpXTtcbiAgc2V0UGxheWVyQm9hcmRFdmVudExpc3RlbmVyKGN1cnJlbnRQbGF5ZXJCb2FyZCwgdHJ1ZSk7XG4gIHNldFBsYXllckJvYXJkRXZlbnRMaXN0ZW5lcihub25DdXJyZW50UGxheWVyQm9hcmQsIHRydWUpO1xuICBzZXRCb2FyZE9wYWNpdHkodHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgY29uc3Qgbm9uQ3VycmVudFBsYXllckJvYXJkID0gWy4uLmdldE5vbkN1cnJlbnRQbGF5ZXJEb21Cb2FyZCgpXTtcbiAgY29uc3QgY3VycmVudFBsYXllckJvYXJkID0gWy4uLmdldEN1cnJlbnRQbGF5ZXJEb21Cb2FyZCgpXTtcbiAgc2V0UGxheWVyQm9hcmRFdmVudExpc3RlbmVyKGN1cnJlbnRQbGF5ZXJCb2FyZCwgZmFsc2UpO1xuICBzZXRQbGF5ZXJCb2FyZEV2ZW50TGlzdGVuZXIobm9uQ3VycmVudFBsYXllckJvYXJkLCBmYWxzZSk7XG4gIHNldEJvYXJkT3BhY2l0eShmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHNldFBsYXllckJvYXJkRXZlbnRMaXN0ZW5lcihib2FyZCwgc2hvdWxkUmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICBjb25zb2xlLmxvZyhib2FyZCk7XG4gIGlmIChzaG91bGRSZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgYm9hcmQuZm9yRWFjaCgoZGl2KSA9PiB7XG4gICAgICBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZURpdkNsaWNrKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBib2FyZC5mb3JFYWNoKChkaXYpID0+IHtcbiAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRGl2Q2xpY2spO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBsYXllckJvYXJkKHBsYXllcikge1xuICBjb25zdCBjdXJyZW50UGxheWVyID0gcGxheWVyLnBsYXllcjtcblxuICAvL3JlbmRlciBjdXJyZW50Y29vcmRzXG4gIC8vIGlmIHBsYXllciBpcyBhaSBkb250IHJlbmRlciBjdXJyZW50Y29vcmRzXG4gIGlmIChwbGF5ZXIucGxheWVyLnR5cGUgIT09IFwiYWlcIikge1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gQXJyYXkuZnJvbShwbGF5ZXIuYm9hcmQpO1xuICAgIHBsYXllckJvYXJkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIik7XG4gICAgfSk7XG4gICAgcmVuZGVyR2FtZWJvYXJkRGF0YShcbiAgICAgIHBsYXllcixcbiAgICAgIGN1cnJlbnRQbGF5ZXIuZ2FtZWJvYXJkLmN1cnJlbnRDb29yZHMsXG4gICAgICBcIlwiLFxuICAgICAgXCJzaGlwXCIsXG4gICAgICBmYWxzZVxuICAgICk7XG4gIH1cblxuICAvL3JlbmRlciBzdWNjZXNzZnVsIGhpdHNob3RzXG4gIHJlbmRlckdhbWVib2FyZERhdGEocGxheWVyLCBjdXJyZW50UGxheWVyLmdhbWVib2FyZC5oaXRTaG90cywgXCLinYxcIiwgXCJoaXRcIik7XG5cbiAgLy9yZW5kZXIgbWlzc2Vkc2hvdHNcbiAgcmVuZGVyR2FtZWJvYXJkRGF0YShcbiAgICBwbGF5ZXIsXG4gICAgY3VycmVudFBsYXllci5nYW1lYm9hcmQubWlzc2VkU2hvdHMsXG4gICAgXCLilqrvuI9cIixcbiAgICBcIm1pc3NlZFwiXG4gICk7XG5cbiAgLy8gcmVuZGVyIHN1cnJvdW5kaW5nIHNob3RzXG4gIHJlbmRlckdhbWVib2FyZERhdGEoXG4gICAgcGxheWVyLFxuICAgIGN1cnJlbnRQbGF5ZXIuZ2FtZWJvYXJkLnN1cnJvdW5kaW5nU2hvdHMsXG4gICAgXCLilqrvuI9cIixcbiAgICBcInN1cnJvdW5kXCJcbiAgKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyR2FtZWJvYXJkRGF0YShcbiAgcGxheWVyLFxuICBkYXRhLFxuICB0ZXh0LFxuICBjbGFzc05hbWUsXG4gIHNob3VsZFJlbW92ZUV2ZW50TGlzdGVuZXIgPSB0cnVlXG4pIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBBcnJheS5mcm9tKHBsYXllci5ib2FyZCk7XG5cbiAgZGF0YS5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGZpbmRDb3JyZXNwb25kaW5nRGl2KGNvb3JkLCBwbGF5ZXJCb2FyZCk7XG4gICAgZGl2LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGdlbmVyYXRlQ29vcmROdW1zKGRpdik7XG4gICAgLy8gcHJldmVudCBjbGlja2luZyB0aGUgc2FtZSBjb29yZCBhZ2FpblxuICAgIGlmIChzaG91bGRSZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICBjb25zb2xlLmxvZyhkaXYpO1xuICAgICAgZGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVEaXZDbGljayk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZmluZENvcnJlc3BvbmRpbmdEaXYoY29vcmQsIGJvYXJkKSB7XG4gIGNvbnN0IFt4X2Nvb3JkLCB5X2Nvb3JkXSA9IGNvb3JkO1xuXG4gIGNvbnN0IGRpdiA9IGJvYXJkLmZpbmQoKGRpdikgPT4ge1xuICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KGRpdi5kYXRhc2V0LnJvdyk7XG4gICAgY29uc3QgY29sdW1uID0gcGFyc2VJbnQoZGl2LmRhdGFzZXQuY29sdW1uKTtcbiAgICByZXR1cm4gcm93ID09PSB5X2Nvb3JkICYmIGNvbHVtbiA9PT0geF9jb29yZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUGxheWVyTmFtZXMocGxheWVycykge1xuICBjb25zdCBwbGF5ZXIxRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItMS10ZXh0XCIpO1xuICBjb25zdCBwbGF5ZXIyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItMi10ZXh0XCIpO1xuXG4gIHBsYXllcjFEaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICBwbGF5ZXIyRGl2LnRleHRDb250ZW50ID0gXCJcIjtcblxuICBwbGF5ZXIxRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRpbmcoYCR7cGxheWVyc1swXS5wbGF5ZXIubmFtZX1gLCBcImgyXCIpKTtcbiAgcGxheWVyMkRpdi5hcHBlbmRDaGlsZChjcmVhdGVIZWFkaW5nKGAke3BsYXllcnNbMV0ucGxheWVyLm5hbWV9YCwgXCJoMlwiKSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckhlYWRlckluZm8ocGxheWVyLCB0ZXh0KSB7XG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXJIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtcGxheWVyLWhlYWRlclwiKTtcbiAgY3VycmVudFBsYXllckhlYWRlci5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkaW5nKGAke3BsYXllci5uYW1lfSAke3RleHR9YCwgXCJoMVwiKTtcblxuICBjdXJyZW50UGxheWVySGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRpbmcodGV4dCwgaGVhZGluZykge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGhlYWRpbmcpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNwYW4oY2xhc3NOYW1lLCB0ZXh0KSB7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHNwYW4uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXG4gIHJldHVybiBzcGFuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEaXYoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIHJldHVybiBkaXY7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbU51bWJlcigpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbn1cblxuZXhwb3J0IHtcbiAgaW5pdERvbSxcbiAgcG9wdWxhdGVHYW1lYm9hcmRzLFxuICByZW5kZXJHYW1lYm9hcmREYXRhLFxuICBzdGFydEdhbWUsXG4gIHNldEJlZm9yZUdhbWVTdGF0ZSxcbn07XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyL3BsYXllci1jbGFzc1wiO1xuaW1wb3J0IHtcbiAgaW5pdERvbSxcbiAgcG9wdWxhdGVHYW1lYm9hcmRzLFxuICBzZXRCZWZvcmVHYW1lU3RhdGUsXG59IGZyb20gXCIuLi9kb20tbWFuaXAvZG9tLW1hbmlwXCI7XG5pbXBvcnQgeyBpbml0QnV0dG9ucyB9IGZyb20gXCIuLi9kb20tbWFuaXAvZG9tLWJ1dHRvbnNcIjtcblxubGV0IHBsYXllcnMgPSBbXTtcbmxldCBnYW1lU3RhdGU7XG5cbmZ1bmN0aW9uIGdldEJvYXJkc0RPTShpbmRleCkge1xuICBjb25zdCBib2FyZHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmRcIikpO1xuICBjb25zdCBib2FyZHNDaGlsZE5vZGVzID0gW2JvYXJkc1swXS5jaGlsZHJlbiwgYm9hcmRzWzFdLmNoaWxkcmVuXTtcbiAgcmV0dXJuIGJvYXJkc0NoaWxkTm9kZXNbaW5kZXhdO1xufVxuXG5mdW5jdGlvbiBpbml0UGxheWVycyhwbGF5ZXIxVHlwZSwgcGxheWVyMlR5cGUsIHBsYXllcjFOYW1lLCBwbGF5ZXIyTmFtZSkge1xuICBwbGF5ZXJzID0gW1xuICAgIHtcbiAgICAgIHBsYXllcjogY3JlYXRlUGxheWVyKHBsYXllcjFUeXBlLCBwbGF5ZXIxTmFtZSksXG4gICAgICBib2FyZDogZ2V0Qm9hcmRzRE9NKDApLFxuICAgIH0sXG4gICAge1xuICAgICAgcGxheWVyOiBjcmVhdGVQbGF5ZXIocGxheWVyMlR5cGUsIHBsYXllcjJOYW1lKSxcbiAgICAgIGJvYXJkOiBnZXRCb2FyZHNET00oMSksXG4gICAgfSxcbiAgXTtcbiAgLy8gY29uc29sZS5sb2cocGxheWVycyk7XG59XG5mdW5jdGlvbiByZUluaXRQbGF5ZXIocGxheWVyMVR5cGUsIHBsYXllcjFOYW1lKSB7XG4gIHBsYXllcnNbMF0gPSB7XG4gICAgcGxheWVyOiBjcmVhdGVQbGF5ZXIocGxheWVyMVR5cGUsIHBsYXllcjFOYW1lKSxcbiAgICBib2FyZDogZ2V0Qm9hcmRzRE9NKDApLFxuICB9O1xuICBpbml0R2FtZVN0YXRlKCk7XG4gIHBvcHVsYXRlR2FtZWJvYXJkcygpO1xuICBzZXRCZWZvcmVHYW1lU3RhdGUoKTtcbiAgY29uc29sZS5sb2cocGxheWVycyk7XG59XG5mdW5jdGlvbiBpbml0R2FtZVN0YXRlKCkge1xuICBnYW1lU3RhdGUgPSB7XG4gICAgY3VycmVudFBsYXllcjogcGxheWVyc1swXS5wbGF5ZXIsXG4gICAgY3VycmVudFBsYXllckJvYXJkOiBwbGF5ZXJzWzBdLmJvYXJkLFxuICAgIGlzRmluaXNoZWQ6IGZhbHNlLFxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQbGF5ZXIocGxheWVyVHlwZSwgcGxheWVyTmFtZSkge1xuICByZXR1cm4gbmV3IFBsYXllcihwbGF5ZXJUeXBlLCBwbGF5ZXJOYW1lKTtcbn1cbmZ1bmN0aW9uIGdldFBsYXllcnMoKSB7XG4gIHJldHVybiBwbGF5ZXJzO1xufVxuZnVuY3Rpb24gZ2V0R2FtZVN0YXRlKCkge1xuICByZXR1cm4gZ2FtZVN0YXRlO1xufVxuZnVuY3Rpb24gc2V0R2FtZVN0YXRlKGtleSwgdmFsdWUpIHtcbiAgZ2FtZVN0YXRlW2Ake2tleX1gXSA9IHZhbHVlO1xufVxuZnVuY3Rpb24gZ2V0Q3VycmVudFBsYXllcigpIHtcbiAgcmV0dXJuIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyO1xufVxuZnVuY3Rpb24gZ2V0Q3VycmVudFBsYXllckRvbUJvYXJkKCkge1xuICByZXR1cm4gZ2FtZVN0YXRlLmN1cnJlbnRQbGF5ZXJCb2FyZDtcbn1cbmZ1bmN0aW9uIGdldE5vbkN1cnJlbnRQbGF5ZXJEb21Cb2FyZCgpIHtcbiAgcmV0dXJuIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyID09PSBwbGF5ZXJzWzBdLnBsYXllclxuICAgID8gcGxheWVyc1sxXS5ib2FyZFxuICAgIDogcGxheWVyc1swXS5ib2FyZDtcbn1cbmZ1bmN0aW9uIGdldE9wcG9zaW5nUGxheWVyKCkge1xuICByZXR1cm4gZ2FtZVN0YXRlLmN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcnNbMF0ucGxheWVyXG4gICAgPyBwbGF5ZXJzWzFdLnBsYXllclxuICAgIDogcGxheWVyc1swXS5wbGF5ZXI7XG59XG5mdW5jdGlvbiBjaGFuZ2VDdXJyZW50UGxheWVyKCkge1xuICBnYW1lU3RhdGUuY3VycmVudFBsYXllciA9XG4gICAgZ2FtZVN0YXRlLmN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcnNbMF0ucGxheWVyXG4gICAgICA/IChnYW1lU3RhdGUuY3VycmVudFBsYXllciA9IHBsYXllcnNbMV0ucGxheWVyKVxuICAgICAgOiAoZ2FtZVN0YXRlLmN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJzWzBdLnBsYXllcik7XG5cbiAgZ2FtZVN0YXRlLmN1cnJlbnRQbGF5ZXJCb2FyZCA9XG4gICAgZ2FtZVN0YXRlLmN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcnNbMF0ucGxheWVyXG4gICAgICA/IHBsYXllcnNbMF0uYm9hcmRcbiAgICAgIDogcGxheWVyc1sxXS5ib2FyZDtcbn1cblxuZnVuY3Rpb24gaW5pdEdhbWUocGxheWVyMSwgcGxheWVyMikge1xuICBpbml0RG9tKCk7XG4gIGluaXRQbGF5ZXJzKHBsYXllcjEudHlwZSwgcGxheWVyMi50eXBlLCBwbGF5ZXIxLm5hbWUsIHBsYXllcjIubmFtZSk7XG4gIGluaXRHYW1lU3RhdGUoKTtcbiAgcG9wdWxhdGVHYW1lYm9hcmRzKCk7XG4gIHNldEJlZm9yZUdhbWVTdGF0ZSgpO1xufVxuXG5leHBvcnQge1xuICBpbml0R2FtZSxcbiAgZ2V0UGxheWVycyxcbiAgZ2V0R2FtZVN0YXRlLFxuICBjaGFuZ2VDdXJyZW50UGxheWVyLFxuICBnZXRDdXJyZW50UGxheWVyLFxuICBnZXRPcHBvc2luZ1BsYXllcixcbiAgZ2V0Q3VycmVudFBsYXllckRvbUJvYXJkLFxuICBnZXROb25DdXJyZW50UGxheWVyRG9tQm9hcmQsXG4gIHNldEdhbWVTdGF0ZSxcbiAgcmVJbml0UGxheWVyLFxufTtcbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi4vc2hpcC9zaGlwLWNsYXNzXCI7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICB0aGlzLm1pc3NlZFNob3RzID0gW107XG4gICAgdGhpcy5oaXRTaG90cyA9IFtdO1xuICAgIHRoaXMuY3VycmVudENvb3JkcyA9IFtdO1xuICAgIHRoaXMuc3Vycm91bmRpbmdDb29yZHMgPSBbXTtcbiAgICB0aGlzLnN1cnJvdW5kaW5nU2hvdHMgPSBbXTtcbiAgICB0aGlzLl9nZW5lcmF0ZVNoaXBNYXAoKTtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IHNoaXAgPSB0aGlzLl9nZXRTaGlwKGNvb3JkaW5hdGUpO1xuICAgIGlmIChzaGlwICYmICFzaGlwLnN1bmspIHtcbiAgICAgIHNoaXAuaGl0KCk7XG4gICAgICB0aGlzLmhpdFNob3RzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICB0aGlzLmN1cnJlbnRDb29yZHMuc3BsaWNlKFxuICAgICAgICBmaW5kSW5kZXhvZkl0ZW1JbkFycmF5KHRoaXMuY3VycmVudENvb3JkcywgY29vcmRpbmF0ZSksXG4gICAgICAgIDFcbiAgICAgICk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5taXNzZWRTaG90cy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGhhc0FsbFNoaXBzQmVlblN1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpcHMuZXZlcnkoKHNoaXApID0+IHtcbiAgICAgIHJldHVybiBzaGlwLnNoaXAuc3VuayA9PT0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIF9nZXRTaGlwKGNvb3JkaW5hdGUpIHtcbiAgICBmb3IgKGNvbnN0IHNoaXAgb2YgdGhpcy5zaGlwcykge1xuICAgICAgZm9yIChjb25zdCBjb29yZCBvZiBzaGlwLmNvb3Jkcykge1xuICAgICAgICBpZiAoYXJyYXlzRXF1YWwoY29vcmQsIGNvb3JkaW5hdGUpKSB7XG4gICAgICAgICAgcmV0dXJuIHNoaXAuc2hpcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBfZ2V0U2hpcFN1cnJvdW5kaW5nQ29vcmRzKGNvb3JkaW5hdGUpIHtcbiAgICBmb3IgKGNvbnN0IHNoaXAgb2YgdGhpcy5zaGlwcykge1xuICAgICAgZm9yIChjb25zdCBjb29yZCBvZiBzaGlwLmNvb3Jkcykge1xuICAgICAgICBpZiAoYXJyYXlzRXF1YWwoY29vcmQsIGNvb3JkaW5hdGUpKSB7XG4gICAgICAgICAgcmV0dXJuIHNoaXAuc3Vycm91bmRpbmdDb29yZHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBfZ2VuZXJhdGVTaGlwTWFwKCkge1xuICAgIHRoaXMuc2hpcHMucHVzaCh0aGlzLl9nZW5lcmF0ZVNoaXAoNCkpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgIHRoaXMuc2hpcHMucHVzaCh0aGlzLl9nZW5lcmF0ZVNoaXAoMykpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICB0aGlzLnNoaXBzLnB1c2godGhpcy5fZ2VuZXJhdGVTaGlwKDIpKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgdGhpcy5zaGlwcy5wdXNoKHRoaXMuX2dlbmVyYXRlU2hpcCgxKSk7XG4gICAgfVxuXG4gICAgdGhpcy5zdXJyb3VuZGluZ0Nvb3JkcyA9IHJlbW92ZUR1cGxpY2F0ZUFycmF5cyh0aGlzLnN1cnJvdW5kaW5nQ29vcmRzKTtcbiAgfVxuXG4gIF9nZW5lcmF0ZVNoaXAobGVuZ3RoLCB4X2Nvb3JkID0gbnVsbCwgeV9jb29yZCA9IG51bGwpIHtcbiAgICBjb25zdCB7IGNvb3Jkcywgc3Vycm91bmRpbmdDb29yZHMgfSA9IHRoaXMuX2dlbmVyYXRlQ29vcmQoXG4gICAgICBsZW5ndGgsXG4gICAgICB4X2Nvb3JkLFxuICAgICAgeV9jb29yZFxuICAgICk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvb3JkcyxcbiAgICAgIHN1cnJvdW5kaW5nQ29vcmRzLFxuICAgICAgc2hpcDogbmV3IFNoaXAobGVuZ3RoKSxcbiAgICB9O1xuICB9XG5cbiAgX2dlbmVyYXRlQ29vcmQobGVuZ3RoLCB4X2Nvb3JkID0gbnVsbCwgeV9jb29yZCA9IG51bGwpIHtcbiAgICBsZXQgeCA9IHhfY29vcmQgPT09IG51bGwgPyB0aGlzLl9nZW5lcmF0ZVJhbmRvbU51bWJlcigpIDogeF9jb29yZDtcbiAgICBsZXQgeSA9IHlfY29vcmQgPT09IG51bGwgPyB0aGlzLl9nZW5lcmF0ZVJhbmRvbU51bWJlcigpIDogeV9jb29yZDtcbiAgICBjb25zdCBvcmllbnRhdGlvblggPSBNYXRoLnJhbmRvbSgpID49IDAuNTtcbiAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjAwO1xuXG4gICAgd2hpbGUgKGF0dGVtcHRzIDwgbWF4QXR0ZW1wdHMpIHtcbiAgICAgIGF0dGVtcHRzKys7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX2lzVmFsaWRDb29yZCh4LCB5LCBsZW5ndGgsIG9yaWVudGF0aW9uWCkgJiZcbiAgICAgICAgIXRoaXMuX3ByZWRpY3RDb2xsaXNpb25XaXRoQ3VycmVudENvb3JkcyhcbiAgICAgICAgICBvcmllbnRhdGlvblggPyBcInhcIiA6IFwieVwiLFxuICAgICAgICAgIHgsXG4gICAgICAgICAgeSxcbiAgICAgICAgICBsZW5ndGhcbiAgICAgICAgKSAmJlxuICAgICAgICAhdGhpcy5fcHJlZGljdENvbGxpc2lvbldpdGhTdXJyb3VuZGluZ0Nvb3JkcyhcbiAgICAgICAgICBvcmllbnRhdGlvblggPyBcInhcIiA6IFwieVwiLFxuICAgICAgICAgIHgsXG4gICAgICAgICAgeSxcbiAgICAgICAgICBsZW5ndGhcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgeCA9IHRoaXMuX2dlbmVyYXRlUmFuZG9tTnVtYmVyKCk7XG4gICAgICB5ID0gdGhpcy5fZ2VuZXJhdGVSYW5kb21OdW1iZXIoKTtcbiAgICB9XG5cbiAgICBpZiAoYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBnZW5lcmF0ZSB2YWxpZCBjb29yZGluYXRlcyBhZnRlciAke21heEF0dGVtcHRzfSBhdHRlbXB0c2BcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgY29vcmRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29vcmRzLnB1c2goW3gsIHldKTtcbiAgICAgIHRoaXMuY3VycmVudENvb3Jkcy5wdXNoKFt4LCB5XSk7XG4gICAgICBpZiAob3JpZW50YXRpb25YKSB7XG4gICAgICAgIHgrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHkrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzdXJyb3VuZGluZ0Nvb3JkcyA9IHRoaXMuX2dldFN1cnJvdW5kaW5nQ29vcmRzKFxuICAgICAgY29vcmRzLFxuICAgICAgbGVuZ3RoLFxuICAgICAgb3JpZW50YXRpb25YXG4gICAgKTtcbiAgICB0aGlzLnN1cnJvdW5kaW5nQ29vcmRzLnB1c2goLi4uc3Vycm91bmRpbmdDb29yZHMpO1xuXG4gICAgcmV0dXJuIHsgY29vcmRzLCBzdXJyb3VuZGluZ0Nvb3JkcyB9O1xuICB9XG5cbiAgX2dldFN1cnJvdW5kaW5nQ29vcmRzKGNvb3JkLCBsZW5ndGgsIG9yaWVudGF0aW9uWCkge1xuICAgIGNvbnN0IHN1ckNvb3JkQXJyYXkgPSBbXTtcbiAgICBzdXJDb29yZEFycmF5LnB1c2godGhpcy5fZ2V0VXBwZXJSb3dDb29yZHMoY29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb25YKSk7XG4gICAgc3VyQ29vcmRBcnJheS5wdXNoKHRoaXMuX2dldEJvdHRvbVJvd0Nvb3Jkcyhjb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvblgpKTtcbiAgICBzdXJDb29yZEFycmF5LnB1c2godGhpcy5fZ2V0UmlnaHRDb29yZHMoY29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb25YKSk7XG4gICAgc3VyQ29vcmRBcnJheS5wdXNoKHRoaXMuX2dldExlZnRDb29yZHMoY29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb25YKSk7XG5cbiAgICByZXR1cm4gc3VyQ29vcmRBcnJheS5mbGF0KCk7XG4gIH1cblxuICBfZ2V0VXBwZXJSb3dDb29yZHMoY29vcmRzLCBsZW5ndGgsIG9yaWVudGF0aW9uWCkge1xuICAgIGNvbnN0IHVwcGVyUm93ID0gW107XG4gICAgbGV0IFt4X2Nvb3JkLCB5X2Nvb3JkXSA9IGNvb3Jkc1swXTtcblxuICAgIHlfY29vcmQtLTtcbiAgICB4X2Nvb3JkLS07XG5cbiAgICBsZXQgdXBwZXJSb3dMZW5ndGggPSBvcmllbnRhdGlvblggPyBsZW5ndGggKyAyIDogMztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVwcGVyUm93TGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9pc1dpdGhpbkJvdW5kcyhbeF9jb29yZCwgeV9jb29yZF0pKSB7XG4gICAgICAgIHVwcGVyUm93LnB1c2goW3hfY29vcmQsIHlfY29vcmRdKTtcbiAgICAgIH1cbiAgICAgIHhfY29vcmQrKztcbiAgICB9XG5cbiAgICByZXR1cm4gdXBwZXJSb3c7XG4gIH1cblxuICBfZ2V0Qm90dG9tUm93Q29vcmRzKGNvb3JkcywgbGVuZ3RoLCBvcmllbnRhdGlvblgpIHtcbiAgICBjb25zdCBib3R0b21Sb3cgPSBbXTtcbiAgICBsZXQgW3hfY29vcmQsIHlfY29vcmRdID0gY29vcmRzW2xlbmd0aCAtIDFdO1xuXG4gICAgeV9jb29yZCsrO1xuICAgIHhfY29vcmQrKztcblxuICAgIGxldCBib3R0b21Sb3dMZW5ndGggPSBvcmllbnRhdGlvblggPyBsZW5ndGggKyAyIDogMztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdHRvbVJvd0xlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5faXNXaXRoaW5Cb3VuZHMoW3hfY29vcmQsIHlfY29vcmRdKSkge1xuICAgICAgICBib3R0b21Sb3cucHVzaChbeF9jb29yZCwgeV9jb29yZF0pO1xuICAgICAgfVxuICAgICAgeF9jb29yZC0tO1xuICAgIH1cbiAgICByZXR1cm4gYm90dG9tUm93O1xuICB9XG5cbiAgX2dldFJpZ2h0Q29vcmRzKGNvb3JkcywgbGVuZ3RoLCBvcmllbnRhdGlvblgpIHtcbiAgICBjb25zdCByaWdodCA9IFtdO1xuICAgIGxldCBbeF9jb29yZCwgeV9jb29yZF0gPSBjb29yZHNbbGVuZ3RoIC0gMV07XG4gICAgeF9jb29yZCsrO1xuXG4gICAgbGV0IHJpZ2h0TGVuZ3RoID0gb3JpZW50YXRpb25YID8gMSA6IGxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJpZ2h0TGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9pc1dpdGhpbkJvdW5kcyhbeF9jb29yZCwgeV9jb29yZF0pKSB7XG4gICAgICAgIHJpZ2h0LnB1c2goW3hfY29vcmQsIHlfY29vcmRdKTtcbiAgICAgIH1cbiAgICAgIHlfY29vcmQtLTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmlnaHQ7XG4gIH1cblxuICBfZ2V0TGVmdENvb3Jkcyhjb29yZHMsIGxlbmd0aCwgb3JpZW50YXRpb25YKSB7XG4gICAgY29uc3QgbGVmdCA9IFtdO1xuICAgIGxldCB4X2Nvb3JkO1xuICAgIGxldCB5X2Nvb3JkO1xuICAgIGlmIChvcmllbnRhdGlvblgpIHtcbiAgICAgIFt4X2Nvb3JkLCB5X2Nvb3JkXSA9IGNvb3Jkc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgW3hfY29vcmQsIHlfY29vcmRdID0gY29vcmRzW2xlbmd0aCAtIDFdO1xuICAgIH1cbiAgICB4X2Nvb3JkLS07XG5cbiAgICBsZXQgbGVmdExlbmd0aCA9IG9yaWVudGF0aW9uWCA/IDEgOiBsZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZWZ0TGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9pc1dpdGhpbkJvdW5kcyhbeF9jb29yZCwgeV9jb29yZF0pKSB7XG4gICAgICAgIGxlZnQucHVzaChbeF9jb29yZCwgeV9jb29yZF0pO1xuICAgICAgfVxuICAgICAgeV9jb29yZC0tO1xuICAgIH1cblxuICAgIHJldHVybiBsZWZ0O1xuICB9XG5cbiAgX3ByZWRpY3RDb2xsaXNpb25XaXRoQ3VycmVudENvb3JkcyhvcmlhbnRhdGlvbiwgeCwgeSwgbGVuZ3RoKSB7XG4gICAgY29uc3QgdGVtcEFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHRlbXBBcnIucHVzaChbeCwgeV0pO1xuICAgICAgaWYgKG9yaWFudGF0aW9uID09PSBcInhcIikgeCsrO1xuICAgICAgZWxzZSB5Kys7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBhcnJheSBvZiB0ZW1wQXJyKSB7XG4gICAgICBpZiAodGhpcy5faGFzQ29vcmRDb2xsaXNpb24oYXJyYXksIHRoaXMuY3VycmVudENvb3JkcykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIF9wcmVkaWN0Q29sbGlzaW9uV2l0aFN1cnJvdW5kaW5nQ29vcmRzKG9yaWFudGF0aW9uLCB4LCB5LCBsZW5ndGgpIHtcbiAgICBjb25zdCB0ZW1wQXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdGVtcEFyci5wdXNoKFt4LCB5XSk7XG4gICAgICBpZiAob3JpYW50YXRpb24gPT09IFwieFwiKSB4Kys7XG4gICAgICBlbHNlIHkrKztcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGFycmF5IG9mIHRlbXBBcnIpIHtcbiAgICAgIGlmICh0aGlzLl9oYXNDb29yZENvbGxpc2lvbihhcnJheSwgdGhpcy5zdXJyb3VuZGluZ0Nvb3JkcykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIF9pc1dpdGhpbkJvdW5kcyhjb29yZCkge1xuICAgIGNvbnN0IFt4X2Nvb3JkLCB5X2Nvb3JkXSA9IGNvb3JkO1xuICAgIHJldHVybiB4X2Nvb3JkID49IDAgJiYgeF9jb29yZCA8IDEwICYmIHlfY29vcmQgPj0gMCAmJiB5X2Nvb3JkIDwgMTA7XG4gIH1cblxuICBfaXNWYWxpZENvb3JkKHgsIHksIGxlbmd0aCwgb3JpZW50YXRpb25YKSB7XG4gICAgaWYgKG9yaWVudGF0aW9uWCkge1xuICAgICAgcmV0dXJuIHggKyBsZW5ndGggPD0gMTA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB5ICsgbGVuZ3RoIDw9IDEwO1xuICAgIH1cbiAgfVxuXG4gIF9nZW5lcmF0ZVJhbmRvbU51bWJlcigpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICB9XG5cbiAgX2hhc0Nvb3JkQ29sbGlzaW9uKGNvb3JkLCBvdGhlckNvb3JkKSB7XG4gICAgcmV0dXJuIG90aGVyQ29vcmQuc29tZSgoZXhpc3RpbmdDb29yZCkgPT5cbiAgICAgIGFycmF5c0VxdWFsKGV4aXN0aW5nQ29vcmQsIGNvb3JkKVxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXJyYXlzRXF1YWwoYXJyMSwgYXJyMikge1xuICBpZiAoYXJyMS5sZW5ndGggIT09IGFycjIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBhcnIxLmV2ZXJ5KChlbGVtZW50LCBpbmRleCkgPT4gZWxlbWVudCA9PT0gYXJyMltpbmRleF0pO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXhvZkl0ZW1JbkFycmF5KGFycmF5LCBpdGVtKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlzRXF1YWwoYXJyYXlbaV0sIGl0ZW0pKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuZnVuY3Rpb24gcmVtb3ZlRHVwbGljYXRlQXJyYXlzKGFycmF5cykge1xuICBjb25zdCB1bmlxdWVBcnJheXMgPSBuZXcgU2V0KGFycmF5cy5tYXAoSlNPTi5zdHJpbmdpZnkpKTtcbiAgcmV0dXJuIEFycmF5LmZyb20odW5pcXVlQXJyYXlzKS5tYXAoSlNPTi5wYXJzZSk7XG59XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4uL2dhbWVib2FyZC9nYW1lYm9hcmQtY2xhc3NcIjtcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IodHlwZSwgbmFtZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgfVxufVxuXG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsImNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLm51bWJlcl9oaXQgPSAwO1xuICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICB9XG4gIGdldFN0YXR1cygpIHtcbiAgICByZXR1cm4geyBsZW5ndGg6IHRoaXMubGVuZ3RoLCBoaXQ6IHRoaXMubnVtYmVyX2hpdCwgc3VuazogdGhpcy5zdW5rIH07XG4gIH1cbiAgaGl0KCkge1xuICAgIGlmICghdGhpcy5zdW5rKSB7XG4gICAgICB0aGlzLm51bWJlcl9oaXQrKztcbiAgICAgIHRoaXMuc3VuayA9IHRoaXMuaXNTdW5rKCk7XG4gICAgfVxuICB9XG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXJfaGl0ID09PSB0aGlzLmxlbmd0aDtcbiAgfVxufVxuXG5leHBvcnQgeyBTaGlwIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IGluaXRHYW1lIH0gZnJvbSBcIi4vZ2FtZS1sb2dpYy9nYW1lLWxvZ2ljXCI7XG5pbXBvcnQgeyBpbml0QnV0dG9ucyB9IGZyb20gXCIuL2RvbS1tYW5pcC9kb20tYnV0dG9uc1wiO1xuXG4vLyBpbml0R2FtZShcImh1bWFuXCIsIFwiaHVtYW5cIik7XG5pbml0R2FtZSh7IHR5cGU6IFwiaHVtYW5cIiwgbmFtZTogXCJwbGF5ZXItMVwiIH0sIHsgdHlwZTogXCJhaVwiLCBuYW1lOiBcInBsYXllci0yXCIgfSk7XG5pbml0QnV0dG9ucygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9