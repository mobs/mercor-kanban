import { Box, Divider } from '@mui/material'
import Navbar from './components/Navbar';
import Feed from './components/Feed';


function App() {

  return (
    <Box sx={{ backgroundColor:'#FFFFFF', overflowY:'hidden'}} >
      <Navbar />
      <Divider  />
      <Feed />
      <Divider orientation='vertical' flexItem/>
  </Box>
  );
}

export default App;
