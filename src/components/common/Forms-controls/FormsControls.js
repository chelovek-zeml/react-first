import styles from "./FofrmsControls.module.css";
import React from "react";

const FormControl = (props) => {
    const hasError = props.meta.touched && props.meta.error;
    return (
        <div className={styles.form_control + " " + (hasError ? styles.error : '')}>
            <div>
            {props.children}
            </div>
            { hasError && <span>{props.meta.error}</span>}
        </div>
    )
}


export const Textarea = (props) => {
    return (
        <FormControl {...props}><textarea {...props.input}{...props}/></FormControl>
    )
}

export const Input = (props) => {
        return (
            <FormControl {...props}><input {...props.input}{...props}/></FormControl>
        )
    
}