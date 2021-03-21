
import React, { createContext } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


export const UserContext = createContext();



const LandingPage = (props) => {
    const {work , image } = props.landingPage;


    console.log(props);
        const history = useHistory();
          const handleWork = (work) => {
              history.push(`/registers/${work}`);

            
          }
          

        
    
   
    return (
       
        <div className="col-md-3">
            <Card style={{margin:'15px'}} >
            <img style={{height:'250px'}} src={image} alt=""/>
            
            
            <button onClick={() => handleWork(work)} style={{backgroundColor:'orange',borderRadius:'5px',border:'orange', color:'white', height:'50px', width:'260px'}}>{work}</button>
            
            </Card>
            
        </div>
      
    );
};


export default LandingPage;