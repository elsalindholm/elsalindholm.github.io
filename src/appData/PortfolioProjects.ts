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
  blurb:
    'The purpose of this exercise was to gain more experience with concepts like polymorphism and inheritance by creating a folder tree structure with nested folders and documents. I also learnt how to save data in local memory.',
  techUsed: 'TypeScript, HTML, Sass, React, MobX',
  mobileFriendly: false,
  repoLink: 'https://github.com/elsalindholm/folder-tree-exercise',
};

export const RecyclingGame: PortfolioProjectInfo = {
  date: 'July 2021',
  name: 'Recycling Game',
  blurb:
    'In this recycling game you test your knowledge on how to recycle random items of household waste. 10 random waste items will be presented to you one by one and you need to drag and drop the item to the correct bin/disposal option.',
  techUsed: 'TypeScript, HTML, Sass, React, React DnD, MobX',
  mobileFriendly: false,
  repoLink: 'https://github.com/elsalindholm/recycling-game',
};

export const RoamResponsibly: PortfolioProjectInfo = {
  date: 'May 2021',
  name: 'Roam Responsibly Website',
  blurb:
    'Website made for #RoamResponsibly social media campaign. The aim of my second project was to create an SPA that would function like a traditional website. I learnt more about designing and building a responsive website that would work and look good both on a desktop and any smaller device. I implemented a routing system for all "pages" on the website for easier navigation through the website and so that links to specific pages could be easily shared via social media. This involved not only routing of pages but also accessing browser history and making sure that the user can use the browser back and forward buttons. I have started work on improving the SEO optimisation of the website using React Helmet, but this is still work in progress.',
  techUsed: 'TypeScript, HTML, Sass, React, MobX',
  mobileFriendly: true,
  projectLink: 'https://www.roamresponsibly.com/',
  repoLink: 'https://github.com/elsalindholm/roam-responsibly',
};

export const BurgerBuilder: PortfolioProjectInfo = {
  date: 'April 2021',
  name: 'Build-A-Brgr',
  blurb:
    'A website made for an imaginary burger restaurant. This was my first proper project using TypeScript,React and MobX. The aim for this project was to learn some of the basics about creating an SPA using React and to get used to TypeScript.',
  techUsed: 'TypeScript, HTML, Sass, React, MobX',
  mobileFriendly: false,
  projectLink: 'https://elsalindholm.github.io/build-a-brgr/',
  repoLink: 'https://github.com/elsalindholm/build-a-brgr',
};
