import { AppBar, Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import Card from './Card'

function App() {

  return (
    <>
      <AppBar position='static' sx={{height: '56px'}}>
        <Typography variant='h6' sx={{marginLeft: "8px", height: "100%", alignContent: 'center'}}>PlayState</Typography>
      </AppBar>
      <br/>
      <Box className="Content" sx={{ flexGrow: 1}}>
        <Grid container spacing={2}>
          <Grid item  sm={1.5} md={1.5} lg={1}>
            <Card />
          </Grid>
          <Grid item sm={1.5} md={1.5} lg={1}>
            <Card />
          </Grid>
          <Grid item sm={1.5} md={1.5} lg={1}>
            <Card />
          </Grid>
          <Grid item sm={1.5} md={1.5} lg={1}>
            <Card />
          </Grid>
          <Grid item sm={1.5} md={1.5} lg={1}>
            <Card />
          </Grid>
          <Grid item sm={1.5} md={1.5} lg={1}>
            <Card />
          </Grid>
          <Grid item sm={1.5} md={1.5} lg={1}>
            <Card />
          </Grid>
          <Grid item sm={1.5} md={1.5} lg={1}>
            <Card />
          </Grid>
          <Grid item sm={1.5} md={1.5} lg={1}>
            <Card />
          </Grid>
          <Grid item sm={1.5} md={1.5} lg={1}>
            <Card />
          </Grid>
          <Grid item sm={1.5} md={1.5} lg={1}>
            <Card />
          </Grid>
          <Grid item sm={1.5} md={1.5} lg={1}>
            <Card />
          </Grid>
          {/* <Grid item sm={10} md={10} lg={10}>
            <Box sx={{backgroundColor: 'red', height: '100%'}}>1</Box>
          </Grid> */}
        </Grid>
          
      </Box>
    </>
  )
}

export default App


