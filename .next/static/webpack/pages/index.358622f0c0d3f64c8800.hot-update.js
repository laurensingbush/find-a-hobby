"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ModalUserContent.tsx":
/*!*****************************************!*\
  !*** ./components/ModalUserContent.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/si */ \"./node_modules/react-icons/si/index.esm.js\");\n/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fc */ \"./node_modules/react-icons/fc/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/laurensingbush/Documents/VS-Code-Projects/hobby-app/components/ModalUserContent.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar ModalUserContent = function ModalUserContent(_ref) {\n  _s();\n\n  var _session$user, _session$user2;\n\n  var modalRef = _ref.modalRef,\n      accountProvider = _ref.accountProvider;\n\n  var _useSession = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)(),\n      session = _useSession.data;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"ul\", {\n    className: \"modal-user-content-container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"li\", {\n      className: \"provider\",\n      children: accountProvider && (accountProvider.provider === 'github' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_si__WEBPACK_IMPORTED_MODULE_3__.SiGithub, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 61\n      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_fc__WEBPACK_IMPORTED_MODULE_4__.FcGoogle, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 76\n      }, _this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"li\", {\n      className: \"username\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        children: [\"Signed in as \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n          children: (session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.name) || (session === null || session === void 0 ? void 0 : (_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.email)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 33\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"li\", {\n      className: \"btn\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          var _modalRef$current;\n\n          (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)();\n          (_modalRef$current = modalRef.current) === null || _modalRef$current === void 0 ? void 0 : _modalRef$current.closeModal();\n        },\n        children: \"Sign out\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(ModalUserContent, \"lDxflWXANEml6jMwEZO+PAGMNmQ=\", false, function () {\n  return [next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession];\n});\n\n_c = ModalUserContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalUserContent);\n\nvar _c;\n\n$RefreshReg$(_c, \"ModalUserContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vZGFsVXNlckNvbnRlbnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQVNBLElBQU1LLGdCQUFpQyxHQUFHLFNBQXBDQSxnQkFBb0MsT0FBbUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFoQ0MsUUFBZ0MsUUFBaENBLFFBQWdDO0FBQUEsTUFBdEJDLGVBQXNCLFFBQXRCQSxlQUFzQjs7QUFDekUsb0JBQXlCTiwyREFBVSxFQUFuQztBQUFBLE1BQWNPLE9BQWQsZUFBUUMsSUFBUjs7QUFFQSxzQkFDSTtBQUFJLGFBQVMsRUFBQyw4QkFBZDtBQUFBLDRCQUNJO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQSxnQkFDS0YsZUFBZSxLQUNaQSxlQUFlLENBQUNHLFFBQWhCLEtBQTZCLFFBQTdCLGdCQUF3Qyw4REFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXhDLGdCQUF1RCw4REFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRDNDO0FBRHBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU1JO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQSw2QkFFSTtBQUFBLGlEQUFnQjtBQUFBLG9CQUFPLENBQUFGLE9BQU8sU0FBUCxJQUFBQSxPQUFPLFdBQVAsNkJBQUFBLE9BQU8sQ0FBRUcsSUFBVCxnRUFBZUMsSUFBZixNQUF1QkosT0FBdkIsYUFBdUJBLE9BQXZCLHlDQUF1QkEsT0FBTyxDQUFFRyxJQUFoQyxtREFBdUIsZUFBZUUsS0FBdEM7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkosZUFVSTtBQUFJLGVBQVMsRUFBQyxLQUFkO0FBQUEsNkJBQ0k7QUFBUSxlQUFPLEVBQUUsbUJBQU07QUFBQTs7QUFBQ1gsVUFBQUEsd0RBQU87QUFBSSwrQkFBQUksUUFBUSxDQUFDUSxPQUFULHdFQUFrQkMsVUFBbEI7QUFBK0IsU0FBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFrQkgsQ0FyQkQ7O0dBQU1WO1VBQ3VCSjs7O0tBRHZCSTtBQXVCTiwrREFBZUEsZ0JBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbFVzZXJDb250ZW50LnRzeD8wNzgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWZPYmplY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduT3V0IH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCB7IFNpR2l0aHViIH0gZnJvbSAncmVhY3QtaWNvbnMvc2knXG5pbXBvcnQgeyBGY0dvb2dsZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZjJztcbmltcG9ydCB7IE1vZGFsSGFuZGxlIH0gZnJvbSAnLi9Nb2RhbCc7XG5pbXBvcnQgeyBBY2NvdW50UHJvdmlkZXIgfSBmcm9tICcuL05hdkJhcic7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgbW9kYWxSZWY6IFJlZk9iamVjdDxNb2RhbEhhbmRsZT47XG4gICAgYWNjb3VudFByb3ZpZGVyPzogQWNjb3VudFByb3ZpZGVyO1xufTtcblxuY29uc3QgTW9kYWxVc2VyQ29udGVudDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgbW9kYWxSZWYsIGFjY291bnRQcm92aWRlciB9KSA9PiB7XG4gICAgY29uc3QgeyBkYXRhOiBzZXNzaW9ufSA9IHVzZVNlc3Npb24oKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDx1bCBjbGFzc05hbWU9J21vZGFsLXVzZXItY29udGVudC1jb250YWluZXInPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ncHJvdmlkZXInPlxuICAgICAgICAgICAgICAgIHthY2NvdW50UHJvdmlkZXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50UHJvdmlkZXIucHJvdmlkZXIgPT09ICdnaXRodWInID8gPFNpR2l0aHViIC8+IDogPEZjR29vZ2xlIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd1c2VybmFtZSc+XG4gICAgICAgICAgICAgICAgey8qIDxwPlNpZ25lZCBpbiBhcyA8c3Bhbj5sYXVyZW5zaW5nYnVzaGxhdXJlbnNpbmdidXNobGF1cmVuPC9zcGFuPjwvcD4gKi99XG4gICAgICAgICAgICAgICAgPHA+U2lnbmVkIGluIGFzIDxzcGFuPntzZXNzaW9uPy51c2VyPy5uYW1lIHx8IHNlc3Npb24/LnVzZXI/LmVtYWlsfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nYnRuJz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtzaWduT3V0KCk7IG1vZGFsUmVmLmN1cnJlbnQ/LmNsb3NlTW9kYWwoKX19PlxuICAgICAgICAgICAgICAgICAgICBTaWduIG91dFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxVc2VyQ29udGVudDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTZXNzaW9uIiwic2lnbk91dCIsIlNpR2l0aHViIiwiRmNHb29nbGUiLCJNb2RhbFVzZXJDb250ZW50IiwibW9kYWxSZWYiLCJhY2NvdW50UHJvdmlkZXIiLCJzZXNzaW9uIiwiZGF0YSIsInByb3ZpZGVyIiwidXNlciIsIm5hbWUiLCJlbWFpbCIsImN1cnJlbnQiLCJjbG9zZU1vZGFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ModalUserContent.tsx\n");

/***/ })

});