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
  };

  if (props.dataArray.length > 0) {
    setLogDataArray(props.dataArray);
    props.dataArray = [];
  } // Setup data before rendering


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
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(_RunningLogsList_RunningLogsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    logsListData: logsListData,
    selectedIndex: index,
    logItemClicked: logItemClicked,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx(_VegaLiteChart_VegaLiteChart__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: chartData,
    runData: runData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MainComponent);

/***/ })

})
//# sourceMappingURL=index.js.68e9f0a84df1b03c398a.hot-update.js.map