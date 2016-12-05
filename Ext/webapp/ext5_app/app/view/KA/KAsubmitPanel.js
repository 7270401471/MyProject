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

Ext
		.define(
				'Evcorp.view.KA.KAsubmitPanel',
				{
					extend : 'Ext.panel.Panel',
					alias : 'widget.KAsubmitPanel',
					requires : [
							'Evcorp.view.KA.KAsubmitPanelViewController',
							'Evcorp.view.KA.KAsubmitPanelViewModel',
							'Ext.grid.Panel', 'Ext.tab.Panel',
							'Ext.grid.column.Column', 'Ext.grid.View',
							'Ext.toolbar.Toolbar', 'Ext.button.Button',
							'Ext.toolbar.Fill', 'Ext.form.Panel',
							'Ext.form.field.ComboBox', 'Ext.form.DateField' ],
					controller : 'KAsubmitPanel',
					viewModel : {
						type : 'KAsubmitPanel'
					},
					itemId : 'KAsubmitPanel',
					closable : true,
					collapsible : true,
					referenceHolder : true,
					layout : {
						type : 'vbox',
						align : 'stretch'
					},
					title : '大客户－二网订单列表',
					items : [
							{
								xtype : 'form',
								autoScroll : false,
								reference : 'snCreditInfoSearchForm',
								bodyPadding : '10',
								layout : {
									type : 'vbox',
									align : 'stretch'
								},
								items : [ 
								          {
									xtype : 'container',
									layout : 'hbox',
									items : [
												{
													xtype : 'combobox',
													fieldLabel : '征信状态',
													name : 'creditStatus',
													itemId : 'creditStatus',
													labelWidth : 80,
													width : 180,
													margin:'5 20 5 0',
													valueField : 'code',
				   									displayField : 'nameCn',
				   									editable : false,
				   									bind : {
				   										store : '{snCreditStatusStore}',
				   									},
												},{
													xtype : 'textfield',
													fieldLabel : '姓名',
													name : 'cusName',
													labelWidth : 80,
													width : 180,
													margin:'5 20 5 0'
												},
//												{
//													xtype : 'textfield',
//													fieldLabel : 'VIN',
//													name : 'vin',
//													labelWidth : 80,
//													width : 240,
//													margin:'5 20 5 0'
//												},
												{   
		          	                                xtype: 'container',
		          	                                border:false,           
		          	                                width : 360,
		          	                                margin : '0 20',
		          	                                layout:'hbox',
		          	                                items: [{
	          	                                            xtype:'datefield',
	          	                                            width : 190,
	          	                                            labelWidth : 80,
	          	                                            endDateField:'creditSubmitDateEnd',
	          	                                            fieldLabel: '提交日期',
	          	                                            format: 'Y-m-d',
	          	                                            name:'creditSubmitDateStart'
	          	                                        },
	          	                                        {
	          	                                            xtype:'datefield',
	          	                                            width : 140,
	          	                                            labelWidth : 20,
	          	                                            margin:'0',
	          	                                            align:'center',
	          	                                            startDateField:'creditSubmitDateStart',
	          	                                            fieldLabel: '至',
	          	                                            format: 'Y-m-d',
	          	                                            name:'creditSubmitDateEnd',
	          	                                            margin : '0 0 0 10'
	          	                                        }]

	          	                            }
//											,{   
//		          	                                xtype: 'container',
//		          	                                border:false,           
//		          	                                width : 340,
//		          	                                margin : '0 20',
//		          	                                layout:'hbox',
//		          	                                items: [{
//	          	                                            xtype:'datefield',
//	          	                                            width : 190,
//	          	                                            labelWidth : 80,
//	          	                                            endDateField:'createDateEnd',
//	          	                                            fieldLabel: '创建日期',
//	          	                                            format: 'Y-m-d',
//	          	                                            name:'createDateStart'
//	          	                                        },
//	          	                                        {
//	          	                                            xtype:'datefield',
//	          	                                            width : 140,
//	          	                                            labelWidth : 20,
//	          	                                            margin:'0',
//	          	                                            align:'center',
//	          	                                            startDateField:'createDateStart',
//	          	                                            fieldLabel: '至',
//	          	                                            format: 'Y-m-d',
//	          	                                            name:'createDateEnd',
//	          	                                            margin : '0 0 0 10'
//	          	                                        }]
//
//	          	                            }
											,{   
	          	                                xtype: 'container',
	          	                                border:false,           
	          	                                width : 340,
	          	                                margin : '0 20',
	          	                                layout:'hbox',
	          	                                hidden:true,
	          	                                items: [{
													xtype : 'combobox',
													fieldLabel : '身份证类型',
													name : 'cusIdType',
													itemId : 'cusIdType',
//													hidden : true,
													labelWidth : 80,
													width : 180,
													margin:'5 20 5 0',
													valueField : 'code',
													displayField : 'nameCn',
													editable : false,
													bind : {
														store : '{cusIdTypeStore}',
													},
												},{
													xtype : 'combobox',
													fieldLabel : '创建人',
													name : 'createBy',
													itemId : 'createBy',
													hidden : true,
													labelWidth : 80,
													width : 180,
													margin:'5 20 5 0',
													valueField : 'username',
													displayField : 'realname',
													editable : false,
													bind : {
														store : '{createByStore}',
													},
												},{
													xtype : 'combobox',
													fieldLabel : '购买方式',
													name : 'buyType',
													itemId : 'buyType',
//													hidden : true,
													labelWidth : 80,
													width : 180,
													margin:'5 20 5 0',
													valueField : 'code',
													displayField : 'nameCn',
													editable : false,
													bind : {
														store : '{buyTypeStore}',
													},
												},]

          	                            }]
								} ],
								dockedItems : [ {
									xtype : 'toolbar',
									flex : 1,
									dock : 'bottom',
									items : [ {
										xtype : "button",
										cls:'btn-success',
										iconCls:'common-icon-add',
										itemId:'addBtnQKItemId',
										text : "新建（全款购车）",
										listeners : {
											click : 'onKAaddQK'
										},
									},{
										xtype : "button",
										cls:'btn-success',
										iconCls:'common-icon-add',
										itemId:'addBtnCXZItemId',
										text : "新建（畅享租）",
										listeners : {
											click : 'onKAaddCXZ'
										},
									}, {
										xtype : "button",
										cls:'btn-primary',
										iconCls:'common-icon-edit',
										itemId:'modifyBtnItemId',
										text : "修改",
										listeners : {
											click : 'onKAedit'
										},
									}, 
//									{
//										xtype : "button",
//										cls:'btn-primary',
//										iconCls:'common-icon-edit',
//										itemId:'buyCarBtnItemId',
//										text : "购买",
//										listeners : {
//											click : 'onBuyCar'
//										},
//									}, 
									{
										xtype : 'tbfill'
									}, {
						            	xtype: 'button',
						                text: '查 询',
						                scale:'small',
						                iconCls: 'common-icon-serach',
						                handler:'onQuerySalesOrder',
						            }, {
										xtype : 'button',
										text : '导出',
										scale : 'small',
										iconCls : 'nu-export',
										handler : 'onExportSalesOrder',
									} ]
								} ]
							},
							{
								flex : 1,
								border : false,
								xtype : 'gridpanel',
								viewConfig: { enableTextSelection: true },
								reference : 'snCreditInfoGridRef',
								itemId : 'snCreditInfoGrid',
								autoScroll : true,
								bind : '{snCreditInfoGridStore}',
								columns : [
										{
											xtype : 'gridcolumn',
											dataIndex : 'id',
											minWidth : 160,
											hidden : true,
											text : 'ID'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'creditCode',
											minWidth : 160,
											text : '编号'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'carStockCount',
											hidden : false,
											text : '库存状态',
											renderer: function (val) {
						                    	if (val && val>0) {
						                    		return '有';
						                    	} else {
						                        	return '无';
						                        }
						                    }
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'creditStatus',
											hidden : false,
											text : '征信状态',
											renderer: function (val) {
						                    	if (val) {
						                    		var gridStore = this.up('panel').down('#creditStatus').getStore();
						                    		return gridStore.findRecord('code', val) ? gridStore.findRecord('code', val).data.nameCn : '';
						                        } else {
						                        	return '';
						                        }
						                    }
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'isCreditAudited',
											hidden : false,
											width : 120,
											text : '是否征信通过',
											renderer: function (val) {
												if (val != null) {
													if (val) {
							                    		return '是';
							                        } else {
							                        	return '否';
							                        }
												} else {
													return '';
												}
						                    }
										},
										{
											xtype : 'gridcolumn',
											text : '提交日期',
											align : 'center',
											dataIndex : 'creditSubmitDate',
											minWidth : 120,
											renderer : function(value) {
												if (value == null) {
													return "";
												} else {
													return Ext.Date.format(new Date(value), 'Y-m-d');
												}
											}
										},
										{
											xtype : 'gridcolumn',
											text : '预计征信完成日期',
											align : 'center',
											dataIndex : 'estimateCreditFinishDate',
											minWidth : 130,
											renderer : function(value) {
												if (value == null) {
													return "";
												} else {
													return Ext.Date.format(new Date(value), 'Y-m-d');
												}
											}
										},
										{
											xtype : 'gridcolumn',
											text : '征信完成日期',
											align : 'center',
											dataIndex : 'creditAuditDate',
											minWidth : 130,
											renderer : function(value) {
												if (value == null) {
													return "";
												} else {
													return Ext.Date.format(new Date(value), 'Y-m-d');
												}
											}
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'snCustomerCode',
											minWidth : 160,
											hidden : true,
											text : '二网code'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'snCustomerName',
											minWidth : 160,
											hidden : false,
											text : '二网'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'cusName',
											minWidth : 100,
											hidden : false,
											text : '申请人姓名'
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'cusIdType',
											minWidth : 120,
											hidden : false,
											text : '证件类型',
											renderer: function (val) {
						                    	if (val) {
						                    		var gridStore = this.up('panel').down('#cusIdType').getStore();
						                    		return gridStore.findRecord('code', val) ? gridStore.findRecord('code', val).data.nameCn : '';
						                        } else {
						                        	return '';
						                        }
						                    }
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'cusIdNum',
											minWidth : 160,
											hidden : false,
											text : '身份证号'
										},
										{
											xtype : 'gridcolumn',
											text : '出生日期',
											align : 'center',
											dataIndex : 'birthday',
											minWidth : 100,
											renderer : function(value) {
												if (value == null) {
													return "";
												} else {
													return Ext.Date.format(new Date(value), 'Y-m-d');
												}
											}
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'carProductName',
											minWidth : 300,
											hidden : false,
											text : '产品名称'
										},
//										{
//											xtype : 'gridcolumn',
//											dataIndex : 'vin',
//											minWidth : 160,
//											hidden : false,
//											text : '车架号（VIN）'
//										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'createBy',
											hidden : false,
											text : '创建人',
											renderer: function (val) {
						                    	if (val) {
						                    		var gridStore = this.up('panel').down('#createBy').getStore();
						                    		return gridStore.findRecord('username', val) ? gridStore.findRecord('username', val).data.realname : '';
						                        } else {
						                        	return '';
						                        }
						                    }
										},
//										{
//											xtype : 'gridcolumn',
//											text : '创建时间',
//											align : 'center',
//											dataIndex : 'createDate',
//											minWidth : 160,
//											renderer : function(value) {
//												if (value == null) {
//													return "";
//												} else {
//													return Ext.Date.format(new Date(value), 'Y-m-d H:i:s');
//												}
//											}
//										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'saleExecutiveName',
											hidden : false,
											text : '大客户销售'			
										},
										{
											xtype : 'gridcolumn',
											dataIndex : 'buyType',
											hidden : false,
											text : '购买方式',
											renderer: function (val) {
						                    	if (val) {
						                    		var gridStore = this.up('panel').down('#buyType').getStore();
						                    		return gridStore.findRecord('code', val) ? gridStore.findRecord('code', val).data.nameCn : '';
						                        } else {
						                        	return '';
						                        }
						                    }
										}, {
											xtype: "numbercolumn", 
											format: '0,0.00',
											dataIndex : 'arAmount',
											hidden : true,
											text : '提车价'			
										}, {
											xtype: "numbercolumn", 
											format: '0,0.00',
											dataIndex : 'saleExecutiveName',
											hidden : true,
											text : '奖励金额'			
										},],
								bbar : [ {
									xtype : 'pagingtoolbar',
									bind : {
										store : '{snCreditInfoGridStore}'
									},
									displayMsg : '显示 {0} - {1} 条，共计 {2} 条',
									emptyMsg : "没有数据",
									beforePageText : "当前页",
									afterPageText : "共{0}页",
									displayInfo : true,
									width : '100%'
								} ],
							}

					]
				});