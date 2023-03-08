import styled from "styled-components";


export const HeroContainer = styled.div`

   width: 100%;
   height: 34rem;
   display: flex;
   justify-content:space-between;
   align-items:center;
   padding: 3rem 10rem;

   img{
      width: 29.75rem;
      height:23rem;
      margin-right:6rem;
      margin-top:1rem;
   }

`

export const TextContainer = styled.div`

   display: flex;
   flex-direction: column;
   align-items: flex-start;
   padding: 0px;
   gap: 1rem;
   justify-content:center;
   width: 36.75rem;
   height: 16rem;
 

   h1{
      /* Title/Title XL */
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 3.1rem;
      line-height: 130%;
      padding:0 0 1rem 0 ;
   }
   h4{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 130%;
      padding:0 0 1rem 0;
   }
`

export const ItemsContainer = styled.ul `
   display: flex;
   flex-wrap:wrap;
   width: 35.43rem;
   height: 5.25rem;
   gap: 2rem;
   li{
      list-style:none;
      width: 40%;
      display: flex;
      gap: 1rem; 
      align-items:center;
      
   }

`

export const Icon = styled.div`

   background-color:${props  => props.color};
   color: ${props => props.theme['white']};

   
   border-radius:50%;
   padding:.2rem;
   display: flex;
   align-items:center;
   justify-content:center;
   width: 1.8rem;
   height: 1.8rem;
   text-align:center;
   

`

