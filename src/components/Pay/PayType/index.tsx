import React, { useEffect, useState } from 'react';
import { CurrencyDollar,CreditCard,Money,Bank } from 'phosphor-react';
import { Container,TextContainer,TypesContainer,ItemPay } from './styles';
import Pays from '../../../json/payForms.json'

interface PaysProps {
   id:number,
   description:string;
   active:boolean;
}

export function PayType() {

   const[active,setActive] = useState(0)

   
   const [paysForm,setPaysForm] = useState<PaysProps[]>(()=>{
      return [...Pays]
   })

   function setActiveFalse(id:number){
      console.log(id)
      let newlist:PaysProps[] = []
      let itemIndex = paysForm.findIndex(item => item.id === id)
      
      if(itemIndex === -1) return

      newlist = paysForm.map((item) =>{
         return {
            ...item,
            active:item.id ===id
         }
/*          if(itemIndex === item.id){
            return{
               ...item,
               active:true
   
            }
         } else {
            return{
               ...item,
               active:false
   
            }

         } */


      })


      setPaysForm(newlist)

   }
   
   console.log(paysForm)
   
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

         {paysForm && paysForm.map((item) => {
            
            if(item.id === 10){
               return (
                  <ItemPay key={item.id} onClick={ () => setActiveFalse(item.id) } isSelected={item.active}>
                     <CreditCard weight='regular'size={18} color={'#8047f8'}/>
                     <h3>{item.description}</h3>
                  </ItemPay>
                )
            }
            if(item.id === 20){
               return (
                  <ItemPay key={item.id} onClick={()=> setActiveFalse(item.id)} isSelected={item.active}>
                     <Bank weight='regular'size={18} color={'#8047f8'}/>
                     <h3>{item.description}</h3>
                  </ItemPay>
                )
            }
            if(item.id === 30){
               return (
                  <ItemPay key={item.id} onClick={()=> setActiveFalse(item.id)} isSelected={item.active} >
                     <Money weight='regular'size={18} color={'#8047f8'}/>
                     <h3>{item.description}</h3>
                  </ItemPay>
                )
            }
         })}
      </TypesContainer>
   </Container>
  );
}

