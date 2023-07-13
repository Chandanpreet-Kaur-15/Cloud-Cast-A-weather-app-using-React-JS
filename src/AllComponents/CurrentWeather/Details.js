import React from 'react'

const Details = (props) => {
  return (
  
      <div className="parameterRow">
        <span className="parameterLabel">{props.Label}</span>
        <span className="parameterValue">{props.value}{props.unit}</span>
      </div>
  )
}

export default Details
