import { useForm } from 'react-hook-form';

function RegisterMod() {

  const { register, handleSubmit, reset, clearErrors} = useForm();

  const onSubmit = data => console.log(data);  // put function that calls backend

  return (
    <div>

      <h1>Register</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className='row'>
        <div className='left-column'>Username</div>
        <div className='right-column'><input
          type='text'
          placeholder='Unique username'
          {...register('username')}
        /></div></div>
        <br />

        <div className='row'>
        <div className='left-column'>Password</div>
        <div className='right-column'><input
          type='text'
          placeholder='Respectfully complex password'
          {...register('password')}
        /></div></div>
        <br />

      </form>

    </div>
  );
}

export default RegisterMod;