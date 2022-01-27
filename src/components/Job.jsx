import React from 'react';
import '../styles/components/Job.css'

const Job = ({ job }) => {

  let etiquete = [job.role, job.level]
  etiquete = etiquete.concat(job.languages, job.tools)

  const filterEtiquete = (etiquete) =>{ 
    console.log(`Clicked ${etiquete}`)
  }

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
          etiquete.map(item => <div className='Etiquete' onClick={() => filterEtiquete(item)} key={item}>{item}</div>)
        }
      </div>
    </div>

  );
};

export default Job;
