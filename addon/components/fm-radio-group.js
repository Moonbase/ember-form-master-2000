import Ember from 'ember';

export default Ember.Component.extend({
  layoutName: 'components/ember-form-master-2000/fm-radio-group',
  classNameBindings: ['radioGroupWrapperClass', 'errorClass'],
  errorClass: Ember.computed('errors', 'showErrors', function() {
    if(this.get('errors') && this.get('showErrors') || this.get('parentView.showErrors')) {
      return this.fmconfig.errorClass;
    }
  }),
  radioGroupWrapperClass: Ember.computed(function() {
    return this.fmconfig.radioGroupWrapperClass;
  }),
  labelClass: function() {
    return this.fmconfig.labelClass;
  }
});