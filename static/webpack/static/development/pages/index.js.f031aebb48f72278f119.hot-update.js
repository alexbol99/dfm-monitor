webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MainComponent/MainComponent.js":
/*!***************************************************!*\
  !*** ./components/MainComponent/MainComponent.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainComponent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainComponent.module.css */ "./components/MainComponent/MainComponent.module.css");
/* harmony import */ var _MainComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RunningLogsList_RunningLogsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RunningLogsList/RunningLogsList */ "./components/RunningLogsList/RunningLogsList.js");
/* harmony import */ var _VegaLiteChart_VegaLiteChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../VegaLiteChart/VegaLiteChart */ "./components/VegaLiteChart/VegaLiteChart.js");
/* harmony import */ var _models_logData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/logData */ "./models/logData.js");
/* harmony import */ var _models_loadFiles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/loadFiles */ "./models/loadFiles.js");

var _jsxFileName = "/Users/alexanderbol/WebstormProjects/dfm-monitor/components/MainComponent/MainComponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




 // import {parse} from "../../models/logParser";



function MainComponent(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      logDataArray = _useState[0],
      setLogDataArray = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      index = _useState2[0],
      setIndex = _useState2[1];

  var logsListData = [];
  var chartData = null;
  var runData = null; // Effect to load all data from AWS s3

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var fetchData = function fetchData() {
      var localDataArray;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_models_loadFiles__WEBPACK_IMPORTED_MODULE_6__["loadFiles"])());

            case 2:
              localDataArray = _context.sent;

              // If all data loaded, render list and select first row
              if (localDataArray.length > 0) {
                setLogDataArray(localDataArray); // trigger rendering
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    };

    if (logDataArray.length === 0) {
      fetchData();
    }
  }); // Callback to set new chart data and update selected index

  var logItemClicked = function logItemClicked(index) {
    setIndex(index); // trigger rendering
  }; // Setup data before rendering


  if (logDataArray.length > 0) {
    logsListData = logDataArray.map(function (data) {
      return Object(_models_logData__WEBPACK_IMPORTED_MODULE_5__["getListData"])(data);
    });
    var localData = logDataArray[index];
    chartData = localData.runningTime ? Object(_models_logData__WEBPACK_IMPORTED_MODULE_5__["getChartData"])(localData) : null;
    runData = Object(_models_logData__WEBPACK_IMPORTED_MODULE_5__["getListData"])(localData);
  }

  return __jsx("main", {
    className: _MainComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.MainComponent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(_RunningLogsList_RunningLogsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    logsListData: logsListData,
    selectedIndex: index,
    logItemClicked: logItemClicked,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), __jsx(_VegaLiteChart_VegaLiteChart__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: chartData,
    runData: runData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MainComponent);

/***/ }),

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


function loadFiles() {
  var logs_api_uri, response, resp_json_str, keys_list, promises, respArray, json_promises, textArray, dataArray;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function loadFiles$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          logs_api_uri = "https://bah2tkltg6.execute-api.eu-central-1.amazonaws.com/test/list";
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(logs_api_uri));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

        case 6:
          resp_json_str = _context.sent;
          keys_list = JSON.parse(resp_json_str.body).keys;
          promises = keys_list.map(function (key) {
            return fetch("".concat(logs_api_uri, "/").concat(key));
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

/***/ })

})
//# sourceMappingURL=index.js.f031aebb48f72278f119.hot-update.js.map