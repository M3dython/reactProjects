//react is inside node modules, so there is no need to import it from a directory using ./
import React from 'react';
//React dom should be imported to render the page
import ReactDOM from 'react-dom';

// components should have capital letter at the beginning
// always should return a JSX
//function Greeting() {
//  return <h4>This is a test</h4>;
//}

// const Greeting = () => {
//   //create an element with the text
//   return React.createElement('h1', {}, 'hello world');
// };

// function Greeting() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   );
// }

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hello World')
//   );
// };

//JSX doesn't allow to add adjacent JSX elements
//It can only return a single object
//React.Fragment is a component that allow to return adjacent elements <React.Fragment><React.Fragment/> <></>

// JSX RULES
// return single element
// div/ section/ article or fragment
// use camelCase for html attribute
// className instead of class
// close every element
// return  doesn't need parenthesis by default, but when the code is in different lines it will help

function Greeting() {
  return (
    //
    <div onClick>
      <h3>hello people</h3>
      <Person />
      <p> this is my message</p>
      <Message />
    </div>
  );
}

const Person = () => <h2>John Doe</h2>;

const Message = () => <p>My new message</p>;

//the functionally should be added to the html trough the reactDom

//render method search for what will be render and where it will be rendered
// all jsx components should have self closing tag
ReactDOM.render(<Greeting />, document.getElementById('root'));
