import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const EventCard = ({ event }) => {

    EventCard.defaultProps = {
        events: "",
    };

    EventCard.propTypes = {
        event: PropTypes.string,
    };

    if (!event) {
        return null;
    }
    return (
        <div key={event.id} className="cocktail-card">
            <img src={event.image} alt="" className="event-img" />
            <div className="cocktail-info">
                <div className="content-text">
                    <h2 className="cocktail-name">{name}</h2>
                    <span className="info">{event.type}</span>
                </div>
                <Link to={`/events/${slug}`}>
                    <div className="btn">View Details</div>
                </Link>
            </div>
        </div>
    );
};

export default EventCard;
