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

Ext.define('Evcorp.view.orderList.ContractInsuranceInfoWinViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.contractinsuranceinfowin',
    stores: {
    	ContractInsurance:{
			autoLoad : true,
			fields : [ 'code', 'nameCn' ],
			proxy : {
				type : 'direct',
				directFn : chooseOptionContro.getChooseOption,
				extraParams : {
					'type' : 'insuranceCompany'
				}
			}
    	},
    	ContractInsuranceYear:{
			autoLoad : true,
			fields : [ 'code', 'name' ],
			data:[
			      {code:'2016',name:'2016'},
			      {code:'2017',name:'2017'},
			      {code:'2018',name:'2018'},
			      {code:'2019',name:'2019'}
			      ]
    	},
    	ContractInsuranceType:{
			autoLoad : true,
			fields : [ 'code', 'nameCn' ],
			proxy : {
				type : 'direct',
				directFn : chooseOptionContro.getChooseOption,
				extraParams : {
					'type' : 'insuranceType'
				}
			}
    	}
    }
});