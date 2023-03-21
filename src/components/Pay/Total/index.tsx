import React, { ReactNode, useContext,useState,useEffect } from 'react';

import { Container,Item,TotalPrice,FinishedBtn } from './styles';
import { OrderContext } from '../../../contexts/OrderContext';
import { newOrderProps } from '../Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { formValidationSchema } from '../Form'; 
import {zodResolver} from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom';
// import { submitProps } from '../ShoppingCar';

// type TotalProps = submitProps 


export function Total() {

   const {total,orders,finishedOrder} = useContext(OrderContext)

   const [allTotal,setAllTotal] = useState(0)

   const [entrega,setEntrega] = useState(3.50)

   let finished: boolean = orders.length === 0 || finishedOrder === undefined




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

   console.log(finished) 
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

            <Link to={'aproved'} type='submit'>
               <FinishedBtn disabled={finished} type='submit'>Confirmar Pedido
            
               </FinishedBtn>
            </Link>
      </Container>
  )
}
