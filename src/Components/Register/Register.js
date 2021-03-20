import { TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import logo from '../../logos/Group 1329.png';
import './Register.css';
import { Card } from 'react-bootstrap';
import { UserContext } from '../../App';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';



const Register = () => {
    const [logInUser, setLogInUser] = useContext(UserContext);
    const {work} = useParams();
    

    
   
    return (
        <div style={{backgroundColor:"aliceblue"}}>
             <img style={{ width: '200px', height: '80px', marginLeft: '40%', marginBottom:'20px' }} src={logo} alt="" />
            <Card style={{width:"30%", height:"130%", justifyContent:"center", marginLeft:"33%", color:"white"}}>
                <Card.Body>
                    <h5><strong> Register as a Volunteer</strong> </h5>
                <form>
  <TextField id="standard-full-width" value={logInUser.name} fullWidth label="Name" color="secondary" />
  <br/>
  <TextField id="standard-full-width" value={logInUser.email} fullWidth label="Username or Email" color="secondary" />
  <br/>
  <TextField id="standard-full-width"  fullWidth label="Date" color="secondary" />
  <br/>
  <TextField id="standard-full-width"  fullWidth label="Description" color="secondary" />
  <br/>
  <TextField id="standard-full-width"  fullWidth label="name of work" value={work} color="secondary" />
  <br/>
  <br/>
 <input type="submit" className="btnreg" value="Registration" /> 
  
 
  
  <br/>
  
</form>
<br/>

                </Card.Body>
            </Card>
            <br/>
            <br/>
            {/* {<input type="submit" className="btnreg" value="Registration" /> ==='true' && <Link href="/task">Review More Tasks </Link> } */}
       </div>
    );
};

export default Register;