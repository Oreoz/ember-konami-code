import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // ember-cli-addon-docs
  this.route('docs', function() {
    this.route('api', function() {
      this.route('item', { path: '/*path' });
    });
  });

  this.route('not-found', { path: '/*path' });
  this.route('demo');
});

export default Router;
