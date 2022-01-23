const results = [
  {
    name: "Benson Liu",
    pronoun: "he/him",
    contact: "123-456-7890",
    blurb: "I am down bad for the study.",
    classes: ['CS 35L', 'CS 32', 'MATH 32B']
  },
  {
    name: "Jordan Lin",
    pronoun: "they/them",
    contact: "987-6544-3210",
    blurb: "I was today years old when I learned what NPM stood for.",
    classes: ['CS 35L', 'MATH 32B', 'MATH 33A', 'PHYSICS 1A']
  }
]

function ResultMod() {
  return (
    <div class='resultPage'>

      <h1>Results</h1>

      {results.map(person => {
        return (
          <div class='resultField'>
            <div id='nameField'>
              <h2>{person.name} </h2>
              <p>({person.pronoun})</p>
            </div>
            <p><b>Contact: </b>{person.contact}</p>
            <p><b>Blurb: </b>{person.blurb}</p>
            <p id='classField'>
              <b>Classes: </b>
              {person.classes.slice(0, person.classes.length - 1).map(item => 
                <p>{item}, </p>
              )}
              {person.classes[person.classes.length - 1]}
            </p>
          </div>
        )
      })}

    </div>
  )
}

export default ResultMod;