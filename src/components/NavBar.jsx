import {Link} from "react-router-dom";
import eventLogo from "../assets/images/eventLogo.png";
import "../layout.css"

const navBar = () => {

    return (
        <>
            <div className="list">
                <a href="https://localhost:5174/events" target="_blank">
                    <img src={eventLogo} className="animation" alt="event logo"/>
                </a>
                <ul className="list">
                    <button>
                        <Link to="/home">Home</Link>
                    </button>
                    <button>
                        <Link to="/register">Register</Link>
                    </button>
                    <button>
                        <Link to="/login">Login</Link>
                    </button>
                    <button>
                        <Link to="/events">Find Events</Link>
                    </button>
                    <button>
                        <Link to="/create-events">Create Events</Link>
                    </button>
                </ul>
            </div>
        </>
    )

}

export default navBar;