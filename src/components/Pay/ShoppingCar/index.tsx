import React, { useContext, useEffect, useState } from 'react';
import Img from '../../../assets/Type=Expresso.png'
import { ShoppingCart,Minus,Plus,Trash } from 'phosphor-react';
import { Total } from '../Total';

import { ListCoffeProps, OrderContext } from '../../../App';
import { CarContainer,Counter,BuyBtn
  ,CarItemsContainer,Item,TextContainer,ItemTotal,
  RemoveBtn, BtnContainer } from './styles';

export function ShoppingCar(){

  const {addqtdItn,removeqtdItn,removeItn,orders} = useContext(OrderContext) 



  return (
   <CarContainer>
      <h2>Cafés selecionados</h2>

      <CarItemsContainer>

          {orders && orders.map((item) => {
            return (
              <Item key={item.id}>
                <img src={item.Photo} />
  
                <TextContainer>
  
                  <h3>{item.type}</h3>
    
                  <BtnContainer>
                    <Counter>
                        <button onClick={ () => removeqtdItn(item.id) }><Minus weight='bold'/></button>
                            <p>{item.qtd}</p>
                        <button onClick={ () => addqtdItn(item.id) }><Plus weight='bold'/></button>
                    </Counter>
  
                        <RemoveBtn onClick={ () => {removeItn(item.id)}}>
                            <Trash size={18} weight='regular'/>
                            <p>Remover</p>
                        </RemoveBtn>
                  </BtnContainer>
                </TextContainer>
  
                <ItemTotal>R$ 9,90</ItemTotal>
              </Item>   
            )
          })}

        

        <Total/>

      </CarItemsContainer>
  </CarContainer>
  );
}

