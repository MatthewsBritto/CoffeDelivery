import React from 'react'
import { FooterContainer, SocialContainer } from './styles'
import Logo from '../../assets/Logo.png'

export default function Footer() {
  return (
    <FooterContainer>
      <img src={Logo}/>
      
      <SocialContainer>
        <h3>Nossas Redes</h3>


      </SocialContainer>

    </FooterContainer>
  )
}
