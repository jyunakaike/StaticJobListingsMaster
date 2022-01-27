import React, { useState } from 'react';
import JobList from './JobList.jsx';
import Job from './Job.jsx';
import initialState from '../initialState';

import '../styles/components/App.css'

const App = () => {
    const job = initialState.list;
    const [showEtiquete, setShowEtiquete] = useState([]);

    const clearFilter = () => {
        setShowEtiquete([])
    }
    const clearFilterItem = (i)=> {
        const arr = showEtiquete.filter((item) => item !== i)
        setShowEtiquete( arr );
    }

    return (
        <React.Fragment>
            <header>
            </header>

            <main>
                {
                    (showEtiquete.length != 0)
                    ? <div className='filterContainer'>
                        <div className='filterItemContainer'>
                            {showEtiquete.map(item => 
                            <div className='filterItem'  key={item}>
                                <div className='item'>{item}</div>
                                <div className='removeItem' onClick={()=>clearFilterItem(item)}>x</div> 
                            </div>)}
                        </div>  
                        <a onClick={clearFilter} >Clear</a>
                      </div>
                    
                    // ? <div>hay etiuqeta</div>
                    : null
                }
                <JobList >
                    {
                        job.map((jobItem) => <Job job={jobItem} key={jobItem.id} setShowEtiquete={setShowEtiquete} showEtiquete={showEtiquete} />)
                    }
                </JobList>
            </main>
        </React.Fragment>

    );
};

export default App;
