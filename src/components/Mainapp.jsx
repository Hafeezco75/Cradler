import virtualHub from "../assets/images/virtualHub.jpeg";
import eventify1 from "../assets/images/eventify1.jpeg";
import conference from "../assets/images/conference.jpeg";
import nextdeal from "../assets/images/nextdeal.jpeg";
import "/src/mainapp.css"

const mainapp = () => {
    let date = new Date();

    return (
        <div className="virtual">

            <div className="top-events">
            <div className={"row-events"}>
            <a href="https://localhost/events" target="_blank">
                <img src={virtualHub} className="virtual-img" alt="Virual Space"/>

                <p>The Grand Conference Hub: Remarkable</p>
                <p> {date.getFullYear()}</p>
                <p>314, Herbert Sherlton Rd</p>
                <h3>Free</h3>
            </a>
            </div>

            <div className={"row-events"}>
                <a href="https://localhost/events" target="_blank">
                <img src={eventify1} className="virtual-img" alt="Events hub"/>
                <p>The Long Awaited Blockbuster: Expendify</p>
                <p> {date.getDate()}</p>
                <p>38, Saka Durojaiye Avenue</p>
                <h3>Paid</h3>
            </a>
            </div>

                <a href="https://localhost/events" target="_blank">
                <img src={conference} className="virtual-img" alt="Conference"/>
                <p>SUI Blockchain: Financial
                    Inclusion In Tech</p>
                <p> {date.getDay()}</p>
                <p>136, Randle Avenue Rd, Ikoyi</p>
                <h3>Free</h3>
            </a>

            <a href="https://localhost/events" target="_blank">
                <img src={nextdeal} className="virtual-img" alt="Conference"/>
                <p>The Summer Event: Remarkable</p>
                <p> {date.getFullYear()}</p>
                <p>41, Barren Davies Close, Lekki</p>
                <h3>From $20.3</h3>
            </a>
            </div>
        </div>
    )

}

export default mainapp;