import React from 'react';
import '../styles/components/Job.css'

const Job = ({ job, setShowEtiquete, showEtiquete  }) => {

  let etiquete = [job.role, job.level].concat(job.languages, job.tools)

  const filterEtiquete = (etiquete) => {
      if (showEtiquete.length === 0) {
        setShowEtiquete([etiquete])
      }
      else {
        (showEtiquete.includes(etiquete))
        ? null
        :setShowEtiquete([...showEtiquete, etiquete])
      }
  }

  return (

    <div className='JobContainer' key={job.id}  >
      
      <div className='JobContainer-Job' >
      <img className='image' src={require(`../assets/images/${job.logo}`)} alt="" />
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

      <div className='JobContainer-SeparatorLine' ></div>

      <div className='JobContainer-Etiquetes'>
        {
          etiquete.map(item => <div className='Etiquete' onClick={() => filterEtiquete(item)} key={item}>{item}</div>)
        }
      </div>
    </div>
  );
};

export default Job;
