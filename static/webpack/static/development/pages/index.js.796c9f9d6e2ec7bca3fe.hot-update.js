webpackHotUpdate("static/development/pages/index.js",{

/***/ "./models/loadFiles.js":
/*!*****************************!*\
  !*** ./models/loadFiles.js ***!
  \*****************************/
/*! exports provided: loadFiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFiles", function() { return loadFiles; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logParser */ "./models/logParser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);



function loadFiles() {
  var logs_api_uri, response, resp_json_str, keys_list, promises, respArray, json_promises, textArray, dataArray;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function loadFiles$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          logs_api_uri = "https://bah2tkltg6.execute-api.eu-central-1.amazonaws.com/test/list";
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(node_fetch__WEBPACK_IMPORTED_MODULE_2___default()(logs_api_uri));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

        case 6:
          resp_json_str = _context.sent;
          keys_list = JSON.parse(resp_json_str.body).keys;
          promises = keys_list.map(function (key) {
            return node_fetch__WEBPACK_IMPORTED_MODULE_2___default()("".concat(logs_api_uri, "/").concat(key));
          });
          _context.next = 11;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Promise.all(promises));

        case 11:
          respArray = _context.sent;
          json_promises = respArray.map(function (resp) {
            return resp.json();
          });
          _context.next = 15;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Promise.all(json_promises));

        case 15:
          textArray = _context.sent;
          dataArray = textArray.map(function (e) {
            return Object(_logParser__WEBPACK_IMPORTED_MODULE_1__["parse"])(e.text);
          });
          dataArray.forEach(function (data, i) {
            return data.key = keys_list[i];
          });
          dataArray.sort(function (a, b) {
            return new Date(b.runningDate) - new Date(a.runningDate);
          });
          return _context.abrupt("return", dataArray);

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ })

})
//# sourceMappingURL=index.js.796c9f9d6e2ec7bca3fe.hot-update.js.map