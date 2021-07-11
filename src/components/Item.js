import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

const Item = ( {match} ) => {
    
    useEffect( () => {
        fetchItem();
        console.log(match);
    }, []);

    const [item, setItem] = useState({
        images: {}
    });

    const fetchItem = async () => {
        const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        const item = await data.json();
        console.log(item.data.item);
        setItem(item.data.item);
    };

    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.images.icon} alt=""/>
        </div>
    )
}


export default Item;