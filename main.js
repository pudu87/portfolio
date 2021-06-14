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

/***/ "./src/img/battleship.png":
/*!********************************!*\
  !*** ./src/img/battleship.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"39416b2b41d89178ae54.png\";\n\n//# sourceURL=webpack://porfolio/./src/img/battleship.png?");

/***/ }),

/***/ "./src/img/chess.png":
/*!***************************!*\
  !*** ./src/img/chess.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3888f87f1d1cceb5dfa3.png\";\n\n//# sourceURL=webpack://porfolio/./src/img/chess.png?");

/***/ }),

/***/ "./src/img/macebook.png":
/*!******************************!*\
  !*** ./src/img/macebook.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4b0d683b226833e81b4a.png\";\n\n//# sourceURL=webpack://porfolio/./src/img/macebook.png?");

/***/ }),

/***/ "./src/img/odin.svg":
/*!**************************!*\
  !*** ./src/img/odin.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"991d749280cf85d37011.svg\";\n\n//# sourceURL=webpack://porfolio/./src/img/odin.svg?");

/***/ }),

/***/ "./src/img/wally.png":
/*!***************************!*\
  !*** ./src/img/wally.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"732cf2310def8a6fe759.png\";\n\n//# sourceURL=webpack://porfolio/./src/img/wally.png?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_odin_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/odin.svg */ \"./src/img/odin.svg\");\n/* harmony import */ var _img_macebook_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/macebook.png */ \"./src/img/macebook.png\");\n/* harmony import */ var _img_wally_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/wally.png */ \"./src/img/wally.png\");\n/* harmony import */ var _img_battleship_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/battleship.png */ \"./src/img/battleship.png\");\n/* harmony import */ var _img_chess_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/chess.png */ \"./src/img/chess.png\");\n\n\n\n\n\n\nconst content = document.querySelector('#content');\n\nconst projects = [\n  {\n    title: 'Macebook',\n    description: 'A very medieval facebook clone.',\n    github: 'https://github.com/pudu87/macebook',\n    link: 'https://pudu87.github.io/macebook/',\n    screenshot: _img_macebook_png__WEBPACK_IMPORTED_MODULE_1__\n  },\n  {\n    title: 'Where is Wally',\n    description: \"He's hiding in the backend.\",\n    github: 'https://github.com/pudu87/where-is-wally',\n    link: 'https://guarded-crag-83910.herokuapp.com/',\n    screenshot: _img_wally_png__WEBPACK_IMPORTED_MODULE_2__\n  },\n  {\n    title: 'Battleship',\n    description: 'You sunk my battleship.',\n    github: 'https://github.com/pudu87/battleship',\n    link: 'https://pudu87.github.io/battleship/',\n    screenshot: _img_battleship_png__WEBPACK_IMPORTED_MODULE_3__\n  },\n  {\n    title: 'Chess Game',\n    description: 'Chess on command (line)',\n    github: 'https://github.com/pudu87/chess-game',\n    link: false,\n    screenshot: _img_chess_png__WEBPACK_IMPORTED_MODULE_4__\n  },\n  {\n    title: 'This Website',\n    description: \"I put some work into this thing. So yeah, it get's a place in this list.\",\n    github: 'https://github.com/pudu87/porfolio',\n    link: 'https://pudu87.github.io/portfolio/',\n    screenshot: false\n  }\n]\n\nconst loadHeader = () => {\n  const header = document.createElement('header');\n    const h2 = document.createElement('h2');\n    h2.textContent = 'Check out some of the stuff I made!';\n    const p1 = document.createElement('p');\n    p1.textContent = 'All of these projects are part of';\n    const div = loadOdin();\n    const p2 = document.createElement('p');\n    p2.textContent = 'So far I immersed myself into';\n    const p3 = document.createElement('p');\n    p3.textContent = \"Please help me immerse somewhat deeper. Or expand this list. It's all up to you here.\";\n  [h2, p1, div, p2, p3].forEach(element => {\n    header.append(element);\n  });\n  return header;\n}\n\nconst loadOdin = () => {\n  const div = document.createElement('div');\n    const img = document.createElement('img');\n    img.src = _img_odin_svg__WEBPACK_IMPORTED_MODULE_0__;\n    img.alt = 'Viking head';\n    const span = document.createElement('span');\n    span.textContent = 'The Odin Project';\n    div.append(img);\n    div.append(span);\n  return div;\n}\n\nconst loadProjectList = () => {\n  const ul = document.createElement('ul');\n  projects.forEach(project => {\n    ul.append(loadProject(project));\n  });\n  return ul;\n}\n\nconst loadProject = (project) => {\n  const li = document.createElement('li');\n    const title = document.createElement('h3');\n    title.textContent = project.title;\n    li.append(title);\n    const description = document.createElement('p');\n    description.textContent = project.description;\n    li.append(description);\n  li.classList.add('project');\n  return li;\n}\n\nconst loadProjects = () => {\n  content.append(loadHeader());\n  content.append(loadProjectList());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadProjects);\n\n\n//# sourceURL=webpack://porfolio/./src/projects.js?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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