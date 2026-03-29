import styled from 'styled-components';
import { Button, ButtonWithShadow, SubmitButton } from './components/Button';


function App() {
  return (
    <>
      <h1>styled-components</h1>
      <Button>Normal</Button>
      <Button as="a" href="https://google.com" color="#0000ff" textColor="primary">Primary</Button>
      <SubmitButton type="submit" textColor="#fff">Submit Button</SubmitButton>
      <ButtonWithShadow color="secondary">Shadow button</ButtonWithShadow>
    </>
  )
}

export default App;
