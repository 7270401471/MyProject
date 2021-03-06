/*
 * File: app/view/role/RoleMangerPanelViewModel.js
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

Ext.define('Evcorp.view.KA.KAsubmitBySalesOrderPanelViewModel', {
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.KAsubmitBySalesOrderPanel',
	stores : {
		snCustomerSalesOrderGridStore : {
			model : 'Evcorp.model.SnCustomerSalesOrder',
			pageSize : 20,
			autoLoad : true
		},
		orderStatusStore : {
			autoLoad : true,
			fields : [ 'code', 'nameCn' ],
			proxy : {
				type : 'direct',
				directFn : chooseOptionContro.getChooseOptionWithSelect,
				extraParams : {
					'type' : 'snCustomerSalesOrderStatus'
				}
			}
		},
		cusIdTypeStore:{
			autoLoad : true,
			fields : [ 'code', 'nameCn' ],
			proxy : {
				type : 'direct',
				directFn : chooseOptionContro.getChooseOptionWithSelect,
				extraParams : {
					'type' : 'snCustomerCertType'
				}
			}
		},
		isCreditAuditedStore:{
			autoLoad : true,
			fields : [ 'code', 'nameCn' ],
			proxy : {
				type : 'direct',
				directFn : chooseOptionContro.getChooseOptionWithSelect,
				extraParams : {
					'type' : 'isValid'
				}
			}
		},
		
		createByStore : {
			autoLoad : true,
			fields : [ 'id', 'username' ],
			proxy : {
				type : 'direct',
				directFn : auUserContro.findAllUsers,
				extraParams : {
				}
			}
		},
		
		buyTypeStore:{
        	autoLoad: true,
        	fields : [ 'code', 'nameCn' ],
			proxy : {
				type: 'direct',
				directFn : chooseOptionContro.getChooseOption,
        		extraParams: {
        			'type' : 'snCustomerBuyType'
        		}
			}
        },
		
	}
});