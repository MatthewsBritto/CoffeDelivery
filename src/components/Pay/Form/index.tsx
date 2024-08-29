import React, { useContext, useEffect, useState } from 'react';
import { MapPinLine } from 'phosphor-react';
import { Container,TextContainer,FormPay, FormInput,ContainerContent,Lego,InputsContainer, CepInputContainer, DoubleInputContainer, TripleInputContainer } from './styles';
import { PayType } from '../PayType';
import { SubmitHandler, useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import * as  zod from 'zod'
import { ShoppingCar } from '../ShoppingCar';
import { OrderContext } from '../../../contexts/OrderContext';
import { searchCep } from '../../../services/cepApi';
import { AdressType } from '../../../types/adress';

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

   const [adressInfos, setAdressInfos] = useState<AdressType>({} as AdressType)

   const { register, handleSubmit,formState:{errors}} = useForm<newOrderProps>({
      resolver:zodResolver(formValidationSchema),
   })

   const onSubmitAdressForm: SubmitHandler<newOrderProps> = async (data) => {
      clickFinishedOrder(data,payType)       
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
                     <FormInput 
                        id='cep' 
                        placeholder='Cep'  
                        {...register('cep',{valueAsNumber:false})}
                        onChange={async (event) => {
                           if(event.target.value.length > 7) {
                              const res = await searchCep(Number(event.target.value))
                                 res && setAdressInfos(res)
                           }
                        }}
                        />
                     {errors.cep && ( <label>{errors.cep?.message}</label>)}
                  </CepInputContainer>

                  
                  <FormInput 
                     id='adress' 
                     placeholder='Rua'
                     value={adressInfos.logradouro ? adressInfos.logradouro : ''}
                     {...register('adress')} />
                     { errors.adress && (
                         <label>{errors.adress?.message}</label >
                     )}
                  

                  <DoubleInputContainer>
                     <div>
                        <FormInput id='number' 
                           placeholder='Número'  
                           {...register('number',{valueAsNumber:false})}/>
                           {errors.number && ( 
                              <label>{errors.number?.message}</label >)}
                     </div>
                     <div>
                        <FormInput 
                           id='complement' 
                           placeholder='Complemento'
                           {...register('complement')}
                           />    
                     </div>
                  </DoubleInputContainer>         


                  <TripleInputContainer>
                     <div>
                        <FormInput 
                           id='bairro' 
                           placeholder='Bairro'
                           {...register('bairro')}
                           value={ adressInfos.bairro ? adressInfos.bairro : ''}
                           />
                           {  errors.bairro && ( 
                              <label> {errors.bairro?.message} </label>
                           )}
                     </div>
                     
                     <div>
                        <FormInput 
                           id='city' 
                           placeholder='Cidade'
                           value={ adressInfos.localidade ? adressInfos.localidade : ''}
                           {...register('city')}/>
                           { 
                              errors.city && ( 
                                 <label>{errors.city?.message}</label>
                           )}
                     </div>
                     
                     <div>
                        <FormInput 
                           id='uf' 
                           placeholder='UF' 
                           value={ adressInfos.uf ? adressInfos.uf : ''}
                           {...register('uf')}/>
                           { errors.uf && ( 
                              <label>{errors.uf?.message}</label>
                           )}
                     </div>

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
