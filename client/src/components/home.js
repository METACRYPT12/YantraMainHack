import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const { loggedIn, email } = props;
  const navigate = useNavigate();

  const onButtonClick = () => {
    if (loggedIn) {
      localStorage.removeItem("user");
      props.setLoggedIn(false);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="mainContainer">
      <div className="titleContainer">Welcome!</div>
      <div>Home page</div>
      <div className={"ButtonContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={loggedIn ? "Log out" : "Log in"}
        />
        {loggedIn ? <div>You email is: {email}</div> : <div />}
      </div>
    </div>
  );
};

export default Home;
