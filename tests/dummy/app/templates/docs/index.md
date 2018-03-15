# Quickstart

This quickstart guide will get your easter eggs up and running in no time!

**First install the addon.**

```sh
ember install ember-konami-code
```

**Then simply drop the `{{konami-code}}` component where you would like the easter eggs to take place and wire-up the `onKonami` action to execute the sweet sweet easter egg!**

{{#docs-snippet name='application.hbs' title='templates/application.hbs'}}
  {{outlet}}

  {{konami-code onKonami=(action 'doSweetThings')}}
{{/docs-snippet}}

{{#docs-snippet name='application.js' title='controllers/application.js'}}
import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    doSweetThings() {
      // Do your thing here.
    }
  }
});

{{/docs-snippet}}
