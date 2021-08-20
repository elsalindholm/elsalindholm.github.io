import { observer } from 'mobx-react';
import React from 'react';

import './navbar.scss';

export const NavBar: React.FC = observer(({}) => {
  return (
    <div className={'navbar'}>
      <div className={'nav-button-container'}>
        <button className={'nav-button'}>ABOUT ME</button>
        <button className={'nav-button'}>PORTFOLIO</button>
      </div>
    </div>
  );
});
