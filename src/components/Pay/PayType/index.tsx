import React, { useEffect, useState } from 'react';
import { CurrencyDollar,CreditCard,Money,Bank } from 'phosphor-react';
import { Container,TextContainer,TypesContainer,ItemPay } from './styles';
import Pays from '../../../json/payForms.json'
import { Icon } from './components';

interface PaysProps {
   id:number,
   description:string;
   active:boolean;
   type:string;
}

export function PayType() {

   const[active,setActive] = useState(0)

   
   const [paysForm,setPaysForm] = useState<PaysProps[]>(()=>{
      return [...Pays]
   })

   function setActiveFalse(id:number) {

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
            
               return (
                  <ItemPay  key={item.id} onClick={ () => {setActiveFalse(item.id)} } isSelected={item.active}>
                     <Icon typeBatata={item.type} />
                     <h3>{item.description}</h3>
                  </ItemPay>
                )
         })}
      </TypesContainer>
   </Container>
  );
}

