Ext.define('mainpage.filters.filterID', {
    extend: 'Ext.form.field.Number',
    xtype: 'idfilter',
    fieldLabel: 'ID',
    labelWidth: 30,
    width: 120,
    minValue: 0,
    listeners: {
      change: function (field, newValue) {
        var grid = field.up('grid'),
          store = grid.getStore();
  
        store.clearFilter();
        if (newValue) {
          store.filterBy(function (record) {
            var id = record.get('id');
            return id == newValue;
          });
        }
      }
    }
})