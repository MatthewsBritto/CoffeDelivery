import styled from "styled-components";

export const Container =  styled.div`

   width: 100%;
   padding: 1rem;
   

   @media (min-width:768px) {
      padding: 1rem 2rem;
   }

   h2{
      font-family: 'Baloo 2', sans-serif;
      color: ${props => props.theme.baseTitle};
   }


`

export const TextContainer = styled.div`
   width: 100%;
   font-family: "Roboto", sans-serif;
   gap: .5rem;

   @media (min-width:768px) {
      padding: .2rem ;
   }

   h3{
      font-size:1.2rem;
      padding-bottom:.5rem;
      color: ${props => props.theme.baseTitle};
   }
   p {
      font-size:1rem;
      color: ${props => props.theme.baseText};
   }

`

export const FormPay = styled.form`
   display: flex;
   flex-direction: column;
   gap: 2rem;
   justify-content:space-between;

   @media (min-width: 1280px) {
      flex-direction: row;
   }

`
export const FormInput = styled.input`
   min-height:2.62rem;  
   max-width:100%;
   /* width: ${props=> props.width}rem; */
   border-radius:8px;
   border:none;
   padding: 0 1rem;
   background-color:${props=> props.theme.baseInput};
`



export const ContainerContent = styled.div`
   width: 100%;

   @media (min-width: 768px) {
      h2 {
         padding: 0 1.2rem;
      }
   }
`

export const Lego = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   flex-direction:column;
   justify-content:space-around;
   gap:1rem;
   max-width:640px;
   max-height: 1050px;

   @media (min-width: 1280px) {
      flex-direction: row;
   }
   

`

export const InputsContainer = styled.div`

   display: flex;
   flex-direction:column;
   flex-wrap: wrap;
   gap: 1rem;
   padding: 1rem 0;
   background-color: ${props=> props.theme.baseCard};
   border-radius: 12px;
   max-height: 800px;



   div{
      
      flex-direction: column;
      input {
         width: 100%;
      }

      label{
         margin-top: .5rem;
         font-size:.8rem;
         font-family: 'Roboto';
      }
   }

   @media (min-width: 768px) {
      padding: 1rem;

    
   }
`

export const CepInputContainer = styled.div`
   width: 60%;

   @media (min-width:768px) {
      width:30%;
   }
`
export const DoubleInputContainer = styled.div`
   width: 100%;
   /* /* display:flex; */
   gap: 1rem; 
   display:grid;
   grid-template-columns: 1.9fr 3.1fr;
   
   @media (min-width: 768px) {
   }
`

export const TripleInputContainer =  styled.div`
   width:100%;
   display:flex;
   gap:1rem;
   flex-wrap: wrap;
   display:grid;
   grid-template-columns: 2fr 2fr 1fr;

   @media (min-width: 768px) {
   }
`