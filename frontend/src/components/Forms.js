import { useForm } from 'react-hook-form';

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
          <div className='row'>
          <div className='left-column'>Other pronoun</div>
          <div className='right-column'><input
            type='text'
            placeholder='Preferred pronoun that is not on the list'
            {...register('pronounOther')}
          /></div></div>
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
        <div className='right-column'><input
          type='text'
          placeholder='First and last name'
          {...register('name')}
        /></div></div>
        <br />

        <div className='row'>
        <div className='left-column'>Pronoun</div>
        <div className='right-column'><select {...register('pronoun')} defaultValue={'they-them'}>
          {pronouns.map(item => {
            return (<option key={item.value} value={item.value}>{item.text}</option>)
          })}
        </select></div></div>
        <br />

        {otherPronoun()}
        
        <div className='row'>
        <div className='left-column'>Contact</div>
        <div className='right-column'><input
          type='text'
          placeholder='Preferred method of contact'
          {...register('contact')}
        /></div></div>
        <br />

        <div className='row'>
        <div className='left-column'>Blurb</div>
        <div className='right-column'><input
          type='text'
          placeholder='Short blurb/bio about yourself'
          {...register('blurb')}
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

        <button type='submit'>Submit</button>
        
      </form>
    </div>
  );
}

export default Forms;
