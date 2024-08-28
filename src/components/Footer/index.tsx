import React from 'react'
import { FooterContainer, SocialContainer } from './styles'
import Logo from '../../assets/Logo.png'
import { InstagramLogo, FacebookLogo, TiktokLogo } from 'phosphor-react'



export default function Footer() {
  return (
    <FooterContainer>
      <img src={Logo}/>
      
      <SocialContainer>
        <InstagramLogo />
        <FacebookLogo />
        <TiktokLogo />
      </SocialContainer>

      <label>Desenvolvido por @MatthewsBritto</label>

    </FooterContainer>
  )
}
