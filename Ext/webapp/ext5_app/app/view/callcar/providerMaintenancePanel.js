/*
 * File: app/view/role/RoleMangerPanel.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Evcorp.view.task.providerMaintenancePanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.providerMaintenancePanel',
	requires : [ 
		        'Evcorp.view.task.providerMaintenancePanelViewController',
				'Evcorp.view.task.providerMaintenancePanelViewModel',
				'Ext.grid.Panel', 'Ext.tab.Panel', 'Ext.grid.column.Column',
				'Ext.grid.View', 'Ext.toolbar.Toolbar', 'Ext.button.Button',
				'Ext.toolbar.Fill', 'Ext.form.Panel', 'Ext.form.field.ComboBox',
				'Ext.form.DateField'
				],

	controller : 'providerMaintenancePanel',
	viewModel : {
		type : 'providerMaintenancePanel'
	},
	itemId : 'providerMaintenancePanel',
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	width:"100%",
	items : [{

    /*供应商维护 编辑单 on*/
    xtype:'gridpanel',
    columns: [            
              { xtype:'gridcolum', dataIndex:'number', hidden:false, text:'编号'},
              { xtype:'gridcolum', dataIndex:'porviderName',hidden:false,  text:'供应商名称'},
              { xtype:'gridcolum', dataIndex:'shortName', hidden:false, text:'简称'},
              { xtype:'gridcolum', dataIndex:'level',hidden:false,  text:'级别'},
              { xtype:'gridcolum', dataIndex:'numberPerson',hidden:false,  text:'联系人'},
              { xtype:'gridcolum', dataIndex:'contect',hidden:false,  text:'联系方式'},
              { xtype:'gridcolum', dataIndex:'email', hidden:false, text:'Email'},
              { xtype:'gridcolum', dataIndex:'address',hidden:false, text:'地址'},
            ],
    /*供应商维护 编辑单 end*/
        dockedItems:[
                     {
                       xtype:'pagingtoobar',
                       dock:'botton',
                       displayInfo:true,
                       displayMsg:'显示{0} - {1} 条记录，总共  {2} 条记录',
                       emptyMsg:'',
                       beforePageText:'页数',
                       afterPageText:'总共 {0} 页',
                       firstText:'第一页',
                       preText:'上一页',
                       nextText:'下一页',
                       lastText:'最后一页',
                       width:'100%',
                       emptyMsg:'无记录',
                     },
          ]
      }
    ]

});