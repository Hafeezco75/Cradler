import {Link, Outlet} from "react-router-dom";
import "../layout.css"

const Layout = () => {

    return (
        <>
            <nav>
                <ul className="list">
                    <button>
                        <Link to="/mainapp">MainApp</Link>
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
                        <Link to="/find-events">Create Events</Link>
                    </button>
                </ul>
            </nav>

            <Outlet/>
        </>
    )
}

export default Layout;