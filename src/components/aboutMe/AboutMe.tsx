import { observer } from 'mobx-react';
import React from 'react';

import './about-me.scss';

export const AboutMe: React.FC = () => {
  return (
    <div className={'about-me'} id={'about-me'}>
      <h2 className={'about-me-title'}>ABOUT ME.</h2>
      <div className={'about-me-text-container'}>
        <div className={'about-me-blurb'}>
          <p>I am looking for work as a junior web developer. My skills include: </p>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>TypeScript</li>
            <li>React, MobX</li>
            <li>Git, VSCode</li>
          </ul>
        </div>

        <div className={'about-me-links'}>
          <a href={'https://www.linkedin.com/in/elsalindholm/'} target={'_blank'}>
            <div className={'linkedin'}></div>
          </a>
          <a href={'https://github.com/elsalindholm'} target={'_blank'}>
            <div className={'github'}></div>
          </a>
          <a href={'https://www.codewars.com/users/elsa.lindholm'} target={'_blank'}>
            <div className={'codewars'}></div>
          </a>
        </div>

        <div className={'portfolio-blurb'}>
          <p>Find my latest portfolio projects below.</p>
        </div>
      </div>
    </div>
  );
};
