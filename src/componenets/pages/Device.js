import React, {useContext} from 'react';
import {DeviceContext} from "../../context/deviceContext";

import DeviceTable from "../device/DeviceTable";
import {NavLink} from "react-router-dom";


const Device = (props) => {
    const store = useContext(DeviceContext)
    let deviceKey = props.match.params.key;
    const deviceDataArr = store.api.deviceTree[deviceKey];
    let deviceParamTypeArr;
    if (store.api.deviceTreeTypeMap[deviceKey]) {
        deviceParamTypeArr = store.api.deviceTreeTypeMap[deviceKey]
    } else {
        deviceParamTypeArr = [];
    }
    return <div className="container">
        <h2>{deviceKey}</h2>
        <div className="row mb-5 pl-3">
            <NavLink className=" btn btn-primary" to="/">All Device</NavLink>
        </div>
        <DeviceTable paramsArr={deviceDataArr} typesArr={deviceParamTypeArr}/>
    </div>
}


export default Device;