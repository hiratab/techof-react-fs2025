const Greeting = () => {
  return (
    <h1
      style={{
        backgroundColor: 'blue', // background-color
        fontSize: '3em', // font-size
        fontWeight: 700 // font-weight
      }}
    >
      Hello, world!
    </h1>
  )
}

const styles = {
  heading: {
    fontSize: '20px',
    color: 'darkblue'
  },
  paragraph: {
    fontSize: '14px',
    color: '#6c6c6cff'
  }
}

function ProfileCard() {
  return (
    <div
      style={{
        border: '0.1em solid gray',
        borderRadius: '8px',
        padding: '1em',
        background: '#f0f0f0'
      }}
    >
      <h1 style={styles.heading}>Fullstack developer</h1>
      <p style={styles.paragraph}>Ricardo</p>
      <p style={styles.paragraph}>João</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <Greeting />
      <p
        style={{
          backgroundColor: '#f2f2f2',
          fontWeight: 400,
          textAlign: 'center'
        }}
      >
        A paragraph
      </p>
      <ProfileCard />
    </div>
  )
}

export default App
