import React from 'react'
import Card from 'react-bootstrap/Card'
import Tags from './Tags'

function MyCard({imagen, nombre, descripcion, raza, BgColor}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Tags razaPerro={raza} Color={BgColor} />
      </Card.Body>
    </Card>
  )
}

export default MyCard;