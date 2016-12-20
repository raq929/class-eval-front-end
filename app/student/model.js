import DS from 'ember-data';

export default DS.Model.extend({
  full_name: DS.attr('string'),
  rosters: DS.belongsTo('roster')
});
