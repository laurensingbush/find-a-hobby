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

/***/ "./components/NavBar.tsx":
/*!*******************************!*\
  !*** ./components/NavBar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_hooks_useRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/hooks/useRequest */ \"./lib/hooks/useRequest.ts\");\n/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/si */ \"./node_modules/react-icons/si/index.esm.js\");\n/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/fc */ \"./node_modules/react-icons/fc/index.esm.js\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modal */ \"./components/Modal.tsx\");\n/* harmony import */ var _ModalUserContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ModalUserContent */ \"./components/ModalUserContent.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/laurensingbush/Documents/VS-Code-Projects/hobby-app/components/NavBar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar NavBar = function NavBar() {\n  _s();\n\n  var _useSession = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)(),\n      session = _useSession.data,\n      status = _useSession.status;\n\n  var _useRequest = (0,_lib_hooks_useRequest__WEBPACK_IMPORTED_MODULE_4__.useRequest)(session ? \"/api/auth/provider\" : null),\n      data = _useRequest.data,\n      error = _useRequest.error,\n      isValidating = _useRequest.isValidating;\n\n  console.log('data', data);\n  console.log('error', error);\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  var modalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  var isActive = function isActive(pathname) {\n    return router.pathname === pathname;\n  }; // if (isError) return <Error />\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"nav\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: \"left\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n          href: \"/\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"a\", {\n            className: isActive('/') ? 'bold' : '',\n            children: \"Find-A-Hobby\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: \"right \".concat(!session && status === 'loading' ? 'loading' : 'loaded'),\n        children: session !== null && session !== void 0 && session.user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: \"/my-hobbies\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"a\", {\n              className: \"my-hobbies \".concat(isActive('/my-hobbies') ? 'bold' : ''),\n              children: \"My Hobbies\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            className: \"user-circle\",\n            onClick: function onClick() {\n              var _modalRef$current;\n\n              return (_modalRef$current = modalRef.current) === null || _modalRef$current === void 0 ? void 0 : _modalRef$current.openModal();\n            },\n            children: (data === null || data === void 0 ? void 0 : data.provider) && (data.provider === 'github' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_icons_si__WEBPACK_IMPORTED_MODULE_8__.SiGithub, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 62\n            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_icons_fc__WEBPACK_IMPORTED_MODULE_9__.FcGoogle, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 77\n            }, _this))\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n          href: \"/auth/signin\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"a\", {\n            className: \"signin \".concat(isActive('/auth/signin') ? 'bold' : ''),\n            children: \"Sign in\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 29\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 25\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_5__.default, {\n      ref: modalRef,\n      className: \"user\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ModalUserContent__WEBPACK_IMPORTED_MODULE_6__.default, {\n        modalRef: modalRef,\n        accountProvider: data\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(NavBar, \"xTEl6KiT3Px/eqHcERn3K+qMlgM=\", false, function () {\n  return [next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession, _lib_hooks_useRequest__WEBPACK_IMPORTED_MODULE_4__.useRequest, next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBZ0RJLDhEQUFDLDJDQUFEO0FBQU8sU0FBRyxFQUFFRCxRQUFaO0FBQXNCLGVBQVMsRUFBQyxNQUFoQztBQUFBLDZCQUNJLDhEQUFDLHNEQUFEO0FBQWtCLGdCQUFRLEVBQUVBLFFBQTVCO0FBQXNDLHVCQUFlLEVBQUVQO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaERKO0FBQUEsa0JBREo7QUFzREgsQ0FuRUQ7O0dBQU1GO1VBQ2dDTix5REFDSUMsK0RBR3ZCRjs7O0tBTGJPO0FBcUVOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2QmFyLnRzeD82NzJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQgeyB1c2VSZXF1ZXN0IH0gZnJvbSAnLi4vbGliL2hvb2tzL3VzZVJlcXVlc3QnO1xuaW1wb3J0IHsgU2lHaXRodWIgfSBmcm9tICdyZWFjdC1pY29ucy9zaSdcbmltcG9ydCB7IEZjR29vZ2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmMnO1xuaW1wb3J0IE1vZGFsLCB7IE1vZGFsSGFuZGxlIH0gZnJvbSAnLi9Nb2RhbCc7XG5pbXBvcnQgTW9kYWxVc2VyQ29udGVudCBmcm9tICcuL01vZGFsVXNlckNvbnRlbnQnO1xuXG5leHBvcnQgdHlwZSBBY2NvdW50UHJvdmlkZXIgPSB7XG4gICAgcHJvdmlkZXI6IHN0cmluZztcbn07XG5cbmNvbnN0IE5hdkJhcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc1ZhbGlkYXRpbmcgfSA9IHVzZVJlcXVlc3Q8QWNjb3VudFByb3ZpZGVyPihzZXNzaW9uID8gYC9hcGkvYXV0aC9wcm92aWRlcmAgOiBudWxsKTtcbiAgICBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBtb2RhbFJlZiA9IHVzZVJlZjxNb2RhbEhhbmRsZT4obnVsbCk7XG5cbiAgICBjb25zdCBpc0FjdGl2ZTogKHBhdGhuYW1lOiBzdHJpbmcpID0+IGJvb2xlYW4gPSAocGF0aG5hbWUpID0+XG4gICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gcGF0aG5hbWU7XG4gICAgXG4gICAgXG4gICAgLy8gaWYgKGlzRXJyb3IpIHJldHVybiA8RXJyb3IgLz5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGVmdCc+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXsoaXNBY3RpdmUoJy8nKSA/ICdib2xkJyA6ICcnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmluZC1BLUhvYmJ5XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJpZ2h0ICR7IXNlc3Npb24gJiYgc3RhdHVzID09PSAnbG9hZGluZycgPyAnbG9hZGluZycgOiAnbG9hZGVkJ31gfT5cbiAgICAgICAgICAgICAgICAgICAge3Nlc3Npb24/LnVzZXIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL215LWhvYmJpZXMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YG15LWhvYmJpZXMgJHsoaXNBY3RpdmUoJy9teS1ob2JiaWVzJykgPyAnYm9sZCcgOiAnJyl9YH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNeSBIb2JiaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VzZXItY2lyY2xlJyBvbkNsaWNrPXsoKSA9PiBtb2RhbFJlZi5jdXJyZW50Py5vcGVuTW9kYWwoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGE/LnByb3ZpZGVyICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wcm92aWRlciA9PT0gJ2dpdGh1YicgPyA8U2lHaXRodWIgLz4gOiA8RmNHb29nbGUgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hdXRoL3NpZ25pbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgc2lnbmluICR7KGlzQWN0aXZlKCcvYXV0aC9zaWduaW4nKSA/ICdib2xkJyA6ICcnKX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtgYXV0aCAkeyFzZXNzaW9uICYmIHN0YXR1cyA9PT0gJ2xvYWRpbmcnID8gJ2xvYWRpbmcnIDogJ2xvYWRlZCd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAge3Nlc3Npb24/LnVzZXIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VzZXItY2lyY2xlJyBvbkNsaWNrPXsoKSA9PiBtb2RhbFJlZi5jdXJyZW50Py5vcGVuTW9kYWwoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhPy5wcm92aWRlciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnByb3ZpZGVyID09PSAnZ2l0aHViJyA/IDxTaUdpdGh1YiAvPiA6IDxGY0dvb2dsZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYXV0aC9zaWduaW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9eyhpc0FjdGl2ZSgnL2F1dGgvc2lnbmluJykgPyAnYm9sZCcgOiAnJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDxNb2RhbCByZWY9e21vZGFsUmVmfSBjbGFzc05hbWU9J3VzZXInPlxuICAgICAgICAgICAgICAgIDxNb2RhbFVzZXJDb250ZW50IG1vZGFsUmVmPXttb2RhbFJlZn0gYWNjb3VudFByb3ZpZGVyPXtkYXRhfSAvPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJMaW5rIiwidXNlUm91dGVyIiwidXNlU2Vzc2lvbiIsInVzZVJlcXVlc3QiLCJTaUdpdGh1YiIsIkZjR29vZ2xlIiwiTW9kYWwiLCJNb2RhbFVzZXJDb250ZW50IiwiTmF2QmFyIiwic2Vzc2lvbiIsImRhdGEiLCJzdGF0dXMiLCJlcnJvciIsImlzVmFsaWRhdGluZyIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJtb2RhbFJlZiIsImlzQWN0aXZlIiwicGF0aG5hbWUiLCJ1c2VyIiwiY3VycmVudCIsIm9wZW5Nb2RhbCIsInByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NavBar.tsx\n");

/***/ })

});