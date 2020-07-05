import React from 'react';

const SocialButton = (props) => {
  return (
  <a href={props.href}  target="_blank"> 
    <img className="socialButton" src={props.socialLogo} alt={props.alt}>
    </img> 
  </a>  
  )}

export default SocialButton;