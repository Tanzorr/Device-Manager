import React from 'react';
import ParamRow from "./paramRow";


const DeviceTable = ({paramsArr, typesArr}) => {
    let typeParam = {}

    if (typesArr && typeof typesArr === "object" || typesArr instanceof Array) {
        typeParam = typesArr;
    }

    let dataParam = paramsArr.map((e, i) => {
        let pKeys = Object.keys(e);

        let pList = pKeys.map((j, k) => {
            let typeP = typeParam[i];
            return <ParamRow key={k} name={j} data={e} type={typeP}/>
        })

        return pList;
    })
    return <div>
        <table className="table table-striped table-bordered w-100">
            <thead></thead>
            <tbody>
            {dataParam}
            </tbody>
        </table>
    </div>
}

export default DeviceTable;