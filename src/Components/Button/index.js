import React from 'react'
import './style.css'
function Button(props) {
  return(
    <a className="btn" href="#">
            {props.title}
    </a>
  )
}
export default Button