import React from 'react';
import SocialButton from '../components/SocialButton'

const SocialBar = () => {
  return (
  <div className="socialBar">
          <SocialButton href={"https://twitter.com/asaditojs"} socialLogo="../twitter.svg" alt="twitter"></SocialButton>
          <SocialButton href={"https://instagram.com/asaditojs/"} socialLogo="../instagram.svg" alt="instagram"></SocialButton>
          <SocialButton href={"https://linkedin.com/company/asaditojs"} socialLogo="../linkedin.svg" alt="linkedin"></SocialButton>
          <SocialButton href={"https://youtube.com/channel/UCRieqPrXWChauLv0wqO0rbA"} socialLogo="../youtube.svg" alt="youtube"></SocialButton>       
  </div>
  )}

export default SocialBar;