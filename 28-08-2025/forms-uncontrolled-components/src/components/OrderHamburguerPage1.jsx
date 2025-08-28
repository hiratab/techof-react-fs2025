import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Navbar from './Navbar'
import styles from '../css/OrderHamburguerPage1.module.css'

function ErrorLabel(props) {
  return (
    <p className={styles.errorLabel}>{props.text}</p>
  )
}

function FormInputItem(props) {
  return (
    <div key={props.id}>
      <label>* {props.label}: </label>
      <input
        type={props.type}
        ref={props.ref}
      />
      {props.error && <p
        className={styles.errorLabel}
      >
        {props.text}
      </p>}
    </div>
  )
}

function FormSelectItem(props) {
  console.log(props.ref)
  return (
    <div>
      <label>* {props.label}</label>
      <select ref={props.ref}>
        <option value=''>--Do you want to order chips? --</option>
        <option value='yes'>Yes</option>
        <option value='no'>No</option>
      </select>
      {props.error && <ErrorLabel text={props.text} />}
    </div>
  )
}

function OrderHamburguerPage() {
  const nameInputRef = useRef()
  const emailInputRef = useRef()
  const chipsInputRef = useRef()
  const specialRequestsInputRef = useRef()
  const termAndConditionsInputRef = useRef()

  const [hasErrorName, setHasErrorName] = useState(false)
  const [hasErrorEmail, setHasErrorEmail] = useState(false)
  const [hasErrorChips, setHasErrorChips] = useState(false)
  const [hasErrorSpecialRequests, setHasErrorSpecialRequests] = useState(false)
  const [hasErrorTermAndConditions, setHasErrorTermAndConditions] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    const name = nameInputRef.current.value
    const email = emailInputRef.current.value
    const chips = chipsInputRef.current.value
    const specialRequests = specialRequestsInputRef.current.value
    const termAndConditions = termAndConditionsInputRef.current.checked

    if (!name || !email || !chips) {
      setHasErrorName(true)
      setHasErrorEmail(true)
      setHasErrorChips(true)
    }

    const isValidName = name.length >= 2
    const isValidEmail = email.length >= 2
    const isValidChips = chips !== ''

    setHasErrorName(!isValidName)
    setHasErrorEmail(!isValidEmail)
    setHasErrorChips(!isValidChips)

    if (!termAndConditions) {
      alert('Please, accept the Terms And Conditions')
    }
    setHasErrorTermAndConditions(!termAndConditions)

    console.log(`name ${name} email ${email} chips ${chips} 
      specialRequests ${specialRequests}
      termsAndCoditions ${termAndConditions}`)

    if (isValidName && isValidEmail && isValidChips && termAndConditions) {
      navigate('/order-sent', {
        state: {
          name,
          email,
          chips,
          specialRequests
        }
      })
    }

  }

  const inputs = [
    {
      id: 'name',
      inputType: 'input',
      label: 'Name',
      type: 'text',
      ref: nameInputRef,
      error: hasErrorName,
      text: 'The name is not valid',
    },
    {
      id: 'email',
      inputType: 'input',
      label: 'Email',
      type: 'email',
      ref: emailInputRef,
      error: hasErrorEmail,
      text: 'The email is not valid',
    },
    {
      id: 'chips',
      inputType: 'select',
      label: '',
      type: '',
      ref: chipsInputRef,
      error: hasErrorChips,
      text: 'Please, select if you want to order chips',
    },
    {
      id: 'special-request',
      inputType: 'input',
      label: 'Special Requests?',
      type: 'text',
      ref: specialRequestsInputRef,
      error: hasErrorSpecialRequests,
      text: 'Please, specify your special request correctly',
    },
    {
      id: 'checkbox',
      inputType: 'input',
      label: 'I have read and agreed to the terms and conditions',
      type: 'checkbox',
      ref: termAndConditionsInputRef,
      error: hasErrorTermAndConditions,
      text: 'Please, accept the terms and conditions',
    },
  ]

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        {
          inputs.map(input => {
            if (input.inputType === 'input') {
              return <FormInputItem {...input} />
            }
            if (input.inputType === 'select') {
              return <FormSelectItem {...input} />
            }

          })
        }
        <button type='submit'>
          Make an Order!
        </button>
      </form>
    </div>
  )
}

export default OrderHamburguerPage