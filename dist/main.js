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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   project: () => (/* binding */ project)\n/* harmony export */ });\nclass project{\n    constructor(title){\n        this.title = title;\n        this.slaveTasks = [];\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/classes/project.js?");

/***/ }),

/***/ "./src/classes/task.js":
/*!*****************************!*\
  !*** ./src/classes/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   task: () => (/* binding */ task)\n/* harmony export */ });\nclass task{\n    constructor(title){\n        this.title = title;\n        this.notes = '';\n        this.priority = false;\n        this.done = false;\n\n        this.subtasks = [];\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/classes/task.js?");

/***/ }),

/***/ "./src/components/homeScreen/generateTodayScreen.js":
/*!**********************************************************!*\
  !*** ./src/components/homeScreen/generateTodayScreen.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateToday: () => (/* binding */ generateToday)\n/* harmony export */ });\n/* harmony import */ var _miscellaneous_getRandomNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../miscellaneous/getRandomNumber */ \"./src/miscellaneous/getRandomNumber.js\");\n\n\n\nconst generateToday = ( ) =>{\n    const container = document.createElement('div');\n    container.classList.add('today-container');\n\n    const wrapper = document.createElement('div')\n    wrapper.classList.add('today-main-wrapper');\n\n    generateNavbar(wrapper);\n    displayTodayTasks(wrapper);\n    \n    container.appendChild(wrapper)\n    document.body.appendChild(container);\n\n\n}\n\nconst generateNavbar = (parent) =>{\n\n    let currentDate = new Date();\n    let hour = currentDate.getHours();\n    const div = document.createElement('div');\n    div.classList.add('today-welcome-div')\n    const bigSpan = document.createElement('span');\n    bigSpan.classList.add('today-span-hero');\n\n\n    if(hour <= 12){\n        bigSpan.textContent = 'Good Morning, Michał';       \n    }else if(hour >= 12 && hour <= 18){\n        bigSpan.textContent = 'Good Afternoon, Michał';\n    }else if(hour >= 18){\n        bigSpan.textContent = 'Good Evening, Michał'\n    }\n\n    console.log(hour)\n\n    const smallSpan = document.createElement('span');\n    smallSpan.classList.add('today-span-hero-2');\n    \n    const quotes = [\"Seize the day!\", \"Your actions matter.\", \"Dream big!\", \"Make it happen!\", \"Believe in yourself.\", \"Inspire others.\", \"Create your path.\", \"Shine bright!\", \"Stay resilient.\", \"Embrace each moment.\", \"Be unstoppable!\", \"Chase your dreams.\", \"Spread joy.\", \"Make it count.\", \"You've got this!\", \"Choose happiness.\", \"Stay determined.\", \"Pursue greatness.\", \"Find your passion.\", \"Live with purpose.\"]\n\n    smallSpan.textContent = quotes[(0,_miscellaneous_getRandomNumber__WEBPACK_IMPORTED_MODULE_0__.returnRandom)()];\n\n    div.appendChild(bigSpan);\n    div.appendChild(smallSpan);\n\n    parent.appendChild(div);\n}\n\nconst displayTodayTasks = (parent) =>{\n    const dateDiv = document.createElement('div');\n    dateDiv.classList.add('today-date-div');\n\n    let currentDate = new Date();\n\n    let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];\n    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n    \n    let dayOfWeek = daysOfWeek[currentDate.getDay()];\n    let monthName = months[currentDate.getMonth()];\n    let day = currentDate.getDate();\n    const leftDiv = document.createElement('div');\n    leftDiv.classList.add('date-display-container');\n    const spanContent = [dayOfWeek, day, monthName];\n    const classlists = ['date-display-day', 'date-display-number','date-display-month'];\n\n    for(let i = 0; i <spanContent.length; i++){\n        const span = document.createElement('span');\n        span.textContent = spanContent[i];\n        span.classList.add(classlists[i]);\n\n        leftDiv.appendChild(span);\n    }\n\n\n\n    dateDiv.appendChild(leftDiv);\n\n    const rightDiv = document.createElement('div');\n\n\n\n    parent.appendChild(dateDiv)\n}\n\nconst generateButton = (parent) =>{\n    const button = document.createElement(\"button\");\n    button.classList.add('today-button');\n\n\n    parent.appendChild(button);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/components/homeScreen/generateTodayScreen.js?");

/***/ }),

/***/ "./src/components/sidebar/ProjectSelector.js":
/*!***************************************************!*\
  !*** ./src/components/sidebar/ProjectSelector.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateForm: () => (/* binding */ generateForm),\n/* harmony export */   generateProjectSelector: () => (/* binding */ generateProjectSelector),\n/* harmony export */   renderNewlyCreatedProject: () => (/* binding */ renderNewlyCreatedProject)\n/* harmony export */ });\nconst generateProjectSelector = (parent) =>{\n    const container = document.createElement('div');\n    container.classList.add('sidebar-project-selector');\n\n    const titleDiv = document.createElement('div');\n    const span = document.createElement('span');\n    const addBtn = document.createElement('button');\n    addBtn.classList.add('add-project-btn')\n\n    span.textContent = 'Projects';\n    addBtn.textContent = '+';\n\n    titleDiv.appendChild(span);\n    titleDiv.appendChild(addBtn);\n\n    titleDiv.classList.add('sidebar-project-title')\n\n    const projectContainer = document.createElement('div');\n    projectContainer.classList.add(\"project-container\");\n\n    container.appendChild(titleDiv);\n\n\n    parent.appendChild(container);\n}\n\nconst generateForm = () =>{\n\n    const container = document.createElement('div');\n    container.classList.add('form-container');\n\n    const closeBtnDiv = document.createElement('div')\n    closeBtnDiv.classList.add('form-close-btn-div')\n    const closeBtn = document.createElement('button');\n    closeBtn.classList.add('form-close-btn');\n    closeBtn.textContent = '✕'\n    \n    const titleInput = document.createElement('input');\n    titleInput.type = 'text';\n    titleInput.classList.add('form-add-project-input')\n    titleInput.placeholder = 'Add your task here';\n\n    const addProjectButtonDiv = document.createElement('div')\n    addProjectButtonDiv.classList.add('form-add-project-btn-div')\n\n\n    const addProjectForm = document.createElement('button');\n    addProjectForm.classList.add('form-add-project-btn');\n    addProjectForm.textContent = 'Continue';\n\n    closeBtnDiv.appendChild(closeBtn)\n    addProjectButtonDiv.appendChild(addProjectForm);\n\n    container.appendChild(closeBtnDiv);\n    container.appendChild(titleInput);\n    container.appendChild(addProjectButtonDiv);\n\n    document.body.appendChild(container);\n\n    generateOverlay();\n\n}\n\nconst generateOverlay = () =>{\n    const overlay = document.createElement('div');  \n    overlay.classList.add('overlay')\n\n    document.body.appendChild(overlay)\n}\n\nconst renderNewlyCreatedProject = (value) =>{\n    const container = document.querySelector('.sidebar-projects-container');\n\n    const span = document.createElement('span');\n    span.textContent = value;\n\n    container.appendChild(span)\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/components/sidebar/ProjectSelector.js?");

/***/ }),

/***/ "./src/components/sidebar/dateSelector.js":
/*!************************************************!*\
  !*** ./src/components/sidebar/dateSelector.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateDateSelector: () => (/* binding */ generateDateSelector)\n/* harmony export */ });\nconst generateDateSelector = (parent) =>{\n    const container = document.createElement('div');\n    container.classList.add('sidebar-date-container');\n\n    const classlists = ['sidebar-today', 'sidebar-important', 'sidebar-all'];\n    const iconsSrc = ['../src/assets/attention.svg', '../src/assets/star.svg', '../src/assets/calendar.svg']\n    const strings = ['Today', 'Important', 'All Tasks'];\n\n    for(let i = 0; i < strings.length; i++){\n        const div = document.createElement('div');\n        div.classList.add(classlists[i]);\n\n        const img = document.createElement('img');\n        img.src = iconsSrc[i];\n\n        const span = document.createElement('span');\n        span.textContent = strings[i];\n\n        div.appendChild(img)\n        div.appendChild(span)\n\n        container.appendChild(div);\n    }\n\n    parent.appendChild(container);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/components/sidebar/dateSelector.js?");

/***/ }),

/***/ "./src/components/sidebar/generateSidebar.js":
/*!***************************************************!*\
  !*** ./src/components/sidebar/generateSidebar.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateSidebar: () => (/* binding */ generateSidebar)\n/* harmony export */ });\n/* harmony import */ var _ProjectSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectSelector */ \"./src/components/sidebar/ProjectSelector.js\");\n/* harmony import */ var _dateSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dateSelector */ \"./src/components/sidebar/dateSelector.js\");\n/* harmony import */ var _userOverview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userOverview */ \"./src/components/sidebar/userOverview.js\");\n\n\n\n\nconst generateSidebar = () => {\n    const nav = document.createElement('div');\n    nav.classList.add('sidebar');\n\n    (0,_userOverview__WEBPACK_IMPORTED_MODULE_2__.generateUserOverview)(nav);\n    (0,_dateSelector__WEBPACK_IMPORTED_MODULE_1__.generateDateSelector)(nav)\n    ;(0,_ProjectSelector__WEBPACK_IMPORTED_MODULE_0__.generateProjectSelector)(nav)\n\n    document.body.appendChild(nav);\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/components/sidebar/generateSidebar.js?");

/***/ }),

/***/ "./src/components/sidebar/userOverview.js":
/*!************************************************!*\
  !*** ./src/components/sidebar/userOverview.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateUserOverview: () => (/* binding */ generateUserOverview)\n/* harmony export */ });\nconst generateUserOverview = (parent) =>{\n    const container = document.createElement('div');\n    container.classList.add('sidebar-user-overview')\n\n    const pfpImg = document.createElement('img');\n    pfpImg.classList.add('sidebar-profile-pic');\n    pfpImg.src = \"../src/assets/iar.jpg\"\n    const rightDiv = document.createElement('div');\n    const spanBig = document.createElement('span');\n    spanBig.textContent = 'Michał';\n    const pSmall = document.createElement('p');\n    pSmall.textContent = 'Workspace account'\n\n    rightDiv.appendChild(spanBig);\n    rightDiv.appendChild(pSmall);\n\n    container.appendChild(pfpImg);\n    container.appendChild(rightDiv);\n\n    parent.appendChild(container)\n\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/components/sidebar/userOverview.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_homeScreen_generateTodayScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/homeScreen/generateTodayScreen */ \"./src/components/homeScreen/generateTodayScreen.js\");\n/* harmony import */ var _components_sidebar_ProjectSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sidebar/ProjectSelector */ \"./src/components/sidebar/ProjectSelector.js\");\n/* harmony import */ var _components_sidebar_generateSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar/generateSidebar */ \"./src/components/sidebar/generateSidebar.js\");\n/* harmony import */ var _listeners_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listeners/sidebar */ \"./src/listeners/sidebar.js\");\n/* harmony import */ var _miscellaneous_fillWithProjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./miscellaneous/fillWithProjects */ \"./src/miscellaneous/fillWithProjects.js\");\n/* harmony import */ var _miscellaneous_fillWithTasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./miscellaneous/fillWithTasks */ \"./src/miscellaneous/fillWithTasks.js\");\n/* harmony import */ var _rendering_sidebarProjects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rendering/sidebarProjects */ \"./src/rendering/sidebarProjects.js\");\n\n\n\n\n\n\n\n\n(0,_miscellaneous_fillWithProjects__WEBPACK_IMPORTED_MODULE_4__.fillWithProjects)();\n(0,_miscellaneous_fillWithTasks__WEBPACK_IMPORTED_MODULE_5__.fillWithTasks)();\n\n\n//Generating structures\n(0,_components_sidebar_generateSidebar__WEBPACK_IMPORTED_MODULE_2__.generateSidebar)();\n(0,_components_sidebar_ProjectSelector__WEBPACK_IMPORTED_MODULE_1__.generateForm)();\n(0,_components_homeScreen_generateTodayScreen__WEBPACK_IMPORTED_MODULE_0__.generateToday)();\n\n//Listeners\n(0,_listeners_sidebar__WEBPACK_IMPORTED_MODULE_3__.formListeners)();\n\n//Rendering\n(0,_rendering_sidebarProjects__WEBPACK_IMPORTED_MODULE_6__.renderSidebarProjects)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/listeners/sidebar.js":
/*!**********************************!*\
  !*** ./src/listeners/sidebar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formListeners: () => (/* binding */ formListeners)\n/* harmony export */ });\n/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/project */ \"./src/classes/project.js\");\n/* harmony import */ var _components_sidebar_ProjectSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/sidebar/ProjectSelector */ \"./src/components/sidebar/ProjectSelector.js\");\n/* harmony import */ var _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../miscellaneous/variables/projectArray */ \"./src/miscellaneous/variables/projectArray.js\");\n\n\n\n\nconst formListeners = () =>{\n    const closeBtn = document.querySelector('.form-close-btn');\n    const overlay = document.querySelector('.overlay');\n    const formContainer = document.querySelector('.form-container');\n    const addProjectButton = document.querySelector('.add-project-btn');\n    const formInput = document.querySelector('.form-add-project-input');\n\n    addProjectButton.addEventListener('click', (e) =>{\n        formContainer.classList.toggle('visible');\n        overlay.classList.toggle('visible');\n    })\n\n\n    closeBtn.addEventListener('click', (e) =>{\n        overlay.classList.toggle('visible');\n        formContainer.classList.toggle('visible');\n    })\n\n    overlay.addEventListener('click', (e) =>{\n        overlay.classList.toggle('visible');\n          formContainer.classList.toggle('visible');\n    })\n\n    formInput.addEventListener('keypress', (e) =>{\n        if(e.key == 'Enter'){\n            if(formInput.value == '' || formInput.value == null){\n                console.log(\"THROW ERROR HERE\")\n            }else{\n                overlay.classList.toggle('visible');\n                formContainer.classList.toggle('visible');\n\n                _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_2__.projectArray.push(new _classes_project__WEBPACK_IMPORTED_MODULE_0__.project(formInput.value));\n                (0,_components_sidebar_ProjectSelector__WEBPACK_IMPORTED_MODULE_1__.renderNewlyCreatedProject)(formInput.value);\n\n\n                formInput.value = '';\n            }\n        }\n    })\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/listeners/sidebar.js?");

/***/ }),

/***/ "./src/miscellaneous/fillWithProjects.js":
/*!***********************************************!*\
  !*** ./src/miscellaneous/fillWithProjects.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fillWithProjects: () => (/* binding */ fillWithProjects)\n/* harmony export */ });\n/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/project */ \"./src/classes/project.js\");\n/* harmony import */ var _variables_projectArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables/projectArray */ \"./src/miscellaneous/variables/projectArray.js\");\n\n\n\n\nconst fillWithProjects = () =>{\n    const strings = [\"chuj\", \"chuj 2\", \"chuj 3\"];\n\n    for(let i = 0; i < strings.length; i++){\n        _variables_projectArray__WEBPACK_IMPORTED_MODULE_1__.projectArray.push(new _classes_project__WEBPACK_IMPORTED_MODULE_0__.project(strings[i]));\n    }\n\n    console.log(_variables_projectArray__WEBPACK_IMPORTED_MODULE_1__.projectArray)\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/miscellaneous/fillWithProjects.js?");

/***/ }),

/***/ "./src/miscellaneous/fillWithTasks.js":
/*!********************************************!*\
  !*** ./src/miscellaneous/fillWithTasks.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fillWithTasks: () => (/* binding */ fillWithTasks)\n/* harmony export */ });\n/* harmony import */ var _classes_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/task */ \"./src/classes/task.js\");\n/* harmony import */ var _variables_projectArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables/projectArray */ \"./src/miscellaneous/variables/projectArray.js\");\n\n\n\nconst fillWithTasks = () =>{\n    const strings = [    \"Finish writing the report\",\n    \"Call the client for a follow-up\",\n    \"Buy groceries\",\n    \"Attend the team meeting\",\n    \"Send out meeting invitations\",\n    \"Plan the weekend getaway\",\n    \"Pay the bills\",\n    \"Complete the coding assignment\",\n    \"Schedule a dentist appointment\",\n    \"Clean the house\",\n    \"Review the project proposal\",\n    \"Prepare a presentation\",\n    \"Go for a run\",\n    \"Study for the upcoming exam\",\n    \"Walk the dog\",\n    \"Organize the closet\",\n    \"Research vacation destinations\",\n    \"Update the resume\",\n    \"Water the plants\",\n    \"Read a chapter of the new book\"];\n\n    for(let i = 0; i < _variables_projectArray__WEBPACK_IMPORTED_MODULE_1__.projectArray.length; i++){\n        for(let j = 0; j < 5; j++){\n            _variables_projectArray__WEBPACK_IMPORTED_MODULE_1__.projectArray[i].slaveTasks.push(new _classes_task__WEBPACK_IMPORTED_MODULE_0__.task(strings[j]));\n        }\n\n        console.log(_variables_projectArray__WEBPACK_IMPORTED_MODULE_1__.projectArray[i].slaveTasks)\n    }\n\n    \n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/miscellaneous/fillWithTasks.js?");

/***/ }),

/***/ "./src/miscellaneous/getRandomNumber.js":
/*!**********************************************!*\
  !*** ./src/miscellaneous/getRandomNumber.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   returnRandom: () => (/* binding */ returnRandom)\n/* harmony export */ });\nconst returnRandom = () =>{\n    return Math.floor(Math.random() * 20);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/miscellaneous/getRandomNumber.js?");

/***/ }),

/***/ "./src/miscellaneous/variables/projectArray.js":
/*!*****************************************************!*\
  !*** ./src/miscellaneous/variables/projectArray.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectArray: () => (/* binding */ projectArray)\n/* harmony export */ });\n/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/project */ \"./src/classes/project.js\");\n\n\nlet projectArray = [new _classes_project__WEBPACK_IMPORTED_MODULE_0__.project(\"Personal\")];\n\n\n\n//# sourceURL=webpack://todo-list/./src/miscellaneous/variables/projectArray.js?");

/***/ }),

/***/ "./src/rendering/sidebarProjects.js":
/*!******************************************!*\
  !*** ./src/rendering/sidebarProjects.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderSidebarProjects: () => (/* binding */ renderSidebarProjects)\n/* harmony export */ });\n/* harmony import */ var _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../miscellaneous/variables/projectArray */ \"./src/miscellaneous/variables/projectArray.js\");\n\n\nconst renderSidebarProjects = () =>{\n    const projectContainer = document.querySelector('.sidebar-project-selector');\n\n    const container = document.createElement('div');\n    container.classList.add('sidebar-projects-container')\n\n    for(let i = 0; i < _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_0__.projectArray.length; i++){\n        const span = document.createElement('span')\n        span.textContent = _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_0__.projectArray[i].title;\n\n        container.appendChild(span);\n    }\n\n    projectContainer.appendChild(container);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/rendering/sidebarProjects.js?");

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