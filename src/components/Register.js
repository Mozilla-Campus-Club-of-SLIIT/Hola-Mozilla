import React from "react";
import "../App.css";
import { Button } from "@material-ui/core";

export default function Register() {
  return (
    <div>
      <center>
        <div className="reg-left-box">
          <div className="regHead">
            <h2>Who Can Participate?</h2>
          </div>

          <div className="regPara">
            <span>
              Open to students of Sri Lanka <br />
              Institute of Information Technology (SLIIT) <br />
              who are interested in joining <br />
              <span style={{ fontWeight: 700 }}>
                Mozilla Campus Club of SLIIT.
              </span>
            </span>
          </div>
        </div>

        <div className="reg-right-box">
          <Button className="btn-grad">
            <span style={{ textDecoration: "none" }}>REGISTER NOW</span>
          </Button>
        </div>
      </center>
    </div>
  );
}
