import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTitle } from "../component/actions.js";

const AboutUs = () => {
    const [newTitle, setNewTitle] = useState("")

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className="row container">
            <h1>About Us</h1>
            <input 
            value={newTitle}
            onChange={(e) => {
                setNewTitle(e.target.value)
                dispatch(addTitle(newTitle))
            }}
            type="text" 
            placeholder="Insert a title" />
            <button 
                onClick={() => navigate("/home")} 
                type="button" 
                class="btn btn-success">Home</button>
        </div>
    )
}

export default AboutUs;