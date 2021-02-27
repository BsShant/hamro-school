import styled from 'styled-components';

export const SpinnerContainer = styled.div`
display: flex;
justify-content: center;
align-items:center;
height: 100vh;
width: 100%;
`;
export const SpinnerDiv = styled.div`
@keyframes example {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
animation-name: example;
animation-duration: 2s;
animation-iteration-count: infinite;
animation-direction: alternate;
background-color: white;
width: 300px;
height: 300px;
border: 20px solid grey;
border-width: 0 0px 20px 20px;
border-radius: 50%;
`;
