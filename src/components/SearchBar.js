import React, { useState, useMemo, useCallback } from 'react'; 
import DataListInput from 'react-datalist-input';
import { getCharacters } from 'rickmortyapi';
import 'react-datalist-input/dist/styles.css';


// const options = [
//     { name: 'Chocolate' },
//     { name: 'Coconut' },
//     { name: 'Mint' },
//     { name: 'Strawberry' },
//     { name: 'Vanilla' },
// ];


export default function SearchBar() {
    const [item, setItem] = useState();

    const [options, setOptions] = useState([{id:0,name:"Crocubot"},{id:1,name:"Rick"},{id:2,name:"Mory"}]);    

    const onInput = (async (event)=>{
        if(event.target.value.length > 4){
            let result = await getCharacters({name:event.target.value}).then((res) => {
                let data = res.data.results;          
                //options.push({id:1, name:"Rick"}, {id:2, name:"Morty"}, {id:3, name:"Beth"});
                setOptions([...data]);
                console.log(options);
                // console.log(options); 
            });
        }else{
            setOptions({});
        }
        // console.log(options);
    })

    const onSelect = useCallback((selectedItem) => {
        console.log('selectedItem', selectedItem);
        setItem(selectedItem);
    }, []);

    const items = useMemo(
        () =>
        
            // console.log(options);
            options.map((option) => 
                ({
                // required: id and value
                id: option.id,
                value: option.name,
                // optional: label, node
                // label: option.name, // use a custom label instead of the value
                // node: option.name, // use a custom ReactNode to display the option
                
            }))
        ,[],
    );

    return (
        <DataListInput  placeholder="Chocolate" items={items} onSelect={onSelect} 
            onInput={onInput}
        />
    )
}
