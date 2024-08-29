import React, { useContext, useEffect, useState } from 'react';
import { ListCoffeProps, Order } from '../../../contexts/OrderContext'
import { Container, InputContainer, ListContainer } from './styles';
import  Card  from '../Card'

import {OrderContext} from '../../../contexts/OrderContext'
import { useForm} from 'react-hook-form'

interface  pesq {
   search:string
}

export function List(){
   
   const { listCoffe } = useContext(OrderContext)

   const {watch,register} = useForm<pesq>()

   let word = watch('search')

   const [x,setX] = useState<ListCoffeProps[]>(() => {
      return [...listCoffe]
   })

   

   function filter ( word:string) {
      const results = listCoffe.filter(
         item => item.type.toLowerCase().indexOf(word) !== -1 ||
         item.description.toLowerCase().indexOf(word) !== -1);
      setX(results)      
   }

   useEffect(() =>{

      filter(word)
      
   },[word])

   

   
  return (
   <Container>
      <InputContainer>
         <h2>Nossos Cafés</h2>      
         <input id='search' {...register('search')} type="text" placeholder='Encontre seu café ...'/>
      </InputContainer>   

      <ListContainer>
         {x && x.map((item) => {
            return (
               <Card 
                  key={item.id}
                  id={item.id}
                  photo={item.photo}
                  price={item.price}
                  qtd={item.qtd}
                  sub={item.sub}
                  type={item.type}
                  description={item.description}
               />
               
            )
         })}
      </ListContainer>

      
   </Container>
  );
}
