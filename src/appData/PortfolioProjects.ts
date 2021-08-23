export interface PortfolioProjectInfo {
  date: string;
  name: string;
  blurb: string;
  techUsed: string;
  mobileFriendly: boolean;
  projectLink?: string;
  repoLink?: string;
}

export const FolderTree: PortfolioProjectInfo = {
  date: 'August 2021',
  name: 'Folder Tree',
  blurb: 'Folder Tree exercise.',
  techUsed: 'TypeScript, HTML, Sass, React, MobX',
  mobileFriendly: false,
};

export const RecyclingGame: PortfolioProjectInfo = {
  date: 'July 2021',
  name: 'Recycling Game',
  blurb:
    'This is a recycling game. This is a recycling game.This is a recycling game.This is a recycling game.This is a recycling game.',
  techUsed: 'TypeScript, HTML, Sass, React, React DnD, MobX',
  mobileFriendly: false,
};

export const RoamResponsibly: PortfolioProjectInfo = {
  date: 'May 2021',
  name: 'RoamResponsibly Website',
  blurb:
    'Website made for #RoamResponsibly social media campaign. Website made for #RoamResponsibly social media campaign.',
  techUsed: 'TypeScript, HTML, Sass, React, MobX',
  mobileFriendly: true,
};

export const BurgerBuilder: PortfolioProjectInfo = {
  date: 'April 2021',
  name: 'Build-A-Brgr',
  blurb: 'Website made for an imaginary burger restaurant.',
  techUsed: 'TypeScript, HTML, Sass, React, MobX',
  mobileFriendly: false,
};
