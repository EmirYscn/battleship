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

    await aiAttackWithDelay(playerGameboard);
    if (playerGameboard.hasAllShipsBeenSunk()) return;
  }

  populateGameboards();
  await new Promise((resolve) => setTimeout(resolve, 300));
  renderCurrentPlayerDisplay();
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
    populateGameboards();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdGQUF3RixNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxPQUFPLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLFlBQVksT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLE9BQU8sT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFN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QUFDQTs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3U29DOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpRUFBUztBQUNsQztBQUNBOztBQUVrQjs7Ozs7Ozs7Ozs7Ozs7O0FDVmxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWdCOzs7Ozs7O1VDcEJoQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQzZCO0FBQ0c7O0FBRXREO0FBQ0EsZ0VBQVEsR0FBRyxpQ0FBaUMsSUFBSSw4QkFBOEI7QUFDOUUsbUVBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20tbWFuaXAvZG9tLWJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20tbWFuaXAvZG9tLW1hbmlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS1sb2dpYy9nYW1lLWxvZ2ljLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkL2dhbWVib2FyZC1jbGFzcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci9wbGF5ZXItY2xhc3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwL3NoaXAtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogR2VuZXJhbCBSZXNldCAqL1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogQm9keSBTdHlsaW5nICovXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzFhNzhhZSwgIzQzMWRkOSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXMgZWFzZTtcbn1cblxuLyogVGl0bGUgU3R5bGluZyAqL1xuaDEge1xuICBmb250LXNpemU6IDNlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xufVxuXG4vKiBCb2FyZCBDb250YWluZXJzICovXG4uYm9hcmRzIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA3MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG5cbi8qIFBsYXllciBDb250YWluZXJzICovXG4ucGxheWVyLTEtY29udGFpbmVyLFxuLnBsYXllci0yLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogQm9hcmQgU3R5bGluZyAqL1xuLnBsYXllci0xLWJvYXJkLFxuLnBsYXllci0yLWJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgzMzU4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJvcmRlci1jb2xvciAwLjNzIGVhc2U7XG59XG5cbi5ib2FyZC1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMzBweDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBCb3ggU3R5bGluZyAqL1xuLmJveCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmYzODtcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4uYm94OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhNzhhZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLyogU2hpcCBTdHlsaW5nICovXG4uc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4OWFjZDc7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG5cbi5zaGlwLmhpdCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgZm9udC1zaXplOiAxLjA0ZW07XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCBib3JkZXItY29sb3IgMC4zcyBlYXNlO1xufVxuXG4uc2hpcC5zdW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIG9wYWNpdHkgMC4zcyBlYXNlLFxuICAgIGJvcmRlci1jb2xvciAwLjNzIGVhc2U7XG59XG5cbi8qIE1pc3NlZCBTaG90IFN0eWxpbmcgKi9cbi5taXNzZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgzLCAxODksIDE4MywgMC4zKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIG9wYWNpdHkgMC4zcyBlYXNlO1xufVxuXG4uc3Vycm91bmQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG59XG5cbi8qIFBsYXllciBUZXh0IFN0eWxpbmcgKi9cbi5wbGF5ZXItMS10ZXh0LFxuLnBsYXllci0yLXRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcbn1cblxuLyogVXRpbGl0eSBDbGFzc2VzICovXG4uaGFsZi1vcGFjaXR5IHtcbiAgb3BhY2l0eTogMC41O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cblxuLyogQ29vcmRpbmF0ZSBOdW1iZXIgU3R5bGluZyAqL1xuLmNvb3JkLW51bS11cCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMmVtO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAycHggNXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmNvb3JkLW51bS1sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogLTJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5MCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwZW07XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cblxuLyogQnV0dG9uIFN0eWxpbmcgKi9cbi5idG4ge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogM3B4IHNvbGlkO1xuICBwYWRkaW5nOiAwLjI1ZW0gMC41ZW07XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMHB4IDBweCwgMnB4IDJweCAwcHggMHB4LCAzcHggM3B4IDBweCAwcHgsIDRweCA0cHggMHB4IDBweCxcbiAgICA1cHggNXB4IDBweCAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZSxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZSwgY29sb3IgMC4ycyBlYXNlO1xufVxuXG4uYnRuOmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweDtcbiAgdG9wOiA1cHg7XG4gIGxlZnQ6IDVweDtcbn1cblxuLmJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgY29sb3I6ICMwMDA7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuYnRuIHtcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMC43NWVtO1xuICB9XG59XG5cbi8qIEhpZGRlbiBTdHlsaW5nICovXG4uaGlkZGVuIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2U7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uaGlkZGVuLnNob3cge1xuICBvcGFjaXR5OiAxO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxrQkFBa0I7QUFDbEI7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxpQkFBaUI7RUFDakIsb0RBQW9EO0VBQ3BELGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0FBQ2xDOztB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WlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHZW5lcmFsIFJlc2V0ICovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogQm9keSBTdHlsaW5nICovXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzFhNzhhZSwgIzQzMWRkOSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzIGVhc2U7XFxufVxcblxcbi8qIFRpdGxlIFN0eWxpbmcgKi9cXG5oMSB7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcbn1cXG5cXG4vKiBCb2FyZCBDb250YWluZXJzICovXFxuLmJvYXJkcyB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA3MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbn1cXG5cXG4vKiBQbGF5ZXIgQ29udGFpbmVycyAqL1xcbi5wbGF5ZXItMS1jb250YWluZXIsXFxuLnBsYXllci0yLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBCb2FyZCBTdHlsaW5nICovXFxuLnBsYXllci0xLWJvYXJkLFxcbi5wbGF5ZXItMi1ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgzMzU4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3JkZXItY29sb3IgMC4zcyBlYXNlO1xcbn1cXG5cXG4uYm9hcmQtbGFiZWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMzBweDtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIEJveCBTdHlsaW5nICovXFxuLmJveCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjM4O1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4uYm94OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTc4YWU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4vKiBTaGlwIFN0eWxpbmcgKi9cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODlhY2Q3O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxufVxcblxcbi5zaGlwLmhpdCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBmb250LXNpemU6IDEuMDRlbTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCBib3JkZXItY29sb3IgMC4zcyBlYXNlO1xcbn1cXG5cXG4uc2hpcC5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2UsXFxuICAgIGJvcmRlci1jb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbi8qIE1pc3NlZCBTaG90IFN0eWxpbmcgKi9cXG4ubWlzc2VkIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgzLCAxODksIDE4MywgMC4zKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZTtcXG59XFxuXFxuLnN1cnJvdW5kIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcbn1cXG5cXG4vKiBQbGF5ZXIgVGV4dCBTdHlsaW5nICovXFxuLnBsYXllci0xLXRleHQsXFxuLnBsYXllci0yLXRleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbi8qIFV0aWxpdHkgQ2xhc3NlcyAqL1xcbi5oYWxmLW9wYWNpdHkge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxufVxcblxcbi8qIENvb3JkaW5hdGUgTnVtYmVyIFN0eWxpbmcgKi9cXG4uY29vcmQtbnVtLXVwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTJlbTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDJweCA1cHg7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4uY29vcmQtbnVtLWxlZnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiAtMmVtO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMnB4IDVweDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbi5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogOTAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwZW07XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxufVxcblxcbi8qIEJ1dHRvbiBTdHlsaW5nICovXFxuLmJ0biB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAzcHggc29saWQ7XFxuICBwYWRkaW5nOiAwLjI1ZW0gMC41ZW07XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDBweCAwcHgsIDJweCAycHggMHB4IDBweCwgM3B4IDNweCAwcHggMHB4LCA0cHggNHB4IDBweCAwcHgsXFxuICAgIDVweCA1cHggMHB4IDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZSxcXG4gICAgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UsIGNvbG9yIDAuMnMgZWFzZTtcXG59XFxuXFxuLmJ0bjphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4O1xcbiAgdG9wOiA1cHg7XFxuICBsZWZ0OiA1cHg7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5idG4ge1xcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMC43NWVtO1xcbiAgfVxcbn1cXG5cXG4vKiBIaWRkZW4gU3R5bGluZyAqL1xcbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5oaWRkZW4uc2hvdyB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2V0UGxheWVycywgcmVJbml0UGxheWVyLCBpbml0R2FtZSB9IGZyb20gXCIuLi9nYW1lLWxvZ2ljL2dhbWUtbG9naWNcIjtcbmltcG9ydCB7XG4gIHBvcHVsYXRlR2FtZWJvYXJkcyxcbiAgcmVuZGVyR2FtZWJvYXJkRGF0YSxcbiAgc2V0QmVmb3JlR2FtZVN0YXRlLFxuICBzdGFydEdhbWUsXG59IGZyb20gXCIuL2RvbS1tYW5pcFwiO1xuXG5mdW5jdGlvbiBpbml0QnV0dG9ucygpIHtcbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b25zXCIpO1xuICAvLyByZXNldFxuICBidXR0b25Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgLy8gY3JlYXRlXG4gIHNldFJhbmRvbUJ1dHRvbigpO1xuICBzdGFydEJ1dHRvbigpO1xufVxuZnVuY3Rpb24gc2V0UmFuZG9tQnV0dG9uKCkge1xuICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbnNcIik7XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLnRleHRDb250ZW50ID0gXCJSYW5kb21pc2Ug8J+UhFwiO1xuICBidG4uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJyYW5kb20tYnRuXCIpO1xuXG4gIGNvbnN0IHBsYXllciA9IGdldFBsYXllcnMoKVswXTtcbiAgY29uc3QgY3VycmVudFBsYXllciA9IHBsYXllci5wbGF5ZXI7XG5cbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcmVJbml0UGxheWVyKFwiaHVtYW5cIiwgXCJwbGF5ZXItMVwiKTtcbiAgfSk7XG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pO1xufVxuXG5mdW5jdGlvbiBzdGFydEJ1dHRvbigpIHtcbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b25zXCIpO1xuICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhbmRvbS1idG5cIik7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi50ZXh0Q29udGVudCA9IFwiU3RhcnRcIjtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwic3RhcnQtYnRuXCIpO1xuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIHN0YXJ0IHRoZSBnYW1lIFRPRE9cbiAgICBzdGFydEdhbWUoKTtcbiAgICAvLyBidG4ucmVtb3ZlKCk7XG4gICAgLy8gcmFuZG9tQnRuLnJlbW92ZSgpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIHJhbmRvbUJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9KTtcblxuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKTtcbn1cblxuZnVuY3Rpb24gcGxheUFnYWluKCkge1xuICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbnNcIik7XG4gIC8vIHJlc2V0XG4gIGJ1dHRvbkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi50ZXh0Q29udGVudCA9IFwiUGxheSBBZ2FpblwiO1xuICBidG4uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJwbGF5LWFnYWluLWJ0blwiKTtcblxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpbml0R2FtZShcbiAgICAgIHsgdHlwZTogXCJodW1hblwiLCBuYW1lOiBcInBsYXllci0xXCIgfSxcbiAgICAgIHsgdHlwZTogXCJhaVwiLCBuYW1lOiBcInBsYXllci0yXCIgfVxuICAgICk7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgaW5pdEJ1dHRvbnMoKTtcbiAgfSk7XG5cbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bik7XG4gIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xufVxuXG5leHBvcnQgeyBpbml0QnV0dG9ucywgcGxheUFnYWluIH07XG4iLCJpbXBvcnQge1xuICBnZXRQbGF5ZXJzLFxuICBjaGFuZ2VDdXJyZW50UGxheWVyLFxuICBnZXRDdXJyZW50UGxheWVyLFxuICBnZXRPcHBvc2luZ1BsYXllcixcbiAgZ2V0Q3VycmVudFBsYXllckRvbUJvYXJkLFxuICBnZXROb25DdXJyZW50UGxheWVyRG9tQm9hcmQsXG4gIGdldEdhbWVTdGF0ZSxcbiAgc2V0R2FtZVN0YXRlLFxuICByZUluaXRQbGF5ZXIsXG59IGZyb20gXCIuLi9nYW1lLWxvZ2ljL2dhbWUtbG9naWNcIjtcbmltcG9ydCB7IHBsYXlBZ2FpbiB9IGZyb20gXCIuL2RvbS1idXR0b25zXCI7XG5mdW5jdGlvbiBpbml0RG9tKCkge1xuICBwb3B1bGF0ZUJvYXJkKCk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlQm9hcmQoKSB7XG4gIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmRcIik7XG5cbiAgYm9hcmRzLmZvckVhY2goKGJvYXJkLCBpbmRleCkgPT4ge1xuICAgIGJvYXJkLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBjb25zdCByb3dJbmRleCA9IGk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgY29uc3QgY29sdW1uSW5kZXggPSBqO1xuICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVEaXYoXCJib3hcIik7XG5cbiAgICAgICAgZGl2LmRhdGFzZXQucm93ID0gcm93SW5kZXg7XG4gICAgICAgIGRpdi5kYXRhc2V0LmNvbHVtbiA9IGNvbHVtbkluZGV4O1xuICAgICAgICBkaXYuZGF0YXNldC5wbGF5ZXIgPSBpbmRleDtcblxuICAgICAgICAvLyBnZW5lcmF0ZUNvb3JkTnVtcyhbcm93SW5kZXgsIGNvbHVtbkluZGV4XSk7XG4gICAgICAgIGlmIChyb3dJbmRleCA9PT0gMCkge1xuICAgICAgICAgIGNvbnN0IHNwYW4gPSBjcmVhdGVTcGFuKFwiY29vcmQtbnVtLXVwXCIsIGNvbHVtbkluZGV4KTtcbiAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbHVtbkluZGV4ID09PSAwKSB7XG4gICAgICAgICAgY29uc3Qgc3BhbiA9IGNyZWF0ZVNwYW4oXCJjb29yZC1udW0tbGVmdFwiLCByb3dJbmRleCk7XG4gICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICB9XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVEaXZDbGljayk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlQ29vcmROdW1zKGRpdikge1xuICBjb25zdCBkaXZSb3cgPSBwYXJzZUludChkaXYuZGF0YXNldC5yb3cpO1xuICBjb25zdCBkaXZDb2x1bW4gPSBwYXJzZUludChkaXYuZGF0YXNldC5jb2x1bW4pO1xuICBpZiAoZGl2Um93ID09PSAwICYmIGRpdkNvbHVtbiA9PT0gMCkge1xuICAgIGNvbnN0IHNwYW4xID0gY3JlYXRlU3BhbihcImNvb3JkLW51bS11cFwiLCBkaXZDb2x1bW4pO1xuICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuMSk7XG4gICAgY29uc3Qgc3BhbjIgPSBjcmVhdGVTcGFuKFwiY29vcmQtbnVtLWxlZnRcIiwgZGl2Um93KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc3BhbjIpO1xuICB9IGVsc2UgaWYgKGRpdlJvdyA9PT0gMCkge1xuICAgIGNvbnN0IHNwYW4gPSBjcmVhdGVTcGFuKFwiY29vcmQtbnVtLXVwXCIsIGRpdkNvbHVtbik7XG4gICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICB9IGVsc2UgaWYgKGRpdkNvbHVtbiA9PT0gMCkge1xuICAgIGNvbnN0IHNwYW4gPSBjcmVhdGVTcGFuKFwiY29vcmQtbnVtLWxlZnRcIiwgZGl2Um93KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlRGl2Q2xpY2soZSkge1xuICAvLyBpZiBoaXQgc2hpcCBpcyBzdWNjZXNmdWxcbiAgaWYgKGhpdFNoaXAoZS50YXJnZXQuZGF0YXNldCkpIHtcbiAgICAvLyBjb250aW51ZSBwbGF5aW5nIHdpdGggdGhlIGN1cnJlbnQgcGxheWVyXG4gICAgY29uc3QgY3VycmVudFBsYXllciA9IGdldFBsYXllcnMoKVtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnBsYXllcildO1xuICAgIC8vIGNoZWNrIGlmIGFueSBzaGlwIGlzIHN1bmtcbiAgICBjb25zdCB4X2Nvb3JkID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5jb2x1bW4pO1xuICAgIGNvbnN0IHlfY29vcmQgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnJvdyk7XG5cbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IGN1cnJlbnRQbGF5ZXIucGxheWVyLmdhbWVib2FyZC5fZ2V0U2hpcChbXG4gICAgICB4X2Nvb3JkLFxuICAgICAgeV9jb29yZCxcbiAgICBdKTtcbiAgICBpZiAoY3VycmVudFNoaXAuc3Vuaykge1xuICAgICAgY29uc3Qgc3Vycm91bmRpbmdDb29yZHMgPVxuICAgICAgICBjdXJyZW50UGxheWVyLnBsYXllci5nYW1lYm9hcmQuX2dldFNoaXBTdXJyb3VuZGluZ0Nvb3JkcyhbXG4gICAgICAgICAgeF9jb29yZCxcbiAgICAgICAgICB5X2Nvb3JkLFxuICAgICAgICBdKTtcbiAgICAgIGN1cnJlbnRQbGF5ZXIucGxheWVyLmdhbWVib2FyZC5zdXJyb3VuZGluZ1Nob3RzLnB1c2goXG4gICAgICAgIC4uLnN1cnJvdW5kaW5nQ29vcmRzXG4gICAgICApO1xuICAgICAgLy8gcmVuZGVyR2FtZWJvYXJkRGF0YShjdXJyZW50UGxheWVyLCBzdXJyb3VuZGluZ0Nvb3JkcywgXCLilqrvuI9cIiwgXCJzdXJyb3VuZFwiKTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIucGxheWVyLmdhbWVib2FyZC5oYXNBbGxTaGlwc0JlZW5TdW5rKCkpIHtcbiAgICAgIC8vIGNoZWNrIGlmIGFsbCBzaGlwcyBzdW5rXG4gICAgICAvLyBkaXNwbGF5IHdpbm5pbmcgcGxheWVyXG4gICAgICAvLyBkaXNwbGF5V2lubmVyKClcbiAgICAgIGNvbnNvbGUubG9nKFwid2lubmVyIGlzXCIsIGdldEN1cnJlbnRQbGF5ZXIoKSk7XG4gICAgICBzZXRFbmRHYW1lU3RhdGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gaWYgaGl0IHNoaXAgaXMgbm90IHN1Y2Nlc3NmdWxcbiAgfSBlbHNlIHtcbiAgICBjaGFuZ2VDdXJyZW50UGxheWVyKCk7XG4gICAgcG9wdWxhdGVHYW1lYm9hcmRzKCk7XG4gICAgcmVuZGVyQ3VycmVudFBsYXllckRpc3BsYXkoKTtcbiAgICAvLyBjaGFuZ2UgdGhlIGN1cnJlbnQgcGxheWVyXG4gICAgcmVuZGVySGVhZGVySW5mbyhnZXRDdXJyZW50UGxheWVyKCksIFwiaXMgYXR0YWNraW5nLi4uXCIpO1xuICAgIGNvbnN0IG5vbkFJUGxheWVyID0gZ2V0UGxheWVycygpWzBdO1xuICAgIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IG5vbkFJUGxheWVyLnBsYXllci5nYW1lYm9hcmQ7XG5cbiAgICBhd2FpdCBhaUF0dGFja1dpdGhEZWxheShwbGF5ZXJHYW1lYm9hcmQpO1xuICAgIGlmIChwbGF5ZXJHYW1lYm9hcmQuaGFzQWxsU2hpcHNCZWVuU3VuaygpKSByZXR1cm47XG4gIH1cblxuICBwb3B1bGF0ZUdhbWVib2FyZHMoKTtcbiAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMzAwKSk7XG4gIHJlbmRlckN1cnJlbnRQbGF5ZXJEaXNwbGF5KCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFpQXR0YWNrV2l0aERlbGF5KHBsYXllckdhbWVib2FyZCkge1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKTtcbiAgICBpZiAoIWFpQXR0YWNrKCkpIHtcbiAgICAgIGlmIChwbGF5ZXJHYW1lYm9hcmQuaGFzQWxsU2hpcHNCZWVuU3VuaygpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid2lubmVyIGlzXCIsIGdldEN1cnJlbnRQbGF5ZXIoKSk7XG4gICAgICAgIHNldEVuZEdhbWVTdGF0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjaGFuZ2VDdXJyZW50UGxheWVyKCk7XG4gICAgICByZW5kZXJIZWFkZXJJbmZvKGdldEN1cnJlbnRQbGF5ZXIoKSwgXCJpcyBhdHRhY2tpbmcuLi5cIik7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgcG9wdWxhdGVHYW1lYm9hcmRzKCk7XG4gICAgcmVuZGVyQ3VycmVudFBsYXllckRpc3BsYXkoKTtcbiAgfVxufVxuXG4vLyBmdW5jdGlvbiBhaUF0dGFjaygpIHtcbi8vICAgLy8gZ2V0IHRoZSBib2FyZCBhaSBpcyBhdHRhY2tpbmdcbi8vICAgY29uc3Qgbm9uQUlQbGF5ZXIgPSBnZXRQbGF5ZXJzKClbMF07XG4vLyAgIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IG5vbkFJUGxheWVyLnBsYXllci5nYW1lYm9hcmQ7XG5cbi8vICAgY29uc3QgYXR0YWNrU2VxdWVuY2UgPSBnZXRBdHRhY2tTZXF1ZW5jZSgpO1xuLy8gICBhdHRhY2tTZXF1ZW5jZS5mb3JFYWNoKChjb29yZCkgPT4ge1xuLy8gICAgIGlmICghcGxheWVyR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmQpKSB7XG4vLyAgICAgICByZXR1cm4gZmFsc2U7XG4vLyAgICAgfVxuLy8gICB9KTtcblxuLy8gICByZXR1cm4gdHJ1ZTtcblxuLy8gICAvLyBpZiAoIXBsYXllckdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkKSkge1xuLy8gICAvLyAgIGNoYW5nZUN1cnJlbnRQbGF5ZXIoKTtcbi8vICAgLy8gICByZW5kZXJIZWFkZXJJbmZvKGdldEN1cnJlbnRQbGF5ZXIoKSwgXCJpcyBhdHRhY2tpbmcuLi5cIik7XG4vLyAgIC8vICAgcmV0dXJuO1xuLy8gICAvLyB9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGdldEF0dGFja1NlcXVlbmNlKCkge1xuLy8gICAvLyBnZXQgdGhlIGJvYXJkIGFpIGlzIGF0dGFja2luZ1xuLy8gICBjb25zdCBub25BSVBsYXllciA9IGdldFBsYXllcnMoKVswXTtcbi8vICAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gbm9uQUlQbGF5ZXIucGxheWVyLmdhbWVib2FyZDtcbi8vICAgY29uc3QgcGxheWVyR2FtZWJvYXJkQ3VycmVudENvb3JkcyA9IHBsYXllckdhbWVib2FyZC5jdXJyZW50Q29vcmRzO1xuXG4vLyAgIGNvbnN0IGF0dGFja1NlcXVlbmNlID0gW107XG5cbi8vICAgbGV0IGNvb3JkID0gZ2V0QUlBdHRhY2tDb29yZHMoKTtcbi8vICAgYXR0YWNrU2VxdWVuY2UucHVzaChjb29yZCk7XG5cbi8vICAgY29uc29sZS5sb2coY29vcmQpO1xuLy8gICBjb25zb2xlLmxvZyhwbGF5ZXJHYW1lYm9hcmRDdXJyZW50Q29vcmRzKTtcbi8vICAgd2hpbGUgKGhhc0Nvb3JkQ29sbGlzaW9uKGNvb3JkLCBwbGF5ZXJHYW1lYm9hcmRDdXJyZW50Q29vcmRzKSkge1xuLy8gICAgIGNvb3JkID0gZ2V0QUlBdHRhY2tDb29yZHMoKTtcbi8vICAgICBhdHRhY2tTZXF1ZW5jZS5wdXNoKGNvb3JkKTtcbi8vICAgfVxuXG4vLyAgIHJldHVybiBhdHRhY2tTZXF1ZW5jZTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZ2V0QUlBdHRhY2tDb29yZHMoKSB7XG4vLyAgIC8vIGdldCB0aGUgYm9hcmQgYWkgaXMgYXR0YWNraW5nXG4vLyAgIGNvbnN0IG5vbkFJUGxheWVyID0gZ2V0UGxheWVycygpWzBdO1xuLy8gICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBub25BSVBsYXllci5wbGF5ZXIuZ2FtZWJvYXJkO1xuLy8gICAvLyBkYXRhIHRvIGNoZWNrIGFnYWluc3QgY29vcmRzXG4vLyAgIGNvbnN0IGhpdFNob3RzID0gcGxheWVyR2FtZWJvYXJkLmhpdFNob3RzO1xuLy8gICBjb25zdCBtaXNzZWRTaG90cyA9IHBsYXllckdhbWVib2FyZC5taXNzZWRTaG90cztcbi8vICAgY29uc3Qgc3Vycm91bmRpbmdTaG90cyA9IHBsYXllckdhbWVib2FyZC5zdXJyb3VuZGluZ1Nob3RzO1xuXG4vLyAgIC8vIGdlbmVyYXRlIHggYW5kIHkgY29vcmRcbi8vICAgbGV0IHhfY29vcmQgPSBnZW5lcmF0ZVJhbmRvbU51bWJlcigpO1xuLy8gICBsZXQgeV9jb29yZCA9IGdlbmVyYXRlUmFuZG9tTnVtYmVyKCk7XG5cbi8vICAgd2hpbGUgKFxuLy8gICAgIGhhc0Nvb3JkQ29sbGlzaW9uKFt4X2Nvb3JkLCB5X2Nvb3JkXSwgaGl0U2hvdHMpIHx8XG4vLyAgICAgaGFzQ29vcmRDb2xsaXNpb24oW3hfY29vcmQsIHlfY29vcmRdLCBtaXNzZWRTaG90cykgfHxcbi8vICAgICBoYXNDb29yZENvbGxpc2lvbihbeF9jb29yZCwgeV9jb29yZF0sIHN1cnJvdW5kaW5nU2hvdHMpXG4vLyAgICkge1xuLy8gICAgIHhfY29vcmQgPSBnZW5lcmF0ZVJhbmRvbU51bWJlcigpO1xuLy8gICAgIHlfY29vcmQgPSBnZW5lcmF0ZVJhbmRvbU51bWJlcigpO1xuLy8gICB9XG5cbi8vICAgY29uc3QgY29vcmQgPSBbeF9jb29yZCwgeV9jb29yZF07XG5cbi8vICAgcmV0dXJuIGNvb3JkO1xuLy8gfVxuXG5mdW5jdGlvbiBhaUF0dGFjaygpIHtcbiAgLy8gZ2V0IHRoZSBib2FyZCBhaSBpcyBhdHRhY2tpbmdcbiAgY29uc3Qgbm9uQUlQbGF5ZXIgPSBnZXRQbGF5ZXJzKClbMF07XG4gIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IG5vbkFJUGxheWVyLnBsYXllci5nYW1lYm9hcmQ7XG5cbiAgaWYgKHBsYXllckdhbWVib2FyZC5oYXNBbGxTaGlwc0JlZW5TdW5rKCkpIHtcbiAgICBjb25zb2xlLmxvZyhcIndpbm5lciBpc1wiLCBnZXRDdXJyZW50UGxheWVyKCkpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBkYXRhIHRvIGNoZWNrIGFnYWluc3QgY29vcmRzXG4gIGNvbnN0IGhpdFNob3RzID0gcGxheWVyR2FtZWJvYXJkLmhpdFNob3RzO1xuICBjb25zdCBtaXNzZWRTaG90cyA9IHBsYXllckdhbWVib2FyZC5taXNzZWRTaG90cztcbiAgY29uc3Qgc3Vycm91bmRpbmdTaG90cyA9IHBsYXllckdhbWVib2FyZC5zdXJyb3VuZGluZ1Nob3RzO1xuXG4gIC8vIGdlbmVyYXRlIHggYW5kIHkgY29vcmRcbiAgbGV0IHhfY29vcmQgPSBnZW5lcmF0ZVJhbmRvbU51bWJlcigpO1xuICBsZXQgeV9jb29yZCA9IGdlbmVyYXRlUmFuZG9tTnVtYmVyKCk7XG5cbiAgd2hpbGUgKFxuICAgIGhhc0Nvb3JkQ29sbGlzaW9uKFt4X2Nvb3JkLCB5X2Nvb3JkXSwgaGl0U2hvdHMpIHx8XG4gICAgaGFzQ29vcmRDb2xsaXNpb24oW3hfY29vcmQsIHlfY29vcmRdLCBtaXNzZWRTaG90cykgfHxcbiAgICBoYXNDb29yZENvbGxpc2lvbihbeF9jb29yZCwgeV9jb29yZF0sIHN1cnJvdW5kaW5nU2hvdHMpXG4gICkge1xuICAgIHhfY29vcmQgPSBnZW5lcmF0ZVJhbmRvbU51bWJlcigpO1xuICAgIHlfY29vcmQgPSBnZW5lcmF0ZVJhbmRvbU51bWJlcigpO1xuICB9XG5cbiAgY29uc3QgY29vcmQgPSBbeF9jb29yZCwgeV9jb29yZF07XG5cbiAgY29uc3QgaXNTdWNjZXNzZnVsID0gcGxheWVyR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmQpO1xuXG4gIGNvbnN0IGN1cnJlbnRTaGlwID0gcGxheWVyR2FtZWJvYXJkLl9nZXRTaGlwKFt4X2Nvb3JkLCB5X2Nvb3JkXSk7XG5cbiAgaWYgKGN1cnJlbnRTaGlwICYmIGN1cnJlbnRTaGlwLnN1bmspIHtcbiAgICBjb25zdCBzdXJyb3VuZGluZ0Nvb3JkcyA9IHBsYXllckdhbWVib2FyZC5fZ2V0U2hpcFN1cnJvdW5kaW5nQ29vcmRzKFtcbiAgICAgIHhfY29vcmQsXG4gICAgICB5X2Nvb3JkLFxuICAgIF0pO1xuICAgIHBsYXllckdhbWVib2FyZC5zdXJyb3VuZGluZ1Nob3RzLnB1c2goLi4uc3Vycm91bmRpbmdDb29yZHMpO1xuICB9XG5cbiAgcmV0dXJuIGlzU3VjY2Vzc2Z1bDtcbn1cblxuZnVuY3Rpb24gaGFzQ29vcmRDb2xsaXNpb24oY29vcmQsIG90aGVyQ29vcmQpIHtcbiAgcmV0dXJuIG90aGVyQ29vcmQuc29tZSgoZXhpc3RpbmdDb29yZCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGFycmF5c0VxdWFsKGV4aXN0aW5nQ29vcmQsIGNvb3JkKSk7XG4gICAgcmV0dXJuIGFycmF5c0VxdWFsKGV4aXN0aW5nQ29vcmQsIGNvb3JkKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBhcnJheXNFcXVhbChhcnIxLCBhcnIyKSB7XG4gIGlmIChhcnIxLmxlbmd0aCAhPT0gYXJyMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGFycjEuZXZlcnkoKGVsZW1lbnQsIGluZGV4KSA9PiBlbGVtZW50ID09PSBhcnIyW2luZGV4XSk7XG59XG5cbmZ1bmN0aW9uIGhpdFNoaXAocGxheWVyKSB7XG4gIGNvbnN0IHBsYXllckRhdGFzZXQgPSB7IC4uLnBsYXllciB9O1xuXG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBnZXRQbGF5ZXJzKClbcGFyc2VJbnQocGxheWVyRGF0YXNldC5wbGF5ZXIpXTtcbiAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gY3VycmVudFBsYXllci5wbGF5ZXIuZ2FtZWJvYXJkO1xuXG4gIGNvbnN0IHhfY29vcmQgPSBwYXJzZUludChwbGF5ZXJEYXRhc2V0LmNvbHVtbik7XG4gIGNvbnN0IHlfY29vcmQgPSBwYXJzZUludChwbGF5ZXJEYXRhc2V0LnJvdyk7XG4gIGNvbnN0IGNvb3JkID0gW3hfY29vcmQsIHlfY29vcmRdO1xuICByZXR1cm4gcGxheWVyR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmQpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUdhbWVib2FyZHMoKSB7XG4gIGNvbnN0IHBsYXllcnMgPSBnZXRQbGF5ZXJzKCk7XG4gIHJlbmRlclBsYXllck5hbWVzKHBsYXllcnMpO1xuICByZW5kZXJIZWFkZXJJbmZvKGdldEN1cnJlbnRQbGF5ZXIoKSwgXCJpcyBhdHRhY2tpbmcuLi5cIik7XG5cbiAgcGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICByZW5kZXJQbGF5ZXJCb2FyZChwbGF5ZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ3VycmVudFBsYXllckRpc3BsYXkoKSB7XG4gIC8vIGdldCBwbGF5ZXIgYm9hcmQgZGl2c1xuICBjb25zdCBQbGF5ZXIxQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0xLWJvYXJkXCIpO1xuICBjb25zdCBQbGF5ZXIyQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0yLWJvYXJkXCIpO1xuXG4gIC8vIHJlc2V0IGJvYXJkcyBvcGFjaXR5XG4gIFBsYXllcjFCb2FyZERpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGFsZi1vcGFjaXR5XCIpO1xuICBQbGF5ZXIyQm9hcmREaXYuY2xhc3NMaXN0LnJlbW92ZShcImhhbGYtb3BhY2l0eVwiKTtcblxuICAvLyBzZXQgY3VycmVudCBwbGF5ZXIgYm9hcmQgb3BhY2l0eVxuICBzZXRCb2FyZE9wYWNpdHkoKTtcblxuICAvLyBzZXQgcGxheWVycyBib2FyZCBldmVudExpc3RlbmVyc1xuICBjb25zdCBub25DdXJyZW50UGxheWVyQm9hcmQgPSBbLi4uZ2V0Tm9uQ3VycmVudFBsYXllckRvbUJvYXJkKCldO1xuICBjb25zdCBjdXJyZW50UGxheWVyQm9hcmQgPSBbLi4uZ2V0Q3VycmVudFBsYXllckRvbUJvYXJkKCldO1xuICAvLyBzZXQgY3VycmVudCBwbGF5ZXJzIGJvYXJkIHVuY2xpY2thYmxlXG4gIHNldFBsYXllckJvYXJkRXZlbnRMaXN0ZW5lcihjdXJyZW50UGxheWVyQm9hcmQsIHRydWUpO1xuICAvLyBzZXQgbm9uIGN1cnJlbnQgcGxheWVycyBib2FyZCBjbGlja2FibGVcbiAgc2V0UGxheWVyQm9hcmRFdmVudExpc3RlbmVyKG5vbkN1cnJlbnRQbGF5ZXJCb2FyZCwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBzZXRCb2FyZE9wYWNpdHkoc2hvdWxkU2V0Qm90aEJvYXJkID0gZmFsc2UpIHtcbiAgY29uc3QgY3VycmVudFBsYXllciA9IGdldEN1cnJlbnRQbGF5ZXIoKTtcbiAgY29uc3Qgbm9uQ3VycmVudFBsYXllciA9IGdldE9wcG9zaW5nUGxheWVyKCk7XG4gIGNvbnN0IG9wcG9zaW5nbGF5ZXJCb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC4ke25vbkN1cnJlbnRQbGF5ZXIubmFtZX0tYm9hcmRgXG4gICk7XG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXJCb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC4ke2N1cnJlbnRQbGF5ZXIubmFtZX0tYm9hcmRgXG4gICk7XG4gIG9wcG9zaW5nbGF5ZXJCb2FyZERpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGFsZi1vcGFjaXR5XCIpO1xuICBjdXJyZW50UGxheWVyQm9hcmREaXYuY2xhc3NMaXN0LnJlbW92ZShcImhhbGYtb3BhY2l0eVwiKTtcbiAgaWYgKHNob3VsZFNldEJvdGhCb2FyZCkge1xuICAgIG9wcG9zaW5nbGF5ZXJCb2FyZERpdi5jbGFzc0xpc3QuYWRkKFwiaGFsZi1vcGFjaXR5XCIpO1xuICB9XG5cbiAgY3VycmVudFBsYXllckJvYXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJoYWxmLW9wYWNpdHlcIik7XG59XG5cbmZ1bmN0aW9uIHNldEVuZEdhbWVTdGF0ZSgpIHtcbiAgcG9wdWxhdGVHYW1lYm9hcmRzKCk7XG4gIHJlbmRlckhlYWRlckluZm8oZ2V0Q3VycmVudFBsYXllcigpLCBcImhhcyB3b25cIik7XG4gIHNldEdhbWVTdGF0ZShcImlzRmluaXNoZWRcIiwgdHJ1ZSk7XG4gIGNvbnN0IG5vbkN1cnJlbnRQbGF5ZXJCb2FyZCA9IFsuLi5nZXROb25DdXJyZW50UGxheWVyRG9tQm9hcmQoKV07XG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXJCb2FyZCA9IFsuLi5nZXRDdXJyZW50UGxheWVyRG9tQm9hcmQoKV07XG4gIGNvbnNvbGUubG9nKGN1cnJlbnRQbGF5ZXJCb2FyZCk7XG4gIGNvbnNvbGUubG9nKG5vbkN1cnJlbnRQbGF5ZXJCb2FyZCk7XG4gIHNldFBsYXllckJvYXJkRXZlbnRMaXN0ZW5lcihjdXJyZW50UGxheWVyQm9hcmQsIHRydWUpO1xuICBzZXRQbGF5ZXJCb2FyZEV2ZW50TGlzdGVuZXIobm9uQ3VycmVudFBsYXllckJvYXJkLCB0cnVlKTtcbiAgc2V0Qm9hcmRPcGFjaXR5KHRydWUpO1xuXG4gIC8vIHBvcHVsYXRlIHBsYXkgYWdhaW4gYnV0dG9uXG4gIHBsYXlBZ2FpbigpO1xufVxuXG5mdW5jdGlvbiBzZXRCZWZvcmVHYW1lU3RhdGUoKSB7XG4gIGNvbnN0IG5vbkN1cnJlbnRQbGF5ZXJCb2FyZCA9IFsuLi5nZXROb25DdXJyZW50UGxheWVyRG9tQm9hcmQoKV07XG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXJCb2FyZCA9IFsuLi5nZXRDdXJyZW50UGxheWVyRG9tQm9hcmQoKV07XG4gIHNldFBsYXllckJvYXJkRXZlbnRMaXN0ZW5lcihjdXJyZW50UGxheWVyQm9hcmQsIHRydWUpO1xuICBzZXRQbGF5ZXJCb2FyZEV2ZW50TGlzdGVuZXIobm9uQ3VycmVudFBsYXllckJvYXJkLCB0cnVlKTtcbiAgc2V0Qm9hcmRPcGFjaXR5KHRydWUpO1xufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIGNvbnN0IG5vbkN1cnJlbnRQbGF5ZXJCb2FyZCA9IFsuLi5nZXROb25DdXJyZW50UGxheWVyRG9tQm9hcmQoKV07XG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXJCb2FyZCA9IFsuLi5nZXRDdXJyZW50UGxheWVyRG9tQm9hcmQoKV07XG4gIHNldFBsYXllckJvYXJkRXZlbnRMaXN0ZW5lcihjdXJyZW50UGxheWVyQm9hcmQsIGZhbHNlKTtcbiAgc2V0UGxheWVyQm9hcmRFdmVudExpc3RlbmVyKG5vbkN1cnJlbnRQbGF5ZXJCb2FyZCwgZmFsc2UpO1xuICBzZXRCb2FyZE9wYWNpdHkoZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBzZXRQbGF5ZXJCb2FyZEV2ZW50TGlzdGVuZXIoYm9hcmQsIHNob3VsZFJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgaWYgKHNob3VsZFJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICBib2FyZC5mb3JFYWNoKChkaXYpID0+IHtcbiAgICAgIGRpdi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRGl2Q2xpY2spO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGJvYXJkLmZvckVhY2goKGRpdikgPT4ge1xuICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVEaXZDbGljayk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyUGxheWVyQm9hcmQocGxheWVyKSB7XG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIucGxheWVyO1xuXG4gIC8vcmVuZGVyIGN1cnJlbnRjb29yZHNcbiAgLy8gaWYgcGxheWVyIGlzIGFpIGRvbnQgcmVuZGVyIGN1cnJlbnRjb29yZHNcbiAgaWYgKHBsYXllci5wbGF5ZXIudHlwZSAhPT0gXCJhaVwiKSB7XG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBBcnJheS5mcm9tKHBsYXllci5ib2FyZCk7XG4gICAgcGxheWVyQm9hcmQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKTtcbiAgICB9KTtcbiAgICByZW5kZXJHYW1lYm9hcmREYXRhKFxuICAgICAgcGxheWVyLFxuICAgICAgY3VycmVudFBsYXllci5nYW1lYm9hcmQuY3VycmVudENvb3JkcyxcbiAgICAgIFwiXCIsXG4gICAgICBcInNoaXBcIixcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgfVxuXG4gIC8vcmVuZGVyIHN1Y2Nlc3NmdWwgaGl0c2hvdHNcbiAgcmVuZGVyR2FtZWJvYXJkRGF0YShwbGF5ZXIsIGN1cnJlbnRQbGF5ZXIuZ2FtZWJvYXJkLmhpdFNob3RzLCBcIuKdjFwiLCBcImhpdFwiKTtcblxuICAvL3JlbmRlciBtaXNzZWRzaG90c1xuICByZW5kZXJHYW1lYm9hcmREYXRhKFxuICAgIHBsYXllcixcbiAgICBjdXJyZW50UGxheWVyLmdhbWVib2FyZC5taXNzZWRTaG90cyxcbiAgICBcIuKWqu+4j1wiLFxuICAgIFwibWlzc2VkXCJcbiAgKTtcblxuICAvLyByZW5kZXIgc3Vycm91bmRpbmcgc2hvdHNcbiAgcmVuZGVyR2FtZWJvYXJkRGF0YShcbiAgICBwbGF5ZXIsXG4gICAgY3VycmVudFBsYXllci5nYW1lYm9hcmQuc3Vycm91bmRpbmdTaG90cyxcbiAgICBcIuKWqu+4j1wiLFxuICAgIFwic3Vycm91bmRcIlxuICApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJHYW1lYm9hcmREYXRhKFxuICBwbGF5ZXIsXG4gIGRhdGEsXG4gIHRleHQsXG4gIGNsYXNzTmFtZSxcbiAgc2hvdWxkUmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHRydWVcbikge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IEFycmF5LmZyb20ocGxheWVyLmJvYXJkKTtcblxuICBkYXRhLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZmluZENvcnJlc3BvbmRpbmdEaXYoY29vcmQsIHBsYXllckJvYXJkKTtcblxuICAgIGRpdi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBnZW5lcmF0ZUNvb3JkTnVtcyhkaXYpO1xuICAgIC8vIHByZXZlbnQgY2xpY2tpbmcgdGhlIHNhbWUgY29vcmQgYWdhaW5cbiAgICBpZiAoc2hvdWxkUmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgZGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVEaXZDbGljayk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZmluZENvcnJlc3BvbmRpbmdEaXYoY29vcmQsIGJvYXJkKSB7XG4gIGNvbnN0IFt4X2Nvb3JkLCB5X2Nvb3JkXSA9IGNvb3JkO1xuXG4gIGNvbnN0IGRpdiA9IGJvYXJkLmZpbmQoKGRpdikgPT4ge1xuICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KGRpdi5kYXRhc2V0LnJvdyk7XG4gICAgY29uc3QgY29sdW1uID0gcGFyc2VJbnQoZGl2LmRhdGFzZXQuY29sdW1uKTtcbiAgICByZXR1cm4gcm93ID09PSB5X2Nvb3JkICYmIGNvbHVtbiA9PT0geF9jb29yZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUGxheWVyTmFtZXMocGxheWVycykge1xuICBjb25zdCBwbGF5ZXIxRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItMS10ZXh0XCIpO1xuICBjb25zdCBwbGF5ZXIyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItMi10ZXh0XCIpO1xuXG4gIHBsYXllcjFEaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICBwbGF5ZXIyRGl2LnRleHRDb250ZW50ID0gXCJcIjtcblxuICBwbGF5ZXIxRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRpbmcoYCR7cGxheWVyc1swXS5wbGF5ZXIubmFtZX1gLCBcImgyXCIpKTtcbiAgcGxheWVyMkRpdi5hcHBlbmRDaGlsZChjcmVhdGVIZWFkaW5nKGAke3BsYXllcnNbMV0ucGxheWVyLm5hbWV9YCwgXCJoMlwiKSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckhlYWRlckluZm8ocGxheWVyLCB0ZXh0KSB7XG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXJIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtcGxheWVyLWhlYWRlclwiKTtcbiAgY3VycmVudFBsYXllckhlYWRlci5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkaW5nKGAke3BsYXllci5uYW1lfSAke3RleHR9YCwgXCJoMVwiKTtcblxuICBjdXJyZW50UGxheWVySGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRpbmcodGV4dCwgaGVhZGluZykge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGhlYWRpbmcpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNwYW4oY2xhc3NOYW1lLCB0ZXh0KSB7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHNwYW4uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXG4gIHJldHVybiBzcGFuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEaXYoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIHJldHVybiBkaXY7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbU51bWJlcigpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbn1cblxuZXhwb3J0IHtcbiAgaW5pdERvbSxcbiAgcG9wdWxhdGVHYW1lYm9hcmRzLFxuICByZW5kZXJHYW1lYm9hcmREYXRhLFxuICBzdGFydEdhbWUsXG4gIHNldEJlZm9yZUdhbWVTdGF0ZSxcbn07XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyL3BsYXllci1jbGFzc1wiO1xuaW1wb3J0IHtcbiAgaW5pdERvbSxcbiAgcG9wdWxhdGVHYW1lYm9hcmRzLFxuICBzZXRCZWZvcmVHYW1lU3RhdGUsXG59IGZyb20gXCIuLi9kb20tbWFuaXAvZG9tLW1hbmlwXCI7XG5pbXBvcnQgeyBpbml0QnV0dG9ucyB9IGZyb20gXCIuLi9kb20tbWFuaXAvZG9tLWJ1dHRvbnNcIjtcblxubGV0IHBsYXllcnMgPSBbXTtcbmxldCBnYW1lU3RhdGU7XG5cbmZ1bmN0aW9uIGdldEJvYXJkc0RPTShpbmRleCkge1xuICBjb25zdCBib2FyZHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmRcIikpO1xuICBjb25zdCBib2FyZHNDaGlsZE5vZGVzID0gW2JvYXJkc1swXS5jaGlsZHJlbiwgYm9hcmRzWzFdLmNoaWxkcmVuXTtcbiAgcmV0dXJuIGJvYXJkc0NoaWxkTm9kZXNbaW5kZXhdO1xufVxuXG5mdW5jdGlvbiBpbml0UGxheWVycyhwbGF5ZXIxVHlwZSwgcGxheWVyMlR5cGUsIHBsYXllcjFOYW1lLCBwbGF5ZXIyTmFtZSkge1xuICBwbGF5ZXJzID0gW1xuICAgIHtcbiAgICAgIHBsYXllcjogY3JlYXRlUGxheWVyKHBsYXllcjFUeXBlLCBwbGF5ZXIxTmFtZSksXG4gICAgICBib2FyZDogZ2V0Qm9hcmRzRE9NKDApLFxuICAgIH0sXG4gICAge1xuICAgICAgcGxheWVyOiBjcmVhdGVQbGF5ZXIocGxheWVyMlR5cGUsIHBsYXllcjJOYW1lKSxcbiAgICAgIGJvYXJkOiBnZXRCb2FyZHNET00oMSksXG4gICAgfSxcbiAgXTtcbiAgLy8gY29uc29sZS5sb2cocGxheWVycyk7XG59XG5mdW5jdGlvbiByZUluaXRQbGF5ZXIocGxheWVyMVR5cGUsIHBsYXllcjFOYW1lKSB7XG4gIHBsYXllcnNbMF0gPSB7XG4gICAgcGxheWVyOiBjcmVhdGVQbGF5ZXIocGxheWVyMVR5cGUsIHBsYXllcjFOYW1lKSxcbiAgICBib2FyZDogZ2V0Qm9hcmRzRE9NKDApLFxuICB9O1xuICBpbml0R2FtZVN0YXRlKCk7XG4gIHBvcHVsYXRlR2FtZWJvYXJkcygpO1xuICBzZXRCZWZvcmVHYW1lU3RhdGUoKTtcbiAgY29uc29sZS5sb2cocGxheWVycyk7XG59XG5mdW5jdGlvbiBpbml0R2FtZVN0YXRlKCkge1xuICBnYW1lU3RhdGUgPSB7XG4gICAgY3VycmVudFBsYXllcjogcGxheWVyc1swXS5wbGF5ZXIsXG4gICAgY3VycmVudFBsYXllckJvYXJkOiBwbGF5ZXJzWzBdLmJvYXJkLFxuICAgIGlzRmluaXNoZWQ6IGZhbHNlLFxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQbGF5ZXIocGxheWVyVHlwZSwgcGxheWVyTmFtZSkge1xuICByZXR1cm4gbmV3IFBsYXllcihwbGF5ZXJUeXBlLCBwbGF5ZXJOYW1lKTtcbn1cbmZ1bmN0aW9uIGdldFBsYXllcnMoKSB7XG4gIHJldHVybiBwbGF5ZXJzO1xufVxuZnVuY3Rpb24gZ2V0R2FtZVN0YXRlKCkge1xuICByZXR1cm4gZ2FtZVN0YXRlO1xufVxuZnVuY3Rpb24gc2V0R2FtZVN0YXRlKGtleSwgdmFsdWUpIHtcbiAgZ2FtZVN0YXRlW2Ake2tleX1gXSA9IHZhbHVlO1xufVxuZnVuY3Rpb24gZ2V0Q3VycmVudFBsYXllcigpIHtcbiAgcmV0dXJuIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyO1xufVxuZnVuY3Rpb24gZ2V0Q3VycmVudFBsYXllckRvbUJvYXJkKCkge1xuICByZXR1cm4gZ2FtZVN0YXRlLmN1cnJlbnRQbGF5ZXJCb2FyZDtcbn1cbmZ1bmN0aW9uIGdldE5vbkN1cnJlbnRQbGF5ZXJEb21Cb2FyZCgpIHtcbiAgcmV0dXJuIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyID09PSBwbGF5ZXJzWzBdLnBsYXllclxuICAgID8gcGxheWVyc1sxXS5ib2FyZFxuICAgIDogcGxheWVyc1swXS5ib2FyZDtcbn1cbmZ1bmN0aW9uIGdldE9wcG9zaW5nUGxheWVyKCkge1xuICByZXR1cm4gZ2FtZVN0YXRlLmN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcnNbMF0ucGxheWVyXG4gICAgPyBwbGF5ZXJzWzFdLnBsYXllclxuICAgIDogcGxheWVyc1swXS5wbGF5ZXI7XG59XG5mdW5jdGlvbiBjaGFuZ2VDdXJyZW50UGxheWVyKCkge1xuICBnYW1lU3RhdGUuY3VycmVudFBsYXllciA9XG4gICAgZ2FtZVN0YXRlLmN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcnNbMF0ucGxheWVyXG4gICAgICA/IChnYW1lU3RhdGUuY3VycmVudFBsYXllciA9IHBsYXllcnNbMV0ucGxheWVyKVxuICAgICAgOiAoZ2FtZVN0YXRlLmN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJzWzBdLnBsYXllcik7XG5cbiAgZ2FtZVN0YXRlLmN1cnJlbnRQbGF5ZXJCb2FyZCA9XG4gICAgZ2FtZVN0YXRlLmN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcnNbMF0ucGxheWVyXG4gICAgICA/IHBsYXllcnNbMF0uYm9hcmRcbiAgICAgIDogcGxheWVyc1sxXS5ib2FyZDtcbn1cblxuZnVuY3Rpb24gaW5pdEdhbWUocGxheWVyMSwgcGxheWVyMikge1xuICBpbml0RG9tKCk7XG4gIGluaXRQbGF5ZXJzKHBsYXllcjEudHlwZSwgcGxheWVyMi50eXBlLCBwbGF5ZXIxLm5hbWUsIHBsYXllcjIubmFtZSk7XG4gIGluaXRHYW1lU3RhdGUoKTtcbiAgcG9wdWxhdGVHYW1lYm9hcmRzKCk7XG4gIHNldEJlZm9yZUdhbWVTdGF0ZSgpO1xufVxuXG5leHBvcnQge1xuICBpbml0R2FtZSxcbiAgZ2V0UGxheWVycyxcbiAgZ2V0R2FtZVN0YXRlLFxuICBjaGFuZ2VDdXJyZW50UGxheWVyLFxuICBnZXRDdXJyZW50UGxheWVyLFxuICBnZXRPcHBvc2luZ1BsYXllcixcbiAgZ2V0Q3VycmVudFBsYXllckRvbUJvYXJkLFxuICBnZXROb25DdXJyZW50UGxheWVyRG9tQm9hcmQsXG4gIHNldEdhbWVTdGF0ZSxcbiAgcmVJbml0UGxheWVyLFxufTtcbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi4vc2hpcC9zaGlwLWNsYXNzXCI7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICB0aGlzLm1pc3NlZFNob3RzID0gW107XG4gICAgdGhpcy5oaXRTaG90cyA9IFtdO1xuICAgIHRoaXMuY3VycmVudENvb3JkcyA9IFtdO1xuICAgIHRoaXMuc3Vycm91bmRpbmdDb29yZHMgPSBbXTtcbiAgICB0aGlzLnN1cnJvdW5kaW5nU2hvdHMgPSBbXTtcbiAgICB0aGlzLl9nZW5lcmF0ZVNoaXBNYXAoKTtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IHNoaXAgPSB0aGlzLl9nZXRTaGlwKGNvb3JkaW5hdGUpO1xuICAgIGlmIChzaGlwICYmICFzaGlwLnN1bmspIHtcbiAgICAgIHNoaXAuaGl0KCk7XG4gICAgICB0aGlzLmhpdFNob3RzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICB0aGlzLmN1cnJlbnRDb29yZHMuc3BsaWNlKFxuICAgICAgICBmaW5kSW5kZXhvZkl0ZW1JbkFycmF5KHRoaXMuY3VycmVudENvb3JkcywgY29vcmRpbmF0ZSksXG4gICAgICAgIDFcbiAgICAgICk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5taXNzZWRTaG90cy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGhhc0FsbFNoaXBzQmVlblN1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpcHMuZXZlcnkoKHNoaXApID0+IHtcbiAgICAgIHJldHVybiBzaGlwLnNoaXAuc3VuayA9PT0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIF9nZXRTaGlwKGNvb3JkaW5hdGUpIHtcbiAgICBmb3IgKGNvbnN0IHNoaXAgb2YgdGhpcy5zaGlwcykge1xuICAgICAgZm9yIChjb25zdCBjb29yZCBvZiBzaGlwLmNvb3Jkcykge1xuICAgICAgICBpZiAoYXJyYXlzRXF1YWwoY29vcmQsIGNvb3JkaW5hdGUpKSB7XG4gICAgICAgICAgcmV0dXJuIHNoaXAuc2hpcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBfZ2V0U2hpcFN1cnJvdW5kaW5nQ29vcmRzKGNvb3JkaW5hdGUpIHtcbiAgICBmb3IgKGNvbnN0IHNoaXAgb2YgdGhpcy5zaGlwcykge1xuICAgICAgZm9yIChjb25zdCBjb29yZCBvZiBzaGlwLmNvb3Jkcykge1xuICAgICAgICBpZiAoYXJyYXlzRXF1YWwoY29vcmQsIGNvb3JkaW5hdGUpKSB7XG4gICAgICAgICAgcmV0dXJuIHNoaXAuc3Vycm91bmRpbmdDb29yZHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBfZ2VuZXJhdGVTaGlwTWFwKCkge1xuICAgIHRoaXMuc2hpcHMucHVzaCh0aGlzLl9nZW5lcmF0ZVNoaXAoNCkpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgIHRoaXMuc2hpcHMucHVzaCh0aGlzLl9nZW5lcmF0ZVNoaXAoMykpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICB0aGlzLnNoaXBzLnB1c2godGhpcy5fZ2VuZXJhdGVTaGlwKDIpKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgdGhpcy5zaGlwcy5wdXNoKHRoaXMuX2dlbmVyYXRlU2hpcCgxKSk7XG4gICAgfVxuXG4gICAgdGhpcy5zdXJyb3VuZGluZ0Nvb3JkcyA9IHJlbW92ZUR1cGxpY2F0ZUFycmF5cyh0aGlzLnN1cnJvdW5kaW5nQ29vcmRzKTtcbiAgfVxuXG4gIF9nZW5lcmF0ZVNoaXAobGVuZ3RoLCB4X2Nvb3JkID0gbnVsbCwgeV9jb29yZCA9IG51bGwpIHtcbiAgICBjb25zdCB7IGNvb3Jkcywgc3Vycm91bmRpbmdDb29yZHMgfSA9IHRoaXMuX2dlbmVyYXRlQ29vcmQoXG4gICAgICBsZW5ndGgsXG4gICAgICB4X2Nvb3JkLFxuICAgICAgeV9jb29yZFxuICAgICk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvb3JkcyxcbiAgICAgIHN1cnJvdW5kaW5nQ29vcmRzLFxuICAgICAgc2hpcDogbmV3IFNoaXAobGVuZ3RoKSxcbiAgICB9O1xuICB9XG5cbiAgX2dlbmVyYXRlQ29vcmQobGVuZ3RoLCB4X2Nvb3JkID0gbnVsbCwgeV9jb29yZCA9IG51bGwpIHtcbiAgICBsZXQgeCA9IHhfY29vcmQgPT09IG51bGwgPyB0aGlzLl9nZW5lcmF0ZVJhbmRvbU51bWJlcigpIDogeF9jb29yZDtcbiAgICBsZXQgeSA9IHlfY29vcmQgPT09IG51bGwgPyB0aGlzLl9nZW5lcmF0ZVJhbmRvbU51bWJlcigpIDogeV9jb29yZDtcbiAgICBjb25zdCBvcmllbnRhdGlvblggPSBNYXRoLnJhbmRvbSgpID49IDAuNTtcbiAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjAwO1xuXG4gICAgd2hpbGUgKGF0dGVtcHRzIDwgbWF4QXR0ZW1wdHMpIHtcbiAgICAgIGF0dGVtcHRzKys7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX2lzVmFsaWRDb29yZCh4LCB5LCBsZW5ndGgsIG9yaWVudGF0aW9uWCkgJiZcbiAgICAgICAgIXRoaXMuX3ByZWRpY3RDb2xsaXNpb25XaXRoQ3VycmVudENvb3JkcyhcbiAgICAgICAgICBvcmllbnRhdGlvblggPyBcInhcIiA6IFwieVwiLFxuICAgICAgICAgIHgsXG4gICAgICAgICAgeSxcbiAgICAgICAgICBsZW5ndGhcbiAgICAgICAgKSAmJlxuICAgICAgICAhdGhpcy5fcHJlZGljdENvbGxpc2lvbldpdGhTdXJyb3VuZGluZ0Nvb3JkcyhcbiAgICAgICAgICBvcmllbnRhdGlvblggPyBcInhcIiA6IFwieVwiLFxuICAgICAgICAgIHgsXG4gICAgICAgICAgeSxcbiAgICAgICAgICBsZW5ndGhcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgeCA9IHRoaXMuX2dlbmVyYXRlUmFuZG9tTnVtYmVyKCk7XG4gICAgICB5ID0gdGhpcy5fZ2VuZXJhdGVSYW5kb21OdW1iZXIoKTtcbiAgICB9XG5cbiAgICBpZiAoYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBnZW5lcmF0ZSB2YWxpZCBjb29yZGluYXRlcyBhZnRlciAke21heEF0dGVtcHRzfSBhdHRlbXB0c2BcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgY29vcmRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29vcmRzLnB1c2goW3gsIHldKTtcbiAgICAgIHRoaXMuY3VycmVudENvb3Jkcy5wdXNoKFt4LCB5XSk7XG4gICAgICBpZiAob3JpZW50YXRpb25YKSB7XG4gICAgICAgIHgrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHkrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzdXJyb3VuZGluZ0Nvb3JkcyA9IHRoaXMuX2dldFN1cnJvdW5kaW5nQ29vcmRzKFxuICAgICAgY29vcmRzLFxuICAgICAgbGVuZ3RoLFxuICAgICAgb3JpZW50YXRpb25YXG4gICAgKTtcbiAgICB0aGlzLnN1cnJvdW5kaW5nQ29vcmRzLnB1c2goLi4uc3Vycm91bmRpbmdDb29yZHMpO1xuXG4gICAgcmV0dXJuIHsgY29vcmRzLCBzdXJyb3VuZGluZ0Nvb3JkcyB9O1xuICB9XG5cbiAgX2dldFN1cnJvdW5kaW5nQ29vcmRzKGNvb3JkLCBsZW5ndGgsIG9yaWVudGF0aW9uWCkge1xuICAgIGNvbnN0IHN1ckNvb3JkQXJyYXkgPSBbXTtcbiAgICBzdXJDb29yZEFycmF5LnB1c2godGhpcy5fZ2V0VXBwZXJSb3dDb29yZHMoY29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb25YKSk7XG4gICAgc3VyQ29vcmRBcnJheS5wdXNoKHRoaXMuX2dldEJvdHRvbVJvd0Nvb3Jkcyhjb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvblgpKTtcbiAgICBzdXJDb29yZEFycmF5LnB1c2godGhpcy5fZ2V0UmlnaHRDb29yZHMoY29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb25YKSk7XG4gICAgc3VyQ29vcmRBcnJheS5wdXNoKHRoaXMuX2dldExlZnRDb29yZHMoY29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb25YKSk7XG5cbiAgICByZXR1cm4gc3VyQ29vcmRBcnJheS5mbGF0KCk7XG4gIH1cblxuICBfZ2V0VXBwZXJSb3dDb29yZHMoY29vcmRzLCBsZW5ndGgsIG9yaWVudGF0aW9uWCkge1xuICAgIGNvbnN0IHVwcGVyUm93ID0gW107XG4gICAgbGV0IFt4X2Nvb3JkLCB5X2Nvb3JkXSA9IGNvb3Jkc1swXTtcblxuICAgIHlfY29vcmQtLTtcbiAgICB4X2Nvb3JkLS07XG5cbiAgICBsZXQgdXBwZXJSb3dMZW5ndGggPSBvcmllbnRhdGlvblggPyBsZW5ndGggKyAyIDogMztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVwcGVyUm93TGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9pc1dpdGhpbkJvdW5kcyhbeF9jb29yZCwgeV9jb29yZF0pKSB7XG4gICAgICAgIHVwcGVyUm93LnB1c2goW3hfY29vcmQsIHlfY29vcmRdKTtcbiAgICAgIH1cbiAgICAgIHhfY29vcmQrKztcbiAgICB9XG5cbiAgICByZXR1cm4gdXBwZXJSb3c7XG4gIH1cblxuICBfZ2V0Qm90dG9tUm93Q29vcmRzKGNvb3JkcywgbGVuZ3RoLCBvcmllbnRhdGlvblgpIHtcbiAgICBjb25zdCBib3R0b21Sb3cgPSBbXTtcbiAgICBsZXQgW3hfY29vcmQsIHlfY29vcmRdID0gY29vcmRzW2xlbmd0aCAtIDFdO1xuXG4gICAgeV9jb29yZCsrO1xuICAgIHhfY29vcmQrKztcblxuICAgIGxldCBib3R0b21Sb3dMZW5ndGggPSBvcmllbnRhdGlvblggPyBsZW5ndGggKyAyIDogMztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdHRvbVJvd0xlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5faXNXaXRoaW5Cb3VuZHMoW3hfY29vcmQsIHlfY29vcmRdKSkge1xuICAgICAgICBib3R0b21Sb3cucHVzaChbeF9jb29yZCwgeV9jb29yZF0pO1xuICAgICAgfVxuICAgICAgeF9jb29yZC0tO1xuICAgIH1cbiAgICByZXR1cm4gYm90dG9tUm93O1xuICB9XG5cbiAgX2dldFJpZ2h0Q29vcmRzKGNvb3JkcywgbGVuZ3RoLCBvcmllbnRhdGlvblgpIHtcbiAgICBjb25zdCByaWdodCA9IFtdO1xuICAgIGxldCBbeF9jb29yZCwgeV9jb29yZF0gPSBjb29yZHNbbGVuZ3RoIC0gMV07XG4gICAgeF9jb29yZCsrO1xuXG4gICAgbGV0IHJpZ2h0TGVuZ3RoID0gb3JpZW50YXRpb25YID8gMSA6IGxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJpZ2h0TGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9pc1dpdGhpbkJvdW5kcyhbeF9jb29yZCwgeV9jb29yZF0pKSB7XG4gICAgICAgIHJpZ2h0LnB1c2goW3hfY29vcmQsIHlfY29vcmRdKTtcbiAgICAgIH1cbiAgICAgIHlfY29vcmQtLTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmlnaHQ7XG4gIH1cblxuICBfZ2V0TGVmdENvb3Jkcyhjb29yZHMsIGxlbmd0aCwgb3JpZW50YXRpb25YKSB7XG4gICAgY29uc3QgbGVmdCA9IFtdO1xuICAgIGxldCB4X2Nvb3JkO1xuICAgIGxldCB5X2Nvb3JkO1xuICAgIGlmIChvcmllbnRhdGlvblgpIHtcbiAgICAgIFt4X2Nvb3JkLCB5X2Nvb3JkXSA9IGNvb3Jkc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgW3hfY29vcmQsIHlfY29vcmRdID0gY29vcmRzW2xlbmd0aCAtIDFdO1xuICAgIH1cbiAgICB4X2Nvb3JkLS07XG5cbiAgICBsZXQgbGVmdExlbmd0aCA9IG9yaWVudGF0aW9uWCA/IDEgOiBsZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZWZ0TGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9pc1dpdGhpbkJvdW5kcyhbeF9jb29yZCwgeV9jb29yZF0pKSB7XG4gICAgICAgIGxlZnQucHVzaChbeF9jb29yZCwgeV9jb29yZF0pO1xuICAgICAgfVxuICAgICAgeV9jb29yZC0tO1xuICAgIH1cblxuICAgIHJldHVybiBsZWZ0O1xuICB9XG5cbiAgX3ByZWRpY3RDb2xsaXNpb25XaXRoQ3VycmVudENvb3JkcyhvcmlhbnRhdGlvbiwgeCwgeSwgbGVuZ3RoKSB7XG4gICAgY29uc3QgdGVtcEFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHRlbXBBcnIucHVzaChbeCwgeV0pO1xuICAgICAgaWYgKG9yaWFudGF0aW9uID09PSBcInhcIikgeCsrO1xuICAgICAgZWxzZSB5Kys7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBhcnJheSBvZiB0ZW1wQXJyKSB7XG4gICAgICBpZiAodGhpcy5faGFzQ29vcmRDb2xsaXNpb24oYXJyYXksIHRoaXMuY3VycmVudENvb3JkcykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIF9wcmVkaWN0Q29sbGlzaW9uV2l0aFN1cnJvdW5kaW5nQ29vcmRzKG9yaWFudGF0aW9uLCB4LCB5LCBsZW5ndGgpIHtcbiAgICBjb25zdCB0ZW1wQXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdGVtcEFyci5wdXNoKFt4LCB5XSk7XG4gICAgICBpZiAob3JpYW50YXRpb24gPT09IFwieFwiKSB4Kys7XG4gICAgICBlbHNlIHkrKztcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGFycmF5IG9mIHRlbXBBcnIpIHtcbiAgICAgIGlmICh0aGlzLl9oYXNDb29yZENvbGxpc2lvbihhcnJheSwgdGhpcy5zdXJyb3VuZGluZ0Nvb3JkcykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIF9pc1dpdGhpbkJvdW5kcyhjb29yZCkge1xuICAgIGNvbnN0IFt4X2Nvb3JkLCB5X2Nvb3JkXSA9IGNvb3JkO1xuICAgIHJldHVybiB4X2Nvb3JkID49IDAgJiYgeF9jb29yZCA8IDEwICYmIHlfY29vcmQgPj0gMCAmJiB5X2Nvb3JkIDwgMTA7XG4gIH1cblxuICBfaXNWYWxpZENvb3JkKHgsIHksIGxlbmd0aCwgb3JpZW50YXRpb25YKSB7XG4gICAgaWYgKG9yaWVudGF0aW9uWCkge1xuICAgICAgcmV0dXJuIHggKyBsZW5ndGggPD0gMTA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB5ICsgbGVuZ3RoIDw9IDEwO1xuICAgIH1cbiAgfVxuXG4gIF9nZW5lcmF0ZVJhbmRvbU51bWJlcigpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICB9XG5cbiAgX2hhc0Nvb3JkQ29sbGlzaW9uKGNvb3JkLCBvdGhlckNvb3JkKSB7XG4gICAgcmV0dXJuIG90aGVyQ29vcmQuc29tZSgoZXhpc3RpbmdDb29yZCkgPT5cbiAgICAgIGFycmF5c0VxdWFsKGV4aXN0aW5nQ29vcmQsIGNvb3JkKVxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXJyYXlzRXF1YWwoYXJyMSwgYXJyMikge1xuICBpZiAoYXJyMS5sZW5ndGggIT09IGFycjIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBhcnIxLmV2ZXJ5KChlbGVtZW50LCBpbmRleCkgPT4gZWxlbWVudCA9PT0gYXJyMltpbmRleF0pO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXhvZkl0ZW1JbkFycmF5KGFycmF5LCBpdGVtKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlzRXF1YWwoYXJyYXlbaV0sIGl0ZW0pKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuZnVuY3Rpb24gcmVtb3ZlRHVwbGljYXRlQXJyYXlzKGFycmF5cykge1xuICBjb25zdCB1bmlxdWVBcnJheXMgPSBuZXcgU2V0KGFycmF5cy5tYXAoSlNPTi5zdHJpbmdpZnkpKTtcbiAgcmV0dXJuIEFycmF5LmZyb20odW5pcXVlQXJyYXlzKS5tYXAoSlNPTi5wYXJzZSk7XG59XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4uL2dhbWVib2FyZC9nYW1lYm9hcmQtY2xhc3NcIjtcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IodHlwZSwgbmFtZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgfVxufVxuXG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsImNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLm51bWJlcl9oaXQgPSAwO1xuICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICB9XG4gIGdldFN0YXR1cygpIHtcbiAgICByZXR1cm4geyBsZW5ndGg6IHRoaXMubGVuZ3RoLCBoaXQ6IHRoaXMubnVtYmVyX2hpdCwgc3VuazogdGhpcy5zdW5rIH07XG4gIH1cbiAgaGl0KCkge1xuICAgIGlmICghdGhpcy5zdW5rKSB7XG4gICAgICB0aGlzLm51bWJlcl9oaXQrKztcbiAgICAgIHRoaXMuc3VuayA9IHRoaXMuaXNTdW5rKCk7XG4gICAgfVxuICB9XG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXJfaGl0ID09PSB0aGlzLmxlbmd0aDtcbiAgfVxufVxuXG5leHBvcnQgeyBTaGlwIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IGluaXRHYW1lIH0gZnJvbSBcIi4vZ2FtZS1sb2dpYy9nYW1lLWxvZ2ljXCI7XG5pbXBvcnQgeyBpbml0QnV0dG9ucyB9IGZyb20gXCIuL2RvbS1tYW5pcC9kb20tYnV0dG9uc1wiO1xuXG4vLyBpbml0R2FtZShcImh1bWFuXCIsIFwiaHVtYW5cIik7XG5pbml0R2FtZSh7IHR5cGU6IFwiaHVtYW5cIiwgbmFtZTogXCJwbGF5ZXItMVwiIH0sIHsgdHlwZTogXCJhaVwiLCBuYW1lOiBcInBsYXllci0yXCIgfSk7XG5pbml0QnV0dG9ucygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9