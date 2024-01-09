import React, { useEffect, useState } from 'react'
import { Input, ListGroup, ListGroupItem } from 'reactstrap'
import MyListGroupItem from './ListGroupItem';
import { getCharacters } from 'rickmortyapi';

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
                    // characters = res.data.results
                    setCharacters([...res.data.results]);

                    // console.log(res.data.results);
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
            onChange={(e) => {
                // setSearchQuery(e.target.value);
                // let newObj = {name : e.target.value};
                // setFilterObject(p => {return {...p, ...newObj}});
                // console.log("filter object: " + filterObject.name);
                
                // getCharacters(filterObject).then(
                //     (res) => {
                        
                //         if(res.status === 200){
                //             // characters = res.data.results
                //             setCharacters([...res.data.results]);
    
                //             // console.log(res.data.results);
                //         }else{
                //             console.log(res.status);
                //         }
                //     }
                // );  

                // setCharacters(characters);
            }
            }
            />
            <div className="" style={{
                width: width, position: "absolute", zIndex: "1"
            }}>
                {showOptions && <ListGroup style={{ width: width }}>                    
                    {characters.slice(-5).map((character) => {                    
                        return <MyListGroupItem info={character} key={character.id}/>
                    })}
                </ListGroup>}
                
            </div>
        </div>
    )
}
