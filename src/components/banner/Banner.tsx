import { observer } from 'mobx-react';
import React from 'react';

import './banner.scss';

export const Banner: React.FC = observer(({}) => {
  return (
    <div className={'banner-container'}>
      <div className={'banner-filter'}></div>
      <div className={'banner-text-container'}>
        <h2 className={'banner-heading'}>HI, I'M ELSA.</h2>
        <div className={'banner-blurb'}>
          Blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb
          blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb
          blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb.
        </div>
      </div>
    </div>
  );
});
