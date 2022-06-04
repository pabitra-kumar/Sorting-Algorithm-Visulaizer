import React from 'react'
import { Bar } from './Bar'
export const Bars = ({array}) => {
    let BarsStyle = {
        height:"70vh",
        borderRadius:"3vh",
        backgroundColor:"rgba(143, 107, 53, 0.753)"
    }
    let divStyle={
        justifyContent: "center"
    }
  return (
    <div className='container ' style={BarsStyle}>
        <div className=' d-flex' style={divStyle}>
        {array.map((element) => {
        return <Bar el={element} key={element.key} color={element.color} ht={element.ht}/>
      })}
      </div>
    </div>
  )
}

