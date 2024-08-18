import React from "react";
import 'tachyons';

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
      <img
        alt='robots'
        src={`https://robohash.org/${id}?200x200`}
        className="br-100 h4 w4 dib" 
      />
      <div>
        <h2 className="f4">{name}</h2>
        <p className="f6">{email}</p>
      </div>
    </div>
  );
}

export default Card;
