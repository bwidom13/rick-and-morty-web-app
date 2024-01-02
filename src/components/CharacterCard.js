import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardSubtitle, CardTitle, Table } from 'reactstrap'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function CharacterCard({info}) {
    const [modal, setModal] = useState(false);
    const [statusColor, setStatusColor] = useState("");
    
    useEffect(()=>{
        if(info.status==="Dead"){
            setStatusColor("red");
        }else if(info.status === "Alive"){
            setStatusColor("green");
        }else{
            setStatusColor("gray");
        }
    },[]);
    const toggle = () => setModal(!modal);
    return (
        <div >
            <Card
                style={{
                    width: '20rem'
                }}    
                            
            >
                <img
                    alt="Sample"
                    src={info.image}
                    onClick={toggle}
                    style={{cursor:"pointer"}}
                    className='rounded'
                />
                <CardBody>
                    <CardTitle >
                        <h5 style={{fontStyle:"oblique", fontSize}}>
                            {info.name}
                        </h5>
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"                        
                        
                    >
                        <h6 style={{color:statusColor}}>
                            Status: {info.status}
                        </h6>
                    </CardSubtitle>
                </CardBody>
            </Card>
            <Modal isOpen={modal} toggle={toggle} size='lg'>
                <ModalHeader toggle={toggle} >{info.name}</ModalHeader>
                
                <ModalBody >
                    <div className='d-flex'>
                        <img src={info.image} className='mx-3' style={{height:"200px",width:"200px"}}/>
                        <div>
                            <h3>Species: {info.species}</h3>
                            {info.type !== "" && <h3>Type: {info.type}</h3>}
                            <h3>Gender: {info.gender}</h3>
                            {info.origin.name !== "" && <h3>Origin: {info.origin.name}</h3>}
                        </div>
                    </div>                                                    
                    
                </ModalBody>
            </Modal>
        </div>
    )
}
