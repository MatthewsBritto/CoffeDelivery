import styled, { keyframes } from "styled-components";

const float = keyframes`
  	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
 `

export const HeroContainer = styled.div`

   display:flex;
   flex-direction: column-reverse;
   align-items:center;
   padding: 2rem;

   img {
      max-width:80%;
      animation-name: ${float};
      animation-duration: 8s;
      animation-iteration-count: infinite;
   }

   @media  (min-width:768px){
      flex-direction: row;

      img {
         max-width:50%;
      }
   }

   @media (min-width: 1280px){
      padding:2rem 4rem;
      justify-content:space-between;
      max-width:1280px;
      margin:0 auto;
   }

`

export const TextContainer = styled.div`
   
   
   gap: 1.5rem;
   display: flex;
   flex-direction: column;

   @media  (min-width:768px){
      gap: 1rem;
   }

   @media (min-width: 1280px){
      max-width:40%;
   }

   h1 {
      /* Title/Title XL */
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 2.2rem;
      width:100%;
      line-height: 130%;   

      @media (min-width: 768px) {
         font-size:2rem;
      }
   }
   h4 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 130%;
      padding:0 0 1rem 0;
      width:100%;

      @media (min-width: 768px) {
         font-size:1.2rem;
      }
   }
`

export const ItemsContainer = styled.ul `
   display: flex;
   flex-wrap:wrap;   
   gap: 1rem; 
   width: 100%;
   
   li {
      list-style:none;
      width: 100%;
      display: flex;
      gap: 1rem; 
      align-items:center;
      font-family:'Roboto';
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

