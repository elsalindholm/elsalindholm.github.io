import React from 'react';
import { PortfolioProjectInfo } from '../../../appData/PortfolioProjects';

import './portfolio-card.scss';

interface PortfolioCardProps {
  portfolioProject: PortfolioProjectInfo;
}

export class PortfolioCard extends React.PureComponent<PortfolioCardProps> {
  render() {
    const { portfolioProject } = this.props;

    return (
      <div className={'portfolio-card'}>
        <div className={'card-title-container'}>
          <h3>{portfolioProject.name}</h3>
          <p className={'card-date'}>{portfolioProject.date}</p>
        </div>
        <div className={'card-info'}>
          <section>
            <h4>ABOUT THE PROJECT.</h4>
            <p>{portfolioProject.blurb}</p>
          </section>

          <section>
            <h4>TECHNOLOGIES USED.</h4>
            <p>{portfolioProject.techUsed}</p>
          </section>

          <section>
            <h4>SUPPORTED DEVICES.</h4>
            <p>{portfolioProject.mobileFriendly ? 'Desktop & Mobile' : 'Desktop only'}</p>
          </section>

          <div className={'button-container'}>
            <a className={'card-button'} href={portfolioProject.projectLink} target={'_blank'}>
              VISIT PROJECT
            </a>
            <a className={'card-button'} href={portfolioProject.repoLink} target={'_blank'}>
              VIEW PROJECT REPO
            </a>
          </div>
        </div>
      </div>
    );
  }
}
