import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCocktails } from "../Eventsummers";
import EventCard from "../Components/EventCard";


const Events = () => {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEvents = async () => {
            const { cocktails } = await getAllCocktails();
            setEvents(cocktails);
        };
        fetchEvents();
    }, []);

    return (
        <div className="container">
            <button className="btn" onClick={() => navigate(-1)}>
                Go Back
            </button>
            <div className="title">
                <h1>Event Listings</h1>
            </div>
            <div className="cocktails-container">
                {events.map((event) => (
                    <EventCard event={event} key={event.id} />
                ))}
            </div>
        </div>
    );
};

export default Events;




