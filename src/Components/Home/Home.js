import React  from 'react';

import LandingPage from '../LandingPage/LandingPage';



const landingPagePictures = [
    {
        work: 'Animal Shelter',
        pic: 'animalShelter.png'
    },
    {
        work: 'Baby Sit',
        pic: 'babySit.png'
    },
    {
        work: 'Bird House',
        pic: 'birdHouse.png'
    },
    {
        work: 'Child Support',
        pic: 'childSupport.png'
    },
    {
        work: 'Clean Water',
        pic: 'cleanWater.png'
    },
    {
        work: 'Clean Park',
        pic: 'clearnPark.png'
    },
    {
        work: 'Cloth Swap',
        pic: 'clothSwap.png'
    },
    {
        work: 'Driver Safety',
        pic: 'driveSafety.png'
    },
    {
        work: 'Extra Volunteer',
        pic: 'extraVolunteer.png'
    },
    {
        work: 'Food Charity',
        pic: 'foodCharity.png'
    },
    {
        work: 'Good Education',
        pic: 'goodEducation.png'
    },
    {
        work: 'IT Help',
        pic: 'ITHelp.png'
    },
    {
        work: 'Liabrary Books',
        pic: 'libraryBooks.png'
    },
    {
        work: 'Music Lessons',
        pic: 'musicLessons.png'
    },
    {
        work: 'New Books',
        pic: 'newBooks.png'
    },
    {
        work: 'Refuse Shelter',
        pic: 'refuseShelter.png'
    },
    {
        work: 'River Clean',
        pic: 'riverClean.png'
    },
    {
        work: 'School Suffiles',
        pic: 'schoolSuffiles.png'
    },
    {
        work: 'Study Group',
        pic: 'studyGroup.png'
    },
    {
        work: 'Stuffed Animals',
        pic: 'stuffedAnimals.png'
    },
    {
        work: 'Vote Register',
        pic: 'voteRegister.png'
    }
]

const Home = () => {
    

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