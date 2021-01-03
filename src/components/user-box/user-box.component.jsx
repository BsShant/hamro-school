import React from 'react';
import { useDispatch } from 'react-redux';
import {UserInfo, UserBoxWrapper,UserRole, UserImage, UserName, UserOption } from './user-box.styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { userType } from '../../store/authStore/auth.action';


const UserBox = () =>{
    const dispatch = useDispatch()
    return(
        <UserBoxWrapper>
                <UserInfo>
                    <UserName>User Name</UserName>
                    <UserRole>Admin</UserRole>
                </UserInfo>
                <UserImage>
                    <div>U</div>
                    <ArrowDropDownIcon className="user-arrow-down"/>
                </UserImage>
                <UserOption>
                    <div onClick={()=> dispatch(userType(''))}>Logout</div>
                </UserOption>
            </UserBoxWrapper>
    )
}

export default UserBox;