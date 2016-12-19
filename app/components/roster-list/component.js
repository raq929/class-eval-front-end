import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['roster'],
  classNameBindings: ['rosterDetailHidden'],
  rosterDetailHidden: true,
  actions: {
    // removeInstructor (item) {
    //   return this.sendAction('deleteItem', item);
    // },

    // createItem () {
    //   let data = this.get('newRoster');
    //   data.list = this.get('roster');
    //   this.sendAction('createItem', data);
    //   this.set('newItem.content', null);
    // },

    toggleRosterDetail () {
      return this.toggleProperty('rosterDetailHidden');
    },
  },
});
