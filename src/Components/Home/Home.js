import React, { useEffect, useState }  from 'react';


import LandingPage from '../LandingPage/LandingPage';





const Home = () => {
    const [landingPagePictures, setLandingPagePictures] =useState([]);
   

    useEffect(() => {
        fetch('https://agile-beyond-34027.herokuapp.com/works')
        .then(res => res.json())
        .then(data => setLandingPagePictures(data))
    }, [])

    return (
        <div>
            
        <div className="row">
            {
                landingPagePictures.map(landingPage=><LandingPage key={landingPage.work} landingPage={landingPage}></LandingPage>)

            }
        </div>
       
        
        </div>
    );
};

export default Home;