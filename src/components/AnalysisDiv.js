import React from "react";
import "../styles/AnalysisDiv.css"
export default function AnalysisDiv({
    img,
    txt,
    txt2
}){
    return(
        <div>
            <div className="analysis-result-div">
            <img src={img} className="analysis-result-img"/>
            <div className="txt-analysis-div">
                <h2 className="analysis-type">{txt}</h2>
                <h2 className="analysis-result">{txt2}</h2>
            </div>
            </div>
        </div>
    )
}