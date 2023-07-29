import React from 'react'
import { Icon } from '@iconify/react';
import Image2 from "../assets/icons/img2.png";

const Features = () => {
  return (
    <div>
      <div className="features-cont">
        <div className="features">
          <div className="image1">
            <img src={Image2} className='img2' />
          </div>
          <div className="features-text">
            <p className="text">
            <Icon icon="carbon:checkmark-outline" className='features-icon' color="#E63946" width="70" height="70"style={{marginRight:'20px'}} />
              
              Data Privacy <span className='hide-features'> : The website prioritizes user data privacy and
              implements strong security measures to protect personal
              information.</span>
            </p>
            <p className="text">
            <Icon icon="carbon:checkmark-outline" className='features-icon' color="#E63946" width="70" height="70" style={{marginRight:'20px'}} />
              Intuitive Interface <span className='hide-features'>: The website offers an intuitive and
              user-friendly interface for easy navigation and interaction. </span>
            </p>
            <p className="text">
            <Icon icon="carbon:checkmark-outline" className='features-icon' color="#E63946" width="70" height="70" style={{marginRight:'20px'}}/>
           
              Streamlined Experience <span className='hide-features'>: The website ensures a streamlined
              experience with convenient features, simplifying tasks such as
              tracking food, logging workouts, and participating in the forum.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
