import React, {useState, useEffect} from 'react';
import data from './assets/data.json'
import JobBoardComponent from './components/JobBoardComponent';


function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  const filterFunc = ({role,level, languages, tools}) => {
    if(filters.length === 0) {
      return true;
    }
    
    const tags = [role, level,...languages,...tools];

    return filters.every(filter => tags.includes(filter));
  } 

  const handleTagClick = tag => {
    if(filters.includes(tag)){
      return;
    }
    setFilters([...filters, tag]);
    console.log(filters);
  }
  
  const handleFilterClick = passedFilter => {
    setFilters(filters.filter(fil => fil !== passedFilter));
    
  }

  const clearFilters = () => {
    setFilters([]);
  }

  let filteredJobs = jobs.filter(filterFunc);

  return (
    <>
      <header className='bg-teal-500 mb-12'>
        <img src='./images/bg-header-desktop.svg' alt='bg-image' />
      </header>
      <div className="container m-auto">
      {filters.length > 0 && (
        <>
      <div className={`flex bg-white shadow-md my-16 mx-10 p-6 rounded`}>
        {
            filters.map(filter => (
              <span  className='cursor-pointer mr-4  rounded font-bold'   
                        onClick={() => 
                        handleFilterClick(filter)}>
                        <span
                        className='text-teal-500 bg-teal-100
                        p-2 rounded sm:mb-0'>{filter}</span>
                        <span className='bg-teal-500 text-teal-100 rounded p-2 sm:mb-0 '>✖</span>
                        </span>
                        ))}
      <button onClick={clearFilters} className='font-bold text-gray-700 ml-auto'>Clear</button>
      </div>
      
      </>
      
      
      )}
      {
        jobs.length === 0 ? (
        <p>Jobs are fetching...</p>
        ) : (
          filteredJobs.map(job => (
            <JobBoardComponent 
            job={job} 
            key={job.id} 
            handleTagClick={handleTagClick}/>
          ))
        )
      }
      </div>
    </>
  );
}

export default App;
