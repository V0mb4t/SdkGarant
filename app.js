
Ext.application({
    name: 'SdkGarant',
    requires: ['Ext.form.Panel', 
    'loginpage.loginform',
    'Ext.container.Container', 
    'mainpage.documentsGrid',
    'mainpage.store', 
    'mainpage.mainToolbar', 
    'logindata.login', 
    'mainpage.filters.filtersContainer', 
    'mainpage.filters.filterID', 
    'mainpage.filters.filterName', 
    'mainpage.filters.filterSignature', 
    'mainpage.newDocPopup.addDocBtn',
    'mainpage.newDocPopup.addDocForm', 
    'mainpage.editDocPopup.EditDocController'],
    launch: function () {
        Ext.create('Ext.window.Window', {
            title: 'Окно входа',
            resizable: false,
            closable: false,
            width: 300,
            minWidth: 250,
            id: 'startWindow',
            modal: false,
            items: [{
                xtype: 'loginform'
            }],
        }).show();
    }
})

 
