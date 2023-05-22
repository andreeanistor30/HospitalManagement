import React from "react"
import "../styles/Laboratory.css"
export default function Laboratory({
    laboratorydata,
    onChangeLaboratory}){
    return(
        <div>
            <div className="id-div">
            <h3 className="id-txt">Identity No.</h3>
            <input name="identityno" type="search" className="id-input" value={laboratorydata} onChange={onChangeLaboratory} autoComplete="off"/>
            </div>

            <h2 className="analysis-results">Analysis Results</h2>
            <div className="analysis-line"/>

        </div>
    )
    }