import React from 'react';
import { Search } from '@material-ui/icons';
import { AppBar, Toolbar, MenuItem, Menu, Button } from '@material-ui/core';

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };
  return (
    <div style={{ paddingBottom: 20 }}>
      <AppBar position='static'>
        <Toolbar style={{ display: 'flex', 'justify-content': 'space-evenly' }}>
          <div>
            <Button>Home</Button>

            <Button onMouseOver={handleClick}>About</Button>
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Founder</MenuItem>
              <MenuItem onClick={handleClose}>College</MenuItem>
              <MenuItem onClick={handleClose}>Organogram</MenuItem>
              <MenuItem onClick={handleClose}>Board of Governers</MenuItem>
              <MenuItem onClick={handleClose}>Principal</MenuItem>
              <MenuItem onClick={handleClose}>Strategic Plan</MenuItem>
              <MenuItem onClick={handleClose}>Annual Report</MenuItem>
            </Menu>
            <Button onMouseOver={handleClick2}>Academics</Button>
            <Menu
              id='simple-menu1'
              anchorE2={anchorE2}
              keepMounted
              open={Boolean(anchorE2)}
              onClose={handleClose2}
            >
              <MenuItem onClick={handleClose2}>Academic Council</MenuItem>
              <MenuItem onClick={handleClose2}>Almanac</MenuItem>
              <MenuItem onClick={handleClose2}>Activity Calendar</MenuItem>
              <MenuItem onClick={handleClose2}>Administative Manual</MenuItem>
              <MenuItem onClick={handleClose2}>Examination</MenuItem>
              <MenuItem onClick={handleClose2}>Courses Offered</MenuItem>
              <MenuItem onClick={handleClose2}>Sysllabus</MenuItem>
              <MenuItem onClick={handleClose2}></MenuItem>
              <MenuItem onClick={handleClose2}></MenuItem>
              <MenuItem onClick={handleClose2}></MenuItem>
            </Menu>
            <Button>Admissions</Button>
            <Button>Alumni</Button>
            <Button>Campus Life</Button>
            <Button>Facilities</Button>
            <Button>Department</Button>
            <Button>TEQIP</Button>
            <Button>Placements</Button>
            <Button>Research</Button>
            <Button>Staff</Button>
            <Button startIcon={<Search />}></Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
