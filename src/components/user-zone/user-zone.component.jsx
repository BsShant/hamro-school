import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import LanguageIcon from '@material-ui/icons/Language';
import UserBox from '../user-box/user-box.component';
import { UserZoneWrapper, MessageBox, RemainderBox, LanguageBox } from './user-zone.styles';

export const UserZone = () =>{

    return(
        <UserZoneWrapper>
            <UserBox />
                
            <MessageBox>
                <MailOutlineIcon/>
            </MessageBox>
            <RemainderBox>
                <NotificationsIcon />
            </RemainderBox>
            <LanguageBox>
                <LanguageIcon />
                <div>EN</div>
                <ArrowDropDownIcon />
            </LanguageBox>
        </UserZoneWrapper>
    )
}

export default UserZone;