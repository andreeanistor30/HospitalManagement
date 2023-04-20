import "../styles/LaboratoryTableRow.css"
export default function LaboratoryTableRow({
    item,
    handleFieldChange,
    index
}

){
    return(
        <div className="glucose-div">
                <h3 className="text">{item.testName}</h3>
                <input type="search" 
                    className="input"
                    value={item.value} 
                    name="value"
                    onChange={(e) => handleFieldChange(index, e)}/>
                <h3 className="units-text">{item.units}</h3>
                <h3 className="reference-range-text">{item.referenceRange}</h3>
            </div>
    )
}