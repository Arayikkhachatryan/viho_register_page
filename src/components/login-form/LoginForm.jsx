import "./LoginForm.css";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from "react";

const LoginForm = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div id="form-group">
        <label className="group-heading">Your Name</label>
        <div id="name-surname">
          <div className="name">
            <span className="user-icon">
              <AiOutlineUser />
            </span>
            <input type="text" placeholder="First Name" />
          </div>
          <div className="surname">
            <span className="user-icon">
              <AiOutlineUser />
            </span>
            <input type="text" placeholder="Last Name" />
          </div>
        </div>
      </div>
      <div id="form-group">
        <label className="group-heading">Email Address</label>
        <div className="email">
          <span className="user-icon">
            {" "}
            <AiOutlineMail />
          </span>
          <input type="text" placeholder="Test@gmail.com" />
        </div>
      </div>
      <div id="form-group">
        <label className="group-heading">Password</label>
        <div className="password">
          <span className="user-icon">
            <AiOutlineMail />
          </span>
          <input type={!visible ? "password" : "text"} placeholder="********" />
          <div
            className="show-hide"
            onClick={() => setVisible((prev) => !prev)}
          >
            <p>{!visible ? "Show" : "Hide"}</p>
          </div>
        </div>
      </div>
      <div className="form-group">
        <input type="checkbox" />
        <label className="agreement">
          Agree With <span>Privacy Policy</span>
        </label>
      </div>
      <div className="create-btn">
        <button>Create Account</button>
      </div>
    </>
  );
};

export default LoginForm;
