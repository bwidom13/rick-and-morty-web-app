import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getCharacter } from 'rickmortyapi';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

export default function PersonalProfile() {
    let { id } = useParams();
    const [charInfo, setCharInfo] = useState({
        location:{name:""},
        origin:{name:""}
    });
    useEffect(() => {
        getCharacter(Number.parseInt(id)).then(
            (res) => {                
                setCharInfo(res.data);
            }
        )
    }, [])

    return (
        <section className="vh-80">
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="6" className="mb-4 mb-lg-0">
                        <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                            <MDBRow className="g-0">
                                <MDBCol md="4" className="gradient-custom text-center text-white"
                                    style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                    <MDBCardImage src={charInfo.image}
                                        alt="Avatar" className="my-5" style={{ width: '100%' }} fluid />
                                    <MDBTypography tag="h5">{charInfo.name}</MDBTypography>
                                    <MDBCardText>{charInfo.status}</MDBCardText>
                                    <MDBIcon far icon="edit mb-5" />
                                </MDBCol>
                                <MDBCol md="8">
                                    <MDBCardBody className="p-4">
                                        <MDBTypography tag="h6">Information</MDBTypography>
                                        <hr className="mt-0 mb-4" />
                                        <MDBRow className="pt-1">
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">Origin</MDBTypography>
                                                <MDBCardText className="text-muted">{charInfo.origin.name}</MDBCardText>
                                            </MDBCol>
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">Species</MDBTypography>
                                                <MDBCardText className="text-muted">{charInfo.species}</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>
                                        
                                        <MDBRow className="pt-1">
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">Type</MDBTypography>
                                                <MDBCardText className="text-muted">{charInfo.type}</MDBCardText>
                                            </MDBCol>
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">Location</MDBTypography>
                                                <MDBCardText className="text-muted">{charInfo.location.name}</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>

                                        <div className="d-flex justify-content-start">
                                            <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                                            <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                                            <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                                        </div>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
