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
  name: 'Roam Responsibly Website',
  blurb:
    'Website made for #RoamResponsibly social media campaign. The aim of my second project was to create an SPA that would function like a traditional website.',
  techUsed: 'TypeScript, HTML, Sass, React, MobX',
  mobileFriendly: true,
};

export const BurgerBuilder: PortfolioProjectInfo = {
  date: 'April 2021',
  name: 'Build-A-Brgr',
  blurb:
    'Website made for an imaginary burger restaurant. This was my first proper project using TypeScript,React and MobX. The aim for this project was to learn some of the basics about creating an SPA using React and to get used to TypeScript. ',
  techUsed: 'TypeScript, HTML, Sass, React, MobX',
  mobileFriendly: false,
};
