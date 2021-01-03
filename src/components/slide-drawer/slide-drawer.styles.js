import styled from 'styled-components';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
const MenuOpen= ({className, ...others})=>(
    <MenuOpenIcon className={className} {...others} />

)


export const DrawerWrapper = styled.div`
width: 100%;
`;

export const DrawerHeader = styled.div`
display:flex;
justify-content: space-between;
height: 70px;
position:relative;
background: rgba(2, 64, 38, 0.3);
& img{
    width: ${props => props.showDrawer? '120px' : '100%'};
}
`;
export const MenuIcon = styled(MenuOpen)`
cursor: pointer;
width: 2.5em!important;
color: white;

    height: 3em!important;

`;
export const LogoIcon= styled(MenuOpen)`
cursor: pointer;
position: absolute;
color: #b6b2bd;
top:0;
left:0;
width: ${props => props.showDrawer? '2.2em' : '100%'}!important;
    height: ${props => props.showDrawer? '2.5em' : '100%'}!important;
`;

export const DrawerBody = styled.div`

`;