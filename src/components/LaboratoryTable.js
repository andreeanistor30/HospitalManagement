import React from "react"
import "../styles/LaboratoryTable.css"
export default function LaboratoryTable({
    firstColumn,
    secondColumn,
    thirdColumn,
    forthColumn
}){
    return(
        <div>
            <div className="table-content">
                <h3 className="test-name">{firstColumn}</h3>
                <h3 className="results">{secondColumn}</h3>
                <h3 className="units">{thirdColumn}</h3>
                <h3 className="reference-range">{forthColumn}</h3>
            </div>
        </div>
    )
}