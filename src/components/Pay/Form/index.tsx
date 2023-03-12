import React from 'react';
import { MapPinLine } from 'phosphor-react';
import { Container,TextContainer,FormPay, FormInput,FormContainer,ContainerContent } from './styles';
import { PayType } from '../PayType';
import { SubmitHandler, useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import * as  zod from 'zod'

const formValidationSchema = zod.object({
   cep: zod.number().min(8, 'Cep inválido').max(8,'Cep inválido'),
   adress:zod.string().min(5),
   number:zod.number().min(1),
   complement:zod.string(),
   bairro:zod.string().min(5),
   city:zod.string().min(5),
   uf:zod.string().min(2, 'Uf Inválido')
})

type newOrderProps = zod.infer<typeof formValidationSchema>

export function Form(){


   const { register, handleSubmit,formState} = useForm<newOrderProps>({
      resolver:zodResolver(formValidationSchema),
   })

   function handleCreateNewOrder(dados:newOrderProps){

      console.log(dados)
   }

   console.log(
      formState.errors
   )

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
            
         <FormPay onSubmit={handleSubmit(handleCreateNewOrder)} >
            <FormInput id='cep' placeholder='Cep' width={12.5} {...register('cep',{valueAsNumber:true})}/>
            <FormInput id='adress' placeholder='Rua' width={35}  {...register('adress')} />
            <FormContainer>
               <FormInput id='number' placeholder='Número' width={12.5} {...register('number',{valueAsNumber:true})}/>
               <FormInput id='complement' placeholder='Complemento' width={21.75} {...register('complement')}/>
            </FormContainer>
            <FormContainer>
               <FormInput id='bairro' placeholder='Bairro' width={12.5} {...register('bairro')}/>
               <FormInput id='city' placeholder='Cidade' width={17.25} {...register('city')}/>
               <FormInput id='uf' placeholder='UF' width={3.75} {...register('uf')}/>

               <button type="submit">batata</button>
            </FormContainer>  
         </FormPay>

         <PayType/>
      </ContainerContent>
   </Container>
  );
}
