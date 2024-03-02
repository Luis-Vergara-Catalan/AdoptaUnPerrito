import React from 'react'
import Badge from 'react-bootstrap/Badge'

function Tags({razaPerro, Color}) {
  return (

    <Badge bg={Color}>{razaPerro}</Badge>
  )
}

export default Tags