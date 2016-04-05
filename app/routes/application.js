import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        first: `Homer`,
        last: `Simpson`,
        isSmart: false,
      },
      {
        first: `Marge`,
        last: `Simpson`,
        isSmart: true,
      }
    ];
  },
});
