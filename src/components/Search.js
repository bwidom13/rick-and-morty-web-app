import React, { useEffect, useState } from 'react'
import { Input, ListGroup, ListGroupItem } from 'reactstrap'
import MyListGroupItem from './ListGroupItem';
import { getCharacter } from 'rickmortyapi';

export default function Search() {
    const width = "400px"
    const [showOptions, setShowOptions] = useState(false);
    let [character, setCharacter] = useState({});
    async function f(){
        let resp = await getCharacter(234)
        character = resp.data;
        setCharacter(character);
        console.log(character);
        // let x = res.data
        // setCharacter(x);
        // console.log(character);
    }
    useEffect(()=>{

        f();
    },[])
    return (
        <div>
            <Input style={{ width: width }} onFocus={() => setShowOptions(true)}
            onBlur={()=>setShowOptions(false)}/>
            <div className="" style={{
                width: width, position: "absolute", zIndex: "1"
            }}>
                {showOptions && <ListGroup style={{ width: width }}>
                    <MyListGroupItem info={character}/>
                    <ListGroupItem>
                        Dapibus ac facilisis in
                    </ListGroupItem>
                    <ListGroupItem>
                        Morbi leo risus
                    </ListGroupItem>
                    <ListGroupItem>
                        Porta ac consectetur ac
                    </ListGroupItem>
                    <ListGroupItem>
                        Vestibulum at eros
                    </ListGroupItem>
                </ListGroup>}
            </div>
        </div>
    )
}
