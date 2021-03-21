import React, { useContext, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';
import pic from '../../images/extraVolunteer.png';


const HumanityMore = () => {
    const [logInUser, setLogInUser] = useContext(UserContext);

    const [works, setWorks] = useState([]); 
    const handleWork = () =>{
        fetch('https://agile-beyond-34027.herokuapp.com/worksByWorkName', {
            method: 'POST' ,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
        .then(res=>res.json())
        .then(data=> setWorks(data))
    }
    return (
        <div>
             <div>
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
                    <h5 style={{color:'orange'}}>{logInUser.name}</h5>
                   
                    </li>
                    </ul>
                    </nav>
             </div>

                    <div>
                        <button onClick={handleWork}>Your Works</button>

                    </div>
                    <div> 
                        <Card style={{margin:'15px'}}>
                            <Card.Body >
                                <img style ={{height:'200px', width:"300px"}} src={pic} alt=""/>
                                <h5>Humanity more</h5>
                                <input type="date" />
                                

                            </Card.Body>
                        </Card>
                    </div>
            
        </div>
    );
};

export default HumanityMore;