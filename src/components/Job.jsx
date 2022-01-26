import React from 'react';
import '../styles/components/Job.css'

import photosnap from '../assets/images/photosnap.svg'

const Job = (props) => {
  return (
    <div className='JobContainer'>

      <div className='JobContainer-Job' >
        <img src={photosnap} alt="" />
        
        <div className='Job--Detail'>
          <div className='Detail--Company'>
            Photoshop
            <div className='New' >NEW</div>
            <div className='Featured'>FEATURED</div>
          </div>
          <div className='Detail--Position'>Senior Frontend Developer</div>
          <div className='Detail--TimeLocation'> 
             <div>1d ago</div>
             <div>FullTime</div>
             <div>USA only</div>
          </div>
        </div>
      </div>

      <div className='JobContainer-SeparatorLine' >Linea</div>

      <div className='JobContainer-Etiquetes'>
        <div>etiquetas1</div> 
        <div>etiquetas2</div> 
        <div>etiquetas3</div> 
        <div>etiquetas5</div> 
      </div>

    </div>
  );
};

export default Job;
