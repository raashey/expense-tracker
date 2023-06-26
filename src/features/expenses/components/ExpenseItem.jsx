import { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FormatDate } from '../../../utils/FormatDate';
import './ExpenseItem.scss';

export const ExpenseItem = (props) => {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const notHoveredStyle = 'expense-item bg-secondary m-3';
  const hoveredStyle = 'expense-item bg-secondary m-3 border border-warning';

  const setClickedState = () => {
    setClicked(!clicked);
  };

  const setHoveredStateTrue = () => {
    setHovered(true);
  };

  const setHoveredStateFalse = () => {
    setHovered(false);
  };

  const date = new Date(props.date);

  if (!clicked) {
    return (
      <Card
        className={hovered ? hoveredStyle : notHoveredStyle}
        onClick={setClickedState}
        onMouseOver={setHoveredStateTrue}
        onMouseOut={setHoveredStateFalse}
      >
        <Card.Body>
          <Container fluid>
            <Row>
              <Col xs={2}>
                <FormatDate
                  date={date}
                  className="d-flex flex-row justify-content-center"
                />
              </Col>
            <Col xs={8} className='d-flex justify-content-center align-items-center'>
              <h2>{props.name}</h2>
            </Col>
            <Col xs={2} className='d-flex justify-content-center align-items-center'>
              <h2>{props.price}$</h2>
            </Col>
            </Row>
          </Container>
          {/* <div className="d-flex grow-2 flex-row justify-content-start">
            
          </div>
          <div className="d-flex grow-6 flex-row justify-content-center">
            
          </div>
          <div className="d-flex grow-2 flex-row justify-content-end">
            <div className="price d-flex justify-content-center align-items-center border border-warning">
              
            </div>
          </div> */}
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <Card
        className={hovered ? hoveredStyle : notHoveredStyle}
        onClick={setClickedState}
        onMouseOver={setHoveredStateTrue}
        onMouseOut={setHoveredStateFalse}
      >
        <Card.Body className="d-flex flex-row justify-content-between align-items-center text-light">
          <Button onClick={props.onItemDelete}>Delete</Button>
          <Button>Modify</Button>
        </Card.Body>
      </Card>
    );
  }
};
