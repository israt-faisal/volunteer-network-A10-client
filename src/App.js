
import { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import HumanityMore from './Components/HumanityMore/HumanityMore';


export const UserContext = createContext();

function App() {
  const [logInUser, setLogInUser] = useState({});

  return (
    <UserContext.Provider value={[logInUser, setLogInUser]}>
      <p>Name: {logInUser.name}</p>
    <Router>
     <Switch>
       <Route path="/home">
       <Home></Home>
       </Route>
       <Route path="/login">
       <Login></Login>
       </Route>
       <Route path="/task">
         <HumanityMore></HumanityMore>
       </Route>
       <PrivateRoute path="/register/:work">
         <Register></Register>
       </PrivateRoute>
      
       <Route exact path="/">
         <Header></Header>
       </Route>
     </Switch>
     </Router>
    </UserContext.Provider>
  );
}

export default App;
