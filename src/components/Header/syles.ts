import styled from "styled-components";

interface ShopProps{
   num: string
}

export const HeaderContainer = styled.header`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 2rem 10rem;
height: 6.5rem;


background: #FAFAFA;
   
   img{
      cursor: pointer;
   }

`

export const Actions = styled.nav<ShopProps>`
   display: flex;
   flex-direction: row;
   justify-content: flex-end;
   align-items: center;
   padding: 0px;
   gap: .75rem;
   margin-right: 7rem;
   width: 12rem;
   height: 2.37rem;


   /* Inside auto layout */

   flex: none;
   order: 1;
   flex-grow: 0;  

   div{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: .5rem;
      gap: .25rem;
      font-family: 'Roboto', sans-serif;
      width: 8.93rem;
      height: 2.37rem;

      /* Brand/Purple Light */

      background: ${props => props.theme[ 'baseButton']};
      color: ${props => props.theme[ 'purpleDark']};
      border-radius: 6px;

      /* Inside auto layout */

      flex: none;
      order: 0;
      flex-grow: 0;
   }
   a{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: .5rem;
      gap: .25rem;
      border:none;
      width:2.37rem ;
      height: 2.37rem;

      /* Brand/Yellow Light */

      background: ${props=> props.theme['yellowlight']};
      color: ${props => props.theme['darkyellow']};
      border-radius: 6px;
      cursor: pointer;

      /* Inside auto layout */

      flex: none;
      order: 1;
      flex-grow: 0;
   }
   a:after{
      content: '${props => props.num !== '0' ? props.num : ''}';
      font-size:1rem;
      color: ${props => props.theme.white};
      width: 1rem;
      height: 1rem;
      
   }

`