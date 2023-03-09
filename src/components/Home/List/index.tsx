import React, { useState } from 'react';
import ListCoffe from '../../../json/coffesTypes.json'
import { Plus, Minus, ShoppingCart, } from 'phosphor-react';

import { Container,TextContainer,ImgContainer
   ,PriceContainer,CoffeCard,Counter,BuyBtn,
   LabelContainer, InputContainer } from './styles';


interface ListCoffeProps {
   id:number;
   type: string;
   price: string;
   Photo:string;
   sub:string[];
   description:string;

}


export function List(){

   const [listCoffe, setListCoffe] = useState<ListCoffeProps[]>(()=> {
      return [...ListCoffe.types]
   });

   
   
  return (
   <Container>
      <InputContainer>
         <h2>Nossos Cafés</h2>      
         <input type="text"/>
      </InputContainer>   

      {listCoffe && listCoffe.map((item) => {
         return(
            <CoffeCard>

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
                     <button><Minus weight='bold'/></button>
                        <p>{1}</p>
                     <button><Plus weight='bold'/></button>

                     <BuyBtn>
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
