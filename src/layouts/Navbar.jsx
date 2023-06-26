import { Col, Container, Row } from 'react-bootstrap';
import './Navbar.scss';

export const Navbar = () => {
  return (
    <Container fluid className='text-center text-light m-5'>
      <Row>
        <Col>
          <h2>Expense Tracker</h2>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col xs={5}></Col>
        <Col xs={1}><span>Dashboard?</span></Col>
        <Col xs={1}><span>Expenses</span></Col>
      </Row>
    </Container>
  );
};
