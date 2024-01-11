import React, { useEffect, useState } from 'react'
import { Input, ListGroup, ListGroupItem } from 'reactstrap'
import MyListGroupItem from './ListGroupItem';
import { getCharacters } from 'rickmortyapi';
import { Link } from 'react-router-dom';

export default function Search() {
    const width = "600px"
    const [showOptions, setShowOptions] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterObject, setFilterObject] = useState({name:"a"});

    async function f(){
        let x = document.getElementById("input").value;
        let newObj = {name : x};
        getCharacters(newObj).then(
            (res) => {
                
                if(res.status === 200){                    
                    setCharacters([...res.data.results]);
                }else{
                    console.log(res.status);
                }
            }
        );
    }
    useEffect(()=>{
        f();
    },[characters])
    return (
        <div>
            <Input id="input" style={{ width: width }} onFocus={() => setShowOptions(true)}
            onBlur={()=>setShowOptions(false)}    
                    
            >
                
            </Input>
            <div className="" style={{
                width: width, position: "absolute", zIndex: "1"
            }}
            >
                {showOptions && <ListGroup style={{ width: width }}>                    
                    {characters.slice(-5).map((character) => {                    
                        return (                            
                            <MyListGroupItem info={character} key={character.id}/>                            
                        )
                    })}
                </ListGroup>}                
            </div>
        </div>
    )
}
