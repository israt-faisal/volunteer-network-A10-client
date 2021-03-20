import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';


const HumanityMore = () => {
    const [logInUser, setLogInUser] = useContext(UserContext);
    return (
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
                    <h2 style={{color:'black'}}>Name: {logInUser.name}</h2>
                   
                    </li>
                    </ul>
                    </nav>
            
        </div>
    );
};

export default HumanityMore;