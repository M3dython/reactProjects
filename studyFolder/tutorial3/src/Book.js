import React from 'react';
//by deconstructing {img,title,author} = props
//when pass to a function ({img, title, author})
//<h4>{img}</h4>
//it can be deconstructed inside the function or in the function parameter declaration

//the children props are inside the "props"
//<Book> CHILDREN TEXT </Book>
// const Book =({img, title, author, children})
// // <p>{children}</p>

// const Book = (props)=>{
//   const {img,title,author} = props
//   <p>{props.children}</p>
// }

// const Book = (props)=>{
//   const {img,title,author,children} = props
//   <p>children}</p>
// }

//the name exported should be the same as the const
//there can be only one export per file

const Book = ({ img, title, author }) => {
  // attribute, eventHandler

  // onClick, onMouseOver

  //the parameter event allow to use React events, such as "alert"
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  };

  //receives the parameter to be used inside the function
  const complexExample = (author) => {
    console.log(author);
  };

  return (
    //whene the mouse overs the article the title is logged in the console
    <article
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt='' />
      {/* the inline function can access variables and props to be used as parameters */}
      {/* do the same as clickHandler */}
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      {/*calls the function clickHandler onClick  */}
      <button type='button' onClick={clickHandler}>
        reference example
      </button>
      {/* when the function passes a parameter */}
      {/* onClick={complexExample(author) invokes the function when the page is loaded */}
      {/* onClick={() => complexExample(author) create a function that calls a function */}

      <button type='button' onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

//export default allow to import the file with whatever name desired

export default Book;
