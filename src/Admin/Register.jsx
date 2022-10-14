import React from "react";

function Register() {
  return (
    <aside className="register">
      <h1>Register</h1>
      <form className="contact-form">
        <div className="row">
          <div className="col-md-6">
            <div className="control">
              <input type="text" placeHolder="name..." required />
              <span className="fa fa-user "></span>
            </div>
            <div className="control">
              <input type="text" name="" id="" placeHolder="phone" required />
              <span className="fa fa-phone"></span>
            </div>
            <div className="control">
              <input
                type="text"
                name=""
                id=""
                placeHolder="residence"
                required
              />
              <span className="fa fa-map-marker"></span>
            </div>
            <div className="control">
              <input type="text" name="" id="" placeHolder="email" />
              <span className="fa fa-envelope"></span>
            </div>
          </div>
        </div>
        <p className="text-right">
          <input type="submit" value="Register" />
        </p>
      </form>
    </aside>
  );
}

export default Register;
