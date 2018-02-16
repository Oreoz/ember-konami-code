import Ember from 'ember';
import Controller from '@ember/controller';

const { Logger } = Ember;

export default Controller.extend({
  showComponent: true,

  actions: {
    displayComponent() {
      this.toggleProperty('showComponent');
    },

    doSweetThings() {
      Logger.info('We did it!');
    }
  }
});
