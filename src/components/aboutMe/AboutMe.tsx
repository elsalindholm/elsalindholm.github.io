import { observer } from 'mobx-react';
import React from 'react';

import './about-me.scss';

export const AboutMe: React.FC = () => {
  return (
    <div className={'about-me'} id={'about-me'}>
      <h2 className={'about-me-title'}>ABOUT ME.</h2>
      <div className={'about-me-text-container'}>
        <div className={'two-column'}>
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
            <div className={'profile-picture'}></div>

            <a href={'https://www.linkedin.com/in/elsalindholm/'} target={'_blank'}>
              <div className={'linkedin'}></div>
            </a>
            <a>
              <div className={'github'}></div>
            </a>
          </div>
        </div>
        <div>
          <p>Find my latest portfolio projects below.</p>
        </div>
      </div>
    </div>
  );
};
