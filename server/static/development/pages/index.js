module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MainComponent/MainComponent.js":
/*!***************************************************!*\
  !*** ./components/MainComponent/MainComponent.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
  const {
    0: index,
    1: setIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  let logDataArray = props.dataArray;
  let logsListData = [];
  let chartData = null;
  let runData = null; // Effect to load all data from AWS s3
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

  const logItemClicked = index => {
    setIndex(index); // trigger rendering
  }; // Setup data before rendering


  if (logDataArray.length > 0) {
    logsListData = logDataArray.map(data => Object(_models_logData__WEBPACK_IMPORTED_MODULE_4__["getListData"])(data));
    let localData = logDataArray[index];
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

/***/ "./components/MainComponent/MainComponent.module.css":
/*!***********************************************************!*\
  !*** ./components/MainComponent/MainComponent.module.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"MainComponent": "MainComponent_MainComponent__18PG5"
};

/***/ }),

/***/ "./components/RunningLogsList/RunningLogListItem/RunningLogListItem.js":
/*!*****************************************************************************!*\
  !*** ./components/RunningLogsList/RunningLogListItem/RunningLogListItem.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RunningLogListItem_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RunningLogListItem.module.css */ "./components/RunningLogsList/RunningLogListItem/RunningLogListItem.module.css");
/* harmony import */ var _RunningLogListItem_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_RunningLogListItem_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/alexanderbol/WebstormProjects/dfm-monitor/components/RunningLogsList/RunningLogListItem/RunningLogListItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function RunningLogsListItem(props) {
  const refElement = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (props.selected) {
      scrollIntoView();
    }
  });
  let style = props.selected ? _RunningLogListItem_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.RunningLogListItemClicked : _RunningLogListItem_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.RunningLogListItem;
  style = props.batchFailed ? `${style} ${_RunningLogListItem_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.RunningLogListItemFailed}` : style;
  let object_url = "https://s3.console.aws.amazon.com/s3/object/acp-cloud-logs/" + props.data.key;

  const scrollIntoView = () => {
    const tableBody = refElement.current.parentElement;
    const table = tableBody.parentElement;
    const tableClientRect = table.getBoundingClientRect();
    const rowClientReact = refElement.current.getBoundingClientRect();

    if (rowClientReact.bottom > tableClientRect.bottom) {
      refElement.current.scrollIntoView(false);
    }

    if (rowClientReact.top < tableClientRect.top) {
      refElement.current.scrollIntoView(true);
    }
  };

  return __jsx("tr", {
    className: style,
    onClick: props.itemClicked,
    ref: refElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, props.data.runningDate), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, props.data.jobName), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, props.data.step), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, props.data.checklist), __jsx("td", {
    className: _RunningLogListItem_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.RunningLogListItemNumeric,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, props.data.actionsNum), __jsx("td", {
    className: _RunningLogListItem_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.RunningLogListItemNumeric,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, props.data.layersNum), __jsx("td", {
    className: _RunningLogListItem_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.RunningLogListItemNumeric,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, props.data.batchJobsNum), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, props.data.runningTime || "Failed"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: object_url,
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, props.data.key)));
}

/* harmony default export */ __webpack_exports__["default"] = (RunningLogsListItem);

/***/ }),

/***/ "./components/RunningLogsList/RunningLogListItem/RunningLogListItem.module.css":
/*!*************************************************************************************!*\
  !*** ./components/RunningLogsList/RunningLogListItem/RunningLogListItem.module.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"RunningLogListItem": "RunningLogListItem_RunningLogListItem__1rd6C",
	"RunningLogListItemClicked": "RunningLogListItem_RunningLogListItemClicked__3z7Ap",
	"RunningLogListItemFailed": "RunningLogListItem_RunningLogListItemFailed__1eblQ",
	"RunningLogListItemNumeric": "RunningLogListItem_RunningLogListItemNumeric__3o28S"
};

/***/ }),

/***/ "./components/RunningLogsList/RunningLogsList.js":
/*!*******************************************************!*\
  !*** ./components/RunningLogsList/RunningLogsList.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RunningLogsList_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RunningLogsList.module.css */ "./components/RunningLogsList/RunningLogsList.module.css");
/* harmony import */ var _RunningLogsList_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_RunningLogsList_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RunningLogListItem_RunningLogListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RunningLogListItem/RunningLogListItem */ "./components/RunningLogsList/RunningLogListItem/RunningLogListItem.js");
var _jsxFileName = "/Users/alexanderbol/WebstormProjects/dfm-monitor/components/RunningLogsList/RunningLogsList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function RunningLogsList(props) {
  var _props$logsListData;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const handleKeyDown = e => {
      switch (e.code) {
        case "ArrowDown":
          e.stopPropagation();
          e.preventDefault();

          if (props.selectedIndex < props.logsListData.length - 1) {
            props.logItemClicked(props.selectedIndex + 1);
          }

          break;

        case "ArrowUp":
          e.stopPropagation();
          e.preventDefault();

          if (props.selectedIndex > 0) {
            props.logItemClicked(props.selectedIndex - 1);
          }

          break;

        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });
  return __jsx("div", {
    className: _RunningLogsList_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.RunningLogsList,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, "Amazon s3 >"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://s3.console.aws.amazon.com/s3/buckets/acp-cloud-logs/?region=eu-central-1&tab=overview#",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, "acp-cloud-logs"))), __jsx("table", {
    className: _RunningLogsList_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.RunningLogsListTable,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, "Running date"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, "Job Name"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, "Step"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, "Checklist"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }, "# Actions"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, "# Layers"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, "# ACPs"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, "Running Time"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, "S3 bucket key (filename)"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, (_props$logsListData = props.logsListData) === null || _props$logsListData === void 0 ? void 0 : _props$logsListData.map((data, index) => __jsx(_RunningLogListItem_RunningLogListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: index,
    data: data,
    selected: props.selectedIndex === index,
    batchFailed: !!data.errorTime,
    itemClicked: () => props.logItemClicked(index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (RunningLogsList);

/***/ }),

/***/ "./components/RunningLogsList/RunningLogsList.module.css":
/*!***************************************************************!*\
  !*** ./components/RunningLogsList/RunningLogsList.module.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"RunningLogsList": "RunningLogsList_RunningLogsList__1Lu0w",
	"RunningLogsListTable": "RunningLogsList_RunningLogsListTable__3Z3D4",
	"fadeIn": "RunningLogsList_fadeIn__2InzZ"
};

/***/ }),

/***/ "./components/VegaLiteChart/VegaLiteChart.js":
/*!***************************************************!*\
  !*** ./components/VegaLiteChart/VegaLiteChart.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_vega__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-vega */ "react-vega");
/* harmony import */ var react_vega__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_vega__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VegaLiteChart_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VegaLiteChart.module.css */ "./components/VegaLiteChart/VegaLiteChart.module.css");
/* harmony import */ var _VegaLiteChart_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_VegaLiteChart_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/alexanderbol/WebstormProjects/dfm-monitor/components/VegaLiteChart/VegaLiteChart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function VegaLiteChart(props) {
  var _props$runData;

  const spec = {
    title: (_props$runData = props.runData) === null || _props$runData === void 0 ? void 0 : _props$runData.jobName,
    data: {
      values: props.data
    },
    mark: {
      type: "bar",
      tooltip: []
    },
    encoding: {
      x: {
        type: "temporal",
        field: "StartDate",
        timeUnit: "hoursminutesseconds"
      },
      x2: {
        type: "temporal",
        field: "EndDate",
        timeUnit: "hoursminutesseconds"
      },
      y: {
        type: "nominal",
        field: "Index",
        sort: null
      },
      color: {
        field: "Object"
      }
    },
    width: 800,
    // height: 800,
    autosize: "fit"
  };
  return __jsx("div", {
    className: _VegaLiteChart_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.VegaLiteChart,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, props.data && props.runData.runningTime ? __jsx(react_vega__WEBPACK_IMPORTED_MODULE_1__["VegaLite"], {
    spec: spec,
    data: props.data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }) : "No data");
}

/* harmony default export */ __webpack_exports__["default"] = (VegaLiteChart);

/***/ }),

/***/ "./components/VegaLiteChart/VegaLiteChart.module.css":
/*!***********************************************************!*\
  !*** ./components/VegaLiteChart/VegaLiteChart.module.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"VegaLiteChart": "VegaLiteChart_VegaLiteChart__C_AQF"
};

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
/* harmony import */ var _logParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logParser */ "./models/logParser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);


async function loadFiles() {
  let logs_api_uri = "https://bah2tkltg6.execute-api.eu-central-1.amazonaws.com/test/list";
  let response = await node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(logs_api_uri);
  let resp_json_str = await response.json();
  let keys_list = JSON.parse(resp_json_str.body).keys;
  let promises = keys_list.map(key => node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`${logs_api_uri}/${key}`));
  let respArray = await Promise.all(promises);
  let json_promises = respArray.map(resp => resp.json());
  let textArray = await Promise.all(json_promises);
  let dataArray = textArray.map(e => Object(_logParser__WEBPACK_IMPORTED_MODULE_0__["parse"])(e.text));
  dataArray.forEach((data, i) => data.key = keys_list[i]);
  dataArray.sort(function (a, b) {
    return new Date(b.runningDate) - new Date(a.runningDate);
  });
  return dataArray;
}

/***/ }),

/***/ "./models/logData.js":
/*!***************************!*\
  !*** ./models/logData.js ***!
  \***************************/
/*! exports provided: getChartData, getListData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartData", function() { return getChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListData", function() { return getListData; });
function getChartData(data) {
  let stats = data.batch.map(action => {
    let timestamp = data.acpTime.find(a => a.Stage === action.Stage && a.Index === action.StageIndex);
    return {
      Object: timestamp.Succeed ? "Acp" : "Acp Failed",
      ActNum: action.ActNum,
      Name: action.AnalysisName,
      Layer: action.LayerName,
      Stage: action.Stage,
      Index: action.Stage + '_' + action.StageIndex,
      StartTime: timestamp ? timestamp.StartTime : "",
      CompleteTime: timestamp ? timestamp.CompleteTime : "",
      Time: time_diff(timestamp.StartTime, timestamp.CompleteTime),
      StartDate: new Date(`01/01/1970 ${timestamp.StartTime}`),
      EndDate: new Date(`01/01/1970 ${timestamp.CompleteTime}`)
    };
  });
  let uploadObj = {
    Object: "Upload",
    Name: "Upload",
    Index: -1,
    StartDate: new Date(`01/01/1970 ${data.uploadTime.StartTime}`),
    EndDate: new Date(`01/01/1970 ${data.uploadTime.CompleteTime}`)
  };
  let splitterObj = {
    Object: "Splitter",
    Name: "Splitter",
    Index: 0,
    StartDate: new Date(`01/01/1970 ${data.splitterTime.StartTime}`),
    EndDate: new Date(`01/01/1970 ${data.splitterTime.CompleteTime}`)
  };
  let mergerObj;

  if (data.mergerTime.StartTime && data.mergerTime.CompleteTime) {
    mergerObj = {
      Object: "Merger",
      Name: "Merger",
      Index: stats.length + 1,
      StartDate: new Date(`01/01/1970 ${data.mergerTime.StartTime}`),
      EndDate: new Date(`01/01/1970 ${data.mergerTime.CompleteTime}`)
    };
  }

  let downloadObj;

  if (data.downloadTime.StartTime && data.downloadTime.CompleteTime) {
    downloadObj = {
      Object: "Download",
      Name: "Download",
      Index: stats.length + 2,
      StartDate: new Date(`01/01/1970 ${data.downloadTime.StartTime}`),
      EndDate: new Date(`01/01/1970 ${data.downloadTime.CompleteTime}`)
    };
  }

  stats = [uploadObj, splitterObj, ...stats];
  if (mergerObj) stats = [...stats, mergerObj];
  if (downloadObj) stats = [...stats, downloadObj];
  return stats;
}
function getListData(localData) {
  const actionsNum = localData === null || localData === void 0 ? void 0 : localData.batch[localData.batch.length - 1].ActNum;
  const layersNum = new Set(localData === null || localData === void 0 ? void 0 : localData.batch.map(action => action.LayerName)).size;
  return {
    runningDate: localData === null || localData === void 0 ? void 0 : localData.runningDate,
    jobName: localData === null || localData === void 0 ? void 0 : localData.jobName,
    step: localData === null || localData === void 0 ? void 0 : localData.batch[0].StepName,
    checklist: localData === null || localData === void 0 ? void 0 : localData.batch[0].ChecklistName,
    actionsNum: actionsNum,
    layersNum: layersNum,
    runningTime: localData === null || localData === void 0 ? void 0 : localData.runningTime,
    batchJobsNum: localData === null || localData === void 0 ? void 0 : localData.batch.length,
    key: localData === null || localData === void 0 ? void 0 : localData.key,
    errorTime: localData === null || localData === void 0 ? void 0 : localData.errorTime
  };
}

function time_diff(start_time, complete_time) {
  let start = start_time.split(':').map(t => Number(t));
  let start_sec = start[0] * 3600 + start[1] * 60 + start[2];
  let complete = complete_time.split(':').map(t => Number(t));
  let complete_sec = complete[0] * 3600 + complete[1] * 60 + complete[2];
  let diff_sec = complete_sec - start_sec;
  return diff_sec;
}

/***/ }),

/***/ "./models/logParser.js":
/*!*****************************!*\
  !*** ./models/logParser.js ***!
  \*****************************/
/*! exports provided: parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
function parse(text) {
  const row_lines = text.split('\n');
  const arrayOfTimestamps = timestamps(row_lines);
  const errorTimeString = errorTime(arrayOfTimestamps);
  return {
    runningDate: runningDate(row_lines),
    runningTime: runningTime(row_lines, errorTimeString),
    jobName: jobName(row_lines),
    batch: batch(arrayOfTimestamps),
    uploadTime: uploadTime(arrayOfTimestamps),
    splitterTime: splitterTime(arrayOfTimestamps),
    acpTime: acpTime(arrayOfTimestamps),
    mergerTime: mergerTime(arrayOfTimestamps),
    downloadTime: downloadTime(arrayOfTimestamps),
    errorTime: errorTimeString
  };
}

function jobName(row_lines) {
  const job_line = row_lines.filter(line => line.match("Job:"))[0];
  const job_name = job_line.split(' ')[1];
  return job_name;
}

function runningDate(row_lines) {
  let arrayOfLines = row_lines.filter(line => line.match("time"));
  let splitArray = arrayOfLines[0].split(' ');
  let [day, month, year] = splitArray[1].split(':')[1].split('/');
  if (day.length > 2) day = day.substr(1);
  let [hour, min] = splitArray[2].split(':');
  if (hour.length > 2) hour = hour.substr(1);
  if (min.length > 2) min = min.substr(1);
  return new Date(Date.UTC(year, month - 1, day, hour, min)).toUTCString();
}

function runningTime(row_lines, errorTime) {
  let job_started_line = row_lines.filter(line => line.match("Ready for commands"))[0];
  let start_time = JSON.parse(job_started_line).time;
  let job_ended_line = row_lines.filter(line => line.match("Job is ready"));
  let end_time = job_ended_line.length > 0 ? JSON.parse(job_ended_line).time : errorTime;
  return secToHHMMSS(time_diff(start_time, end_time));
} // export function getChartData(data) {
//     let stats = data.batch.map(action => {
//         let timestamp = data.acpTime.find(
//             a => a.Stage === action.Stage && a.Index === action.StageIndex
//         );
//         return {
//             Object: "Acp",
//             ActNum: action.ActNum,
//             Name: action.AnalysisName,
//             Layer: action.LayerName,
//             Stage: action.Stage,
//             Index: action.StageIndex,
//             StartTime: timestamp ? timestamp.StartTime : "",
//             CompleteTime: timestamp ? timestamp.CompleteTime : "",
//             Time: time_diff(timestamp.StartTime, timestamp.CompleteTime),
//             StartDate: new Date(`01/01/1970 ${timestamp.StartTime}`),
//             EndDate: new Date(`01/01/1970 ${timestamp.CompleteTime}`)
//         };
//     });
//     let splitterObj = {
//         Object: "Splitter",
//         Name: "Splitter",
//         Index: 0,
//         StartDate: new Date(`01/01/1970 ${data.splitterTime.StartTime}`),
//         EndDate: new Date(`01/01/1970 ${data.splitterTime.CompleteTime}`)
//     };
//     let mergerObj = {
//         Object: "Merger",
//         Name: "Merger",
//         Index: stats.length + 1,
//         StartDate: new Date(`01/01/1970 ${data.mergerTime.StartTime}`),
//         EndDate: new Date(`01/01/1970 ${data.mergerTime.CompleteTime}`)
//     };
//     let uploadObj = {
//         Object: "Upload",
//         Name: "Upload",
//         Index: -1,
//         StartDate: new Date(`01/01/1970 ${data.uploadTime.StartTime}`),
//         EndDate: new Date(`01/01/1970 ${data.uploadTime.CompleteTime}`)
//     };
//     let downloadObj = {
//         Object: "Download",
//         Name: "Download",
//         Index: stats.length + 2,
//         StartDate: new Date(`01/01/1970 ${data.downloadTime.StartTime}`),
//         EndDate: new Date(`01/01/1970 ${data.downloadTime.CompleteTime}`)
//     };
//     // stats = [uploadObj, splitterObj, ...stats, mergerObj, downloadTime];
//     stats = [uploadObj, splitterObj, ...stats, mergerObj, downloadObj];
//     return stats;
// }


function batch(arrayOfTimestamps) {
  let batchObject = arrayOfTimestamps.filter(d => d.type === "Batch")[0];
  return JSON.parse(batchObject.message);
}

function uploadTime(arrayOfTimestamps) {
  let uploadTime = {
    StartTime: arrayOfTimestamps.find(d => d.object === "WebClient" && d.message === "Job was registered").time,
    CompleteTime: arrayOfTimestamps.find(d => d.object === "WebClient" && d.message === "After send").time
  };
  return uploadTime;
}

function splitterTime(arrayOfTimestamps) {
  let splitter = arrayOfTimestamps.filter(d => d.object === "Splitter");
  let s = {
    StartTime: toLocal(splitter.find(s => s.message === "Splitter started").time),
    CompleteTime: toLocal(splitter.find(s => s.message === "End of Split").time)
  };
  return s;
}

function mergerTime(arrayOfTimestamps) {
  let merger = arrayOfTimestamps.filter(d => d.object === "Merger"); // if (!merger) return null

  let mergerStartMessage = merger.find(s => s.message === "Preparing job for merge");
  let mergerCompleteMessage = merger.find(s => s.message === "Moving Job to S3");
  let s = {
    StartTime: mergerStartMessage ? toLocal(mergerStartMessage.time) : null,
    CompleteTime: mergerCompleteMessage ? toLocal(mergerCompleteMessage.time) : null
  };
  return s;
}

function downloadTime(arrayOfTimestamps) {
  let downloadStartMessage = arrayOfTimestamps.find(d => d.object === "WebClient" && d.message === "Download Data");
  let downloadCompleteMessage = arrayOfTimestamps.find(d => d.object === "WebClient" && d.message === "Job is ready");
  let downloadTime = {
    StartTime: downloadStartMessage ? downloadStartMessage.time : null,
    CompleteTime: downloadCompleteMessage ? downloadCompleteMessage.time : null
  };
  return downloadTime;
}

function acpTime(arrayOfTimestamps) {
  let errorTimeStr = errorTime(arrayOfTimestamps);
  let acp = arrayOfTimestamps.filter(d => d.type === "Progress");
  let acp_transformed = acp.map(action => {
    let message = action.message.split(' ');
    let localTime = toLocal(action.time);
    return {
      Time: localTime,
      Step: message[0],
      Stage: message[1].split(':')[1],
      Index: Number(message[2].split(':')[1])
    };
  });
  let acp_started = acp_transformed.filter(action => action.Step === "Starting").map(action => {
    return {
      Stage: action.Stage,
      Index: action.Index,
      StartTime: action.Time
    };
  });
  let acp_completed = acp_transformed.filter(action => action.Step === "Completed").map(action => {
    return {
      Stage: action.Stage,
      Index: action.Index,
      CompleteTime: action.Time
    };
  });
  let acp_timestamp = acp_started.map(action => {
    let completeTimeMessage = acp_completed.find(c => c.Stage === action.Stage && c.Index === action.Index);
    return {
      Stage: action.Stage,
      Index: action.Index,
      StartTime: action.StartTime,
      CompleteTime: completeTimeMessage ? completeTimeMessage.CompleteTime : errorTimeStr,
      Succeed: !!completeTimeMessage
    };
  });
  return acp_timestamp;
}

function errorTime(arrayOfTimestamps) {
  let errorMessage = arrayOfTimestamps.find(d => d.object === "WebClient" && d.type === "ERROR");
  let errorTime = errorMessage ? errorMessage.time : null;
  return errorTime;
}

function timestamps(row_lines) {
  let arrayOfLines = row_lines.filter(line => line.match("time"));
  let tmpArrayOfLines = [...arrayOfLines];
  tmpArrayOfLines.splice(0, 1);
  return tmpArrayOfLines.map(line => JSON.parse(line));
}

function time_diff(start_time, complete_time) {
  let start = start_time.split(':').map(t => Number(t));
  let start_sec = start[0] * 3600 + start[1] * 60 + start[2];
  let complete = complete_time.split(':').map(t => Number(t));
  let complete_sec = complete[0] * 3600 + complete[1] * 60 + complete[2];
  let diff_sec = complete_sec - start_sec;
  return diff_sec;
}

function secToHHMMSS(time) {
  return new Date(time * 1000).toISOString().substr(11, 8);
}

function toLocal(hhmmss) {
  if (!hhmmss) return null;
  let [HH, MM, SS] = hhmmss.split(':');
  let local = [Number(HH) + 3, MM, SS].join(':');
  return local;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MainComponent_MainComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MainComponent/MainComponent */ "./components/MainComponent/MainComponent.js");
/* harmony import */ var _models_loadFiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/loadFiles */ "./models/loadFiles.js");
var _jsxFileName = "/Users/alexanderbol/WebstormProjects/dfm-monitor/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Home({
  localDataArray
}) {
  return __jsx("div", {
    className: "jsx-1799183244" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, __jsx("title", {
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 15
    }
  }, "DFM Monitor"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 15
    }
  })), __jsx("main", {
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "jsx-1799183244" + " " + "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }, "DFM Monitor"), __jsx(_components_MainComponent_MainComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    dataArray: localDataArray,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  })), __jsx("footer", {
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, "Powered by", ' ', __jsx("img", {
    src: "/vercel.svg",
    alt: "Vercel Logo",
    className: "jsx-1799183244" + " " + "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 19
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3345803726",
    __self: this
  }, ".container.jsx-1799183244{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}main.jsx-1799183244{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1799183244{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1799183244 img.jsx-1799183244{margin-left:0.5rem;}footer.jsx-1799183244 a.jsx-1799183244{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-1799183244{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-1799183244 a.jsx-1799183244{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-1799183244 a.jsx-1799183244:hover,.title.jsx-1799183244 a.jsx-1799183244:focus,.title.jsx-1799183244 a.jsx-1799183244:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-1799183244{margin:0;line-height:1.15;font-size:4rem;}.title.jsx-1799183244,.description.jsx-1799183244{text-align:center;}.description.jsx-1799183244{line-height:1.5;font-size:1.5rem;}code.jsx-1799183244{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}.grid.jsx-1799183244{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem;}.card.jsx-1799183244{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}.card.jsx-1799183244:hover,.card.jsx-1799183244:focus,.card.jsx-1799183244:active{color:#0070f3;border-color:#0070f3;}.card.jsx-1799183244 h3.jsx-1799183244{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-1799183244 p.jsx-1799183244{margin:0;font-size:1.25rem;line-height:1.5;}.logo.jsx-1799183244{height:1em;}@media (max-width:600px){.grid.jsx-1799183244{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kZXJib2wvV2Vic3Rvcm1Qcm9qZWN0cy9kZm0tbW9uaXRvci9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQnNCLEFBRzRCLEFBU0YsQUFTSixBQVNRLEFBSU4sQUFNQyxBQUtBLEFBT1ksQUFJakIsQUFPUyxBQUlGLEFBS0csQUFTTixBQVVELEFBY0UsQUFLSSxBQUtULEFBTUUsQUFLRSxTQXJFSSxBQTJEQyxFQTlGTCxBQW9HZixBQUswQixDQW5DVCxFQW5ETSxBQUtBLEFBNERBLENBN0ZkLENBdURVLENBaEVBLENBNERuQixBQStDbUIsQ0FoRm5CLEFBMENvQixLQWxEVyxFQW1DZCxDQTJEQyxNQWhEbEIsQ0FoRWUsQ0FzR2YsQUFLQSxFQXRDa0IsSUFmbEIsRUEyREEsS0F4R2UsS0FVQSxBQW1ESSxPQXRCbkIsSUFYQSxBQUtBLE1BOEJzRSxJQTFDN0MsQUErQ0osSUFXSixXQW1DZixJQWxDZ0IsZUF4Rk0sQ0F5RlIsYUFoRlEsQ0FpRkQsSUF2RUUsd0NBMERBLE1BL0NKLEFBNkRNLGFBMUZGLEtBdUV6QixPQW9CcUIsRUFsRkksaUJBbUY4QixTQXpFbEMsd0NBV3JCLEFBK0NpQixtQkE1RUksY0FTQSxvQkFVckIsSUEyRGtCLE1BY2xCLFVBYmtCLGdCQUNsQix1QkEvRUEsY0FTQSIsImZpbGUiOiIvVXNlcnMvYWxleGFuZGVyYm9sL1dlYnN0b3JtUHJvamVjdHMvZGZtLW1vbml0b3IvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTWFpbkNvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9NYWluQ29tcG9uZW50L01haW5Db21wb25lbnRcIlxuaW1wb3J0IHtsb2FkRmlsZXN9IGZyb20gXCIuLi9tb2RlbHMvbG9hZEZpbGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe2xvY2FsRGF0YUFycmF5fSkge1xuICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgPHRpdGxlPkRGTSBNb25pdG9yPC90aXRsZT5cbiAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIi8+XG4gICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgREZNIE1vbml0b3JcbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPE1haW5Db21wb25lbnQgZGF0YUFycmF5PXtsb2NhbERhdGFBcnJheX0vPlxuXG4gICAgICAgICAgPC9tYWluPlxuXG4gICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBQb3dlcmVkIGJ5eycgJ31cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIGNsYXNzTmFtZT1cImxvZ29cIi8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Zvb3Rlcj5cblxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIgaW1nIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIGEge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSBhIHtcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUgYTpob3ZlcixcbiAgICAgICAgLnRpdGxlIGE6Zm9jdXMsXG4gICAgICAgIC50aXRsZSBhOmFjdGl2ZSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUsXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgY29kZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcbiAgICAgICAgICAgIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlkIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XG4gICAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkOmhvdmVyLFxuICAgICAgICAuY2FyZDpmb2N1cyxcbiAgICAgICAgLmNhcmQ6YWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCBoMyB7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgLmdyaWQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xuICAgICAgICB9XG5cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIC8vIEdldCBleHRlcm5hbCBkYXRhIGZyb20gdGhlIGZpbGUgc3lzdGVtLCBBUEksIERCLCBldGMuXG4gICAgY29uc3QgbG9jYWxEYXRhQXJyYXkgPSBhd2FpdCBsb2FkRmlsZXMoKTtcblxuICAgIC8vIFRoZSB2YWx1ZSBvZiB0aGUgYHByb3BzYCBrZXkgd2lsbCBiZVxuICAgIC8vICBwYXNzZWQgdG8gdGhlIGBIb21lYCBjb21wb25lbnRcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgbG9jYWxEYXRhQXJyYXlcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/alexanderbol/WebstormProjects/dfm-monitor/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3379920139",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kZXJib2wvV2Vic3Rvcm1Qcm9qZWN0cy9kZm0tbW9uaXRvci9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrSzZCLEFBSXFCLEFBUVksVUFQYixTQUdHLEdBS2QsbUlBSkEiLCJmaWxlIjoiL1VzZXJzL2FsZXhhbmRlcmJvbC9XZWJzdG9ybVByb2plY3RzL2RmbS1tb25pdG9yL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE1haW5Db21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpbkNvbXBvbmVudC9NYWluQ29tcG9uZW50XCJcbmltcG9ydCB7bG9hZEZpbGVzfSBmcm9tIFwiLi4vbW9kZWxzL2xvYWRGaWxlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtsb2NhbERhdGFBcnJheX0pIHtcbiAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgIDx0aXRsZT5ERk0gTW9uaXRvcjwvdGl0bGU+XG4gICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIvPlxuICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIERGTSBNb25pdG9yXG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxNYWluQ29tcG9uZW50IGRhdGFBcnJheT17bG9jYWxEYXRhQXJyYXl9Lz5cblxuICAgICAgICAgIDwvbWFpbj5cblxuICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUG93ZXJlZCBieXsnICd9XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiBjbGFzc05hbWU9XCJsb2dvXCIvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9mb290ZXI+XG5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgcGFkZGluZzogNXJlbSAwO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIGltZyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUgYSB7XG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIGE6aG92ZXIsXG4gICAgICAgIC50aXRsZSBhOmZvY3VzLFxuICAgICAgICAudGl0bGUgYTphY3RpdmUge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlLFxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvZGUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXG4gICAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgZmxleC1iYXNpczogNDUlO1xuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZDpob3ZlcixcbiAgICAgICAgLmNhcmQ6Zm9jdXMsXG4gICAgICAgIC5jYXJkOmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQgaDMge1xuICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIC5ncmlkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICAvLyBHZXQgZXh0ZXJuYWwgZGF0YSBmcm9tIHRoZSBmaWxlIHN5c3RlbSwgQVBJLCBEQiwgZXRjLlxuICAgIGNvbnN0IGxvY2FsRGF0YUFycmF5ID0gYXdhaXQgbG9hZEZpbGVzKCk7XG5cbiAgICAvLyBUaGUgdmFsdWUgb2YgdGhlIGBwcm9wc2Aga2V5IHdpbGwgYmVcbiAgICAvLyAgcGFzc2VkIHRvIHRoZSBgSG9tZWAgY29tcG9uZW50XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGxvY2FsRGF0YUFycmF5XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/alexanderbol/WebstormProjects/dfm-monitor/pages/index.js */"));
}
async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const localDataArray = await Object(_models_loadFiles__WEBPACK_IMPORTED_MODULE_4__["loadFiles"])(); // The value of the `props` key will be
  //  passed to the `Home` component

  return {
    props: {
      localDataArray
    }
  };
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alexanderbol/WebstormProjects/dfm-monitor/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-vega":
/*!*****************************!*\
  !*** external "react-vega" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-vega");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map