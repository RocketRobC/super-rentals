import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
  //constructor(...args) {
  //  super(...args);
  //  this.inLarge = false;
  //}
  // There's no need to open the constructor for assigning variables.
  // this.isLarge = false
  //
  // @tracked decorator to the isLarge instance variable.
  // This annotation tells Ember to monitor this variable for updates.
  // Whenever this variable's value changes, Ember will automatically re-render any templates that depend on its value.
  @tracked isLarge = false;

  // @action decorator. This indicates to Ember that we intend to use this method from our template.
  // Without this, the method will not function properly as a callback function (in this case, a click handler).
  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }
}
