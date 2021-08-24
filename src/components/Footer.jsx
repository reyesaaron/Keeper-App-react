import React from "react";

const date = new Date();

export default function Footer(){
    return(
        <footer>
            <p>Copyright &copy; {date.getFullYear()}</p>
        </footer>
    )
}