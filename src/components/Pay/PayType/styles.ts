import styled, { css } from "styled-components";

type TesteProps = {
   isSelected: boolean
}

export const Container = styled.div`
   
   width: 100%;
   padding: 0.8rem;
   background-color: ${props => props.theme.baseCard};
   border-radius:12px;
`

export const TextContainer = styled.div`
   display:flex;
   padding: 0.5rem 0;
   div {
      font-family: 'Roboto', sans-serif;
      margin-left: .5rem;
      h3{
         font-size:1.2rem;
         padding-bottom:.5rem;
         color: ${props => props.theme.baseTitle};
      }
      p{
         font-size:1rem;
         color: ${props => props.theme.baseText};
      }
   }

`

export const TypesContainer = styled.ul`

   display: flex;
   align-items:center;
   gap: 1.3rem;
   width: 95%;

`

export const ItemPay = styled.a<TesteProps>`
      height: 3rem;
      width:30%;
      font-family: 'Roboto', sans-serif;
      list-style:none;
      display:flex;
      align-items:center;
      gap: .35rem;
      padding: .01rem;
      font-size:.75rem;
      justify-content:center;
      text-transform: uppercase;
      border-radius:8px;
      background-color:${props => props.theme.baseInput};
      color: ${props => props.theme.baseText};
      cursor: pointer;
      border: none;
      
      
      ${props => props.isSelected  && css`

         border: 2px solid  ${props.theme.purple} ;
      
      `
      }
      
      h3{
         padding-top:.1rem;
      }

      &:hover{
         border:2px solid ${props => props.theme.purple};
      }
`
