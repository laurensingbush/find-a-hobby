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

/***/ "./components/LikeButton.tsx":
/*!***********************************!*\
  !*** ./components/LikeButton.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tooltip */ \"./components/Tooltip.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/laurensingbush/Documents/VS-Code-Projects/hobby-app/components/LikeButton.tsx\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar LikeButton = function LikeButton(_ref) {\n  var currentHobby = _ref.currentHobby,\n      newHobby = _ref.newHobby,\n      handleClick = _ref.handleClick,\n      isLiked = _ref.isLiked;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"like-btn-container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n      children: newHobby ? 'New Hobby' : 'Current Hobby'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"btn\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Tooltip__WEBPACK_IMPORTED_MODULE_1__.default, {\n        type: \"like\",\n        isLiked: isLiked,\n        isNewHobby: newHobby,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n          value: newHobby.toString(),\n          \"data-id\": currentHobby === null || currentHobby === void 0 ? void 0 : currentHobby.id.toString(),\n          onClick: function onClick(e) {\n            return handleClick(e);\n          },\n          disabled: !isLiked ? false : isLiked && isLiked.newHobby === newHobby ? false : true,\n          \"aria-label\": isLiked ? 'remove hobby' : 'add hobby',\n          children: isLiked && isLiked.newHobby === newHobby ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillCheckCircle, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 33\n          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsPlusCircle, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 33\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = LikeButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LikeButton);\n\nvar _c;\n\n$RefreshReg$(_c, \"LikeButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpa2VCdXR0b24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOzs7QUFTQSxJQUFNSSxVQUEyQixHQUFHLFNBQTlCQSxVQUE4QixPQUFzRDtBQUFBLE1BQW5EQyxZQUFtRCxRQUFuREEsWUFBbUQ7QUFBQSxNQUFyQ0MsUUFBcUMsUUFBckNBLFFBQXFDO0FBQUEsTUFBM0JDLFdBQTJCLFFBQTNCQSxXQUEyQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUN0RixzQkFDSTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBLDRCQUNJO0FBQUEsZ0JBQUlGLFFBQVEsR0FBRyxXQUFILEdBQWlCO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw2QkFDSSw4REFBQyw2Q0FBRDtBQUFTLFlBQUksRUFBQyxNQUFkO0FBQXFCLGVBQU8sRUFBRUUsT0FBOUI7QUFBdUMsa0JBQVUsRUFBRUYsUUFBbkQ7QUFBQSwrQkFDSTtBQUNJLGVBQUssRUFBRUEsUUFBUSxDQUFDRyxRQUFULEVBRFg7QUFFSSxxQkFBU0osWUFBVCxhQUFTQSxZQUFULHVCQUFTQSxZQUFZLENBQUVLLEVBQWQsQ0FBaUJELFFBQWpCLEVBRmI7QUFHSSxpQkFBTyxFQUFFLGlCQUFDRSxDQUFEO0FBQUEsbUJBQU9KLFdBQVcsQ0FBQ0ksQ0FBRCxDQUFsQjtBQUFBLFdBSGI7QUFJSSxrQkFBUSxFQUFFLENBQUNILE9BQUQsR0FBVyxLQUFYLEdBQW1CQSxPQUFPLElBQUlBLE9BQU8sQ0FBQ0YsUUFBUixLQUFxQkEsUUFBaEMsR0FBMkMsS0FBM0MsR0FBbUQsSUFKcEY7QUFLSSx3QkFBWUUsT0FBTyxHQUFHLGNBQUgsR0FBb0IsV0FMM0M7QUFBQSxvQkFPS0EsT0FBTyxJQUFJQSxPQUFPLENBQUNGLFFBQVIsS0FBcUJBLFFBQWhDLGdCQUNPLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFAsZ0JBRU8sOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBcUJILENBdEJEOztLQUFNRjtBQXdCTiwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xpa2VCdXR0b24udHN4P2M4NGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFVzZXJMaWtlLCBIb2JieSB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7IEJzUGx1c0NpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2JzJztcbmltcG9ydCB7IEFpRmlsbENoZWNrQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi9Ub29sdGlwJztcblxudHlwZSBQcm9wcyA9IHtcbiAgICBjdXJyZW50SG9iYnk6IEhvYmJ5IHwgdW5kZWZpbmVkO1xuICAgIGhhbmRsZUNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlcjxIVE1MQnV0dG9uRWxlbWVudD47XG4gICAgaXNMaWtlZDogVXNlckxpa2UgfCBudWxsO1xuICAgIG5ld0hvYmJ5OiBib29sZWFuO1xufTtcblxuY29uc3QgTGlrZUJ1dHRvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY3VycmVudEhvYmJ5LCBuZXdIb2JieSwgaGFuZGxlQ2xpY2ssIGlzTGlrZWQgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaWtlLWJ0bi1jb250YWluZXInPlxuICAgICAgICAgICAgPHA+e25ld0hvYmJ5ID8gJ05ldyBIb2JieScgOiAnQ3VycmVudCBIb2JieSd9PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0bic+XG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgdHlwZT0nbGlrZScgaXNMaWtlZD17aXNMaWtlZH0gaXNOZXdIb2JieT17bmV3SG9iYnl9PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3SG9iYnkudG9TdHJpbmcoKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPXtjdXJyZW50SG9iYnk/LmlkLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzTGlrZWQgPyBmYWxzZSA6IGlzTGlrZWQgJiYgaXNMaWtlZC5uZXdIb2JieSA9PT0gbmV3SG9iYnkgPyBmYWxzZSA6IHRydWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17aXNMaWtlZCA/ICdyZW1vdmUgaG9iYnknIDogJ2FkZCBob2JieSd9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc0xpa2VkICYmIGlzTGlrZWQubmV3SG9iYnkgPT09IG5ld0hvYmJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAgIDxBaUZpbGxDaGVja0NpcmNsZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogICA8QnNQbHVzQ2lyY2xlIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlrZUJ1dHRvbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJCc1BsdXNDaXJjbGUiLCJBaUZpbGxDaGVja0NpcmNsZSIsIlRvb2x0aXAiLCJMaWtlQnV0dG9uIiwiY3VycmVudEhvYmJ5IiwibmV3SG9iYnkiLCJoYW5kbGVDbGljayIsImlzTGlrZWQiLCJ0b1N0cmluZyIsImlkIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LikeButton.tsx\n");

/***/ })

});