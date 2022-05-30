import background from "../resources/background.png";
import logo from "../resources/logo copy.png";
import { useState } from "react";
import "./Homepagestyle.css";
function Homepage(props) {
  const [setHomepage, setpagehandler] = useState(true);

  const imgclickhandler = (event) => {
    console.log("Image clicked");
    setpagehandler(props.value);
  };
  return (
    <div className="background-image">
      <img className="parent" src={background} alt="background"></img>
      <img
        className="logo"
        src={logo}
        alt="logo"
        onClick={imgclickhandler}
      ></img>
      <h2 className="text">Click on Gaming Paradise</h2>
      <p className="bottomtext">
        Team <b>MADRAS CAFE</b>
      </p>
    </div>
  );
}
export default Homepage;
