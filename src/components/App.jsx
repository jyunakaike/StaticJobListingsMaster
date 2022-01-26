import React from 'react';
import JobList from './JobList.jsx';
import Job from './Job.jsx';

import '../styles/components/App.css'

const App = () => {
    return (
        <React.Fragment>
            <header>
            </header>
            <main>
                <JobList>
                    <Job />
                </JobList>
            </main>
        </React.Fragment>

    );
};

export default App;
