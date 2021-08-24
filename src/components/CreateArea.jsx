import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

export default function CreateArea(props){
    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    });

    const [isExpanded, setExpanded] = useState(false);

    function onChangeHandler(event){
        const {name, value} = event.target;

        setNewNote((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function clickHandler(event){
        props.onSubmit(newNote);

        event.preventDefault();
    }

    function expand(){
        return setExpanded(true);
    }


    return(
        <div>
            <form className="create-note">
                {isExpanded && <input name="title" placeholder="Title" onChange={onChangeHandler} value={newNote.title}/>}
 
                <textarea name="content" placeholder="Take a note..." rows={isExpanded? "3" : "1"} onChange={onChangeHandler} value={newNote.content} onClick={expand}/>
                
                <Zoom in={isExpanded}>
                    <Fab onClick={clickHandler}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

// props.onSubmit(newNote)