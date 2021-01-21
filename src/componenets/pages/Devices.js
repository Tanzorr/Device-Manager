import React, {useContext} from 'react';
import {DeviceContext} from "../../context/deviceContext";
import DeviceLi from "../device/DeviceLi";


const Devices = () => {
    const store = useContext(DeviceContext)
    const deviceArr = Object.keys(store.api.deviceTree);
    let deviceList = deviceArr.map((e, i) => {
        return <DeviceLi key={i} device={e}/>
    })
    return <div className="container">
        <div className="list-group w-100 mt-5">
            {deviceList}
        </div>
    </div>
}

export default Devices;