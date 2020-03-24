import React from 'react';
import Button from '../components/Button.js'

function ContactUs() {
  return <div className="contactUs">
            <Button content="CONTACTANOS" href={"mailto:asaditojs@gmail.com"}></Button>
            <Button content="CODIGO DE CONDUCTA" href={"#"} ></Button>      
        </div>
  
}

export default ContactUs;