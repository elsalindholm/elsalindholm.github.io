import { observer } from 'mobx-react';
import React from 'react';

import './banner.scss';

export const Banner: React.FC = observer(({}) => {
  return (
    <div className={'banner-container'}>
      <div className={'banner-image'}>
        <div className={'banner-filter'}>
          <div className={'banner-text-container'}>
            <div className={'banner-heading'}>HI, I'M ELSA.</div>
            <div className={'banner-blurb'}>
              Blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb
              blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb
              blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb
              blurb blurb.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
