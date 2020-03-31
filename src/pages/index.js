import React from "react"
import "../styles/index.scss"
import MainText from "../components/MainText"
import ContactUs from "../components/ContactUs"
import SocialBar from "../components/SocialBar"
import Card from "../components/Card"
import DashTwitter from "../components/DashTwitter"
import Member from "../components/Member"

export default () => <React.Fragment>
<section className="aboutUs">
<img src="../logo.png" alt="logo"className="logo"></img>
<MainText/>
<ContactUs/>
</section>
<section className="hosts">
<h4>{`<WORKSHOPS/>`}</h4>
<Card/>
</section>
<section className="team">
<Member name="Angie Diaz" profile="../profilean.png"/>
<Member name="Miguel Rueda" profile="../mike.jpeg"/>
<Member name="Pilar Martinez" profile="../pilarcv.jpg"/>
<h4>{`<TEAM/>`}</h4>
</section>
<section className="footer">
<SocialBar/>
</section>
</React.Fragment>