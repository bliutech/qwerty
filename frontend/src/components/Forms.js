import { useForm } from 'react-hook-form';
import db from '../config';
import { useState } from 'react';
import { ref, set, push, child } from "firebase/database";

const pronouns = [
  { value: 'he-him', text: 'he/him' },
  { value: 'he-they', text: 'he/they' },
  { value: 'they-he', text: 'they/he' },
  { value: 'they-them', text: 'they/them' },
  { value: 'they-she', text: 'they/she' },
  { value: 'she-they', text: 'she/they' },
  { value: 'she-her', text: 'she/her' },
  { value: 'other', text: 'other' }
];


function Forms() {
  const { register, handleSubmit, reset, clearErrors, watch } = useForm();

  const onSubmit = data => {
    update(data.classes);

  }  // put function that calls backend

  const watchNumClass = watch('numClass');
  const watchPronoun = watch('pronoun');

  function classNums() {
    return [...Array(parseInt(watchNumClass || 0)).keys()];
  }

let [name, setName] = useState('');
let [pronounsV, setPronounsV] = useState('he/him');
let [contact, setContact] = useState('');
let [otherPronoun, setOtherPronoun] = useState('');
let [blurb, setBlurb] = useState('');
  const update = (classes) => {
    let finalPronoun = pronounsV === 'other' ? otherPronoun : pronounsV
    if(finalPronoun === 'he/him') finalPronoun = 'he-him';
    push(child(ref(db), 'users/'), {
      name: name,
      pronouns: finalPronoun,
      contact: contact,
      blurb: blurb,
      classes: classes
    });
  }
  function testOther () {
    if (pronounsV == 'other') {
      return (
        <div>
          <div className='row'>
          <div className='left-column'>Other pronoun</div>
          <div className='right-column'><input
            type='text'
            value={otherPronoun}
            placeholder='Preferred pronoun not on the list'
            onChange={(e) => setOtherPronoun(e.target.value)}
          />
          </div>
          </div>
          <br />
        </div>
      )
    }
  }


  return (
    <div>

      <h1>Forms</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className='row'>
        <div className='left-column'>Name</div>
        <div className='right-column'>
          <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='First and Last Name'
          {...register('name')}
        /></div></div>
        <br />

        <div className='row'>
        <div className='left-column'>Pronoun</div>
        <div className='right-column'>
          <select value = {pronounsV}
          onChange={(e) => setPronounsV(e.target.value)}
          >
          {pronouns.map(item => {
            return (<option key={item.value} value={item.value}>{item.text}</option>)
          })}
        </select></div></div>
        <br />

        {testOther()}
        
        <div className='row'>
        <div className='left-column'>Contact</div>
        <div className='right-column'><input
          type='text'
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder='Preferred method of contact'
        /></div></div>
        <br />

        <div className='row'>
        <div className='left-column'>Blurb</div>
        <div className='right-column'><input
          type='text'
          value={blurb}
          onChange={(e)=>setBlurb(e.target.value)}
          placeholder='Short blurb/bio about yourself'
        /></div></div>
        <br />
        
        <div className='row'>
        <div className='left-column'>Number of classes</div>
        <div className='right-column'><input
          name='numClass'
          type='number' min='0'
          defaultValue={0}
          placeholder='Number of classes to be submitted'
          {...register('numClass')}
        /></div></div>
        <br />
        
        {classNums().map(i => (
          <div key={i}>
            <div className='row'>
            <div className='left-column'>Class {i + 1}</div>
            <div className='right-column'><input
              type='text'
              placeholder=''
              {...register(`classes[${i}]`)}
            /></div></div>
            <br />
          </div>
        ))}

        <br />
        <button type='submit'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Forms;
