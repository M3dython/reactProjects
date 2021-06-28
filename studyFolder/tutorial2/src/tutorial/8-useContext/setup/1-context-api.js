import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

//create the context to be passed
//give access to two components, the provider and the consumer
const PersonContext = React.createContext();

//two components provider, consumer
//before hook was introduced consumer was used
//provider works as a distributer
//

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    // looking for the provider, with it the value prop is available
    //{{}} object with javascript
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>context API / useContext</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  //mainData is the object with the props passed
  const mainData = useContext(PersonContext);

  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  //pass context PersonContext inside useContext hook - BananaContext
  // const data = useContext(PersonContext);
  //it's possible to go to   removePerson without going trough list
  const { removePerson } = useContext(PersonContext);
  // console.log(data); will print the data from context without passing the value trough list

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
