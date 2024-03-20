import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import git from './photo/git.png';
import linkedin from './photo/linkedin.png';

const Footer = () => {
  return (
    <MDBFooter bgColor='black' className='text-center text-lg-left'>
      <div className='text-center p-3'
      style={{ position: 'fixed', bottom: '0', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
        &copy; {new Date().getFullYear()} All rights received. Made by Evgeniy{' '}
        <a className='text-dark' href='https://github.com/john174'>
          <img src={git} alt="GitHub link" style={{width: "24px", height: "24px"}}/>
        </a>
        {' '}
        <a className='text-dark' href='https://www.linkedin.com/in/evgeniy-kalinin-38860b284'>
          <img src={linkedin} alt="Linkedin link" style={{width: "24px", height: "24px"}}/>
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
