import React from "react";
import pic from "../assets/bgpic.png";
import "./Rightside.css";

const Rightside = () => {
  return (
    <div className="right-section">
      <div className="contents">
        <img src={pic} alt="" />
        <div className="text-section">
          <div>
            <p>Pocket notes</p>
          </div>
          <div>
            <p>
              Send and receive messages without keeping your phone online. <br /> Use
              Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightside;
