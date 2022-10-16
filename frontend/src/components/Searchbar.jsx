import axios from 'axios';
import React, { useState, useEffect } from 'react';

function SearchBar() {
        const [search , setSearch] = useState('');
        const [users , setUsers] = useState([]);
        const [filteredData , setFilteredData]= useState([]);
        useEffect(()=>{
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
                setUsers(response.data);
            })
        },[])

        useEffect(()=>{
            setFilteredData(
                users.filter((user)=> user.name.toLowerCase().includes(search.toLowerCase()) )
            )
        },[search, users])

        return (
            <div className="Search">
                <input type="text" placeholder="Search..." onChange={(e)=>{
                    setSearch(e.target.value);
                }}/>
                {filteredData.length === 0 ? <div>No Result Found</div> : filteredData.map((val)=>{
                    return <div key={val.id}>
                        <p>{val.name}</p>
                    </div>
                })}
            </div>
    );

}

export default SearchBar;