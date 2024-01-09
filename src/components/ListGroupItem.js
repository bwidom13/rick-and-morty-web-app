import React from 'react'
import { ListGroupItem } from 'reactstrap'

export default function MyListGroupItem({info}) {
  return (
    <div>
        <ListGroupItem style={{cursor:"pointer"}}>
            <img style={{width:"60px", height:"60px"}} src={info.image}/>
            <span className='mx-4 h5'>
              {info.name}
            </span>
        </ListGroupItem>
    </div>
  )
}
