import React from "react";
import "./Hero.css";
import arrow from "../../assets/arrow_btn.png";
import play from "../../assets/pause_icon.png";
import pause from "../../assets/play_icon.png";

import { useCar } from "../../context/Car";

const Hero = () => {
  const car = useCar();
  return (
    <div className="main1">
      <div className="container1">
        <p className="head1">{car.Herotext[car.Herono].text1}</p>
        <p className="head1">{car.Herotext[car.Herono].text2}</p>
        <div className="explore">
          <p className="head2">Explore the features</p>
          <img className="arrow" src={arrow} alt="arrow button" />
        </div>
        <div className="bottom">
          <div className="alldot">
            <p className={car.Herono === 0 ? "dot-active" : "dot"} onClick={()=>car.setHerono(0)}></p>
            <p className={car.Herono === 1 ? "dot-active" : "dot"} onClick={()=>car.setHerono(1)}></p>
            <p className={car.Herono === 2 ? "dot-active" : "dot"} onClick={()=>car.setHerono(2)}></p>
          </div>
          <div className="video"> 
           <img className="video-image" src={car.Playvideo ? play : pause} alt="pause button" onClick={()=>car.setPlayvideo(!car.Playvideo)}/>
            <p className="video-text">See the video</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
