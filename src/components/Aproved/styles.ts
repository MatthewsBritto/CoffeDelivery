import styled from "styled-components";



export const Container = styled.div`
   width: 100%;
   padding: 2rem 10rem;
   margin-top:2rem;
   display: flex;
   align-items: flex-end;

   img{
      height: 293px;
   }
`

export const AprovedTitle = styled.h2`
   color: ${p => p.theme.darkyellow};
   font-family:'baloo 2', sans-serif;
   font-size:2.5rem;

`
export const TextContainer = styled.div`
   width: 50%;
   p{
      font-family:'Roboto', sans-serif;
      font-size:1.4rem;
      padding:.5rem 0;

      color: ${p => p.theme.baseTitle};
   }
`

export const InfosContainer = styled.ul`
   width: 75%;
   padding: 1.5rem ;
   border:1px solid ${p => p.theme.purple};
   margin-top: 3.5rem;
   border-radius: 0px 30px 0px 30px;
   
`

export const SpanT = styled.span`
   font-family: 'Roboto', sans-serif;
   font-weight:bold;
   /* color: ${p => p.theme.baseTitle}; */

`

export const Item = styled.li`

   list-style: none;
   display:flex;
   align-items:center;
   gap: 1rem;
   line-height:1.3rem;
   margin:.6rem 1rem;
   text-transform:capitalize;
   p{
      font-size: 1rem;
      color: ${p => p.theme.baseText};
   }
`
export const Icon = styled.div`

   background-color: ${p => p.color};
   color: ${p => p.theme.white};
   padding: 0.1rem;
   border-radius:50%;
   height: 2.5rem;
   width:2.5rem;
   display:flex;
   align-items:center;
   justify-content:center;

`