"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user",{

/***/ "./src/components/dashboard/sidenavigation/index.js":
/*!**********************************************************!*\
  !*** ./src/components/dashboard/sidenavigation/index.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SideNavigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items */ \"./src/components/dashboard/sidenavigation/items.js\");\n/* harmony import */ var _userItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userItem */ \"./src/components/dashboard/sidenavigation/userItem.js\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./src/components/dashboard/sidenavigation/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _provider_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../provider/context */ \"./src/components/dashboard/provider/context.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar style = {\n    mobilePosition: {\n        left: 'left-0',\n        right: 'right-0'\n    },\n    close: \"hidden\",\n    container: \"pb-32 lg:pb-6\",\n    open: \"absolute w-8/12 z-40 sm:w-5/12\",\n    default: \"bg-white shadow h-screen overflow-y-auto top-0 lg:block lg:relative lg:w-64 lg:z-auto\"\n};\nfunction SideNavigation(param) {\n    var mobilePosition = param.mobilePosition;\n    _s();\n    var ref = (0,_provider_context__WEBPACK_IMPORTED_MODULE_3__.useToggle)(), open = ref.open, ref1 = ref.ref;\n    var userType = \"Admin\";\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        ref: ref1,\n        className: \"\".concat(style.default, \" \").concat(style.mobilePosition[mobilePosition], \" \\n       \").concat(open ? style.open : style.close, \" \").concat((_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().scrollbar)),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: style.container,\n            children: userType == \"Admin\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_items__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/elteganimohamed/Documents/task/src/components/dashboard/sidenavigation/index.js\",\n                lineNumber: 27,\n                columnNumber: 31\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/elteganimohamed/Documents/task/src/components/dashboard/sidenavigation/index.js\",\n                lineNumber: 27,\n                columnNumber: 49\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/elteganimohamed/Documents/task/src/components/dashboard/sidenavigation/index.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/elteganimohamed/Documents/task/src/components/dashboard/sidenavigation/index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this));\n};\n_s(SideNavigation, \"t6tHusLAcgg/hfHdW3H8N8gQr8w=\", false, function() {\n    return [\n        _provider_context__WEBPACK_IMPORTED_MODULE_3__.useToggle\n    ];\n});\n_c = SideNavigation;\nvar _c;\n$RefreshReg$(_c, \"SideNavigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvc2lkZW5hdmlnYXRpb24vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ087QUFDTDtBQUNXOztBQUUvQyxHQUFLLENBQUNJLEtBQUssR0FBRyxDQUFDO0lBQ2JDLGNBQWMsRUFBRSxDQUFDO1FBQ2ZDLElBQUksRUFBRSxDQUFRO1FBQ2RDLEtBQUssRUFBRSxDQUFTO0lBQ2xCLENBQUM7SUFDREMsS0FBSyxFQUFHLENBQU07SUFDZEMsU0FBUyxFQUFHLENBQWE7SUFDekJDLElBQUksRUFBRyxDQUE4QjtJQUNyQ0MsT0FBTyxFQUFHLENBQXFGO0FBQ2pHLENBQUM7QUFFYyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFrQixFQUFFLENBQUM7UUFBbkJQLGNBQWMsR0FBaEIsS0FBa0IsQ0FBaEJBLGNBQWM7O0lBQ3JELEdBQUssQ0FBaUJGLEdBQVcsR0FBWEEsNERBQVMsSUFBdkJPLElBQUksR0FBVVAsR0FBVyxDQUF6Qk8sSUFBSSxFQUFFRyxJQUFHLEdBQUtWLEdBQVcsQ0FBbkJVLEdBQUc7SUFDakIsR0FBSyxDQUFDQyxRQUFRLEdBQUcsQ0FBTztJQUN4QixNQUFNLDZFQUNIQyxDQUFLO1FBQ0pGLEdBQUcsRUFBRUEsSUFBRztRQUNSRyxTQUFTLEVBQUcsR0FBbUJaLE1BQW9DLENBQXJEQSxLQUFLLENBQUNPLE9BQU8sRUFBQyxDQUFDLElBQzFCRCxNQUErQixDQURITixLQUFLLENBQUNDLGNBQWMsQ0FBQ0EsY0FBYyxHQUFFLENBQ25FLGFBQXFDSCxNQUFhLENBQWhEUSxJQUFJLEdBQUdOLEtBQUssQ0FBQ00sSUFBSSxHQUFHTixLQUFLLENBQUNJLEtBQUssRUFBQyxDQUFDLElBQWdCLE9BQWROLG9FQUFhOzhGQUVsRGdCLENBQUc7WUFBQ0YsU0FBUyxFQUFFWixLQUFLLENBQUNLLFNBQVM7c0JBQzVCSyxRQUFRLElBQUksQ0FBTyxxRkFBR2QsOENBQVk7Ozs7bUdBQU1DLGlEQUFnQjs7Ozs7Ozs7Ozs7Ozs7O0FBSWpFLENBQUM7R0FkdUJXLGNBQWM7O1FBQ2RULHdEQUFTOzs7S0FEVFMsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvc2lkZW5hdmlnYXRpb24vaW5kZXguanM/YWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2lkZW5hdkl0ZW1zIGZyb20gJy4vaXRlbXMnO1xuaW1wb3J0IFNpZGVuYXZVc2VySXRlbXMgZnJvbSAnLi91c2VySXRlbSc7XG5pbXBvcnQgY3NzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyB1c2VUb2dnbGUgfSBmcm9tICcuLi9wcm92aWRlci9jb250ZXh0JztcblxuY29uc3Qgc3R5bGUgPSB7XG4gIG1vYmlsZVBvc2l0aW9uOiB7XG4gICAgbGVmdDogJ2xlZnQtMCcsXG4gICAgcmlnaHQ6ICdyaWdodC0wJyxcbiAgfSxcbiAgY2xvc2U6IGBoaWRkZW5gLFxuICBjb250YWluZXI6IGBwYi0zMiBsZzpwYi02YCxcbiAgb3BlbjogYGFic29sdXRlIHctOC8xMiB6LTQwIHNtOnctNS8xMmAsXG4gIGRlZmF1bHQ6IGBiZy13aGl0ZSBzaGFkb3cgaC1zY3JlZW4gb3ZlcmZsb3cteS1hdXRvIHRvcC0wIGxnOmJsb2NrIGxnOnJlbGF0aXZlIGxnOnctNjQgbGc6ei1hdXRvYCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVOYXZpZ2F0aW9uKHsgbW9iaWxlUG9zaXRpb24gfSkge1xuICBjb25zdCB7IG9wZW4sIHJlZiB9ID0gdXNlVG9nZ2xlKCk7XG4gIGNvbnN0IHVzZXJUeXBlID0gXCJBZG1pblwiO1xuICByZXR1cm4gKFxuICAgIDxhc2lkZVxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLmRlZmF1bHR9ICR7c3R5bGUubW9iaWxlUG9zaXRpb25bbW9iaWxlUG9zaXRpb25dfSBcbiAgICAgICAke29wZW4gPyBzdHlsZS5vcGVuIDogc3R5bGUuY2xvc2V9ICR7Y3NzLnNjcm9sbGJhcn1gfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxuICAgICAgICB7dXNlclR5cGUgPT0gXCJBZG1pblwiPyA8U2lkZW5hdkl0ZW1zIC8+IDo8U2lkZW5hdlVzZXJJdGVtcyAvPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvYXNpZGU+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiU2lkZW5hdkl0ZW1zIiwiU2lkZW5hdlVzZXJJdGVtcyIsImNzcyIsInVzZVRvZ2dsZSIsInN0eWxlIiwibW9iaWxlUG9zaXRpb24iLCJsZWZ0IiwicmlnaHQiLCJjbG9zZSIsImNvbnRhaW5lciIsIm9wZW4iLCJkZWZhdWx0IiwiU2lkZU5hdmlnYXRpb24iLCJyZWYiLCJ1c2VyVHlwZSIsImFzaWRlIiwiY2xhc3NOYW1lIiwic2Nyb2xsYmFyIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/dashboard/sidenavigation/index.js\n");

/***/ }),

/***/ "./src/components/dashboard/sidenavigation/userData.js":
/*!*************************************************************!*\
  !*** ./src/components/dashboard/sidenavigation/userData.js ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icons_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/admin */ \"./src/components/dashboard/sidenavigation/icons/admin.js\");\n\n\nvar userData = [\n    {\n        section: 'Admin',\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_admin__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/elteganimohamed/Documents/task/src/components/dashboard/sidenavigation/userData.js\",\n            lineNumber: 6,\n            columnNumber: 11\n        }, undefined),\n        content: [\n            {\n                title: 'View User Task',\n                link: '/admin/addNewUser'\n            },\n            {\n                title: 'Get Task From Users Group',\n                link: '/admin/createNewGroup'\n            },\n            {\n                title: 'Complete New Task',\n                link: '/admin/createNewTask'\n            },\n            {\n                title: 'Sort Task',\n                link: '/admin/assignUsers'\n            }\n        ]\n    }, \n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (userData);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvc2lkZW5hdmlnYXRpb24vdXNlckRhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBcUM7QUFFckMsR0FBSyxDQUFDQyxRQUFRLEdBQUcsQ0FBQztJQUNoQixDQUFDO1FBQ0NDLE9BQU8sRUFBRSxDQUFPO1FBQ2hCQyxJQUFJLDhFQUFHSCxvREFBUzs7Ozs7UUFDaEJJLE9BQU8sRUFBRSxDQUFDO1lBQ1IsQ0FBQztnQkFDQ0MsS0FBSyxFQUFFLENBQWdCO2dCQUN2QkMsSUFBSSxFQUFFLENBQW1CO1lBQzNCLENBQUM7WUFDRCxDQUFDO2dCQUNDRCxLQUFLLEVBQUUsQ0FBMkI7Z0JBQ2xDQyxJQUFJLEVBQUUsQ0FBdUI7WUFDL0IsQ0FBQztZQUNELENBQUM7Z0JBQ0NELEtBQUssRUFBRSxDQUFtQjtnQkFDMUJDLElBQUksRUFBRSxDQUFzQjtZQUM5QixDQUFDO1lBQ0QsQ0FBQztnQkFDQ0QsS0FBSyxFQUFFLENBQVc7Z0JBQ2xCQyxJQUFJLEVBQUUsQ0FBb0I7WUFDNUIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELCtEQUFlTCxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL3NpZGVuYXZpZ2F0aW9uL3VzZXJEYXRhLmpzP2I5MmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkbWluSWNvbiBmcm9tICcuL2ljb25zL2FkbWluJztcblxuY29uc3QgdXNlckRhdGEgPSBbXG4gIHtcbiAgICBzZWN0aW9uOiAnQWRtaW4nLFxuICAgIGljb246IDxBZG1pbkljb24gLz4sXG4gICAgY29udGVudDogW1xuICAgICAge1xuICAgICAgICB0aXRsZTogJ1ZpZXcgVXNlciBUYXNrJyxcbiAgICAgICAgbGluazogJy9hZG1pbi9hZGROZXdVc2VyJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnR2V0IFRhc2sgRnJvbSBVc2VycyBHcm91cCcsXG4gICAgICAgIGxpbms6ICcvYWRtaW4vY3JlYXRlTmV3R3JvdXAnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdDb21wbGV0ZSBOZXcgVGFzaycsXG4gICAgICAgIGxpbms6ICcvYWRtaW4vY3JlYXRlTmV3VGFzaycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ1NvcnQgVGFzaycsXG4gICAgICAgIGxpbms6ICcvYWRtaW4vYXNzaWduVXNlcnMnLFxuICAgICAgfVxuICAgIF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyRGF0YTtcbiJdLCJuYW1lcyI6WyJBZG1pbkljb24iLCJ1c2VyRGF0YSIsInNlY3Rpb24iLCJpY29uIiwiY29udGVudCIsInRpdGxlIiwibGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/dashboard/sidenavigation/userData.js\n");

/***/ }),

/***/ "./src/components/dashboard/sidenavigation/userItem.js":
/*!*************************************************************!*\
  !*** ./src/components/dashboard/sidenavigation/userItem.js ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SidenavUserItems; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _userData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userData */ \"./src/components/dashboard/sidenavigation/userData.js\");\n/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion */ \"./src/components/dashboard/sidenavigation/accordion.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar style = {\n    active: \"font-normal mx-4 text-sm text-blue-600\",\n    inactive: \"font-light mx-4 text-sm text-gray-900\",\n    link: \"inline-flex items-center justify-start my-1 p-3 text-black\"\n};\nfunction SidenavUserItems() {\n    var _this = this;\n    _s();\n    var asPath = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)().asPath;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"mt-6 md:pl-6\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: _userData__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map(function(section) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accordion__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: section.icon\n                                }, void 0, false, {\n                                    fileName: \"/Users/elteganimohamed/Documents/task/src/components/dashboard/sidenavigation/userItem.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"pl-3\",\n                                    children: section.section\n                                }, void 0, false, {\n                                    fileName: \"/Users/elteganimohamed/Documents/task/src/components/dashboard/sidenavigation/userItem.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/elteganimohamed/Documents/task/src/components/dashboard/sidenavigation/userItem.js\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, _this),\n                        section.content.map(function(item) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"pl-5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: item.link,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: style.link,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: item.link === asPath ? style.active : style.inactive,\n                                            children: item.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/elteganimohamed/Documents/task/src/components/dashboard/sidenavigation/userItem.js\",\n                                            lineNumber: 29,\n                                            columnNumber: 21\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/elteganimohamed/Documents/task/src/components/dashboard/sidenavigation/userItem.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/elteganimohamed/Documents/task/src/components/dashboard/sidenavigation/userItem.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 17\n                                }, _this)\n                            }, item.title, false, {\n                                fileName: \"/Users/elteganimohamed/Documents/task/src/components/dashboard/sidenavigation/userItem.js\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    ]\n                }, section.section, true, {\n                    fileName: \"/Users/elteganimohamed/Documents/task/src/components/dashboard/sidenavigation/userItem.js\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/elteganimohamed/Documents/task/src/components/dashboard/sidenavigation/userItem.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/elteganimohamed/Documents/task/src/components/dashboard/sidenavigation/userItem.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this));\n};\n_s(SidenavUserItems, \"9pMG9Ra3x5O/yaZiUz6XxVJ+Rds=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = SidenavUserItems;\nvar _c;\n$RefreshReg$(_c, \"SidenavUserItems\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvc2lkZW5hdmlnYXRpb24vdXNlckl0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUVDO0FBQ007QUFDSTs7QUFFdkMsR0FBSyxDQUFDSSxLQUFLLEdBQUcsQ0FBQztJQUNiQyxNQUFNLEVBQUcsQ0FBc0M7SUFDL0NDLFFBQVEsRUFBRyxDQUFxQztJQUNoREMsSUFBSSxFQUFHLENBQTBEO0FBQ25FLENBQUM7QUFFYyxRQUFRLENBQUNDLGdCQUFnQixHQUFHLENBQUM7OztJQUMxQyxHQUFLLENBQUdDLE1BQU0sR0FBS04sc0RBQVMsR0FBcEJNLE1BQU07SUFFZCxNQUFNLDZFQUNIQyxDQUFFO1FBQUNDLFNBQVMsRUFBQyxDQUFjOzhGQUN6QkMsQ0FBRTtzQkFDQVgscURBQVEsQ0FBQyxRQUFRLENBQVBhLE9BQU87OEJBQ2hCLE1BQU0sK0RBQUxaLGtEQUFTOztvR0FDUGEsQ0FBRzs0QkFBQ0osU0FBUyxFQUFDLENBQU07OzRHQUNsQkssQ0FBSTs4Q0FBRUYsT0FBTyxDQUFDRyxJQUFJOzs7Ozs7NEdBQ2xCRCxDQUFJO29DQUFDTCxTQUFTLEVBQUMsQ0FBTTs4Q0FBRUcsT0FBTyxDQUFDQSxPQUFPOzs7Ozs7Ozs7Ozs7d0JBRXhDQSxPQUFPLENBQUNJLE9BQU8sQ0FBQ0wsR0FBRyxDQUFDLFFBQVEsQ0FBUE0sSUFBSTswQ0FDeEIsTUFBTSwrREFBTEosQ0FBRztnQ0FBQ0osU0FBUyxFQUFDLENBQU07c0hBQ2xCWCxrREFBSTtvQ0FBQ29CLElBQUksRUFBRUQsSUFBSSxDQUFDWixJQUFJOzBIQUNsQmMsQ0FBQzt3Q0FBQ1YsU0FBUyxFQUFFUCxLQUFLLENBQUNHLElBQUk7OEhBQ3JCUyxDQUFJOzRDQUNITCxTQUFTLEVBQ1BRLElBQUksQ0FBQ1osSUFBSSxLQUFLRSxNQUFNLEdBQUdMLEtBQUssQ0FBQ0MsTUFBTSxHQUFHRCxLQUFLLENBQUNFLFFBQVE7c0RBRXJEYSxJQUFJLENBQUNHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBUFFILElBQUksQ0FBQ0csS0FBSzs7Ozs7OzttQkFOekJSLE9BQU8sQ0FBQ0EsT0FBTzs7Ozs7Ozs7Ozs7Ozs7OztBQXdCekMsQ0FBQztHQS9CdUJOLGdCQUFnQjs7UUFDbkJMLGtEQUFTOzs7S0FETkssZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9zaWRlbmF2aWdhdGlvbi91c2VySXRlbS5qcz8zM2M1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCBkYXRhIGZyb20gJy4vdXNlckRhdGEnO1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tICcuL2FjY29yZGlvbic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IHN0eWxlID0ge1xuICBhY3RpdmU6IGBmb250LW5vcm1hbCBteC00IHRleHQtc20gdGV4dC1ibHVlLTYwMGAsXG4gIGluYWN0aXZlOiBgZm9udC1saWdodCBteC00IHRleHQtc20gdGV4dC1ncmF5LTkwMGAsXG4gIGxpbms6IGBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBteS0xIHAtMyB0ZXh0LWJsYWNrYCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVuYXZVc2VySXRlbXMoKSB7XG4gIGNvbnN0IHsgYXNQYXRoIH0gPSB1c2VSb3V0ZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9XCJtdC02IG1kOnBsLTZcIj5cbiAgICAgIDxsaT5cbiAgICAgICAge2RhdGEubWFwKChzZWN0aW9uKSA9PiAoXG4gICAgICAgICAgPEFjY29yZGlvbiBrZXk9e3NlY3Rpb24uc2VjdGlvbn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgPHNwYW4+e3NlY3Rpb24uaWNvbn08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsLTNcIj57c2VjdGlvbi5zZWN0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3NlY3Rpb24uY29udGVudC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC01XCIga2V5PXtpdGVtLnRpdGxlfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZS5saW5rfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5saW5rID09PSBhc1BhdGggPyBzdHlsZS5hY3RpdmUgOiBzdHlsZS5pbmFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJkYXRhIiwiQWNjb3JkaW9uIiwidXNlUm91dGVyIiwic3R5bGUiLCJhY3RpdmUiLCJpbmFjdGl2ZSIsImxpbmsiLCJTaWRlbmF2VXNlckl0ZW1zIiwiYXNQYXRoIiwidWwiLCJjbGFzc05hbWUiLCJsaSIsIm1hcCIsInNlY3Rpb24iLCJkaXYiLCJzcGFuIiwiaWNvbiIsImNvbnRlbnQiLCJpdGVtIiwiaHJlZiIsImEiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/dashboard/sidenavigation/userItem.js\n");

/***/ })

});