import React, { useState } from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {HoverItems, ItemContainer, MenuItemArrow, SlideMenuItemWrapper, SubList, SubListWrapper} from './slider-menu-item.styles';
import { toggleLongDrawer } from '../../store/drawerStore/drawer.action';
import { connect } from "react-redux";

const SliderMenuItem = (props) =>{


const {name, ItemIcon, subs, showDrawer} = props;
const [showSubs, showSubsHandler] = useState(false);
const [hoverSubs, hoverSubsHandler] = useState(false);
const subList = subs? <SubList>
{
    subs.map(item=>{
        return <SubListWrapper showDrawer={showDrawer}>
                   
                    <div>{item}</div>
                </SubListWrapper>
        

    })
}
 </SubList> : null
const menuItemHandler = ()=>{
    if(showDrawer)
    {
        showSubsHandler(!showSubs)
    }
    return;
}

const mouseEnterHandler =(e)=>{
    hoverSubsHandler(!hoverSubs)
    

}
const subMenuHover =()=>{
    hoverSubsHandler(true)

   
}
const leaveSubMenuHover = () =>{
    hoverSubsHandler(false)
}

    return(
        <ItemContainer>
            <SlideMenuItemWrapper onClick={subs? menuItemHandler : null} onMouseEnter={subs && !showDrawer? mouseEnterHandler: null } onMouseLeave={subs && !showDrawer? mouseEnterHandler: null }>
                <div className="slider-menu-item-icon"><ItemIcon /></div>
                {
                    showDrawer? <div className="slider-menu-item-name">{name}</div> : null
                }
                {
                    showDrawer? 
                    <MenuItemArrow showSubs={showSubs}>
                    {
                        subs?
                        <ChevronRightIcon /> 
                        :
                        null
                    }
                    </MenuItemArrow>
                    : null
                }
                
            
            </SlideMenuItemWrapper>

                <HoverItems onMouseEnter={subMenuHover} onMouseLeave={leaveSubMenuHover}>
                { 
                hoverSubs && !showDrawer?
                subList
                 :
                 null

            } 
                </HoverItems>

            { 
                showSubs && showDrawer?
                subList
                 :
                 null

            } 
           
        </ItemContainer>
        
    )
}
const mapStateToProps = state =>({
    showDrawer: state.drawer.showDrawer
})

const mapDispatchToProps = dispatch =>({
    toggleLongDrawer : () => dispatch(toggleLongDrawer()),
})
export default connect(mapStateToProps, mapDispatchToProps)(SliderMenuItem);