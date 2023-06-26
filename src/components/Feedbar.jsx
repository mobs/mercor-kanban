import React from 'react'
import { Box, Typography, Divider,Grid } from '@mui/material'

import { edit, add, group, filter, calendar,people, circles, dash } from '../utility/images'

const Feedbar = () => {
  return (
    <>
        <Grid item xs={6}>
            <Typography variant='h4' display='inline' fontWeight='bolder'> Mobile App </Typography>
            <button style={{ border:'0', backgroundColor:'#ffffff'}}> <img src={edit} alt='edit' /></button>
        </Grid>
        <Grid item xs={6} textAlign='center' display='flex' sx={{ height:'3rem', width:'100%'}}>
            <button style={{ border:'0', backgroundColor:'#ffffff', marginLeft:'23rem'}}> <img src={add} alt='add-icon' /> </button>
            <Typography variant='caption' color='#5030E5' fontWeight='bold' mr={3}> Invite </Typography>
            <img src={group} alt='group-pic' />
        </Grid>
        <Grid item xs={3} justify='flex'>
            <Box display='flex' justifyContent='space-between'>
            <button style={{ height:'40px', width:'120px', borderRadius:'0.5rem', border:'2px solid #787486'}}>
                <span>
                <img src={filter} alt='filter' />
                <Typography variant='caption' fontWeight='bold' color='#787486'> Filter </Typography>
                </span>
            </button>
            <button style={{ height:'40px', width:'120px',borderRadius:'0.5rem',border:'2px solid #787486'}}>
                <span>
                <img src={calendar} alt='calendar' />
                <Typography variant='caption' fontWeight='bold' color='#787486'> Today </Typography>
                </span>
            </button>
            </Box>
        </Grid>
        <Grid item xs={9} justify='flex'>
            <Box display='flex' justifyContent='flex-end'>
            <button style={{ height:'40px', width:'120px', borderRadius:'0.5rem', border:'2px solid #787486'}}>
                <span>
                <img src={people} alt='people'/>
                <Typography variant='caption' fontWeight='bold' color='#787486'> Share </Typography>
                </span>
            </button>
            <Divider orientation='vertical' flexItem sx={{margin:'0.5rem'}}/>
            <button style={{ height:'40px', border:'0', backgroundColor:'#ffffff'}}>
                <img src={dash} alt='dash' />
            </button>
            <button style={{ height:'40px',border:'0', backgroundColor:'#ffffff'}}>
                <img src={circles} alt='circles' />
            </button>
            </Box>
        </Grid>
    </>
  )
}

export default Feedbar