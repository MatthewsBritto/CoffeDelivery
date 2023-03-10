import React from 'react';

import { Container,Item,TotalPrice,FinishedBtn } from './styles';

export function Total(){
  return (
      <Container>
         <Item>
            <p>Total de itens</p>
            <p>R$  29,70</p>
         </Item>
         <Item>
            <p>Entrega</p>
            <p>R$  3,50</p>
         </Item>

         <TotalPrice>
            <h3>Total</h3>
            <p>R$  33,20</p> 
         </TotalPrice>

         <FinishedBtn>Confirmar Pedido</FinishedBtn>
      </Container>
  )
}
