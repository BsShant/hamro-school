import React from 'react';
import { SpinnerContainer, SpinnerDiv } from './transition-styles';
import { connect } from "react-redux";


const TransitionComponent = (PassedComponent) => {
    const Spinner = (props) => {
        
        const spinnerItem = <SpinnerContainer>
            <SpinnerDiv></SpinnerDiv>
        </SpinnerContainer>
        return (
            <div>
                {
                    props.authSpinner ? spinnerItem : <PassedComponent {...props} />
                }
            </div>
        )
    }
    const mapStateToProps = state => ({
        authSpinner: state.authMode.authSpinner

    })
    return connect(mapStateToProps)(Spinner);
}

export default TransitionComponent;