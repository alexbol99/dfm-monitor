import {parse} from "./logParser";
import fetch from 'node-fetch'

export async function loadFiles() {
    let logs_api_uri = "https://bah2tkltg6.execute-api.eu-central-1.amazonaws.com/test/list";

    let response = await fetch(logs_api_uri);
    let resp_json_str = await response.json()
    let keys_list = JSON.parse(resp_json_str.body).keys;

    let promises = keys_list.map (key => fetch(`${logs_api_uri}/${key}`))
    let respArray = await Promise.all(promises)
    let json_promises = respArray.map(resp => resp.json())
    let textArray = await Promise.all(json_promises);
    let dataArray = textArray.map( e => parse(e.text));
    dataArray.forEach( (data,i) => data.key = keys_list[i] )
    dataArray.sort(function(a,b){
        return new Date(b.runningDate) - new Date(a.runningDate);
    });
    return dataArray;
}
