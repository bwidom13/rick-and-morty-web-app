import React from 'react';
import { Col } from 'reactstrap';
import CharacterCard from './CharacterCard';


export default function CharacterCol({info}) {
  return (
    <Col className="d-flex justify-content-center mb-2 ">
      <CharacterCard info={info}/>    
    </Col>

  )
}
