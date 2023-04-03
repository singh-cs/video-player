import React from "react";

export default function Radio(props){
    return(
        <label htmlFor={props.label}>
            <input 
                type="radio"
                id={props.label}
                name="choice"
                value={props.label}
                checked={props.isChecked == props.label}
                onChange={_event => props.handleChange(_event, props.label)}
            />
            {props.label}
        </label>  
    )
}