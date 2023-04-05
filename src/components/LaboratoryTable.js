import React from "react"
import "../styles/LaboratoryTable.css"
export default function LaboratoryTable(){
    return(
        <div>
            <div className="table-content">
                <h3 className="test-name">Test Name</h3>
                <h3 className="results">Results</h3>
                <h3 className="units">Units</h3>
                <h3 className="reference-range">Reference Range</h3>
            </div>
        </div>
    )
}