import React from 'react';
import './style.css'
function Card(props) {
  return (
    <div className='card'>
      <div className="top">
        <span>{props.title}</span>
      </div>
      <img src={props.urlImage} alt={props.title}/>
    </div>
  )
}
export default Card