import React from 'react'
import { ListGroupItem } from 'reactstrap'

export default function MyListGroupItem({info}) {
  return (
    <div>
        <ListGroupItem style={{cursor:"pointer"}}>
            {info.name}
        </ListGroupItem>
    </div>
  )
}
