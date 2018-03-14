import Controller from '@ember/controller';

export default Controller.extend({
  displayComponent: true,
  displaySecretMessage: false,

  actions: {
    displayComponent() {
      this.toggleProperty('displayComponent');
    },

    doSweetThings() {
      this.set('displaySecretMessage', true);
    }
  }
});
