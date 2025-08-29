import { useLocation, useNavigate } from "react-router-dom"

function UserPage() {
  const location = useLocation()
  const navigate = useNavigate()

  const {
    email,
    password,
    firstName,
    lastName,
    termsAndConditions,
    role,
  } = location.state || {}

  return (
    <div>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>FirstName: {firstName}</p>
      <p>LastName: {lastName}</p>
      <p>Terms And Conditions: {`${termsAndConditions ? 'Yes' : 'No'}`}</p>
      <p>Role: {role}</p>
      <button
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  )
}

export default UserPage