import React from 'react';
import { HeaderWrapper } from './header.styles';
import SearchBox from '../search-box/search-box.component';
import UserZone from '../user-zone/user-zone.component';
import { UserRole } from '../user-zone/user-zone.styles';

const Header = (props) =>{
    return(
        
        <HeaderWrapper>
            <SearchBox />
            <UserZone />
        </HeaderWrapper>
    )
}

export default Header;