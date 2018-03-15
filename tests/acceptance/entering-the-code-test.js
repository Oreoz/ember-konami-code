import { module, test } from 'qunit';
import { visit, currentRouteName, currentURL, triggerKeyEvent, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { A } from '@ember/array';
import { all } from 'rsvp';

module('Acceptance | entering the code', hooks => {
  setupApplicationTest(hooks);

  test('entering the code makes magic happen when the component is rendered', async assert => {
    assert.expect(6);

    await visit('/demo');

    assert.equal(currentRouteName(), 'demo');
    assert.equal(currentURL(), '/demo');

    assert.dom('.component-status').exists();
    assert.dom('.component-status').hasText('true');

    await enterKonamiCode();

    assert.dom('.secret-message').exists();
    assert.dom('.secret-message').hasText('We did it Reddit!');
  });

  test('entering the code does nothing when the component is not rendered', async assert => {
    assert.expect(5);

    await visit('/demo');

    assert.equal(currentRouteName(), 'demo');
    assert.equal(currentURL(), '/demo');

    await click('#toggle-konami');

    assert.dom('.component-status').exists();
    assert.dom('.component-status').hasText('false');

    await enterKonamiCode();

    assert.dom('.secret-message').doesNotExist();
  });
});

async function enterKonamiCode() {
  const sequence = new A([38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]);

  let promises = sequence.map(async key => {
    return await triggerKeyEvent('.container', 'keydown', key);
  });

  return await all(promises);
}
