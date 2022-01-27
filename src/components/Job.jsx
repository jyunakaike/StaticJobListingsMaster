import React from 'react';
import '../styles/components/Job.css'

import photosnap from '../assets/images/photosnap.svg'

const Job = ({ job }) => {
  let etiquete = [job.role, job.level]
  etiquete = etiquete.concat(job.languages, job.tools)

  // const button = () => {

  //   etiquete.map(todo => console.log(todo))


  // }



  // const logo = require('./logo.jpeg); // with require

  return (
    <div className='JobContainer' key={job.id}  >
      <div className='JobContainer-Job' >
        <img src={ require(`../assets/images/${job.logo}`)} alt="" />


        <div className='Job--Detail'>
          <div className='Detail--Company'>
            {job.company}
            {
              (job.new)
                ? <div className='New' >NEW</div>
                : null
            }
            {
              (job.featured)
                ? <div className='Featured'>FEATURED</div>
                : null
            }
          </div>
          <div className='Detail--Position'>{job.position}</div>
          <div className='Detail--TimeLocation'>
            <div>{job.postedAt}</div>
            <div>{job.contract}</div>
            <div>{job.location}</div>
          </div>
        </div>
      </div>

      <div className='JobContainer-SeparatorLine' >Linea</div>

      <div className='JobContainer-Etiquetes'>
        {
          etiquete.map(todo => <div className='Etiquete'>{todo}</div>)
        }
      </div>
    </div>

  );
};

export default Job;
