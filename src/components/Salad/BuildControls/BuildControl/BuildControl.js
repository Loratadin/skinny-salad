import React from "react";
import { BuildControl, Label, BCButton } from "./BuildControl.style";

const buildControl = props => {
    return (
        <BuildControl>
            <Label>{props.label}</Label>
            <BCButton onClick={props.removed} disabled={props.disabled}>
                Less
      </BCButton>
            <BCButton onClick={props.added}>More</BCButton>
        </BuildControl>
    );
};

export default buildControl;
