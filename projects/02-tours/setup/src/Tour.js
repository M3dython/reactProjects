import React, { useState } from 'react';

//destruct all the properties of the object passed, propDrilling
const Tour = ({ id, image, info, price, name, removeTour }) => {
  // make visible more info of the paragraph
  const [readMore, setReadMore] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        {/* if read more is true display the info, if not, display the rest  two hundred word info*/}
        {/* substring method extract characters from a string from 0 to the delimited end */}

        <p>
          {readMore ? info : `${info.substring(0, 200)}`}...
          {/* the button toggle the value of read more so all the info is displayed 
          and toggles trough show less and read more*/}
          <button onClick={() => setReadMore(!readMore)}>
            {!readMore ? 'show less' : 'read more'}
          </button>
        </p>
        {/* invokes removetour passin the id */}
        <button className='delete-btn' onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
