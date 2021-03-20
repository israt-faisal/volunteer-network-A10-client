import React, { useContext } from 'react';
import google from '../../logos/google.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css';
import { Link } from '@material-ui/core';
import { UserContext } from '../../App';
import { Container, Jumbotron } from 'react-bootstrap';
import logo from '../../logos/Group 1329.png';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const [logInUser, setLogInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleLogIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();


        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLogInUser(signedInUser);
                history.replace(from);

            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });

            
            // {logInUser === 'success' && <Link href="/humanityMore"></Link>}

    }
    return (
        <div className="login">
            <img style={{ width: '200px', height: '80px' }} src={logo} alt="" />
            <br />
            <br />
            <Jumbotron>
                <Container className="login-inside">
                    <br/>
                    <br/>
                    <h4 style={{ font: "bold", marginTop:"40px", marginLeft:"30px"}}>Login With</h4>
                    <br/>

                   <button className="button" onClick={handleGoogleLogIn}> 

<img className="google" src={google} alt="" />Continue with Google</button> 


                        <br/>
                       <p style={{display:"inline"}}>Don't have an account?<Link to="/signIn">Create an account</Link></p>

                      
                </Container>
                </Jumbotron>
               
                
                
        </div>
    );
};

export default Login;