import React from 'react';

//functions in react can look like this
// const Example = (props)=>{return}
// function Example(props) {return}

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

// this function is equivalent to the class

// function Example() {
//   const [count, setCount] = useState(0)
// }

// in function there is no this.state so useState is used to access
// class Example extends React.Component{
//   constructor(props){
//     super(props);
//     this.state ={
//       count:0
//     }
//   }
// }
