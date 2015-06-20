import Ember from 'ember';
import Errorable from 'ember-form-master-2000/mixins/errorable';

export default Ember.Component.extend(Errorable, {
  layoutName: 'components/ember-form-master-2000/fm-radio-group',
  classNameBindings: ['radioGroupWrapperClass', 'errorClass'],
  radioGroupWrapperClass: Ember.computed(function() {
    return this.fmconfig.radioGroupWrapperClass;
  }),
  labelClass: function() {
    return this.fmconfig.labelClass;
  }
});