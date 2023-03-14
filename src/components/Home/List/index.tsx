import React, { useContext, useEffect, useState } from 'react';
import { Plus, Minus, ShoppingCart, } from 'phosphor-react';
import { Order } from '../../../App'
import { Container,TextContainer,ImgContainer
   ,PriceContainer,CoffeCard,Counter,BuyBtn,
   LabelContainer, InputContainer } from './styles';

import {OrderContext} from '../../../App'




export function List(){
   
   const {addqtd,removeqtd,listCoffe,handleNewOrder,orders} = useContext(OrderContext)

   useEffect(() =>{
      console.log(orders)
   },[orders])

   

   
  return (
   <Container>
      <InputContainer>
         <h2>Nossos Cafés</h2>      
         <input type="text"/>
      </InputContainer>   

      {listCoffe && listCoffe.map((item) => {
         return(

            <CoffeCard key={item.id}>

               <ImgContainer>
                     <img src={item.Photo} />

                     <LabelContainer>

                        {item.sub && item.sub.map((itemlabel)=>{

                           return(<label>{itemlabel}</label>  )
                        })}
                     </LabelContainer>
                  
               </ImgContainer>

               <TextContainer>
                  <h3>{item.type}</h3>
                  <p>{item.description}</p>
               </TextContainer>

               <PriceContainer>
                  <h3>R$<span>{item.price}</span></h3>
                  <Counter>
                     <button onClick={ () => removeqtd(item.id)}><Minus weight='bold'/></button>
                        <p>{item.qtd}</p>
                     <button onClick={ () => addqtd(item.id)}><Plus weight='bold'/></button>

                     <BuyBtn onClick={()=> {handleNewOrder(item)}}>
                        <ShoppingCart weight='fill'/>
                     </BuyBtn>
                  </Counter>
               </PriceContainer>

            </CoffeCard>
         )
      })}

   </Container>
  );
}
