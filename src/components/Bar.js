import React from 'react'

export const Bar = ({el,color,ht}) => {
    let BarStyle ={
        backgroundColor: color,
        height:''+ht+'vh',
        width: "2vh",
        borderBottomLeftRadius:"2vh",
        borderBottomRightRadius:"2vh"
    }
  return (
    <div className='ms-1' style={BarStyle}>
    </div>
  )
}
