import { observer } from 'mobx-react';
import React from 'react';
import { AppState } from './AppState';
import { AboutMe } from './components/aboutMe/AboutMe';
import { Banner } from './components/banner/Banner';
import { NavBar } from './components/navBar/NavBar';

@observer
export class App extends React.PureComponent {
  private readonly appState = new AppState();
  public render() {
    return (
      <div className={'app-container'}>
        <Banner />
        <NavBar />
        <AboutMe />
        <div>Portfolio</div>
      </div>
    );
  }
}
