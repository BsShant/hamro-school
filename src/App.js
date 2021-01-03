import React, { Component } from 'react';
import AdminDashboard from './pages/admin-dashboard/admin-dashboard.pages';
import StudentDashboard from './pages/student-dashboard/student-dashboard.pages';
import Login from './pages/login-Page/login.page';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { connect } from 'react-redux';


// export default function BasicExample() {
//   return (
//     <Router>
//       <div>
//         <Switch>
//           <Route exact path="/">
//           <AdminDashboard />
//           </Route>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/student">
//           <StudentDashboard/>
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

const App = (props) =>{
  console.log(props.userType)
    return(
      <Router>
        <Switch>
        <Route exact path="/"
        render={()=>
        props.userType.length===0 ?
          <Login/>
        : 
          <Redirect to={`/${props.userType}`}
          />
        
      }

        />
            
        <Route path="/student" render={()=> props.userType=='student' ? <StudentDashboard /> :
        <Redirect to='/' />
        
      }/>
        
            
        <Route path="/admin" render={()=> props.userType=='admin' ? <AdminDashboard /> :
        <Redirect to='/' /> } />
            
      </Switch>
      </Router>
    )
    
  }
    
const mapStateToProps = state =>({
  userType: state.authUser.userType
})
export default connect(mapStateToProps)(App);
