import React from 'react'

const Card = (props) => {
    console.log();
    
  return (
    <div>
      <img
        src="https://i.pinimg.com/736x/5f/e6/14/5fe61445e433c04b200b89505bfd4ddd.jpg"
        alt=""
      />
      <h1>{props.cardData.username}</h1>
      <h3>{props.cardData.role}</h3>
      <h2>{props.cardData.email}</h2>
    </div>
  );
}

export default Card
