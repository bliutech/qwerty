import { useForm } from 'react-hook-form';

function LoginMod() {

  const { register, handleSubmit, reset, clearErrors} = useForm();

  const onSubmit = data => console.log(data);  // put function that calls backend

  return (
    <div>

      <h1>Login</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className='row'>
        <div className='left-column'>Username</div>
        <div className='right-column'><input
          type='text'
          placeholder='Username registered before'
          {...register('username')}
        /></div></div>
        <br />

        <div className='row'>
        <div className='left-column'>Password</div>
        <div className='right-column'><input
          type='text'
          placeholder='Password as entered before'
          {...register('password')}
        /></div></div>
        <br />

      </form>

    </div>
  )
}

export default LoginMod;