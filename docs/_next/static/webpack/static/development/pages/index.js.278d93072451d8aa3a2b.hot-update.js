webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/home/russell/projects/covid-19-dash/components/Layout.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar NavLink = function NavLink(_ref) {\n  var title = _ref.title;\n  return __jsx(\"a\", {\n    href: \"#\".concat(title),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"side-nav-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 4\n    }\n  }, title));\n};\n\n_c = NavLink;\n\nvar SideNav = function SideNav(_ref2) {\n  var _ref2$charts = _ref2.charts,\n      charts = _ref2$charts === void 0 ? [] : _ref2$charts,\n      toggleMenu = _ref2.toggleMenu,\n      menuIsOpen = _ref2.menuIsOpen;\n  return __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"fixed header w-100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 4\n    }\n  }, __jsx(\"span\", {\n    className: \"pa8\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 6\n    }\n  }, \"Covid-19 in Ontario\"))));\n};\n\n_c2 = SideNav;\nfunction Layout(_ref3) {\n  _s();\n\n  var children = _ref3.children,\n      _ref3$title = _ref3.title,\n      title = _ref3$title === void 0 ? 'Covid-19 in Ontario' : _ref3$title,\n      _ref3$currentPath = _ref3.currentPath,\n      currentPath = _ref3$currentPath === void 0 ? '/' : _ref3$currentPath,\n      _ref3$charts = _ref3.charts,\n      charts = _ref3$charts === void 0 ? [] : _ref3$charts;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      menuIsOpen = _useState[0],\n      setMenuIsOpen = _useState[1];\n\n  var toggleMenu = function toggleMenu() {\n    setMenuIsOpen(!menuIsOpen);\n  };\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 3\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 4\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }\n  }, title), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }\n  }), __jsx(\"script\", {\n    \"data-name\": \"BMC-Widget\",\n    src: \"https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js\",\n    \"data-id\": \"russellpollari\",\n    \"data-description\": \"Support me on Buy me a coffee!\",\n    \"data-message\": \"Thank you for visiting! Consider buying me a coffee :)\",\n    \"data-color\": \"#FF813F\",\n    \"data-position\": \"left\",\n    \"data-x_margin\": \"18\",\n    \"data-y_margin\": \"18\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }\n  }), __jsx(\"script\", {\n    async: true,\n    src: \"https://www.googletagmanager.com/gtag/js?id=UA-163333616-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }), __jsx(\"script\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }\n  }, \"\\n\\t\\t\\t\\t\\t\\twindow.dataLayer = window.dataLayer || [];\\n\\t\\t\\t\\t\\t\\tfunction gtag(){dataLayer.push(arguments);}\\n\\t\\t\\t\\t\\t\\tgtag('js', new Date());\\n\\t\\t\\t\\t\\t\\tgtag('config', 'UA-163333616-1');\\n\\t\\t\\t\\t\\t\")), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    className: \"main-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 5\n    }\n  }, children)));\n}\n\n_s(Layout, \"+EbEPif16C1nbJm3zubSwtuNxl0=\");\n\n_c3 = Layout;\n;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"NavLink\");\n$RefreshReg$(_c2, \"SideNav\");\n$RefreshReg$(_c3, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIk5hdkxpbmsiLCJ0aXRsZSIsIlNpZGVOYXYiLCJjaGFydHMiLCJ0b2dnbGVNZW51IiwibWVudUlzT3BlbiIsIkxheW91dCIsImNoaWxkcmVuIiwiY3VycmVudFBhdGgiLCJ1c2VTdGF0ZSIsInNldE1lbnVJc09wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUM5QixTQUNDO0FBQUcsUUFBSSxhQUFNQSxLQUFOLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFQSxLQURGLENBREQsQ0FERDtBQU9BLENBUkQ7O0tBQU1ELE87O0FBV04sSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsUUFBNkM7QUFBQSwyQkFBMUNDLE1BQTBDO0FBQUEsTUFBMUNBLE1BQTBDLDZCQUFqQyxFQUFpQztBQUFBLE1BQTdCQyxVQUE2QixTQUE3QkEsVUFBNkI7QUFBQSxNQUFqQkMsVUFBaUIsU0FBakJBLFVBQWlCO0FBQzVELFNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFNLGFBQVMsRUFBQyxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERCxDQURELENBREQsQ0FERDtBQVdBLENBWkQ7O01BQU1ILE87QUFlUyxTQUFTSSxNQUFULFFBS1o7QUFBQTs7QUFBQSxNQUpGQyxRQUlFLFNBSkZBLFFBSUU7QUFBQSwwQkFIRk4sS0FHRTtBQUFBLE1BSEZBLEtBR0UsNEJBSE0scUJBR047QUFBQSxnQ0FGRk8sV0FFRTtBQUFBLE1BRkZBLFdBRUUsa0NBRlksR0FFWjtBQUFBLDJCQURGTCxNQUNFO0FBQUEsTUFERkEsTUFDRSw2QkFETyxFQUNQOztBQUFBLGtCQUNrQ00sc0RBQVEsQ0FBQyxJQUFELENBRDFDO0FBQUEsTUFDS0osVUFETDtBQUFBLE1BQ2lCSyxhQURqQjs7QUFHRixNQUFNTixVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3hCTSxpQkFBYSxDQUFDLENBQUNMLFVBQUYsQ0FBYjtBQUNBLEdBRkQ7O0FBSUEsU0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRSixLQUFSLENBREQsRUFFQztBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFdBQU8sRUFBQyxxQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELEVBR0M7QUFBUSxpQkFBVSxZQUFsQjtBQUErQixPQUFHLEVBQUMseURBQW5DO0FBQTZGLGVBQVEsZ0JBQXJHO0FBQXNILHdCQUFpQixnQ0FBdkk7QUFBd0ssb0JBQWEsd0RBQXJMO0FBQThPLGtCQUFXLFNBQXpQO0FBQW1RLHFCQUFjLE1BQWpSO0FBQXdSLHFCQUFjLElBQXRTO0FBQTJTLHFCQUFjLElBQXpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRCxFQUlDO0FBQVEsU0FBSyxNQUFiO0FBQWMsT0FBRyxFQUFDLDREQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkQsRUFLQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlOQUxELENBREQsRUFlQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VNLFFBREYsQ0FERCxDQWZELENBREQ7QUF1QkE7O0dBbkN1QkQsTTs7TUFBQUEsTTtBQW1DdkIiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5jb25zdCBOYXZMaW5rID0gKHsgdGl0bGUgfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxhIGhyZWY9e2AjJHt0aXRsZX1gfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZS1uYXYtbGlua1wiPlxuXHRcdFx0XHR7dGl0bGV9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2E+XG5cdCk7XG59O1xuXG5cbmNvbnN0IFNpZGVOYXYgPSAoeyBjaGFydHMgPSBbXSwgdG9nZ2xlTWVudSwgbWVudUlzT3BlbiB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PHNwYW4+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGhlYWRlciB3LTEwMFwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJwYThcIj5cblx0XHRcdFx0XHQ8c3Ryb25nPlxuXHRcdFx0XHRcdFx0Q292aWQtMTkgaW4gT250YXJpb1xuXHRcdFx0XHRcdDwvc3Ryb25nPlxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3NwYW4+XG5cdCk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0ICh7XG5cdGNoaWxkcmVuLFxuXHR0aXRsZSA9ICdDb3ZpZC0xOSBpbiBPbnRhcmlvJyxcblx0Y3VycmVudFBhdGggPSAnLycsXG5cdGNoYXJ0cyA9IFtdLFxufSkge1xuXHRjb25zdCBbbWVudUlzT3Blbiwgc2V0TWVudUlzT3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuXHRjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xuXHRcdHNldE1lbnVJc09wZW4oIW1lbnVJc09wZW4pO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG5cdFx0XHRcdDxzY3JpcHQgZGF0YS1uYW1lPVwiQk1DLVdpZGdldFwiIHNyYz1cImh0dHBzOi8vY2RuanMuYnV5bWVhY29mZmVlLmNvbS8xLjAuMC93aWRnZXQucHJvZC5taW4uanNcIiBkYXRhLWlkPVwicnVzc2VsbHBvbGxhcmlcIiBkYXRhLWRlc2NyaXB0aW9uPVwiU3VwcG9ydCBtZSBvbiBCdXkgbWUgYSBjb2ZmZWUhXCIgZGF0YS1tZXNzYWdlPVwiVGhhbmsgeW91IGZvciB2aXNpdGluZyEgQ29uc2lkZXIgYnV5aW5nIG1lIGEgY29mZmVlIDopXCIgZGF0YS1jb2xvcj1cIiNGRjgxM0ZcIiBkYXRhLXBvc2l0aW9uPVwibGVmdFwiIGRhdGEteF9tYXJnaW49XCIxOFwiIGRhdGEteV9tYXJnaW49XCIxOFwiPjwvc2NyaXB0PlxuXHRcdFx0XHQ8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9VUEtMTYzMzMzNjE2LTFcIj48L3NjcmlwdD5cblx0XHRcdFx0PHNjcmlwdD5cblx0XHRcdFx0XHR7YFxuXHRcdFx0XHRcdFx0d2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG5cdFx0XHRcdFx0XHRmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XG5cdFx0XHRcdFx0XHRndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuXHRcdFx0XHRcdFx0Z3RhZygnY29uZmlnJywgJ1VBLTE2MzMzMzYxNi0xJyk7XG5cdFx0XHRcdFx0YH1cblx0XHRcdFx0PC9zY3JpcHQ+XG5cdFx0XHQ8L0hlYWQ+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxuXHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

})