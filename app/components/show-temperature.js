import Ember from 'ember';

export default Ember.Component.extend({
  showKelvin: true,

  changeShowKelvin(val) {
    this.set(`showKelvin`, val);
  }
});
