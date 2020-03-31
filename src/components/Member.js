import React from 'react';
import SocialButton from './SocialButton'

function Member(props) {
  return <div className="teamMember">
      <img src={props.profile} alt="teamMember"></img>
      <p>{props.name}</p>
  </div>
}

export default Member;