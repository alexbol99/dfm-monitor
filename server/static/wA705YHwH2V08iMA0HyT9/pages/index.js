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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "1Hf4":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"MainComponent": "MainComponent_MainComponent__18PG5"
};

/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "C721":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"RunningLogsList": "RunningLogsList_RunningLogsList__1Lu0w",
	"RunningLogsListTable": "RunningLogsList_RunningLogsListTable__3Z3D4",
	"fadeIn": "RunningLogsList_fadeIn__2InzZ"
};

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Home; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/MainComponent/MainComponent.module.css
var MainComponent_module = __webpack_require__("1Hf4");
var MainComponent_module_default = /*#__PURE__*/__webpack_require__.n(MainComponent_module);

// EXTERNAL MODULE: ./components/RunningLogsList/RunningLogsList.module.css
var RunningLogsList_module = __webpack_require__("C721");
var RunningLogsList_module_default = /*#__PURE__*/__webpack_require__.n(RunningLogsList_module);

// EXTERNAL MODULE: ./components/RunningLogsList/RunningLogListItem/RunningLogListItem.module.css
var RunningLogListItem_module = __webpack_require__("lOdA");
var RunningLogListItem_module_default = /*#__PURE__*/__webpack_require__.n(RunningLogListItem_module);

// CONCATENATED MODULE: ./components/RunningLogsList/RunningLogListItem/RunningLogListItem.js
var __jsx = external_react_default.a.createElement;



function RunningLogsListItem(props) {
  const refElement = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(() => {
    if (props.selected) {
      scrollIntoView();
    }
  });
  let style = props.selected ? RunningLogListItem_module_default.a.RunningLogListItemClicked : RunningLogListItem_module_default.a.RunningLogListItem;
  style = props.batchFailed ? `${style} ${RunningLogListItem_module_default.a.RunningLogListItemFailed}` : style;
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
    ref: refElement
  }, __jsx("td", null, props.data.runningDate), __jsx("td", null, props.data.jobName), __jsx("td", null, props.data.step), __jsx("td", null, props.data.checklist), __jsx("td", {
    className: RunningLogListItem_module_default.a.RunningLogListItemNumeric
  }, props.data.actionsNum), __jsx("td", {
    className: RunningLogListItem_module_default.a.RunningLogListItemNumeric
  }, props.data.layersNum), __jsx("td", {
    className: RunningLogListItem_module_default.a.RunningLogListItemNumeric
  }, props.data.batchJobsNum), __jsx("td", null, props.data.runningTime || "Failed"), __jsx("td", null, __jsx("a", {
    href: object_url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, props.data.key)));
}

/* harmony default export */ var RunningLogListItem = (RunningLogsListItem);
// CONCATENATED MODULE: ./components/RunningLogsList/RunningLogsList.js
var RunningLogsList_jsx = external_react_default.a.createElement;




function RunningLogsList(props) {
  var _props$logsListData;

  Object(external_react_["useEffect"])(() => {
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
  return RunningLogsList_jsx("div", {
    className: RunningLogsList_module_default.a.RunningLogsList
  }, RunningLogsList_jsx("header", null, RunningLogsList_jsx("span", null, "Amazon s3 >"), RunningLogsList_jsx("span", null, RunningLogsList_jsx("a", {
    href: "https://s3.console.aws.amazon.com/s3/buckets/acp-cloud-logs/?region=eu-central-1&tab=overview#",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "acp-cloud-logs"))), RunningLogsList_jsx("table", {
    className: RunningLogsList_module_default.a.RunningLogsListTable
  }, RunningLogsList_jsx("thead", null, RunningLogsList_jsx("tr", null, RunningLogsList_jsx("th", null, "Running date"), RunningLogsList_jsx("th", null, "Job Name"), RunningLogsList_jsx("th", null, "Step"), RunningLogsList_jsx("th", null, "Checklist"), RunningLogsList_jsx("th", null, "# Actions"), RunningLogsList_jsx("th", null, "# Layers"), RunningLogsList_jsx("th", null, "# ACPs"), RunningLogsList_jsx("th", null, "Running Time"), RunningLogsList_jsx("th", null, "S3 bucket key (filename)"))), RunningLogsList_jsx("tbody", null, (_props$logsListData = props.logsListData) === null || _props$logsListData === void 0 ? void 0 : _props$logsListData.map((data, index) => RunningLogsList_jsx(RunningLogListItem, {
    key: index,
    data: data,
    selected: props.selectedIndex === index,
    batchFailed: !!data.errorTime,
    itemClicked: () => props.logItemClicked(index)
  })))));
}

/* harmony default export */ var RunningLogsList_RunningLogsList = (RunningLogsList);
// EXTERNAL MODULE: external "react-vega"
var external_react_vega_ = __webpack_require__("qzyO");

// EXTERNAL MODULE: ./components/VegaLiteChart/VegaLiteChart.module.css
var VegaLiteChart_module = __webpack_require__("Un22");
var VegaLiteChart_module_default = /*#__PURE__*/__webpack_require__.n(VegaLiteChart_module);

// CONCATENATED MODULE: ./components/VegaLiteChart/VegaLiteChart.js
var VegaLiteChart_jsx = external_react_default.a.createElement;




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
  return VegaLiteChart_jsx("div", {
    className: VegaLiteChart_module_default.a.VegaLiteChart
  }, props.data && props.runData.runningTime ? VegaLiteChart_jsx(external_react_vega_["VegaLite"], {
    spec: spec,
    data: props.data
  }) : "No data");
}

/* harmony default export */ var VegaLiteChart_VegaLiteChart = (VegaLiteChart);
// CONCATENATED MODULE: ./models/logData.js
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
// CONCATENATED MODULE: ./components/MainComponent/MainComponent.js
var MainComponent_jsx = external_react_default.a.createElement;




 // import {loadFiles} from "../../models/loadFiles";

function MainComponent(props) {
  // const [logDataArray, setLogDataArray] = useState([]);
  const {
    0: index,
    1: setIndex
  } = Object(external_react_["useState"])(0);
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
    logsListData = logDataArray.map(data => getListData(data));
    let localData = logDataArray[index];
    chartData = localData.runningTime ? getChartData(localData) : null;
    runData = getListData(localData);
  }

  return MainComponent_jsx("main", {
    className: MainComponent_module_default.a.MainComponent
  }, MainComponent_jsx(RunningLogsList_RunningLogsList, {
    logsListData: logsListData,
    selectedIndex: index,
    logItemClicked: logItemClicked
  }), MainComponent_jsx(VegaLiteChart_VegaLiteChart, {
    data: chartData,
    runData: runData
  }));
}

/* harmony default export */ var MainComponent_MainComponent = (MainComponent);
// CONCATENATED MODULE: ./models/logParser.js
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
  return secToHHMMSS(logParser_time_diff(start_time, end_time));
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

function logParser_time_diff(start_time, complete_time) {
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
// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__("4vsW");
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./models/loadFiles.js


async function loadFiles() {
  let logs_api_uri = "https://bah2tkltg6.execute-api.eu-central-1.amazonaws.com/test/list";
  let response = await external_node_fetch_default()(logs_api_uri);
  let resp_json_str = await response.json();
  let keys_list = JSON.parse(resp_json_str.body).keys;
  let promises = keys_list.map(key => external_node_fetch_default()(`${logs_api_uri}/${key}`));
  let respArray = await Promise.all(promises);
  let json_promises = respArray.map(resp => resp.json());
  let textArray = await Promise.all(json_promises);
  let dataArray = textArray.map(e => parse(e.text));
  dataArray.forEach((data, i) => data.key = keys_list[i]);
  dataArray.sort(function (a, b) {
    return new Date(b.runningDate) - new Date(a.runningDate);
  });
  return dataArray;
}
// CONCATENATED MODULE: ./pages/index.js


var pages_jsx = external_react_default.a.createElement;



function Home({
  localDataArray
}) {
  return pages_jsx("div", {
    className: "jsx-1799183244" + " " + "container"
  }, pages_jsx(head_default.a, null, pages_jsx("title", {
    className: "jsx-1799183244"
  }, "DFM Monitor"), pages_jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-1799183244"
  })), pages_jsx("main", {
    className: "jsx-1799183244"
  }, pages_jsx("h1", {
    className: "jsx-1799183244" + " " + "title"
  }, "DFM Monitor"), pages_jsx(MainComponent_MainComponent, {
    dataArray: localDataArray
  })), pages_jsx("footer", {
    className: "jsx-1799183244"
  }, pages_jsx("a", {
    href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-1799183244"
  }, "Powered by", ' ', pages_jsx("img", {
    src: "/vercel.svg",
    alt: "Vercel Logo",
    className: "jsx-1799183244" + " " + "logo"
  }))), pages_jsx(style_default.a, {
    id: "3345803726"
  }, [".container.jsx-1799183244{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "main.jsx-1799183244{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "footer.jsx-1799183244{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "footer.jsx-1799183244 img.jsx-1799183244{margin-left:0.5rem;}", "footer.jsx-1799183244 a.jsx-1799183244{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "a.jsx-1799183244{color:inherit;-webkit-text-decoration:none;text-decoration:none;}", ".title.jsx-1799183244 a.jsx-1799183244{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}", ".title.jsx-1799183244 a.jsx-1799183244:hover,.title.jsx-1799183244 a.jsx-1799183244:focus,.title.jsx-1799183244 a.jsx-1799183244:active{-webkit-text-decoration:underline;text-decoration:underline;}", ".title.jsx-1799183244{margin:0;line-height:1.15;font-size:4rem;}", ".title.jsx-1799183244,.description.jsx-1799183244{text-align:center;}", ".description.jsx-1799183244{line-height:1.5;font-size:1.5rem;}", "code.jsx-1799183244{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}", ".grid.jsx-1799183244{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem;}", ".card.jsx-1799183244{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}", ".card.jsx-1799183244:hover,.card.jsx-1799183244:focus,.card.jsx-1799183244:active{color:#0070f3;border-color:#0070f3;}", ".card.jsx-1799183244 h3.jsx-1799183244{margin:0 0 1rem 0;font-size:1.5rem;}", ".card.jsx-1799183244 p.jsx-1799183244{margin:0;font-size:1.25rem;line-height:1.5;}", ".logo.jsx-1799183244{height:1em;}", "@media (max-width:600px){.grid.jsx-1799183244{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}"]), pages_jsx(style_default.a, {
    id: "3379920139"
  }, ["html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}", "*{box-sizing:border-box;}"]));
}
async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const localDataArray = await loadFiles(); // The value of the `props` key will be
  //  passed to the `Home` component

  return {
    props: {
      localDataArray
    }
  };
}

/***/ }),

/***/ "Un22":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"VegaLiteChart": "VegaLiteChart_VegaLiteChart__C_AQF"
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "lOdA":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"RunningLogListItem": "RunningLogListItem_RunningLogListItem__1rd6C",
	"RunningLogListItemClicked": "RunningLogListItem_RunningLogListItemClicked__3z7Ap",
	"RunningLogListItemFailed": "RunningLogListItem_RunningLogListItemFailed__1eblQ",
	"RunningLogListItemNumeric": "RunningLogListItem_RunningLogListItemNumeric__3o28S"
};

/***/ }),

/***/ "qzyO":
/***/ (function(module, exports) {

module.exports = require("react-vega");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });