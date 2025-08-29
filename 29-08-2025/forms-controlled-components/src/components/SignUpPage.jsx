import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUpPage() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    termsAndConditions: false,
    role: '',
  })

  // Wrapper
  const handleChange = (propertyName, htmlValue = 'value') => {
    return (event) => {
      // const updatedFormData = {
      //   ...formData
      // }
      // updatedFormData[propertyName] = event.target.value
      // setFormData(updatedFormData)
      formData[propertyName] = event.target[htmlValue]
      setFormData({ ...formData })
      console.log(propertyName, formData[propertyName])
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    navigate('/user', {
      state: formData
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email: </label>
          <input
            id='email'
            type='text'
            value={formData.email}
            onChange={handleChange('email')}
          />
        </div>

        <div>
          <label htmlFor='password'>Password: </label>
          <input
            id='password'
            type='text'
            value={formData.password}
            onChange={handleChange('password')}
          />
        </div>

        <div>
          <label htmlFor='first-name'>First Name: </label>
          <input
            id='first-name'
            type='text'
            value={formData.firstName}
            onChange={handleChange('firstName')}
          />
        </div>

        <div>
          <label htmlFor='last-name'>Last Name: </label>
          <input
            id='last-name'
            type='text'
            value={formData.lastName}
            onChange={handleChange('lastName')}
          />
        </div>

        <div>
          <input
            id='terms-and-conditions'
            type='checkbox'
            checked={formData.termsAndConditions}
            onChange={handleChange('termsAndConditions', 'checked')}
          />
          <label htmlFor='terms-and-conditions'> Terms and Conditions</label>
        </div>

        <div>
          <label htmlFor='role'>Role: </label>
          <select value={formData.role} onChange={handleChange('role')}>
            <option value=''>Choose a role</option>
            <option value='admin'>Admin</option>
            <option value='superUser'>Super User</option>
            <option value='user'>User</option>
            <option value='viewer'>Viewer</option>
          </select>
        </div>

        <button type='submit'>
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignUpPage