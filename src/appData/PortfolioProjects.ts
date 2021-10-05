export interface PortfolioProjectInfo {
  date: string;
  name: string;
  blurb: string;
  techUsed: string;
  mobileFriendly: boolean;
  projectLink?: string;
  repoLink?: string;
}

export const Wordbash: PortfolioProjectInfo = {
  date: 'September 2021',
  name: 'Wordbash',
  blurb:
    'I built a mobile version for my partner’s Word Bash web game. The aim of this project was to gain more experience reading and working with other people’s code as well as using Git. I worked from a Trello board, making feature branches for each task. When a feature was done I would make a pull request, address any comments and it would get merged into the main branch. I also tested the game and fixed any bugs I found.',
  techUsed: 'TypeScript, HTML, Sass, React, MobX',
  mobileFriendly: true,
  projectLink: 'https://mnewbigging.github.io/wordbash/',
  repoLink: 'https://github.com/MNewbigging/wordbash',
};

export const FolderTree: PortfolioProjectInfo = {
  date: 'August 2021',
  name: 'Folder Tree',
  blurb:
    'This app lets you create nested folders and documents. I employed OOP practices to implement; inheritance for the tree nodes, polymorphism to store base types but manipulate derived types via typeguards. I wrote recursive logic to build and render the tree, but used a flat map of nodes to simplify other tasks. I also implemented persistence via localStorage.',
  techUsed: 'TypeScript, HTML, Sass, React, MobX',
  mobileFriendly: false,
  projectLink: 'https://elsalindholm.github.io/folder-tree-exercise/',
  repoLink: 'https://github.com/elsalindholm/folder-tree-exercise',
};

export const RecyclingGame: PortfolioProjectInfo = {
  date: 'July 2021',
  name: 'Recycling Game',
  blurb:
    'In this recycling game you test your knowledge on how to recycle random items of household waste. 10 random waste items will be presented to you one by one and you need to drag and drop the item to the correct bin/disposal option. Using ReactDnd in functional components, I created a game where you try to drop waste items into the correct recycling bins. I mostly used CSS grid for the layout of my game and kept the game logic separate from the higher level UI state.',
  techUsed: 'TypeScript, HTML, Sass, React, React DnD, MobX',
  mobileFriendly: false,
  projectLink: 'https://elsalindholm.github.io/recycling-game/',
  repoLink: 'https://github.com/elsalindholm/recycling-game',
};

export const RoamResponsibly: PortfolioProjectInfo = {
  date: 'May 2021',
  name: 'Roam Responsibly Website',
  blurb:
    'A website I created for #RoamResponsibly social media campaign. The aim was to create an SPA that would function like a traditional website. This involved designing the website and creating content whilst making sure the website works and looks good both on desktop and mobile devices. I implemented my own routing of pages which involved reading and setting urls, accessing and updating the browser history.',
  techUsed: 'TypeScript, HTML, Sass, React, MobX',
  mobileFriendly: true,
  projectLink: 'https://www.roamresponsibly.com/',
  repoLink: 'https://github.com/elsalindholm/roam-responsibly',
};

export const BurgerBuilder: PortfolioProjectInfo = {
  date: 'April 2021',
  name: 'Build-A-Brgr',
  blurb:
    'A website made for an imaginary burger restaurant where you can add menu items to a cart as well as build your own burger. This used inheritance, several state layers; global app state, the shopping cart state and the burger builder state.',
  techUsed: 'TypeScript, HTML, Sass, React, MobX',
  mobileFriendly: false,
  projectLink: 'https://elsalindholm.github.io/build-a-brgr/',
  repoLink: 'https://github.com/elsalindholm/build-a-brgr',
};
