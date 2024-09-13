import React from "react";
import "./assets/Miscelaneous.css";

const ApplyNow = () => {

    return (
        <div className="apply-now">
            <div className="apply-now__left-container">
                <h2>¿Quieres aplicar a DataPath?</h2>
                <p>Postula ahora y descubre el gran mundo de la ciencia de datos. ¡No te quedes fuera!</p>
                <button className="apply-now__button">Aplicar ahora</button>
            </div>
            <div className="apply-now__right-container">
                <img src="https://assets.softr-files.com/applications/b5cdb0d1-ba69-48f8-961f-8a89c9e7b1fd/assets/987a86bb-0f12-4909-b022-af3d55c17da4.svg" alt="apply-now"/>
            </div>
        </div>
    )
}

export default ApplyNow;