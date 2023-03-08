import React from 'react';
import { HeroContainer,TextContainer, ItemsContainer,Icon } from './styles';
import { Timer,Package,ShoppingCart,Coffee } from 'phosphor-react';
import ImgHero from '../../../assets/Imagem.png'


export function Hero() {
  return (
   <HeroContainer>
      <TextContainer>
         <h1>
            Encontre o café perfeito
            para qualquer hora do dia
         </h1>
         <h4>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora!
         </h4>
         <ItemsContainer>
            <li>
               <Icon color={'blue'}><ShoppingCart  weight='fill'/></Icon>
               <p>Compra simples e segura</p>
            </li>
            <li>
               <Icon color={'blue'}><Package weight='fill'/></Icon>
               <p>Compra simples e segura</p>
            </li>
            <li>
               <Icon color={'blue'}><Timer weight='fill'/></Icon>
               <p>Compra simples e segura</p>
            </li>
            <li>
               <Icon color={'blue'}><Coffee weight='fill'/></Icon>
               <p>Compra simples e segura</p>
            </li> 
         </ItemsContainer>
      </TextContainer>

      <img src={ImgHero} />
   </HeroContainer>
  )
}
