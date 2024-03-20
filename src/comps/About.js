import React from 'react';
import { AboutMe, Explanation } from './texts/TextAbout';

const About = () => {
  return (
    <div className="container my-5 opacity-75">
      <div className='bg-dark p-3 rounded'>
        <h4 className="text-justify mb-5">{AboutMe}</h4>
        <p className="text-justify mb-4">{Explanation}</p>
      </div>
    </div>
  );
};

export default About;
