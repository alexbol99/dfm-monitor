import React, {useEffect, useState} from 'react';
import styles from './MainComponent.module.css';
import RunningLogsList from "../RunningLogsList/RunningLogsList";
import VegaLiteChart from "../VegaLiteChart/VegaLiteChart";
import {getChartData, getListData} from "../../models/logData";
// import {loadFiles} from "../../models/loadFiles";

function MainComponent(props) {
    // const [logDataArray, setLogDataArray] = useState([]);
    const [index, setIndex] = useState(0);

    let logDataArray = props.dataArray;
    let logsListData = [];
    let chartData = null;
    let runData = null;

    // Effect to load all data from AWS s3
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
    const logItemClicked = (index) => {
        setIndex(index);                                     // trigger rendering
    }

    // Setup data before rendering
    if (logDataArray.length > 0) {
        logsListData = logDataArray.map(data => getListData(data))

        let localData = logDataArray[index];
        chartData = localData.runningTime ? getChartData(localData) : null;
        runData = getListData(localData);
    }

    return (
        <main className={styles.MainComponent}>
            <RunningLogsList
                logsListData={logsListData}
                selectedIndex={index}
                logItemClicked={logItemClicked}/>
            <VegaLiteChart data={chartData} runData={runData} />
        </main>
    );
}

export default MainComponent;
