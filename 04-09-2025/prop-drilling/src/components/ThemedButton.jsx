import { useContext } from 'react'

import ThemeContext from '../contexts/ThemeContext'

function ThemedButton(props) {
  const { theme } = useContext(ThemeContext)

  return (
    <button
      style={{
        background: theme === 'light' ? '#545454ff' : '#f6f6f6',
        color: theme === 'light' ? '#f6f6f6' : '#545454ff'
      }}
      onClick={props.onClick || (() => console.log('Default On Click in ThemedButton'))}
    >
      {props.label}
    </button>
  )
}

export default ThemedButton
