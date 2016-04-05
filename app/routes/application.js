import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const apiId = `0a5003614cb77bec468c5d24c5e54036`;
    const city = `London`;

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiId}`;

    return fetch(url).then((response) => {return response.json();});
  },
});
