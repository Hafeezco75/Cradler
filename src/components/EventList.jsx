import event1 from "../assets/images/event1.png";
import eventsday from "../assets/images/eventsday.jpeg";
import eventdashboard from "../assets/images/eventdashboard.jpeg";
import expohub from "../assets/images/expohub.jpeg";
import Unique from "../assets/images/Unique.jpeg"
import Gatherings from "../assets/images/Gatherings.jpeg"
import eventsOne from "../assets/images/eventsone.jpeg"
import "../eventlist.css"

function EventList () {

    return (
        <div className={"all"}>
            <div className="event-list">
                <a href="../assets/images/event1.png" target="_blank">
                    <img src={event1} className="events" alt="event logo"/>
                    <h4 className="text">
                        Agrofood Nigeria aims to highlight agricultural technology, animal production,flori- and
                        horticulture, and hot-house technology.
                        Leading global technology providers will exhibit tailored solutions for the Nigerian
                        and West African markets in agriculture, food processing, ingredients, plastics, printing,and
                        packaging.
                    </h4>
                </a>

                <a href="../assets/images/eventsday.jpeg" target="_blank">
                    <img src={eventsday} className="events" alt="event logo"/>
                    <h4 className="text">
                        Profile of conference topics include Economic Crisis and Education,Education for Sustainable
                        Development,Innovation,Marketing,Policy and Administration,Supervision,Communications and
                        Technology,
                        Evaluation, Finance, Measurement, Psychology, Strategic Management, Reform, and Organizational
                        Management in the field of education.
                    </h4>
                </a>

                <a href="https://localhost:5174/events" target="_blank">
                    <img src={eventdashboard} className="events" alt="event logo"/>
                    <p className={"head-text"}>Africa's Brain Bank</p>
                    <h4 className={"text"}>
                        Africa's Brain Bank is a non-profit organization focused on creating a virtual brain bank for
                        Africans
                        to deposit their expertise and knowledge. Leaders and professionals from all disciplines are
                        invited to
                        join and help Africa evolve economically. Scan QR code for tickets and updates.
                    </h4>
                </a>

                <a href="https://localhost:5174/events" target="_blank">
                    <img src={expohub} className="events" alt="event logo"/>
                    <p className={"head-text"}>Powerelec Nigeria 2025</p>
                    <h4 className={"text"}>
                        Powerelec Nigeria is the largest international trade fair curated exclusively for the energy.
                        Indeed, it will bring stalwarts from the entire power, energy, renewable and electrical segment
                        value chain under one roof.
                        Known as Nigeria's financial center and economic heart, Lagos offers a perfect platform for all
                        international and national players to forge partnerships and business deals.
                    </h4>
                </a>
            </div>
            <p></p>
            <div className={"event-list"}>
                <a href="https://localhost:5174/events" target="_blank">
                    <img src={Gatherings} className="event-down" alt="event logo"/>
                    <p className={"head-text"}>Securex West Africa 2025</p>
                    <h4 className={"text"}>
                        Securex West Africa is a conference and exhibition for security, fire, and safety professionals in the region.
                        Attendees can source their security supply chain and learn about new industry practices from global experts.
                    </h4>
                </a>

                <a href="https://localhost:5174/events" target="_blank">
                    <img src={Unique} className="event-down" alt="event logo"/>
                    <p className={"head-text"}>Pharma West Africa</p>
                    <h4 className={"text"}>
                        Pharma West Africa is a must-attend event for Nigeria and West Africa in the healthcare calendar,
                        it will provide a forum for medicines, whether they are over-the-counter (OTC), generic, patent/branded,
                        or herbal medicines. Recent developments in Nigeria's healthcare provision include a new mandatory health
                        insurance scheme, the expansion of health clinic provision, and investment in the local pharmaceutical industry.
                    </h4>
                </a>

                <a href="https://localhost:5174/events" target="_blank">
                    <img src={eventsOne} className="event-down" alt="event logo"/>
                    <p className={"head-text"}>Medic West Africa</p>
                    <h4 className={"text"}>
                        Medic West Africa (MWA) is the leading healthcare events platform in the region.
                        From state-of-the-art imaging equipment to cost-effective disposables, and advancements
                        healthcare innovations,Medic West Africa remains at the forefront of healthcare in the region.
                    </h4>
                </a>

                <a href="https://localhost:5174/events" target="_blank">
                    <img src={expohub} className="event-down" alt="event logo"/>
                    <p className={"head-text"}>Agile Management Conference</p>
                    <h4 className={"text"}>
                        The 2024 Agile Management Conference focuses on agility for success in a rapidly changing world.
                        It features expert-led sessions and workshops aimed at building resilience, fostering growth,and
                        providing actionable strategies for management.
                    </h4>
                </a>
            </div>
        </div>
    )

}

export default EventList