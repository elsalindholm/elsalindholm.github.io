import { observer } from 'mobx-react';
import React from 'react';

import { AppState, ViewMode } from './AppState';
import { AboutMe } from './components/desktop/aboutMe/AboutMe';
import { Banner } from './components/desktop/banner/Banner';
import { NavBar } from './components/desktop/navBar/NavBar';
import { Portfolio } from './components/desktop/portfolio/Portfolio';
import { MobileLandingPage } from './components/mobile/MobileLandingPage';

@observer
export class App extends React.PureComponent {
  private readonly appState = new AppState();

  componentDidMount() {
    window.onresize = this.onResizeWindow;
    this.onResizeWindow();
  }

  componentWillUnmount() {
    window.onresize = undefined;
  }

  public render() {
    let app: JSX.Element;
    switch (this.appState.viewMode) {
      case ViewMode.DESKTOP:
        app = (
          <div className={'app-container'}>
            <Banner />
            <NavBar />
            <AboutMe />
            <Portfolio />
          </div>
        );
        break;
      case ViewMode.MOBILE:
        app = <MobileLandingPage />;
        break;
    }
    return <div className={'app'}>{app}</div>;
  }

  private readonly onResizeWindow = () => {
    this.appState.checkViewMode(window.innerWidth);
  };
}
