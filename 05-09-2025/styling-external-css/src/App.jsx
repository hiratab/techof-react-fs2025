import './App.css'

function Heading({ text, className }) {
  return (
    <h1 className={className || 'primary'}>
      {text}
    </h1>
  )
}

function App() {

  return (
    <div className='container'>
      <Heading
        class='secondary'
        text='Erros no número e na identidade das vítimas do Elevador da Glória: quem responde pela informação?'
      />
      <p className='short-description' >
        Entre ontem e hoje vários foram os momentos em que diferentes autoridades deram informações distintas sobre o desastre do Elevador da Glória, nomeadamente número de mortos ou mesmo vítimas identificadas. Assim, quem responde pela informação?
      </p>
    </div>
  )
}

export default App
