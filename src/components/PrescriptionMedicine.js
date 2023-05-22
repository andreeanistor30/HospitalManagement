import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/AddPatientBody.css';
import '../styles/PrescriptionMedicine.css';
import { medicines } from '../data/medicine';
import { routesOfAdministration } from '../data/routeAdministration';
import { dosageOptions } from '../data/dosage';
import AddMedicalPrescriptionApi from '../api/AddMedicalPrescriptionApi';
import PrescriptionMedicineRow from './PrescriptionMedicineRow';

export default function PrescriptionMedicine() {
    const [formData, setFormData] = useState({
        identityno: '',
        medicine: '',
        route: '',
        instruction: '',
        dosage: '',
        noofdays: '',
    });
    const [medicineRows, setMedicineRows] = useState([]);

    const handleFormData = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const onClickMedicine = async () => {
        var response = await AddMedicalPrescriptionApi(
            formData.identityno,
            formData.medicine,
            formData.route,
            formData.dosage,
            formData.noofdays,
            formData.instruction
        );
        if (!response.isError) {
            const newMedicineRow = {
                count: medicineRows.length + 1,
                medicine: response.medicine,
                noofdays: response.noOfDays,
                route: response.route,
                dosage: response.dosage,
            };
            setMedicineRows((prevRows) => [...prevRows, newMedicineRow]);
            toast.success("Insert successfully");
        } else {
            toast.error("Invalid data");
        }
    };

    return (
        <div>
            <div className="medicine-div" style={{ marginTop: 10 }}>
                <h3 className="medicine">Identity no</h3>
                <input
                    name="identityno"
                    type="search"
                    className="medicine-input"
                    value={formData.identityno}
                    onChange={handleFormData}
                    autoComplete="off"
                />
            </div>
            <h2 className="personal-details" style={{ marginTop: 50 }}>
                Medicine Prescription
            </h2>
            <div className="line" />

            <div className="medicine-div">
                <h3 className="medicine">Medicine</h3>
                <select
                    name="medicine"
                    className="medicine-input"
                    value={formData.medicine}
                    onChange={handleFormData}
                >
                    <option value="">Select Medicine</option>
                    {medicines.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <h3 className="route">Route</h3>
                <select
                    name="route"
                    className="route-input"
                    value={formData.route}
                    onChange={handleFormData}
                >
                    <option value="">Select Route</option>
                    {routesOfAdministration.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            <div className="medicine-div">
                <h3 className="medicine">Instruction</h3>
                <input
                    name="instruction"
                    type="search"
                    className="medicine-input"
                    value={formData.instruction}
                    onChange={handleFormData}
                    autoComplete="off"
                />
                <h3 className="route">Dosage</h3>
                <select
                    name="dosage"
                    className="route-input"
                    value={formData.dosage}
                    onChange={handleFormData}
                >
                    <option value="">Select Dosage</option>
                    {dosageOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <div className="medicine-div">
                <h3 className="medicine">No. of days</h3>
                <input
                    name="noofdays"
                    type="search"
                    className="medicine-input"
                    value={formData.noofdays}
                    onChange={handleFormData}
                    autoComplete="off"
                />
                <button className="add-treatment-btn" onClick={onClickMedicine}>
                    Add
                </button>
            </div>

            <div className="header-medicine">
                <h3 className="nr-column">#</h3>
                <h3 className="medicine-column">Medicine</h3>
                <h3 className="noofdays-column">No. of days</h3>
                <h3 className="route-column">Route</h3>
                <h3 className="dosage-column">Dosage</h3>
            </div>

            {medicineRows.map((row) => (
                <PrescriptionMedicineRow
                    key={row.count}
                    count={row.count}
                    medicine={row.medicine}
                    noofdays={row.noofdays}
                    route={row.route}
                    dosage={row.dosage}
                    className={row.count % 2 === 0 ? 'even-row' : 'odd-row'}
                />
            ))}
            <ToastContainer />
        </div>
    );
}