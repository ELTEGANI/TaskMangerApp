"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/completeTask",{

/***/ "./src/components/dashboard/sidenavigation/index.js":
/*!**********************************************************!*\
  !*** ./src/components/dashboard/sidenavigation/index.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SideNavigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items */ \"./src/components/dashboard/sidenavigation/items.js\");\n/* harmony import */ var _userItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userItem */ \"./src/components/dashboard/sidenavigation/userItem.js\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./src/components/dashboard/sidenavigation/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _provider_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../provider/context */ \"./src/components/dashboard/provider/context.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar style = {\n    mobilePosition: {\n        left: 'left-0',\n        right: 'right-0'\n    },\n    close: \"hidden\",\n    container: \"pb-32 lg:pb-6\",\n    open: \"absolute w-8/12 z-40 sm:w-5/12\",\n    default: \"bg-white shadow h-screen overflow-y-auto top-0 lg:block lg:relative lg:w-64 lg:z-auto\"\n};\nfunction SideNavigation(param) {\n    var mobilePosition = param.mobilePosition;\n    _s();\n    var ref = (0,_provider_context__WEBPACK_IMPORTED_MODULE_3__.useToggle)(), open = ref.open, ref1 = ref.ref;\n    var userType = \"Admin\";\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        ref: ref1,\n        className: \"\".concat(style.default, \" \").concat(style.mobilePosition[mobilePosition], \" \\n       \").concat(open ? style.open : style.close, \" \").concat((_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().scrollbar)),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: style.container,\n            children: userType == \"Admin\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/elteganimohamed/Documents/task/src/components/dashboard/sidenavigation/index.js\",\n                lineNumber: 27,\n                columnNumber: 31\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_items__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/elteganimohamed/Documents/task/src/components/dashboard/sidenavigation/index.js\",\n                lineNumber: 27,\n                columnNumber: 53\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/elteganimohamed/Documents/task/src/components/dashboard/sidenavigation/index.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/elteganimohamed/Documents/task/src/components/dashboard/sidenavigation/index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this));\n};\n_s(SideNavigation, \"t6tHusLAcgg/hfHdW3H8N8gQr8w=\", false, function() {\n    return [\n        _provider_context__WEBPACK_IMPORTED_MODULE_3__.useToggle\n    ];\n});\n_c = SideNavigation;\nvar _c;\n$RefreshReg$(_c, \"SideNavigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvc2lkZW5hdmlnYXRpb24vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ087QUFDTDtBQUNXOztBQUUvQyxHQUFLLENBQUNJLEtBQUssR0FBRyxDQUFDO0lBQ2JDLGNBQWMsRUFBRSxDQUFDO1FBQ2ZDLElBQUksRUFBRSxDQUFRO1FBQ2RDLEtBQUssRUFBRSxDQUFTO0lBQ2xCLENBQUM7SUFDREMsS0FBSyxFQUFHLENBQU07SUFDZEMsU0FBUyxFQUFHLENBQWE7SUFDekJDLElBQUksRUFBRyxDQUE4QjtJQUNyQ0MsT0FBTyxFQUFHLENBQXFGO0FBQ2pHLENBQUM7QUFFYyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFrQixFQUFFLENBQUM7UUFBbkJQLGNBQWMsR0FBaEIsS0FBa0IsQ0FBaEJBLGNBQWM7O0lBQ3JELEdBQUssQ0FBaUJGLEdBQVcsR0FBWEEsNERBQVMsSUFBdkJPLElBQUksR0FBVVAsR0FBVyxDQUF6Qk8sSUFBSSxFQUFFRyxJQUFHLEdBQUtWLEdBQVcsQ0FBbkJVLEdBQUc7SUFDakIsR0FBSyxDQUFDQyxRQUFRLEdBQUcsQ0FBTztJQUN4QixNQUFNLDZFQUNIQyxDQUFLO1FBQ0pGLEdBQUcsRUFBRUEsSUFBRztRQUNSRyxTQUFTLEVBQUcsR0FBbUJaLE1BQW9DLENBQXJEQSxLQUFLLENBQUNPLE9BQU8sRUFBQyxDQUFDLElBQzFCRCxNQUErQixDQURITixLQUFLLENBQUNDLGNBQWMsQ0FBQ0EsY0FBYyxHQUFFLENBQ25FLGFBQXFDSCxNQUFhLENBQWhEUSxJQUFJLEdBQUdOLEtBQUssQ0FBQ00sSUFBSSxHQUFHTixLQUFLLENBQUNJLEtBQUssRUFBQyxDQUFDLElBQWdCLE9BQWROLG9FQUFhOzhGQUVsRGdCLENBQUc7WUFBQ0YsU0FBUyxFQUFFWixLQUFLLENBQUNLLFNBQVM7c0JBQzVCSyxRQUFRLElBQUksQ0FBTyxxRkFBR2IsaURBQWdCOzs7O21HQUFNRCw4Q0FBWTs7Ozs7Ozs7Ozs7Ozs7O0FBSWpFLENBQUM7R0FkdUJZLGNBQWM7O1FBQ2RULHdEQUFTOzs7S0FEVFMsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvc2lkZW5hdmlnYXRpb24vaW5kZXguanM/YWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2lkZW5hdkl0ZW1zIGZyb20gJy4vaXRlbXMnO1xuaW1wb3J0IFNpZGVuYXZVc2VySXRlbXMgZnJvbSAnLi91c2VySXRlbSc7XG5pbXBvcnQgY3NzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyB1c2VUb2dnbGUgfSBmcm9tICcuLi9wcm92aWRlci9jb250ZXh0JztcblxuY29uc3Qgc3R5bGUgPSB7XG4gIG1vYmlsZVBvc2l0aW9uOiB7XG4gICAgbGVmdDogJ2xlZnQtMCcsXG4gICAgcmlnaHQ6ICdyaWdodC0wJyxcbiAgfSxcbiAgY2xvc2U6IGBoaWRkZW5gLFxuICBjb250YWluZXI6IGBwYi0zMiBsZzpwYi02YCxcbiAgb3BlbjogYGFic29sdXRlIHctOC8xMiB6LTQwIHNtOnctNS8xMmAsXG4gIGRlZmF1bHQ6IGBiZy13aGl0ZSBzaGFkb3cgaC1zY3JlZW4gb3ZlcmZsb3cteS1hdXRvIHRvcC0wIGxnOmJsb2NrIGxnOnJlbGF0aXZlIGxnOnctNjQgbGc6ei1hdXRvYCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVOYXZpZ2F0aW9uKHsgbW9iaWxlUG9zaXRpb24gfSkge1xuICBjb25zdCB7IG9wZW4sIHJlZiB9ID0gdXNlVG9nZ2xlKCk7XG4gIGNvbnN0IHVzZXJUeXBlID0gXCJBZG1pblwiO1xuICByZXR1cm4gKFxuICAgIDxhc2lkZVxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLmRlZmF1bHR9ICR7c3R5bGUubW9iaWxlUG9zaXRpb25bbW9iaWxlUG9zaXRpb25dfSBcbiAgICAgICAke29wZW4gPyBzdHlsZS5vcGVuIDogc3R5bGUuY2xvc2V9ICR7Y3NzLnNjcm9sbGJhcn1gfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxuICAgICAgICB7dXNlclR5cGUgPT0gXCJBZG1pblwiPyA8U2lkZW5hdlVzZXJJdGVtcyAvPiA6PFNpZGVuYXZJdGVtcyAvPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvYXNpZGU+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiU2lkZW5hdkl0ZW1zIiwiU2lkZW5hdlVzZXJJdGVtcyIsImNzcyIsInVzZVRvZ2dsZSIsInN0eWxlIiwibW9iaWxlUG9zaXRpb24iLCJsZWZ0IiwicmlnaHQiLCJjbG9zZSIsImNvbnRhaW5lciIsIm9wZW4iLCJkZWZhdWx0IiwiU2lkZU5hdmlnYXRpb24iLCJyZWYiLCJ1c2VyVHlwZSIsImFzaWRlIiwiY2xhc3NOYW1lIiwic2Nyb2xsYmFyIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/dashboard/sidenavigation/index.js\n");

/***/ })

});