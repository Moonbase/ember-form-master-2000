import Ember from 'ember';
import Errorable from 'ember-form-master-2000/mixins/errorable';

export default Ember.Component.extend(Errorable, {
  layoutName: 'components/ember-form-master-2000/fm-checkbox',
  classNameBindings: ['checkboxWrapperClass', 'errorClass'],
  checkboxWrapperClass: Ember.computed(function() {
    return this.fmconfig.checkboxWrapperClass;
  })
});
