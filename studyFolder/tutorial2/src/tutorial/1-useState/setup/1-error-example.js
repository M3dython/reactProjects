import React from 'react';

const ErrorExample = () => {
  let title = 'random title';

  const handleClick = () => {
    //without re rendering the component, there is no way to preserve the value
    //so there must be a way to change the state or re render it
    //without state there is no way to keep the value between the renders
    title = 'hello people';
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
