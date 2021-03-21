import { TextField } from '@material-ui/core';

import React, { useContext } from 'react';
import logo from '../../logos/Group 1329.png';

import './Registers.css';
import { Card } from 'react-bootstrap';
import { UserContext } from '../../App';

import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';




const Registers = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [logInUser, setLogInUser] = useContext(UserContext);
    const { work } = useParams();
    const onSubmit = data => {
console.log('form registered', data)
const registrationDetails = {...logInUser, registers: data, orderTime: new Date()};


fetch('https://agile-beyond-34027.herokuapp.com/addRegistration',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(registrationDetails)

})
.then(res => res.json())
.then(data => {
    if(data){
        alert('You have Registered Successfully');
    }
})
    }

    console.log(watch("example")); // watch input value by passing the name of it


    return (
        <div style={{ backgroundColor: "aliceblue" }}>
            <img style={{ width: '200px', height: '80px', marginLeft: '40%', marginBottom: '20px' }} src={logo} alt="" />
            <Card style={{ width: "30%", height: "130%", justifyContent: "center", marginLeft: "33%", color: "white" }}>
                <Card.Body>
                    <h5><strong> Register as a Volunteer</strong> </h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField id="standard-full-width" value={logInUser.name} fullWidth ref={register({ required: true })} label="Name" color="secondary" />
                        {errors.name && <span className="error">Name is required</span>}
                        <br />
                        <TextField id="standard-full-width" value={logInUser.email} fullWidth ref={register({ required: true })} label="Username or Email" color="secondary" />
                        {errors.email && <span className="error">Email is required</span>}
                        <br />
                        <TextField id="standard-full-width" fullWidth ref={register({ required: true })} label="Date" type="date" color="secondary" />
                        <br />
                        <TextField id="standard-full-width" fullWidth ref={register({ required: true })} label="Description" color="secondary" />
                        {errors.description && <span className="error">Describe</span>}
                        <br />
                        <TextField id="standard-full-width" fullWidth ref={register({ required: true })} label="name of work" value={work} color="secondary" />
                        {errors.work && <span className="error">Work name required</span>}
                        <br />
                        <br />
                        <input type="submit" className="btnreg" value="Registration" />



                        <br />

                    </form>
                    <br />

                </Card.Body>
            </Card>
            <br />
            <br />

        </div>
    );
};

export default Registers;