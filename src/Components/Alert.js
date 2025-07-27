// rfc
import React from 'react'
// import PropTypes from 'prop-types'

export default function Alert(props) {
  const capitalise=(word)=>{
      if (!word) return ""; // prevents error if undefined or null
    let lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1)
  }
  return (
    <div style={{height: '50px'}}> 
    {/* ?// to reduce layout shift */}
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{capitalise(props.alert.type)}</strong>: {props.alert.msg} 
        </div>}
        </div>

  )
}
 