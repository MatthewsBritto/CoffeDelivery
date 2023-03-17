import React, { useState } from 'react';
import { Form } from './Form'
import { ShoppingCar } from './ShoppingCar';
import { Container } from './styles'

export function Pay(){

  const [submitingForm,setSubmitingForm] = useState(false);
  
  return (
   <Container>
      <Form />
   </Container>
  ) ;
}

