import React from 'react';
import { CurrencyDollar,CreditCard,Money,Bank } from 'phosphor-react';
import { Container,TextContainer,TypesContainer } from './styles';

export function PayType() {
  return (
   <Container>
      <TextContainer>
         <CurrencyDollar weight='regular' size={22} color={'#8047f8'}/>
         <div>
            <h3>Pagamento</h3>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
         </div>
      </TextContainer>

      <TypesContainer>
         <li>
            <CreditCard weight='regular'size={18} color={'#8047f8'}/>
            <h3>Cartão de crédito</h3>
         </li>
         <li>
            <Bank weight='regular'size={18} color={'#8047f8'}/>
            <h3>Cartão de débito</h3>
         </li>
         <li>
            <Money weight='regular'size={18} color={'#8047f8'}/>
            <h3>
               Dinheiro
            </h3>
         </li>
      </TypesContainer>
   </Container>
  );
}

