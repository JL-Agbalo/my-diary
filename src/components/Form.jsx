import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
function Form({myDiary, handleChange }) {

useEffect(() => {
    console.log("Mount")
    return () => {
        console.log('Unmount')
    }
}, [])

  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h1>My Diary</h1>
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" 
      onChange = {handleChange}/>
    </Box>
    <Button variant="contained">Add</Button>
    <List>
      {/* {items.map((item, index) => ( */}
        {/* <ListItem key={index}> */}
          <ListItemText primary={myDiary} />
        {/* </ListItem> */}
      {/* ))} */}
    </List>
    </div>
   
  )
}

export default Form