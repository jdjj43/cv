import React, { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Practical from "./components/Practical";
import './App.css';

export default function App() {
    const [info, setInfo] = useState({
        fullName: "",
        email: "",
        phone: "",
        schoolName: "",
        titleOfStudy: "",
        dateOfStudy: "",
        companyName: "",
        positionTitle: "",
        responsibilities: "",
        dateFrom: "",
        dateTo: ""
    });
    const [showInformation, setShowInformation] = useState(true);

    const handleChange = (e) => {
        setInfo({
            ...info, [e.target.name]: e.target.value
        })
    }

    if (showInformation === true) {
        return (
            <div className="container">
                <div className="cv-container">
                    <h1>CV Information</h1>
                    <h2>General Information</h2>
                    <h3>Name: </h3>
                    <p>{info.fullName}</p>
                    <h3>Email: </h3>
                    <p>{info.email}</p>
                    <h3>Phone number: </h3>
                    <p>{info.phone}</p>
                    <div className="experience">
                        <div className="school-experience">
                            <h2>School Experience</h2>
                            <h3>School Name:</h3>
                            <p>{info.schoolName}</p>
                            <h3>Title: </h3>
                            <p>{info.titleOfStudy}</p>
                            <h3>Finish Date:</h3>
                            <p>{info.dateOfStudy}</p>
                        </div>
                        <div className="laboral-experience">
                            <h2>Practical Experience</h2>
                            <h3>Company Name: </h3>
                            <p>{info.companyName}</p>
                            <h3>Position Title: </h3>
                            <p>{info.positionTitle}</p>
                            <h3>Responsibilities: </h3>
                            <p>{info.responsibilities}</p>
                            <h3>Years: </h3>
                            <p>{info.dateFrom} - {info.dateTo}</p>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button className="btn" onClick={() => setShowInformation(false)}>Edit Info</button>
                    </div>
                </div>
            </div>
        );

    }

    return (
        <div className="container">
            <GeneralInfo handleChange={handleChange} info={info} />
            <hr />
            <Education handleChange={handleChange} info={info} />
            <hr />
            <Practical handleChange={handleChange} info={info} />
            <div className="btn-container">
                <button className="btn" onClick={() => setShowInformation(true)}>Submit</button>
            </div>
        </div>
    )
}