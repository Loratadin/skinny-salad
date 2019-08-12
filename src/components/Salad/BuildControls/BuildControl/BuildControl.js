import React from "react";
import "./buildControl.css";

const buildControl = props => {
    return (
        <div className="buildcontrol__container">
            <div className="buildcontrol__label">{props.label}</div>
            <div className="buildcontrol__button" onClick={props.removed} disabled={props.disabled}>
                Less
            </div>
            <div className="buildcontrol__button" onClick={props.added}>More</div>
        </div>
    );
};

export default buildControl;
