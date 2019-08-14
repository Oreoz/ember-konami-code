import Ember from 'ember';
import Component from '@ember/component';
import { computed } from '@ember/object';
import { A } from '@ember/array';

const { Logger } = Ember;

export default Component.extend({
  code: computed(function() {
    return A([38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]);
  }),

  stack: computed(function() {
    return A();
  }),

  hasValidAction: computed('onKonami', function () {
    return this.get('onKonami') && typeof this.get('onKonami') === 'function';
  }),

  onKeyDown(e) {
    if (this.get('stack.length') >= 11) {
      this.get('stack').shift();
    }

    this.get('stack').push(e.keyCode);

    if (this.get('stack').toString() === this.get('code').toString()) {
      this.get('onKonami')();
    }
  },

  init() {
    this._super(...arguments);
    this.set('onKeyDown', this.get('onKeyDown').bind(this));
  },

  didReceiveAttrs() {
    this._super(...arguments);

    if (!this.get('hasValidAction')) {
      Logger.error('Ember Konami Code: You need to provide the `konami-code` ' +
        'component with an `onKonami` action if you want it to do anything.');
      return;
    }

    window.addEventListener('keydown', this.get('onKeyDown'), false);
  },

  willDestroyElement() {
    this._super(...arguments);

    if (this.get('hasValidAction')) {
      window.removeEventListener('keydown', this.get('onKeyDown'), false);
    }
  }
});
