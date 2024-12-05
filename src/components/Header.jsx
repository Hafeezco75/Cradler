import auditorium from "../assets/images/auditorium.jpeg";
import eventLogo1 from "../assets/images/eventLogo1.jpeg";
import eventPlace from "../assets/images/eventPlace.jpeg";
import "../header.css"


const Header = () => {

    return (
        <div className={"img"}>

            <img src={auditorium} className="img-auditorium" alt="auditorium place"/>
            <img src={eventLogo1} className="img-auditorium" alt="auditorium place"/>
            <img src={eventPlace} className="img-auditorium" alt="auditorium place"/>
        </div>
    )
}

export default Header;

