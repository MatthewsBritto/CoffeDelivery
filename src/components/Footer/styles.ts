import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  border-top:2px solid ${props => props.theme[ 'purple' ]};

  display: flex;


  img {
    border-right: 2px solid ${props => props.theme.purple};
    padding-right: 1rem;
  }
`

export const SocialContainer = styled.div`
  h3 {
    font-size: 1rem;
    font-weight: bold;
    font-family: 'Balloon', sans-serif;
    color:${ props => props.theme.purple };
    padding-left: 1rem;
  }
`