import React, { ReactNode, useContext,useState,useEffect } from 'react';

import { Container,Item,TotalPrice,FinishedBtn } from './styles';
import { OrderContext } from '../../../contexts/OrderContext';
import { newOrderProps } from '../Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { formValidationSchema } from '../Form'; 
import {zodResolver} from '@hookform/resolvers/zod'
// import { submitProps } from '../ShoppingCar';

// type TotalProps = submitProps 


export function Total() {

   const {total} = useContext(OrderContext)

   const [allTotal,setAllTotal] = useState(0)

   const [entrega,setEntrega] = useState(3.50)


   const onSubmit: SubmitHandler<newOrderProps> = (data) => console.log(data);

   const { register, handleSubmit,formState:{errors}} = useForm<newOrderProps>({
      resolver:zodResolver(formValidationSchema),
   })


   useEffect(() => {

      updateTotal()
   },[total])

   function updateTotal(){
      let x : number = total 
      let y = entrega

      if(x & y){

         setAllTotal(x + y)
      }     

   }

   return (
      <Container>
         <Item>
            <p>Total de itens</p>
            <p>R$  {total}</p>
         </Item>
         <Item>
            <p>Entrega</p>
            <p>R$ <>{entrega}</> </p>
         </Item>

         <TotalPrice>
            <h3>Total</h3>
            <p>R$ <>{allTotal}</> </p> 
         </TotalPrice>

         
            <FinishedBtn type='submit'>Confirmar Pedido</FinishedBtn>
      </Container>
  )
}
