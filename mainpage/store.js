Ext.define('mainpage.store', {
    extend: 'Ext.data.Store',
    alias: 'store.documents',
    fields: ['id', 'name', 'signature'],
    autoLoad: true,
    proxy: {
      type: 'ajax',
      url: '/data/docs.json',
      reader: {
        type: 'json',
        rootProperty: 'data'
      }
    },
  });


