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

Ext.define('Evcorp.view.contractCar.payDepositWinViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.payDepositWin',
    stores: {
    	detail:{
            model: 'Evcorp.model.ContractCarOrder',
            proxy: {
                type: 'direct',
                api: {
                    read: contractCarOrderContro.findOrderByBusinessKey
                },
                reader: {
                    type: 'json',
                    rootProperty: 'records'
                }
            }
    	},
    	contractCarOrderPayLogListStore: {
            model: 'Evcorp.model.ContractCarOrderPayLog',
            pageSize: 10,
            proxy: {
                type: 'direct',
                api: {
                    read: contractCarOrderContro.findContractCarOrderPayLogListByOrderNo,
                },
                reader: {
                    type: 'json',
                    rootProperty: 'records',
                    totalProperty: 'total'
                }
            }
        },
        orderPayTypeStore:{
        	fields: ['code','nameCn'],
        	autoLoad: true,
        	proxy: {
        		type: 'direct',
        		api: {
        			read: chooseOptionContro.getChooseOptionWithSelect
        		},
        		extraParams: {
        			type: 'orderPayType'
        		}
        	}
        },
        orderPayChannelStore:{
        	fields: ['code','nameCn'],
        	autoLoad: true,
        	proxy: {
        		type: 'direct',
        		api: {
        			read: chooseOptionContro.getChooseOptionWithSelect
        		},
        		extraParams: {
        			type: 'orderPayChannel'
        		}
        	}
        },
    }
});