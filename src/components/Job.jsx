import React from 'react';
import '../styles/components/Job.css'

import photosnap from '../assets/images/photosnap.svg'

const Job = ({ job }) => {
  let etiquete = [job.role, job.level]
  etiquete = etiquete.concat(job.languages, job.tools)

  const button = () => {

    etiquete.map(todo => console.log(todo))


  }





  return (
    <div className='JobContainer' key={job.id}  >
      {/* <button onClick={button}>holas</button> */}
      {/* {
        etiquete.map(todo => <div>{todo}</div>)
      } */}


      <div className='JobContainer-Job' >
        <img src={photosnap} alt="" />
        <div className='Job--Detail'>
          <div className='Detail--Company'>
            {job.company}
            {
              (job.new)
                ? <div className='New' >NEW</div>
                : null
            }
            {
              (job.fetured)
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
