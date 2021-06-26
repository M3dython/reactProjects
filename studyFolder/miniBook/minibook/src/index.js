import React from 'react';
import ReactDOM from 'react-dom';

function Booklist() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return <img src='https://randomuser.me/api/portraits/men/15.jpg' alt='' />;
};

const Title = () => <h1>This is my title component</h1>;
const Author = () => <h4>Randio Merio</h4>;

ReactDOM.render(<Booklist />, document.getElementById('root'));
