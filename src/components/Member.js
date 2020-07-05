import React from 'react';

const Member = (props) => {
  return (
  <div className="teamMember">
      <a href={props.twitter} target="_blank">
        <img src={props.profile} alt="teamMember"></img>
      </a>
      <p>{props.name}</p>
  </div>
  )}

export default Member;