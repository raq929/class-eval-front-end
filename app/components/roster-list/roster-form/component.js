import Ember from 'ember';

export default Ember.Component.extend({
  newRoster: {
    name: null,
  },
  actions: {
    // deleteItem (item) {
    //   return this.sendAction('deleteItem', item);
    // },

    createRoster () {
      let data = this.get('newRoster');
      this.sendAction('createRoster', data);
      this.set('newRoster.name', null);
    },
  },
});
