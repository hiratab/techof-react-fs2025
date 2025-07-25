import Welcome from './Welcome'
import Welcomes from './Welcomes'
import Paragraph from './Paragraph'

const Exemplo = () => {
  return (
    <p>Exemplo dentro do file</p>
  )
}

function App() {
  return (
    <div>
      <Welcome name="Bruno"/>
      <Welcome name="Claudio"/>
      <Welcomes>
        <Welcome name="Joao"/>
        <Welcome name="Sergio"/>
      </Welcomes>
      <Paragraph text="A paragraph inside arrow function component" />
      <Exemplo />
    </div>
  )
}

export default App
