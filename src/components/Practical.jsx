import React from "react";

const Practical = ({ handleChange, info }) => {

    return (
        <div className="form-container">
            <form>
                <legend>Practical Experience</legend>
                <div className="input-container">
                    <label htmlFor="companyName">Company Name: </label>
                    <input onChange={handleChange} type="text" name="companyName" placeholder="Where did you work?" value={info.companyName} />
                </div>
                <div className="input-container">
                    <label htmlFor="positionTitle">Position Performed: </label>
                    <input onChange={handleChange} type="text" name="positionTitle" placeholder="What position did you have?" value={info.positionTitle} />
                </div>
                <div className="input-container">
                    <label htmlFor="responsibilities">Responsibilities <span>(separate with ', ')</span>: </label>
                    <input onChange={handleChange} type="text" name="responsibilities" placeholder="Responsibilities performed" value={info.responsibilities} />
                </div>
                <div className="input-container">
                    <label htmlFor="dateFrom">Years: </label>
                    <div className="input-container-dblyear">
                        <input onChange={handleChange} type="number" name="dateFrom" placeholder="From" value={info.dateFrom} min="1900" max="2100" />
                        <span> - </span>
                        <input onChange={handleChange} type="number" name="dateTo" placeholder="Until" value={info.dateTo} min="1900" max="2100" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Practical;