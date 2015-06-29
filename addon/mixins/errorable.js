import Ember from 'ember';

export default Ember.Mixin.create({
  errorClass: Ember.computed('errors', 'showErrors', function() {
    var showErrors = this.get('showErrors') || this.get('parentView.showErrors');
    if(this.get('errors.length') && showErrors) {
      return this.fmconfig.errorClass;
    }
  })
});
