import { useState } from "react";
import nurse from "../images/admin-page/nurse.png";
import doctor from "../images/admin-page/doctor.png";
import remove from "../images/admin-page/remove.png";
import "../styles/DoctorBody.css";
import "../styles/AdminBody.css";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal"
import DeleteDoctorOrNurseApi from "../api/DeleteDoctorOrNurseApi"
import { ToastContainer, toast } from "react-toastify";
export default function AdminBody() {
  const navigate = useNavigate();
  const [isCheckedDoctor, setIsCheckedDoctor] = useState(false);
  const [isCheckedNurse, setIsCheckedNurse] = useState(false);

  const handleCheckboxChangeDoctor = (event) => {
    setIsCheckedDoctor(event.target.checked);
    setIsCheckedNurse(false);
  };

  const handleCheckboxChangeNurse = (event) => {
    setIsCheckedNurse(event.target.checked);
    setIsCheckedDoctor(false);
  };

  const onClickAddNurse = () => {
    navigate("/addnurse");
  };

  const onClickAddDoctor = () => {
    navigate("/adddoctor");
  };

  const onClickRemove = () => {
    openModal();
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resp, setResponse] = useState({
    identityNo: ""
  })

  const handleFormData = (event) => {
    const { name, value } = event.target
    setResponse((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      }
    })
  }

  const onClick = async () => {

    let role = "";
    if (isCheckedDoctor) {
      role = "Doctor";
    } else if (isCheckedNurse) {
      role = "Nurse";
    }

    let response = 0;
    if (isCheckedDoctor) {
      response = await DeleteDoctorOrNurseApi(
        resp.identityNo,
        role
      )
    }
    else if (isCheckedNurse) {
      response = await DeleteDoctorOrNurseApi(
        resp.identityNo,
        role
      )
    }
    if (response.isError)
      toast.error("Invalid data");
    else
      toast.success("Delete successfully");
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2 className="dashboard">Dashboard</h2>
      <div className="first-row">
        <img src={nurse} className="info-photo" alt="Nurse" />
        <img src={doctor} className="diagnostic-photo" alt="Doctor" />
        <img src={remove} className="laboratory-photo" alt="Remove" />
      </div>
      <div className="first-row-buttons">
        <button className="info-button" onClick={onClickAddNurse}>
          ADD NURSE
        </button>
        <button className="diagnostic-button" onClick={onClickAddDoctor}>
          ADD DOCTOR
        </button>
        <button className="laboratory-button" onClick={onClickRemove}>
          REMOVE NURSE/DOCTOR
        </button>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <>
            <div className="analysis-div-row-container">

              <div className="ph-number-div">
                <h3 className="ph-number-h3">Identity no</h3>
                <input type="number" className="ph-number-input" name="identityNo" value={resp.identityNo} onChange={handleFormData} />
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={isCheckedDoctor}
                    onChange={handleCheckboxChangeDoctor}
                    autoComplete="off"
                    style={{ marginTop: 20, marginLeft: 30 }}

                  />
                  Doctor
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={isCheckedNurse}
                    onChange={handleCheckboxChangeNurse}
                    autoComplete="off"
                    style={{ marginTop: 20 }}
                  />
                  Nurse
                </label>
              </div>
              <button className="save-changes" onClick={onClick}>Delete</button>
            </div>
          </>
        </Modal>
      )}
      <ToastContainer />
    </div>
  );
}