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
.buttons {
  display: flex;
  width: 90%;
  justify-content: center;
  gap: 10em;
  margin-bottom: 2em;
}

/* CSS */
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
  -webkit-user-select: none;
  touch-action: manipulation;
}

.btn:active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}

@media (min-width: 768px) {
  .btn {
    padding: 0.25em 0.75em;
  }
}
.hidden {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,kBAAkB;AAClB;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA,iBAAiB;AACjB;EACE,iBAAiB;EACjB,oDAAoD;EACpD,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,YAAY;EACZ,yBAAyB;EACzB,gCAAgC;AAClC;;AAEA,kBAAkB;AAClB;EACE,cAAc;EACd,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA,qBAAqB;AACrB;EACE,UAAU;EACV,WAAW;EACX,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;EACZ,mBAAmB;AACrB;;AAEA,sBAAsB;AACtB;;EAEE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA,kBAAkB;AAClB;;EAEE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,iBAAiB,EAAE,oDAAoD;EACvE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,gBAAgB;EAChB,YAAY;AACd;;AAEA,gBAAgB;AAChB;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,2BAA2B;EAC3B,iBAAiB;EACjB,sCAAsC;EACtC,kBAAkB;EAClB,iBAAiB,EAAE,yCAAyC;AAC9D;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,iBAAiB;AACjB;EACE,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;EAC3B,eAAe;EACf,iBAAiB;EACjB,8BAA8B;AAChC;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,qBAAqB;AACvB;;AAEA,wBAAwB;AACxB;EACE,eAAe;EACf,0CAA0C;EAC1C,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,oCAAoC;AACtC;;AAEA,wBAAwB;AACxB;;EAEE,YAAY;EACZ,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA,oBAAoB;AACpB;EACE,YAAY;AACd;;AAEA,8BAA8B;AAC9B;EACE,kBAAkB;EAClB,SAAS,EAAE,wBAAwB;EACnC,SAAS;EACT,2BAA2B;EAC3B,oCAAoC;EACpC,YAAY;EACZ,gBAAgB;EAChB,cAAc;EACd,kBAAkB;EAClB,WAAW,EAAE,qCAAqC;AACpD;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU,EAAE,wBAAwB;EACpC,2BAA2B;EAC3B,oCAAoC;EACpC,YAAY;EACZ,gBAAgB;EAChB,cAAc;EACd,kBAAkB;EAClB,WAAW,EAAE,qCAAqC;AACpD;AACA;EACE,aAAa;EACb,UAAU;EACV,uBAAuB;EACvB,SAAS;EACT,kBAAkB;AACpB;;AAEA,QAAQ;AACR;EACE,oCAAoC;EACpC,eAAe;EACf,mBAAmB;EACnB,qBAAqB;EACrB,yBAAyB;EACzB,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB;mBACiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,yBAAyB;EACzB,0BAA0B;AAC5B;;AAEA;EACE,2BAA2B;EAC3B,QAAQ;EACR,SAAS;AACX;;AAEA;EACE;IACE,sBAAsB;EACxB;AACF;AACA;EACE,aAAa;AACf","sourcesContent":["/* General Reset */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Body Styling */\nbody {\n  min-height: 100vh;\n  background: linear-gradient(90deg, #1a78ae, #431dd9);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2em;\n  color: white;\n  text-transform: uppercase;\n  font-family: \"Arial\", sans-serif;\n}\n\n/* Title Styling */\nh1 {\n  font-size: 3em;\n  letter-spacing: 0.1em;\n  margin-bottom: 0.5em;\n}\n\n/* Board Containers */\n.boards {\n  width: 90%;\n  height: 70%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.2);\n  padding: 1em;\n  border-radius: 10px;\n}\n\n/* Player Containers */\n.player-1-container,\n.player-2-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2em;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Board Styling */\n.player-1-board,\n.player-2-board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  align-items: center;\n  border: 2px solid white;\n  width: 500px;\n  height: 500px;\n  background-color: #083358;\n  border-radius: 8px;\n  overflow: visible; /* Changed to ensure content inside is not clipped */\n  position: relative;\n}\n\n.board-label {\n  position: absolute;\n  top: -30px;\n  font-size: 1.5em;\n  color: white;\n}\n\n/* Box Styling */\n.box {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #ffffff38;\n  cursor: crosshair;\n  transition: background-color 0.3s ease;\n  position: relative;\n  overflow: visible; /* Ensure content inside is not clipped */\n}\n\n.box:hover {\n  background-color: #1a78ae;\n}\n\n/* Ship Styling */\n.ship {\n  background-color: #89acd7;\n  border-radius: 2px;\n}\n\n.ship.hit {\n  /* background-color: red; */\n  cursor: default;\n  font-size: 1.04em;\n  /* border: 2px solid yellow; */\n}\n\n.ship.sunk {\n  background-color: gray;\n  color: white;\n  opacity: 0.8;\n  border: 2px solid red;\n}\n\n/* Missed Shot Styling */\n.missed {\n  cursor: default;\n  background-color: rgba(183, 189, 183, 0.3);\n  /* opacity: 0.7; */\n}\n.surround {\n  cursor: default;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n/* Player Text Styling */\n.player-1-text,\n.player-2-text {\n  color: white;\n  text-transform: uppercase;\n  font-size: 1.5em;\n}\n\n/* Utility Classes */\n.half-opacity {\n  opacity: 0.5;\n}\n\n/* Coordinate Number Styling */\n.coord-num-up {\n  position: absolute;\n  top: -2em; /* Adjust as necessary */\n  left: 50%;\n  transform: translateX(-50%);\n  /* background: rgba(0, 0, 0, 0.5); */\n  color: white;\n  padding: 2px 5px;\n  font-size: 1em;\n  border-radius: 3px;\n  z-index: 10; /* Ensure it's above other elements */\n}\n\n.coord-num-left {\n  position: absolute;\n  top: 50%;\n  left: -2em; /* Adjust as necessary */\n  transform: translateY(-50%);\n  /* background: rgba(0, 0, 0, 0.5); */\n  color: white;\n  padding: 2px 5px;\n  font-size: 1em;\n  border-radius: 3px;\n  z-index: 10; /* Ensure it's above other elements */\n}\n.buttons {\n  display: flex;\n  width: 90%;\n  justify-content: center;\n  gap: 10em;\n  margin-bottom: 2em;\n}\n\n/* CSS */\n.btn {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-decoration: none;\n  text-transform: uppercase;\n  color: #000;\n  cursor: pointer;\n  border: 3px solid;\n  padding: 0.25em 0.5em;\n  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,\n    5px 5px 0px 0px;\n  position: relative;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n}\n\n.btn:active {\n  box-shadow: 0px 0px 0px 0px;\n  top: 5px;\n  left: 5px;\n}\n\n@media (min-width: 768px) {\n  .btn {\n    padding: 0.25em 0.75em;\n  }\n}\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
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
    btn.remove();
    randomBtn.remove();
    buttonContainer.classList.add("hidden");
  });

  buttonContainer.appendChild(btn);
}

function playAgain() {
  const buttonContainer = document.querySelector(".buttons");

  const btn = document.createElement("button");
  btn.textContent = "Play Again";
  btn.classList.add("btn");
  btn.classList.add("play-again-btn");

  btn.addEventListener("click", () => {
    (0,_game_logic_game_logic__WEBPACK_IMPORTED_MODULE_0__.initGame)(
      { type: "human", name: "player-1" },
      { type: "ai", name: "player-2" }
    );
    btn.remove();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUM2QjtBQUNHOztBQUV0RDtBQUNBLGdFQUFRLEdBQUcsaUNBQWlDLElBQUksOEJBQThCO0FBQzlFLG1FQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLW1hbmlwL2RvbS1idXR0b25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLW1hbmlwL2RvbS1tYW5pcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUtbG9naWMvZ2FtZS1sb2dpYy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC9nYW1lYm9hcmQtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIvcGxheWVyLWNsYXNzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC9zaGlwLWNsYXNzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEdlbmVyYWwgUmVzZXQgKi9cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIEJvZHkgU3R5bGluZyAqL1xuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxYTc4YWUsICM0MzFkZDkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbn1cblxuLyogVGl0bGUgU3R5bGluZyAqL1xuaDEge1xuICBmb250LXNpemU6IDNlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cblxuLyogQm9hcmQgQ29udGFpbmVycyAqL1xuLmJvYXJkcyB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi8qIFBsYXllciBDb250YWluZXJzICovXG4ucGxheWVyLTEtY29udGFpbmVyLFxuLnBsYXllci0yLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogQm9hcmQgU3R5bGluZyAqL1xuLnBsYXllci0xLWJvYXJkLFxuLnBsYXllci0yLWJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgzMzU4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiBDaGFuZ2VkIHRvIGVuc3VyZSBjb250ZW50IGluc2lkZSBpcyBub3QgY2xpcHBlZCAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ib2FyZC1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMzBweDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBCb3ggU3R5bGluZyAqL1xuLmJveCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmYzODtcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiBFbnN1cmUgY29udGVudCBpbnNpZGUgaXMgbm90IGNsaXBwZWQgKi9cbn1cblxuLmJveDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTc4YWU7XG59XG5cbi8qIFNoaXAgU3R5bGluZyAqL1xuLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODlhY2Q3O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5zaGlwLmhpdCB7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBmb250LXNpemU6IDEuMDRlbTtcbiAgLyogYm9yZGVyOiAycHggc29saWQgeWVsbG93OyAqL1xufVxuXG4uc2hpcC5zdW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbn1cblxuLyogTWlzc2VkIFNob3QgU3R5bGluZyAqL1xuLm1pc3NlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODMsIDE4OSwgMTgzLCAwLjMpO1xuICAvKiBvcGFjaXR5OiAwLjc7ICovXG59XG4uc3Vycm91bmQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLyogUGxheWVyIFRleHQgU3R5bGluZyAqL1xuLnBsYXllci0xLXRleHQsXG4ucGxheWVyLTItdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLyogVXRpbGl0eSBDbGFzc2VzICovXG4uaGFsZi1vcGFjaXR5IHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4vKiBDb29yZGluYXRlIE51bWJlciBTdHlsaW5nICovXG4uY29vcmQtbnVtLXVwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yZW07IC8qIEFkanVzdCBhcyBuZWNlc3NhcnkgKi9cbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIC8qIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTsgKi9cbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAycHggNXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB6LWluZGV4OiAxMDsgLyogRW5zdXJlIGl0J3MgYWJvdmUgb3RoZXIgZWxlbWVudHMgKi9cbn1cblxuLmNvb3JkLW51bS1sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogLTJlbTsgLyogQWRqdXN0IGFzIG5lY2Vzc2FyeSAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC8qIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTsgKi9cbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAycHggNXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB6LWluZGV4OiAxMDsgLyogRW5zdXJlIGl0J3MgYWJvdmUgb3RoZXIgZWxlbWVudHMgKi9cbn1cbi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDkwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBlbTtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuXG4vKiBDU1MgKi9cbi5idG4ge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogM3B4IHNvbGlkO1xuICBwYWRkaW5nOiAwLjI1ZW0gMC41ZW07XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMHB4IDBweCwgMnB4IDJweCAwcHggMHB4LCAzcHggM3B4IDBweCAwcHgsIDRweCA0cHggMHB4IDBweCxcbiAgICA1cHggNXB4IDBweCAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xufVxuXG4uYnRuOmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweDtcbiAgdG9wOiA1cHg7XG4gIGxlZnQ6IDVweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5idG4ge1xuICAgIHBhZGRpbmc6IDAuMjVlbSAwLjc1ZW07XG4gIH1cbn1cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxrQkFBa0I7QUFDbEI7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxpQkFBaUI7RUFDakIsb0RBQW9EO0VBQ3BELGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixnQ0FBZ0M7QUFDbEM7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQSxzQkFBc0I7QUFDdEI7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQSxrQkFBa0I7QUFDbEI7O0VBRUUsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUUsb0RBQW9EO0VBQ3ZFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFFLHlDQUF5QztBQUM5RDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLGVBQWU7RUFDZiwwQ0FBMEM7RUFDMUMsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysb0NBQW9DO0FBQ3RDOztBQUVBLHdCQUF3QjtBQUN4Qjs7RUFFRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVMsRUFBRSx3QkFBd0I7RUFDbkMsU0FBUztFQUNULDJCQUEyQjtFQUMzQixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBRSxxQ0FBcUM7QUFDcEQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVUsRUFBRSx3QkFBd0I7RUFDcEMsMkJBQTJCO0VBQzNCLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVyxFQUFFLHFDQUFxQztBQUNwRDtBQUNBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQSxRQUFRO0FBQ1I7RUFDRSxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQjttQkFDaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNGO0FBQ0E7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR2VuZXJhbCBSZXNldCAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIEJvZHkgU3R5bGluZyAqL1xcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxYTc4YWUsICM0MzFkZDkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LWZhbWlseTogXFxcIkFyaWFsXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogVGl0bGUgU3R5bGluZyAqL1xcbmgxIHtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcblxcbi8qIEJvYXJkIENvbnRhaW5lcnMgKi9cXG4uYm9hcmRzIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4vKiBQbGF5ZXIgQ29udGFpbmVycyAqL1xcbi5wbGF5ZXItMS1jb250YWluZXIsXFxuLnBsYXllci0yLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBCb2FyZCBTdHlsaW5nICovXFxuLnBsYXllci0xLWJvYXJkLFxcbi5wbGF5ZXItMi1ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgzMzU4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIENoYW5nZWQgdG8gZW5zdXJlIGNvbnRlbnQgaW5zaWRlIGlzIG5vdCBjbGlwcGVkICovXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ib2FyZC1sYWJlbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0zMHB4O1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogQm94IFN0eWxpbmcgKi9cXG4uYm94IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmMzg7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIEVuc3VyZSBjb250ZW50IGluc2lkZSBpcyBub3QgY2xpcHBlZCAqL1xcbn1cXG5cXG4uYm94OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTc4YWU7XFxufVxcblxcbi8qIFNoaXAgU3R5bGluZyAqL1xcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4OWFjZDc7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi5zaGlwLmhpdCB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBmb250LXNpemU6IDEuMDRlbTtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdzsgKi9cXG59XFxuXFxuLnNoaXAuc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbn1cXG5cXG4vKiBNaXNzZWQgU2hvdCBTdHlsaW5nICovXFxuLm1pc3NlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MywgMTg5LCAxODMsIDAuMyk7XFxuICAvKiBvcGFjaXR5OiAwLjc7ICovXFxufVxcbi5zdXJyb3VuZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi8qIFBsYXllciBUZXh0IFN0eWxpbmcgKi9cXG4ucGxheWVyLTEtdGV4dCxcXG4ucGxheWVyLTItdGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLyogVXRpbGl0eSBDbGFzc2VzICovXFxuLmhhbGYtb3BhY2l0eSB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi8qIENvb3JkaW5hdGUgTnVtYmVyIFN0eWxpbmcgKi9cXG4uY29vcmQtbnVtLXVwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTJlbTsgLyogQWRqdXN0IGFzIG5lY2Vzc2FyeSAqL1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLyogYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpOyAqL1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMnB4IDVweDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgei1pbmRleDogMTA7IC8qIEVuc3VyZSBpdCdzIGFib3ZlIG90aGVyIGVsZW1lbnRzICovXFxufVxcblxcbi5jb29yZC1udW0tbGVmdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IC0yZW07IC8qIEFkanVzdCBhcyBuZWNlc3NhcnkgKi9cXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC8qIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTsgKi9cXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDJweCA1cHg7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHotaW5kZXg6IDEwOyAvKiBFbnN1cmUgaXQncyBhYm92ZSBvdGhlciBlbGVtZW50cyAqL1xcbn1cXG4uYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMGVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbn1cXG5cXG4vKiBDU1MgKi9cXG4uYnRuIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICMwMDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDNweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDAuMjVlbSAwLjVlbTtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMHB4IDBweCwgMnB4IDJweCAwcHggMHB4LCAzcHggM3B4IDBweCAwcHgsIDRweCA0cHggMHB4IDBweCxcXG4gICAgNXB4IDVweCAwcHggMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxufVxcblxcbi5idG46YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweDtcXG4gIHRvcDogNXB4O1xcbiAgbGVmdDogNXB4O1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5idG4ge1xcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMC43NWVtO1xcbiAgfVxcbn1cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnZXRQbGF5ZXJzLCByZUluaXRQbGF5ZXIsIGluaXRHYW1lIH0gZnJvbSBcIi4uL2dhbWUtbG9naWMvZ2FtZS1sb2dpY1wiO1xuaW1wb3J0IHtcbiAgcG9wdWxhdGVHYW1lYm9hcmRzLFxuICByZW5kZXJHYW1lYm9hcmREYXRhLFxuICBzZXRCZWZvcmVHYW1lU3RhdGUsXG4gIHN0YXJ0R2FtZSxcbn0gZnJvbSBcIi4vZG9tLW1hbmlwXCI7XG5cbmZ1bmN0aW9uIGluaXRCdXR0b25zKCkge1xuICBzZXRSYW5kb21CdXR0b24oKTtcbiAgc3RhcnRCdXR0b24oKTtcbn1cbmZ1bmN0aW9uIHNldFJhbmRvbUJ1dHRvbigpIHtcbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b25zXCIpO1xuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi50ZXh0Q29udGVudCA9IFwiUmFuZG9taXNlIPCflIRcIjtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwicmFuZG9tLWJ0blwiKTtcblxuICBjb25zdCBwbGF5ZXIgPSBnZXRQbGF5ZXJzKClbMF07XG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIucGxheWVyO1xuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlSW5pdFBsYXllcihcImh1bWFuXCIsIFwicGxheWVyLTFcIik7XG4gIH0pO1xuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRCdXR0b24oKSB7XG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uc1wiKTtcbiAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYW5kb20tYnRuXCIpO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4udGV4dENvbnRlbnQgPSBcIlN0YXJ0XCI7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xuICBidG4uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWJ0blwiKTtcblxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyBzdGFydCB0aGUgZ2FtZSBUT0RPXG4gICAgc3RhcnRHYW1lKCk7XG4gICAgYnRuLnJlbW92ZSgpO1xuICAgIHJhbmRvbUJ0bi5yZW1vdmUoKTtcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfSk7XG5cbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bik7XG59XG5cbmZ1bmN0aW9uIHBsYXlBZ2FpbigpIHtcbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b25zXCIpO1xuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi50ZXh0Q29udGVudCA9IFwiUGxheSBBZ2FpblwiO1xuICBidG4uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJwbGF5LWFnYWluLWJ0blwiKTtcblxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpbml0R2FtZShcbiAgICAgIHsgdHlwZTogXCJodW1hblwiLCBuYW1lOiBcInBsYXllci0xXCIgfSxcbiAgICAgIHsgdHlwZTogXCJhaVwiLCBuYW1lOiBcInBsYXllci0yXCIgfVxuICAgICk7XG4gICAgYnRuLnJlbW92ZSgpO1xuICAgIGluaXRCdXR0b25zKCk7XG4gIH0pO1xuXG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pO1xuICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbn1cblxuZXhwb3J0IHsgaW5pdEJ1dHRvbnMsIHBsYXlBZ2FpbiB9O1xuIiwiaW1wb3J0IHtcbiAgZ2V0UGxheWVycyxcbiAgY2hhbmdlQ3VycmVudFBsYXllcixcbiAgZ2V0Q3VycmVudFBsYXllcixcbiAgZ2V0T3Bwb3NpbmdQbGF5ZXIsXG4gIGdldEN1cnJlbnRQbGF5ZXJEb21Cb2FyZCxcbiAgZ2V0Tm9uQ3VycmVudFBsYXllckRvbUJvYXJkLFxuICBnZXRHYW1lU3RhdGUsXG4gIHNldEdhbWVTdGF0ZSxcbiAgcmVJbml0UGxheWVyLFxufSBmcm9tIFwiLi4vZ2FtZS1sb2dpYy9nYW1lLWxvZ2ljXCI7XG5pbXBvcnQgeyBwbGF5QWdhaW4gfSBmcm9tIFwiLi9kb20tYnV0dG9uc1wiO1xuZnVuY3Rpb24gaW5pdERvbSgpIHtcbiAgcG9wdWxhdGVCb2FyZCgpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUJvYXJkKCkge1xuICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkXCIpO1xuXG4gIGJvYXJkcy5mb3JFYWNoKChib2FyZCwgaW5kZXgpID0+IHtcbiAgICBib2FyZC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgY29uc3Qgcm93SW5kZXggPSBpO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGNvbHVtbkluZGV4ID0gajtcbiAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlRGl2KFwiYm94XCIpO1xuXG4gICAgICAgIGRpdi5kYXRhc2V0LnJvdyA9IHJvd0luZGV4O1xuICAgICAgICBkaXYuZGF0YXNldC5jb2x1bW4gPSBjb2x1bW5JbmRleDtcbiAgICAgICAgZGl2LmRhdGFzZXQucGxheWVyID0gaW5kZXg7XG5cbiAgICAgICAgLy8gZ2VuZXJhdGVDb29yZE51bXMoW3Jvd0luZGV4LCBjb2x1bW5JbmRleF0pO1xuICAgICAgICBpZiAocm93SW5kZXggPT09IDApIHtcbiAgICAgICAgICBjb25zdCBzcGFuID0gY3JlYXRlU3BhbihcImNvb3JkLW51bS11cFwiLCBjb2x1bW5JbmRleCk7XG4gICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2x1bW5JbmRleCA9PT0gMCkge1xuICAgICAgICAgIGNvbnN0IHNwYW4gPSBjcmVhdGVTcGFuKFwiY29vcmQtbnVtLWxlZnRcIiwgcm93SW5kZXgpO1xuICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgfVxuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRGl2Q2xpY2spO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUNvb3JkTnVtcyhkaXYpIHtcbiAgY29uc3QgZGl2Um93ID0gcGFyc2VJbnQoZGl2LmRhdGFzZXQucm93KTtcbiAgY29uc3QgZGl2Q29sdW1uID0gcGFyc2VJbnQoZGl2LmRhdGFzZXQuY29sdW1uKTtcbiAgaWYgKGRpdlJvdyA9PT0gMCAmJiBkaXZDb2x1bW4gPT09IDApIHtcbiAgICBjb25zdCBzcGFuMSA9IGNyZWF0ZVNwYW4oXCJjb29yZC1udW0tdXBcIiwgZGl2Q29sdW1uKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc3BhbjEpO1xuICAgIGNvbnN0IHNwYW4yID0gY3JlYXRlU3BhbihcImNvb3JkLW51bS1sZWZ0XCIsIGRpdlJvdyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHNwYW4yKTtcbiAgfSBlbHNlIGlmIChkaXZSb3cgPT09IDApIHtcbiAgICBjb25zdCBzcGFuID0gY3JlYXRlU3BhbihcImNvb3JkLW51bS11cFwiLCBkaXZDb2x1bW4pO1xuICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgfSBlbHNlIGlmIChkaXZDb2x1bW4gPT09IDApIHtcbiAgICBjb25zdCBzcGFuID0gY3JlYXRlU3BhbihcImNvb3JkLW51bS1sZWZ0XCIsIGRpdlJvdyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZURpdkNsaWNrKGUpIHtcbiAgLy8gaWYgaGl0IHNoaXAgaXMgc3VjY2VzZnVsXG4gIGlmIChoaXRTaGlwKGUudGFyZ2V0LmRhdGFzZXQpKSB7XG4gICAgLy8gY29udGludWUgcGxheWluZyB3aXRoIHRoZSBjdXJyZW50IHBsYXllclxuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBnZXRQbGF5ZXJzKClbcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5wbGF5ZXIpXTtcbiAgICAvLyBjaGVjayBpZiBhbnkgc2hpcCBpcyBzdW5rXG4gICAgY29uc3QgeF9jb29yZCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uKTtcbiAgICBjb25zdCB5X2Nvb3JkID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5yb3cpO1xuXG4gICAgY29uc3QgY3VycmVudFNoaXAgPSBjdXJyZW50UGxheWVyLnBsYXllci5nYW1lYm9hcmQuX2dldFNoaXAoW1xuICAgICAgeF9jb29yZCxcbiAgICAgIHlfY29vcmQsXG4gICAgXSk7XG4gICAgaWYgKGN1cnJlbnRTaGlwLnN1bmspIHtcbiAgICAgIGNvbnN0IHN1cnJvdW5kaW5nQ29vcmRzID1cbiAgICAgICAgY3VycmVudFBsYXllci5wbGF5ZXIuZ2FtZWJvYXJkLl9nZXRTaGlwU3Vycm91bmRpbmdDb29yZHMoW1xuICAgICAgICAgIHhfY29vcmQsXG4gICAgICAgICAgeV9jb29yZCxcbiAgICAgICAgXSk7XG4gICAgICBjdXJyZW50UGxheWVyLnBsYXllci5nYW1lYm9hcmQuc3Vycm91bmRpbmdTaG90cy5wdXNoKFxuICAgICAgICAuLi5zdXJyb3VuZGluZ0Nvb3Jkc1xuICAgICAgKTtcbiAgICAgIC8vIHJlbmRlckdhbWVib2FyZERhdGEoY3VycmVudFBsYXllciwgc3Vycm91bmRpbmdDb29yZHMsIFwi4paq77iPXCIsIFwic3Vycm91bmRcIik7XG4gICAgfVxuICAgIGlmIChjdXJyZW50UGxheWVyLnBsYXllci5nYW1lYm9hcmQuaGFzQWxsU2hpcHNCZWVuU3VuaygpKSB7XG4gICAgICAvLyBjaGVjayBpZiBhbGwgc2hpcHMgc3Vua1xuICAgICAgLy8gZGlzcGxheSB3aW5uaW5nIHBsYXllclxuICAgICAgLy8gZGlzcGxheVdpbm5lcigpXG4gICAgICBjb25zb2xlLmxvZyhcIndpbm5lciBpc1wiLCBnZXRDdXJyZW50UGxheWVyKCkpO1xuICAgICAgc2V0RW5kR2FtZVN0YXRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGlmIGhpdCBzaGlwIGlzIG5vdCBzdWNjZXNzZnVsXG4gIH0gZWxzZSB7XG4gICAgY2hhbmdlQ3VycmVudFBsYXllcigpO1xuICAgIHBvcHVsYXRlR2FtZWJvYXJkcygpO1xuICAgIHJlbmRlckN1cnJlbnRQbGF5ZXJEaXNwbGF5KCk7XG4gICAgLy8gY2hhbmdlIHRoZSBjdXJyZW50IHBsYXllclxuICAgIHJlbmRlckhlYWRlckluZm8oZ2V0Q3VycmVudFBsYXllcigpLCBcImlzIGF0dGFja2luZy4uLlwiKTtcbiAgICBjb25zdCBub25BSVBsYXllciA9IGdldFBsYXllcnMoKVswXTtcbiAgICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBub25BSVBsYXllci5wbGF5ZXIuZ2FtZWJvYXJkO1xuXG4gICAgYXdhaXQgYWlBdHRhY2tXaXRoRGVsYXkocGxheWVyR2FtZWJvYXJkKTtcbiAgICBpZiAocGxheWVyR2FtZWJvYXJkLmhhc0FsbFNoaXBzQmVlblN1bmsoKSkgcmV0dXJuO1xuICB9XG5cbiAgcG9wdWxhdGVHYW1lYm9hcmRzKCk7XG4gIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDMwMCkpO1xuICByZW5kZXJDdXJyZW50UGxheWVyRGlzcGxheSgpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBhaUF0dGFja1dpdGhEZWxheShwbGF5ZXJHYW1lYm9hcmQpIHtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSk7XG4gICAgaWYgKCFhaUF0dGFjaygpKSB7XG4gICAgICBpZiAocGxheWVyR2FtZWJvYXJkLmhhc0FsbFNoaXBzQmVlblN1bmsoKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIndpbm5lciBpc1wiLCBnZXRDdXJyZW50UGxheWVyKCkpO1xuICAgICAgICBzZXRFbmRHYW1lU3RhdGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY2hhbmdlQ3VycmVudFBsYXllcigpO1xuICAgICAgcmVuZGVySGVhZGVySW5mbyhnZXRDdXJyZW50UGxheWVyKCksIFwiaXMgYXR0YWNraW5nLi4uXCIpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHBvcHVsYXRlR2FtZWJvYXJkcygpO1xuICAgIHJlbmRlckN1cnJlbnRQbGF5ZXJEaXNwbGF5KCk7XG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gYWlBdHRhY2soKSB7XG4vLyAgIC8vIGdldCB0aGUgYm9hcmQgYWkgaXMgYXR0YWNraW5nXG4vLyAgIGNvbnN0IG5vbkFJUGxheWVyID0gZ2V0UGxheWVycygpWzBdO1xuLy8gICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBub25BSVBsYXllci5wbGF5ZXIuZ2FtZWJvYXJkO1xuXG4vLyAgIGNvbnN0IGF0dGFja1NlcXVlbmNlID0gZ2V0QXR0YWNrU2VxdWVuY2UoKTtcbi8vICAgYXR0YWNrU2VxdWVuY2UuZm9yRWFjaCgoY29vcmQpID0+IHtcbi8vICAgICBpZiAoIXBsYXllckdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkKSkge1xuLy8gICAgICAgcmV0dXJuIGZhbHNlO1xuLy8gICAgIH1cbi8vICAgfSk7XG5cbi8vICAgcmV0dXJuIHRydWU7XG5cbi8vICAgLy8gaWYgKCFwbGF5ZXJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZCkpIHtcbi8vICAgLy8gICBjaGFuZ2VDdXJyZW50UGxheWVyKCk7XG4vLyAgIC8vICAgcmVuZGVySGVhZGVySW5mbyhnZXRDdXJyZW50UGxheWVyKCksIFwiaXMgYXR0YWNraW5nLi4uXCIpO1xuLy8gICAvLyAgIHJldHVybjtcbi8vICAgLy8gfVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBnZXRBdHRhY2tTZXF1ZW5jZSgpIHtcbi8vICAgLy8gZ2V0IHRoZSBib2FyZCBhaSBpcyBhdHRhY2tpbmdcbi8vICAgY29uc3Qgbm9uQUlQbGF5ZXIgPSBnZXRQbGF5ZXJzKClbMF07XG4vLyAgIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IG5vbkFJUGxheWVyLnBsYXllci5nYW1lYm9hcmQ7XG4vLyAgIGNvbnN0IHBsYXllckdhbWVib2FyZEN1cnJlbnRDb29yZHMgPSBwbGF5ZXJHYW1lYm9hcmQuY3VycmVudENvb3JkcztcblxuLy8gICBjb25zdCBhdHRhY2tTZXF1ZW5jZSA9IFtdO1xuXG4vLyAgIGxldCBjb29yZCA9IGdldEFJQXR0YWNrQ29vcmRzKCk7XG4vLyAgIGF0dGFja1NlcXVlbmNlLnB1c2goY29vcmQpO1xuXG4vLyAgIGNvbnNvbGUubG9nKGNvb3JkKTtcbi8vICAgY29uc29sZS5sb2cocGxheWVyR2FtZWJvYXJkQ3VycmVudENvb3Jkcyk7XG4vLyAgIHdoaWxlIChoYXNDb29yZENvbGxpc2lvbihjb29yZCwgcGxheWVyR2FtZWJvYXJkQ3VycmVudENvb3JkcykpIHtcbi8vICAgICBjb29yZCA9IGdldEFJQXR0YWNrQ29vcmRzKCk7XG4vLyAgICAgYXR0YWNrU2VxdWVuY2UucHVzaChjb29yZCk7XG4vLyAgIH1cblxuLy8gICByZXR1cm4gYXR0YWNrU2VxdWVuY2U7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGdldEFJQXR0YWNrQ29vcmRzKCkge1xuLy8gICAvLyBnZXQgdGhlIGJvYXJkIGFpIGlzIGF0dGFja2luZ1xuLy8gICBjb25zdCBub25BSVBsYXllciA9IGdldFBsYXllcnMoKVswXTtcbi8vICAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gbm9uQUlQbGF5ZXIucGxheWVyLmdhbWVib2FyZDtcbi8vICAgLy8gZGF0YSB0byBjaGVjayBhZ2FpbnN0IGNvb3Jkc1xuLy8gICBjb25zdCBoaXRTaG90cyA9IHBsYXllckdhbWVib2FyZC5oaXRTaG90cztcbi8vICAgY29uc3QgbWlzc2VkU2hvdHMgPSBwbGF5ZXJHYW1lYm9hcmQubWlzc2VkU2hvdHM7XG4vLyAgIGNvbnN0IHN1cnJvdW5kaW5nU2hvdHMgPSBwbGF5ZXJHYW1lYm9hcmQuc3Vycm91bmRpbmdTaG90cztcblxuLy8gICAvLyBnZW5lcmF0ZSB4IGFuZCB5IGNvb3JkXG4vLyAgIGxldCB4X2Nvb3JkID0gZ2VuZXJhdGVSYW5kb21OdW1iZXIoKTtcbi8vICAgbGV0IHlfY29vcmQgPSBnZW5lcmF0ZVJhbmRvbU51bWJlcigpO1xuXG4vLyAgIHdoaWxlIChcbi8vICAgICBoYXNDb29yZENvbGxpc2lvbihbeF9jb29yZCwgeV9jb29yZF0sIGhpdFNob3RzKSB8fFxuLy8gICAgIGhhc0Nvb3JkQ29sbGlzaW9uKFt4X2Nvb3JkLCB5X2Nvb3JkXSwgbWlzc2VkU2hvdHMpIHx8XG4vLyAgICAgaGFzQ29vcmRDb2xsaXNpb24oW3hfY29vcmQsIHlfY29vcmRdLCBzdXJyb3VuZGluZ1Nob3RzKVxuLy8gICApIHtcbi8vICAgICB4X2Nvb3JkID0gZ2VuZXJhdGVSYW5kb21OdW1iZXIoKTtcbi8vICAgICB5X2Nvb3JkID0gZ2VuZXJhdGVSYW5kb21OdW1iZXIoKTtcbi8vICAgfVxuXG4vLyAgIGNvbnN0IGNvb3JkID0gW3hfY29vcmQsIHlfY29vcmRdO1xuXG4vLyAgIHJldHVybiBjb29yZDtcbi8vIH1cblxuZnVuY3Rpb24gYWlBdHRhY2soKSB7XG4gIC8vIGdldCB0aGUgYm9hcmQgYWkgaXMgYXR0YWNraW5nXG4gIGNvbnN0IG5vbkFJUGxheWVyID0gZ2V0UGxheWVycygpWzBdO1xuICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBub25BSVBsYXllci5wbGF5ZXIuZ2FtZWJvYXJkO1xuXG4gIGlmIChwbGF5ZXJHYW1lYm9hcmQuaGFzQWxsU2hpcHNCZWVuU3VuaygpKSB7XG4gICAgY29uc29sZS5sb2coXCJ3aW5uZXIgaXNcIiwgZ2V0Q3VycmVudFBsYXllcigpKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gZGF0YSB0byBjaGVjayBhZ2FpbnN0IGNvb3Jkc1xuICBjb25zdCBoaXRTaG90cyA9IHBsYXllckdhbWVib2FyZC5oaXRTaG90cztcbiAgY29uc3QgbWlzc2VkU2hvdHMgPSBwbGF5ZXJHYW1lYm9hcmQubWlzc2VkU2hvdHM7XG4gIGNvbnN0IHN1cnJvdW5kaW5nU2hvdHMgPSBwbGF5ZXJHYW1lYm9hcmQuc3Vycm91bmRpbmdTaG90cztcblxuICAvLyBnZW5lcmF0ZSB4IGFuZCB5IGNvb3JkXG4gIGxldCB4X2Nvb3JkID0gZ2VuZXJhdGVSYW5kb21OdW1iZXIoKTtcbiAgbGV0IHlfY29vcmQgPSBnZW5lcmF0ZVJhbmRvbU51bWJlcigpO1xuXG4gIHdoaWxlIChcbiAgICBoYXNDb29yZENvbGxpc2lvbihbeF9jb29yZCwgeV9jb29yZF0sIGhpdFNob3RzKSB8fFxuICAgIGhhc0Nvb3JkQ29sbGlzaW9uKFt4X2Nvb3JkLCB5X2Nvb3JkXSwgbWlzc2VkU2hvdHMpIHx8XG4gICAgaGFzQ29vcmRDb2xsaXNpb24oW3hfY29vcmQsIHlfY29vcmRdLCBzdXJyb3VuZGluZ1Nob3RzKVxuICApIHtcbiAgICB4X2Nvb3JkID0gZ2VuZXJhdGVSYW5kb21OdW1iZXIoKTtcbiAgICB5X2Nvb3JkID0gZ2VuZXJhdGVSYW5kb21OdW1iZXIoKTtcbiAgfVxuXG4gIGNvbnN0IGNvb3JkID0gW3hfY29vcmQsIHlfY29vcmRdO1xuXG4gIGNvbnN0IGlzU3VjY2Vzc2Z1bCA9IHBsYXllckdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcblxuICBjb25zdCBjdXJyZW50U2hpcCA9IHBsYXllckdhbWVib2FyZC5fZ2V0U2hpcChbeF9jb29yZCwgeV9jb29yZF0pO1xuXG4gIGlmIChjdXJyZW50U2hpcCAmJiBjdXJyZW50U2hpcC5zdW5rKSB7XG4gICAgY29uc3Qgc3Vycm91bmRpbmdDb29yZHMgPSBwbGF5ZXJHYW1lYm9hcmQuX2dldFNoaXBTdXJyb3VuZGluZ0Nvb3JkcyhbXG4gICAgICB4X2Nvb3JkLFxuICAgICAgeV9jb29yZCxcbiAgICBdKTtcbiAgICBwbGF5ZXJHYW1lYm9hcmQuc3Vycm91bmRpbmdTaG90cy5wdXNoKC4uLnN1cnJvdW5kaW5nQ29vcmRzKTtcbiAgfVxuXG4gIHJldHVybiBpc1N1Y2Nlc3NmdWw7XG59XG5cbmZ1bmN0aW9uIGhhc0Nvb3JkQ29sbGlzaW9uKGNvb3JkLCBvdGhlckNvb3JkKSB7XG4gIHJldHVybiBvdGhlckNvb3JkLnNvbWUoKGV4aXN0aW5nQ29vcmQpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhhcnJheXNFcXVhbChleGlzdGluZ0Nvb3JkLCBjb29yZCkpO1xuICAgIHJldHVybiBhcnJheXNFcXVhbChleGlzdGluZ0Nvb3JkLCBjb29yZCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gYXJyYXlzRXF1YWwoYXJyMSwgYXJyMikge1xuICBpZiAoYXJyMS5sZW5ndGggIT09IGFycjIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBhcnIxLmV2ZXJ5KChlbGVtZW50LCBpbmRleCkgPT4gZWxlbWVudCA9PT0gYXJyMltpbmRleF0pO1xufVxuXG5mdW5jdGlvbiBoaXRTaGlwKHBsYXllcikge1xuICBjb25zdCBwbGF5ZXJEYXRhc2V0ID0geyAuLi5wbGF5ZXIgfTtcblxuICBjb25zdCBjdXJyZW50UGxheWVyID0gZ2V0UGxheWVycygpW3BhcnNlSW50KHBsYXllckRhdGFzZXQucGxheWVyKV07XG4gIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IGN1cnJlbnRQbGF5ZXIucGxheWVyLmdhbWVib2FyZDtcblxuICBjb25zdCB4X2Nvb3JkID0gcGFyc2VJbnQocGxheWVyRGF0YXNldC5jb2x1bW4pO1xuICBjb25zdCB5X2Nvb3JkID0gcGFyc2VJbnQocGxheWVyRGF0YXNldC5yb3cpO1xuICBjb25zdCBjb29yZCA9IFt4X2Nvb3JkLCB5X2Nvb3JkXTtcbiAgcmV0dXJuIHBsYXllckdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVHYW1lYm9hcmRzKCkge1xuICBjb25zdCBwbGF5ZXJzID0gZ2V0UGxheWVycygpO1xuICByZW5kZXJQbGF5ZXJOYW1lcyhwbGF5ZXJzKTtcbiAgcmVuZGVySGVhZGVySW5mbyhnZXRDdXJyZW50UGxheWVyKCksIFwiaXMgYXR0YWNraW5nLi4uXCIpO1xuXG4gIHBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgcmVuZGVyUGxheWVyQm9hcmQocGxheWVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckN1cnJlbnRQbGF5ZXJEaXNwbGF5KCkge1xuICAvLyBnZXQgcGxheWVyIGJvYXJkIGRpdnNcbiAgY29uc3QgUGxheWVyMUJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItMS1ib2FyZFwiKTtcbiAgY29uc3QgUGxheWVyMkJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItMi1ib2FyZFwiKTtcblxuICAvLyByZXNldCBib2FyZHMgb3BhY2l0eVxuICBQbGF5ZXIxQm9hcmREaXYuY2xhc3NMaXN0LnJlbW92ZShcImhhbGYtb3BhY2l0eVwiKTtcbiAgUGxheWVyMkJvYXJkRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoYWxmLW9wYWNpdHlcIik7XG5cbiAgLy8gc2V0IGN1cnJlbnQgcGxheWVyIGJvYXJkIG9wYWNpdHlcbiAgc2V0Qm9hcmRPcGFjaXR5KCk7XG5cbiAgLy8gc2V0IHBsYXllcnMgYm9hcmQgZXZlbnRMaXN0ZW5lcnNcbiAgY29uc3Qgbm9uQ3VycmVudFBsYXllckJvYXJkID0gWy4uLmdldE5vbkN1cnJlbnRQbGF5ZXJEb21Cb2FyZCgpXTtcbiAgY29uc3QgY3VycmVudFBsYXllckJvYXJkID0gWy4uLmdldEN1cnJlbnRQbGF5ZXJEb21Cb2FyZCgpXTtcbiAgLy8gc2V0IGN1cnJlbnQgcGxheWVycyBib2FyZCB1bmNsaWNrYWJsZVxuICBzZXRQbGF5ZXJCb2FyZEV2ZW50TGlzdGVuZXIoY3VycmVudFBsYXllckJvYXJkLCB0cnVlKTtcbiAgLy8gc2V0IG5vbiBjdXJyZW50IHBsYXllcnMgYm9hcmQgY2xpY2thYmxlXG4gIHNldFBsYXllckJvYXJkRXZlbnRMaXN0ZW5lcihub25DdXJyZW50UGxheWVyQm9hcmQsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gc2V0Qm9hcmRPcGFjaXR5KHNob3VsZFNldEJvdGhCb2FyZCA9IGZhbHNlKSB7XG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBnZXRDdXJyZW50UGxheWVyKCk7XG4gIGNvbnN0IG5vbkN1cnJlbnRQbGF5ZXIgPSBnZXRPcHBvc2luZ1BsYXllcigpO1xuICBjb25zdCBvcHBvc2luZ2xheWVyQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGAuJHtub25DdXJyZW50UGxheWVyLm5hbWV9LWJvYXJkYFxuICApO1xuICBjb25zdCBjdXJyZW50UGxheWVyQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGAuJHtjdXJyZW50UGxheWVyLm5hbWV9LWJvYXJkYFxuICApO1xuICBvcHBvc2luZ2xheWVyQm9hcmREaXYuY2xhc3NMaXN0LnJlbW92ZShcImhhbGYtb3BhY2l0eVwiKTtcbiAgY3VycmVudFBsYXllckJvYXJkRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoYWxmLW9wYWNpdHlcIik7XG4gIGlmIChzaG91bGRTZXRCb3RoQm9hcmQpIHtcbiAgICBvcHBvc2luZ2xheWVyQm9hcmREaXYuY2xhc3NMaXN0LmFkZChcImhhbGYtb3BhY2l0eVwiKTtcbiAgfVxuXG4gIGN1cnJlbnRQbGF5ZXJCb2FyZERpdi5jbGFzc0xpc3QuYWRkKFwiaGFsZi1vcGFjaXR5XCIpO1xufVxuXG5mdW5jdGlvbiBzZXRFbmRHYW1lU3RhdGUoKSB7XG4gIHBvcHVsYXRlR2FtZWJvYXJkcygpO1xuICByZW5kZXJIZWFkZXJJbmZvKGdldEN1cnJlbnRQbGF5ZXIoKSwgXCJoYXMgd29uXCIpO1xuICBzZXRHYW1lU3RhdGUoXCJpc0ZpbmlzaGVkXCIsIHRydWUpO1xuICBjb25zdCBub25DdXJyZW50UGxheWVyQm9hcmQgPSBbLi4uZ2V0Tm9uQ3VycmVudFBsYXllckRvbUJvYXJkKCldO1xuICBjb25zdCBjdXJyZW50UGxheWVyQm9hcmQgPSBbLi4uZ2V0Q3VycmVudFBsYXllckRvbUJvYXJkKCldO1xuICBjb25zb2xlLmxvZyhjdXJyZW50UGxheWVyQm9hcmQpO1xuICBjb25zb2xlLmxvZyhub25DdXJyZW50UGxheWVyQm9hcmQpO1xuICBzZXRQbGF5ZXJCb2FyZEV2ZW50TGlzdGVuZXIoY3VycmVudFBsYXllckJvYXJkLCB0cnVlKTtcbiAgc2V0UGxheWVyQm9hcmRFdmVudExpc3RlbmVyKG5vbkN1cnJlbnRQbGF5ZXJCb2FyZCwgdHJ1ZSk7XG4gIHNldEJvYXJkT3BhY2l0eSh0cnVlKTtcblxuICAvLyBwb3B1bGF0ZSBwbGF5IGFnYWluIGJ1dHRvblxuICBwbGF5QWdhaW4oKTtcbn1cblxuZnVuY3Rpb24gc2V0QmVmb3JlR2FtZVN0YXRlKCkge1xuICBjb25zdCBub25DdXJyZW50UGxheWVyQm9hcmQgPSBbLi4uZ2V0Tm9uQ3VycmVudFBsYXllckRvbUJvYXJkKCldO1xuICBjb25zdCBjdXJyZW50UGxheWVyQm9hcmQgPSBbLi4uZ2V0Q3VycmVudFBsYXllckRvbUJvYXJkKCldO1xuICBzZXRQbGF5ZXJCb2FyZEV2ZW50TGlzdGVuZXIoY3VycmVudFBsYXllckJvYXJkLCB0cnVlKTtcbiAgc2V0UGxheWVyQm9hcmRFdmVudExpc3RlbmVyKG5vbkN1cnJlbnRQbGF5ZXJCb2FyZCwgdHJ1ZSk7XG4gIHNldEJvYXJkT3BhY2l0eSh0cnVlKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICBjb25zdCBub25DdXJyZW50UGxheWVyQm9hcmQgPSBbLi4uZ2V0Tm9uQ3VycmVudFBsYXllckRvbUJvYXJkKCldO1xuICBjb25zdCBjdXJyZW50UGxheWVyQm9hcmQgPSBbLi4uZ2V0Q3VycmVudFBsYXllckRvbUJvYXJkKCldO1xuICBzZXRQbGF5ZXJCb2FyZEV2ZW50TGlzdGVuZXIoY3VycmVudFBsYXllckJvYXJkLCBmYWxzZSk7XG4gIHNldFBsYXllckJvYXJkRXZlbnRMaXN0ZW5lcihub25DdXJyZW50UGxheWVyQm9hcmQsIGZhbHNlKTtcbiAgc2V0Qm9hcmRPcGFjaXR5KGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gc2V0UGxheWVyQm9hcmRFdmVudExpc3RlbmVyKGJvYXJkLCBzaG91bGRSZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gIGlmIChzaG91bGRSZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgYm9hcmQuZm9yRWFjaCgoZGl2KSA9PiB7XG4gICAgICBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZURpdkNsaWNrKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBib2FyZC5mb3JFYWNoKChkaXYpID0+IHtcbiAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRGl2Q2xpY2spO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBsYXllckJvYXJkKHBsYXllcikge1xuICBjb25zdCBjdXJyZW50UGxheWVyID0gcGxheWVyLnBsYXllcjtcblxuICAvL3JlbmRlciBjdXJyZW50Y29vcmRzXG4gIC8vIGlmIHBsYXllciBpcyBhaSBkb250IHJlbmRlciBjdXJyZW50Y29vcmRzXG4gIGlmIChwbGF5ZXIucGxheWVyLnR5cGUgIT09IFwiYWlcIikge1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gQXJyYXkuZnJvbShwbGF5ZXIuYm9hcmQpO1xuICAgIHBsYXllckJvYXJkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIik7XG4gICAgfSk7XG4gICAgcmVuZGVyR2FtZWJvYXJkRGF0YShcbiAgICAgIHBsYXllcixcbiAgICAgIGN1cnJlbnRQbGF5ZXIuZ2FtZWJvYXJkLmN1cnJlbnRDb29yZHMsXG4gICAgICBcIlwiLFxuICAgICAgXCJzaGlwXCIsXG4gICAgICBmYWxzZVxuICAgICk7XG4gIH1cblxuICAvL3JlbmRlciBzdWNjZXNzZnVsIGhpdHNob3RzXG4gIHJlbmRlckdhbWVib2FyZERhdGEocGxheWVyLCBjdXJyZW50UGxheWVyLmdhbWVib2FyZC5oaXRTaG90cywgXCLinYxcIiwgXCJoaXRcIik7XG5cbiAgLy9yZW5kZXIgbWlzc2Vkc2hvdHNcbiAgcmVuZGVyR2FtZWJvYXJkRGF0YShcbiAgICBwbGF5ZXIsXG4gICAgY3VycmVudFBsYXllci5nYW1lYm9hcmQubWlzc2VkU2hvdHMsXG4gICAgXCLilqrvuI9cIixcbiAgICBcIm1pc3NlZFwiXG4gICk7XG5cbiAgLy8gcmVuZGVyIHN1cnJvdW5kaW5nIHNob3RzXG4gIHJlbmRlckdhbWVib2FyZERhdGEoXG4gICAgcGxheWVyLFxuICAgIGN1cnJlbnRQbGF5ZXIuZ2FtZWJvYXJkLnN1cnJvdW5kaW5nU2hvdHMsXG4gICAgXCLilqrvuI9cIixcbiAgICBcInN1cnJvdW5kXCJcbiAgKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyR2FtZWJvYXJkRGF0YShcbiAgcGxheWVyLFxuICBkYXRhLFxuICB0ZXh0LFxuICBjbGFzc05hbWUsXG4gIHNob3VsZFJlbW92ZUV2ZW50TGlzdGVuZXIgPSB0cnVlXG4pIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBBcnJheS5mcm9tKHBsYXllci5ib2FyZCk7XG5cbiAgZGF0YS5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGZpbmRDb3JyZXNwb25kaW5nRGl2KGNvb3JkLCBwbGF5ZXJCb2FyZCk7XG5cbiAgICBkaXYudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZ2VuZXJhdGVDb29yZE51bXMoZGl2KTtcbiAgICAvLyBwcmV2ZW50IGNsaWNraW5nIHRoZSBzYW1lIGNvb3JkIGFnYWluXG4gICAgaWYgKHNob3VsZFJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIGRpdi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRGl2Q2xpY2spO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRDb3JyZXNwb25kaW5nRGl2KGNvb3JkLCBib2FyZCkge1xuICBjb25zdCBbeF9jb29yZCwgeV9jb29yZF0gPSBjb29yZDtcblxuICBjb25zdCBkaXYgPSBib2FyZC5maW5kKChkaXYpID0+IHtcbiAgICBjb25zdCByb3cgPSBwYXJzZUludChkaXYuZGF0YXNldC5yb3cpO1xuICAgIGNvbnN0IGNvbHVtbiA9IHBhcnNlSW50KGRpdi5kYXRhc2V0LmNvbHVtbik7XG4gICAgcmV0dXJuIHJvdyA9PT0geV9jb29yZCAmJiBjb2x1bW4gPT09IHhfY29vcmQ7XG4gIH0pO1xuXG4gIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBsYXllck5hbWVzKHBsYXllcnMpIHtcbiAgY29uc3QgcGxheWVyMURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTEtdGV4dFwiKTtcbiAgY29uc3QgcGxheWVyMkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTItdGV4dFwiKTtcblxuICBwbGF5ZXIxRGl2LnRleHRDb250ZW50ID0gXCJcIjtcbiAgcGxheWVyMkRpdi50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgcGxheWVyMURpdi5hcHBlbmRDaGlsZChjcmVhdGVIZWFkaW5nKGAke3BsYXllcnNbMF0ucGxheWVyLm5hbWV9YCwgXCJoMlwiKSk7XG4gIHBsYXllcjJEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGluZyhgJHtwbGF5ZXJzWzFdLnBsYXllci5uYW1lfWAsIFwiaDJcIikpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJIZWFkZXJJbmZvKHBsYXllciwgdGV4dCkge1xuICBjb25zdCBjdXJyZW50UGxheWVySGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LXBsYXllci1oZWFkZXJcIik7XG4gIGN1cnJlbnRQbGF5ZXJIZWFkZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGluZyhgJHtwbGF5ZXIubmFtZX0gJHt0ZXh0fWAsIFwiaDFcIik7XG5cbiAgY3VycmVudFBsYXllckhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkaW5nKHRleHQsIGhlYWRpbmcpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChoZWFkaW5nKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gdGV4dDtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTcGFuKGNsYXNzTmFtZSwgdGV4dCkge1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICBzcGFuLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblxuICByZXR1cm4gc3Bhbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGl2KGNsYXNzTmFtZSkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICByZXR1cm4gZGl2O1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21OdW1iZXIoKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG59XG5cbmV4cG9ydCB7XG4gIGluaXREb20sXG4gIHBvcHVsYXRlR2FtZWJvYXJkcyxcbiAgcmVuZGVyR2FtZWJvYXJkRGF0YSxcbiAgc3RhcnRHYW1lLFxuICBzZXRCZWZvcmVHYW1lU3RhdGUsXG59O1xuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL3BsYXllci9wbGF5ZXItY2xhc3NcIjtcbmltcG9ydCB7XG4gIGluaXREb20sXG4gIHBvcHVsYXRlR2FtZWJvYXJkcyxcbiAgc2V0QmVmb3JlR2FtZVN0YXRlLFxufSBmcm9tIFwiLi4vZG9tLW1hbmlwL2RvbS1tYW5pcFwiO1xuaW1wb3J0IHsgaW5pdEJ1dHRvbnMgfSBmcm9tIFwiLi4vZG9tLW1hbmlwL2RvbS1idXR0b25zXCI7XG5cbmxldCBwbGF5ZXJzID0gW107XG5sZXQgZ2FtZVN0YXRlO1xuXG5mdW5jdGlvbiBnZXRCb2FyZHNET00oaW5kZXgpIHtcbiAgY29uc3QgYm9hcmRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkXCIpKTtcbiAgY29uc3QgYm9hcmRzQ2hpbGROb2RlcyA9IFtib2FyZHNbMF0uY2hpbGRyZW4sIGJvYXJkc1sxXS5jaGlsZHJlbl07XG4gIHJldHVybiBib2FyZHNDaGlsZE5vZGVzW2luZGV4XTtcbn1cblxuZnVuY3Rpb24gaW5pdFBsYXllcnMocGxheWVyMVR5cGUsIHBsYXllcjJUeXBlLCBwbGF5ZXIxTmFtZSwgcGxheWVyMk5hbWUpIHtcbiAgcGxheWVycyA9IFtcbiAgICB7XG4gICAgICBwbGF5ZXI6IGNyZWF0ZVBsYXllcihwbGF5ZXIxVHlwZSwgcGxheWVyMU5hbWUpLFxuICAgICAgYm9hcmQ6IGdldEJvYXJkc0RPTSgwKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBsYXllcjogY3JlYXRlUGxheWVyKHBsYXllcjJUeXBlLCBwbGF5ZXIyTmFtZSksXG4gICAgICBib2FyZDogZ2V0Qm9hcmRzRE9NKDEpLFxuICAgIH0sXG4gIF07XG4gIC8vIGNvbnNvbGUubG9nKHBsYXllcnMpO1xufVxuZnVuY3Rpb24gcmVJbml0UGxheWVyKHBsYXllcjFUeXBlLCBwbGF5ZXIxTmFtZSkge1xuICBwbGF5ZXJzWzBdID0ge1xuICAgIHBsYXllcjogY3JlYXRlUGxheWVyKHBsYXllcjFUeXBlLCBwbGF5ZXIxTmFtZSksXG4gICAgYm9hcmQ6IGdldEJvYXJkc0RPTSgwKSxcbiAgfTtcbiAgaW5pdEdhbWVTdGF0ZSgpO1xuICBwb3B1bGF0ZUdhbWVib2FyZHMoKTtcbiAgc2V0QmVmb3JlR2FtZVN0YXRlKCk7XG4gIGNvbnNvbGUubG9nKHBsYXllcnMpO1xufVxuZnVuY3Rpb24gaW5pdEdhbWVTdGF0ZSgpIHtcbiAgZ2FtZVN0YXRlID0ge1xuICAgIGN1cnJlbnRQbGF5ZXI6IHBsYXllcnNbMF0ucGxheWVyLFxuICAgIGN1cnJlbnRQbGF5ZXJCb2FyZDogcGxheWVyc1swXS5ib2FyZCxcbiAgICBpc0ZpbmlzaGVkOiBmYWxzZSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGxheWVyKHBsYXllclR5cGUsIHBsYXllck5hbWUpIHtcbiAgcmV0dXJuIG5ldyBQbGF5ZXIocGxheWVyVHlwZSwgcGxheWVyTmFtZSk7XG59XG5mdW5jdGlvbiBnZXRQbGF5ZXJzKCkge1xuICByZXR1cm4gcGxheWVycztcbn1cbmZ1bmN0aW9uIGdldEdhbWVTdGF0ZSgpIHtcbiAgcmV0dXJuIGdhbWVTdGF0ZTtcbn1cbmZ1bmN0aW9uIHNldEdhbWVTdGF0ZShrZXksIHZhbHVlKSB7XG4gIGdhbWVTdGF0ZVtgJHtrZXl9YF0gPSB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGdldEN1cnJlbnRQbGF5ZXIoKSB7XG4gIHJldHVybiBnYW1lU3RhdGUuY3VycmVudFBsYXllcjtcbn1cbmZ1bmN0aW9uIGdldEN1cnJlbnRQbGF5ZXJEb21Cb2FyZCgpIHtcbiAgcmV0dXJuIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyQm9hcmQ7XG59XG5mdW5jdGlvbiBnZXROb25DdXJyZW50UGxheWVyRG9tQm9hcmQoKSB7XG4gIHJldHVybiBnYW1lU3RhdGUuY3VycmVudFBsYXllciA9PT0gcGxheWVyc1swXS5wbGF5ZXJcbiAgICA/IHBsYXllcnNbMV0uYm9hcmRcbiAgICA6IHBsYXllcnNbMF0uYm9hcmQ7XG59XG5mdW5jdGlvbiBnZXRPcHBvc2luZ1BsYXllcigpIHtcbiAgcmV0dXJuIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyID09PSBwbGF5ZXJzWzBdLnBsYXllclxuICAgID8gcGxheWVyc1sxXS5wbGF5ZXJcbiAgICA6IHBsYXllcnNbMF0ucGxheWVyO1xufVxuZnVuY3Rpb24gY2hhbmdlQ3VycmVudFBsYXllcigpIHtcbiAgZ2FtZVN0YXRlLmN1cnJlbnRQbGF5ZXIgPVxuICAgIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyID09PSBwbGF5ZXJzWzBdLnBsYXllclxuICAgICAgPyAoZ2FtZVN0YXRlLmN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJzWzFdLnBsYXllcilcbiAgICAgIDogKGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyID0gcGxheWVyc1swXS5wbGF5ZXIpO1xuXG4gIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyQm9hcmQgPVxuICAgIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyID09PSBwbGF5ZXJzWzBdLnBsYXllclxuICAgICAgPyBwbGF5ZXJzWzBdLmJvYXJkXG4gICAgICA6IHBsYXllcnNbMV0uYm9hcmQ7XG59XG5cbmZ1bmN0aW9uIGluaXRHYW1lKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgaW5pdERvbSgpO1xuICBpbml0UGxheWVycyhwbGF5ZXIxLnR5cGUsIHBsYXllcjIudHlwZSwgcGxheWVyMS5uYW1lLCBwbGF5ZXIyLm5hbWUpO1xuICBpbml0R2FtZVN0YXRlKCk7XG4gIHBvcHVsYXRlR2FtZWJvYXJkcygpO1xuICBzZXRCZWZvcmVHYW1lU3RhdGUoKTtcbn1cblxuZXhwb3J0IHtcbiAgaW5pdEdhbWUsXG4gIGdldFBsYXllcnMsXG4gIGdldEdhbWVTdGF0ZSxcbiAgY2hhbmdlQ3VycmVudFBsYXllcixcbiAgZ2V0Q3VycmVudFBsYXllcixcbiAgZ2V0T3Bwb3NpbmdQbGF5ZXIsXG4gIGdldEN1cnJlbnRQbGF5ZXJEb21Cb2FyZCxcbiAgZ2V0Tm9uQ3VycmVudFBsYXllckRvbUJvYXJkLFxuICBzZXRHYW1lU3RhdGUsXG4gIHJlSW5pdFBsYXllcixcbn07XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4uL3NoaXAvc2hpcC1jbGFzc1wiO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNoaXBzID0gW107XG4gICAgdGhpcy5taXNzZWRTaG90cyA9IFtdO1xuICAgIHRoaXMuaGl0U2hvdHMgPSBbXTtcbiAgICB0aGlzLmN1cnJlbnRDb29yZHMgPSBbXTtcbiAgICB0aGlzLnN1cnJvdW5kaW5nQ29vcmRzID0gW107XG4gICAgdGhpcy5zdXJyb3VuZGluZ1Nob3RzID0gW107XG4gICAgdGhpcy5fZ2VuZXJhdGVTaGlwTWFwKCk7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCBzaGlwID0gdGhpcy5fZ2V0U2hpcChjb29yZGluYXRlKTtcbiAgICBpZiAoc2hpcCAmJiAhc2hpcC5zdW5rKSB7XG4gICAgICBzaGlwLmhpdCgpO1xuICAgICAgdGhpcy5oaXRTaG90cy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgdGhpcy5jdXJyZW50Q29vcmRzLnNwbGljZShcbiAgICAgICAgZmluZEluZGV4b2ZJdGVtSW5BcnJheSh0aGlzLmN1cnJlbnRDb29yZHMsIGNvb3JkaW5hdGUpLFxuICAgICAgICAxXG4gICAgICApO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWlzc2VkU2hvdHMucHVzaChjb29yZGluYXRlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBoYXNBbGxTaGlwc0JlZW5TdW5rKCkge1xuICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KChzaGlwKSA9PiB7XG4gICAgICByZXR1cm4gc2hpcC5zaGlwLnN1bmsgPT09IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBfZ2V0U2hpcChjb29yZGluYXRlKSB7XG4gICAgZm9yIChjb25zdCBzaGlwIG9mIHRoaXMuc2hpcHMpIHtcbiAgICAgIGZvciAoY29uc3QgY29vcmQgb2Ygc2hpcC5jb29yZHMpIHtcbiAgICAgICAgaWYgKGFycmF5c0VxdWFsKGNvb3JkLCBjb29yZGluYXRlKSkge1xuICAgICAgICAgIHJldHVybiBzaGlwLnNoaXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgX2dldFNoaXBTdXJyb3VuZGluZ0Nvb3Jkcyhjb29yZGluYXRlKSB7XG4gICAgZm9yIChjb25zdCBzaGlwIG9mIHRoaXMuc2hpcHMpIHtcbiAgICAgIGZvciAoY29uc3QgY29vcmQgb2Ygc2hpcC5jb29yZHMpIHtcbiAgICAgICAgaWYgKGFycmF5c0VxdWFsKGNvb3JkLCBjb29yZGluYXRlKSkge1xuICAgICAgICAgIHJldHVybiBzaGlwLnN1cnJvdW5kaW5nQ29vcmRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgX2dlbmVyYXRlU2hpcE1hcCgpIHtcbiAgICB0aGlzLnNoaXBzLnB1c2godGhpcy5fZ2VuZXJhdGVTaGlwKDQpKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICB0aGlzLnNoaXBzLnB1c2godGhpcy5fZ2VuZXJhdGVTaGlwKDMpKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgdGhpcy5zaGlwcy5wdXNoKHRoaXMuX2dlbmVyYXRlU2hpcCgyKSk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgIHRoaXMuc2hpcHMucHVzaCh0aGlzLl9nZW5lcmF0ZVNoaXAoMSkpO1xuICAgIH1cblxuICAgIHRoaXMuc3Vycm91bmRpbmdDb29yZHMgPSByZW1vdmVEdXBsaWNhdGVBcnJheXModGhpcy5zdXJyb3VuZGluZ0Nvb3Jkcyk7XG4gIH1cblxuICBfZ2VuZXJhdGVTaGlwKGxlbmd0aCwgeF9jb29yZCA9IG51bGwsIHlfY29vcmQgPSBudWxsKSB7XG4gICAgY29uc3QgeyBjb29yZHMsIHN1cnJvdW5kaW5nQ29vcmRzIH0gPSB0aGlzLl9nZW5lcmF0ZUNvb3JkKFxuICAgICAgbGVuZ3RoLFxuICAgICAgeF9jb29yZCxcbiAgICAgIHlfY29vcmRcbiAgICApO1xuICAgIHJldHVybiB7XG4gICAgICBjb29yZHMsXG4gICAgICBzdXJyb3VuZGluZ0Nvb3JkcyxcbiAgICAgIHNoaXA6IG5ldyBTaGlwKGxlbmd0aCksXG4gICAgfTtcbiAgfVxuXG4gIF9nZW5lcmF0ZUNvb3JkKGxlbmd0aCwgeF9jb29yZCA9IG51bGwsIHlfY29vcmQgPSBudWxsKSB7XG4gICAgbGV0IHggPSB4X2Nvb3JkID09PSBudWxsID8gdGhpcy5fZ2VuZXJhdGVSYW5kb21OdW1iZXIoKSA6IHhfY29vcmQ7XG4gICAgbGV0IHkgPSB5X2Nvb3JkID09PSBudWxsID8gdGhpcy5fZ2VuZXJhdGVSYW5kb21OdW1iZXIoKSA6IHlfY29vcmQ7XG4gICAgY29uc3Qgb3JpZW50YXRpb25YID0gTWF0aC5yYW5kb20oKSA+PSAwLjU7XG4gICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDIwMDtcblxuICAgIHdoaWxlIChhdHRlbXB0cyA8IG1heEF0dGVtcHRzKSB7XG4gICAgICBhdHRlbXB0cysrO1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9pc1ZhbGlkQ29vcmQoeCwgeSwgbGVuZ3RoLCBvcmllbnRhdGlvblgpICYmXG4gICAgICAgICF0aGlzLl9wcmVkaWN0Q29sbGlzaW9uV2l0aEN1cnJlbnRDb29yZHMoXG4gICAgICAgICAgb3JpZW50YXRpb25YID8gXCJ4XCIgOiBcInlcIixcbiAgICAgICAgICB4LFxuICAgICAgICAgIHksXG4gICAgICAgICAgbGVuZ3RoXG4gICAgICAgICkgJiZcbiAgICAgICAgIXRoaXMuX3ByZWRpY3RDb2xsaXNpb25XaXRoU3Vycm91bmRpbmdDb29yZHMoXG4gICAgICAgICAgb3JpZW50YXRpb25YID8gXCJ4XCIgOiBcInlcIixcbiAgICAgICAgICB4LFxuICAgICAgICAgIHksXG4gICAgICAgICAgbGVuZ3RoXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHggPSB0aGlzLl9nZW5lcmF0ZVJhbmRvbU51bWJlcigpO1xuICAgICAgeSA9IHRoaXMuX2dlbmVyYXRlUmFuZG9tTnVtYmVyKCk7XG4gICAgfVxuXG4gICAgaWYgKGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgdG8gZ2VuZXJhdGUgdmFsaWQgY29vcmRpbmF0ZXMgYWZ0ZXIgJHttYXhBdHRlbXB0c30gYXR0ZW1wdHNgXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGNvb3JkcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvb3Jkcy5wdXNoKFt4LCB5XSk7XG4gICAgICB0aGlzLmN1cnJlbnRDb29yZHMucHVzaChbeCwgeV0pO1xuICAgICAgaWYgKG9yaWVudGF0aW9uWCkge1xuICAgICAgICB4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB5Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3Vycm91bmRpbmdDb29yZHMgPSB0aGlzLl9nZXRTdXJyb3VuZGluZ0Nvb3JkcyhcbiAgICAgIGNvb3JkcyxcbiAgICAgIGxlbmd0aCxcbiAgICAgIG9yaWVudGF0aW9uWFxuICAgICk7XG4gICAgdGhpcy5zdXJyb3VuZGluZ0Nvb3Jkcy5wdXNoKC4uLnN1cnJvdW5kaW5nQ29vcmRzKTtcblxuICAgIHJldHVybiB7IGNvb3Jkcywgc3Vycm91bmRpbmdDb29yZHMgfTtcbiAgfVxuXG4gIF9nZXRTdXJyb3VuZGluZ0Nvb3Jkcyhjb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvblgpIHtcbiAgICBjb25zdCBzdXJDb29yZEFycmF5ID0gW107XG4gICAgc3VyQ29vcmRBcnJheS5wdXNoKHRoaXMuX2dldFVwcGVyUm93Q29vcmRzKGNvb3JkLCBsZW5ndGgsIG9yaWVudGF0aW9uWCkpO1xuICAgIHN1ckNvb3JkQXJyYXkucHVzaCh0aGlzLl9nZXRCb3R0b21Sb3dDb29yZHMoY29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb25YKSk7XG4gICAgc3VyQ29vcmRBcnJheS5wdXNoKHRoaXMuX2dldFJpZ2h0Q29vcmRzKGNvb3JkLCBsZW5ndGgsIG9yaWVudGF0aW9uWCkpO1xuICAgIHN1ckNvb3JkQXJyYXkucHVzaCh0aGlzLl9nZXRMZWZ0Q29vcmRzKGNvb3JkLCBsZW5ndGgsIG9yaWVudGF0aW9uWCkpO1xuXG4gICAgcmV0dXJuIHN1ckNvb3JkQXJyYXkuZmxhdCgpO1xuICB9XG5cbiAgX2dldFVwcGVyUm93Q29vcmRzKGNvb3JkcywgbGVuZ3RoLCBvcmllbnRhdGlvblgpIHtcbiAgICBjb25zdCB1cHBlclJvdyA9IFtdO1xuICAgIGxldCBbeF9jb29yZCwgeV9jb29yZF0gPSBjb29yZHNbMF07XG5cbiAgICB5X2Nvb3JkLS07XG4gICAgeF9jb29yZC0tO1xuXG4gICAgbGV0IHVwcGVyUm93TGVuZ3RoID0gb3JpZW50YXRpb25YID8gbGVuZ3RoICsgMiA6IDM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cHBlclJvd0xlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5faXNXaXRoaW5Cb3VuZHMoW3hfY29vcmQsIHlfY29vcmRdKSkge1xuICAgICAgICB1cHBlclJvdy5wdXNoKFt4X2Nvb3JkLCB5X2Nvb3JkXSk7XG4gICAgICB9XG4gICAgICB4X2Nvb3JkKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVwcGVyUm93O1xuICB9XG5cbiAgX2dldEJvdHRvbVJvd0Nvb3Jkcyhjb29yZHMsIGxlbmd0aCwgb3JpZW50YXRpb25YKSB7XG4gICAgY29uc3QgYm90dG9tUm93ID0gW107XG4gICAgbGV0IFt4X2Nvb3JkLCB5X2Nvb3JkXSA9IGNvb3Jkc1tsZW5ndGggLSAxXTtcblxuICAgIHlfY29vcmQrKztcbiAgICB4X2Nvb3JkKys7XG5cbiAgICBsZXQgYm90dG9tUm93TGVuZ3RoID0gb3JpZW50YXRpb25YID8gbGVuZ3RoICsgMiA6IDM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3R0b21Sb3dMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX2lzV2l0aGluQm91bmRzKFt4X2Nvb3JkLCB5X2Nvb3JkXSkpIHtcbiAgICAgICAgYm90dG9tUm93LnB1c2goW3hfY29vcmQsIHlfY29vcmRdKTtcbiAgICAgIH1cbiAgICAgIHhfY29vcmQtLTtcbiAgICB9XG4gICAgcmV0dXJuIGJvdHRvbVJvdztcbiAgfVxuXG4gIF9nZXRSaWdodENvb3Jkcyhjb29yZHMsIGxlbmd0aCwgb3JpZW50YXRpb25YKSB7XG4gICAgY29uc3QgcmlnaHQgPSBbXTtcbiAgICBsZXQgW3hfY29vcmQsIHlfY29vcmRdID0gY29vcmRzW2xlbmd0aCAtIDFdO1xuICAgIHhfY29vcmQrKztcblxuICAgIGxldCByaWdodExlbmd0aCA9IG9yaWVudGF0aW9uWCA/IDEgOiBsZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByaWdodExlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5faXNXaXRoaW5Cb3VuZHMoW3hfY29vcmQsIHlfY29vcmRdKSkge1xuICAgICAgICByaWdodC5wdXNoKFt4X2Nvb3JkLCB5X2Nvb3JkXSk7XG4gICAgICB9XG4gICAgICB5X2Nvb3JkLS07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJpZ2h0O1xuICB9XG5cbiAgX2dldExlZnRDb29yZHMoY29vcmRzLCBsZW5ndGgsIG9yaWVudGF0aW9uWCkge1xuICAgIGNvbnN0IGxlZnQgPSBbXTtcbiAgICBsZXQgeF9jb29yZDtcbiAgICBsZXQgeV9jb29yZDtcbiAgICBpZiAob3JpZW50YXRpb25YKSB7XG4gICAgICBbeF9jb29yZCwgeV9jb29yZF0gPSBjb29yZHNbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIFt4X2Nvb3JkLCB5X2Nvb3JkXSA9IGNvb3Jkc1tsZW5ndGggLSAxXTtcbiAgICB9XG4gICAgeF9jb29yZC0tO1xuXG4gICAgbGV0IGxlZnRMZW5ndGggPSBvcmllbnRhdGlvblggPyAxIDogbGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVmdExlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5faXNXaXRoaW5Cb3VuZHMoW3hfY29vcmQsIHlfY29vcmRdKSkge1xuICAgICAgICBsZWZ0LnB1c2goW3hfY29vcmQsIHlfY29vcmRdKTtcbiAgICAgIH1cbiAgICAgIHlfY29vcmQtLTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVmdDtcbiAgfVxuXG4gIF9wcmVkaWN0Q29sbGlzaW9uV2l0aEN1cnJlbnRDb29yZHMob3JpYW50YXRpb24sIHgsIHksIGxlbmd0aCkge1xuICAgIGNvbnN0IHRlbXBBcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB0ZW1wQXJyLnB1c2goW3gsIHldKTtcbiAgICAgIGlmIChvcmlhbnRhdGlvbiA9PT0gXCJ4XCIpIHgrKztcbiAgICAgIGVsc2UgeSsrO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgYXJyYXkgb2YgdGVtcEFycikge1xuICAgICAgaWYgKHRoaXMuX2hhc0Nvb3JkQ29sbGlzaW9uKGFycmF5LCB0aGlzLmN1cnJlbnRDb29yZHMpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBfcHJlZGljdENvbGxpc2lvbldpdGhTdXJyb3VuZGluZ0Nvb3JkcyhvcmlhbnRhdGlvbiwgeCwgeSwgbGVuZ3RoKSB7XG4gICAgY29uc3QgdGVtcEFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHRlbXBBcnIucHVzaChbeCwgeV0pO1xuICAgICAgaWYgKG9yaWFudGF0aW9uID09PSBcInhcIikgeCsrO1xuICAgICAgZWxzZSB5Kys7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBhcnJheSBvZiB0ZW1wQXJyKSB7XG4gICAgICBpZiAodGhpcy5faGFzQ29vcmRDb2xsaXNpb24oYXJyYXksIHRoaXMuc3Vycm91bmRpbmdDb29yZHMpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBfaXNXaXRoaW5Cb3VuZHMoY29vcmQpIHtcbiAgICBjb25zdCBbeF9jb29yZCwgeV9jb29yZF0gPSBjb29yZDtcbiAgICByZXR1cm4geF9jb29yZCA+PSAwICYmIHhfY29vcmQgPCAxMCAmJiB5X2Nvb3JkID49IDAgJiYgeV9jb29yZCA8IDEwO1xuICB9XG5cbiAgX2lzVmFsaWRDb29yZCh4LCB5LCBsZW5ndGgsIG9yaWVudGF0aW9uWCkge1xuICAgIGlmIChvcmllbnRhdGlvblgpIHtcbiAgICAgIHJldHVybiB4ICsgbGVuZ3RoIDw9IDEwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geSArIGxlbmd0aCA8PSAxMDtcbiAgICB9XG4gIH1cblxuICBfZ2VuZXJhdGVSYW5kb21OdW1iZXIoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgfVxuXG4gIF9oYXNDb29yZENvbGxpc2lvbihjb29yZCwgb3RoZXJDb29yZCkge1xuICAgIHJldHVybiBvdGhlckNvb3JkLnNvbWUoKGV4aXN0aW5nQ29vcmQpID0+XG4gICAgICBhcnJheXNFcXVhbChleGlzdGluZ0Nvb3JkLCBjb29yZClcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFycmF5c0VxdWFsKGFycjEsIGFycjIpIHtcbiAgaWYgKGFycjEubGVuZ3RoICE9PSBhcnIyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gYXJyMS5ldmVyeSgoZWxlbWVudCwgaW5kZXgpID0+IGVsZW1lbnQgPT09IGFycjJbaW5kZXhdKTtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4b2ZJdGVtSW5BcnJheShhcnJheSwgaXRlbSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFycmF5c0VxdWFsKGFycmF5W2ldLCBpdGVtKSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZUFycmF5cyhhcnJheXMpIHtcbiAgY29uc3QgdW5pcXVlQXJyYXlzID0gbmV3IFNldChhcnJheXMubWFwKEpTT04uc3RyaW5naWZ5KSk7XG4gIHJldHVybiBBcnJheS5mcm9tKHVuaXF1ZUFycmF5cykubWFwKEpTT04ucGFyc2UpO1xufVxuXG5leHBvcnQgeyBHYW1lYm9hcmQgfTtcbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuLi9nYW1lYm9hcmQvZ2FtZWJvYXJkLWNsYXNzXCI7XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIG5hbWUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgUGxheWVyIH07XG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5udW1iZXJfaGl0ID0gMDtcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgfVxuICBnZXRTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHsgbGVuZ3RoOiB0aGlzLmxlbmd0aCwgaGl0OiB0aGlzLm51bWJlcl9oaXQsIHN1bms6IHRoaXMuc3VuayB9O1xuICB9XG4gIGhpdCgpIHtcbiAgICBpZiAoIXRoaXMuc3Vuaykge1xuICAgICAgdGhpcy5udW1iZXJfaGl0Kys7XG4gICAgICB0aGlzLnN1bmsgPSB0aGlzLmlzU3VuaygpO1xuICAgIH1cbiAgfVxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtYmVyX2hpdCA9PT0gdGhpcy5sZW5ndGg7XG4gIH1cbn1cblxuZXhwb3J0IHsgU2hpcCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBpbml0R2FtZSB9IGZyb20gXCIuL2dhbWUtbG9naWMvZ2FtZS1sb2dpY1wiO1xuaW1wb3J0IHsgaW5pdEJ1dHRvbnMgfSBmcm9tIFwiLi9kb20tbWFuaXAvZG9tLWJ1dHRvbnNcIjtcblxuLy8gaW5pdEdhbWUoXCJodW1hblwiLCBcImh1bWFuXCIpO1xuaW5pdEdhbWUoeyB0eXBlOiBcImh1bWFuXCIsIG5hbWU6IFwicGxheWVyLTFcIiB9LCB7IHR5cGU6IFwiYWlcIiwgbmFtZTogXCJwbGF5ZXItMlwiIH0pO1xuaW5pdEJ1dHRvbnMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==