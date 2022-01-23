import { ref, get, child } from "firebase/database";
import { useState, useEffect } from 'react';
import db from '../config';

// const results = [
//   {
//     name: "Benson Liu",
//     pronoun: "he/him",
//     contact: "123-456-7890",
//     blurb: "I am down bad for the study.",
//     classes: ['CS 35L', 'CS 32', 'MATH 32B']
//   },
//   {
//     name: "Jordan Lin",
//     pronoun: "they/them",
//     contact: "987-6544-3210",
//     blurb: "I was today years old when I learned what NPM stood for. Also, I have no idea what to say here I just need an extremely long description/blurb to be able to stress test this in a multi-line manner.",
//     classes: ['CS 35L', 'MATH 32B', 'MATH 33A', 'PHYSICS 1A']
//   }
// ]

function ResultMod() {
  const [results, setResults] = useState([]);
  const [resultsArr, setResultsArr] = useState([]);
  async function getUser() {
    let temp = [];
    let dbSnapshot = await get(child(ref(db), '/users'));
    dbSnapshot.forEach(user =>{
      temp.push({
        name: user.val().name,
        pronouns: user.val().pronouns,
        contact: user.val().contact,
        blurb: user.val().blurb,
        classes: user.val().classes
      });
    });
    return temp;
  }

  (async () => {
    const temp = await getUser();
    setResults(temp);
    setResultsArr(Object.elements(results));
    
  })();
  return (
    <div className='resultPage'>

      <h1>Results</h1>

      {results.forEach(person => {
        {console.log(person.name)}
        return (
          <div className='resultField white-rectangle' key={person.name}>
            <div id='nameField'>
              <h2>{person.name} </h2>
              <span>({person.pronoun})</span>
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