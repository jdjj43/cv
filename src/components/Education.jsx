import React from "react";

const Education = ({handleChange, info}) => {
    return (
        <div className="form-container">
            <form>
                <legend>Educacional Experience</legend>
                <div className="input-container">
                    <label htmlFor="schoolName">School Name: </label>
                    <input onChange={handleChange} type="text" name="schoolName" placeholder="Your School" value={info.schoolName} />
                </div>
                <div className="input-container">
                    <label htmlFor="titleOfStudy">Title Of Study: </label>
                    <input onChange={handleChange} type="text" name="titleOfStudy" placeholder="Your Title of Degree" value={info.titleOfStudy} />
                </div>
                <div className="input-container input-container-year">
                    <label htmlFor="dateOfStudy">Studies Start or Finish Year: </label>
                    <input className="input-year" onChange={handleChange} type="number" name="dateOfStudy" value={info.dateOfStudy} placeholder="Year" min="1900" max="2100" />
                </div>
            </form>
        </div>
    )
}

export default Education
