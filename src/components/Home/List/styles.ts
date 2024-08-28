import styled from "styled-components";




export const Container = styled.div`

   width:100%;
   display:flex;
   flex-direction: column;
   flex-wrap: wrap;
   gap: 2rem;
   justify-content: space-between;
   padding: 1rem;

   @media (min-width: 768px) {
      flex-direction: row;
      padding: 2rem;
   }

   @media (min-width: 1280px) {
      padding:2rem 4rem;
      max-width:1280px;
      margin: 0 auto;
   }

`

export const InputContainer = styled.div`
   width:100%;
   display: flex;
   flex-direction:column;
   gap:1rem;   

   h2 {
      font-family:'Baloo 2';
      color: ${props => props.theme.baseTitle};
      font-size:2rem;
      
   }
   input {
      border: none;
      height: 2rem;
      width: 90%;
      background-color:${props => props.theme.baseCard};
      margin-bottom:.7rem;
      padding: 0.5rem;

      @media (max-width:1280px){
         width:50%;
      }

   }
`

export const ListContainer = styled.div`
   width:100%;
   display: flex;
   flex-direction:column;
   gap:2rem;

    @media (min-width: 768px) {
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap:1rem;
   }

   @media (min-width: 1280px) {
      display:grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap:2rem;
   }

`

