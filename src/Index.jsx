import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import Mainapp from "./components/Mainapp.jsx";
import EventList from "./components/EventList.jsx";


function Index() {

    return (
        <div>
            <NavBar/>
            <Header/>
            <Mainapp/>
            <EventList/>
        </div>
    )

}

export default Index;