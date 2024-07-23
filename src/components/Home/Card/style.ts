import styled from "styled-components"

export const CoffeCard = styled.div`
   	width:20%;
      background-color: ${props => props.theme.baseCard};
      margin-right:1rem;
      display:flex;
      flex-direction:column;
      justify-content:space-between
           
`

export const ImgContainer = styled.div`
   text-align: center;
   display: flex;
   flex-direction: column;
   align-items:center;
   img{
      width: 7.5rem;
      height: 7.5rem;
      /* padding: 1rem; */
      position:relative;
      top: -20px;
   }
   label{
      background-color: ${props => props.theme.yellowlight};
      color: ${props => props.theme.darkyellow};
      padding: .25rem .75rem;
      border-radius:100px;
      font-family:'Roboto';
      font-weight:600;
      font-size:.9rem;
      margin:0 .2rem;
   }

`

export const TextContainer = styled.div`

   width: 100%;
   text-align:center;

   h3{
      padding: .5rem 0 ;
      margin: .5rem 0;
      font-family:'Baloo 2';
      color: ${props => props.theme.baseTitle};
      font-size:1.5rem;

   }

   p{
      font-size:1rem;
      color: ${props => props.theme.baseLabel};
      font-family:'Roboto';
      padding: 0 .28rem;
      line-height:130%;
   }
   
`

export const PriceContainer = styled.div`

   width: 100%;
   margin: 1rem 0;
   padding: .5rem 1rem;
   font-size:.7rem;
   font-family:'Roboto';
   color: ${props => props.theme.baseTitle};
   display: flex;
   span{
      font-family:'Baloo 2';
      font-size: 1.5rem;
      padding: 0 .2rem;
   }
`

export const Counter = styled.div`
   display: flex;
   width:100%;
   background-color:${props => props.theme.purpleLight};
   font-size:1rem;
   align-items: center;
   font-size:1rem;
   justify-content:space-between;
   gap: 8px;
   margin-left: .5rem;
   border-bottom-left-radius: 8px;
   border-top-left-radius: 8px;

   p  {
      font-size:1.2rem;
   }
   button{
      /* width: 1rem; */
      margin:0 .4rem;
      font-size:1rem;
      background-color:transparent;
      color: ${props => props.theme.purpleDark};
      cursor: pointer;
      border:none;
      line-height:50%;

   }
`

export const BuyBtn = styled.a`

   /* width:2.4rem; */
   color: ${props => props.theme.white};
   font-size:1.4rem;
   padding: 0.2rem;
   background-color: ${props => props.theme.purpleDark};
   text-align:center;
   border-bottom-right-radius: 8px;
   border-top-right-radius: 8px;
   cursor:pointer;
   display: flex;
   align-items:center;
   justify-content:center;
   height:100%;
   

`

export const LabelContainer = styled.div`

   width:100%;
   display: flex;
   align-items:center;
   justify-content: center;

`