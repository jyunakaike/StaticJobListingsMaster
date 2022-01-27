import React from 'react';
import JobList from './JobList.jsx';
import Job from './Job.jsx';
import initialState from '../initialState';

import '../styles/components/App.css'

const App = () => {
    const job = initialState.list;

    return (
        <React.Fragment>
            <header>
            </header>
            <main>
                <JobList >
                    {
                        job.map((todo) => <Job job={todo} />)
                    }
                </JobList>
            </main>
        </React.Fragment>

    );
};

export default App;
