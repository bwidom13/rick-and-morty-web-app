import React, { useEffect, useState } from 'react';
import { Container, Row} from 'reactstrap';
import CharacterCol from '../components/CharacterCol';
import getEightRandomNumbers from '../util/RandomNumbers';
import { getCharacter } from "rickmortyapi";


export default function Home() {
    const [characters, setCharacters] = useState([]);

    useEffect( ()=>{
        async function fetchData(){
            let indices = getEightRandomNumbers();            
            for(let num of indices){
                try{
                    const character = await getCharacter(num);
                    characters.push(character);
                    
                }catch(err){
                    console.log(`Error: ${err}`);
                }
            }
            setCharacters([...characters]);            
        }
        fetchData();
    },[])

    return (
        <div >
            <Container className="mt-3" fluid>
                <Row  className='d-flex justify-content-around mb-2'>
                    {
                        characters.map((char) => {
                            return <CharacterCol info={char.data} key={char.data.id}/>
                        })
                    }
                </Row>                
            </Container>
        </div>
    )
}
