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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_maskPhone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/maskPhone */ \"./modules/maskPhone.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('12 december 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100);\r\n(0,_modules_maskPhone__WEBPACK_IMPORTED_MODULE_8__[\"default\"])('[name=\"user_phone\"]');\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\r\n    formId: 'form1',\r\n    someElement: [\r\n        {\r\n            type: 'block',\r\n            id: 'total'\r\n        }\r\n    ] \r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\r\n    formId: 'form2',\r\n    someElement: [\r\n        {\r\n            type: 'block',\r\n            id: 'total'\r\n        }\r\n    ] \r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\r\n    formId: 'form3',\r\n    someElement: [\r\n        {\r\n            type: 'block',\r\n            id: 'total'\r\n        }\r\n    ] \r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) => {\r\n    const calcBlock = document.querySelector('.calc-block')\r\n    const calcType = document.querySelector('.calc-type')\r\n    const calcSquare = document.querySelector('.calc-square')\r\n    const calcCount = document.querySelector('.calc-count')\r\n    const calcDay = document.querySelector('.calc-day')\r\n    const total = document.querySelector('#total')\r\n\r\n    let totalValue\r\n    let calcCountValue\r\n    let calcDayValue\r\n\r\n    const countCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value\r\n        const calcSquareValue = calcSquare.value\r\n\r\n        totalValue = 0\r\n        calcCountValue = 1\r\n        calcDayValue = 1\r\n\r\n        if(calcCount.value > 1) {\r\n            calcCountValue += +calcCount.value / 10\r\n        }\r\n\r\n        if(calcDay.value && calcDay.value < 5) {\r\n            calcDayValue = 2\r\n        } else if(calcDay.value && calcDay.value < 10) {\r\n            calcDayValue = 1.5\r\n        }\r\n\r\n        if(calcType.value && calcSquareValue) {\r\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue\r\n        } else {\r\n            totalValue = 0\r\n        }\r\n\r\n        total.textContent = Math.round(totalValue)\r\n    }\r\n\r\n    calcBlock.addEventListener('input', (e) => {\r\n        \r\n        if(e.target === calcType || e.target === calcSquare || \r\n            e.target === calcCount || e.target === calcDay) {\r\n            countCalc()\r\n        }\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/checkValidation.js":
/*!************************************!*\
  !*** ./modules/checkValidation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkValidation\": () => (/* binding */ checkValidation)\n/* harmony export */ });\nconst checkValidation = elems => {\r\n    let status = true;\r\n    elems.forEach(elem => {\r\n        switch (elem.getAttribute('name')) {\r\n            case 'user_name':\r\n                if(/^[а-яё]{2,}/gi.test(elem.value)) {\r\n                    elem.classList.add('success')\r\n                    elem.classList.remove('error')\r\n                } else {\r\n                    elem.classList.add('error')\r\n                    elem.classList.remove('success')\r\n                }\r\n                break;\r\n            case 'user_email':\r\n                if(/^[a-z\\d\\-_.!~*']+@[a-z\\d\\-_.!~*']+\\.[a-z]{2,3}$/gi.test(elem.value)) {\r\n                    elem.classList.add('success')\r\n                    elem.classList.remove('error')\r\n                } else {\r\n                    elem.classList.add('error')\r\n                    elem.classList.remove('success')\r\n                }\r\n                break;\r\n            case 'user_phone':\r\n                if(elem.value.length >= 17) {\r\n                    elem.classList.add('success')\r\n                    elem.classList.remove('error')\r\n                } else {\r\n                    elem.classList.add('error')\r\n                    elem.classList.remove('success')\r\n                }\r\n                break;\r\n            case 'user_message':\r\n                elem.classList.add('success')\r\n                elem.classList.remove('error')\r\n            default: return;\r\n        }\r\n        \r\n        elems.forEach(input => {\r\n            if (!input.classList.contains('success')) {\r\n                status = false\r\n            }\r\n        })\r\n    })\r\n\r\n    return status\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/checkValidation.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({timing, draw, duration}) => {\r\n\r\n    let start = performance.now();\r\n      \r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n      \r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n      \r\n        draw(progress); // отрисовать её\r\n      \r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n      \r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/maskPhone.js":
/*!******************************!*\
  !*** ./modules/maskPhone.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst maskPhone = (selector, masked = '+7 (___) ___-__-__') => {\r\n    const elems = document.querySelectorAll(selector);\r\n  \r\n    const mask = event => {\r\n      const {keyCode, target} = event;\r\n      const template = masked;\r\n      const\tdef = template.replace(/\\D/g, '');\r\n      const\tval = target.value.replace(/\\D/g, '');\r\n  \r\n      let i = 0;\r\n      let newValue = template.replace(/[_\\d]/g, (a) =>\r\n        i < val.length ? val.charAt(i++) || def.charAt(i) : a);\r\n      \r\n      i = newValue.indexOf('_');\r\n  \r\n      if (i !== -1)\r\n        newValue = newValue.slice(0, i);\r\n  \r\n      let reg = template.substr(0, target.value.length)\r\n        .replace(/_+/g, ({length}) => `\\\\d{1,${length}}`)\r\n        .replace(/[+()]/g, '\\\\$&');\r\n  \r\n      reg = new RegExp(`^${reg}$`);\r\n  \r\n      if (!reg.test(target.value) || target.value.length < 5 || keyCode > 47 && keyCode < 58) {\r\n        target.value = newValue;\r\n      }\r\n  \r\n      if (event.type == 'blur' && target.value.length < 5) {\r\n        target.value = '';\r\n      }\r\n    };\r\n  \r\n    for (const elem of elems) {\r\n        elem.addEventListener(\"input\", mask);\r\n        elem.addEventListener(\"focus\", mask);\r\n        elem.addEventListener(\"blur\", mask);\r\n    }\r\n  };\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (maskPhone);\r\n  \n\n//# sourceURL=webpack:///./modules/maskPhone.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n    const buttons = document.querySelectorAll('.popup-btn')\r\n    const modal = document.querySelector('.popup')\r\n    const modalContent = modal.querySelector('.popup-content')\r\n  \r\n    const animation = () => {\r\n        modal.style.display = 'block'\r\n        if(screen.width > 768) {\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 300,\r\n                timing(timeFraction) {\r\n                  return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    modalContent.style.opacity = progress;\r\n                }\r\n              });\r\n        }\r\n    }\r\n\r\n    buttons.forEach(btn => btn.addEventListener('click', animation))\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n            modal.style.display = 'none'\r\n        }\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _checkValidation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkValidation.js */ \"./modules/checkValidation.js\");\n\r\n\r\nconst sendForm = ({\r\n    formId, \r\n    someElement = [] \r\n}) => {\r\n    const form = document.getElementById(formId)\r\n    const statusBlock = document.createElement('div')\r\n    const loadText = 'Загрузка...'\r\n    const errorText = 'Ошибка'\r\n    const successText = 'Спасибо! Наш менеджер с вами свяжется!'\r\n\r\n    const sendData = (data) => {\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: { \r\n                'Content-Type': 'application/json' \r\n            }\r\n        }).then((response) => response.json())\r\n    }\r\n    \r\n    const clearCalc = () => {\r\n        const inputsCalc = document.querySelectorAll('.calc-block input')\r\n        const calcType = document.querySelector('.calc-type')\r\n        const total = document.querySelector('#total')\r\n        calcType.value = ''\r\n        total.textContent = '0'\r\n        inputsCalc.forEach((item) => {\r\n            item.value = ''\r\n        });\r\n    }\r\n\r\n    const getSomeElement = () => {\r\n        const formElements = form.querySelectorAll('input')\r\n        const formBody = {}\r\n        const formData = new FormData(form)\r\n\r\n        if((0,_checkValidation_js__WEBPACK_IMPORTED_MODULE_0__.checkValidation)(formElements)) {\r\n            statusBlock.textContent = loadText\r\n        }\r\n        form.append(statusBlock)\r\n\r\n        formData.forEach((value, key) => {\r\n            if(key === 'user_message') {\r\n                if(value === '') {\r\n                    return\r\n                }\r\n            }\r\n            formBody[key] = value\r\n        })\r\n\r\n        someElement.forEach(elem => {\r\n            const element = document.getElementById(elem.id)\r\n            const calcType = document.querySelector('.calc-type')\r\n            const calcSquare = document.querySelector('.calc-square')\r\n            const calcCount = document.querySelector('.calc-count')\r\n            const calcDay = document.querySelector('.calc-day')\r\n            if(elem.type === 'block' && element.textContent != '0') {\r\n                formBody[elem.id] = element.textContent\r\n                formBody['Тип объекта'] = calcType.options[calcType.selectedIndex].innerText\r\n                formBody['Общая площадь'] = calcSquare.value\r\n                formBody['Количесво помещений'] = calcCount.value\r\n                formBody['Срок иссполнения'] = calcDay.value\r\n            } else if(elem.type === 'input') {\r\n                formBody[elem.id] = element.value\r\n            }\r\n        })\r\n        return { formBody, formElements }\r\n    }\r\n\r\n    const submitForm = () => {\r\n        const {formBody, formElements} = getSomeElement()\r\n\r\n        if((0,_checkValidation_js__WEBPACK_IMPORTED_MODULE_0__.checkValidation)(formElements)) {\r\n            clearCalc()\r\n\r\n            sendData(formBody)\r\n            .then(data => {\r\n                statusBlock.textContent = successText\r\n                \r\n                formElements.forEach(input => {\r\n                    input.value = ''\r\n                    input.classList.remove('success')\r\n                })\r\n                console.log(data)\r\n            })\r\n            .catch(error => {\r\n                statusBlock.textContent = errorText\r\n            })\r\n        }setTimeout(() => {\r\n            statusBlock.textContent = '';\r\n        }, 4000);\r\n    }\r\n\r\n    try {\r\n        if(!form) {\r\n            throw new Error('Верните форму на место')\r\n        }\r\n\r\n        form.addEventListener('submit', (e) => {\r\n            e.preventDefault()\r\n            submitForm()\r\n        })\r\n    } catch(error) {\r\n        console.error(error.message)\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _checkValidation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkValidation.js */ \"./modules/checkValidation.js\");\n \r\n\r\nconst validation = () => {\r\n    const inputsCalc = document.querySelectorAll('.calc-block input')\r\n    const inputsText = document.querySelectorAll('.form-name, .mess, #form2-name')\r\n    const inputsEmail = document.querySelectorAll('input[type=email]')\r\n    const inputsPhone = document.querySelectorAll('input[type=tel]')\r\n\r\n    \r\n\r\n    const validationCalc = () => {\r\n        inputsCalc.forEach((item) => {\r\n            item.addEventListener('input', (e) => {\r\n                e.target.value = e.target.value.replace(/\\D+/,\"\")\r\n            });\r\n        });\r\n    };\r\n\r\n    const validationText = () => {\r\n        inputsText.forEach((item) => {\r\n            item.removeAttribute('required') //удаление валидации которая прописана в строке\r\n            item.addEventListener('input', (e) => {\r\n                e.target.value = e.target.value.replace(/[^а-яё\\-\\s]+/gi, \"\")\r\n\r\n                if (item.classList.contains('error') || item.classList.contains('success')) { \r\n                    (0,_checkValidation_js__WEBPACK_IMPORTED_MODULE_0__.checkValidation)([e.target])\r\n                }\r\n            });\r\n        });\r\n    };\r\n\r\n    const validationPhone = () => {\r\n        inputsPhone.forEach((item) => {\r\n            item.removeAttribute('required') //удаление валидации которая прописана в строке\r\n            item.addEventListener('input', (e) => {\r\n                e.target.value = e.target.value.replace(/[^0-9-()]+/,\"\")\r\n\r\n                if (item.classList.contains('error') || item.classList.contains('success')) { \r\n                    (0,_checkValidation_js__WEBPACK_IMPORTED_MODULE_0__.checkValidation)([e.target])\r\n                }\r\n            });\r\n        });\r\n    };\r\n\r\n    const validationEmail = () => {\r\n        inputsEmail.forEach((item) => {\r\n            item.addEventListener('input', (e) => {\r\n                e.target.value = e.target.value.replace(/[^a-z\\d@\\-_.!~*']+/gi,\"\")\r\n\r\n                if (item.classList.contains('error') || item.classList.contains('success')) {\r\n                    (0,_checkValidation_js__WEBPACK_IMPORTED_MODULE_0__.checkValidation)([e.target])\r\n                }\r\n            });\r\n        });\r\n    };\r\n\r\n    validationCalc();\r\n    validationPhone();\r\n    validationEmail();\r\n    validationText();\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack:///./modules/validation.js?");

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