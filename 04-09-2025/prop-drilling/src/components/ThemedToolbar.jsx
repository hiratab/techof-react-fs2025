import { useContext } from 'react'

import ThemedButton from './ThemedButton'
import ThemeContext from '../contexts/ThemeContext'

function ThemedToolbar() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div>
      <ThemedButton
        theme={theme}
        label={'Toggle Theme'}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      <h2
        style={{
          color: theme === 'light' ? '#545454ff' : '#f6f6f6'
        }}
      >
        Toolbar
      </h2>
    </div>
  )
}

export default ThemedToolbar