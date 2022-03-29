import React from 'react'
// this custom component is used to to wrap the error message field in login page
// component parameter is used to wrap to this component
function TextError(props) {
  return (
    <div className="TextError">{props.children}</div>
  )
}

export default TextError