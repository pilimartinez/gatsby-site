import React from 'react';

function Button(props) {
  return <a href={props.href} className="contactIcons"> {props.content} </a>
}

export default Button;