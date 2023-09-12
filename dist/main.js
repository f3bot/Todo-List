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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateToday: () => (/* binding */ generateToday)\n/* harmony export */ });\n/* harmony import */ var _miscellaneous_getRandomNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../miscellaneous/getRandomNumber */ \"./src/miscellaneous/getRandomNumber.js\");\n/* harmony import */ var _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../miscellaneous/variables/projectArray */ \"./src/miscellaneous/variables/projectArray.js\");\n\r\n\r\n\r\n\r\nconst generateToday = ( ) =>{\r\n    const container = document.createElement('div');\r\n    container.classList.add('today-container')\r\n\r\n    generateNavbar(container);\r\n    displayTodayTasks(container);\r\n    \r\n\r\n    document.body.appendChild(container);\r\n\r\n\r\n}\r\n\r\nconst generateNavbar = (parent) =>{\r\n\r\n    let currentDate = new Date();\r\n    let hour = currentDate.getHours();\r\n    const div = document.createElement('div');\r\n    div.classList.add('today-hero-container')\r\n    const bigSpan = document.createElement('span');\r\n    bigSpan.classList.add('today-span-hero');\r\n    const bigSpanEnding = document.createElement('span');\r\n    bigSpanEnding.textContent = '.'\r\n\r\n\r\n    if(hour < 12){\r\n        bigSpan.textContent = 'Good Morning, Michał';       \r\n    }else if(hour >= 12 && hour < 18){\r\n        bigSpan.textContent = 'Good Afternoon, Michał';\r\n    }else if(hour >= 18){\r\n        bigSpan.textContent = 'Good Evening, Michał'\r\n    }\r\n\r\n    const smallSpan = document.createElement('span');\r\n    smallSpan.classList.add('today-span-hero-2');\r\n    \r\n    const quotes = [\"Seize the day!\", \"Your actions matter.\", \"Dream big!\", \"Make it happen!\", \"Believe in yourself.\", \"Inspire others.\", \"Create your path.\", \"Shine bright!\", \"Stay resilient.\", \"Embrace each moment.\", \"Be unstoppable!\", \"Chase your dreams.\", \"Spread joy.\", \"Make it count.\", \"You've got this!\", \"Choose happiness.\", \"Stay determined.\", \"Pursue greatness.\", \"Find your passion.\", \"Live with purpose.\"]\r\n\r\n    smallSpan.textContent = quotes[(0,_miscellaneous_getRandomNumber__WEBPACK_IMPORTED_MODULE_0__.returnRandom)()];\r\n\r\n    \r\n    bigSpan.appendChild(bigSpanEnding)\r\n\r\n    div.appendChild(bigSpan);\r\n    div.appendChild(smallSpan);\r\n\r\n    parent.appendChild(div);\r\n}\r\n\r\nconst displayTodayTasks = (parent) =>{\r\n    const dateDiv = document.createElement('div');\r\n    dateDiv.classList.add('today-date-div');\r\n\r\n    let currentDate = new Date();\r\n\r\n    let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];\r\n    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\r\n    \r\n    let dayOfWeek = daysOfWeek[currentDate.getDay()];\r\n    let monthName = months[currentDate.getMonth()];\r\n    let day = currentDate.getDate();\r\n    const leftDiv = document.createElement('div');\r\n    leftDiv.classList.add('date-display-container');\r\n    const spanContent = [dayOfWeek, day, monthName];\r\n    const classlists = ['date-display-day', 'date-display-number','date-display-month'];\r\n\r\n    for(let i = 0; i <spanContent.length; i++){\r\n        const span = document.createElement('span');\r\n        span.textContent = spanContent[i];\r\n        span.classList.add(classlists[i]);\r\n\r\n        leftDiv.appendChild(span);\r\n    }\r\n\r\n\r\n\r\n    dateDiv.appendChild(leftDiv);\r\n\r\n    const rightDiv = document.createElement('div');\r\n\r\n    const projectCounterDiv = document.createElement('div');\r\n    const projectCounter = document.createElement('span');\r\n    projectCounter.textContent = _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_1__.projectArray.length\r\n    const projectCounterDesc = document.createElement('span');\r\n    projectCounterDesc.textContent = \"Active Projects: \"\r\n\r\n    console.log(_miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_1__.projectArray.length)\r\n\r\n    rightDiv.classList.add('today-active-projects')\r\n    rightDiv.appendChild(projectCounterDesc);\r\n    rightDiv.appendChild(projectCounter);\r\n\r\n    dateDiv.appendChild(rightDiv)\r\n    parent.appendChild(dateDiv)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/homeScreen/generateTodayScreen.js?");

/***/ }),

/***/ "./src/components/mainContent/generateMain.js":
/*!****************************************************!*\
  !*** ./src/components/mainContent/generateMain.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateMainContent: () => (/* binding */ generateMainContent)\n/* harmony export */ });\n/* harmony import */ var _mainNavigator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainNavigator */ \"./src/components/mainContent/mainNavigator.js\");\n/* harmony import */ var _taskContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskContainer */ \"./src/components/mainContent/taskContainer.js\");\n/* harmony import */ var _taskProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskProperties */ \"./src/components/mainContent/taskProperties.js\");\n\r\n\r\n\r\n\r\nconst generateMainContent = () =>{\r\n    const mainContainer = document.createElement('div');\r\n    mainContainer.classList.add('main-container')\r\n\r\n    const mainContainerTask = document.createElement('div');\r\n    mainContainerTask.classList.add('main-container-task');\r\n\r\n    (0,_mainNavigator__WEBPACK_IMPORTED_MODULE_0__.generateMainNavigator)(mainContainer);\r\n    (0,_taskContainer__WEBPACK_IMPORTED_MODULE_1__.generateTaskContainer)(mainContainerTask);\r\n    (0,_taskProperties__WEBPACK_IMPORTED_MODULE_2__.generateTaskProperties)(mainContainerTask);\r\n\r\n\r\n    mainContainer.appendChild(mainContainerTask)\r\n    document.body.appendChild(mainContainer);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/mainContent/generateMain.js?");

/***/ }),

/***/ "./src/components/mainContent/mainNavigator.js":
/*!*****************************************************!*\
  !*** ./src/components/mainContent/mainNavigator.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateMainNavigator: () => (/* binding */ generateMainNavigator)\n/* harmony export */ });\nconst generateMainNavigator = (parent) =>{\r\n    const navDiv = document.createElement('div');\r\n    navDiv.classList.add('main-content-nav');\r\n\r\n    const mainNavSpan = document.createElement('span');\r\n    mainNavSpan.classList.add('main-navigator-span');\r\n\r\n    mainNavSpan.textContent = 'Test Project';\r\n\r\n    const separator = document.createElement('div');\r\n    separator.classList.add('main-nav-separator');\r\n\r\n\r\n    navDiv.appendChild(mainNavSpan);\r\n    navDiv.appendChild(separator)\r\n    generateButtons(navDiv);\r\n    parent.appendChild(navDiv);\r\n}\r\n\r\nconst generateButtons = (parent) =>{\r\n    const buttonContainer = document.createElement('div');\r\n    buttonContainer.classList.add('main-navigator-button-div');\r\n\r\n    const btnDelete = document.createElement('img');\r\n    btnDelete.src = '../src/assets/delete2.svg';\r\n    btnDelete.classList.add('main-navigator-delete');\r\n\r\n    const btnPrint = document.createElement('img');\r\n    btnPrint.src = '../src/assets/print.svg';\r\n    btnPrint.classList.add('main-navigator-print');\r\n\r\n    buttonContainer.appendChild(btnDelete);\r\n    buttonContainer.appendChild(btnPrint);\r\n\r\n    parent.appendChild(buttonContainer);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/mainContent/mainNavigator.js?");

/***/ }),

/***/ "./src/components/mainContent/taskContainer.js":
/*!*****************************************************!*\
  !*** ./src/components/mainContent/taskContainer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateTaskContainer: () => (/* binding */ generateTaskContainer)\n/* harmony export */ });\nconst generateTaskContainer = (parent) =>{\r\n    const taskContainerDiv = document.createElement('div');\r\n    taskContainerDiv.classList.add('main-task-container');\r\n\r\n    const taskRendererDiv = document.createElement('div');\r\n    taskRendererDiv.classList.add('main-task-container-renderer')\r\n\r\n    const taskInputFormDiv = document.createElement('div');\r\n    taskInputFormDiv.classList.add('main-task-input-div');\r\n    const input = document.createElement('input');\r\n    input.type = 'text';\r\n    input.placeholder = '+ Add task'\r\n    input.classList.add('main-content-add-task')\r\n    taskInputFormDiv.appendChild(input);\r\n\r\n    taskContainerDiv.appendChild(taskRendererDiv)\r\n    taskContainerDiv.appendChild(taskInputFormDiv);\r\n\r\n    parent.appendChild(taskContainerDiv);\r\n}   \r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/mainContent/taskContainer.js?");

/***/ }),

/***/ "./src/components/mainContent/taskProperties.js":
/*!******************************************************!*\
  !*** ./src/components/mainContent/taskProperties.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateTaskProperties: () => (/* binding */ generateTaskProperties)\n/* harmony export */ });\n\r\n\r\nconst generateTaskProperties = (parent) =>{\r\n    const taskPropertiesContainer = document.createElement('div');\r\n    taskPropertiesContainer.classList.add('main-task-properties');\r\n\r\n    generateNavbar(taskPropertiesContainer);    \r\n    generateTaskTitle(taskPropertiesContainer);\r\n    generateTaskNotes(taskPropertiesContainer);\r\n    generateSubtasks(taskPropertiesContainer);\r\n\r\n    parent.appendChild(taskPropertiesContainer)\r\n}\r\n\r\nconst generateNavbar = (parent) =>{\r\n    const navDiv = document.createElement('div');\r\n    navDiv.classList.add('task-properties-navbar');\r\n\r\n    const leftDiv = document.createElement('div');\r\n\r\n    const span = document.createElement('span')\r\n    span.innerHTML = 'Projects &nbsp; > &nbsp; Personal'\r\n\r\n    leftDiv.appendChild(span);\r\n\r\n    const rightButtonDiv = document.createElement('div');\r\n\r\n    rightButtonDiv.classList.add('task-properties-button-div');\r\n\r\n    const btnOne = document.createElement('img');\r\n    btnOne.src = '../src/assets/delete.svg';\r\n    btnOne.classList.add('task-properties-delete');\r\n\r\n    const btnTwo = document.createElement('img');\r\n    btnTwo.src = '../src/assets/star.svg';\r\n    btnTwo.classList.add('task-properties-priority');\r\n\r\n    const btnThree = document.createElement('img');\r\n    btnThree.src = '../src/assets/checkbox.svg'\r\n    btnThree.classList.add('task-properties-done');\r\n\r\n    rightButtonDiv.appendChild(btnOne);\r\n    rightButtonDiv.appendChild(btnTwo);\r\n    rightButtonDiv.appendChild(btnThree);\r\n\r\n    navDiv.appendChild(leftDiv);\r\n    navDiv.appendChild(rightButtonDiv);\r\n\r\n    parent.appendChild(navDiv)\r\n}\r\n\r\nconst generateTaskTitle = (parent) =>{\r\n    const span = document.createElement('span');\r\n    span.textContent = 'test task aaa';\r\n\r\n    span.classList.add('task-properties-title');\r\n\r\n    parent.appendChild(span);\r\n}\r\n\r\nconst generateTaskNotes = (parent) =>{\r\n    const div = document.createElement('div');\r\n    div.classList.add('task-properties-textarea-container');\r\n\r\n    const textarea = document.createElement('textarea');\r\n    textarea.placeholder = 'Add your notes here';\r\n    textarea.classList.add('task-properties-text-area')\r\n\r\n\r\n    div.appendChild(textarea);\r\n\r\n    parent.appendChild(div);\r\n}\r\n\r\nconst generateSubtasks = (parent) =>{\r\n    const subtaskContaienr = document.createElement('div');\r\n    subtaskContaienr.classList.add(\"task-properties-subtask-container\");\r\n\r\n    const subtaskContainerHolder = document.createElement('div');\r\n    subtaskContainerHolder.classList.add('task-properties-subtask-div');\r\n\r\n    const inputDiv = document.createElement('div');\r\n    inputDiv.classList.add('task-properties-subtasks-input-div')\r\n\r\n    const checkbox = document.createElement('button');\r\n\r\n    checkbox.classList.add('task-properties-subtasks-checkbox');\r\n\r\n    const input = document.createElement('button');\r\n    input.textContent = 'Add a new subtask'\r\n    input.classList.add('task-properties-subtasks-input');\r\n\r\n    inputDiv.appendChild(checkbox);\r\n    inputDiv.appendChild(input);\r\n\r\n    subtaskContaienr.appendChild(subtaskContainerHolder);\r\n    subtaskContaienr.appendChild(inputDiv);\r\n\r\n    parent.appendChild(subtaskContaienr);\r\n}   \r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/mainContent/taskProperties.js?");

/***/ }),

/***/ "./src/components/sidebar/ProjectSelector.js":
/*!***************************************************!*\
  !*** ./src/components/sidebar/ProjectSelector.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateForm: () => (/* binding */ generateForm),\n/* harmony export */   generateProjectSelector: () => (/* binding */ generateProjectSelector),\n/* harmony export */   renderNewlyCreatedProject: () => (/* binding */ renderNewlyCreatedProject)\n/* harmony export */ });\n/* harmony import */ var _listeners_sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../listeners/sidebar */ \"./src/listeners/sidebar.js\");\n/* harmony import */ var _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../miscellaneous/variables/projectArray */ \"./src/miscellaneous/variables/projectArray.js\");\n\r\n\r\n\r\nconst generateProjectSelector = (parent) =>{\r\n    const container = document.createElement('div');\r\n    container.classList.add('sidebar-project-selector');\r\n\r\n    const titleDiv = document.createElement('div');\r\n    const span = document.createElement('span');\r\n    const addBtn = document.createElement('button');\r\n    addBtn.classList.add('add-project-btn')\r\n\r\n    span.textContent = 'Projects';\r\n    addBtn.textContent = '+';\r\n\r\n    titleDiv.appendChild(span);\r\n    titleDiv.appendChild(addBtn);\r\n\r\n    titleDiv.classList.add('sidebar-project-title')\r\n\r\n    const projectContainer = document.createElement('div');\r\n    projectContainer.classList.add(\"project-container\");\r\n\r\n    container.appendChild(titleDiv);\r\n\r\n\r\n    parent.appendChild(container);\r\n}\r\n\r\nconst generateForm = () =>{\r\n\r\n    const container = document.createElement('div');\r\n    container.classList.add('form-container');\r\n\r\n    const closeBtnDiv = document.createElement('div')\r\n    closeBtnDiv.classList.add('form-close-btn-div')\r\n    const closeBtn = document.createElement('button');\r\n    closeBtn.classList.add('form-close-btn');\r\n    closeBtn.textContent = '✕'\r\n    \r\n    const titleInput = document.createElement('input');\r\n    titleInput.type = 'text';\r\n    titleInput.classList.add('form-add-project-input')\r\n    titleInput.placeholder = 'Add your task here';\r\n\r\n    const addProjectButtonDiv = document.createElement('div')\r\n    addProjectButtonDiv.classList.add('form-add-project-btn-div')\r\n\r\n\r\n    const addProjectForm = document.createElement('button');\r\n    addProjectForm.classList.add('form-add-project-btn');\r\n    addProjectForm.textContent = 'Continue';\r\n\r\n    closeBtnDiv.appendChild(closeBtn)\r\n    addProjectButtonDiv.appendChild(addProjectForm);\r\n\r\n    container.appendChild(closeBtnDiv);\r\n    container.appendChild(titleInput);\r\n    container.appendChild(addProjectButtonDiv);\r\n\r\n    document.body.appendChild(container);\r\n\r\n    generateOverlay();\r\n\r\n}\r\n\r\nconst generateOverlay = () =>{\r\n    const overlay = document.createElement('div');  \r\n    overlay.classList.add('overlay')\r\n\r\n    document.body.appendChild(overlay)\r\n}\r\n\r\nconst renderNewlyCreatedProject = (value) =>{\r\n    const container = document.querySelector('.sidebar-projects-container');\r\n\r\n    const span = document.createElement('span');\r\n    span.classList.add('sidebar-project-span')\r\n    span.textContent = value;\r\n    (0,_listeners_sidebar__WEBPACK_IMPORTED_MODULE_0__.changeViewListenerNewlyAdded)(span)\r\n\r\n    console.log(_miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_1__.projectArray)\r\n\r\n    container.appendChild(span)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/sidebar/ProjectSelector.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_homeScreen_generateTodayScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/homeScreen/generateTodayScreen */ \"./src/components/homeScreen/generateTodayScreen.js\");\n/* harmony import */ var _components_mainContent_generateMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mainContent/generateMain */ \"./src/components/mainContent/generateMain.js\");\n/* harmony import */ var _components_sidebar_ProjectSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar/ProjectSelector */ \"./src/components/sidebar/ProjectSelector.js\");\n/* harmony import */ var _components_sidebar_generateSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sidebar/generateSidebar */ \"./src/components/sidebar/generateSidebar.js\");\n/* harmony import */ var _listeners_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listeners/sidebar */ \"./src/listeners/sidebar.js\");\n/* harmony import */ var _listeners_taskContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listeners/taskContainer */ \"./src/listeners/taskContainer.js\");\n/* harmony import */ var _listeners_taskProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listeners/taskProperties */ \"./src/listeners/taskProperties.js\");\n/* harmony import */ var _listeners_today__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listeners/today */ \"./src/listeners/today.js\");\n/* harmony import */ var _miscellaneous_fillWithProjects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./miscellaneous/fillWithProjects */ \"./src/miscellaneous/fillWithProjects.js\");\n/* harmony import */ var _miscellaneous_fillWithTasks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./miscellaneous/fillWithTasks */ \"./src/miscellaneous/fillWithTasks.js\");\n/* harmony import */ var _rendering_sidebarProjects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rendering/sidebarProjects */ \"./src/rendering/sidebarProjects.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_miscellaneous_fillWithProjects__WEBPACK_IMPORTED_MODULE_8__.fillWithProjects)();\r\n(0,_miscellaneous_fillWithTasks__WEBPACK_IMPORTED_MODULE_9__.fillWithTasks)();\r\n\r\n\r\n//Generating structures\r\n(0,_components_sidebar_generateSidebar__WEBPACK_IMPORTED_MODULE_3__.generateSidebar)();\r\n(0,_components_sidebar_ProjectSelector__WEBPACK_IMPORTED_MODULE_2__.generateForm)();\r\n(0,_components_homeScreen_generateTodayScreen__WEBPACK_IMPORTED_MODULE_0__.generateToday)();\r\n(0,_components_mainContent_generateMain__WEBPACK_IMPORTED_MODULE_1__.generateMainContent)();\r\n\r\n//Rendering\r\n(0,_rendering_sidebarProjects__WEBPACK_IMPORTED_MODULE_10__.renderSidebarProjects)();\r\n\r\n\r\n//Listeners\r\n(0,_listeners_sidebar__WEBPACK_IMPORTED_MODULE_4__.formListeners)();\r\n(0,_listeners_sidebar__WEBPACK_IMPORTED_MODULE_4__.changeViewListener)();\r\n(0,_listeners_today__WEBPACK_IMPORTED_MODULE_7__.addTodayListener)();\r\n(0,_listeners_taskContainer__WEBPACK_IMPORTED_MODULE_5__.addTaskListener)();\r\n(0,_listeners_taskProperties__WEBPACK_IMPORTED_MODULE_6__.addNewSubtaskListener)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/listeners/sidebar.js":
/*!**********************************!*\
  !*** ./src/listeners/sidebar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeViewListener: () => (/* binding */ changeViewListener),\n/* harmony export */   changeViewListenerNewlyAdded: () => (/* binding */ changeViewListenerNewlyAdded),\n/* harmony export */   formListeners: () => (/* binding */ formListeners)\n/* harmony export */ });\n/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/project */ \"./src/classes/project.js\");\n/* harmony import */ var _components_sidebar_ProjectSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/sidebar/ProjectSelector */ \"./src/components/sidebar/ProjectSelector.js\");\n/* harmony import */ var _miscellaneous_variables_currentProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../miscellaneous/variables/currentProject */ \"./src/miscellaneous/variables/currentProject.js\");\n/* harmony import */ var _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../miscellaneous/variables/projectArray */ \"./src/miscellaneous/variables/projectArray.js\");\n/* harmony import */ var _rendering_mainContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rendering/mainContent */ \"./src/rendering/mainContent.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst formListeners = () =>{\r\n    const closeBtn = document.querySelector('.form-close-btn');\r\n    const overlay = document.querySelector('.overlay');\r\n    const formContainer = document.querySelector('.form-container');\r\n    const addProjectButton = document.querySelector('.add-project-btn');\r\n    const formInput = document.querySelector('.form-add-project-input');\r\n\r\n    addProjectButton.addEventListener('click', (e) =>{\r\n        formContainer.classList.toggle('visible');\r\n        overlay.classList.toggle('visible');\r\n    })\r\n\r\n\r\n    closeBtn.addEventListener('click', (e) =>{\r\n        overlay.classList.toggle('visible');\r\n        formContainer.classList.toggle('visible');\r\n    })\r\n\r\n    overlay.addEventListener('click', (e) =>{\r\n        overlay.classList.toggle('visible');\r\n          formContainer.classList.toggle('visible');\r\n    })\r\n\r\n    formInput.addEventListener('keypress', (e) =>{\r\n        if(e.key == 'Enter'){\r\n            if(formInput.value == '' || formInput.value == null){\r\n                console.log(\"THROW ERROR HERE\")\r\n            }else{\r\n                overlay.classList.toggle('visible');\r\n                formContainer.classList.toggle('visible');\r\n\r\n                _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_3__.projectArray.push(new _classes_project__WEBPACK_IMPORTED_MODULE_0__.project(formInput.value));\r\n                (0,_components_sidebar_ProjectSelector__WEBPACK_IMPORTED_MODULE_1__.renderNewlyCreatedProject)(formInput.value);\r\n\r\n\r\n                formInput.value = '';\r\n            }\r\n        }\r\n    })\r\n}\r\n\r\nconst changeViewListener = () =>{\r\n    const todayContainer = document.querySelector('.today-container');\r\n    const mainContent = document.querySelector('.main-container');\r\n\r\n    const domElements = document.querySelectorAll('.sidebar-project-span');\r\n\r\n\r\n    domElements.forEach((element) => {\r\n        element.addEventListener('click', () => {\r\n            (0,_miscellaneous_variables_currentProject__WEBPACK_IMPORTED_MODULE_2__.setCurrentProject)(element.innerHTML)\r\n            todayContainer.classList.add('not-visible')\r\n            mainContent.classList.add('visible')\r\n            ;(0,_rendering_mainContent__WEBPACK_IMPORTED_MODULE_4__.clearContainer)();\r\n            (0,_rendering_mainContent__WEBPACK_IMPORTED_MODULE_4__.renderTasks)(element)\r\n        });\r\n    });\r\n    \r\n}\r\n\r\nconst changeViewListenerNewlyAdded = (item) =>{\r\n    const todayContainer = document.querySelector('.today-container');\r\n    const mainContent = document.querySelector('.main-container');\r\n        item.addEventListener('click', () => {\r\n            todayContainer.classList.add('not-visible')\r\n            mainContent.classList.add('visible')\r\n            ;(0,_rendering_mainContent__WEBPACK_IMPORTED_MODULE_4__.clearContainer)();\r\n            (0,_rendering_mainContent__WEBPACK_IMPORTED_MODULE_4__.renderTasks)(item);\r\n            (0,_miscellaneous_variables_currentProject__WEBPACK_IMPORTED_MODULE_2__.setCurrentProject)(item.innerHTML);\r\n        });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/listeners/sidebar.js?");

/***/ }),

/***/ "./src/listeners/taskContainer.js":
/*!****************************************!*\
  !*** ./src/listeners/taskContainer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTaskDivListener: () => (/* binding */ addTaskDivListener),\n/* harmony export */   addTaskListener: () => (/* binding */ addTaskListener)\n/* harmony export */ });\n/* harmony import */ var _rendering_mainContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rendering/mainContent */ \"./src/rendering/mainContent.js\");\n\r\n\r\nconst addTaskListener = () =>{\r\n    const input = document.querySelector('.main-content-add-task')\r\n    const parentContainer = document.querySelector('.main-task-container-renderer')\r\n\r\n    input.addEventListener('keypress', (e) =>{\r\n        if(e.key == 'Enter'){\r\n            if(input.value == '' || input.value == null){\r\n                console.log(\"Throw error here\");\r\n            }else{\r\n                (0,_rendering_mainContent__WEBPACK_IMPORTED_MODULE_0__.renderNewlyCreatedTask)(parentContainer, input);\r\n            }\r\n        }\r\n    })\r\n\r\n}\r\n\r\nconst addTaskDivListener = (item) =>{\r\n    const spanTarget = document.querySelector('.task-properties-title');\r\n\r\n    item.addEventListener('click', (e) =>{\r\n        spanTarget.textContent = item.textContent;\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/listeners/taskContainer.js?");

/***/ }),

/***/ "./src/listeners/taskProperties.js":
/*!*****************************************!*\
  !*** ./src/listeners/taskProperties.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewSubtaskListener: () => (/* binding */ addNewSubtaskListener)\n/* harmony export */ });\n/* harmony import */ var _miscellaneous_variables_currentProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../miscellaneous/variables/currentProject */ \"./src/miscellaneous/variables/currentProject.js\");\n/* harmony import */ var _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../miscellaneous/variables/projectArray */ \"./src/miscellaneous/variables/projectArray.js\");\n\r\n\r\n\r\nconst addNewSubtaskListener = () =>{\r\n    const addSubtaskDiv = document.querySelector('.task-properties-subtasks-input-div');\r\n    const container = document.querySelector('.task-properties-subtask-div');\r\n\r\n    addSubtaskDiv.addEventListener('click', (e) =>{\r\n        e.preventDefault();\r\n\r\n        const newDiv = document.createElement('div');\r\n        const checkbox = document.createElement('input');\r\n        checkbox.type = 'checkbox';\r\n        checkbox.checked = false;\r\n\r\n        const input = document.createElement('input');\r\n        input.type = 'text';\r\n        addInputListener(input, newDiv);\r\n\r\n        newDiv.appendChild(checkbox);\r\n        newDiv.appendChild(input);\r\n\r\n        for(let i = 0; i < _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_1__.projectArray.length; i++){\r\n            if((0,_miscellaneous_variables_currentProject__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)() == _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_1__.projectArray[i].title){\r\n                for(let j = 0; j < _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_1__.projectArray[i].slaveTasks.length; j++){\r\n                    if(_miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_1__.projectArray[i].slaveTasks[j].title == 'Send out meeting invitations'){\r\n                        console.log(\"Task found or something can push now\")\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        container.appendChild(newDiv);\r\n\r\n        input.focus();\r\n    })\r\n}\r\n\r\nconst addInputListener = (item, parent) =>{\r\n    item.addEventListener('keypress', (e) =>{\r\n        if(e.key == 'Enter'){\r\n            if(item.value == '' || item.value == null){\r\n                parent.remove();\r\n            }else{\r\n                console.log(\"a\")\r\n            }\r\n        }\r\n    })\r\n\r\n    item.addEventListener('blur', (e) =>{\r\n        if(item.value == '' || item.value == null){\r\n            parent.remove();\r\n        }\r\n    })\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/listeners/taskProperties.js?");

/***/ }),

/***/ "./src/listeners/today.js":
/*!********************************!*\
  !*** ./src/listeners/today.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTodayListener: () => (/* binding */ addTodayListener)\n/* harmony export */ });\nconst addTodayListener = () =>{\r\n    const todaySpan = document.querySelector('.sidebar-today');\r\n\r\n    const todayContainer = document.querySelector('.today-container');\r\n    const mainContainer = document.querySelector('.main-container')\r\n\r\n    todaySpan.addEventListener('click', (e) =>{\r\n        todayContainer.classList.remove('not-visible')\r\n        mainContainer.classList.remove('visible');\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/listeners/today.js?");

/***/ }),

/***/ "./src/miscellaneous/fillWithProjects.js":
/*!***********************************************!*\
  !*** ./src/miscellaneous/fillWithProjects.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fillWithProjects: () => (/* binding */ fillWithProjects)\n/* harmony export */ });\n/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/project */ \"./src/classes/project.js\");\n/* harmony import */ var _variables_projectArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables/projectArray */ \"./src/miscellaneous/variables/projectArray.js\");\n\r\n\r\n\r\n\r\nconst fillWithProjects = () =>{\r\n    const strings = [\"chuj\", \"chuj 2\", \"chuj 3\"];\r\n\r\n    for(let i = 0; i < strings.length; i++){\r\n        _variables_projectArray__WEBPACK_IMPORTED_MODULE_1__.projectArray.push(new _classes_project__WEBPACK_IMPORTED_MODULE_0__.project(strings[i]));\r\n    }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/miscellaneous/fillWithProjects.js?");

/***/ }),

/***/ "./src/miscellaneous/fillWithTasks.js":
/*!********************************************!*\
  !*** ./src/miscellaneous/fillWithTasks.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fillWithTasks: () => (/* binding */ fillWithTasks)\n/* harmony export */ });\n/* harmony import */ var _classes_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/task */ \"./src/classes/task.js\");\n/* harmony import */ var _variables_projectArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables/projectArray */ \"./src/miscellaneous/variables/projectArray.js\");\n\r\n\r\n\r\nconst fillWithTasks = () =>{\r\n    const strings = [    \"Finish writing the report\",\r\n    \"Call the client for a follow-up\",\r\n    \"Buy groceries\",\r\n    \"Attend the team meeting\",\r\n    \"Send out meeting invitations\",\r\n    \"Plan the weekend getaway\",\r\n    \"Pay the bills\",\r\n    \"Complete the coding assignment\",\r\n    \"Schedule a dentist appointment\",\r\n    \"Clean the house\",\r\n    \"Review the project proposal\",\r\n    \"Prepare a presentation\",\r\n    \"Go for a run\",\r\n    \"Study for the upcoming exam\",\r\n    \"Walk the dog\",\r\n    \"Organize the closet\",\r\n    \"Research vacation destinations\",\r\n    \"Update the resume\",\r\n    \"Water the plants\",\r\n    \"Read a chapter of the new book\"];\r\n\r\n    for(let i = 0; i < _variables_projectArray__WEBPACK_IMPORTED_MODULE_1__.projectArray.length; i++){\r\n        for(let j = 0; j < 5; j++){\r\n            _variables_projectArray__WEBPACK_IMPORTED_MODULE_1__.projectArray[i].slaveTasks.push(new _classes_task__WEBPACK_IMPORTED_MODULE_0__.task(strings[j]));\r\n        }\r\n\r\n    }\r\n\r\n    \r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/miscellaneous/fillWithTasks.js?");

/***/ }),

/***/ "./src/miscellaneous/getRandomNumber.js":
/*!**********************************************!*\
  !*** ./src/miscellaneous/getRandomNumber.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   returnRandom: () => (/* binding */ returnRandom)\n/* harmony export */ });\nconst returnRandom = () =>{\r\n    return Math.floor(Math.random() * 20);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/miscellaneous/getRandomNumber.js?");

/***/ }),

/***/ "./src/miscellaneous/returnArrayIndex.js":
/*!***********************************************!*\
  !*** ./src/miscellaneous/returnArrayIndex.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   returnCurrentArrayIndex: () => (/* binding */ returnCurrentArrayIndex)\n/* harmony export */ });\n/* harmony import */ var _variables_projectArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables/projectArray */ \"./src/miscellaneous/variables/projectArray.js\");\n\r\n\r\nconst returnCurrentArrayIndex = (value) =>{\r\n    for(let i = 0; i < _variables_projectArray__WEBPACK_IMPORTED_MODULE_0__.projectArray.length; i++){\r\n        if(_variables_projectArray__WEBPACK_IMPORTED_MODULE_0__.projectArray[i].title == value){\r\n            return i;\r\n        }\r\n    }\r\n}\r\n\r\nconst returnCurrentTaskIndex = () =>{\r\n    \r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/miscellaneous/returnArrayIndex.js?");

/***/ }),

/***/ "./src/miscellaneous/variables/currentProject.js":
/*!*******************************************************!*\
  !*** ./src/miscellaneous/variables/currentProject.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCurrentProject: () => (/* binding */ getCurrentProject),\n/* harmony export */   setCurrentProject: () => (/* binding */ setCurrentProject)\n/* harmony export */ });\nlet currentProject = '';\r\n\r\nconst setCurrentProject = (value) =>{\r\n    currentProject = value;\r\n    console.log(\"current project \", currentProject)\r\n}\r\n\r\nconst getCurrentProject = () =>{\r\n    return currentProject;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/miscellaneous/variables/currentProject.js?");

/***/ }),

/***/ "./src/miscellaneous/variables/projectArray.js":
/*!*****************************************************!*\
  !*** ./src/miscellaneous/variables/projectArray.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectArray: () => (/* binding */ projectArray)\n/* harmony export */ });\n/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/project */ \"./src/classes/project.js\");\n\r\n\r\nlet projectArray = [new _classes_project__WEBPACK_IMPORTED_MODULE_0__.project(\"Personal\")];\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/miscellaneous/variables/projectArray.js?");

/***/ }),

/***/ "./src/rendering/mainContent.js":
/*!**************************************!*\
  !*** ./src/rendering/mainContent.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearContainer: () => (/* binding */ clearContainer),\n/* harmony export */   renderNewlyCreatedTask: () => (/* binding */ renderNewlyCreatedTask),\n/* harmony export */   renderSubtasks: () => (/* binding */ renderSubtasks),\n/* harmony export */   renderTasks: () => (/* binding */ renderTasks)\n/* harmony export */ });\n/* harmony import */ var _miscellaneous_returnArrayIndex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../miscellaneous/returnArrayIndex */ \"./src/miscellaneous/returnArrayIndex.js\");\n/* harmony import */ var _miscellaneous_variables_currentProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../miscellaneous/variables/currentProject */ \"./src/miscellaneous/variables/currentProject.js\");\n/* harmony import */ var _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../miscellaneous/variables/projectArray */ \"./src/miscellaneous/variables/projectArray.js\");\n/* harmony import */ var _classes_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/task */ \"./src/classes/task.js\");\n/* harmony import */ var _listeners_taskContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../listeners/taskContainer */ \"./src/listeners/taskContainer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst renderTasks = (item) =>{\r\n    \r\n    const taskContaienr = document.querySelector('.main-task-container-renderer')\r\n\r\n    for(let i = 0; i < _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_2__.projectArray.length; i++){\r\n        if(item.textContent == _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_2__.projectArray[i].title){\r\n            console.log(_miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_2__.projectArray[i]);\r\n            console.log(_miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_2__.projectArray[i].slaveTasks)\r\n\r\n            console.log(\"%%%%%%%%%%%\")\r\n\r\n            for(let j = 0; j < _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_2__.projectArray[i].slaveTasks.length; j++){\r\n                const div = document.createElement('div');\r\n                div.classList.add('task-div');\r\n                \r\n                const checkbox = document.createElement('input');\r\n                checkbox.type = 'checkbox';\r\n                checkbox.role = 'checkbox';\r\n    \r\n                const span = document.createElement('span');\r\n                span.textContent = _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_2__.projectArray[i].slaveTasks[j].title\r\n\r\n\r\n                div.appendChild(checkbox);\r\n                div.appendChild(span);\r\n\r\n                (0,_listeners_taskContainer__WEBPACK_IMPORTED_MODULE_4__.addTaskDivListener)(span)\r\n\r\n                taskContaienr.appendChild(div);\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nconst clearContainer = () =>{\r\n    const taskContaienr = document.querySelector('.main-task-container-renderer');\r\n\r\n    while(taskContaienr.firstChild){\r\n        taskContaienr.removeChild(taskContaienr.firstChild);\r\n    }\r\n}\r\n\r\nconst renderNewlyCreatedTask = (parent, input) =>{\r\n\r\n\r\n    const div = document.createElement('div');\r\n    div.classList.add('task-div');\r\n    \r\n    const checkbox = document.createElement('input');\r\n    checkbox.type = 'checkbox';\r\n    checkbox.role = 'checkbox';\r\n\r\n    const span = document.createElement('span');\r\n    span.textContent = input.value\r\n\r\n\r\n    div.appendChild(checkbox);\r\n    div.appendChild(span);\r\n\r\n    parent.appendChild(div);\r\n\r\n    for(let i = 0; i <_miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_2__.projectArray.length; i++){\r\n        if((0,_miscellaneous_variables_currentProject__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)() == _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_2__.projectArray[i].title){\r\n            _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_2__.projectArray[i].slaveTasks.push(new _classes_task__WEBPACK_IMPORTED_MODULE_3__.task(input.value))\r\n        }\r\n    }\r\n\r\n    (0,_listeners_taskContainer__WEBPACK_IMPORTED_MODULE_4__.addTaskDivListener)(div)\r\n\r\n    input.value = '';\r\n}\r\n\r\nconst renderSubtasks = (item) =>{\r\n\r\n\r\n}\r\n\r\nconst renderNewlyCreatedSubtask = (item) =>{\r\n    \r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/rendering/mainContent.js?");

/***/ }),

/***/ "./src/rendering/sidebarProjects.js":
/*!******************************************!*\
  !*** ./src/rendering/sidebarProjects.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderSidebarProjects: () => (/* binding */ renderSidebarProjects)\n/* harmony export */ });\n/* harmony import */ var _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../miscellaneous/variables/projectArray */ \"./src/miscellaneous/variables/projectArray.js\");\n\r\n\r\nconst renderSidebarProjects = () =>{\r\n    const projectContainer = document.querySelector('.sidebar-project-selector');\r\n\r\n    const container = document.createElement('div');\r\n    container.classList.add('sidebar-projects-container')\r\n\r\n    for(let i = 0; i < _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_0__.projectArray.length; i++){\r\n        const span = document.createElement('span')\r\n        span.textContent = _miscellaneous_variables_projectArray__WEBPACK_IMPORTED_MODULE_0__.projectArray[i].title;\r\n        span.classList.add('sidebar-project-span')\r\n\r\n        container.appendChild(span);\r\n    }\r\n\r\n    projectContainer.appendChild(container);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/rendering/sidebarProjects.js?");

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