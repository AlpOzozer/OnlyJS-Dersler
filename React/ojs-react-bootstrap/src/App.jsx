import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <>
      <h1>react-bootstrap</h1>
      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>1 of 2</Col>
        </Row>
      </Container>
    </>
  )
}

export default App;