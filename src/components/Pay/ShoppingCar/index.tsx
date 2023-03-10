import React from 'react';
import Img from '../../../assets/Type=Expresso.png'
import { ShoppingCart,Minus,Plus,Trash } from 'phosphor-react';
import { Total } from '../Total';


import { CarContainer,Counter,BuyBtn
  ,CarItemsContainer,Item,TextContainer,ItemTotal,
  RemoveBtn, BtnContainer } from './styles';

export function ShoppingCar(){
  return (
   <CarContainer>
      <h2>Cafés selecionados</h2>

      <CarItemsContainer>
        <Item>
            <img src={Img}  />

            <TextContainer>

                <h3>Expresso Tradicional</h3>



                <BtnContainer>
                  <Counter>
                      <button><Minus weight='bold'/></button>
                          <p>{1}</p>
                      <button><Plus weight='bold'/></button>
                  </Counter>

                      <RemoveBtn>
                          <Trash size={18} weight='regular'/>
                          <p>Remover</p>
                      </RemoveBtn>
                </BtnContainer>
            </TextContainer>

            <ItemTotal>R$ 9,90</ItemTotal>
        </Item>    

        <Total/>

      </CarItemsContainer>
  </CarContainer>
  );
}

