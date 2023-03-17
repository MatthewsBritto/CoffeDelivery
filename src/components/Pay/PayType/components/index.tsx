import { Bank, CreditCard, IconProps, Money } from 'phosphor-react';
import React from 'react';

interface props {
   typeBatata:string
}

const Icon:React.FC<props> = ({typeBatata}) =>{

  switch (typeBatata.toUpperCase()) {
   case 'BANK': return <Bank  weight='regular' size={18} color={'#8047f8'}/> 
   case 'CREDIT': return <CreditCard weight='regular' size={18} color={'#8047f8'}/> 
   case 'MONEY': return <Money weight='regular' size={18}   color={'#8047f8'}/>    
  
   default:
      return null
      break;
  }
}

export {Icon}