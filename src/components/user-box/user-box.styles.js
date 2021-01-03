import styled from 'styled-components';
export const UserBoxWrapper = styled.div`
display:flex;
position:relative;
`;

export const UserOption = styled.div`
display:flex;
align-items:center;
flex-direction: column;
background-color:pink;
position:absolute;
width: 70px;
height: 70px;
top: 100%;
left: 40%;

&div{
width:100%;
}
&:hover div{
    background-color:white;
}
`;

export const UserInfo = styled.div`
text-align-right`;
export const UserName = styled.div``;
export const UserRole = styled.div``;
export const UserImage = styled.div`
height:30px;
width:30px;
margin-left:20px;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
background-color:grey;
position:relative;
& .user-arrow-down{
    position:absolute;
    top:1;
    left:-19px;
}
`;