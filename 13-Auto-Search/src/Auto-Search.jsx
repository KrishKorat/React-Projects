import { useEffect, useState } from "react";
import Suggestions from "./Suggestion";



export default function AutoComplete() {

    const [users, setUsers] = useState([]);
    const [load, setLoad] = useState(false);
    const [searchParams, setSearchParams] = useState("");

    const [filterUsers, setFilterUsers] = useState([]);
    const [showDropDown, setShowDropDown] = useState(false);


    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setSearchParams(query);
        if(query.length > 1) {
            const filterData = 
                users && users.length
                ? users.filter(user => user.toLowerCase().indexOf(query) > -1)
                : [];
            setFilterUsers(filterData);
            setShowDropDown(true);
            console.log("FILTERED:", filterData);
        } 
        else {
            setShowDropDown(false);
            setFilterUsers([]);
        }
    }


    function handleClick(event) {
        setShowDropDown(false);
        setSearchParams(event.target.innerText);
        setFilterUsers([]);
    }


    async function fetchListUsers() {
        try {
            setLoad(true);

            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();

            if(data && data.users && data.users.length) {
                setUsers(data.users.map(u => u.firstName));
            }
        }
        catch(err) {
            console.log(err);
        }
        finally {
            setLoad(false);
        }
    }

    useEffect(() => {
        fetchListUsers();
    }, []);


    return(
        <div>
            {
                load
                ? (
                    <h1>Data loading! Please wait</h1>
                ) : (
                    <input 
                        value={searchParams}
                        name="search-users"
                        placeholder="Search names..."
                        onChange={handleChange}
                    />
                )
            }
            {
                showDropDown && (
                    <Suggestions handleClick={handleClick} data={filterUsers}/>
                )
            }
        </div>
    );
}
