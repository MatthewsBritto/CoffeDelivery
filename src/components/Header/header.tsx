
import { HeaderContainer,Actions } from "./syles"
import Logo from '../../assets/Logo.png'
import {MapPin,ShoppingCart} from 'phosphor-react'


export function Header(){
   return (
   <HeaderContainer>
      <img src={Logo}/>

      <Actions>
         <div>
             <MapPin size={22} weight="fill"/>Ribeirão Preto
         </div>
         <button>
            <ShoppingCart size={22} weight="fill"/>
         </button>
      </Actions>
   </HeaderContainer>
   )
}