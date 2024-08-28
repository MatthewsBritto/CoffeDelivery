import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content:center;
  align-items:center;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top:2px solid ${props => props.theme[ 'purple' ]};
  flex-wrap: wrap;

  display: flex;


  img {
    border-right: 2px solid ${props => props.theme.purple};
    padding-right: 1rem;
  }

  label {
    font-family:'Balloon', sans-serif;
    color: ${props => props.theme.baseCard};
    background-color: ${props => props.theme.purple};
    width: 100%;
    padding: 1rem;
    text-align:center;
  }
`

export const SocialContainer = styled.div`
    display: flex;
    font-size: 2rem;
    gap: .5rem;
    font-weight: bold;
    font-family: 'Balloon', sans-serif;
    color:${ props => props.theme.purpleDark };
    padding-left: 1rem;
    align-items:center;

`