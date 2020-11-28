import React from 'react';
import { Paper, TextField, Button } from '@material-ui/core';
import logo from './images/vlogo.gif';
export default function Top() {
  return (
    <div>
      <Paper
        square
        style={{ display: 'flex', 'justify-content': 'space-evenly' }}
      >
        <img src={logo} alt='' width='200' height='200' />
        <div>
          <h1>Vasavi College of Engineering</h1>
          <h4>(Private Un-aided Non-minority Autonomous Institution)</h4>
          <h4> Affiliated to Osmania University and Approved by AICTE.</h4>
        </div>
        <div>
          <h3>Student/Parent Login</h3>
          <TextField id='outlined-basic' label='LoginId' variant='outlined' />
          <TextField id='outlined-basic' label='Password' variant='outlined' />
          <Button variant='contained'>Login</Button>
        </div>
      </Paper>
    </div>
  );
}
