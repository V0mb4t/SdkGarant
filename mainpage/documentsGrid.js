Ext.define("mainpage.documentsGrid", {
  extend: "Ext.grid.Panel",
  xtype: "documentsgrid",
  title: 'Список документов',
  closable: true,
  controller: 'EditDocController',
  dockedItems: [{
    xtype: 'filtersContainer',
    dock: 'top'
  }],
  store: {
    type: 'documents'
  },
  columns: [{
    text: 'ID',
    dataIndex: 'id'
  }, {
    text: 'Имя документа',
    flex: 1,
    dataIndex: 'docName'
  }, {
    text: 'Подпись',
    dataIndex: 'signature',
    renderer: function(value, metaData, record) {
      if (value === true) {
        metaData.tdCls = 'green-cell';
      }
      return value === true ? 'Да' : 'Нет';
    }
  }],


  listeners: {
    itemdblclick: 'onGridItemDblClick'
  },

});