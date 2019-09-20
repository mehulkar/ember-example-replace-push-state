import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  queryParams = {
    someQueryParam: { refreshModel: false }
  }
}
