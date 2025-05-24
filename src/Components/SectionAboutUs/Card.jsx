import React from 'react'

const Card = ({title, p}) => {
  return (
    <>
    <div className="card">
        <h2>{title}</h2>
        <p>{p}</p>
    </div>
    </>
  )
}

export default Card