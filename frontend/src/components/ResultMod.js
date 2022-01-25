import { ref, set, get, child } from "firebase/database";
import { useState, useEffect } from 'react';
import db from '../config';

function ResultMod() {
  let [results, setResults] = useState([]);

  async function getUser() {
    let resultsTemp = [];
    let dbSnapshot = await get(child(ref(db), '/users'));
    dbSnapshot.forEach(user =>{
      resultsTemp.push({
        name: user.val().name,
        pronouns: user.val().pronouns,
        contact: user.val().contact,
        blurb: user.val().blurb,
        classes: user.val().classes,
        username: user.key
      }); 
    });
    return resultsTemp;
  }

  (async () => {
    const resultsTemp = await getUser();
    setResults(resultsTemp);
  })();

  return (
    <div className='resultPage'>

      <h1>Results</h1>

      {results.map(person => {
        return (
          <div className='resultField white-rectangle' key={person.username}>
            <div id='nameField'>
              <h2>{person.name} </h2>
              <span>({person.pronouns})</span>
            </div>
            <p><b>Contact: </b>{person.contact}</p>
            <p><b>Blurb: </b>{person.blurb}</p>
            <span id='classField'>
              <b>Classes: </b>
              {person.classes.slice(0, person.classes.length - 1).map(item => 
                <span key={item}>{item}, </span>
              )}
              {person.classes[person.classes.length - 1]}
            </span>
          </div>
        )
      })}

    </div>
  )
}

export default ResultMod;