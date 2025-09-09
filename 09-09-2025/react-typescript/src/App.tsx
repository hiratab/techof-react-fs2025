import EmployeeCard, { type EmployeeProps } from "./EmployeeCard"

type Name = {
  firstName: string,
  lastName: string,
  formattedName?: string,
  age?: number
}

interface GreetingProps {
  name: string,
  age: number
}

function Greeting(props: GreetingProps) {
  return (
    <h1>Hello {props.name.toUpperCase()}, {props.age}</h1>
  )
}

function App() {
  console.log(add(1, 2))
  console.log(add(3, 4))
  console.log(add(Number('5'), 6))

  let age: number
  age = 5
  console.log('age', age)

  let i = 1
  console.log('i', i)

  let x: number = age
  console.log('x', x, typeof x)

  let name = 'Bruno'
  console.log('name', name, typeof name)
  let lastName: string = 'Bruno'
  console.log('lastName', lastName, typeof lastName)

  console.log('formatName', formatName(name, lastName))
  console.log('buildName', buildName(name, lastName))

  const nameObject: Name = {
    firstName: 'First',
    lastName: 'Last',
  }

  const nameObject1: Name = {
    firstName: 'First1',
    lastName: 'Last1',
    formattedName: formatName(name, lastName)
  }

  const nameObject2 = buildName(name, lastName)
  nameObject2.age = 123

  interface User {
    name: string,
    age: number | 'N/A' | '18-',
    email: string,
    isDisabled: boolean,
    address: {
      street: string,
      city: string
    },
    hobbies: Hobby[],
    hobbiesLimit: [Hobby, Hobby?, Hobby?]
  }

  interface Admin extends User {
    permissions: string[]
  }

  type Hobby = "reading" | "gaming" | "coding"

  const alice: User = {
    name: "Alice",
    age: '18-',
    email: "alice@example.com",
    isDisabled: false,
    address: {
      street: "123 Main St",
      city: "New York",
    },
    hobbies: ["reading", "gaming", "coding"],
    hobbiesLimit: ["reading"],
  }

  const admin: Admin = {
    name: "Admin",
    age: 'N/A',
    email: "admin@example.com",
    isDisabled: false,
    address: {
      street: "123 Main St",
      city: "New York",
    },
    hobbies: [],
    hobbiesLimit: ["reading"],
    permissions: []
  }

  const employee: EmployeeProps = {
    name: 'Employee',
    age: 123,
    position: 'full-time'
  }

  return (
    <>
      <Greeting
        name={name}
        age={nameObject2.age}
      />
      <Greeting
        name={formatName(name, lastName)}
        age={nameObject2.age}
      />
      <EmployeeCard {...employee} />
    </>
  )
}

function add(a: number, b: number) {
  return Number(a) + Number(b)
}

function formatName(firstName: string, lastName: string) {
  return `${firstName} ${lastName}`
}

function buildName(firstName: string, lastName: string): Name {
  return {
    firstName,
    lastName,
    formattedName: formatName(firstName, lastName)
  }
}

export default App
