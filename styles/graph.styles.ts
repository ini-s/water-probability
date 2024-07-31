import styled from "styled-components";

export const GraphContainer = styled.section`
  height: 25rem;
  width: 85vw;
  padding-left: 3.5rem;

  @media (max-width: 25em){
    height: 13rem;
    padding-left: 0.1rem;
  }
  @media (max-width: 37.5em) and (min-width: 25.0625em) {
    padding-left: 0.1rem ; 
    height: 19rem;
  }
  @media (max-width:62.5em) and (min-width: 37.5625em) {
    padding-left: .6rem ;
    height: 25rem;
  }
`; 
