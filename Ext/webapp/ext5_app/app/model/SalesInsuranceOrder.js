/*
 * File: app/model/Role.js
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

Ext.define('Evcorp.model.SalesInsuranceOrder', {
    extend: 'Evcorp.model.Base',

    requires: [
        'Ext.data.field.Field',
        'Evcorp.model.Base'
    ],
    fields: [
        {
            name:'id'
        },
        {
            name:'code'
        },
//        {
//            name:'vin'
//        },
//        {
//            name: 'cusCode'
//        },
//        {
//            name: 'insurant'
//        },
        {
        	name:'jqInsuranceCompany'
        },
        {
        	name:'jqInsuranceNo'
        },
        {
        	name:'jqInsuranceDateFr'
        },
        {
        	name:'jqInsuranceDateTo'
        },
        {
        	name:'bizInsuranceCompany'
        },
        {
        	name:'bizInsuranceNo'
        },
        {
        	name:'bizInsuranceDateFr'
        },
        {
        	name:'bizInsuranceDateTo'
        },
        {
        	name:'insuranceTerms'
        },
        {
        	name:'saleOrderNo'
        },
        {
        	name:'jqInsuranceAmount'
        },
        {
        	name:'bizInsuranceAmount'
        }
    ]
});