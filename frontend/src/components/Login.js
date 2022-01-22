import { useForm } from 'react-hook-form';

function Login() {

  const { register, handleSubmit, reset, clearErrors} = useForm();

  const onSubmit = data => console.log(data);  // put function that calls backend

  return (
    <div>

      <h1>Login</h1>

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
        <div className='left-column'>Name</div>
        <div className='right-column'><input
          type='text'
          placeholder='First and last name'
          {...register('name')}
        /></div></div>
        <br />

      </form>

    </div>
  )
}

export default Login;