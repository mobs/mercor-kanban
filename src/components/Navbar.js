import React from 'react'
import { Typography, Divider, Stack } from '@mui/material'
import SearchBar from './SearchBar'

import { logo, arrow, icons, profile, arrowDown } from '../utility/images'



const Navbar = () => {
  return (
    <Stack 
      direction="row" 
      alignItems="center" 
      sx={{ position: 'sticky', top:0, justifyContent:'space-between'}} 
    >
      <Stack 
      direction="row" 
      alignItems="center" 
      sx={{ position: 'sticky', top:0, justifyContent:'space-between'}} 
      >
        <img src={logo} alt='logo' height={24} />
        <Typography variant='body2' ml={1} sx={{ fontWeight:'bolder'}}> PROJECT M. </Typography>
        <img src={arrow} alt='arrow' style={{ height:'26px', width:'20px', marginLeft:'2rem'}}/>
      </Stack>

      <Divider orientation='vertical' flexItem style={{ width:'5px', marginLeft:'2.35rem'}}/> 
      <Stack 
      direction="row" 
      justifyContent="flex-start"
      alignItems="center" 
      flex={1}
      ml={15}
      sx={{ top:0}} 
      >
        <SearchBar />
      </Stack>

      <Stack 
      direction="row" 
      alignItems="center" 
      flex={0.5}
      sx={{ position: 'sticky', top:0, justifyContent:'space-between'}} 
      >
        <img src={icons} alt='icons' />
        <Stack direction="column" alignItems="flex-end">
          <Typography variant='subtitle1'> Mobashir Alam </Typography>
          <Typography variant='body2'> Delhi, India</Typography>
        </Stack>

        <img src={profile} alt='profile-pic' style={{borderRadius:'50%', marginRight:'-2rem'}} />
        <img src={arrowDown} alt='arrow-down' />
      </Stack> 
    </Stack> 
  )
}

export default Navbar