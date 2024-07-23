import React, { useContext, useEffect, useState } from 'react';
import { ListCoffeProps, Order } from '../../../contexts/OrderContext'
import { Container, InputContainer } from './styles';
import  Card  from '../Card'

import {OrderContext} from '../../../contexts/OrderContext'
import { useForm} from 'react-hook-form'

interface  pesq {
   search:string
}

export function List(){
   
   const { listCoffe } = useContext(OrderContext)

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
            <Card 
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

   </Container>
  );
}
