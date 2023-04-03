import React from "react";
import image from "../images/nurse-page/nurse.png"
import Header from "../components/Header"
import DropDownSearch from "../components/DropDownSearch";
import TableHeader from "../components/TableHeader";
import TableRow from "../components/TableRow";
export default function NurseDischargePatientPage(){
    return(
        <div>
            <Header 
            img={image}
            txt={'Name'}
            />
            <DropDownSearch />
            <TableHeader />
            <TableRow
            firstcolumn='1'
            firstname='Andreea'
            lastname='Nistor'
            diagnostic='Headache'
            doctor='John Smith'
            />
        </div>
    )
}