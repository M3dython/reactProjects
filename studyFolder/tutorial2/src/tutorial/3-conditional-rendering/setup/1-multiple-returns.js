import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

//a function can have no returns which is an issue
//a function can have one return
//a function can have multiple returns
//after the first return everything else is ignored

const MultipleReturns = () => {
  //with a false useState a new return is returned
  const [isLoading, setIsLoading] = useState(true);
  //isError is a convection for boolean
  //isLoading
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    //set loading to true while fetching the data
    setIsLoading(true);
    //fetches the api
    fetch(url)
      //and then converts the response to json
      .then((resp) => {
        //what is the status of my response? if it between 200 and 300 it is ok then it should be returned
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          //if the fetch was not successful set the error to true
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      //works with the fetched value
      .then((user) => {
        console.log(user);
        //deconstruct login inside user
        const { login } = user;

        //saves the login into state
        setUser(login);
        //the loading was successful so isLoading is set to false
        //after the data is fetched
        setIsLoading(false);
      })
      //if there is an erro print the message error
      .catch((error) => console.log(error));
    //the dependency array allow useEffect to only run once
  }, []);

  // return isLoading ? <h2>Loading...</h2> : <h2>Multiple Returns</h2>;
  //if there is an error returns <div><h1>error</h1></div>
  //if there is no error return isLoading ? <h2>Loading...</h2> : <h2>Multiple Returns</h2>;
  // if there is no error and there is no isLoading, displays the user <div><h1>{user}</h1></div>

  return isError ? (
    <div>
      <h1>error</h1>
    </div>
  ) : isLoading ? (
    <div>
      <h2>Loading...</h2>
    </div>
  ) : (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
