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
        <p>{portfolioProject.date}</p>
        <div>
          <h4>ABOUT THE PROJECT.</h4>
          <div>{portfolioProject.blurb}</div>
        </div>
        <div>
          <div>
            <h4>TECHNOLOGIES USED.</h4>
            <div>{portfolioProject.techUsed}</div>
          </div>
          <div>
            <h4>SUPPORTED DEVICES.</h4>
            <div>{portfolioProject.mobileFriendly ? 'Desktop & Mobile' : 'Desktop only'}</div>
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
