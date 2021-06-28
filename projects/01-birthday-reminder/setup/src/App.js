import React, { useState } from 'react';
// imports data
import data from './data';
// imports list
import List from './List';

function App() {
  // save data into state to be used trough the app.
  // data is an array of objects with details to be displayed
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        {/* the length of people is the quantity of birthdays to be displayed */}
        <h3>{people.length} birthdays today</h3>
        {/* List passes the prop people={people}. people prop is equal to people state value, List must destruct people, since it is passed as a prop */}
        <List people={people} />
        {/* clears all the birthdays by setting the state as an empty array after clicked */}
        <button onClick={() => setPeople([])}>Clear all </button>
      </section>
    </main>
  );
}

export default App;
