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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   project: () => (/* binding */ project)\n/* harmony export */ });\nclass project{\r\n    constructor(title){\r\n        this.title = title;\r\n        this.slaveTasks = [];\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/classes/project.js?");

/***/ }),

/***/ "./src/classes/task.js":
/*!*****************************!*\
  !*** ./src/classes/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   task: () => (/* binding */ task)\n/* harmony export */ });\nclass task{\r\n    constructor(title){\r\n        this.title = title;\r\n        this.notes = '';\r\n        this.priority = false;\r\n        this.done = false;\r\n\r\n        this.subtasks = [];\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/classes/task.js?");

/***/ }),

/***/ "./src/components/homeScreen/generateTodayScreen.js":
/*!**********************************************************!*\
  !*** ./src/components/homeScreen/generateTodayScreen.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateToday: () => (/* binding */ generateToday)\n/* harmony export */ });\n/* harmony import */ var _miscellaneous_getRandomNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../miscellaneous/getRandomNumber */ \"./src/miscellaneous/getRandomNumber.js\");\n\r\n\r\n\r\nconst generateToday = ( ) =>{\r\n    const container = document.createElement('div');\r\n    container.classList.add('today-conatienr')\r\n\r\n    generateNavbar(container);\r\n    displayTodayTasks(container);\r\n    \r\n\r\n    document.body.appendChild(container);\r\n\r\n\r\n}\r\n\r\nconst generateNavbar = (parent) =>{\r\n\r\n    let currentDate = new Date();\r\n    let hour = currentDate.getHours();\r\n    const div = document.createElement('div');\r\n    const bigSpan = document.createElement('span');\r\n    bigSpan.classList.add('today-span-hero');\r\n\r\n\r\n    if(hour < 12){\r\n        bigSpan.textContent = 'Good Morning, Michał';       \r\n    }else if(hour > 12 && hour < 18){\r\n        bigSpan.textContent = 'Good Afternoon, Michał';\r\n    }else if(hour > 18){\r\n        bigSpan.textContent = 'Good Evening, Michał'\r\n    }\r\n\r\n    const smallSpan = document.createElement('span');\r\n    smallSpan.classList.add('today-span-hero-2');\r\n    \r\n    const quotes = [\"Seize the day!\", \"Your actions matter.\", \"Dream big!\", \"Make it happen!\", \"Believe in yourself.\", \"Inspire others.\", \"Create your path.\", \"Shine bright!\", \"Stay resilient.\", \"Embrace each moment.\", \"Be unstoppable!\", \"Chase your dreams.\", \"Spread joy.\", \"Make it count.\", \"You've got this!\", \"Choose happiness.\", \"Stay determined.\", \"Pursue greatness.\", \"Find your passion.\", \"Live with purpose.\"]\r\n\r\n    smallSpan.textContent = quotes[(0,_miscellaneous_getRandomNumber__WEBPACK_IMPORTED_MODULE_0__.returnRandom)()];\r\n\r\n    div.appendChild(bigSpan);\r\n    div.appendChild(smallSpan);\r\n\r\n    parent.appendChild(div);\r\n}\r\n\r\nconst displayTodayTasks = (parent) =>{\r\n    const dateDiv = document.createElement('div');\r\n    dateDiv.classList.add('Today-date-div');\r\n\r\n    let currentDate = new Date();\r\n\r\n    let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];\r\n    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\r\n    \r\n    let dayOfWeek = daysOfWeek[currentDate.getDay()];\r\n    let monthName = months[currentDate.getMonth()];\r\n    let day = currentDate.getDate();\r\n    const leftDiv = document.createElement('div');\r\n    leftDiv.classList.add('date-display-container');\r\n    const spanContent = [dayOfWeek, day, monthName];\r\n    const classlists = ['date-display-day', 'date-display-number','date-display-month'];\r\n\r\n    for(let i = 0; i <spanContent.length; i++){\r\n        const span = document.createElement('span');\r\n        span.textContent = spanContent[i];\r\n        span.classList.add(classlists[i]);\r\n\r\n        leftDiv.appendChild(span);\r\n    }\r\n\r\n\r\n\r\n    dateDiv.appendChild(leftDiv);\r\n\r\n    const rightDiv = document.createElement('div');\r\n\r\n\r\n\r\n    parent.appendChild(dateDiv)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/homeScreen/generateTodayScreen.js?");

/***/ }),

/***/ "./src/components/sidebar/ProjectSelector.js":
/*!***************************************************!*\
  !*** ./src/components/sidebar/ProjectSelector.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateForm: () => (/* binding */ generateForm),\n/* harmony export */   generateProjectSelector: () => (/* binding */ generateProjectSelector),\n/* harmony export */   renderNewlyCreatedProject: () => (/* binding */ renderNewlyCreatedProject)\n/* harmony export */ });\nconst generateProjectSelector = (parent) =>{\r\n    const container = document.createElement('div');\r\n    container.classList.add('sidebar-project-selector');\r\n\r\n    const titleDiv = document.createElement('div');\r\n    const span = document.createElement('span');\r\n    const addBtn = document.createElement('button');\r\n    addBtn.classList.add('add-project-btn')\r\n\r\n    span.textContent = 'Projects';\r\n    addBtn.textContent = '+';\r\n\r\n    titleDiv.appendChild(span);\r\n    titleDiv.appendChild(addBtn);\r\n\r\n    titleDiv.classList.add('sidebar-project-title')\r\n\r\n    const projectContainer = document.createElement('div');\r\n    projectContainer.classList.add(\"project-container\");\r\n\r\n    container.appendChild(titleDiv);\r\n\r\n\r\n    parent.appendChild(container);\r\n}\r\n\r\nconst generateForm = () =>{\r\n\r\n    const container = document.createElement('div');\r\n    container.classList.add('form-container');\r\n\r\n    const closeBtnDiv = document.createElement('div')\r\n    closeBtnDiv.classList.add('form-close-btn-div')\r\n    const closeBtn = document.createElement('button');\r\n    closeBtn.classList.add('form-close-btn');\r\n    closeBtn.textContent = '✕'\r\n    \r\n    const titleInput = document.createElement('input');\r\n    titleInput.type = 'text';\r\n    titleInput.classList.add('form-add-project-input')\r\n    titleInput.placeholder = 'Add your task here';\r\n\r\n    const addProjectButtonDiv = document.createElement('div')\r\n    addProjectButtonDiv.classList.add('form-add-project-btn-div')\r\n\r\n\r\n    const addProjectForm = document.createElement('button');\r\n    addProjectForm.classList.add('form-add-project-btn');\r\n    addProjectForm.textContent = 'Continue';\r\n\r\n    closeBtnDiv.appendChild(closeBtn)\r\n    addProjectButtonDiv.appendChild(addProjectForm);\r\n\r\n    container.appendChild(closeBtnDiv);\r\n    container.appendChild(titleInput);\r\n    container.appendChild(addProjectButtonDiv);\r\n\r\n    document.body.appendChild(container);\r\n\r\n    generateOverlay();\r\n\r\n}\r\n\r\nconst generateOverlay = () =>{\r\n    const overlay = document.createElement('div');  \r\n    overlay.classList.add('overlay')\r\n\r\n    document.body.appendChild(overlay)\r\n}\r\n\r\nconst renderNewlyCreatedProject = (value) =>{\r\n    const container = document.querySelector('.sidebar-projects-container');\r\n\r\n    const span = document.createElement('span');\r\n    span.textContent = value;\r\n\r\n    container.appendChild(span)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/sidebar/ProjectSelector.js?");

/***/ }),

/***/ "./src/components/sidebar/dateSelector.js":
/*!************************************************!*\
  !*** ./src/components/sidebar/dateSelector.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateDateSelector: () => (/* binding */ generateDateSelector)\n/* harmony export */ });\nconst generateDateSelector = (parent) =>{\r\n    const container = document.createElement('div');\r\n    container.classList.add('sidebar-date-container');\r\n\r\n    const classlists = ['sidebar-today', 'sidebar-important', 'sidebar-all'];\r\n    const iconsSrc = ['../src/assets/attention.svg', '../src/assets/star.svg', '../src/assets/calendar.svg']\r\n    const strings = ['Today', 'Important', 'All Tasks'];\r\n\r\n    for(let i = 0; i < strings.length; i++){\r\n        const div = document.createElement('div');\r\n        div.classList.add(classlists[i]);\r\n\r\n        const img = document.createElement('img');\r\n        img.src = iconsSrc[i];\r\n\r\n        const span = document.createElement('span');\r\n        span.textContent = strings[i];\r\n\r\n        div.appendChild(img)\r\n        div.appendChild(span)\r\n\r\n        container.appendChild(div);\r\n    }\r\n\r\n    parent.appendChild(container);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/sidebar/dateSelector.js?");

/***/ }),

/***/ "./src/components/sidebar/generateSidebar.js":
/*!***************************************************!*\
  !*** ./src/components/sidebar/generateSidebar.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateSidebar: () => (/* binding */ generateSidebar)\n/* harmony export */ });\n/* harmony import */ var _ProjectSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectSelector */ \"./src/components/sidebar/ProjectSelector.js\");\n/* harmony import */ var _dateSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dateSelector */ \"./src/components/sidebar/dateSelector.js\");\n/* harmony import */ var _userOverview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userOverview */ \"./src/components/sidebar/userOverview.js\");\n\r\n\r\n\r\n\r\nconst generateSidebar = () => {\r\n    const nav = document.createElement('div');\r\n    nav.classList.add('sidebar');\r\n\r\n    (0,_userOverview__WEBPACK_IMPORTED_MODULE_2__.generateUserOverview)(nav);\r\n    (0,_dateSelector__WEBPACK_IMPORTED_MODULE_1__.generateDateSelector)(nav)\r\n    ;(0,_ProjectSelector__WEBPACK_IMPORTED_MODULE_0__.generateProjectSelector)(nav)\r\n\r\n    document.body.appendChild(nav);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/sidebar/generateSidebar.js?");

/***/ }),

/***/ "./src/components/sidebar/userOverview.js":
/*!************************************************!*\
  !*** ./src/components/sidebar/userOverview.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateUserOverview: () => (/* binding */ generateUserOverview)\n/* harmony export */ });\nconst generateUserOverview = (parent) =>{\r\n    const container = document.createElement('div');\r\n    container.classList.add('sidebar-user-overview')\r\n\r\n    const pfpImg = document.createElement('img');\r\n    pfpImg.classList.add('sidebar-profile-pic');\r\n    pfpImg.src = \"../src/assets/iar.jpg\"\r\n    const rightDiv = document.createElement('div');\r\n    const spanBig = document.createElement('span');\r\n    spanBig.textContent = 'Michał';\r\n    const pSmall = document.createElement('p');\r\n    pSmall.textContent = 'Workspace account'\r\n\r\n    rightDiv.appendChild(spanBig);\r\n    rightDiv.appendChild(pSmall);\r\n\r\n    container.appendChild(pfpImg);\r\n    container.appendChild(rightDiv);\r\n\r\n    parent.appendChild(container)\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/sidebar/userOverview.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_homeScreen_generateTodayScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/homeScreen/generateTodayScreen */ \"./src/components/homeScreen/generateTodayScreen.js\");\n/* harmony import */ var _components_sidebar_ProjectSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sidebar/ProjectSelector */ \"./src/components/sidebar/ProjectSelector.js\");\n/* harmony import */ var _components_sidebar_generateSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar/generateSidebar */ \"./src/components/sidebar/generateSidebar.js\");\n/* harmony import */ var _listeners_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listeners/sidebar */ \"./src/listeners/sidebar.js\");\n/* harmony import */ var _miscellaneous_fillWithProjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./miscellaneous/fillWithProjects */ \"./src/miscellaneous/fillWithProjects.js\");\n/* harmony import */ var _miscellaneous_fillWithTasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./miscellaneous/fillWithTasks */ \"./src/miscellaneous/fillWithTasks.js\");\n/* harmony import */ var _rendering_sidebarProjects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rendering/sidebarProjects */ \"./src/rendering/sidebarProjects.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_miscellaneous_fillWithProjects__WEBPACK_IMPORTED_MODULE_4__.fillWithProjects)();\r\n(0,_miscellaneous_fillWithTasks__WEBPACK_IMPORTED_MODULE_5__.fillWithTasks)();\r\n\r\n\r\n//Generating structures\r\n(0,_components_sidebar_generateSidebar__WEBPACK_IMPORTED_MODULE_2__.generateSidebar)();\r\n(0,_components_sidebar_ProjectSelector__WEBPACK_IMPORTED_MODULE_1__.generateForm)();\r\n(0,_components_homeScreen_generateTodayScreen__WEBPACK_IMPORTED_MODULE_0__.generateToday)();\r\n\r\n//Listeners\r\n(0,_listeners_sidebar__WEBPACK_IMPORTED_MODULE_3__.formListeners)();\r\n\r\n//Rendering\r\n(0,_rendering_sidebarProjects__WEBPACK_IMPORTED_MODULE_6__.renderSidebarProjects)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/listeners/sidebar.js":
/*!**********************************!*\
  !*** ./src/listeners/sidebar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formListeners: () => (/* binding */ formListeners)\n/* harmony export */ });\n/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/project */ \"./src/classes/project.js\");\n/* harmony import */ var _components_sidebar_ProjectSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/sidebar/ProjectSelector */ \"./src/components/sidebar/ProjectSelector.js\");\n/* harmony import */ var _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../miscellaneous/variables/projectArray */ \"./src/miscellaneous/variables/projectArray.js\");\n\r\n\r\n\r\n\r\nconst formListeners = () =>{\r\n    const closeBtn = document.querySelector('.form-close-btn');\r\n    const overlay = document.querySelector('.overlay');\r\n    const formContainer = document.querySelector('.form-container');\r\n    const addProjectButton = document.querySelector('.add-project-btn');\r\n    const formInput = document.querySelector('.form-add-project-input');\r\n\r\n    addProjectButton.addEventListener('click', (e) =>{\r\n        formContainer.classList.toggle('visible');\r\n        overlay.classList.toggle('visible');\r\n    })\r\n\r\n\r\n    closeBtn.addEventListener('click', (e) =>{\r\n        overlay.classList.toggle('visible');\r\n        formContainer.classList.toggle('visible');\r\n    })\r\n\r\n    overlay.addEventListener('click', (e) =>{\r\n        overlay.classList.toggle('visible');\r\n          formContainer.classList.toggle('visible');\r\n    })\r\n\r\n    formInput.addEventListener('keypress', (e) =>{\r\n        if(e.key == 'Enter'){\r\n            if(formInput.value == '' || formInput.value == null){\r\n                console.log(\"THROW ERROR HERE\")\r\n            }else{\r\n                overlay.classList.toggle('visible');\r\n                formContainer.classList.toggle('visible');\r\n\r\n                _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_2__.projectArray.push(new _classes_project__WEBPACK_IMPORTED_MODULE_0__.project(formInput.value));\r\n                (0,_components_sidebar_ProjectSelector__WEBPACK_IMPORTED_MODULE_1__.renderNewlyCreatedProject)(formInput.value);\r\n\r\n\r\n                formInput.value = '';\r\n            }\r\n        }\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/listeners/sidebar.js?");

/***/ }),

/***/ "./src/miscellaneous/fillWithProjects.js":
/*!***********************************************!*\
  !*** ./src/miscellaneous/fillWithProjects.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fillWithProjects: () => (/* binding */ fillWithProjects)\n/* harmony export */ });\n/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/project */ \"./src/classes/project.js\");\n/* harmony import */ var _variables_projectArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables/projectArray */ \"./src/miscellaneous/variables/projectArray.js\");\n\r\n\r\n\r\n\r\nconst fillWithProjects = () =>{\r\n    const strings = [\"chuj\", \"chuj 2\", \"chuj 3\"];\r\n\r\n    for(let i = 0; i < strings.length; i++){\r\n        _variables_projectArray__WEBPACK_IMPORTED_MODULE_1__.projectArray.push(new _classes_project__WEBPACK_IMPORTED_MODULE_0__.project(strings[i]));\r\n    }\r\n\r\n    console.log(_variables_projectArray__WEBPACK_IMPORTED_MODULE_1__.projectArray)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/miscellaneous/fillWithProjects.js?");

/***/ }),

/***/ "./src/miscellaneous/fillWithTasks.js":
/*!********************************************!*\
  !*** ./src/miscellaneous/fillWithTasks.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fillWithTasks: () => (/* binding */ fillWithTasks)\n/* harmony export */ });\n/* harmony import */ var _classes_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/task */ \"./src/classes/task.js\");\n/* harmony import */ var _variables_projectArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables/projectArray */ \"./src/miscellaneous/variables/projectArray.js\");\n\r\n\r\n\r\nconst fillWithTasks = () =>{\r\n    const strings = [    \"Finish writing the report\",\r\n    \"Call the client for a follow-up\",\r\n    \"Buy groceries\",\r\n    \"Attend the team meeting\",\r\n    \"Send out meeting invitations\",\r\n    \"Plan the weekend getaway\",\r\n    \"Pay the bills\",\r\n    \"Complete the coding assignment\",\r\n    \"Schedule a dentist appointment\",\r\n    \"Clean the house\",\r\n    \"Review the project proposal\",\r\n    \"Prepare a presentation\",\r\n    \"Go for a run\",\r\n    \"Study for the upcoming exam\",\r\n    \"Walk the dog\",\r\n    \"Organize the closet\",\r\n    \"Research vacation destinations\",\r\n    \"Update the resume\",\r\n    \"Water the plants\",\r\n    \"Read a chapter of the new book\"];\r\n\r\n    for(let i = 0; i < _variables_projectArray__WEBPACK_IMPORTED_MODULE_1__.projectArray.length; i++){\r\n        for(let j = 0; j < 5; j++){\r\n            _variables_projectArray__WEBPACK_IMPORTED_MODULE_1__.projectArray[i].slaveTasks.push(new _classes_task__WEBPACK_IMPORTED_MODULE_0__.task(strings[j]));\r\n        }\r\n\r\n        console.log(_variables_projectArray__WEBPACK_IMPORTED_MODULE_1__.projectArray[i].slaveTasks)\r\n    }\r\n\r\n    \r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/miscellaneous/fillWithTasks.js?");

/***/ }),

/***/ "./src/miscellaneous/getRandomNumber.js":
/*!**********************************************!*\
  !*** ./src/miscellaneous/getRandomNumber.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   returnRandom: () => (/* binding */ returnRandom)\n/* harmony export */ });\nconst returnRandom = () =>{\r\n    return Math.floor(Math.random() * 20);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/miscellaneous/getRandomNumber.js?");

/***/ }),

/***/ "./src/miscellaneous/variables/projectArray.js":
/*!*****************************************************!*\
  !*** ./src/miscellaneous/variables/projectArray.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectArray: () => (/* binding */ projectArray)\n/* harmony export */ });\n/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/project */ \"./src/classes/project.js\");\n\r\n\r\nlet projectArray = [new _classes_project__WEBPACK_IMPORTED_MODULE_0__.project(\"Personal\")];\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/miscellaneous/variables/projectArray.js?");

/***/ }),

/***/ "./src/rendering/sidebarProjects.js":
/*!******************************************!*\
  !*** ./src/rendering/sidebarProjects.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderSidebarProjects: () => (/* binding */ renderSidebarProjects)\n/* harmony export */ });\n/* harmony import */ var _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../miscellaneous/variables/projectArray */ \"./src/miscellaneous/variables/projectArray.js\");\n\r\n\r\nconst renderSidebarProjects = () =>{\r\n    const projectContainer = document.querySelector('.sidebar-project-selector');\r\n\r\n    const container = document.createElement('div');\r\n    container.classList.add('sidebar-projects-container')\r\n\r\n    for(let i = 0; i < _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_0__.projectArray.length; i++){\r\n        const span = document.createElement('span')\r\n        span.textContent = _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_0__.projectArray[i].title;\r\n\r\n        container.appendChild(span);\r\n    }\r\n\r\n    projectContainer.appendChild(container);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/rendering/sidebarProjects.js?");

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