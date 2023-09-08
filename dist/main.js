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

/***/ "./src/classes/project.js":
/*!********************************!*\
  !*** ./src/classes/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   project: () => (/* binding */ project)\n/* harmony export */ });\n\r\n\r\nclass project{\r\n    constructor(titleValue){\r\n        this.title = titleValue;\r\n        this.slaveTasks = [];\r\n    }\r\n\r\n\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/classes/project.js?");

/***/ }),

/***/ "./src/classes/task.js":
/*!*****************************!*\
  !*** ./src/classes/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   task: () => (/* binding */ task)\n/* harmony export */ });\nclass task{\r\n    constructor(titleValue){\r\n        this.title = titleValue;\r\n        this.dueDate = '';\r\n        this.description = '';\r\n        this.priority = false;\r\n        this.todo = false;\r\n        this.doing = false;\r\n        this.done = false;\r\n    }\r\n\r\n    markAsDone(){\r\n        this.done = true;\r\n    }\r\n\r\n    markAsDoing(){\r\n        this.doing = true;\r\n    }\r\n\r\n    markAsTodo(){\r\n        this.todo = true;\r\n    }\r\n\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/classes/task.js?");

/***/ }),

/***/ "./src/components/mainContent.js":
/*!***************************************!*\
  !*** ./src/components/mainContent.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateMainContent: () => (/* binding */ generateMainContent)\n/* harmony export */ });\n\r\nconst generateMainContent = ( ) =>{\r\n    const main = document.createElement('div');\r\n    main.classList.add('main-content')\r\n    generateMainNavbar(main);\r\n\r\n\r\n\r\n\r\n    document.body.appendChild(main);\r\n\r\n\r\n    const taskContainerDiv = document.createElement('div'); //Div that the tasks are rendered in\r\n    generateTaskDiv(taskContainerDiv);\r\n\r\n    main.appendChild(taskContainerDiv);\r\n}\r\n\r\n\r\nconst generateMainNavbar = (parent) =>{\r\n\r\n    const container = document.createElement('div');\r\n    container.classList.add('navigation-container');\r\n\r\n    const spanContainer = document.createElement('div');\r\n\r\n    \r\n    const spanIcon = document.createElement('img');\r\n    spanIcon.src = '../src/assets/attention.svg'\r\n    spanIcon.classList.add('main-navigator-icon')\r\n    const spanDescription = document.createElement('span');\r\n    spanDescription.classList.add('main-navigator');\r\n    spanDescription.textContent = 'ABC'\r\n\r\n    const buttonContainer = document.createElement('div');\r\n    buttonContainer.classList.add('delete-btn-container');\r\n\r\n    const deleteBtn = document.createElement('img');\r\n    deleteBtn.classList.add('delete-btn')\r\n    const label = document.createElement('label')\r\n    label.classList.add('label-delete')\r\n\r\n    deleteBtn.src = '../src/assets/delete.svg'\r\n\r\n    buttonContainer.appendChild(deleteBtn);\r\n    buttonContainer.appendChild(label);\r\n\r\n    spanContainer.classList.add('navigation-small-container')\r\n\r\n    spanContainer.appendChild(spanIcon);\r\n    spanContainer.appendChild(spanDescription)\r\n\r\n    container.appendChild(spanContainer);\r\n\r\n    container.appendChild(buttonContainer);\r\n\r\n    parent.appendChild(container);\r\n    \r\n}\r\n\r\nconst generateTaskDiv = (parent) =>{\r\n    const leftContainer = document.createElement('div');\r\n    leftContainer.classList.add('render-tasks-container');\r\n\r\n    const taskHolderDiv = document.createElement('div');\r\n    taskHolderDiv.classList.add('task-renderer');\r\n\r\n    const taskCreatorDiv = document.createElement('div');\r\n    taskCreatorDiv.classList.add('task-creator-div');\r\n    const form = document.createElement('form');\r\n    const input = document.createElement('input')\r\n    input.type = 'text';\r\n    input.placeholder = '+ Add task';\r\n    input.classList.add('task-title-input')\r\n\r\n    form.appendChild(input);\r\n    form.classList.add('submit-task-form')\r\n\r\n    taskCreatorDiv.appendChild(form);\r\n\r\n    leftContainer.appendChild(taskHolderDiv)\r\n    leftContainer.appendChild(taskCreatorDiv);\r\n\r\n    parent.appendChild(leftContainer);\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/mainContent.js?");

/***/ }),

/***/ "./src/components/miscellaneous/overlay.js":
/*!*************************************************!*\
  !*** ./src/components/miscellaneous/overlay.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createOverlay: () => (/* binding */ createOverlay)\n/* harmony export */ });\nconst createOverlay = () =>{\r\n    const overlay = document.createElement('div');\r\n    overlay.classList.add('overlay')\r\n\r\n    overlay.addEventListener('click', (e ) =>{\r\n        const form = document.querySelector('.form-container')\r\n        overlay.classList.toggle('visible')\r\n        form.classList.toggle('visible')\r\n    })\r\n\r\n    document.body.appendChild(overlay)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/miscellaneous/overlay.js?");

/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateSidebar: () => (/* binding */ generateSidebar)\n/* harmony export */ });\n/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/project */ \"./src/classes/project.js\");\n/* harmony import */ var _variables_projectArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables/projectArray */ \"./src/variables/projectArray.js\");\n/* harmony import */ var _miscellaneous_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./miscellaneous/overlay */ \"./src/components/miscellaneous/overlay.js\");\n\r\n\r\n\r\n\r\nconst generateSidebar = () => {\r\n    const div = document.createElement('div');\r\n    div.classList.add('sidebar');\r\n  \r\n    createProjectForm(div);\r\n  \r\n    generateProfileUserDiv(div);\r\n    generateDateSelection(div);\r\n    generateProjectSelector(div);\r\n    document.body.appendChild(div);\r\n\r\n    (0,_miscellaneous_overlay__WEBPACK_IMPORTED_MODULE_2__.createOverlay)();\r\n};\r\n  \r\n\r\nconst generateProfileUserDiv = (parent) =>{\r\n    const container = document.createElement('div');\r\n    container.classList.add('user-overview')\r\n\r\n    const pfp = document.createElement('img');\r\n    pfp.classList.add('profile-pic')\r\n    pfp.src = '../src/assets/iar.jpg'\r\n\r\n    const nameContainer = document.createElement('div');\r\n    const spanOne = document.createElement('span');\r\n    const pTwo = document.createElement('p')\r\n\r\n    spanOne.textContent = 'Michał'\r\n    pTwo.textContent = 'Free Account'\r\n\r\n    nameContainer.appendChild(spanOne);\r\n    nameContainer.appendChild(pTwo)\r\n\r\n    container.appendChild(pfp);\r\n    container.appendChild(nameContainer)\r\n    parent.appendChild(container);\r\n\r\n}\r\n\r\nconst generateDateSelection = (parent) =>{\r\n    const container = document.createElement('div');\r\n    container.classList.add('date-selector-sidebar')\r\n\r\n    generateSelector(container,'../src/assets/attention.svg','Today')\r\n    generateSelector(container,'../src/assets/calendar.svg','Next 7 Days')\r\n    generateSelector(container,'../src/assets/calendar.svg','All My Tasks')\r\n\r\n    parent.appendChild(container);\r\n}\r\n\r\nconst generateSelector = ( parent, src, content ) =>{ \r\n    const container = document.createElement('div');\r\n    container.classList.add('date-selector-individual')\r\n\r\n    const ico = document.createElement('img');\r\n    ico.src = src;\r\n    ico.classList.add('date-selector-icon');\r\n\r\n    const span = document.createElement('span');\r\n    span.textContent = content\r\n\r\n\r\n\r\n\r\n    container.appendChild(ico);\r\n    container.appendChild(span)\r\n\r\n    parent.appendChild(container);\r\n\r\n}\r\n\r\nconst generateProjectSelector = (parent ) =>{\r\n    const container = document.createElement('div');\r\n    container.classList.add(\"projects-selector-sidebar\")\r\n\r\n\r\n    const titleDiv = document.createElement('div');\r\n    titleDiv.classList.add('project-container-title')\r\n    \r\n    generateTitleDivContent(titleDiv);\r\n\r\n\r\n    container.appendChild(titleDiv);\r\n\r\n    const projectContainer = document.createElement('div');\r\n    projectContainer.classList.add('projects-container')\r\n\r\n    _variables_projectArray__WEBPACK_IMPORTED_MODULE_1__.projectArray.forEach(project =>{\r\n        const span = document.createElement('span');\r\n        span.textContent = project.title;\r\n        projectContainer.appendChild(span)\r\n    })\r\n\r\n    container.appendChild(projectContainer)\r\n    parent.appendChild(container);\r\n}\r\n\r\nconst generateTitleDivContent = (parent) =>{ \r\n    const span = document.createElement('span')\r\n    span.textContent = 'My Projects'\r\n\r\n    const addBtn = document.createElement('button');\r\n    addBtn.classList.add('add-project-btn')\r\n    addBtn.textContent = '+'\r\n\r\n    addBtn.addEventListener('click', (e) =>{\r\n        const form = document.querySelector('.form-container');\r\n\r\n        form.classList.toggle('visible')\r\n        \r\n        const overlay = document.querySelector('.overlay');\r\n        overlay.classList.toggle('visible')\r\n\r\n    })\r\n\r\n    parent.appendChild(span);\r\n    parent.appendChild(addBtn)\r\n}\r\n\r\nconst createProjectForm = (parent) =>{\r\n    const formContainer = document.createElement('div');\r\n    const form = document.createElement('form');\r\n\r\n    const closeContainer = document.createElement('div');\r\n    const closeBtn = document.createElement('button');\r\n    closeBtn.textContent = '✕'\r\n\r\n    closeContainer.classList.add('close-btn-container')\r\n\r\n    closeBtn.addEventListener('click', (e) =>{\r\n        e.preventDefault();\r\n\r\n\r\n        const overlay = document.querySelector('.overlay');\r\n        formContainer.classList.toggle('visible')\r\n        overlay.classList.toggle('visible')\r\n    })\r\n\r\n    const inputContainer = document.createElement('div');\r\n    inputContainer.classList.add('input-container')\r\n    const titleInput = document.createElement('input');\r\n    titleInput.type = 'text';\r\n    titleInput.placeholder = \"What you gon' do?\"\r\n\r\n\r\n    titleInput.addEventListener('keypress', (e) =>{\r\n        if(e.key === 'Enter'){\r\n            _variables_projectArray__WEBPACK_IMPORTED_MODULE_1__.projectArray.push(new _classes_project__WEBPACK_IMPORTED_MODULE_0__.project(titleInput.value))\r\n            form.reset();\r\n            console.log(_variables_projectArray__WEBPACK_IMPORTED_MODULE_1__.projectArray)\r\n        }\r\n    })\r\n\r\n    const submitContainer = document.createElement('div');\r\n    submitContainer.classList.add('submit-btn-container')\r\n    const submit = document.createElement('input')\r\n    submit.type = 'submit';\r\n    submit.value = 'Continue'\r\n\r\n    submit.addEventListener('click', (e) =>{\r\n        e.preventDefault();\r\n        formContainer.classList.toggle('visible');\r\n        const overlay = document.querySelector('.overlay');\r\n        overlay.classList.toggle('visible')\r\n\r\n        _variables_projectArray__WEBPACK_IMPORTED_MODULE_1__.projectArray.push(new _classes_project__WEBPACK_IMPORTED_MODULE_0__.project(titleInput.value))\r\n\r\n        console.log(_variables_projectArray__WEBPACK_IMPORTED_MODULE_1__.projectArray)\r\n    })\r\n\r\n\r\n    closeContainer.appendChild(closeBtn);\r\n    inputContainer.appendChild(titleInput);\r\n    submitContainer.appendChild(submit);\r\n\r\n    form.appendChild(closeContainer);\r\n    form.appendChild(inputContainer);\r\n    form.appendChild(submitContainer);\r\n\r\n    formContainer.appendChild(form);\r\n\r\n    parent.appendChild(formContainer)\r\n\r\n    formContainer.classList.add('form-container');\r\n}\r\n\r\nconst createProjectSpan = () =>{\r\n    \r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/navbar.js?");

/***/ }),

/***/ "./src/components/rendering/render.js":
/*!********************************************!*\
  !*** ./src/components/rendering/render.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderView: () => (/* binding */ renderView)\n/* harmony export */ });\n/* harmony import */ var _variables_projectArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../variables/projectArray */ \"./src/variables/projectArray.js\");\n\r\n\r\nconst renderView = (string) =>{\r\n    _variables_projectArray__WEBPACK_IMPORTED_MODULE_0__.projectArray.forEach(project =>{\r\n        if(project.title === string){\r\n            console.log(project.slaveTasks)\r\n        }\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/rendering/render.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_mainContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/mainContent */ \"./src/components/mainContent.js\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar */ \"./src/components/navbar.js\");\n/* harmony import */ var _components_rendering_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/rendering/render */ \"./src/components/rendering/render.js\");\n/* harmony import */ var _listeners_mainContentListeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listeners/mainContentListeners */ \"./src/listeners/mainContentListeners.js\");\n/* harmony import */ var _variables_projectArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./variables/projectArray */ \"./src/variables/projectArray.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_components_navbar__WEBPACK_IMPORTED_MODULE_1__.generateSidebar)();\r\n(0,_components_mainContent__WEBPACK_IMPORTED_MODULE_0__.generateMainContent)();\r\n(0,_components_rendering_render__WEBPACK_IMPORTED_MODULE_2__.renderView)('ABC');\r\n(0,_listeners_mainContentListeners__WEBPACK_IMPORTED_MODULE_3__.createAllListeners)();\r\n\r\n\r\nconsole.log(_variables_projectArray__WEBPACK_IMPORTED_MODULE_4__.projectArray)\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/listeners/mainContentListeners.js":
/*!***********************************************!*\
  !*** ./src/listeners/mainContentListeners.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAllListeners: () => (/* binding */ createAllListeners)\n/* harmony export */ });\n/* harmony import */ var _variables_allTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables/allTasks */ \"./src/variables/allTasks.js\");\n/* harmony import */ var _classes_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/task */ \"./src/classes/task.js\");\n/* harmony import */ var _variables_projectArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../variables/projectArray */ \"./src/variables/projectArray.js\");\n\r\n\r\n\r\n\r\nconst submitTaskListener = () =>{\r\n    const form = document.querySelector('.submit-task-form');\r\n    const input = document.querySelector('.task-title-input');\r\n    const main_navigator = document.querySelector('.main-navigator')\r\n    form.addEventListener('submit', (e) =>{\r\n        e.preventDefault();\r\n        _variables_allTasks__WEBPACK_IMPORTED_MODULE_0__.allTasks.push(new _classes_task__WEBPACK_IMPORTED_MODULE_1__.task(input.value));\r\n\r\n        for(let i = 0; i < _variables_projectArray__WEBPACK_IMPORTED_MODULE_2__.projectArray.length; i++){\r\n            if(_variables_projectArray__WEBPACK_IMPORTED_MODULE_2__.projectArray[i].title === main_navigator.innerHTML ){\r\n                _variables_projectArray__WEBPACK_IMPORTED_MODULE_2__.projectArray[i].slaveTasks.push(new _classes_task__WEBPACK_IMPORTED_MODULE_1__.task(input.value));\r\n                console.log(\"Slave tasks\")\r\n                console.log(_variables_projectArray__WEBPACK_IMPORTED_MODULE_2__.projectArray[i].slaveTasks)\r\n            }\r\n        }\r\n\r\n        input.value = '';\r\n        console.log(\"all tasks => \")\r\n        console.log(_variables_allTasks__WEBPACK_IMPORTED_MODULE_0__.allTasks);\r\n    })\r\n}\r\n\r\nconst createAllListeners = () =>{\r\n    submitTaskListener();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/listeners/mainContentListeners.js?");

/***/ }),

/***/ "./src/variables/allTasks.js":
/*!***********************************!*\
  !*** ./src/variables/allTasks.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allTasks: () => (/* binding */ allTasks)\n/* harmony export */ });\nlet allTasks = [];\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/variables/allTasks.js?");

/***/ }),

/***/ "./src/variables/projectArray.js":
/*!***************************************!*\
  !*** ./src/variables/projectArray.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectArray: () => (/* binding */ projectArray)\n/* harmony export */ });\n/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/project */ \"./src/classes/project.js\");\n\r\nlet projectArray = [];\r\nprojectArray.push(new _classes_project__WEBPACK_IMPORTED_MODULE_0__.project('ABC'));\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/variables/projectArray.js?");

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