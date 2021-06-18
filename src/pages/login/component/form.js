/**
 * using react hook form
 * @return {*}
 * @constructor
 */
import { MDBBtn } from "mdbreact";

const LoginForm = () => {
    return (
        <form >
            <div>
                <input name={"username"}
                    id="defaultFormLoginEmailEx"
                    placeholder={"Username"}
                    className="form-control login-input" />
                <input type="password"
                    id="defaultFormLoginPasswordEx"
                    name={"password"}
                    placeholder={"Password"}
                    className="form-control login-input" />
            </div>
            <a href={"/forgot-password"} className={"login-forgot-password"}>Forgot Password?</a>
            <div className="text-center mt-4">
                <button color={"#5B7EA2"} className={"login-btn"} type="submit">Login</button>
            </div>
            {/* <div className={"login-api-error text-center"}>
                {error ? <MDBAlert color="danger">
                    {error}
                </MDBAlert> : null}
            </div> */}
        </form>
    )
}
export default LoginForm