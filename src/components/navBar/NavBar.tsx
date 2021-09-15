import { observer } from 'mobx-react';
import React from 'react';

import './navbar.scss';

export const NavBar: React.FC = observer(({}) => {
  return (
    <div className={'navbar'}>
      <div className={'nav-link-container'}>
        <a className={'nav-link'} href={'#about-me'}>
          ABOUT ME
        </a>
        <a className={'nav-link'} href={'#portfolio'}>
          PORTFOLIO
        </a>
      </div>
    </div>
  );
});
