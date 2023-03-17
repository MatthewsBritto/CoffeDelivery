import React, { useEffect } from 'react';
import { MapPinLine } from 'phosphor-react';
import { Container,TextContainer,FormPay, FormInput,ContainerContent,Lego,InputsContainer } from './styles';
import { PayType } from '../PayType';
import { SubmitHandler, useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import * as  zod from 'zod'
import { ShoppingCar } from '../ShoppingCar';

export const formValidationSchema = zod.object({
   cep: zod.string().min(8, 'Cep inválido').max(8, 'Cep inválido'),
   adress:zod.string().min(5,'Endereço inválido'),
   number:zod.number().min(1,'batata'),
   complement:zod.string().optional(),
   bairro:zod.string().min(5,'Bairro inválido'),
   city:zod.string().min(5,'Cidade inválida'),
   uf:zod.string().min(2, 'Uf Inválido')
})

export type newOrderProps = zod.infer<typeof formValidationSchema>

// interface FormProps {
//    submitForm: boolean
//    setSubmitingForm : React.Dispatch<React.SetStateAction<boolean>>  
// }

export function Form() {

   

   const { register, handleSubmit,formState:{errors}} = useForm<newOrderProps>({
      resolver:zodResolver(formValidationSchema),
   })

   const onSubmitAdressForm: SubmitHandler<newOrderProps> = (data) => {
      console.log(data);

      
   
   }

   // useEffect(() => {
   //    if(!submitForm) return 
   //    console.log(submitForm);

   //       handleSubmit(onSubmitAdressForm)
   // }, [submitForm])

   

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
                  <div>

                     <FormInput id='cep' placeholder='Cep' width={12.5} {...register('cep',{valueAsNumber:false})}/>
                     {errors.cep && ( <label>{errors.cep?.message}</label>)}
                  </div>

                  <div>
                     <FormInput id='adress' placeholder='Rua' width={35} {...register('adress')} />
                     {errors.adress && ( <label>{errors.adress?.message}</label >)}

                  </div>
                  
              
                     <div>
                        <FormInput id='number' placeholder='Número' width={12.5} {...register('number')}/>
                        {errors.number && ( <label>{errors.number?.message}</label >)}
                     </div>
                     
                     
                        <FormInput id='complement' placeholder='Complemento' width={21.75} {...register('complement')}/>

                  
                     <div>
                        <FormInput id='bairro' placeholder='Bairro' width={12.5} {...register('bairro')}/>
                        {errors.bairro && ( <label>{errors.bairro?.message}</label>)}
                     </div>
                     
                     <div>
                        <FormInput id='city' placeholder='Cidade' width={17.25} {...register('city')}/>
                        {errors.city && ( <label>{errors.city?.message}</label>)}
                     </div>
                     
                     <div>
                        <FormInput id='uf' placeholder='UF' width={3.75} {...register('uf')}/>
                        {errors.uf && ( <label>{errors.uf?.message}</label>)}
                     </div>

                     {/* <button type="submit">batata</button> */}
                  
               </InputsContainer>
               <PayType/>
            </Lego>   

            <ShoppingCar/>
         </FormPay>
      </ContainerContent>
   </Container>
  );
}
