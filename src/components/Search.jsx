import { useState, useEffect } from 'react';
import { Typography, Box, TextField, Autocomplete } from '@mui/material'
import useFetch from '../network/useFetch';
// import FilterPrducts from './filterProducts';
// import { fetchdata } from './fetchdata';


function Search({setSearchInput}) {

 const handleInput = (e) => {
   setSearchInput(e.target.value.toLowerCase())
 }
 return (
   <Box className="App"
   sx={{ width: '100%', overflow: 'hidden' }}>
   <TextField 
         label="Search"
         onChange={handleInput}
         sx={{
           width: 800,
           margin: '10px auto',
         }} />
   </Box>
 );
}

export default Search;
