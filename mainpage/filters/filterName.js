Ext.define('mainpage.filters.filterName', {
    extend: 'Ext.form.field.Text',
    xtype: 'namefilter',
    fieldLabel: 'Имя документа',
    labelWidth: 100,
    width: 250,
    listeners: {
      change: function (field, newValue) {
        var grid = field.up('grid'),
          store = grid.getStore();
  
        store.clearFilter();
        if (newValue) {
          store.filterBy(function (record) {
            var docName = record.get('docName');
            return docName.indexOf(newValue) !== -1;
          });
        }
      }
    }
})