
import { HeaderContainer,Actions } from "./syles"
import Logo from '../../assets/Logo.png'
import {MapPin,ShoppingCart} from 'phosphor-react'
import { useContext } from "react"
import { NavLink } from "react-router-dom"



export function Header(){  

      // const {setLoggedIn,loggedIn} = useContext(LoginContext)
   
   

   return (
   <HeaderContainer>
      <NavLink to='/'>
         <img src={Logo} />
      </NavLink>

      <Actions>
         <div>
             <MapPin size={22} weight="fill"/>Ribeirão Preto
         </div>
         <NavLink to='pay'>
            <ShoppingCart size={22} weight="fill"/>
         </NavLink>
         
      </Actions>
   </HeaderContainer>
   )
}