import { useState, useMemo } from 'react'
import Search from "../Search";
import StickyHeadTable from "../StickyHeadTable";
import useFetch from "../../network/useFetch";

const LandingPage = () => {

    //api call using custom hook
    const [tabledata] = useFetch("https://jsonplaceholder.typicode.com/users");
    const [input, setInput] = useState('')
    
    //search input callback function
    const setSearchInput = (input) => {
        setInput(input)
    }

    //filter data on all table column
    const filterData = useMemo(() => {
         return tabledata.filter((user) => {
            if (user.name.toLowerCase().includes(input) || user.phone.toLowerCase().includes(input)
                || user.email.toLowerCase().includes(input) || user.website.toLowerCase().includes(input) || user.address.city.toLowerCase().includes(input)
            ) {
                return user
            }
        })
    }, [input,tabledata])


    return <>
        <Search setSearchInput={setSearchInput} />
        <StickyHeadTable tableData={filterData} />
    </>
}

export default LandingPage;