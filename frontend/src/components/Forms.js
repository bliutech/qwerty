import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

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

  const onSubmit = data => console.log(data);  // put function that calls backend

  const watchNumClass = watch('numClass');
  const watchPronoun = watch('pronoun');

  function classNums() {
    return [...Array(parseInt(watchNumClass || 0)).keys()];
  }

  function otherPronoun() {
    if (watchPronoun == 'other') {
      return (
        <div>
          <label>
            Other pronoun
            <input
              type='text'
              placeholder='Preferred pronoun that is not on the list'
              {...register('pronounOther')}
            />
          </label> <br />
        </div>
      )
    }
  }

  return (
    <div>

      <h1>Forms</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        <label>
          Name
	        <input
            type='text'
            placeholder='First and lastname'
            {...register('name')}
          />
        </label> <br />

        <label>
          Pronoun
          <select {...register('pronoun')} defaultValue={'they-them'}>
            {pronouns.map(item => {
              return (<option key={item.value} value={item.value}>{item.text}</option>)
            })}
          </select>
        </label> <br />

        {otherPronoun()}

        <label>
          Contact
          <input
            type='text'
            placeholder='Preferred method of contact'
            {...register('contact')}
          />
        </label> <br />

        <label>
          Blurb
          <input
            type='text'
            placeholder='Short blurb/bio about yourself'
            {...register('blurb')}
          />
        </label> <br />

        <label>
          Number of classes
          <input
            name='numClass'
            type='number' min='0'
            defaultValue={0}
            placeholder='Number of classes to be submitted'
            {...register('numClass')}
          />
        </label> <br />
        
        {classNums().map(i => (
          <div key={i}>
            <label>
              Class {i + 1}
              <input
                type='text'
                placeholder=''
                {...register(`class[${i}]`)}
              />
            </label> <br />
          </div>
        ))}

        <input type='submit' />
      </form>
    </div>
  );
}

export default Forms;