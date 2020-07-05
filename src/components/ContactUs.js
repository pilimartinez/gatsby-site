import React from 'react';
import Button from '../components/Button.js'

const ContactUs = () => {
  return (<div className="contactUs">
            <Button content="CONTACTANOS" href={"mailto:asaditojs@gmail.com"}></Button>
            <Button content="CODIGO DE CONDUCTA" href="../codeOfConduct" ></Button>      
        </div>
  )}

export default ContactUs;