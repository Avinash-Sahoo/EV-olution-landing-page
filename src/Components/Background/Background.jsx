import React from 'react'
import "./Background.css"
import video from "../../assets/video1.mp4"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import { useCar } from '../../context/Car';

const Background = () => {
  const car = useCar();
  if(car.Playvideo){
    return (
      <>
      <video className='background' src={video} autoPlay loop muted /> 
      </>
    )
  }
  else if(car.Herono === 0){
    return (
      <>
      <img className='background' src={image1} alt="car image" />
      </>
    )
  }

  else if(car.Herono === 1){
    return (
      <>
      <img className='background' src={image2} alt="car image" />
      </>
    )
  }

  else if(car.Herono === 2){
    return (
      <>
      <img className='background' src={image3} alt="car image" />
      </>
    )
  }


}

export default Background;
