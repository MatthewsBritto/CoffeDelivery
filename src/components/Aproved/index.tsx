import React from 'react';
import Img from '../../assets/Illustration.png'
import { AprovedTitle, Container,TextContainer,InfosContainer,SpanT,Item,Icon } from './styles';
import { CurrencyDollar,Timer,MapPin } from 'phosphor-react';

export function PayAProved()  {
  return (
      <Container>
         <TextContainer>
            <AprovedTitle>Uhu! Pedido confirmado</AprovedTitle>
            <p>Agora é só aguardar seu café chegar até você</p>

            <InfosContainer>  
               <Item>
                  <Icon color='#8047f8'><MapPin size={20} weight='fill'/></Icon>
                  <p>Entrega em <SpanT>Rua João Daniel Martinelli, 102</SpanT> <br/> Farrapos - Porto Alegre, RS</p>
               </Item>
               <Item>
                  <Icon color='#DBAC2C'><Timer size={20} weight='fill'/></Icon>
                  <p>
                     Previsão de entrega <br/>
                     <SpanT>20 min - 30 min </SpanT>
                  </p>
               </Item>
               <Item>
                  <Icon color='#c47f17'><CurrencyDollar size={20} weight='fill'/></Icon>
                  <p>  
                     Pagamento na entrega<br/>
                     <SpanT>Cartão de crédito</SpanT>
                  </p>
               </Item>
            </InfosContainer>
         </TextContainer>

         <img src={Img} />
      </Container>
  );
}

