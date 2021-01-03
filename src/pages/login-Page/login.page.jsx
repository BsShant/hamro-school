import React, { useState } from 'react';
import {LoginBox, LoginWrapper} from './login.styles';
import { connect, useDispatch} from 'react-redux';
import { userType } from '../../store/authStore/auth.action';
import { toggleLongDrawer } from '../../store/drawerStore/drawer.action';
let server = 'https://schoolackend.herokuapp.com/auth/login';
// if(process.env.NODE_ENV === 'development'){
//     server = 'http://localhost:5000/auth/login';

// }
// else{
//     server= 'https://schoolackend.herokuapp.com/auth/login';
// }
const Login = (props)=>{
    const {setUserType, ...rest} = props;
    console.log(rest.userType)
    const [userDetails, inputHandler] = useState({});
   
const dispatch = useDispatch();
    const inputOnChange= (e)=>{
     const {name,value} = e.target
        inputHandler({
            ...userDetails,
            [name]:value
        })
    }
    const onLogin = ()=>{
        fetch(server,{
            method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userDetails)
        }).then(res => res.json()).then(data=>{
            console.log(data);
            return dispatch(userType(data.userType))
        }).catch(err=>console.log(err))
    }

    return(
        <LoginWrapper>
            <LoginBox>
                <input name='name' onChange={inputOnChange} type="text" placeholder="Enter your username..." />
                <input name='password' onChange={inputOnChange} type="password" placeholder="Enter your password..." />
                <button type="submit" onClick={onLogin}>Login</button>
            </LoginBox>
        </LoginWrapper>

    )
}


export default Login;