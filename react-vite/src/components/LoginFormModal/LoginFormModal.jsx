import { useState } from "react";
import { thunkLogin, thunkDemoLogin } from "../../redux/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();



  const demoLogin = async (e) => {
    e.preventDefault()
    let serverResponse = await dispatch(thunkDemoLogin())

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      closeModal();
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serverResponse = await dispatch(
      thunkLogin({
        email,
        password,
      })
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      closeModal();
    }
  };

  return (
    <div className="sign-up-log-in-holder">
      <h1 className="login-title">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="sign-up-login-details">
          <label>
            Email
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="sign-up-login-details">
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className="sign-up-login-details-holder">
          <div className="login-modal-buttons">
            <button className="submit-button-hover" type="submit">Log In</button>
          </div>
          <div className="login-modal-buttons">
            <button className="submit-button-hover"
              onClick={demoLogin}>Demo Login</button>
          </div>
        </div>


      </form>
    </div>
  );
}

export default LoginFormModal;
