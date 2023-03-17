import styled from "styled-components";

export const Container =  styled.div`

   width: 100%;
   margin:2rem 0 2rem 10rem;
   height: 35rem;

   h2{
      font-family: 'Baloo 2', sans-serif;
      color: ${props => props.theme.baseTitle};
   }


`

export const TextContainer = styled.div`
   width: 100%;
   display: flex;
   font-family: "Roboto", sans-serif;
   gap: .5rem;
   padding: 1rem 0;

   h3{
      font-size:1.2rem;
      padding-bottom:.5rem;
      color: ${props => props.theme.baseTitle};
   }
   p{
      font-size:1rem;
      color: ${props => props.theme.baseText};
   }

`

export const FormPay = styled.form`
   display: flex;
   gap: 2rem;
   justify-content:space-between;


`
export const FormInput = styled.input`

    height:2.62rem;  
    width: ${props=> props.width}rem;
    border-radius:8px;
    border:none;
    padding: 0 1rem;
    background-color:${props=> props.theme.baseInput};
`



export const ContainerContent = styled.div`

   width: 100%;
   

   
`

export const Lego = styled.div`

   width: 50%;
   display: flex;
   flex-direction:column;
   justify-content:space-around;

`

export const InputsContainer = styled.div`

   display: flex;
   flex-wrap: wrap;
   gap: 1rem;
   padding: 1rem;
   background-color: ${props=> props.theme.baseCard};
   border-radius: 12px;

   div{
      display: flex;
      flex-direction: column;

      label{
         margin-top: .5rem;
         font-size:.8rem;
         font-family: 'Roboto';
      }
   }
`