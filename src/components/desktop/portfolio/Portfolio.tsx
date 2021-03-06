import React from 'react';

import { PortfolioCard } from './PortfolioCard';
import {
  BurgerBuilder,
  FolderTree,
  RecyclingGame,
  RoamResponsibly,
  Wordbash,
} from '../../../appData/PortfolioProjects';

import './portfolio.scss';

export class Portfolio extends React.PureComponent {
  render() {
    return (
      <div className={'portfolio'}>
        <h2 className={'portfolio-title'}>PORTFOLIO.</h2>
        <div className={'portfolio-card-container'}>
          <PortfolioCard portfolioProject={Wordbash} />
          <PortfolioCard portfolioProject={FolderTree} />
          <PortfolioCard portfolioProject={RecyclingGame} />
          <PortfolioCard portfolioProject={RoamResponsibly} />
          <PortfolioCard portfolioProject={BurgerBuilder} />
        </div>
      </div>
    );
  }
}
