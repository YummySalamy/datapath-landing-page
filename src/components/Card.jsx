import React from "react";
import "./assets/Components.css";

const Card = ({ children, style }) => {
    
    return (
        <div className="card" style={style}>
            {children}
        </div>
    )

}

export default Card;