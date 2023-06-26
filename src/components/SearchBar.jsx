import React from 'react'
import { Paper } from '@mui/material'
import search from '../utility/images/search-normal.png'

const SearchBar = () => {

  return (
    <Paper
        component='form'
        sx={{
            border:'0px',
            p: 1,
            boxShadow: 'none',
            mr: { sm: 5},
            display:'flex',
            backgroundColor:'#F5F5F5',
            width:'417px'
        }}    
    >
        <img src={search} alt='search' />
        <input 
            className='search-bar'
            placeholder='Search for anything...'
            style={{border:'0px',backgroundColor:'#F5F5F5',marginLeft:'1rem'}}
        />
    </Paper>
  )
}

export default SearchBar