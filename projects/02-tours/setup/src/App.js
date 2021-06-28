import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
//API that has all the item to be displayed
const url = 'https://course-api.com/react-tours-project';

function App() {
  //setting state values to be used
  //set initially the state of loading to true
  const [loading, setLoading] = useState(true);
  // set the initial value tours to be an empty array
  const [tours, setTours] = useState([]);

  //tours data come in the App component so the not interest to displayed it function should be declared here
  //make the remove tour function into a component
  //the function will look to the id passed to remove it
  const removeTour = (id) => {
    //filter the tours that the tour id that matches the passed id
    const newTours = tours.filter((tour) => tour.id !== id);
    // set all the tours to the new filtered item
    setTours(newTours);
  };

  //while fetching setLoading is true
  const fetchTours = async () => {
    setLoading(true);

    //try to fetch the api, and if catches any error do the following
    try {
      //fetches the response from api and turn it to a json
      const response = await fetch(url);
      const tours = await response.json();

      setLoading(false);

      //set tours state with the data fetch from the API
      setTours(tours);
    } catch (error) {
      //show the error in console.log
      setLoading(false);
      console.log(error);
    }
  };

  //useEffect will only run one time once the component is rendered
  //React hook must be called in the exact same order in every component render. do not accidentally call a react hook after an early return
  useEffect(() => {
    fetchTours();
    //dependency array empty allows it to run only one time
  }, []);

  //if loading is true show the loading component
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  //if there is no more tours, display the message and allows to fetch tours again
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          {/* since fetchTours is function declared in App there is no need to call it trough another function */}
          <button className='btn' onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      {/* tours prop is equal to tours state value 
      removeTour prop is equal to removeTour function that destruct it into tour component in <Tours/>*/}
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
