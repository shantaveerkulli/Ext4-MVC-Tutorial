/*
 * File: app/view/UserProperties.js
 *
 * This file was generated by Sencha Designer version 2.0.0.
 * http://www.sencha.com/products/designer/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Designer does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.UserProperties', {
    extend: 'Ext.window.Window',
    alias: 'widget.userproperties',

    autoRender: false,
    height: 181,
    width: 421,
    layout: {
        type: 'fit'
    },
    title: 'User properties',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    ui: 'footer',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            id: 'btnUserOk',
                            text: 'Ok'
                        },
                        {
                            xtype: 'button',
                            id: 'btnUserCancel',
                            text: 'Cancel'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'form',
                    frame: true,
                    id: 'userproperties',
                    bodyPadding: 10,
                    frameHeader: false,
                    preventHeader: true,
                    items: [
                        {
                            xtype: 'displayfield',
                            name: 'id',
                            fieldLabel: 'Id'
                        },
                        {
                            xtype: 'textfield',
                            name: 'username',
                            fieldLabel: 'User name',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'password',
                            fieldLabel: 'Password',
                            anchor: '100%'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});