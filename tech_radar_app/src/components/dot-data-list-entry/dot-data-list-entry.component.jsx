import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const DotDataListEntry = ({ name, description, id, eventKey }) => {
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={eventKey}>
          {id}. {name}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body>{description}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default DotDataListEntry;
