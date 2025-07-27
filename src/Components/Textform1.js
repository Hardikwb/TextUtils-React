// rfcp
import React from 'react'
// import PropTypes from 'prop-types'

function Textform1(props) {
  return (
    <>
    <div  >
     <form className={`mb-3 text-${props.mode==='dark'?'white':'#042743'}`} >
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className={`form-text text-${props.mode==='dark'?'white':'#042743'}`}>We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={() => props.showAlert("This is a text alert", "success")}>Submit</button>

</form>
    </div>
    </>
  )
}

Textform1.propTypes = {}

export default Textform1
