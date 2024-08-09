import React, { useContext, useEffect, useState } from 'react';
import {Minus,Plus,Trash } from 'phosphor-react';
import { Total } from '../Total';
import { ListCoffeProps, OrderContext } from '../../../contexts/OrderContext';
import { CarContainer,Counter,BuyBtn
  ,CarItemsContainer,Item,TextContainer,ItemTotal,
  RemoveBtn, BtnContainer } from './styles';

//  export interface submitProps {
//     submitingForm : React.Dispatch<React.SetStateAction<boolean>> 
    
//  }

export function ShoppingCar() {

  const {addqtdItn,removeqtdItn,removeItn,orders} = useContext(OrderContext) 



  return (
   <CarContainer>
      <h2>Cafés selecionados</h2>

      <CarItemsContainer>

          {orders && orders.map((item) => {
            return (
              <Item key={item.id}>
                <img src={item.photo}/>
  
                <TextContainer>
  
                  <h3>{item.type}</h3>
    
                  <BtnContainer>
                    <Counter>
                        <a onClick={ () => {removeqtdItn(item.id)} }><Minus weight='bold'/></a>
                            <p>{item.qtd}</p>
                        <a onClick={ () => {addqtdItn(item.id)} }><Plus weight='bold'/></a>
                    </Counter>
  
                        <RemoveBtn onClick={ () => {removeItn(item.id)}}>
                            <Trash size={18} weight='regular'/>
                            <p>Remover</p>
                        </RemoveBtn>
                  </BtnContainer>
                </TextContainer>
  
                <ItemTotal>R$ {item.price}</ItemTotal>
              </Item>   
            )
          })}

        

        <Total/>

      </CarItemsContainer>
  </CarContainer>
  );
}

