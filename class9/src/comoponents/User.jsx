import React from 'react'

const Card =(props) => {
      const clr = Math.floor(Math.random()*256);
      const clr2 = Math.floor(Math.random()*256);
      const clr3 = Math.floor(Math.random()*256);

  return (
    <div
      className="user-card"
      style={{ backgroundColor: `rgb(${clr},${clr2},${clr3})` }}
    >
      <h4>{props.elem.name}</h4>
      <p>{props.elem.email}</p>
      <p>{props.elem.phone}</p>
      <p>{props.elem.username}</p>
      <p>{props.elem.website}</p>

    
    </div>
  );
}

export default Card
