import React from 'react';

const Button = (props) => {
  return (<a href={props.href}  target="_blank" className="contactIcons"> {props.content} </a>)
}

export default Button;