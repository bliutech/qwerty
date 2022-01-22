import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const pronouns = [
  { value: 'he-him', label: 'he/him' },
  { value: 'she-her', label: 'she/her' },
  { value: 'they-them', label: 'they/them' }
];

function Forms() {
  return (
    <div>
      <h1>Forms</h1>
      <label>
        Name
        <input type="text" name="name" />
      </label> <br />
      <label>
        Pronouns
        {/* <select>
          <option value="he-him">he/him</option>
          <option value="she-her">she/her</option>
          <option value="they-them">they/them</option>
        </select> */}
      </label>
        <Select options={pronouns} />
    </div>
  );
}

export default Forms;