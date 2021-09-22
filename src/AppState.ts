import { action, observable } from 'mobx';

export enum ViewMode {
  DESKTOP = 'desktop',
  MOBILE = 'mobile',
}

export class AppState {
  @observable public viewMode = ViewMode.DESKTOP;

  @action public checkViewMode(w: number) {
    this.viewMode = w < 640 ? ViewMode.MOBILE : ViewMode.DESKTOP;
  }
}
