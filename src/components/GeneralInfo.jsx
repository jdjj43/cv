import React, { useState } from "react";

const GeneralInfo = ({handleChange, info}) => {
    return (
        <div className="form-container">
            <form>
                <legend>General Information</legend>
                <div className="input-container">
                    <label htmlFor="fullName">Full Name: </label>
                    <input onChange={handleChange} type="text" name="fullName" placeholder="Your Full Name" value={info.fullName}/>
                </div>
                <div className="input-container">
                    <label htmlFor="email">Email Address: </label>
                    <input onChange={handleChange} type="email" name="email" placeholder="Your Email" value={info.email}/>
                </div>
                <div className="input-container">
                    <label htmlFor="phone">Phone Number: </label>
                    <input onChange={handleChange} type="tel" name="phone" placeholder="Your Phone Number" value={info.phone}/>
                </div>
            </form>
        </div>
    );
}

export default GeneralInfo;