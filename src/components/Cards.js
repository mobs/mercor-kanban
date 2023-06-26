import React from 'react'
import { Card, CardActions, Button, Typography, Box} from '@mui/material'
import { commentImage, folderImage} from '../utility/images'

const Cards = ({data, cardData, setCardData}) => {
  return (
    <Card sx={{ padding:2, borderRadius:'1rem'}}
      draggable={true}
      data-column-key={data.title}
      onDragStart={(e) => {
        const draggedItem = e.target.dataset.columnKey;
        e.dataTransfer.setData("text/plain",draggedItem);
        e.dataTransfer.effectAllowed = "move";
      }}

      onDragOver={(e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
      }}

      onDrop={(e) => {
        e.preventDefault();
        const draggedItem = e.dataTransfer.getData("text/plain");
        const dropTarget = e.currentTarget.dataset.columnKey;
        console.log(dropTarget);
        let draggedIdx = -1;
        let draggedId = -1;
        let dropTargetIdx = -1;
        let dropId = -1;

        for(let i = 0;i<3;i++){
          console.log(cardData[i].items);
          
          if(draggedIdx === -1){
            draggedIdx = cardData[i].items.findIndex((d) => d.title === draggedItem);
            if(draggedIdx !== -1) draggedId = i;
          }
          if(dropTargetIdx === -1){
            dropTargetIdx = cardData[i].items.findIndex((d) => d.title === dropTarget);
            if(dropTargetIdx !== -1) dropId = i;
          }
        }

        const newData = [...cardData];
        const draggedCard = cardData[draggedId].items.splice(draggedIdx, 1)[0];

        newData[dropId].items.splice(newData[dropId].items.length+1, 0, draggedCard);
        setCardData(newData);

      }}
    
    >
      {data.button === 'Low' 
      ? <Typography variant='caption' fontWeight='bold' color='#D58D49' sx={{padding:0.5, backgroundColor:'#DFA87433'}}>{data.button}</Typography>
      : data.button === 'High' 
      ? <Typography variant='caption' fontWeight='bold' color='#D8727D' sx={{padding:0.5, backgroundColor:'#D8727D1A'}}>{data.button}</Typography>
      : <Typography variant='caption' fontWeight='bold' color='#68B266' sx={{padding:0.5, backgroundColor:'#83C29D33'}}>{data.button}</Typography>
      }

      <div >
        <Typography variant='h6' fontWeight='bolder'> {data.title}  </Typography>
        {data.detail === ''
        ? <Box >
          {data.image.map((i,idx) => (
            <img key={idx} src={i} alt='img' style={{ margin:'0.5rem'}}/>
          ))}
          </Box>
        : <Typography variant='body2'> {data.detail} </Typography>
        }
        
      </div>
      <CardActions >
         <img src={data.profile} alt='profiles' style={{ marginRight:'0.8rem'}}/>
        <Button size='small' color='primary' >
          <img src={commentImage} alt='comments' />
          <Typography variant='caption' textTransform='lowercase' color='#787486'>{data.comments}</Typography>
        </Button>
        <Button size='small' color='primary'>
          <img src={folderImage} alt='folder-icon' />
          <Typography variant='caption' textTransform='lowercase' color='#787486'>{data.files}</Typography>
        </Button>
      </CardActions>
    </Card>
  )
}

export default Cards