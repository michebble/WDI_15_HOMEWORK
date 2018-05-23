import React from 'React'
import './Bar.scss'

export default function Bar({ width, color }){
  const barStyle = {
    width: width || "0%",
    backgroundColor: color || "olivedrab",
    height: "10px"
  }

  return <div className="bar-wrapper"> 
    <div  style={barStyle}>
    </div>
  </div>
}
