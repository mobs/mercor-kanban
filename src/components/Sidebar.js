import React from 'react'
import { Divider, Stack, Typography } from '@mui/material'
import { categories } from '../utility/constants'

import { addSquare, dots, green, blue, orange, purple, union, lamp } from '../utility/images'

const Sidebar = () => {
  return (
    <Stack
        direction='row'
        sx={{
            overflow: 'auto',
            height:{ sx:'auto', md:'95%'},
            flexDirection: { md:'column'},
        }}
    >
        {categories.map((cat) => (
            <button
                style={{
                  display:'flex',
                  justifyContent:'start',
                  background:'trasparent',
                  alignItems:'center',
                  outline:'none',
                  border:'none',
                  padding: '0px',
                  margin: '10px 0px 10px 0px',
                  backgroundColor:'#ffffff'
                }}
                key={cat.name}
            >
                <img src={cat.icon} alt='icons' style={{ height:'24px', width:'24px', marginRight:'1rem'}}/>
                <span style={{ fontWeight:'bold', color:'#787486'}}> {cat.name} </span>
            </button>
        ))}
        <Divider />
        <Stack direction='row' alignItems='center' mt={2.8}>
          <Typography variant='body2' mr={6.4} sx={{ color:'#787486', fontWeight:'bold'}}> MY PROJECTS </Typography>
          <img src={addSquare} alt='add-icon'/>
        </Stack>

        <Stack mt={2} >
          <button
          style={{
            display:'flex',
            background:'trasparent',
            alignItems:'center',
            border:'none',
            borderRadius:'0.3rem',
            margin: '10px 0px 10px 0px',
            backgroundColor:'#5030E514'
          }}
          >
            <img src={green} alt='icons' style={{ height:'8px', width:'8px', marginRight:'1rem'}}/>
            <span style={{ fontWeight:'bold', color:'#787486'}}> Mobile App  </span>
            <img src={dots} alt='dots' style={{ marginLeft:'3rem'}}/>
          </button>
          <button
          style={{
            display:'flex',
            background:'trasparent',
            alignItems:'center',
            border:'none',
            margin: '10px 0px 10px 0px',
            backgroundColor:'#ffffff'
          }}
          >
            <img src={orange} alt='icons' style={{ height:'8px', width:'8px', marginRight:'1rem'}}/>
            <span style={{ fontWeight:'bold', color:'#787486'}}> Website Redesign  </span>
          </button>
          <button
          style={{
            display:'flex',
            background:'trasparent',
            alignItems:'center',
            border:'none',
            margin: '10px 0px 10px 0px',
            backgroundColor:'#ffffff'
          }}
          >
            <img src={purple} alt='icons' style={{ height:'8px', width:'8px', marginRight:'1rem'}}/>
            <span style={{ fontWeight:'bold', color:'#787486'}}> Design System </span>
          </button>
          <button
          style={{
            display:'flex',
            background:'trasparent',
            alignItems:'center',
            border:'none',
            margin: '10px 0px 10px 0px',
            backgroundColor:'#ffffff'
          }}
          >
            <img src={blue} alt='icons' style={{ height:'8px', width:'8px', marginRight:'1rem'}}/>
            <span style={{ fontWeight:'bold', color:'#787486'}}> Wireframes </span>
          </button>
        </Stack>
        <Stack style={{ display:'flex',backgroundImage:`url(${union})`, height:'233px', width:'206px'}}>
            <img src={lamp} alt='lamp' style={{height:'24px', width:'24px', marginLeft:'5.5rem', marginTop:'1rem'}}/>
            <Typography variant='body2' fontWeight='bolder' mt={5} ml={6}> Thoughts Time </Typography>
            <Typography variant='caption' ml={3} mr={3} sx={{ display:'flex',textAlign:'center'}} >We don’t have any notice for you, till then you can share your thoughts with your peers.</Typography>
            <button style={{ marginBottom:'0rem',margin:'2rem', backgroundColor:'white', border:0, fontWeight:'bolder'}}> Write a message </button>
        </Stack>
        
    </Stack>
  )
}

export default Sidebar