import Ember from 'ember';

export function kToF(params/*, hash*/) {
  const kelvin = params[0];

  return Math.round(kelvin * 9 / 5 - 459.67);
}

export default Ember.Helper.helper(kToF);
