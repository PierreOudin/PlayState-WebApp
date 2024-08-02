import { AppBar, Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'

function App() {

  return (
    <>
      <AppBar position='static'>
        <Typography variant='h6'>PlayState</Typography>
      </AppBar>
      <br/>
      <Box sx={{ flexGrow: 1}}>
        <Grid container spacing={2}>
          <Grid item  sm={1.5} md={1.5} lg={1.5}>
            <GameCard />
          </Grid>
          <Grid item sm={1.5} md={1.5} lg={1.5}>
            <GameCard />
          </Grid>
          <Grid item sm={1.5} md={1.5} lg={1.5}>
            <GameCard />
          </Grid>
          <Grid item sm={1.5} md={1.5} lg={1.5}>
            <GameCard />
          </Grid>
          <Grid item sm={1.5} md={1.5} lg={1.5}>
            <GameCard />
          </Grid>
          <Grid item sm={1.5} md={1.5} lg={1.5}>
            <GameCard />
          </Grid>
          <Grid item sm={1.5} md={1.5} lg={1.5}>
            <GameCard />
          </Grid>
          <Grid item sm={1.5} md={1.5} lg={1.5}>
            <GameCard />
          </Grid>
          {/* <Grid item sm={10} md={10} lg={10}>
            <Box sx={{backgroundColor: 'red', height: '100%'}}>1</Box>
          </Grid> */}
        </Grid>
          
      </Box>
    </>
  )
}

function GameCard() {
  const [hover, setHover] = useState(true);
  return (
    <Box sx={{height: 150}} onMouseEnter={() => setHover(false)}
    onMouseLeave={() => setHover(true)}>
      {hover ? <Box
  component="img"
  sx={{width:'100%', height:'100%', objectFit: 'cover'}}
  alt="The house from the offer."
  src="https://full.life/media/magefan_blog/Assassin_s_Creed_Shadows.jpg"
/> : <Box sx={{backgroundColor: 'red', width: '100%', height: '100%'}}/>}

    </Box>
    
  )
}

export default App


