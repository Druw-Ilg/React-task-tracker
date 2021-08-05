// import PropTypes from 'prop-types'
import Button from "./Button";
//package that will allow us to get the route we are currently on
import { useLocation } from "react-router-dom";

const Header = ({onToggle, formState}) => {
    const location = useLocation()

    return (
        <header className = 'header'>
            <h1>Task Tracker</h1>
            {location.pathname === '/' && <Button color={formState ? 'red' : 'midnightblue'}
             text={formState ? 'Close' : 'Add a task'}
             onClick={onToggle} />
            }
        </header>
        
    )
}

export default Header
