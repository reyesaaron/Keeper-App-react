import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


export default function App(){  
    const [notes, setNotes] = useState([]);

    function addNote(newNote){
        return setNotes(prevNotes => {
            return [
                ...prevNotes,
                newNote
            ]
        })
       
    }

    function deleteNote(id){
        return setNotes(prevNotes => {
            return prevNotes.filter((note, index) => {
                return index !== id
            })
        })
    }

    return(
        <div>
            <Header />
            <CreateArea onSubmit={addNote}/>
            {notes.map((note, index) => <Note key={index} id={index} onDelete={deleteNote} title={note.title} content={note.content}/>)}
            <Footer />
        </div>

    )
}