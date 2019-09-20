import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  queryParamsDidChange(changed, totalPresent, removed) {
    let totalChanged = [...Object.keys(changed), ...Object.keys(removed)];

    if (totalChanged.includes('someQueryParam')) {
      this.refresh();
    }

    return true;
  }
}
