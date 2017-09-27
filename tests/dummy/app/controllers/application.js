import Ember from 'ember';

const { Controller, Logger } = Ember;

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
