import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';
//imports the same name from books
//javascript doesn't need to have the extension added
// import {data} from './books'
//since it is name data, wherever it is used must have this name
import { data } from './books';

//export default allow to import the file with whatever name desired
import SpecificBook from './Book';

//exporting components from a different file should be using "./"
import { greeting } from './testing/testing';

function BookList() {
  console.log(greeting);
  return (
    <section className='booklist'>
      {/* maps trough each item of the array so it will be passed as a props */}
      {/* gets the name data from export */}
      {data.map((book, index) => {
        //each child must have an unique key property and here it is attributed the id
        //indexes changes as the array changed, the id is always unique

        //the spread operator creates separated properties than come from the book object into the props
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));

//const {img, title, author}=book
//return( <Book book ={book}> </Book>)
//is the same as
//const {img, title, author}=book
//<Book img={img}></Book>
// and the same as
//<Book {...book}></Book>

//book becomes a object inside props using this method
//return( <Book book ={book}> </Book>)
//const Book =(props) =>{
//const {img, title, author} = props.book
//}

//npm run build makes the production build that can be host online
//the build folder is ready to be deployed
