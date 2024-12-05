import "../login.css"

const login = () => {

    return (
        <div className={"page-form"}>

            <form className="form" onSubmit={login}>
                <div className="">
                    <label className="heading" htmlFor="email">Welcome Back User,Kindly Login</label>
                </div>
                <label className="user">Username</label>
                <input className="input-username" name="username"
                       placeholder="Username"
                       type="text"
                />

                <label className="pass">Password</label>
                <input className="password-input" name="password"
                       placeholder="Password"
                       type="password"
                />
                <div className={"submit-login"}>
                <button className="submit"
                    type="submit"> Login
                </button>
                </div>
            </form>
        </div>
    )
}

export default login;