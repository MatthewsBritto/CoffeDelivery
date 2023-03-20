
import { HeaderContainer,Actions } from "./syles"
import Logo from '../../assets/Logo.png'
import {MapPin,ShoppingCart} from 'phosphor-react'
import { useContext, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { OrderContext } from "../../contexts/OrderContext"



export function Header(){  
   
   const {updateAllPrices,orders } = useContext(OrderContext) 

      // let numOrders : number = orders.length
      
   
   useEffect(() => {
      console.log(orders.length)
   },[orders])
   

   return (
   <HeaderContainer>
      <NavLink to='/'>
         <img src={Logo} />
      </NavLink>

      <Actions num={orders.length.toString()}>
         <div>
             <MapPin size={22} weight="fill"/>Ribeirão Preto
         </div>

         <NavLink to='pay' onClick={()=> {updateAllPrices(orders)}}>
            <ShoppingCart size={22} weight="fill" />
         </NavLink>
         
      </Actions>
   </HeaderContainer>
   )
}