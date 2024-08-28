import React, { useContext, useEffect } from 'react';
import { MapPinLine } from 'phosphor-react';
import { Container,TextContainer,FormPay, FormInput,ContainerContent,Lego,InputsContainer, CepInputContainer, DoubleInputContainer, TripleInputContainer } from './styles';
import { PayType } from '../PayType';
import { SubmitHandler, useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import * as  zod from 'zod'
import { ShoppingCar } from '../ShoppingCar';
import { OrderContext } from '../../../contexts/OrderContext';

export const formValidationSchema = zod.object({
   cep: zod.string().min(8, 'Cep inválido').max(8, 'Cep inválido'),
   adress:zod.string().min(5,'Endereço inválido'),
   number:zod.string().min(1,'Informe o número'),
   complement:zod.string().optional(),
   bairro:zod.string().min(5,'Bairro inválido'),
   city:zod.string().min(5,'Cidade inválida'),
   uf:zod.string().min(2, 'Uf Inválido')
})

export type newOrderProps = zod.infer<typeof formValidationSchema>


export function Form() {

   const {clickFinishedOrder,payType} = useContext(OrderContext)

   const { register, handleSubmit,formState:{errors}} = useForm<newOrderProps>({
      resolver:zodResolver(formValidationSchema),
   })

   const onSubmitAdressForm: SubmitHandler<newOrderProps> = (data) => {
      // clickFinishedOrder(data,payType)
      console.log(data)
   }

   

   return (

   <Container>

      <ContainerContent>
         <h2>Complete seu pedido</h2>

         <FormPay  onSubmit={handleSubmit(onSubmitAdressForm)} >
         
            <Lego>
               <InputsContainer>
                  <TextContainer>
                     <MapPinLine size={22} color='#c47f17'/>
                     <div>
                        <h3>Endereço de Entrega</h3>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                     </div>
                  </TextContainer>

                  <CepInputContainer>
                     <FormInput id='cep' placeholder='Cep'  {...register('cep',{valueAsNumber:false})}/>
                     {errors.cep && ( <label>{errors.cep?.message}</label>)}
                  </CepInputContainer>

                  <div>
                     <FormInput id='adress' placeholder='Rua'  {...register('adress')} />
                     {errors.adress && ( <label>{errors.adress?.message}</label >)}
                  </div>   

                  <DoubleInputContainer>
                     <FormInput id='number' placeholder='Número'  {...register('number',{valueAsNumber:false})}/>
                     {errors.number && ( 
                        <label>{errors.number?.message}</label >)}

                     <FormInput 
                        id='complement' 
                        placeholder='Complemento'
                        {...register('complement')}
                        />    
                  </DoubleInputContainer>         


                  <TripleInputContainer>
                     <FormInput 
                        id='bairro' 
                        placeholder='Bairro'
                        {...register('bairro')}
                        />
                        {  errors.bairro && ( 
                           <label> {errors.bairro?.message} </label>
                        )}
                        
                        <FormInput 
                           id='city' 
                           placeholder='Cidade'
                           {...register('city')}/>
                           { 
                              errors.city && ( 
                                 <label>{errors.city?.message}</label>
                           )}
                        
                        <FormInput 
                           id='uf' 
                           placeholder='UF' 
                           {...register('uf')}/>
                           { errors.uf && ( 
                              <label>{errors.uf?.message}</label>
                           )}

                  </TripleInputContainer>
                  
               </InputsContainer>
               <PayType/>
            </Lego>   

            <ShoppingCar/>
         </FormPay>
      </ContainerContent>
   </Container>
  );
}
