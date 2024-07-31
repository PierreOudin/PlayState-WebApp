import { useState } from 'react'
import { AppBar, Avatar, Box, Card, CardContent, CardMedia, Container, Tooltip, Typography } from '@mui/material'
import React from 'react'

function App() {

  return (
    <>
    <AppBar position='static'>
      <Typography variant='h6'>PlayState</Typography>
    </AppBar>
    <br/>
    <Container maxWidth="sm">
        <GameCard />
      </Container>
    </>
  )
}

function GameCard() {
  return (
    <Tooltip title={<React.Fragment><Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}><Avatar src='src/assets/pngwing.com.png'/><Typography variant='caption'>Assassin's Creed Shadow</Typography></Box></React.Fragment>}>
      <Box sx={{backgroundImage: `url("https://full.life/media/magefan_blog/Assassin_s_Creed_Shadows.jpg")`, backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundPosition: 'center', width: 600, height: 200, position: 'relative'}}>
      <Box sx={{position: 'absolute', backgroundColor: 'green', width: 50, height: 50, bottom:0, right:0, textAlign: 'center', }}>
        <Typography sx={{}}>86</Typography>
      </Box>
    </Box>
    </Tooltip>
  )
}

export default App


