import React from "react"
import "../styles/Laboratory.css"
export default function Laboratory(){
    return(
        <div>
            <div className="id-div">
            <h3 className="id-txt">Identity No.</h3>
            <input type="search" className="id-input" />
            </div>

            <h2 className="analysis-results">Analysis Results</h2>
            <div className="analysis-line"/>
        </div>
    )
}