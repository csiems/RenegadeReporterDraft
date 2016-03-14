import DS from 'ember-data';

export default DS.Model.extend({
  //Attributes
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  photo: DS.attr('string'),
  playerId: DS.attr('string'),
  position: DS.attr('string'),
  proTeam: DS.attr('string'),

  //Associations
  fakeTeam: DS.belongsTo('fake-team'),
  user: DS.belongsTo('user'),

  //Computed Properties
  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});
