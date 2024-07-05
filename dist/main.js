/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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
}

.boards {
  width: 80%;
  height: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.player-1-container,
.player-2-container {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  justify-content: center;
  align-items: center;
}

.player-1-board,
.player-2-board {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  align-items: center;
  border: 1px solid white;
  width: 500px;
  height: 500px;
}
.box {
  height: 100%;
  cursor: crosshair;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
}
.box:hover {
  background-color: #a7d0e8;
}
.ship {
  background-color: black;
}
.ship.hit {
  background-color: green;
  cursor: default;
  font-size: 2em;
  border: 2px solid red;
}

.ship.sunk {
  /* todo */
}

.missed {
  cursor: default;
  background-color: rgb(105, 107, 105);
  opacity: 0.5;
}

.player-1-text,
.player-2-text {
  color: white;
  text-transform: uppercase;
}

.half-opacity {
  opacity: 0.5;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,oDAAoD;EACpD,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,WAAW;EACX,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;AACA;;EAEE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;AACf;AACA;EACE,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,uBAAuB;AACzB;AACA;EACE,uBAAuB;EACvB,eAAe;EACf,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,eAAe;EACf,oCAAoC;EACpC,YAAY;AACd;;AAEA;;EAEE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,YAAY;AACd","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  background: linear-gradient(90deg, #1a78ae, #431dd9);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2em;\n  color: white;\n  text-transform: uppercase;\n}\n\n.boards {\n  width: 80%;\n  height: 60%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.player-1-container,\n.player-2-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5em;\n  justify-content: center;\n  align-items: center;\n}\n\n.player-1-board,\n.player-2-board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  align-items: center;\n  border: 1px solid white;\n  width: 500px;\n  height: 500px;\n}\n.box {\n  height: 100%;\n  cursor: crosshair;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid white;\n}\n.box:hover {\n  background-color: #a7d0e8;\n}\n.ship {\n  background-color: black;\n}\n.ship.hit {\n  background-color: green;\n  cursor: default;\n  font-size: 2em;\n  border: 2px solid red;\n}\n\n.ship.sunk {\n  /* todo */\n}\n\n.missed {\n  cursor: default;\n  background-color: rgb(105, 107, 105);\n  opacity: 0.5;\n}\n\n.player-1-text,\n.player-2-text {\n  color: white;\n  text-transform: uppercase;\n}\n\n.half-opacity {\n  opacity: 0.5;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";
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

  console.log(players);
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

"use strict";
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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Ship = __webpack_require__(/*! ../ship/ship-class */ "./src/ship/ship-class.js");

class Gameboard {
  constructor() {
    this.ships = [];
    this.missedShots = [];
    this.hitShots = [];
    this.currentCoords = [];
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
  }

  _generateShip(length, x_coord = null, y_coord = null) {
    const coords = this._generateCoord(length, x_coord, y_coord);
    return {
      coords,
      ship: new Ship(length),
    };
  }
  _predictCollision(oriantation, x, y, length) {
    const tempArr = [];
    for (let i = 0; i < length; i++) {
      tempArr.push([x, y]);
      if (oriantation === "x") x++;
      else y++;
    }
    // [6,9] [7,9] [8,9] [9,9]
    for (const array of tempArr) {
      if (this._hasCoordCollision(array)) {
        return true;
      }
    }
    return false;
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
        !this._predictCollision(orientationX ? "x" : "y", x, y, length)
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
    return coordArr;
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
  _hasCoordCollision(coord) {
    return this.currentCoords.some((existingCoord) =>
      arraysEqual(existingCoord, coord)
    );
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

module.exports = Gameboard;


/***/ }),

/***/ "./src/player/player-class.js":
/*!************************************!*\
  !*** ./src/player/player-class.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
const Gameboard = __webpack_require__(/*! ../gameboard/gameboard-class */ "./src/gameboard/gameboard-class.js");

class Player {
  constructor(type, name) {
    this.type = type;
    this.name = name;
    this.gameboard = new Gameboard();
  }
}




/***/ }),

/***/ "./src/ship/ship-class.js":
/*!********************************!*\
  !*** ./src/ship/ship-class.js ***!
  \********************************/
/***/ ((module) => {

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

module.exports = Ship;


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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQzZCOztBQUVuRDtBQUNBLGdFQUFRO0FBQ1IsSUFBSSxpQ0FBaUM7QUFDckMsSUFBSTtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLW1hbmlwL2RvbS1tYW5pcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUtbG9naWMvZ2FtZS1sb2dpYy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC9nYW1lYm9hcmQtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIvcGxheWVyLWNsYXNzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC9zaGlwLWNsYXNzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxYTc4YWUsICM0MzFkZDkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJvYXJkcyB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogNjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wbGF5ZXItMS1jb250YWluZXIsXG4ucGxheWVyLTItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjVlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wbGF5ZXItMS1ib2FyZCxcbi5wbGF5ZXItMi1ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cbi5ib3gge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG4uYm94OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E3ZDBlODtcbn1cbi5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4uc2hpcC5oaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBmb250LXNpemU6IDJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xufVxuXG4uc2hpcC5zdW5rIHtcbiAgLyogdG9kbyAqL1xufVxuXG4ubWlzc2VkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA1LCAxMDcsIDEwNSk7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLnBsYXllci0xLXRleHQsXG4ucGxheWVyLTItdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmhhbGYtb3BhY2l0eSB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvREFBb0Q7RUFDcEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkOztBQUVBOztFQUVFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMWE3OGFlLCAjNDMxZGQ5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4uYm9hcmRzIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wbGF5ZXItMS1jb250YWluZXIsXFxuLnBsYXllci0yLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMS41ZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXItMS1ib2FyZCxcXG4ucGxheWVyLTItYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbn1cXG4uYm94IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG4uYm94OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhN2QwZTg7XFxufVxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uc2hpcC5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnNoaXAuc3VuayB7XFxuICAvKiB0b2RvICovXFxufVxcblxcbi5taXNzZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNSwgMTA3LCAxMDUpO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4ucGxheWVyLTEtdGV4dCxcXG4ucGxheWVyLTItdGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4uaGFsZi1vcGFjaXR5IHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7XG4gIGdldFBsYXllcnMsXG4gIGdldEdhbWVTdGF0ZSxcbiAgY2hhbmdlQ3VycmVudFBsYXllcixcbiAgZ2V0Q3VycmVudFBsYXllcixcbiAgZ2V0T3Bwb3NpbmdQbGF5ZXIsXG59IGZyb20gXCIuLi9nYW1lLWxvZ2ljL2dhbWUtbG9naWNcIjtcblxuZnVuY3Rpb24gaW5pdERvbSgpIHtcbiAgcG9wdWxhdGVCb2FyZCgpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUJvYXJkKCkge1xuICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkXCIpO1xuXG4gIGJvYXJkcy5mb3JFYWNoKChib2FyZCwgaW5kZXgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvd0luZGV4ID0gaTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBjb25zdCBjb2x1bW5JbmRleCA9IGo7XG4gICAgICAgIGNvbnN0IGRpdiA9IGNyZWF0ZURpdihcImJveFwiKTtcblxuICAgICAgICBkaXYuZGF0YXNldC5yb3cgPSByb3dJbmRleDtcbiAgICAgICAgZGl2LmRhdGFzZXQuY29sdW1uID0gY29sdW1uSW5kZXg7XG4gICAgICAgIGRpdi5kYXRhc2V0LnBsYXllciA9IGluZGV4O1xuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRGl2Q2xpY2spO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURpdkNsaWNrKGUpIHtcbiAgLy8gaWYgaGl0IHNoaXAgaXMgc3VjY2VzZnVsXG4gIGlmIChoaXRTaGlwKGUudGFyZ2V0LmRhdGFzZXQpKSB7XG4gICAgLy8gY29udGludWUgcGxheWluZyB3aXRoIHRoZSBjdXJyZW50IHBsYXllclxuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPVxuICAgICAgZ2V0UGxheWVycygpW3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQucGxheWVyKV0ucGxheWVyO1xuICAgIC8vIGNoZWNrIGlmIGFsbCBzaGlwcyBzdW5rXG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIuZ2FtZWJvYXJkLmhhc0FsbFNoaXBzQmVlblN1bmsoKSkge1xuICAgICAgLy8gZGlzcGxheSB3aW5uaW5nIHBsYXllclxuICAgICAgLy8gZGlzcGxheVdpbm5lcigpXG4gICAgICBjb25zb2xlLmxvZyhcIndpbm5lciBpc1wiLCBnZXRDdXJyZW50UGxheWVyKCkpO1xuICAgIH1cbiAgICAvLyBpZiBoaXQgc2hpcCBpcyBub3Qgc3VjY2Vzc2Z1bFxuICB9IGVsc2Uge1xuICAgIC8vIGNoYW5nZSB0aGUgY3VycmVudCBwbGF5ZXJcbiAgICBjaGFuZ2VDdXJyZW50UGxheWVyKCk7XG4gICAgcmVuZGVyQ3VycmVudFBsYXllckRpc3BsYXkoKTtcbiAgfVxuXG4gIHBvcHVsYXRlR2FtZWJvYXJkcygpO1xuICByZW5kZXJDdXJyZW50UGxheWVyVGV4dChnZXRDdXJyZW50UGxheWVyKCkpO1xufVxuXG5mdW5jdGlvbiBoaXRTaGlwKHBsYXllcikge1xuICBjb25zdCBwbGF5ZXJEYXRhc2V0ID0geyAuLi5wbGF5ZXIgfTtcblxuICBjb25zdCBjdXJyZW50UGxheWVyID0gZ2V0UGxheWVycygpW3BhcnNlSW50KHBsYXllckRhdGFzZXQucGxheWVyKV07XG4gIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IGN1cnJlbnRQbGF5ZXIucGxheWVyLmdhbWVib2FyZDtcblxuICBjb25zdCB4X2Nvb3JkID0gcGFyc2VJbnQocGxheWVyRGF0YXNldC5yb3cpO1xuICBjb25zdCB5X2Nvb3JkID0gcGFyc2VJbnQocGxheWVyRGF0YXNldC5jb2x1bW4pO1xuICBjb25zdCBjb29yZCA9IFt4X2Nvb3JkLCB5X2Nvb3JkXTtcbiAgcmV0dXJuIHBsYXllckdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVHYW1lYm9hcmRzKCkge1xuICBjb25zdCBwbGF5ZXJzID0gZ2V0UGxheWVycygpO1xuICByZW5kZXJQbGF5ZXJOYW1lcyhwbGF5ZXJzKTtcbiAgcmVuZGVyQ3VycmVudFBsYXllclRleHQoZ2V0Q3VycmVudFBsYXllcigpKTtcbiAgcmVuZGVyQ3VycmVudFBsYXllckRpc3BsYXkoKTtcbiAgcGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICByZW5kZXJQbGF5ZXJCb2FyZChwbGF5ZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ3VycmVudFBsYXllckRpc3BsYXkoKSB7XG4gIC8vIGdldCBwbGF5ZXIgYm9hcmQgZGl2c1xuICBjb25zdCBQbGF5ZXIxQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0xLWJvYXJkXCIpO1xuICBjb25zdCBQbGF5ZXIyQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0yLWJvYXJkXCIpO1xuXG4gIC8vIHJlc2V0IGJvYXJkcyBvcGFjaXR5XG4gIFBsYXllcjFCb2FyZERpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGFsZi1vcGFjaXR5XCIpO1xuICBQbGF5ZXIyQm9hcmREaXYuY2xhc3NMaXN0LnJlbW92ZShcImhhbGYtb3BhY2l0eVwiKTtcblxuICAvLyBzZXQgY3VycmVudCBwbGF5ZXIgYm9hcmQgb3BhY2l0eVxuICBjb25zdCBjdXJyZW50UGxheWVyID0gZ2V0Q3VycmVudFBsYXllcigpO1xuICBjb25zdCBjdXJyZW50UGxheWVyQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGAuJHtjdXJyZW50UGxheWVyLm5hbWV9LWJvYXJkYFxuICApO1xuICBjdXJyZW50UGxheWVyQm9hcmREaXYuY2xhc3NMaXN0LmFkZChcImhhbGYtb3BhY2l0eVwiKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUGxheWVyQm9hcmQocGxheWVyKSB7XG4gIC8vIGlmIHBsYXllciBpcyBzb21ldGhpbmcgb3RoZXIgdGhhbiBodW1hbiBkb250IHJlbmRlclxuICBpZiAocGxheWVyLnR5cGUgPT09IFwiYWlcIikgcmV0dXJuO1xuXG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIucGxheWVyO1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IEFycmF5LmZyb20ocGxheWVyLmJvYXJkKTtcblxuICAvL3JlbmRlciBjdXJyZW50Y29vcmRzXG4gIGN1cnJlbnRQbGF5ZXIuZ2FtZWJvYXJkLmN1cnJlbnRDb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICBjb25zdCBkaXYgPSBmaW5kQ29ycmVzcG9uZGluZ0Rpdihjb29yZCwgcGxheWVyQm9hcmQpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgfSk7XG5cbiAgLy9yZW5kZXIgc3VjY2Vzc2Z1bCBoaXRzaG90c1xuICBjdXJyZW50UGxheWVyLmdhbWVib2FyZC5oaXRTaG90cy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGZpbmRDb3JyZXNwb25kaW5nRGl2KGNvb3JkLCBwbGF5ZXJCb2FyZCk7XG4gICAgZGl2LnRleHRDb250ZW50ID0gXCLinYxcIjtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAvLyBwcmV2ZW50IGNsaWNraW5nIHRoZSBzYW1lIGNvb3JkIGFnYWluXG4gICAgZGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVEaXZDbGljayk7XG4gIH0pO1xuXG4gIC8vcmVuZGVyIG1pc3NlZHNob3RzXG4gIGN1cnJlbnRQbGF5ZXIuZ2FtZWJvYXJkLm1pc3NlZFNob3RzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZmluZENvcnJlc3BvbmRpbmdEaXYoY29vcmQsIHBsYXllckJvYXJkKTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBcIvCflJhcIjtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcIm1pc3NlZFwiKTtcbiAgICAvLyBwcmV2ZW50IGNsaWNraW5nIHRoZSBzYW1lIGNvb3JkIGFnYWluXG4gICAgZGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVEaXZDbGljayk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmaW5kQ29ycmVzcG9uZGluZ0Rpdihjb29yZCwgYm9hcmQpIHtcbiAgY29uc3QgW3hfY29vcmQsIHlfY29vcmRdID0gY29vcmQ7XG5cbiAgY29uc3QgZGl2ID0gYm9hcmQuZmluZCgoZGl2KSA9PiB7XG4gICAgY29uc3Qgcm93ID0gcGFyc2VJbnQoZGl2LmRhdGFzZXQucm93KTtcbiAgICBjb25zdCBjb2x1bW4gPSBwYXJzZUludChkaXYuZGF0YXNldC5jb2x1bW4pO1xuICAgIHJldHVybiByb3cgPT09IHhfY29vcmQgJiYgY29sdW1uID09PSB5X2Nvb3JkO1xuICB9KTtcblxuICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiByZW5kZXJQbGF5ZXJOYW1lcyhwbGF5ZXJzKSB7XG4gIGNvbnN0IHBsYXllcjFEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0xLXRleHRcIik7XG4gIGNvbnN0IHBsYXllcjJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0yLXRleHRcIik7XG5cbiAgcGxheWVyMURpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gIHBsYXllcjJEaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIGNvbnNvbGUubG9nKHBsYXllcnMpO1xuICBwbGF5ZXIxRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRpbmcoYCR7cGxheWVyc1swXS5wbGF5ZXIubmFtZX1gLCBcImgyXCIpKTtcbiAgcGxheWVyMkRpdi5hcHBlbmRDaGlsZChjcmVhdGVIZWFkaW5nKGAke3BsYXllcnNbMV0ucGxheWVyLm5hbWV9YCwgXCJoMlwiKSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckN1cnJlbnRQbGF5ZXJUZXh0KHBsYXllcikge1xuICBjb25zdCBjdXJyZW50UGxheWVySGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LXBsYXllci1oZWFkZXJcIik7XG4gIGN1cnJlbnRQbGF5ZXJIZWFkZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGluZyhgJHtwbGF5ZXIubmFtZX0gaXMgYXR0YWNraW5nLi4uYCwgXCJoMVwiKTtcblxuICBjdXJyZW50UGxheWVySGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRpbmcodGV4dCwgaGVhZGluZykge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGhlYWRpbmcpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpdihjbGFzc05hbWUpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IHsgaW5pdERvbSwgcG9wdWxhdGVHYW1lYm9hcmRzIH07XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyL3BsYXllci1jbGFzc1wiO1xuaW1wb3J0IHsgaW5pdERvbSwgcG9wdWxhdGVHYW1lYm9hcmRzIH0gZnJvbSBcIi4uL2RvbS1tYW5pcC9kb20tbWFuaXBcIjtcblxubGV0IHBsYXllcnMgPSBbXTtcbmxldCBnYW1lU3RhdGU7XG5cbmZ1bmN0aW9uIGdldEJvYXJkc0RPTShpbmRleCkge1xuICBjb25zdCBib2FyZHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmRcIikpO1xuICBjb25zdCBib2FyZHNDaGlsZE5vZGVzID0gW2JvYXJkc1swXS5jaGlsZHJlbiwgYm9hcmRzWzFdLmNoaWxkcmVuXTtcbiAgcmV0dXJuIGJvYXJkc0NoaWxkTm9kZXNbaW5kZXhdO1xufVxuXG5mdW5jdGlvbiBpbml0UGxheWVycyhwbGF5ZXIxVHlwZSwgcGxheWVyMlR5cGUsIHBsYXllcjFOYW1lLCBwbGF5ZXIyTmFtZSkge1xuICBwbGF5ZXJzID0gW1xuICAgIHtcbiAgICAgIHBsYXllcjogY3JlYXRlUGxheWVyKHBsYXllcjFUeXBlLCBwbGF5ZXIxTmFtZSksXG4gICAgICBib2FyZDogZ2V0Qm9hcmRzRE9NKDApLFxuICAgIH0sXG4gICAge1xuICAgICAgcGxheWVyOiBjcmVhdGVQbGF5ZXIocGxheWVyMlR5cGUsIHBsYXllcjJOYW1lKSxcbiAgICAgIGJvYXJkOiBnZXRCb2FyZHNET00oMSksXG4gICAgfSxcbiAgXTtcbn1cbmZ1bmN0aW9uIGluaXRHYW1lU3RhdGUoKSB7XG4gIGdhbWVTdGF0ZSA9IHsgY3VycmVudFBsYXllcjogcGxheWVyc1swXS5wbGF5ZXIsIGlzRmluaXNoZWQ6IGZhbHNlIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYXllcihwbGF5ZXJUeXBlLCBwbGF5ZXJOYW1lKSB7XG4gIHJldHVybiBuZXcgUGxheWVyKHBsYXllclR5cGUsIHBsYXllck5hbWUpO1xufVxuZnVuY3Rpb24gZ2V0UGxheWVycygpIHtcbiAgcmV0dXJuIHBsYXllcnM7XG59XG5mdW5jdGlvbiBnZXRHYW1lU3RhdGUoKSB7XG4gIHJldHVybiBnYW1lU3RhdGU7XG59XG5mdW5jdGlvbiBnZXRDdXJyZW50UGxheWVyKCkge1xuICByZXR1cm4gZ2FtZVN0YXRlLmN1cnJlbnRQbGF5ZXI7XG59XG5mdW5jdGlvbiBnZXRPcHBvc2luZ1BsYXllcigpIHtcbiAgcmV0dXJuIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyID09PSBwbGF5ZXJzWzBdLnBsYXllclxuICAgID8gcGxheWVyc1sxXS5wbGF5ZXJcbiAgICA6IHBsYXllcnNbMF0ucGxheWVyO1xufVxuZnVuY3Rpb24gY2hhbmdlQ3VycmVudFBsYXllcigpIHtcbiAgZ2FtZVN0YXRlLmN1cnJlbnRQbGF5ZXIgPVxuICAgIGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyID09PSBwbGF5ZXJzWzBdLnBsYXllclxuICAgICAgPyAoZ2FtZVN0YXRlLmN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJzWzFdLnBsYXllcilcbiAgICAgIDogKGdhbWVTdGF0ZS5jdXJyZW50UGxheWVyID0gcGxheWVyc1swXS5wbGF5ZXIpO1xufVxuXG5mdW5jdGlvbiBpbml0R2FtZShwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gIGluaXREb20oKTtcbiAgaW5pdFBsYXllcnMocGxheWVyMS50eXBlLCBwbGF5ZXIyLnR5cGUsIHBsYXllcjEubmFtZSwgcGxheWVyMi5uYW1lKTtcbiAgaW5pdEdhbWVTdGF0ZSgpO1xuICBwb3B1bGF0ZUdhbWVib2FyZHMoKTtcbn1cblxuZXhwb3J0IHtcbiAgaW5pdEdhbWUsXG4gIGdldFBsYXllcnMsXG4gIGdldEdhbWVTdGF0ZSxcbiAgY2hhbmdlQ3VycmVudFBsYXllcixcbiAgZ2V0Q3VycmVudFBsYXllcixcbiAgZ2V0T3Bwb3NpbmdQbGF5ZXIsXG59O1xuIiwiY29uc3QgU2hpcCA9IHJlcXVpcmUoXCIuLi9zaGlwL3NoaXAtY2xhc3NcIik7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICB0aGlzLm1pc3NlZFNob3RzID0gW107XG4gICAgdGhpcy5oaXRTaG90cyA9IFtdO1xuICAgIHRoaXMuY3VycmVudENvb3JkcyA9IFtdO1xuICAgIHRoaXMuX2dlbmVyYXRlU2hpcE1hcCgpO1xuICB9XG4gIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSkge1xuICAgIC8vIGdldCB0aGUgc2hpcCBvYmplY3Qgd2l0aCBtYXRjaGluZyBjb29yZGluYXRlXG4gICAgY29uc3Qgc2hpcCA9IHRoaXMuX2dldFNoaXAoY29vcmRpbmF0ZSk7XG4gICAgaWYgKHNoaXAgJiYgIXNoaXAuc3Vuaykge1xuICAgICAgLy8gaWYgc2hpcCBmb3VuZCBhbmQgbm90IHN1bmsgeWV0LCBjYWxsIGhpdCgpIG9uIGl0XG4gICAgICBzaGlwLmhpdCgpO1xuICAgICAgLy90aGVuIHJlbW92ZSBmcm9tIGN1cnJlbnRDb29yZHMgYW5kIG1vdmUgdG8gaGl0U2hvdHNcbiAgICAgIHRoaXMuaGl0U2hvdHMucHVzaChjb29yZGluYXRlKTtcbiAgICAgIHRoaXMuY3VycmVudENvb3Jkcy5zcGxpY2UoXG4gICAgICAgIGZpbmRJbmRleG9mSXRlbUluQXJyYXkodGhpcy5jdXJyZW50Q29vcmRzLCBjb29yZGluYXRlKSxcbiAgICAgICAgMVxuICAgICAgKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgICAgLy8gaWYgbm90IHNoaXAgbm90IGZvdW5kLCBwdXNoIGNvb3JkaW5hdGUgdG8gbWlzc2VkU2hvdHMgYXJyYXlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5taXNzZWRTaG90cy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGhhc0FsbFNoaXBzQmVlblN1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpcHMuZXZlcnkoKHNoaXApID0+IHtcbiAgICAgIHJldHVybiBzaGlwLnNoaXAuc3VuayA9PT0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIF9nZXRTaGlwKGNvb3JkaW5hdGUpIHtcbiAgICBmb3IgKGNvbnN0IHNoaXAgb2YgdGhpcy5zaGlwcykge1xuICAgICAgZm9yIChjb25zdCBjb29yZCBvZiBzaGlwLmNvb3Jkcykge1xuICAgICAgICBpZiAoYXJyYXlzRXF1YWwoY29vcmQsIGNvb3JkaW5hdGUpKSB7XG4gICAgICAgICAgcmV0dXJuIHNoaXAuc2hpcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIF9nZW5lcmF0ZVNoaXBNYXAoKSB7XG4gICAgLy8gZ2VuZXJhdGUgZm91ciAxLWxlbmd0aCBzaGlwc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICB0aGlzLnNoaXBzLnB1c2godGhpcy5fZ2VuZXJhdGVTaGlwKDEpKTtcbiAgICB9XG4gICAgLy8gLy8gZ2VuZXJhdGUgdGhyZWUgMi1sZW5ndGggc2hpcHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgdGhpcy5zaGlwcy5wdXNoKHRoaXMuX2dlbmVyYXRlU2hpcCgyKSk7XG4gICAgfVxuICAgIC8vIC8vIGdlbmVyYXRlIHR3byAzLWxlbmd0aCBzaGlwc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICB0aGlzLnNoaXBzLnB1c2godGhpcy5fZ2VuZXJhdGVTaGlwKDMpKTtcbiAgICB9XG4gICAgLy8gLy8gZ2VuZXJhdGUgb25lIDQtbGVuZ3RoIHNoaXBcbiAgICB0aGlzLnNoaXBzLnB1c2godGhpcy5fZ2VuZXJhdGVTaGlwKDQpKTtcbiAgfVxuXG4gIF9nZW5lcmF0ZVNoaXAobGVuZ3RoLCB4X2Nvb3JkID0gbnVsbCwgeV9jb29yZCA9IG51bGwpIHtcbiAgICBjb25zdCBjb29yZHMgPSB0aGlzLl9nZW5lcmF0ZUNvb3JkKGxlbmd0aCwgeF9jb29yZCwgeV9jb29yZCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvb3JkcyxcbiAgICAgIHNoaXA6IG5ldyBTaGlwKGxlbmd0aCksXG4gICAgfTtcbiAgfVxuICBfcHJlZGljdENvbGxpc2lvbihvcmlhbnRhdGlvbiwgeCwgeSwgbGVuZ3RoKSB7XG4gICAgY29uc3QgdGVtcEFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHRlbXBBcnIucHVzaChbeCwgeV0pO1xuICAgICAgaWYgKG9yaWFudGF0aW9uID09PSBcInhcIikgeCsrO1xuICAgICAgZWxzZSB5Kys7XG4gICAgfVxuICAgIC8vIFs2LDldIFs3LDldIFs4LDldIFs5LDldXG4gICAgZm9yIChjb25zdCBhcnJheSBvZiB0ZW1wQXJyKSB7XG4gICAgICBpZiAodGhpcy5faGFzQ29vcmRDb2xsaXNpb24oYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBfZ2VuZXJhdGVDb29yZChsZW5ndGgsIHhfY29vcmQgPSBudWxsLCB5X2Nvb3JkID0gbnVsbCkge1xuICAgIC8vIHNldCByYW5kb20gKHgseSkgY29vcmRpbmF0ZXNcbiAgICBsZXQgeCA9IHhfY29vcmQgPT09IG51bGwgPyB0aGlzLl9nZW5lcmF0ZVJhbmRvbU51bWJlcigpIDogeF9jb29yZDtcbiAgICBsZXQgeSA9IHlfY29vcmQgPT09IG51bGwgPyB0aGlzLl9nZW5lcmF0ZVJhbmRvbU51bWJlcigpIDogeV9jb29yZDtcblxuICAgIC8vIHBpY2sgYSBkaXJlY3Rpb24gdG8gZXh0ZW5kIHRoZSBzaGlwXG4gICAgY29uc3Qgb3JpZW50YXRpb25YID0gTWF0aC5yYW5kb20oKSA+PSAwLjU7XG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9pc1ZhbGlkQ29vcmQoeCwgeSwgbGVuZ3RoLCBvcmllbnRhdGlvblgpICYmXG4gICAgICAgICF0aGlzLl9wcmVkaWN0Q29sbGlzaW9uKG9yaWVudGF0aW9uWCA/IFwieFwiIDogXCJ5XCIsIHgsIHksIGxlbmd0aClcbiAgICAgICkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHggPSB0aGlzLl9nZW5lcmF0ZVJhbmRvbU51bWJlcigpO1xuICAgICAgeSA9IHRoaXMuX2dlbmVyYXRlUmFuZG9tTnVtYmVyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29vcmRBcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb29yZEFyci5wdXNoKFt4LCB5XSk7XG4gICAgICB0aGlzLmN1cnJlbnRDb29yZHMucHVzaChbeCwgeV0pO1xuICAgICAgaWYgKG9yaWVudGF0aW9uWCkge1xuICAgICAgICB4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB5Kys7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb29yZEFycjtcbiAgfVxuICBfaXNWYWxpZENvb3JkKHgsIHksIGxlbmd0aCwgb3JpZW50YXRpb25YKSB7XG4gICAgaWYgKG9yaWVudGF0aW9uWCkge1xuICAgICAgcmV0dXJuIHggKyBsZW5ndGggPD0gMTA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB5ICsgbGVuZ3RoIDw9IDEwO1xuICAgIH1cbiAgfVxuICBfZ2VuZXJhdGVSYW5kb21OdW1iZXIoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgfVxuICBfaGFzQ29vcmRDb2xsaXNpb24oY29vcmQpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50Q29vcmRzLnNvbWUoKGV4aXN0aW5nQ29vcmQpID0+XG4gICAgICBhcnJheXNFcXVhbChleGlzdGluZ0Nvb3JkLCBjb29yZClcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFycmF5c0VxdWFsKGFycjEsIGFycjIpIHtcbiAgaWYgKGFycjEubGVuZ3RoICE9PSBhcnIyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gYXJyMS5ldmVyeSgoZWxlbWVudCwgaW5kZXgpID0+IGVsZW1lbnQgPT09IGFycjJbaW5kZXhdKTtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4b2ZJdGVtSW5BcnJheShhcnJheSwgaXRlbSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gVGhpcyBpZiBzdGF0ZW1lbnQgZGVwZW5kcyBvbiB0aGUgZm9ybWF0IG9mIHlvdXIgYXJyYXlcbiAgICBpZiAoYXJyYXlbaV1bMF0gPT0gaXRlbVswXSAmJiBhcnJheVtpXVsxXSA9PSBpdGVtWzFdKSB7XG4gICAgICByZXR1cm4gaTsgLy8gRm91bmQgaXRcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xOyAvLyBOb3QgZm91bmRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lYm9hcmQ7XG4iLCJjb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKFwiLi4vZ2FtZWJvYXJkL2dhbWVib2FyZC1jbGFzc1wiKTtcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IodHlwZSwgbmFtZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgfVxufVxuXG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsImNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLm51bWJlcl9oaXQgPSAwO1xuICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICB9XG4gIGdldFN0YXR1cygpIHtcbiAgICByZXR1cm4geyBsZW5ndGg6IHRoaXMubGVuZ3RoLCBoaXQ6IHRoaXMubnVtYmVyX2hpdCwgc3VuazogdGhpcy5zdW5rIH07XG4gIH1cbiAgaGl0KCkge1xuICAgIGlmICghdGhpcy5zdW5rKSB7XG4gICAgICB0aGlzLm51bWJlcl9oaXQrKztcbiAgICAgIHRoaXMuc3VuayA9IHRoaXMuaXNTdW5rKCk7XG4gICAgfVxuICB9XG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXJfaGl0ID09PSB0aGlzLmxlbmd0aDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IGluaXRHYW1lIH0gZnJvbSBcIi4vZ2FtZS1sb2dpYy9nYW1lLWxvZ2ljXCI7XG5cbi8vIGluaXRHYW1lKFwiaHVtYW5cIiwgXCJodW1hblwiKTtcbmluaXRHYW1lKFxuICB7IHR5cGU6IFwiaHVtYW5cIiwgbmFtZTogXCJwbGF5ZXItMVwiIH0sXG4gIHsgdHlwZTogXCJodW1hblwiLCBuYW1lOiBcInBsYXllci0yXCIgfVxuKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==