Ext.define("loginpage.loginform", {
  extend: "Ext.form.Panel",
  xtype: "loginform",
  fullscreen: true,
  style: { width: "300px" },
  defaults: {
    anchor: "100%",
  },

  viewModel: 'main',
  items: [
    {
      xtype: "textfield",
      id: "field-1",
      fieldLabel: "Пользователь",
      name: "login",
      labelAlign: "top",
      cls: "field-margin",
      padding: "0 10",
      flex: 1,
    },
    {
      xtype: "textfield",
      id: "field-2",
      inputType: "password",
      fieldLabel: "Пароль",
      padding: "0 10",
      name: "password",
      labelAlign: "top",
      cls: "field-margin",
      flex: 1,
    },
  ],

  setValues: function(values) {
    this.getForm().setValues(values);
},
  buttons: [
    {
      text: "Войти",
      handler: function () {
        let loginForm = this.up("loginform");
        let login = loginForm.down("#field-1");
        let logValue = ''
        logValue = login.getValue();
        let password = loginForm.down("#field-2");
        let passValue = password.getValue();
        let startWindow = Ext.getCmp('startWindow');
        let viewModel = loginForm.getViewModel(); 
        viewModel.set('login',logValue); 
        if (/* logValue === "admin" && passValue === "adm123" */ loginForm) {
          startWindow.hide();
          Ext.create('Ext.container.Viewport', {
            renderTo: Ext.getBody(),
            layout: 'fit',
            items: [{
              xtype: 'container',
              id: 'mainPage',
              layout: {
                type: 'vbox',
                align: 'stretch',
              },
              items: [{
                xtype: 'maintoolbar',
                hideEmptyTab: true,
              },
              {
                xtype: 'container',
                layout: {
                  type: 'hbox',
                  align: 'stretch',
                },
                flex: 1,
                items: [{
                  xtype: 'tabpanel',
                  id: 'mainTabs',
                  flex: 1,
                }, {
                  xtype: 'panel',
                  width: '20%',
                  layout: {
                    type: 'vbox',
                    align: 'center',
                  },
                  items: [{
                    xtype: 'displayfield',
                    viewModel: 'main',
                    bind: {
                      value: 'Добрый день, {login}'
                    },
                     
                    listeners: {
                      afterrender: function(displayfield) {
                        let viewModel = displayfield.getViewModel();
                        viewModel.set('login',logValue)
                      }
                      }
                  },
                  {
                    xtype: 'button',
                    text: "Выйти",
                    listeners: {
                      click: function() {
                        Ext.WindowManager.each(function(window) {
                          window.close(); // закрываем все окна
                        });
                        const mainPage = Ext.getCmp('mainPage');
                        const startWindow = Ext.getCmp('startWindow');
                          mainPage.destroy()
                          startWindow.show()
                          startWindow.down('form').getForm().reset(); // очищаем поля формы при выходе
                    }}
                  }]
                }]
              }]
            }],
            listeners: {
              afterrender: function(viewport) {
                Ext.defer(function() {
                  viewport.el.dom.querySelector('.x-container').style.height = '100%';
                },);
              }
            }
          }
          );
        } else {
          Ext.Msg.alert("Ошибка", "Логин или пароль указан неверно");
        }
      },
    },
  ],
});
