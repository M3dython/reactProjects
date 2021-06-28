import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  //save the array data inside questions to be updated trough setQuestions
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>questions ans answers about login</h3>
        <section className='info'>
          {questions.map((question) => (
            //pass the key using id and the prop question (item of questions) with the spread operator
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
