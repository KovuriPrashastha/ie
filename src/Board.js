import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Divider } from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
    fontColor: '#ffffff',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Board() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const l = [
    'Placements 2020-2021 ',
    'NBA [Accreditation Status]',
    'Learning Management System',
    'ARIIA Final Report',
    'National Service Scheme[NSS]',
    'Student Online Fee Payment',
    'Turnitin Plagiarism Login',
    'Office 365 Email Login',
    'Online Degree Verification',
  ];
  return (
    <div
      style={{
        display: 'flex',
        'justify-content': 'space-evenly',
        padding: '50px',
      }}
    >
      <div style={{ 'border-style': 'groove' }}>
        <AppBar position='static'>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='simple tabs example'
          >
            <Tab label='Notice Board' {...a11yProps(0)} />
            <Tab label='Examinations' {...a11yProps(1)} />
            <Tab label='Academics and Examination Branch' {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <h4>
            ADMISSION TO 1ST YEAR M.E./M.TECH. UNDER CATEGORY "B" SEATS FOR
            <br />
            2020-2021
            <Divider />
          </h4>
          <h4>
            TWO WEEK ONLINE STUDENT INDUCTION PROGRAM (25.11.2020 TO 6.12.2020)
            <br />: INSTRUCTIONS TO STUDENTS
            <Divider />
          </h4>
          <h4>
            TWO WEEK ONLINE STUDENT INDUCTION PROGRAM FOR B.E FIRST YEAR
            <br />
            (ACADEMIC YEAR 2020-21) DAY-WISE SCHEDULE
            <Divider />
          </h4>
          <h4>
            B.E. FIRST YEAR TWO WEEK STUDENT INDUCTION PROGRAM (SIP) 2020-2021 :
            <br />
            DETAILS OF THE RESOURCE PERSONS
          </h4>
          <Divider />
          <h4>SPOT ADMISSIONS: I YEAR B.E. TSEAMCET -2020 VACANCY POSITION</h4>
          <Divider />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <h4>
            TWO WEEK ONLINE STUDENT INDUCTION PROGRAM (25.11.2020 TO 6.12.2020)
            <br />: INSTRUCTIONS TO STUDENTS
          </h4>
          <Divider />
          <h4>
            TWO WEEK ONLINE STUDENT INDUCTION PROGRAM FOR B.E FIRST YEAR
            <br />
            (ACADEMIC YEAR 2020-21) DAY-WISE SCHEDULE
          </h4>
          <Divider />
          <h4>
            ADMISSION TO 1ST YEAR M.E./M.TECH. UNDER CATEGORY "B" SEATS FOR
            <br />
            2020-2021
          </h4>
          <Divider />

          <h4>
            B.E. FIRST YEAR TWO WEEK STUDENT INDUCTION PROGRAM (SIP) 2020-2021 :
            <br />
            DETAILS OF THE RESOURCE PERSONS
          </h4>
          <Divider />
          <h4>SPOT ADMISSIONS: I YEAR B.E. TSEAMCET -2020 VACANCY POSITION</h4>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <h4>
            ADMISSION TO 1ST YEAR M.E./M.TECH. UNDER CATEGORY "B" SEATS FOR
            <br />
            2020-2021
          </h4>
          <Divider />
          <h4>
            TWO WEEK ONLINE STUDENT INDUCTION PROGRAM (25.11.2020 TO 6.12.2020)
            <br />: INSTRUCTIONS TO STUDENTS
          </h4>
          <Divider />

          <h4>
            B.E. FIRST YEAR TWO WEEK STUDENT INDUCTION PROGRAM (SIP) 2020-2021 :
            <br />
            DETAILS OF THE RESOURCE PERSONS
          </h4>
          <Divider />
          <h4>SPOT ADMISSIONS: I YEAR B.E. TSEAMCET -2020 VACANCY POSITION</h4>
          <h4>
            TWO WEEK ONLINE STUDENT INDUCTION PROGRAM FOR B.E FIRST YEAR
            <br />
            (ACADEMIC YEAR 2020-21) DAY-WISE SCHEDULE
          </h4>
          <Divider />
        </TabPanel>
      </div>
      <div>
        <h2>Important Links</h2>
        <List className={classes.root} subheader={<li />}>
          {l.map((sectionId) => (
            <li key={`section-${sectionId}`} className={classes.listSection}>
              <div style={{ display: 'flex' }}>
                <div style={{ padding: '17px' }}>
                  <ArrowRight />
                </div>
                <div>
                  <ListSubheader style={{ color: '#00000' }}>
                    <b>{sectionId}</b>
                  </ListSubheader>
                  <Divider />
                </div>
              </div>
            </li>
          ))}
        </List>
      </div>
    </div>
  );
}
