webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MainComponent/MainComponent.js":
/*!***************************************************!*\
  !*** ./components/MainComponent/MainComponent.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainComponent_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainComponent.module.css */ "./components/MainComponent/MainComponent.module.css");
/* harmony import */ var _MainComponent_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RunningLogsList_RunningLogsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../RunningLogsList/RunningLogsList */ "./components/RunningLogsList/RunningLogsList.js");
/* harmony import */ var _VegaLiteChart_VegaLiteChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../VegaLiteChart/VegaLiteChart */ "./components/VegaLiteChart/VegaLiteChart.js");
/* harmony import */ var _models_logData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/logData */ "./models/logData.js");
var _jsxFileName = "/Users/alexanderbol/WebstormProjects/dfm-monitor/components/MainComponent/MainComponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // import {loadFiles} from "../../models/loadFiles";

function MainComponent(props) {
  // const [logDataArray, setLogDataArray] = useState([]);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      index = _useState[0],
      setIndex = _useState[1];

  var logDataArray = props.dataArray;
  var logsListData = [];
  var chartData = null;
  var runData = null; // Effect to load all data from AWS s3
  // useEffect( () => {
  //     const fetchData = async () => {
  //         const localDataArray = await loadFiles();
  //         // If all data loaded, render list and select first row
  //         if (localDataArray.length > 0) {
  //             setLogDataArray(localDataArray);             // trigger rendering
  //         }
  //     };
  //
  //     if (logDataArray.length === 0) {
  //         fetchData();
  //     }
  // });
  // Callback to set new chart data and update selected index

  var logItemClicked = function logItemClicked(index) {
    setIndex(index); // trigger rendering
  }; // Setup data before rendering


  if (logDataArray.length > 0) {
    logsListData = logDataArray.map(function (data) {
      return Object(_models_logData__WEBPACK_IMPORTED_MODULE_4__["getListData"])(data);
    });
    var localData = logDataArray[index];
    chartData = localData.runningTime ? Object(_models_logData__WEBPACK_IMPORTED_MODULE_4__["getChartData"])(localData) : null;
    runData = Object(_models_logData__WEBPACK_IMPORTED_MODULE_4__["getListData"])(localData);
  }

  return __jsx("main", {
    className: _MainComponent_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.MainComponent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(_RunningLogsList_RunningLogsList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    logsListData: logsListData,
    selectedIndex: index,
    logItemClicked: logItemClicked,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), __jsx(_VegaLiteChart_VegaLiteChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: chartData,
    runData: runData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MainComponent);

/***/ }),

/***/ "./models/loadFiles.js":
false,

/***/ "./models/logParser.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/node-fetch/browser.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false

})
//# sourceMappingURL=index.js.1e07f9f0c1e0a99d05ba.hot-update.js.map