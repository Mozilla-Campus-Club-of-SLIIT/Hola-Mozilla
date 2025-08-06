import React, { useState, useEffect } from "react";
import "../App.css";
import { Button } from "@material-ui/core";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const countDownDate = new Date("Dec 21, 2021 19:00:00").getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="main">
      <center>
        <div className="container">
          <h1 className="mainHeading">HOLA MOZILLA 2.0</h1>
          <div className="dateText">
            <span>21</span>
            <span>st</span> <span>December @ 7.00pm</span>
          </div>

          <div id="countdown" className="countdown glowing">
            <ul>
              <li>
                <span>{timeLeft.days}</span>
                <span style={{ color: "#f83600" }}>days</span>
              </li>
              <li>
                <span>{timeLeft.hours}</span>
                <span style={{ color: "#f83600" }}>Hours</span>
              </li>
              <li>
                <span>{timeLeft.minutes}</span>
                <span style={{ color: "#f83600" }}>Minutes</span>
              </li>
              <li>
                <span>{timeLeft.seconds}</span>
                <span style={{ color: "#f83600" }}>Seconds</span>
              </li>
            </ul>
          </div>

          <img
            className="watermark"
            src="https://res.cloudinary.com/fitness-glory/image/upload/v1639484985/logo_icon-01_s6oex8.png"
            alt="watermark"
          />

          <Button className="myBtn">
            <span style={{ textDecoration: "none" }}>Register Now</span>
          </Button>
        </div>
      </center>
    </div>
  );
}
