import './App.css'
import {createBrowserRouter, Route, Routes} from "react-router-dom";
import ROUTES from "./router/Router.jsx";
import Index from "./Index.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import EventList from "./components/EventList.jsx";


createBrowserRouter([
    ...ROUTES
]);

function App() {

  return (
      <div className="App">
          <Routes>
              <Route path='/' element={<Index/>} />
              <Route path='/register' element={<Register/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/events' element={<EventList/>} />
          </Routes>
      </div>
    )
}

export default App;
