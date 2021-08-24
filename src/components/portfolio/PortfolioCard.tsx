import React from 'react';
import { PortfolioProjectInfo } from '../../appData/PortfolioProjects';

import './portfolio-card.scss';

interface PortfolioCardProps {
  portfolioProject: PortfolioProjectInfo;
}

export class PortfolioCard extends React.PureComponent<PortfolioCardProps> {
  render() {
    const { portfolioProject } = this.props;

    return (
      <div className={'portfolio-card'}>
        <h3>{portfolioProject.name}</h3>
        <p className={'card-date'}>{portfolioProject.date}</p>
        <div>
          <h4>ABOUT THE PROJECT.</h4>
          <p>{portfolioProject.blurb}</p>
        </div>
        <div>
          <div>
            <h4>TECHNOLOGIES USED.</h4>
            <p>{portfolioProject.techUsed}</p>
          </div>
          <div>
            <h4>SUPPORTED DEVICES.</h4>
            <p>{portfolioProject.mobileFriendly ? 'Desktop & Mobile' : 'Desktop only'}</p>
          </div>
          <div className={'button-container'}>
            <button className={'card-button'}>VISIT PROJECT</button>
            <button className={'card-button'}>VIEW PROJECT REPO</button>
          </div>
        </div>
      </div>
    );
  }
}
