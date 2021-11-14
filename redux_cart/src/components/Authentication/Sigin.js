import React, { useState } from "react";
import img from "../../img/login.jpg";
import { Link, useHistory } from "react-router-dom";
import validator from 'validator';

const Sigin = () => {
  //bakend process
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("INVALID login");
    } else {
      window.alert("login sucessfull");
      history.push("/cart");
    }
  };
//end process
  return (
    <>
      <section className="sign-in">
        <div className="container mt-5">
          <div className="signin-content d-flex justify-content-center align-items-center">
            <div className="signin-image col-lg-6">
              <figure>
                <img
                  src={img}
                  className="img-thumbnail"
                  style={{ width: "100%", border: "none" }}
                  alt="img_thm"
                />{" "}
              </figure>
            </div>

            <div className="signin-form col-lg-6">
              <h2 className="form-title">Log in</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
               style={{color:validator.isEmail(email)?"green":"red"}}

                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit btn btn-success"
                    value="Login"
                    onClick={loginUser}
                  />
                </div>
                <Link to="/register" className="signup-image-link">
                  create an acount
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sigin;
