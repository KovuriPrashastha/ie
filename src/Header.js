import React from 'react';
import { Search } from '@material-ui/icons';
import { AppBar, Toolbar } from '@material-ui/core';
import './Header.css';

export default function Header() {
  return (
    <div style={{ paddingBottom: 20 }}>
      <AppBar position='static'>
        <Toolbar style={{ display: 'flex', 'justify-content': 'space-evenly' }}>
          <div>
            <ul>
              <li>
                <a href='#home'>Home</a>
              </li>
              <li class='dropdown'>
                <a href='javascript:void(0)' class='dropbtn'>
                  About
                </a>
                <div class='dropdown-content'>
                  <a href='s'>FOUNDER</a>
                  <a href='s'>VASAVI ACADEMY OF EDUCATION</a>
                  <a href='s'>COLLEGE</a>
                  <a href='s'>ORGANOGRAM</a>
                  <a href='s'>BOARD OF GOVERNERS</a>
                  <a href='s'>PRINCIPALS</a>
                  <a href='s'>STRATEGIC PLAN</a>
                  <a href='s'>ANNUAL REPORTS</a>
                </div>
              </li>
              <li class='dropdown'>
                <a href='javascript:void(0)' class='dropbtn'>
                  Academics
                </a>
                <div class='dropdown-content'>
                  <a href='s'>ACADEMIC COUNCIL</a>
                  <a href='s'>COURSES OFFERED</a>
                  <a href='s'>ALMANAC</a>
                  <a href='s'>ACTIVITY CALENDAR</a>
                  <a href='s'>ADMINISTRATIVE MANUAL</a>
                  <a href='s'>EXAMINATIONS</a>
                  <a href='s'>COURSES OFFERED</a>
                  <a href='s'>PUBLIC HOLIDAYS:2020</a>
                  <a href='s'>SYLLABUS</a>
                  <a href='s'>VALUE-ADDED COURSES</a>
                </div>
              </li>
              <li class='dropdown'>
                <a href='javascript:void(0)' class='dropbtn'>
                  Admissions
                </a>
                <div class='dropdown-content'>
                  <a href='s'>ADMISSIONS MANUAL</a>
                  <a href='s'>ADMISSION ANALYSIS</a>
                  <a href='s'>TSEAMCET CUTOFF RANKS</a>
                </div>
              </li>
              <li>
                <a href='#home'>Alumni</a>
              </li>
              <li class='dropdown'>
                <a href='javascript:void(0)' class='dropbtn'>
                  Departments
                </a>
                <div class='dropdown-content'>
                  <a href='s'>COMPUTER SCIENCE</a>
                  <a href='s'>CIVIL ENGINEERING</a>
                  <a href='s'>ELECTRONICS & COMMUNICATIONS</a>
                  <a href='s'>ELECTRICAL & ELECTRONICS ENGG.</a>
                  <a href='s'>INFORMATION TECHNOLOGY</a>
                  <a href='s'>HUMANITIES & SOCIAL SCIENCES</a>
                </div>
              </li>
              <li class='dropdown'>
                <a href='javascript:void(0)' class='dropbtn'>
                  Campus Life
                </a>
                <div class='dropdown-content'>
                  <a href='s'>BANK</a>
                  <a href='s'>CAFETERIA</a>
                  <a href='s'>COMPUTER CENTER</a>
                  <a href='s'>GAMES & SPORTS</a>
                  <a href='s'>MAINTENANCE CELL</a>
                  <a href='s'>LIBRARY</a>
                  <a href='s'>MEDICAL FACILITY</a>
                  <a href='s'>TRANSPORT</a>
                </div>
              </li>
              <li>
                <a href='#home'>Research</a>
              </li>
              <li>
                <a href='#home'>TEQIP</a>
              </li>
              <li class='dropdown'>
                <a href='javascript:void(0)' class='dropbtn'>
                  Placements
                </a>
                <div class='dropdown-content'>
                  <a href='s'>INTERNSHIPS</a>
                  <a href='s'>TRAINIG</a>
                  <a href='s'>RECRUITERS</a>
                  <a href='s'>STUDENT COMPETETIVE EXAMS</a>
                  <a href='s'>STUDENT OFFER LETTERS</a>
                  <a href='s'>PLACEMENTS INFORMATION</a>
                </div>
              </li>
              <li>
                <a href='#home'>Contact</a>
              </li>
              <Search
                style={{ 'padding-top': '15px', 'padding-left': '15px' }}
              />
            </ul>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
