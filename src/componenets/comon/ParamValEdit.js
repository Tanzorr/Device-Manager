import React, {useState}from 'react';


const ParamValEdit =({val})=>{
    let [value1, setValue1] = useState(val)
    const handleInputChange = (event) => {
        const {  value } = event.target
        setValue1(value)
    }
    return<div>
        <input type='number' onChange={handleInputChange} className="form-control"  value={value1}/>
    </div>

}

export default ParamValEdit