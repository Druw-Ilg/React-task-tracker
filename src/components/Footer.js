import React from 'react'
//package that will allow us to stop the page from reloading
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021 <a href="https://andruwilagou.com">AndruwIlagou</a></p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
