import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
// useParams hook comes from react router dom and is used to edited each page select and  create trough an id, it giver back a string

const Person = () => {
  const [name, setName] = useState('default name');
  const { id } = useParams();

  useEffect(() => {
    //need to parse Id because it is a string, not a number
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
    //there is no dependency array, run one time once the component render
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <Link to='/people' className='btn'>
        Back to people
      </Link>
    </div>
  );
};

export default Person;
