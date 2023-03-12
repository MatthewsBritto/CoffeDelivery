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
   qtd:number;

}

interface Order {

   id:number;
   description:string;
   quantidade:number;
   price:number;

}


export function List(){

   const [orders,SetOrders] = useState<Order[]>([])

   const [listCoffe, setListCoffe] = useState<ListCoffeProps[]>(()=> {
      return [...ListCoffe.types]
   });

   // function handleNewOrder(data:Order){
   //    const newOrder: Order = {
   //       id:data.id,
   //       description:data.description,
   //       quantidade: data.quantidade,
   //       price:data.price
   //    }

   //    SetOrders((state) => [...state,newOrder])

   // }
   function addCoffe(id:number){
      let item = listCoffe[id]

      if(item) {
         item.qtd = item.qtd + 1
      }      
      setListCoffe([item])
   }
   
   
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
                     <button><Minus weight='bold'/></button>
                        <p>{item.qtd}</p>
                     <button onClick={ () => addCoffe(item.id)}><Plus weight='bold'/></button>

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
