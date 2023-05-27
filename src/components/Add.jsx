import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div style={{textAlign:'center'}}>
       <h1>Blog Name Here:<TextField variant='outlined'></TextField></h1>
       <br/>
       <h1>Description Here: <TextField  variant='outlined'></TextField></h1>
       <br/>
       <h1>Author Name Here: <TextField  variant='outlined'></TextField></h1>
       <br/>
       <Button variant='contained'>Submit</Button>

    </div>
  )
}

export default Add