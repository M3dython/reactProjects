import React from 'react';
import Tour from './Tour';

//destruction of tours and removeTours function
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>ours tours</h2>
        <div className='underline'></div>
      </div>
      {/* maps trough tours to return the desired tour to be displayed
      each item must have an unique id because of the use of map */}
      {tours.map((tour) => {
        //spread operator will allow Tour to all properties of the tour object passed
        //functions can also be passed as props
        return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
      })}
    </section>
  );
};

export default Tours;
