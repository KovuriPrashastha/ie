import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div>
      <div class='footer' style={{ color: 'black' }}>
        <table>
          <tr>
            <th>Anti Ragging policy</th>
            <th>DOWNLOADS</th>
            <th>USEFUL LINKS</th>
          </tr>
          <tr>
            <td>Vasavi College of Engineering, "</td>
            <td>Exam Fee Form (Accounts Dept.)</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>in strict compliance with UGC Regulations on</td>
            <td>Student No Dues Certificate</td>
            <td>Osmania university</td>
          </tr>
          <tr>
            <td>
              Curbing the Menace of Ragging in Higher Educational Institutions,
              2009, AICTE Notification,
            </td>
            <td>Online Fee Remittance details from Abroad and within India.</td>
            <td>AICTE</td>
          </tr>
          <tr>
            <td>Application Form: Revaluation of Answer Scripts</td>
            <td>NBA</td>
          </tr>
          <tr>
            <td>
              2009, Supreme Court directives, 2007 and Andhra Pradesh
              Prohibition of Ragging Act,{' '}
            </td>
            <td>Application Form: Obtaining Photocopy of Answer Script</td>
            <td>UGC</td>
          </tr>
          <tr>
            <td>
              {' '}
              1997 as adopted by the State Govt. of Telangana, has decided to
              frame
            </td>
            <td>
              Application Form : Registration to B.E. (Main/Suppli./Adv. Suppli)
              Examinations
            </td>
            <td>TS EAMCET</td>
          </tr>
          <tr>
            <td>
              {' '}
              a Policy to Prohibit and Prevent Ragging Activities in its Campus.
              <br />
              Ragging - A violation of Human Rights.{' '}
            </td>
            <td>
              Application Form : Registration to M.C.A. (Main/Suppli./Adv.
              Suppli) Examinations
            </td>
            <td>Spoken Tutorials (IIT Bombay)</td>
          </tr>
        </table>
      </div>
      <div style={{ 'background-color': 'gray' }}>
        <h2 style={{ 'font-size': '15px' }}>COLLEGE CONTACT INFO:</h2>
        <p>
          Vasavi College of Engineering
          <br />
          (Private Un-aided Non-minority Autonomous Institution)
          <br />
          Affiliated to Osmania University, Hyderabad
          <br />
          Approved by AICTE, New Delhi
          <br />
          9-5-81, Ibrahimbagh Hyderabad - 500 031 Telangana, India
          <br />
          Tel: +91 40 23146003 , Fax: +91 40 23146090
          <br />
          principal@staff.vce.ac.in www.vce.ac.in
        </p>
      </div>
    </div>
  );
}

export default Footer;
