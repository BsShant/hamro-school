import styled from 'styled-components';

export const LeftWrapper = styled.div`
position: absolute;
left:0;
top:0;
width:${props=> props.showDrawer? '15%' : '5%'};
transition: all 50ms linear;

`;
export const RightWrapper = styled.div`
position: absolute;
right:0;
top:0;
transition: all 50ms linear;
background-color:#f0f1f3;
width:${props=> props.showDrawer? '85%' : '95%'};
`;