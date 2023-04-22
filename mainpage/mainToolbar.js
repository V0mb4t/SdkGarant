Ext.define("mainpage.mainToolbar", {
    extend: "Ext.toolbar.Toolbar",
    xtype: "maintoolbar",
    items: [{
        xtype: 'button',
        text: 'Документы',
        listeners: {
          click: function() {
            let grid = Ext.create('mainpage.documentsGrid', {});
            let tabPanel = Ext.getCmp('mainTabs');
            tabPanel.add(grid);
            tabPanel.setActiveTab(grid);
          }
        }
      }]
  });