import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar>
            <Typography  component="div" sx={{ flexGrow: 1 }} fontSize={"50px"} >Blog Dashboard</Typography>
            <Button  variant='outlined' color="inherit"><Link to={'/'}>Home</Link></Button>
            <Button  variant='outlined' color="inherit"><Link to={'/add'}>Add Blog</Link></Button>
        </Toolbar>
        </AppBar>
    </Box>
  )
}

export default NavBar