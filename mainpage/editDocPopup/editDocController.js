Ext.define("mainpage.editDocPopup.EditDocController", {
  alias: "controller.EditDocController",
  extend: "Ext.app.ViewController",
  onGridItemDblClick: function (__grid, record) {
    let win = Ext.create("Ext.window.Window", {
      title: "Редактирование документа",
      width: 400,
      items: [
        {
          xtype: "form",
          cls: "custom-doc-form",
          resizable: false,
          bodyStyle: "border: none; padding-top: 5px",
          items: [
            {
              xtype: "textfield",
              fieldLabel: "Имя документа",
              name: "docName",
              value: record.get("docName"),
            },
            {
              xtype: "checkboxfield",
              fieldLabel: "Подпись",
              name: "signature",
              inputValue: true,
              uncheckedValue: false,
              checked: record.get("signature"),
            },
          ],
        },
      ],
      buttons: [
        {
          text: "Сохранить",
          handler: function () {
            let form = win.down("form").getForm(),
              values = form.getValues(),
              id = values.id,
              data = Ext.apply({ id: id }, values);

            Ext.Ajax.request({
              url: "http://localhost:5500/save",
              method: "POST",
              jsonData: data,
              success: function () {
                // обработка успешного ответа от сервера
                win.close();
              },
              failure: function () {
                // обработка ошибки
                Ext.Msg.alert("Ошибка", "Не удалось сохранить документ");
              },
            });
          },
        },
        {
          text: "Отмена",
          handler: function () {
            win.close();
          },
        },
        {
          text: "Открыть вкладку",
          handler: function () {
            let tabPanel = Ext.getCmp("mainTabs");
            let winForm = this.up("window").down("form");
            let tabTitle = winForm.getForm().findField().getValue();
            let newTab = tabPanel.add({
              title: tabTitle,
              closable: true,
              layout: "fit",
              items: [
                {
                  xtype: "container",
                  style: "width: 100%; padding: 20px",
                  layout: "vbox",
                  items: [
                    winForm,
                    {
                      xtype: "button",
                      text: "Сохранить",
                      margin: "20 0 0 0",
                      handler: function () {
                        let form = this.up("container").down("form").getForm(),
                          values = form.getValues(),
                          id = values.id,
                          data = Ext.apply({ id: id }, values);

                        Ext.Ajax.request({
                          url: "http://localhost:5500/save",
                          method: "POST",
                          jsonData: data,
                          success: function () {
                            // обработка успешного ответа от сервера
                            win.close();
                          },
                          failure: function () {
                            // обработка ошибки
                            Ext.Msg.alert(
                              "Ошибка",
                              "Не удалось сохранить документ"
                            );
                          },
                        });
                      },
                    },
                  ],
                },
              ],
            });
            tabPanel.setActiveTab(newTab);
            win.close();
          },
        },
      ],
    });
    win.show()
  },
});
