import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
  //states
  const [loading, isLoading] = useState(true);
  //set jobs is save in state with an empty array
  const [jobs, setJobs] = useState([]);
  //initially looking for the first item of the array
  const [value, setValue] = useState(0);

  //fetch the data from the API
  const fetchJobs = async () => {
    const response = await fetch(url);
    //changes the fetched data to json
    const newJobs = await response.json();
    //  save the fetched data into jobs
    setJobs(newJobs);
    //set loading to false, because the data was fetched
    isLoading(false);
  };
  //useEffect allows the fetch to run only one time, when the dependency array is empty
  useEffect(() => {
    fetchJobs();
    //dependency array allows useEffect to run only one time after rendered
  }, []);
  //if loading is true return loading component
  if (loading) {
    return (
      <section className='section loading'>
        <h1>loading...</h1>
      </section>
    );
  }
  //after loading deconstruct the fetch data
  const { company, dates, duties, title } = jobs[value];

  return (
    <section className='section'>
      {' '}
      <div className='title'>
        <h2>experience</h2>
      </div>
      <div className='underline'></div>
      <div className='jobs-center'>
        {/* btn container */}
        <div className='btn-container'>
          {jobs.map((item, index) => {
            // key must be added when using map or it comes back an error
            //the index from map is passed to setValue, so it changes the position of the array value, changing what is displayed
            //check if index === and changes the style of the
            // with && operator, when the first is true, the second will be passed. so if index === value button receives the className active-btn
            // ${``} is used to write javascript inside html
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {/* duties is an array so it should be iterated trough each item*/}
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon' />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
