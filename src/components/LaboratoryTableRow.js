import "../styles/LaboratoryTableRow.css"
export default function LaboratoryTableRow({
    txt,
    units,
    referenceRange
}
){
    return(
        <div className="glucose-div">
                <h3 className="text">{txt}</h3>
                <input type="search" className="input" />
                <h3 className="units-text">{units}</h3>
                <h3 className="reference-range-text">{referenceRange}</h3>
            </div>
    )
}