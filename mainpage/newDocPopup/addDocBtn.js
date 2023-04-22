Ext.define('mainpage.newDocPopup.addDocBtn', {
    extend: 'Ext.button.Button',
    xtype: 'newdocbtn',
    margin: '0 8 0 0',
    text: 'Добавить',
    handler: function() {
      let addDocWindow = Ext.create('Ext.window.Window', {
        title: 'Добавить документ',
        width: 300,
        resizable: false,
        items: [{
          xtype: 'newdocform',
        }],
        buttons: [{
          text: 'Сохранить',
          handler: function() {
            let form = Ext.getCmp('saveDocForm');
              Ext.Ajax.request({
                url: 'http://localhost:5500/save',
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                jsonData: form.getValues(),
                success: function() {
                  addDocWindow.close();
                },
                failure: function() {
                  Ext.Msg.alert('Ошибка', 'не удалось добавить документ');
                }
              });
          }
        }, {
          text: 'Отмена',
          handler: function() {
            addDocWindow.close();
          }
        }]
      });
      addDocWindow.show();
    }
})