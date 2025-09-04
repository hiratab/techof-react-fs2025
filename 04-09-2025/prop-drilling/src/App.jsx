import { useContext } from 'react'

import ThemedToolbar from './components/ThemedToolbar'
import ThemedButton from './components/ThemedButton'
import ThemeContext from './contexts/ThemeContext'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div>
      <div
        style={{
          background: theme === 'light' ? '#f6f6f6' : '#545454ff',
        }}
      >
        <ThemedToolbar />
        <ThemedButton
          label={'Styled by Prop'}
        />
      </div>
      <div>
        <p>Lorem</p>
      </div>
    </div>
  )
}

export default App
