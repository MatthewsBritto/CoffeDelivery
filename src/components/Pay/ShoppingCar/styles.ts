import styled from "styled-components";


export const CarContainer = styled.div`

   width: 25rem;
   height: 35rem;
   margin:  1rem 2rem ;

   h2{
      margin:1rem 0 2rem 0;
      color: ${props => props.theme.baseTitle};
      font-family: 'baloo 2',  sans-serif;
   }
`

export const CarItemsContainer = styled.div`

   width: 100%;
   background-color: ${pro => pro.theme.baseCard};
   padding: 1rem ;
   border-radius: 0 30px 0 30px;
`

export const BuyBtn = styled.a`

   width:2.4rem;
   color: ${props => props.theme.white};
   font-size:1.4rem;
   padding: 0.2rem;
   background-color: ${props => props.theme.purpleDark};
   text-align:center;
   border-radius:8px;
   cursor:pointer;
   display: flex;
   align-items:center;
   justify-content:center;


`

export const Counter = styled.div`
   display: flex;
   /* width:30%; */
   background-color:${props => props.theme.purpleLight};
   font-size:1rem;
   align-items: center;
   font-size:1rem;
   justify-content:space-between;
   gap: 10px;
   padding: 0.2rem;
   border-radius:5px;

   p  {
      font-size:1.2rem;
   }
   button{
      
      font-size:1rem;
      background-color:transparent;
      color: ${props => props.theme.purpleDark};
      cursor: pointer;
      border:none;
      line-height:50%;
      border-radius:8px;
      

   }
`
export const Item = styled.div`
   width: 100%;
   display: flex;
   justify-content:space-between;
   align-items:center;
   margin:1.5rem 0;

   img{
      width:4rem;
   }
`

export const TextContainer = styled.div`
   width: 60%;
   text-align:center;
   
   h3{
      font-family: 'Roboto',sans-serif;
      font-size:1rem;
      color: ${props => props.theme.baseText};
      padding: 0 0 0.5rem 0;
   }

`
export const ItemTotal = styled.h3`

   color: ${props => props.theme.baseText};
   font-family:'baloo 2', sans serif;
   margin-bottom:2rem;

`

export const RemoveBtn = styled.button`

   background-color:${props => props.theme.purpleLight};
   color: ${props => props.theme.purpleDark};
   padding: .2rem;
   gap: 4px;
   border:none;
   border-radius:8px;
   display: flex;
   align-items:center;
   justify-content:center;
   cursor: pointer;

   p{
      font-size:.8rem;
   }

`
export const BtnContainer = styled.div`
   
   width: 90%;
   display: flex;
   justify-content:space-evenly;
   margin: 0 auto;

`