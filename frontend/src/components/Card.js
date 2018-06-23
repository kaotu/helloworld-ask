import React from 'react'

const Card = ({ children }) => (
  <div className="card">
    <div className="card-header">ASK</div>
    <div className="card-body">{children}</div>
  </div>
)

export default Card
