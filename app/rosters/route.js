import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('roster');
  },
  actions: {
    createRoster (data) {
      let roster = this.get('store').createRecord('roster', data);
      return roster.save();
    },
  },
});
