import React from 'react'
//package that will allow us to stop the page from reloading
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


const About = () => {
    return (
        <div >
            <p>
                This is a simple app developed with React.js, NPM and Node.js.<br/>
            </p>
            <h4 style={{textAlign: 'center'}}>How to use it</h4>
            <ul style={{margin: '10px 0'}}>
                <li>Add a task</li>
                <li>Set or remove a reminder by double clicking on a task</li>
                <li>You can also delete any task</li>
            </ul>
            <p style={{textAlign: 'center'}}><Link to="/" > <FaArrowLeft /> Go back </Link></p>
        </div>
    )
}

export default About
