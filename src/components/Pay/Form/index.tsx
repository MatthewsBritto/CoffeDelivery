import React from 'react';
import { MapPinLine } from 'phosphor-react';
import { Container,TextContainer,FormPay, FormInput,FormContainer,ContainerContent } from './styles';
import { PayType } from '../PayType';

export function Form(){
  return (
   <Container>

      <h2>Complete seu pedido</h2>

      <ContainerContent>

         
            <TextContainer>
               <MapPinLine size={22} color='#c47f17'/>
               <div>
                  <h3>Endereço de Entrega</h3>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
               </div>
            </TextContainer>
            
         <FormPay>
            <FormInput id='cep' placeholder='Cep' width={12.5}/>
            <FormInput id='adress' placeholder='Rua' width={35} />
            <FormContainer>
               <FormInput id='number' placeholder='Número' width={12.5} />
               <FormInput id='complement' placeholder='Complemento' width={21.75}/>
            </FormContainer>
            <FormContainer>
               <FormInput id='bairro' placeholder='Bairro' width={12.5} />
               <FormInput id='city' placeholder='Cidade' width={17.25} />
               <FormInput id='uf' placeholder='UF' width={3.75} />
            </FormContainer>  
         </FormPay>

         <PayType/>
      </ContainerContent>
   </Container>
  );
}
