import React from 'react';
import { SpinnerContainer, SpinnerDiv } from './transition-styles';
import { connect } from "react-redux";
import {
    useHistory,
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { authUser, userToken } from '../../store/authStore/auth.action';

const TransitionComponent = (PassedComponent) => {
    const Spinner = (props) => {
        const dispatch = useDispatch();
        let history = useHistory();
        let server = 'https://schoolackend.herokuapp.com/api';
        const enterLoading = () => {
            fetch(`${server}/auth/logout`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }).then(res => res.json()).then(data => {
                console.log("logout", data)
                setTimeout(() => {
                    dispatch(userToken(data.token))
                    dispatch(authUser(null))
                    return history.push('/login')
                }, 6000);
            }).catch(err => console.log(err))

        }
        const spinnerItem = <SpinnerContainer>
            <SpinnerDiv></SpinnerDiv>
        </SpinnerContainer>
        return (
            <div>
                {
                    props.authSpinner ? spinnerItem : <PassedComponent {...props} />
                }
                <div onClick={enterLoading}>logout</div>
            </div>
        )
    }
    const mapStateToProps = state => ({
        authSpinner: state.authMode.authSpinner

    })
    return connect(mapStateToProps)(Spinner);
}

export default TransitionComponent;