import { NameProvider } from './context/NameContext'
import { UserProvider } from './context/UserContext'

import NameInput from './components/NameInput'
import EmailInput from './components/EmailInput'
import AgeInput from './components/AgeInput'
import UserDetails from './components/UserDetails'

function App() {
  return (
    <NameProvider>
      <UserProvider>
        <NameInput />
        <EmailInput />
        <AgeInput />
        <UserDetails />
      </UserProvider>
    </NameProvider>
  )
}

export default App
