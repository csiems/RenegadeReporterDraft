import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ballplayer-search', 'Integration | Component | ballplayer search', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{ballplayer-search}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#ballplayer-search}}
      template block text
    {{/ballplayer-search}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
