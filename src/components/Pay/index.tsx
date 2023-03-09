import React from 'react';
import { Form } from './Form'
import { ShoppingCar } from './ShoppingCar';
import { Container } from './styles'

export function Pay(){
  return (
   <Container>
      <Form/>
      <ShoppingCar/>
   </Container>
  ) ;
}

