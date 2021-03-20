
import React, { createContext } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
export const UserContext = createContext();



const LandingPage = ({landingPage}) => {
    console.log(landingPage);
        const history = useHistory();
          const handleWork = (work) => {
              history.push(`/register/${work}`);
          }

        
    
   
    return (
       
        <div className="col-md-3">
            <Card style={{margin:'15px'}} >
            <img style={{height:'250px'}} src={`../../images/${landingPage.pic}`} alt=""/>
            <button onClick={() => handleWork(landingPage.work)} style={{backgroundColor:'orange',borderRadius:'5px',border:'orange', color:'white', height:'50px', width:'260px'}}>{landingPage.work}</button>
            
            </Card>
            
        </div>
      
    );
};
// require(`../../images/${landingPage.pic}`)

export default LandingPage;