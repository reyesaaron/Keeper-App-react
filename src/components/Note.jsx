import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

export default function Note(props){

    function clickHandler(event){
        props.onDelete(props.id)
    }

    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button type="submit" onClick={clickHandler}>
                <DeleteIcon />
            </button>
        </div>
    )
}