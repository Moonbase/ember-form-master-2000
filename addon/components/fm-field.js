import Ember from 'ember';
import Errorable from 'ember-form-master-2000/mixins/errorable';

export default Ember.Component.extend(Errorable, {
  layoutName: 'components/ember-form-master-2000/fm-field',
  init: function() {
    if(!this.get('optionValuePath')) {
      this.set('optionValuePath', 'content.value');
    }
    if(!this.get('optionLabelPath')) {
      this.set('optionLabelPath', 'content.label');
    }
    var dataAttributes = Object.keys(this).filter(function(attr) {
      return /data-/.test(attr);
    });
    if(this.get('validate') === 'delay' || this.get('parentView.validate') === 'delay') {
      this.set('showErrors', false);
    }else{
      this.set('showErrors', true);
    }

    this.set('dataAttributes', dataAttributes);
    this.set('wrapperClass', this.fmconfig.wrapperClass);
    this.set('labelClass', this.fmconfig.labelClass);
    this.set('inputClass', this.fmconfig.inputClass);
    this.set('textareaClass', this.fmconfig.textareaClass);
    this._super();
  },
  placeholder: null,
  label: null,
  classNameBindings: ['wrapperClass', 'errorClass'],
  isSelect: Ember.computed('type', function() {
    return this.get('type') === 'select';
  }),
  isTextarea: Ember.computed('type', function() {
    return this.get('type') === 'textarea';
  }),
  isBasicInput: Ember.computed('type', function() {
    return (!this.get('isSelect') && !this.get('isTextarea'));
  }),
  forAttribute: Ember.computed('label', 'id', function() {
    if(this.get('id')) {
      return this.generateSafeId(this.get('id'));
    }
    if(this.get('label')) {
      return this.generateSafeId(this.get('label'));
    }
  }),

  validate: Ember.observer('parentView.validate', function() {
    if(this.get('validate') === 'delay' || this.get('parentView.validate') === 'delay') {
      this.set('showErrors', false);
    }
    console.log(this.get('showErrors'));
  }),

  generateSafeId: function(id) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = id;
    id = tmp.textContent || tmp.innerText || "";
    id = id.replace(/[\.,\/#!$%\^&\*;:{}=\`'"~()]/g,"");
    id = id.replace(/\s/g, "-");
    return id;
  }
});
