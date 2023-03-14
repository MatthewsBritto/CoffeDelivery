import styled from "styled-components";

export const Container = styled.ul`
   width: 100%;
   margin-top:2rem;

`
export const Item = styled.li`
   width: 100%;
   display: flex;
   align-items:center;
   justify-content:space-between;
   font-family:'Roboto';
   font-size:.9rem;
   padding:.5rem 0;
   color:${props => props.theme.baseText};


`

export const TotalPrice = styled.li`

   width: 100%;
   display: flex;
   align-items:center;
   justify-content:space-between;
   font-family: 'baloo 2', sans-serif;
   font-size:1.2rem;
   padding:.5rem 0;
   color: ${props => props.theme.baseText};

`

export const FinishedBtn = styled.button`

   width: 100%;
   margin: 0.5rem 0;
   height: 2.87rem;
   background-color: ${props => props.theme.yellow};
   color: ${props => props.theme.white};
   border-radius:8px;
   border: none;
   font-size: .9rem;
   text-transform: uppercase;
   font-family: 'Roboto';
   font-weight:bold;
   letter-spacing: 1.5px;
   cursor: pointer;
`


