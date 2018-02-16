import Ember from 'ember';
import Controller from '@ember/controller';

const { Logger } = Ember;

export default Controller.extend({
  showComponent: true,
  secretMessage: '',

  actions: {
    displayComponent() {
      this.toggleProperty('showComponent');
    },

    doSweetThings() {
      this.set('secretMessage', 'We did it!')
      Logger.info('We did it!');
    }
  }
});
