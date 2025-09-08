import styled from 'styled-components'

const StyledTitle = styled.div`
  color: ${props => props.color};
  font-size: 2em;
  font-weight: 300;

  &:hover {
    font-size: 4em;
    font-weight: 900;
  }

  transition: font-size 1s ease, font-weight 1s ease;
`

function Title({ title }) {
  return (
    <StyledTitle color='rgba(214, 165, 184, 1)'>
      {title}
    </StyledTitle>
  )
}

const Button = styled.button((props) => ({
  fontWeight: 400,
  background: props.dark ? 'rgba(214, 165, 184, 1)' : 'rgba(227, 23, 101, 1)',
  color: props.dark ? 'rgba(227, 23, 101, 1)' : 'rgba(214, 165, 184, 1)',

  "&:hover": {
    fontSize: '4em',
    fontWeight: 900
  },

  transition: 'font-size 1s ease, font-weight 1s ease'
}));

const BlueButton = styled(Button)`
  background: ${props => props.dark ? 'rgba(17, 26, 151, 1)' : 'rgba(113, 122, 237, 1)'}
`

function App() {
  return (
    <div>
      <Title title={'My First Styled Component'} />
      <Button dark={true}>Button</Button>
      <BlueButton dark={false}>BlueButton</BlueButton>
    </div>
  )
}

export default App

