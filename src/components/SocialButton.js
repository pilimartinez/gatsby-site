import React from 'react';

function SocialButton(props) {
  return <a href={props.href}> <img className="socialButton" src={props.socialLogo} alt={props.alt}></img> </a>  
}

export default SocialButton;