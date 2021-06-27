import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* sets the opposite to the current value to the show state */}
      <button className='btn' onClick={() => setShow(!show)}>
        show/hide
      </button>
      {/* show the item if show state is true */}
      {show && <Item />}
    </>
  );
};

const Item = () => {
  //there must be used a cleanup effect with a function that uses event listener on the window so it is only used once after rendered
  // the side effect must be cleaned up
  //size inside item
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    //set the value of size equals to the window inner width
    setSize(window.innerWidth);
  };

  useEffect(() => {
    // every time the window is resized calls the function checkSize
    window.addEventListener('resize', checkSize);

    //the cleanup function wont allow multiple event listeners to be executed removing the event listener
    return () => {
      window.removeEventListener('resize', checkSize);
    };

    //because the component is toggled there will be multiple event listeners
    //dependency array allows it to run just once after rendered
  }, []);
  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>window</h1>
      <h2>size: {size} px </h2>
    </div>
  );
};

export default ShowHide;
