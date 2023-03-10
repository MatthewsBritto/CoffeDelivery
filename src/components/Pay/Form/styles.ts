import styled from "styled-components";

export const Container =  styled.div`

   width: 40rem;
   margin:2rem 0 2rem 10rem;
   height: 35rem;

   h2{
      font-family: 'Baloo 2', sans-serif;
      margin-bottom:1rem;
      color: ${props => props.theme.baseTitle};
   }


`

export const TextContainer = styled.div`
   width: 100%;
   display: flex;
   font-family: "Roboto", sans-serif;
   gap: .5rem;
   padding: 1rem;

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

   padding: 1rem;
   display: flex;
   flex-direction:column;
   gap: 1rem;



`
export const FormInput = styled.input`

    height:2.62rem;  
    width: ${props=> props.width}rem;
    border-radius:8px;
    border:none;
    padding: 0 1rem;
    background-color:${props=> props.theme.baseInput};
`

export const FormContainer = styled.div`
   width: 100%;
   display: flex;
   align-items:center;
   padding: 0;
   gap:12px;

`

export const ContainerContent = styled.div`

   width: 100%;
   background-color: ${props=> props.theme.baseCard};
   margin-top: 2rem;
`