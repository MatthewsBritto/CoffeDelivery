import React, { useContext, useEffect, useState } from 'react';
import { Plus, Minus, ShoppingCart, } from 'phosphor-react';
import { ListCoffeProps, Order } from '../../../contexts/OrderContext'
import { Container,TextContainer,ImgContainer
   ,PriceContainer,CoffeCard,Counter,BuyBtn,
   LabelContainer, InputContainer } from './styles';

import {OrderContext} from '../../../contexts/OrderContext'
import { useForm} from 'react-hook-form'

interface  pesq {
   search:string
}

export function List(){
   
   const {addqtd,removeqtd,listCoffe,handleNewOrder,orders} = useContext(OrderContext)

   const {watch,register} = useForm<pesq>()

   let teste = watch('search')

   const [x,setX] = useState<ListCoffeProps[]>(() => {
      return [...listCoffe]
   })

   

   function filter ( teste:string) {
      const results = listCoffe.filter(
         item => item.type.toLowerCase().indexOf(teste) !== -1 ||
         item.description.toLowerCase().indexOf(teste) !== -1);
      setX(results)      
   }

   useEffect(() =>{

      filter(teste)
      
   },[teste])

   

   
  return (
   <Container>
      <InputContainer>
         <h2>Nossos Cafés</h2>      
         <input id='search' {...register('search')} type="text"/>
      </InputContainer>   

      {x && x.map((item) => {
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
