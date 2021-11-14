import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import img from "../../img/register.png";
import validator from 'validator'
const Register = () => {
  //backend process
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handelInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    if(validator.isEmail(user.email) && validator.isStrongPassword(user.password)){
      const { name, email, phone, work, password, cpassword } = user;

      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          work,
          password,
          cpassword,
        }),
      });
      const data = await res.json();
      if (res.status === 422 || !data) {
        window.alert("invalid registration");
      } else {
        window.alert("sucsessfully registration");
        history.push("/sigin");
      }
    }
   else{
     window.alert("wrong")
   }
  };
 
  //end process

 
  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content d-flex  justify-content-center align-items-center flex-row-reverse">
            <div className="signup-form col-lg-6 col-md-12 col-sm-12">
              <h2 className="form-title">sign up</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete={false}
                    placeholder="name"
                    value={user.name}
                    onChange={handelInputs}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="email"
                    value={user.email}
                    onChange={handelInputs}
                    style={{color:validator.isEmail(user.email)?"green":"red"}}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    placeholder="phone"
                    value={user.phone}
                    onChange={handelInputs}
                    style={{color:validator.isMobilePhone(user.phone)?"green":"red"}}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="work"
                    id="work"
                    autoComplete="off"
                    placeholder="your profession"
                    value={user.work}
                    onChange={handelInputs}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="password Must 8 char eg:-Example@123"
                    value={user.password}
                    onChange={handelInputs}
                    style={{color:validator.isStrongPassword(user.password)?"green":"red"}}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    placeholder="confrom password"
                    value={user.cpassword}
                    onChange={handelInputs}
                    style={{color:(user.password === user.cpassword)?"green":"red"}}
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit btn btn-primary"
                    value="register"
                    onClick={PostData}
                  />
                </div>
                <Link to="/sigin" className="signup-image-link d-block">
                  i m allready register
                </Link>
              </form>
            </div>
            <div className="signup-image col-lg-6 col-md-12 col-sm-12">
              <figure>
                {" "}
                <img
                  src={img}
                  className="img-thumbnail"
                  style={{ width: "100%", border: "none" }}
                  alt="register_img"
                />{" "}
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
