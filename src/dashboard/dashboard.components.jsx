import React from "react";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import AdminDashboard from "../pages/admin-dashboard/admin-dashboard.pages";
import StudentDashboard from "../pages/student-dashboard/student-dashboard.pages";
import UserDashboard from "../pages/user-dashboard/user-dashboard.pages";

const DashBoard = (props) => {
    let renderDashboard ;
    const { user } = props;
    
    if(user){
        if (user.role === 'student') {
            renderDashboard = <StudentDashboard />
        } else if (user.role === 'admin') {
            renderDashboard = <AdminDashboard />
        } else if (user.role === 'user') {
            renderDashboard = <UserDashboard />
        }
    }    
    return (
<div>
        {
            renderDashboard
        }
</div>
        
    );
};

const mapStateToProps = (state) => ({
    userToken: state.authMode.userToken,
    user: state.authMode.authUser,
});

export default connect(mapStateToProps)(DashBoard);
