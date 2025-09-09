function Greeting({ name }) {
  return (
    <h1>Hello {name.toUpperCase()}</h1>
  )
}

function App() {
  let age = 100
  print(age)

  age = 100.12
  print(age)

  age = 123.45
  print("100")
  
  age = "twenty five"
  print(age)

  age = {
    number: 25
  }
  print(age)

  print(() => {})

  console.log(addNumber(1, 2))
  console.log(addNumber(1.0, 2.1))
  console.log(addNumber(1, '2'))
  console.log(add(1, '2'))
  console.log(add(add(1, '2'), 4))
  console.log(addNumber(addNumber(1, '2'), 4))
  console.log('bruno' + ' ' + 'hirata')

  return (
    <div>
      <Greeting name={'Bruno'} />
      <Greeting name={add('1', 2)} />
      <Greeting name={add(1, '2')} />
    </div>
  )
}

// NaN => Not a Number
function print(age) {
  console.log('print age', Number(age).toFixed(2))
}

function addNumber(a, b) {
  return Number(a) + Number(b)
}

function add(a, b) {
  return a + b
}

function formatObject(a, b) {
  return {
    a,
    b
  }
}

export default App
