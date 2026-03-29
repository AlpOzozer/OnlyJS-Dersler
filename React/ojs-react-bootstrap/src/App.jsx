import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <>
      <h1>react-bootstrap</h1>
      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>1 of 2</Col>
          <Col><Button variant="primary">Primary</Button>
          <Col><Button variant="info">Info</Button></Col>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App;