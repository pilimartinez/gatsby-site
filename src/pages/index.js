import React from "react"
import "../styles/index.scss"
import MainText from "../components/MainText"
import ContactUs from "../components/ContactUs"
import SocialBar from "../components/SocialBar"
import SideTwitter from "../components/SideTwitter"

export default () => <React.Fragment>
<div className="logoCon"><img src="../logo.png" alt="logo"className="logo"></img></div>
<MainText/>
<ContactUs/>
<SocialBar/>
</React.Fragment>