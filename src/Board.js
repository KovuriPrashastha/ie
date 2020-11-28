import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
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
    'Placements 2020-2021 (batch graduating in 2021)',
    'NBA [Accreditation Status]',
    'Learning Management System',
    'NIRF - 2020 ',
    'ARIIA Final Report',
    'IQAC',
    'RTI',
    'National Service Scheme[NSS]',
    'Student Online Fee Payment',
    'Turnitin Plagiarism Login',
    'Office 365 Email Login',
    'Online Degree Verification',
  ];
  return (
    <div style={{ display: 'flex', 'justify-content': 'space-evenly' }}>
      <div>
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
            2020-2021
          </h4>
          <h4>
            TWO WEEK ONLINE STUDENT INDUCTION PROGRAM (25.11.2020 TO 6.12.2020)
            : INSTRUCTIONS TO STUDENTS
          </h4>
          <h4>
            TWO WEEK ONLINE STUDENT INDUCTION PROGRAM FOR B.E FIRST YEAR
            (ACADEMIC YEAR 2020-21) DAY-WISE SCHEDULE
          </h4>
          <h4>
            B.E. FIRST YEAR TWO WEEK STUDENT INDUCTION PROGRAM (SIP) 2020-2021 :
            DETAILS OF THE RESOURCE PERSONS
          </h4>
          <h4>SPOT ADMISSIONS: I YEAR B.E. TSEAMCET -2020 VACANCY POSITION</h4>
          <h4>
            ACADEMIC REGULATIONS (R-20) FOR B.E UNDER CHOICE BASED CREDIT SYSTEM
            (CBCS)FOR THE STUDENTS ADMITTED W.E.F ACADEMIC YEAR 2020-2021
            ONWARDS.
          </h4>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <h4>M.E./M.TECH. (CBCS) II-SEMESTER MAIN EXAMINATIONS (OFFLINE)</h4>
          <h4>
            M.E./M.TECH. (CBCS) II-SEMESTER MAIN EXAMINATIONS (OFFLINE),
            DECEMBER-2020/JANUARY-2021
          </h4>
          <h4>
            BE (CBCS) II, IV AND VI SEMESTER MAIN EXAMINATIONS (OFFLINE)
            DECEMBER-2020/JANUARY-2021
          </h4>
          <h4>B.E. IV SEMESTER SUPPLEMENTARY EXAMINATION TIME TABLE</h4>
          <h4>B.E. IV SEMESTER SUPPLEMENTARY EXAMINATION TIME TABLE</h4>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <h4>
            B.E I, II, III AND IV SEMESTER SUPPLEMENTARY PRACTICAL EXAM TIME
            TABLE DECEMBER 2020.
          </h4>
          <h4>SPOT ADMISSIONS: I YEAR B.E. TSEAMCET -2020 VACANCY POSITION</h4>
          <h4>SPOT ADMISSIONS: I YEAR B.E. TSEAMCET -2020</h4>
          <h4>
            {' '}
            SCHEDULE TO ISSUE TC, PC AND CGR BY ADMISSIONS AND EXAMINATIONS
            BRANCH
          </h4>
        </TabPanel>
      </div>
      <div>
        <List className={classes.root} subheader={<li />}>
          {l.map((sectionId) => (
            <li key={`section-${sectionId}`} className={classes.listSection}>
              <ul className={classes.ul}>
                <ListSubheader>{sectionId}</ListSubheader>
              </ul>
            </li>
          ))}
        </List>
      </div>
    </div>
  );
}
