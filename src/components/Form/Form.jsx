import './Form.css'
import { useForm } from 'react-hook-form'

const Form = () => {
  const { handleSubmit, register, formState } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form flex-container'>
      <div>
        <h3>Create an account</h3>
        <p>
          Create an account to enjoy all the services without any adds for free!
        </p>
      </div>
      <input
        {...register('name', {
          required: {
            value: true,
            message: 'A name is required to continue'
          }
        })}
        type='text'
        id='name'
        placeholder='Name'
        className={formState.errors.name ? 'input-error' : 'input'}
      />
      {formState.errors.name && (
        <p className='error'>{formState.errors.name.message}</p>
      )}
      <input
        {...register('email', {
          required: {
            value: true,
            message: 'An email is required to continue'
          }
        })}
        type='email'
        id='email'
        placeholder='Email'
        className={formState.errors.email ? 'input-error' : 'input'}
      />
      {formState.errors.email && (
        <p className='error'>{formState.errors.email.message}</p>
      )}
      <input
        type='password'
        id='password'
        placeholder='Password'
        className={formState.errors.password ? 'input-error' : 'input'}
        {...register('password', {
          required: {
            value: true,
            message: 'A password is required to continue'
          },
          pattern: {
            value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{1,8}$/,
            message:
              'The password must include numbers, uppercase and lowercase letters, and have a maximum of 8 characters.'
          }
        })}
      />
      {formState.errors.password && (
        <p className='error'>{formState.errors.password.message}</p>
      )}
      <button type='submit'>Create account</button>
    </form>
  )
}

export default Form
