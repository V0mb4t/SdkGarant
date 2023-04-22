Ext.define('mainpage.filters.filterSignature', {
    extend: 'Ext.form.field.Checkbox',
    xtype: 'signaturefilter',
    fieldLabel: 'Имя документа',
    fieldLabel: 'Подпись',
    padding: '3 0 0 5',
    labelWidth: 50,
    listeners: {
      change: function (field, newValue) {
        var grid = field.up('grid'),
          store = grid.getStore(),
          checked = field.checked;
  
        store.clearFilter();
        if (checked) {
          store.filterBy(function (record) {
            return record.get('signature') === true;
          });
        }
      }
    }
})