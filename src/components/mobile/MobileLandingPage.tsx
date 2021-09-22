import React from 'react';

import './mobile-landing-page.scss';

export class MobileLandingPage extends React.PureComponent {
  render() {
    return (
      <div className={'landing-page'}>
        <div className={'lp-filter'}></div>
        <div className={'lp-text-container'}>
          <div className={'lp-heading'}>HI, I'M ELSA.</div>
          <div className={'lp-blurb'}>
            An aspiring web developer based in Scotland, looking for a new adventure.
          </div>
          <div className={'lp-blurb'}>To view my portfolio, please use a tablet or a computer.</div>
          <div className={'lp-links-container'}>
            <a href={'https://www.linkedin.com/in/elsalindholm/'} target={'_blank'}>
              <div className={'mobile-linkedin'}></div>
            </a>
            <a href={'https://github.com/elsalindholm'} target={'_blank'}>
              <div className={'mobile-github'}></div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
