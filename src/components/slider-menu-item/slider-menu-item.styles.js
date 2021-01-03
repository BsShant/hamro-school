import styled from 'styled-components';


export const SlideMenuItemWrapper = styled.div`
display: flex;
justify-content: space-between;
background-color: #004537;
padding: 10px;
cursor: pointer;
position:relative;
color: #b6b2bd;
&.slider-menu-item-icon{
    width:100%;
}
`;
export const MenuItemArrow = styled.div`
transform: ${props=> props.showSubs? "rotate(90deg)" : "rotate(0)"};
transition: all 250ms linear;
`
export const SubListWrapper = styled.div`
    display:flex;
    padding: 10px 20px;
`
export const HoverItems= styled.div`
position: absolute;
    left: 95%;
    top: 0;
    width: 150px;
    text-transform:capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    background: pink;
    z-index: 100;
`;

export const ItemContainer= styled.div`
position relative;


`;
export const SubList = styled.div`
height:${props=> props.showDrawer? '0' : 'auto'} ;
transition: height 250ms linear;
`;

