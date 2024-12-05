import auditorium from "../assets/images/auditorium.jpeg";
import eventPlace from "../assets/images/eventPlace.jpeg";
import "../header.css"


const Header = () => {

    return (
        <div>

            <div className="img">
                <img src={auditorium} className="img-auditorium" alt="auditorium place"/>
                <img src={eventPlace} className="img-apps" alt="auditorium place"/>
            </div>
        </div>
    )
}

export default Header;

