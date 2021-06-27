//imports the used states
import React, { useState, useEffect } from 'react';

//creates the object with the data from the api
const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  //starts the state with an empty array
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    //awaits for the promise fetched from the url setting it to response
    const response = await fetch(url);
    //awaits for the response and converts it to json format setting it to users
    const users = await response.json();
    //print the 30 users fetched

    //setUsers(users) would save the value and trigger a new re render, starting useEffect again, creating a infinite loop
    //thats why the useEffect should have an empty dependency array, so it only runs once
    setUsers(users);

    console.log(users);
  };

  //setState of each user fetched inside an array

  //useEffect cannot be used with async and await because it returns a promises
  // useEffect(async()=>{})
  //useEffect expects the cleanup function
  useEffect(() => {
    //async can be used inside useEffect
    getUsers();
  }, []);

  return (
    <>
      <h3>github users </h3>
      {/* maps trough each and every user */}
      <ul className='users'>
        {users.map((user) => {
          {
            /* user is an object and is deconstructed into a new object */
          }
          const { id, login, avatar_url, html_url } = user;
          // create unique itens with unique keys inside map
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile </a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
