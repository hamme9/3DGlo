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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('12 december 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) => {\r\n    const calcBlock = document.querySelector('.calc-block')\r\n    const calcType = document.querySelector('.calc-type')\r\n    const calcSquare = document.querySelector('.calc-square')\r\n    const calcCount = document.querySelector('.calc-count')\r\n    const calcDay = document.querySelector('.calc-day')\r\n    const total = document.querySelector('#total')\r\n\r\n    let totalValue\r\n    let calcCountValue\r\n    let calcDayValue\r\n\r\n    const countCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value\r\n        const calcSquareValue = calcSquare.value\r\n\r\n        totalValue = 0\r\n        calcCountValue = 1\r\n        calcDayValue = 1\r\n\r\n        if(calcCount.value > 1) {\r\n            calcCountValue += +calcCount.value / 10\r\n        }\r\n\r\n        if(calcDay.value && calcDay.value < 5) {\r\n            calcDayValue = 2\r\n        } else if(calcDay.value && calcDay.value < 10) {\r\n            calcDayValue = 1.5\r\n        }\r\n\r\n        if(calcType.value && calcSquareValue) {\r\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue\r\n        } else {\r\n            totalValue = 0\r\n        }\r\n\r\n        total.textContent = Math.round(totalValue)\r\n    }\r\n\r\n    calcBlock.addEventListener('input', (e) => {\r\n        \r\n        if(e.target === calcType || e.target === calcSquare || \r\n            e.target === calcCount || e.target === calcDay) {\r\n            countCalc()\r\n        }\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menu = document.querySelector('menu')\r\n\r\n    const toggleMenu = () => {\r\n        document.addEventListener('click', (e) => {\r\n            if (e.target.closest('.menu') || e.target.closest('.close-btn')) {\r\n                menu.classList.toggle('active-menu');\r\n            } else if (e.target.closest('a') || !e.target.closest('.active-menu')) {\r\n                menu.classList.remove('active-menu');\r\n            } \r\n        })\r\n    }\r\n\r\n    toggleMenu()\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const buttons = document.querySelectorAll('.popup-btn')\r\n    const modal = document.querySelector('.popup')\r\n    const modalContent = modal.querySelector('.popup-content')\r\n  \r\n    const animate = () => {\r\n        modal.style.display = 'block'\r\n        if(screen.width > 768) {\r\n            let animation = modalContent.animate([\r\n                {transform: 'translateX(-150%)'},\r\n                {transform: 'translateX(-50px)'}\r\n            ], 500);\r\n            animation.addEventListener('finish', function() {\r\n                modalContent.style.transform = 'translateX(-50px)';\r\n            });\r\n        }\r\n    }\r\n\r\n    buttons.forEach(btn => btn.addEventListener('click', animate))\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n            modal.style.display = 'none'\r\n        }\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    const sliderBlock = document.querySelector('.portfolio-content')\r\n    const slides = document.querySelectorAll('.portfolio-item')\r\n    const timeInterval = 2000\r\n    const dotsList = document.querySelector('.portfolio-dots')\r\n\r\n    let currentSlide = 0\r\n    let interval\r\n    let dots\r\n\r\n    const addDot = () => {\r\n        for(let i = 0; i < slides.length; i++) {\r\n            dotsList.insertAdjacentHTML('beforeend', `<li class=\"dot${i ? '' : ' dot-active'}\"></li>`)\r\n        }\r\n        dots = document.querySelectorAll('.dot')\r\n    }\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass)\r\n    }\r\n\r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass)\r\n    }\r\n\r\n    const autoSlide = () => {\r\n        prevSlide(slides, currentSlide, 'portfolio-item-active')\r\n        prevSlide(dots, currentSlide, 'dot-active')\r\n        currentSlide++\r\n\r\n        if(currentSlide >= slides.length) {\r\n            currentSlide = 0\r\n        }\r\n\r\n        nextSlide(slides, currentSlide, 'portfolio-item-active')\r\n        nextSlide(dots, currentSlide, 'dot-active')\r\n\r\n    }\r\n\r\n    const startSlide = (timer = 1500) => {\r\n        interval = setInterval(autoSlide, timer)\r\n    }\r\n\r\n    const stopSlide = () => {\r\n        clearInterval(interval)\r\n    }\r\n\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n\r\n        if(!e.target.matches('.dot, .portfolio-btn')){\r\n            return\r\n        }\r\n\r\n        prevSlide(slides, currentSlide, 'portfolio-item-active')\r\n        prevSlide(dots, currentSlide, 'dot-active')\r\n        if(e.target.matches('#arrow-right')) {\r\n            currentSlide++\r\n        } else if(e.target.matches('#arrow-left')) {\r\n            currentSlide--\r\n        } else if(e.target.classList.contains('dot')) {\r\n            dots.forEach((dot, index) => {\r\n                if(e.target === dot) {\r\n                    currentSlide = index\r\n                }\r\n            })\r\n        }\r\n        if(currentSlide >= slides.length) {\r\n            currentSlide = 0\r\n        }\r\n        if(currentSlide < 0) {\r\n            currentSlide = slides.length - 1 \r\n        }\r\n\r\n        nextSlide(slides, currentSlide, 'portfolio-item-active')\r\n        nextSlide(dots, currentSlide, 'dot-active')\r\n    })\r\n\r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n        if(e.target.matches('.dot, .portfolio-btn')){\r\n            stopSlide()\r\n        }\r\n    }, true)\r\n\r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n        if(e.target.matches('.dot, .portfolio-btn')){\r\n            startSlide(timeInterval)\r\n        }\r\n    }, true)\r\n    \r\n    addDot()\r\n    startSlide(timeInterval)\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabPanel = document.querySelector('.service-header')\r\n    const tabs = document.querySelectorAll('.service-header-tab')\r\n    const tabContent = document.querySelectorAll('.service-tab')\r\n\r\n    tabPanel.addEventListener('click', (e) =>{\r\n        if(e.target.closest('.service-header-tab')) {\r\n            const tabBtn = e.target.closest('.service-header-tab')\r\n            tabs.forEach((tab, index) => {\r\n                if(tab === tabBtn) {\r\n                    tab.classList.add('active')\r\n                    tabContent[index].classList.remove('d-none')\r\n                } else {\r\n                    tab.classList.remove('active')\r\n                    tabContent[index].classList.add('d-none')\r\n                }\r\n            })\r\n        }\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadLine) => {\r\n    const timerHours = document.querySelector('#timer-hours')\r\n    const timerMinutes = document.querySelector('#timer-minutes')\r\n    const timerSeconds = document.querySelector('#timer-seconds')\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadLine).getTime()\r\n        let dateNow = new Date().getTime()\r\n        let timeRemaining = (dateStop - dateNow) / 1000\r\n        let hours = Math.floor(timeRemaining / 3600)\r\n        let minutes = Math.floor((timeRemaining / 60) % 60) \r\n        let seconds = Math.floor(timeRemaining % 60)\r\n\r\n        return {timeRemaining, hours, minutes, seconds}\r\n    }\r\n\r\n    const updateClock = () => {\r\n        const {timeRemaining, hours, minutes, seconds} = getTimeRemaining();\r\n        timerHours.textContent = hours\r\n        timerMinutes.textContent = minutes\r\n        timerSeconds.textContent = seconds\r\n\r\n        if (hours < 10) timerHours.textContent = '0' + hours;\r\n        if (minutes < 10) timerMinutes.textContent = '0' + minutes;\r\n        if (seconds < 10) timerSeconds.textContent = '0' + seconds;\r\n\r\n        if (timeRemaining < 0) {\r\n            timerHours.textContent = '00';\r\n            timerMinutes.textContent = '00';\r\n            timerSeconds.textContent = '00';\r\n            return false;\r\n        }\r\n        return true;\r\n    }\r\n\r\n    const startClock = () => {\r\n        if(updateClock()) {\r\n            let idInterval = setInterval(() => !updateClock() && clearInterval(idInterval), 1000)\r\n        }\r\n    }\r\n\r\n    startClock();\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n    const inputsCalc = document.querySelectorAll('.calc-block input')\r\n    const inputsText = document.querySelectorAll('.form-name, .mess, #form2-name')\r\n    const inputsEmail = document.querySelectorAll('input[type=email]')\r\n    const inputsPhone = document.querySelectorAll('input[type=tel]')\r\n\r\n    const validationCalc = () => {\r\n        inputsCalc.forEach((item) => {\r\n            item.addEventListener('input', (e) => {\r\n                e.target.value = e.target.value.replace(/\\D+/,\"\")\r\n            });\r\n        });\r\n    };\r\n\r\n    const validationText = () => {\r\n        inputsText.forEach((item) => {\r\n            item.addEventListener('input', (e) => {\r\n                e.target.value = e.target.value.replace(/[^а-яё\\-\\s]+/gi, \"\")\r\n            });\r\n        });\r\n    };\r\n\r\n    const validationPhone = () => {\r\n        inputsPhone.forEach((item) => {\r\n            item.addEventListener('input', (e) => {\r\n                e.target.value = e.target.value.replace(/[^0-9-()]+/,\"\")\r\n            });\r\n        });\r\n    };\r\n\r\n    const validationEmail = () => {\r\n        inputsEmail.forEach((item) => {\r\n            item.addEventListener('input', (e) => {\r\n                e.target.value = e.target.value.replace(/[^a-z\\d@-_.!~*']+/gi,\"\")\r\n            });\r\n        });\r\n    };\r\n\r\n    validationCalc();\r\n    validationPhone();\r\n    validationEmail();\r\n    validationText();\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack:///./modules/validation.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;