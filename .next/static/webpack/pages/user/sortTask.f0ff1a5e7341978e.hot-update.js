"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/sortTask",{

/***/ "./src/pages/user/sortTask.js":
/*!************************************!*\
  !*** ./src/pages/user/sortTask.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_dashboard_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/dashboard/layout */ \"./src/components/dashboard/layout.js\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_VerticalDragList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/VerticalDragList */ \"./src/components/VerticalDragList.js\");\n\n\n\n\nfunction SortTask() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                as: \"h2\",\n                icon: true,\n                textAlign: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header.Content, {\n                    children: \"Sort Tasks\"\n                }, void 0, false, {\n                    fileName: \"/Users/elteganimohamed/Documents/task/src/pages/user/sortTask.js\",\n                    lineNumber: 9,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/elteganimohamed/Documents/task/src/pages/user/sortTask.js\",\n                lineNumber: 8,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_VerticalDragList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/elteganimohamed/Documents/task/src/pages/user/sortTask.js\",\n                lineNumber: 11,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/elteganimohamed/Documents/task/src/pages/user/sortTask.js\",\n        lineNumber: 7,\n        columnNumber: 7\n    }, this));\n}\n_c = SortTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SortTask);\nvar _c;\n$RefreshReg$(_c, \"SortTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdXNlci9zb3J0VGFzay5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErRDtBQUM5QjtBQUMrQjtTQUV2REUsUUFBUSxHQUFFLENBQUM7SUFDaEIsTUFBTSw2RUFDSEYsb0VBQWU7O3dGQUNaRyxNQUFNO2dCQUFDQyxFQUFFLEVBQUMsQ0FBSTtnQkFBQ0MsSUFBSTtnQkFBQ0MsU0FBUyxFQUFDLENBQVE7c0dBQ3JDSCxNQUFNLENBQUNJLE9BQU87OEJBQUMsQ0FBVTs7Ozs7Ozs7Ozs7d0ZBRW5CTixvRUFBZ0I7Ozs7Ozs7Ozs7O0FBRzdCLENBQUM7S0FUSUMsUUFBUTtBQVdiLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3VzZXIvc29ydFRhc2suanM/MzE5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGFzaGJvYXJkTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL2xheW91dCc7XG5pbXBvcnQgJ3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcyc7XG5pbXBvcnQgVmVydGljYWxEcmFnTGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1ZlcnRpY2FsRHJhZ0xpc3QnO1xuXG5mdW5jdGlvbiBTb3J0VGFzaygpe1xuICAgIHJldHVybiAoXG4gICAgICA8RGFzaGJvYXJkTGF5b3V0PlxuICAgICAgICAgPEhlYWRlciBhcz0naDInIGljb24gdGV4dEFsaWduPSdjZW50ZXInPlxuICAgICAgICAgIDxIZWFkZXIuQ29udGVudD5Tb3J0IFRhc2tzPC9IZWFkZXIuQ29udGVudD5cbiAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgICAgICA8VmVydGljYWxEcmFnTGlzdCAvPlxuICAgICAgPC9EYXNoYm9hcmRMYXlvdXQ+XG4gICAgKVxuICAgIH1cbiAgICBcbiAgICBleHBvcnQgZGVmYXVsdCBTb3J0VGFzazsiXSwibmFtZXMiOlsiRGFzaGJvYXJkTGF5b3V0IiwiVmVydGljYWxEcmFnTGlzdCIsIlNvcnRUYXNrIiwiSGVhZGVyIiwiYXMiLCJpY29uIiwidGV4dEFsaWduIiwiQ29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/user/sortTask.js\n");

/***/ })

});