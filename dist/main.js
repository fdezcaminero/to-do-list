/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".topPart {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  font-size: 18px;\\r\\n  font-family: sans-serif;\\r\\n  padding-left: 5px;\\r\\n}\\r\\n\\r\\n.mainCard {\\r\\n  width: 250px;\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);\\r\\n}\\r\\n\\r\\n.bottomBorder {\\r\\n  border-bottom: 2px solid lightgray;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.bottomPart {\\r\\n  text-align: center;\\r\\n  background-color: whitesmoke;\\r\\n  color: gray;\\r\\n  font-family: sans-serif;\\r\\n}\\r\\n\\r\\n.mainInput {\\r\\n  border: 0 solid;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.taskInput {\\r\\n  border: 0 solid;\\r\\n}\\r\\n\\r\\n.taskInput2 {\\r\\n  background-color: #fffec6;\\r\\n}\\r\\n\\r\\n.clearp {\\r\\n  margin: 0;\\r\\n  padding: 16px 0;\\r\\n}\\r\\n\\r\\n.clearp:hover {\\r\\n  text-decoration-line: underline;\\r\\n  color: black;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.refreshIcon {\\r\\n  width: 30px;\\r\\n  padding-top: 14px;\\r\\n  padding-right: 5px;\\r\\n}\\r\\n\\r\\n.dotsIcon {\\r\\n  width: 20px;\\r\\n}\\r\\n\\r\\n.enterIcon {\\r\\n  padding-right: 5px;\\r\\n}\\r\\n\\r\\n.taskLine {\\r\\n  text-decoration-line: line-through;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/add-remove.js":
/*!***************************!*\
  !*** ./src/add-remove.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   loadHTML: () => (/* binding */ loadHTML),\n/* harmony export */   removeTask: () => (/* binding */ removeTask),\n/* harmony export */   updateStorage: () => (/* binding */ updateStorage)\n/* harmony export */ });\nfunction addTask(inputvalue, arrayTasks) {\r\n  const newTask = {};\r\n  newTask.description = inputvalue;\r\n  newTask.completed = false;\r\n  newTask.index = arrayTasks.length + 1;\r\n  arrayTasks.push(newTask);\r\n}\r\n\r\nfunction updateStorage(arrayTasks) {\r\n  localStorage.setItem('supertasks', JSON.stringify(arrayTasks));\r\n}\r\n\r\nfunction sortIndex2(arrayTasks) {\r\n  for (let i = 0; i < arrayTasks.length; i += 1) {\r\n    arrayTasks[i].index = i + 1;\r\n  }\r\n}\r\n\r\nfunction removeTask(removeIndex, arrayTasks) {\r\n  arrayTasks.splice(removeIndex, 1);\r\n  sortIndex2(arrayTasks);\r\n}\r\n\r\nfunction loadHTML(listContainer, listArray) {\r\n  listContainer.innerHTML = '';\r\n  for (let i = 0; i < listArray.length; i += 1) {\r\n    const listElement = document.createElement('section');\r\n    listElement.className = 'taskElement';\r\n    listElement.id = `experiment${i}`;\r\n    listElement.innerHTML = `<input id=\"checkbox${i}\" type=\"checkbox\"><input id=\"task${i}\" class=\"taskInput\" type=\"text\" value=\"${listArray[i].description}\">`;\r\n    listContainer.appendChild(listElement);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/add-remove.js?");

/***/ }),

/***/ "./src/completefunc.js":
/*!*****************************!*\
  !*** ./src/completefunc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ completefunc),\n/* harmony export */   editTask: () => (/* binding */ editTask)\n/* harmony export */ });\n/* harmony import */ var _more_vert_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./more_vert.svg */ \"./src/more_vert.svg\");\n/* harmony import */ var _add_remove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-remove */ \"./src/add-remove.js\");\n\r\n\r\n\r\nfunction editTask(i, listContainer, tasks) {\r\n  listContainer.querySelector(`#experiment${i}`).classList.remove('taskInput2');\r\n  listContainer.querySelector(`#task${i}`).classList.remove('taskInput2');\r\n  listContainer.querySelector(`#remove${i}`).src = _more_vert_svg__WEBPACK_IMPORTED_MODULE_0__;\r\n  tasks[i].description = listContainer.querySelector(`#task${i}`).value;\r\n}\r\n\r\nfunction completefunc(i, tasks) {\r\n  document.getElementById(`task${i}`).addEventListener('blur', () => {\r\n    const listContainer = document.querySelector('.todoList');\r\n    editTask(i, listContainer, tasks);\r\n    (0,_add_remove__WEBPACK_IMPORTED_MODULE_1__.updateStorage)();\r\n  });\r\n  document.getElementById(`checkbox${i}`).addEventListener('change', () => {\r\n    if (document.getElementById(`checkbox${i}`).checked) {\r\n      tasks[i].completed = true;\r\n      document.getElementById(`task${i}`).classList.add('taskLine');\r\n    } else {\r\n      tasks[i].completed = false;\r\n      document.getElementById(`task${i}`).classList.remove('taskLine');\r\n    }\r\n    (0,_add_remove__WEBPACK_IMPORTED_MODULE_1__.updateStorage)();\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/completefunc.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _refresh_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refresh.svg */ \"./src/refresh.svg\");\n/* harmony import */ var _more_vert_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./more_vert.svg */ \"./src/more_vert.svg\");\n/* harmony import */ var _enterIcon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enterIcon.svg */ \"./src/enterIcon.svg\");\n/* harmony import */ var _trashcan_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trashcan.svg */ \"./src/trashcan.svg\");\n/* harmony import */ var _add_remove_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-remove.js */ \"./src/add-remove.js\");\n/* harmony import */ var _completefunc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./completefunc.js */ \"./src/completefunc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet tasks = [];\r\nconst localTasks = localStorage.getItem('supertasks');\r\nconsole.log(localTasks);\r\nconst listContainer = document.querySelector('.todoList');\r\n\r\nif (localTasks) {\r\n  tasks = JSON.parse(localTasks);\r\n}\r\n\r\nfunction component() {\r\n  const element = document.createElement('div');\r\n  const myIcon = new Image();\r\n  myIcon.src = _refresh_svg__WEBPACK_IMPORTED_MODULE_1__;\r\n  myIcon.alt = 'Refresh';\r\n  myIcon.className = 'refreshIcon';\r\n  element.appendChild(myIcon);\r\n  return element;\r\n}\r\n\r\ndocument.getElementById('theTop').appendChild(component());\r\n\r\nfunction component2(index) {\r\n  const element2 = document.createElement('div');\r\n  const vertIcon = new Image();\r\n  vertIcon.src = _more_vert_svg__WEBPACK_IMPORTED_MODULE_2__;\r\n  vertIcon.alt = 'Vertical dots';\r\n  vertIcon.className = 'dotsIcon';\r\n  vertIcon.id = `remove${index}`;\r\n  element2.appendChild(vertIcon);\r\n  return element2;\r\n}\r\n\r\nfunction component3() {\r\n  const element3 = document.createElement('div');\r\n  const enterIcon = new Image();\r\n  enterIcon.src = _enterIcon_svg__WEBPACK_IMPORTED_MODULE_3__;\r\n  enterIcon.alt = 'Enter sign';\r\n  enterIcon.className = 'enterIcon';\r\n  element3.appendChild(enterIcon);\r\n  return element3;\r\n}\r\n\r\ndocument.getElementById('newTasks').appendChild(component3());\r\n\r\nfunction sortIndex() {\r\n  for (let i = 0; i < tasks.length; i += 1) {\r\n    tasks[i].index = i + 1;\r\n  }\r\n}\r\n\r\nfunction callRemove(i) {\r\n  (0,_add_remove_js__WEBPACK_IMPORTED_MODULE_5__.removeTask)(i, tasks);\r\n  (0,_add_remove_js__WEBPACK_IMPORTED_MODULE_5__.updateStorage)(tasks);\r\n}\r\n\r\nfunction addIcons() {\r\n  tasks.forEach((item, i) => {\r\n    document.getElementById(`experiment${i}`).appendChild(component2(i));\r\n    document.getElementById(`remove${i}`).addEventListener('click', () => {\r\n      callRemove(i);\r\n      sortIndex();\r\n      (0,_add_remove_js__WEBPACK_IMPORTED_MODULE_5__.loadHTML)(listContainer, tasks);\r\n      addIcons();\r\n    });\r\n    document.getElementById(`task${i}`).addEventListener('click', () => {\r\n      document.getElementById(`experiment${i}`).classList.add('taskInput2');\r\n      document.getElementById(`task${i}`).classList.add('taskInput2');\r\n      document.getElementById(`remove${i}`).src = _trashcan_svg__WEBPACK_IMPORTED_MODULE_4__;\r\n    });\r\n    (0,_completefunc_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(i, tasks);\r\n    document.getElementById(`experiment${i}`).className = 'bottomBorder';\r\n    document.getElementById(`checkbox${i}`).checked = tasks[i].completed;\r\n    if (document.getElementById(`checkbox${i}`).checked) {\r\n      document.getElementById(`task${i}`).classList.add('taskLine');\r\n    } else {\r\n      tasks[i].completed = false;\r\n    }\r\n  });\r\n}\r\n\r\ndocument.getElementById('inputAdd').addEventListener('keypress', function addfunction(e) {\r\n  if (e.key === 'Enter') {\r\n    (0,_add_remove_js__WEBPACK_IMPORTED_MODULE_5__.addTask)(this.value, tasks);\r\n    (0,_add_remove_js__WEBPACK_IMPORTED_MODULE_5__.updateStorage)(tasks);\r\n    this.value = '';\r\n  }\r\n  (0,_add_remove_js__WEBPACK_IMPORTED_MODULE_5__.loadHTML)(listContainer, tasks);\r\n  addIcons();\r\n});\r\n\r\nfunction checkCompleted(notCompleted) {\r\n  return notCompleted.completed === false;\r\n}\r\n\r\ndocument.getElementById('clearButton').addEventListener('click', () => {\r\n  tasks = tasks.filter(checkCompleted);\r\n  (0,_add_remove_js__WEBPACK_IMPORTED_MODULE_5__.loadHTML)(listContainer, tasks);\r\n  addIcons();\r\n  localStorage.setItem('supertasks', JSON.stringify(tasks));\r\n});\r\n\r\nwindow.addEventListener('load', () => {\r\n  (0,_add_remove_js__WEBPACK_IMPORTED_MODULE_5__.loadHTML)(listContainer, tasks);\r\n  addIcons();\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/enterIcon.svg":
/*!***************************!*\
  !*** ./src/enterIcon.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3f0f3690f82e82da82f4.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/enterIcon.svg?");

/***/ }),

/***/ "./src/more_vert.svg":
/*!***************************!*\
  !*** ./src/more_vert.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e8b49b1528f2f0fe1ac9.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/more_vert.svg?");

/***/ }),

/***/ "./src/refresh.svg":
/*!*************************!*\
  !*** ./src/refresh.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f7fa9b3fa327dd713c73.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/refresh.svg?");

/***/ }),

/***/ "./src/trashcan.svg":
/*!**************************!*\
  !*** ./src/trashcan.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eac1a29b0fcadff53187.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/trashcan.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;