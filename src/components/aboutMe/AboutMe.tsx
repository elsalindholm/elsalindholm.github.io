import { observer } from 'mobx-react';
import React from 'react';

import './about-me.scss';

export const AboutMe: React.FC = observer(({}) => {
  return (
    <div className={'about-me'}>
      <div className={'about-me-title'}>ABOUT ME.</div>
      <div className={'about-me-text-container'}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non tincidunt justo, ut
          imperdiet odio. Sed ultrices turpis vel orci scelerisque bibendum. Curabitur at eros
          mauris. Etiam fermentum felis at risus scelerisque accumsan. Vestibulum nec augue sem.
          Curabitur consectetur porttitor elementum. Quisque sed nunc at lacus sollicitudin
          bibendum. Vivamus iaculis malesuada mi, et condimentum nibh dignissim laoreet. Suspendisse
          imperdiet, urna tincidunt scelerisque scelerisque, lacus est interdum mauris, in auctor
          urna neque eget leo. Ut ante sapien, egestas et venenatis vel, luctus eu nunc. Aenean
          aliquam nibh in tellus mattis, at tempor dolor euismod.
        </p>
      </div>
    </div>
  );
});
