Ext.define('mainpage.filters.filtersContainer', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'filtersContainer',
    items: [{
        xtype: 'idfilter',
      }, {
        xtype: 'namefilter',
      },{
        xtype: 'signaturefilter',
      },
      '->',
      {
        xtype: 'newdocbtn',
      }
    ],
})