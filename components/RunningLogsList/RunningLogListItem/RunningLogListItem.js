import React, {useRef, useEffect} from 'react';
import styles from './RunningLogListItem.module.css';

function RunningLogsListItem(props) {
    const refElement = useRef();
    useEffect( () => {
        if (props.selected) {
            scrollIntoView();
        }
    })

    let style = props.selected ? styles.RunningLogListItemClicked : styles.RunningLogListItem;
    style = props.batchFailed ? `${style} ${styles.RunningLogListItemFailed}` : style;
    let object_url = "https://s3.console.aws.amazon.com/s3/object/acp-cloud-logs/"+props.data.key;

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
    }

    return (
        <tr className={style} onClick={props.itemClicked} ref={refElement}>
            <td>
                {props.data.runningDate}
            </td>
            <td>
                {props.data.jobName}
            </td>
            <td>
                {props.data.step}
            </td>
            <td>
                {props.data.checklist}
            </td>
            <td className={styles.RunningLogListItemNumeric}>
                {props.data.actionsNum}
            </td>
            <td className={styles.RunningLogListItemNumeric}>
                {props.data.layersNum}
            </td>
            <td className={styles.RunningLogListItemNumeric}>
                {props.data.batchJobsNum}
            </td>
            <td>
                {props.data.runningTime || "Failed"}
            </td>
            <td>
                <a href={object_url} target="_blank" rel="noopener noreferrer">
                    {props.data.key}
                </a>
            </td>
        </tr>
    );
}

export default RunningLogsListItem;
