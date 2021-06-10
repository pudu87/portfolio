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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst content = document.querySelector('#content');\n\nconst loadAbout = () => {\n  content.textContent = 'About';\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);\n\n\n//# sourceURL=webpack://porfolio/./src/about.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"capitalize\": () => (/* binding */ capitalize)\n/* harmony export */ });\nfunction capitalize(string) {\n  return string && string[0].toUpperCase() + string.slice(1);\n}\n\n\n\n\n//# sourceURL=webpack://porfolio/./src/helpers.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst content = document.querySelector('#content');\n\nconst loadHome = () => {\n  content.textContent = 'Home';\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n\n//# sourceURL=webpack://porfolio/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.js */ \"./src/navbar.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n\n\nconst content = document.querySelector('#content');\n\n(function initialize() {\n  (0,_navbar_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n  (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n  content.classList.add('home');\n})()\n\n\n//# sourceURL=webpack://porfolio/./src/index.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./src/helpers.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n\nconst nav = document.querySelector('#nav');\nconst content = document.querySelector('#content');\n\nconst loadContent = {\n  loadHome: _home_js__WEBPACK_IMPORTED_MODULE_1__.default,\n  loadProjects: _projects_js__WEBPACK_IMPORTED_MODULE_2__.default,\n  loadAbout: _about_js__WEBPACK_IMPORTED_MODULE_3__.default\n};\nconst links = [\n  {\n    name: 'home',\n    fa: 'home'\n  },\n  {\n    name: 'projects',\n    fa: 'laptop-code'\n  },\n  {\n    name: 'about',\n    fa: 'address-card'\n  }\n];\n\nconst selectLink = (e) => {\n  const oldContent = content.classList[0];\n  const newContent = e.target.classList[0];\n  if (oldContent !== newContent) {\n    removeContent();\n    addContent(oldContent, newContent);\n  }\n}\n\nconst removeContent = () => {\n  content.textContent = '';\n}\n\nconst addContent = (oldContent, newContent) => {\n  loadContent['load' + (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.capitalize)(newContent)]();\n  content.classList.replace(oldContent, newContent);\n}\n\nconst loadNavbar = () => {\n  links.forEach(link => {\n    const span = document.createElement('span');\n    const i = document.createElement('i');\n    i.classList.add(link.name, 'fas', `fa-${link.fa}`);\n    i.addEventListener('click', selectLink);\n    span.appendChild(i);\n    nav.appendChild(span);\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadNavbar);\n\n\n//# sourceURL=webpack://porfolio/./src/navbar.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst content = document.querySelector('#content');\n\nconst loadProjects = () => {\n  content.textContent = 'Projects';\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadProjects);\n\n\n//# sourceURL=webpack://porfolio/./src/projects.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;