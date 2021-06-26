import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Booklist() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  const store = 'Best Store Ever';
  return (
    <article className='book'>
      <Image></Image>
      <Title />
      <Author />
      {/* javascript only*/}
      {/* react will pass only values, not statements let x= 10*/}
      <span style={{ fontSize: '0.4rem' }}>{store}</span>
    </article>
  );
};

const Image = () => {
  return <img src='https://randomuser.me/api/portraits/men/15.jpg' alt='' />;
};

const Title = () => <h1>This is my title component</h1>;
const Author = () => (
  //the inline css is more powerful than the declared css from the specific file
  <h4 style={{ color: '#617d98', fontSize: '0.75rem', margin: '0.25rem' }}>
    Randio Merio
  </h4>
);

ReactDOM.render(<Booklist />, document.getElementById('root'));
