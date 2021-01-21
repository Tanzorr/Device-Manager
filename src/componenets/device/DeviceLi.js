import React from 'react';
import {NavLink} from "react-router-dom";

const DeviceLi = ({device}) => {
    return <>
        <NavLink className="list-group-item" to={`/devices/${device}`}>
            {device}
        </NavLink>
    </>

}

export default DeviceLi;