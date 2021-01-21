import React from 'react';
import DeviceTyble from "./DeviceTable";
import ParamValEdit from "../comon/ParamValEdit";

const ParamRow = ({name, data, type}) => {
    let stringVal = "";
    let val = data[name];
    let typePar=[]
    let edit  = false;
    if(type instanceof Object){
        let witTypeKey = Object.keys(type);
        witTypeKey.forEach((e)=>{
            if(type[e] === 'number' && e === name){
                typePar = "edit"
                edit = type;
                stringVal =`<input type='text' value={${stringVal}}/>`
            }else if(type[e] instanceof Array){
                typePar = type[e]
                edit = false;
            }
        });
    }

    if( typeof val ===  'string' || val instanceof String ||
        typeof val === 'number' || val instanceof Number) {
        stringVal = val;
    }else {
        if (typeof val === 'object' || val instanceof Array) {
            stringVal = <DeviceTyble paramsArr={val} typesArr={typePar}/>
        }else {
            stringVal = "Arr";
        }
    }
    return <tr>
        <td>{name}</td>
        <td>{edit?
            <ParamValEdit val={stringVal}/>:
            stringVal
        }</td>
    </tr>
}

export default ParamRow;