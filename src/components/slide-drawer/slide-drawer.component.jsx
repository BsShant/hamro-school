import React, { useState } from 'react';
import { DrawerHeader, DrawerWrapper, LogoIcon, MenuIcon } from './slide-drawer.styles';
import SliderMenuItem from '../slider-menu-item/slider-menu-item.component';
import { connect } from "react-redux";
import { toggleLongDrawer } from '../../store/drawerStore/drawer.action';
import slideMenuItemList from './sliderMenuItemList';
import Logo from '../../images/logo.png';



const SlideDrawer = (props) =>{
    const {showDrawer, toggleLongDrawer} = props;
    const changeDrawerHandler = () =>{
        toggleLongDrawer();
        if(!showDrawer){
        hoverLogoHandler(false)
}
    }
    const [hoverLogo, hoverLogoHandler]= useState(false)
    console.log("HoverLogo", hoverLogo)
    const hoverLogoChange = () =>{
        hoverLogoHandler(!hoverLogo)
    }

    return (
        
        <DrawerWrapper>
            <DrawerHeader showDrawer={showDrawer}>
                
                    
                    {
                        !showDrawer && hoverLogo?
                        <LogoIcon onClick={!showDrawer? changeDrawerHandler : null} onMouseLeave={!showDrawer? hoverLogoChange:null} showDrawer={showDrawer}/>
                        :
                        <img src={Logo} alt="school's logo"  onMouseOver={!showDrawer? hoverLogoChange:null}/>
                    }

                
                
                {
                    showDrawer?
                    <MenuIcon onClick={changeDrawerHandler} />: null


                }
            </DrawerHeader>
            <div className="drawer-body">
                {
                    slideMenuItemList.map(item =>{
                        return <SliderMenuItem name={item.name} ItemIcon={item.itemIcon}  subs={item.subDivisions}/>
                    })
                }
               
            
            </div>
        </DrawerWrapper>
    )
}


const mapStateToProps = state =>({
    showDrawer: state.drawer.showDrawer
})

const mapDispatchToProps = dispatch =>({
    toggleLongDrawer : () => dispatch(toggleLongDrawer()),
})

export default connect(mapStateToProps,mapDispatchToProps)(SlideDrawer);