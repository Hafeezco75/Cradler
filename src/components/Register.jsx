import {useState} from "react";
import "../register.css"


const Register = () => {
    const [name, setUser] = useState("");

    return (
        <div className={"form-column"}>
            <div className="user-header">
            <h2> Welcome Onboard, User {name} </h2>
            </div>

            <form className="form-register">
                <label className="name-reg">Full Name</label>
                <input className="name-input"
                    id="form-control"
                    placeholder="FullName"
                    type="text"
                />
                <label className="name-reg">Password</label>
                <input className="password-holder"
                       id="form-control"
                       placeholder="Password"
                       type="password"
                />
                <label className="name-reg">Confirm Password</label>
                <input className="confirm-password"
                       id="form-control"
                       placeholder="Confirm Password"
                       type="password"
                       onChange={(e) => setUser(e.target.value)}
                />
                <label className="name-reg">Email Address</label>
                <input className="confirm-password"
                   id="form-control"
                   placeholder="Email Address"
                   type="email"
                       onChange={(events) => {setUser(events.name)}}
                />
                <div className="continue">
                <button className="continue-button" onClick={() => {}}> Continue
                </button>

                </div>
            </form>
        </div>
    )

}

export default Register;