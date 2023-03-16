import React from 'react';
import { MapPinLine } from 'phosphor-react';
import { Container,TextContainer,FormPay, FormInput,FormContainer,ContainerContent } from './styles';
import { PayType } from '../PayType';
import { SubmitHandler, useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import * as  zod from 'zod'

const formValidationSchema = zod.object({
   cep: zod.string().min(8, 'Cep inválido').max(8, 'Cep inválido'),
   adress:zod.string().min(5,'Endereço inválido'),
   number:zod.number().min(1,'Numero inválido'),
   complement:zod.string().optional(),
   bairro:zod.string().min(5,'Bairro inválido'),
   city:zod.string().min(5,'Cidade inválida'),
   uf:zod.string().min(2, 'Uf Inválido')
})

type newOrderProps = zod.infer<typeof formValidationSchema>

export function Form(){


   const { register, handleSubmit,formState:{errors}} = useForm<newOrderProps>({
      resolver:zodResolver(formValidationSchema),
   })

   function handleCreateNewOrder(dados:newOrderProps){

      console.log(dados)
   }

   const onSubmit: SubmitHandler<newOrderProps> = (data) => console.log(data);

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
            
         <FormPay onSubmit={handleSubmit(onSubmit)} >
            <FormInput id='cep' placeholder='Cep' width={12.5} {...register('cep',{valueAsNumber:false})}/>
            {errors.cep && ( <p>{errors.cep?.message}</p >)}

            <FormInput id='adress' placeholder='Rua' width={35} {...register('adress')} />
            {errors.adress && ( <p>{errors.adress?.message}</p >)}

            <FormContainer>
               <FormInput id='number' placeholder='Número' width={12.5} {...register('number',{valueAsNumber:true})}/>
               {errors.number && ( <p>{errors.number?.message}</p >)}
               <FormInput id='complement' placeholder='Complemento' width={21.75} {...register('complement')}/>
            </FormContainer>
            <FormContainer>
               <FormInput id='bairro' placeholder='Bairro' width={12.5} {...register('bairro')}/>
               {errors.bairro && ( <p>{errors.bairro?.message}</p >)}
               <FormInput id='city' placeholder='Cidade' width={17.25} {...register('city')}/>
               {errors.city && ( <p>{errors.city?.message}</p >)}
               <FormInput id='uf' placeholder='UF' width={3.75} {...register('uf')}/>
               {errors.uf && ( <p>{errors.uf?.message}</p >)}

               {/* <button type="submit">batata</button> */}
            </FormContainer>  
         </FormPay>

         <PayType/>
      </ContainerContent>
   </Container>
  );
}
