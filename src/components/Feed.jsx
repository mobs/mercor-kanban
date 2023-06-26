import React, { useState } from 'react'
import { Box, Typography, Stack, Divider,Grid, Button } from '@mui/material'
import Cards from './Cards'
import Sidebar from './Sidebar'
import Feedbar from './Feedbar'

import { data } from '../utility/constants'
import { ellipse1, ellipse2, ellipse3, add } from '../utility/images'


const Feed = () => {
    const [cardData, setCardData] = useState(data); 

    return (
        <Stack sx={{
        "&::-webkit-scrollbar": {
          width: '10px',
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: '#FFFFFF',
        },
        overflowY:'auto',scrollbarColor:'#ffffff', flexDirection: {sx:"column", md:"row"} }}
        >
          <Box sx={{ height: { sx: 'auto', md:'92vh'}, px: {sx: 0, md: 0.5}, borderRight:'1px solid #dbdbdb'}}>
            <Sidebar />
            <Divider orientation='vertical' flexItem style={{ width:'5px'}}/> 
          </Box>
          <Grid container m={2} display='flex' spacing={2} sx={{ height:'5rem'}}>
            <Feedbar />

            <Box display='flex' p={2} sx={{ width:'100%', justifyContent:'space-between'}}>
              {cardData.map((group, index) => (
                group.id === '1'
                ?
                <Stack key={index} direction='column' p={2} sx={{ width:'30%', backgroundColor:'#F5F5F5', borderRadius:'1rem'}} >
                  <Typography variant='body2' fontWeight='bold' > 
                    <img src={ellipse1} alt='blue-ellipse' style={{ marginRight:'0.5rem'}} />
                    To Do 
                    <Button sx={{ marginLeft:'1rem',color:'#625F6D', backgroundColor:'#E0E0E0', borderRadius:'1rem',maxHeight:'1.5rem', minWidth:'1rem'}}> 4 </Button>
                    <img src={add} alt='add-icon' style={{marginLeft:'15rem'}}/>
                  </Typography>
                  <Divider color='#5030E5' sx={{ borderBottomWidth: 4,margin:2, marginRight:'0px',marginLeft:'0px' }} />
                    {/* cards */}
                    {group.items.map((item, idx) => (
                      <Box key={idx} p={2}>
                        <Cards data={item} cardData={cardData} setCardData={setCardData}/>
                      </Box>
                    ))}
                </Stack>
                : group.id === '2'
                ? 
                <Stack key={index}  direction='column' p={2} sx={{ width:'30%',backgroundColor:'#F5F5F5', borderRadius:'1rem'}} >
                <Typography variant='body2' fontWeight='bold' > 
                  <img src={ellipse2} alt='orange-ellipse' style={{ marginRight:'0.5rem'}}/>
                  On Progress
                  <Button contained sx={{ marginLeft:'1rem' ,color:'#625F6D', backgroundColor:'#E0E0E0', borderRadius:'1rem',maxHeight:'1.5rem', minWidth:'1rem'}}> 3 </Button>
                </Typography>
                <Divider color='#FFA500' sx={{ borderBottomWidth: 4,margin:2, marginRight:'0px',marginLeft:'0px' }} />
                {/* card */}
                  {group.items.map((item, idx) => (
                    <Box key={idx} p={2}>
                      <Cards data={item} cardData={cardData} setCardData={setCardData}/>
                    </Box>
                  ))}
              </Stack>
              :
              <Stack key={index}  direction='column' p={2} sx={{ width:'30%',backgroundColor:'#F5F5F5', borderRadius:'1rem'}} >
                <Typography variant='body2' fontWeight='bold' > 
                  <img src={ellipse3} alt='green-ellipse' style={{ marginRight:'0.5rem'}}/>
                  Done
                  <Button contained sx={{ marginLeft:'1rem' ,color:'#625F6D', backgroundColor:'#E0E0E0', borderRadius:'1rem',maxHeight:'1.5rem', minWidth:'1rem'}}> 2 </Button>
                </Typography>
                <Divider color='#8BC48A' sx={{ borderBottomWidth: 4,margin:2, marginRight:'0px',marginLeft:'0px' }} />
                  {group.items.map((item, idx) => (
                    <Box key={idx} p={2}>
                      <Cards data={item} cardData={cardData} setCardData={setCardData}/>
                    </Box>
                  ))}
              </Stack>
              ))}
            </Box>
          </Grid>
        </Stack>
      )
}

export default Feed