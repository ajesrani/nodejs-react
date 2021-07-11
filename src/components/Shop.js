import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

const Shop = () => {

    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect( () => {
        fetchItems();
    }, []);

    useEffect( () => {
        filterHandler();
    }, [search]);

    const filterHandler = () => {
        setFilteredItems(items.filter((c) => c.item.name.includes(search)))
    }
    
    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items = await data.json();
        console.log(items);
        setItems(items.data);
        setFilteredItems(items.data);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const refreshSearch = e => {
        e.preventDefault();
        //setItems(items.filter((c) => c.item.name.search(search) >= 0))
        //setSearch('');
    }

    return (
        <div>
            <form onSubmit={refreshSearch} action="">
                <input className="m-2" type="text" value={search} onChange={updateSearch} />
                <button type="submit">Search</button>
            </form>
            
            {
                filteredItems.map((item) => (
                    <h5 key={item.itemId}>
                    <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
                    </h5>
                ))
            }
        </div>
    )
}

export default Shop;