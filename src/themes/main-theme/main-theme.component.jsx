import React, {useState} from 'react';
import { LeftWrapper, RightWrapper } from './main-theme.styles';
import SlideDrawer from '../../components/slide-drawer/slide-drawer.component';
import Header from '../../components/header/header.component';
import { connect } from "react-redux";
import {toggleLongDrawer } from '../../store/drawerStore/drawer.action';

const AppTheme = (PassedComponent, ...props) =>{
    const Sticky = (props)=>{
        const {showDrawer} = props;
        return(
        <div>
            <LeftWrapper showDrawer={showDrawer}>
                <SlideDrawer />
    
             </LeftWrapper>
            <RightWrapper showDrawer={showDrawer}>
                <Header />
                <PassedComponent {...props} />
            </RightWrapper>
        </div>)
    }
    return connect(mapStateToProps,mapDispatchToProps)(Sticky);
}
const mapStateToProps = state =>({
    showDrawer: state.drawer.showDrawer
})

const mapDispatchToProps = dispatch =>({
    toggleDrawer : () => dispatch(toggleLongDrawer()),
})



export default AppTheme;