import React from 'react';
import header from '../../images/clearnPark.png';
import logo from '../../logos/Group 1329.png';
import Home from '../Home/Home';
import './Header.css';
import { Link } from '@material-ui/core';
import Button from 'react-bootstrap/Button'
import { FormControl, InputGroup } from 'react-bootstrap';

const Header = () => {
    return (

        <div style={{ backgroundImage: `linear-gradient( rgba(235, 229, 229, 0.7), #f5f1f1bd )  , url(${header})` }} className="header" >
            <nav className='nav'>
                <ul>
                    <li>
                        <img className="logo" src={logo} alt="" />
                    </li>
                    <li>
                        <Link href="/home">Home</Link>
                    </li>
                    <li>
                        <Link href="/donation">Donation</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="events">Events</Link>
                    </li>
                    <li>
                        <Button variant="primary"> Register </Button>
                    </li>
                    <li>
                        <Button variant="secondary"> Admin </Button>
                    </li>
                </ul>
            </nav>
            <h3 style={{textAlign:"center"}}>I GROW BY HELPING PEOPLE IN NEED. </h3>
            <InputGroup style={{width:"30%", marginLeft:"35%", marginBottom:"10%"}}>
    <FormControl
      placeholder="Search.."
       />
    <InputGroup.Append>
      <Button variant="primary">Button</Button>
    </InputGroup.Append>
  </InputGroup>
  
         
           
            <div className="bg">
                <Home></Home>
            </div>

            <h2 style={{textAlign:'center'}}> <Link href="/task">Review More Tasks -->> </Link> </h2>
        </div>


    );
};


export default Header;