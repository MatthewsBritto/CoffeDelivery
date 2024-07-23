import React, { useContext } from 'react'
import { BuyBtn, CoffeCard, Counter, ImgContainer, LabelContainer, PriceContainer, TextContainer } from './style'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { ListCoffeProps, Order, OrderContext } from '../../../contexts/OrderContext'

export default function ItemCard(item: ListCoffeProps) {

  const { addqtd,removeqtd,handleNewOrder } = useContext(OrderContext)

  return (
    <CoffeCard key={item.id}>

               <ImgContainer>
                     <img src={item.photo} />

                     <LabelContainer key={item.id}>

                        {item.sub && item.sub.map((itemlabel)=>{

                           return(<label key={itemlabel}>{itemlabel}</label>  )
                        })}
                     </LabelContainer>
                  
               </ImgContainer>

               <TextContainer>
                  <h3>{item.type}</h3>
                  <p>{item.description}</p>
               </TextContainer>

               <PriceContainer>
                  <h3>R$<span>{item.price}</span></h3>
                  <Counter>
                     <button onClick={ () => removeqtd(item.id)}><Minus weight='bold'/></button>
                        <p>{item.qtd}</p>
                     <button onClick={ () => addqtd(item.id)}><Plus weight='bold'/></button>

                     <BuyBtn onClick={()=> {handleNewOrder(item)}}>
                        <ShoppingCart weight='fill'/>
                     </BuyBtn>
                  </Counter>
               </PriceContainer>

            </CoffeCard>
  )
}
