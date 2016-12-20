import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.store.findRecord('roster', params.roster_id, { reload: true });
  },

  actions: {
    // toggleItemDone (item) {
    //   item.toggleProperty('done');
    //   return item.save();
    // },
    //
    // deleteItem (item) {
    //   return item.destroyRecord();
    // },
    //
    // createItem (data) {
    //   let item = this.get('store').createRecord('item', data);
    //   return item.save();
    // },

  },
});
