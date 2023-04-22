Ext.define('mainpage.newDocPopup.addDocForm', {
    extend: 'Ext.form.Panel',
    xtype: 'newdocform',
    id: 'saveDocForm',
    items: [
        {
          xtype: 'textfield',
          fieldLabel: 'ID документа',
          inputType: 'number',
          padding: "10 10 0 10",
          name: 'id'
        },{
        xtype: 'textfield',
        fieldLabel: 'Имя документа',
        padding: "10 10 0 10",
        name: 'docName'
      }, {
        xtype: 'checkboxfield',
        fieldLabel: 'Подпись',
        padding: "10 10 0 10",
        name: 'signature'
      }],
})