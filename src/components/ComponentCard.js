import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile from '../images/profile.jpg';


function ComponentCard(props) {
  return (
    <Card text="white" className="mx-md-auto card-sizing">
      <div className={props.border}></div>
      <div className={props.border2}></div>
      <div className="img-container">
        <img className={props.img} src={profile} alt="Malin Ueland" />
        <div className={props.border3}></div>
        <div className={props.border4}></div>
      </div>
      <Card.Body className='py-2'>
        <Card.Subtitle className="mb-0 mt-1 pb-1 md-right-align fw-bold">{props.header0}</Card.Subtitle>
        <Card.Title className='mb-0 md-right-align'><h1 className='mb-1'>{props.header1}</h1></Card.Title>
        <Card.Subtitle className="mb-2 md-right-align text-muted"><h2>{props.header2}</h2></Card.Subtitle>
        <Card.Subtitle className="mb-0 mt-1 pb-1  fw-bold">{props.header}</Card.Subtitle>
        <Card.Text className="contentShort">
          {props.contentShort}
        </Card.Text>
        <Card.Text className="contentMedium">
          {props.contentMedium}
        </Card.Text>
        <Card.Text className="pb-2">
          {props.content}
        </Card.Text>
        
        
        <Row>
          <Col>
          <ul className={props.list}>
             <li>HTML</li>
             <li>CSS</li>
             <li>Javascript</li>
          </ul>
        </Col>
        <Col>
          <ul className={props.list}>
             <li>Bootstrap</li>
             <li>SASS</li>
             <li>React</li>
          </ul>
        </Col>
        <Col>
          <ul className={props.list}>
            <li>NEXT.js</li>             
            <li>PHP</li>
            <li>SQL</li>
          </ul>
        </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ComponentCard;
