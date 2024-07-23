import styled from "styled-components";




export const Container = styled.div`

   width:100%;
   padding: 2rem 10rem;
   display:flex;
   flex-wrap: wrap;
   gap: 2rem;


`

export const InputContainer = styled.div`
   width:91%;
   display: flex;
   justify-content:space-between;
   align-items: flex-end;
   margin:0 0 2rem 0;

   h2{
      font-family:'Baloo 2';
      color: ${props => props.theme.baseTitle};
      font-size:2rem;
      
   }
   input{
      border: none;
      height: 2rem;
      width: 25rem;
      background-color:${props => props.theme.baseCard};
      margin-bottom:.7rem;
      padding: 0.5rem;
   }
`



