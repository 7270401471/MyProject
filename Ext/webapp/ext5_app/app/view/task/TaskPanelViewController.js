/*
 * File: app/view/menu/menuPanelViewController.js
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

Ext.define('Evcorp.view.task.TaskPanelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.taskpanelc',
    //签收
    onClaimClick:function(){
    	var myActiveGroupTaskGrid = this.lookupReference('myActiveGroupTaskGrid');
    	var myActiveGroupTaskStore = myActiveGroupTaskGrid.getStore();
    	var myActiveTaskGrid = this.lookupReference('myActiveTaskGrid');
    	var myActiveTaskStore = myActiveTaskGrid.getStore();
    	var sel = myActiveGroupTaskGrid.getSelectionModel().getSelection();
    	if(sel.length>0){
    		var taskIds = [];
    		Ext.each(sel,function(item){
    			taskIds.push(item.data.taskId);
    		});
    		Ext.Ajax.request({
				url : 'task/batchClaimTasks',
				params : {
					taskIds : taskIds
				},
	            method: 'POST',	
				success : function(data) {
					myActiveGroupTaskStore.loadPage(1 ,{"start":0,"limit":20});
					myActiveTaskStore.loadPage(1 ,{"start":0,"limit":20});
				}
			});
    	}
    },
    //反签收
    onUnclaimClick:function(){
    	var myActiveTaskGrid = this.lookupReference('myActiveTaskGrid');
    	var myActiveTaskStore = myActiveTaskGrid.getStore();
    	var myActiveGroupTaskGrid = this.lookupReference('myActiveGroupTaskGrid');
    	var myActiveGroupTaskStore = myActiveGroupTaskGrid.getStore();
    	var sel = myActiveTaskGrid.getSelectionModel().getSelection();
    	if(sel.length>0){
    		var taskIds = [];
    		Ext.each(sel,function(item){
    			taskIds.push(item.data.taskId);
    		});
    		Ext.Ajax.request({
				url : 'task/batchUnclaimTasks',
				params : {
					taskIds : taskIds
				},
	            method: 'POST',	
				success : function(data) {
					myActiveTaskStore.loadPage(1 ,{"start":0,"limit":20});
					myActiveGroupTaskStore.loadPage(1 ,{"start":0,"limit":20});
				}
			});
    	}
    },
    //指派
    onAssignClick:function(){
    	var myActiveTaskGrid = this.lookupReference('myActiveTaskGrid');
    	var myActiveTaskStore = myActiveTaskGrid.getStore();
    	var sel = myActiveTaskGrid.getSelectionModel().getSelection();
    	if(sel.length>0){
    		var taskIds = [];
    		Ext.each(sel,function(item){
    			taskIds.push(item.data.taskId);
    		});
    		var window = Ext.create({
    			xtype : 'taskAssignWindow',
    			width : 300,
    			height: 200,
    			closeAction : 'destroy'
    		});
    		window.show();
    	}
    },
    onActiveTaskSelected : function(){
        var eastPanel = Ext.ComponentQuery.query("#eastPanelId")[0];
        var addPanel = Ext.create({xtype:'taskDetailPanel'});
        eastPanel.removeAll();
        eastPanel.add(addPanel);
        eastPanel.doLayout();
        var myActiveTaskGrid = this.lookupReference('myActiveTaskGrid');
        var sel = myActiveTaskGrid.getSelectionModel().getSelection();
    	var historicTaskCommentStore = addPanel.getViewModel().getStore('historicTaskCommentStore');
    	historicTaskCommentStore.load({params:{processInstanceId:sel[0].data.processInstanceId}});
   },
   onGroupTaskSelected:function(){
	   var eastPanel = Ext.ComponentQuery.query("#eastPanelId")[0];
       var addPanel = Ext.create({xtype:'groupTaskDetailPanel'});
       eastPanel.removeAll();
       eastPanel.add(addPanel);
       eastPanel.doLayout();
   },
   onFinishedTaskSelected:function(){
	   var eastPanel = Ext.ComponentQuery.query("#eastPanelId")[0];
       var addPanel = Ext.create({xtype:'finishedTaskDetailPanel'});
       eastPanel.removeAll();
       eastPanel.add(addPanel);
       eastPanel.doLayout();
       var myFinishedTaskGrid = this.lookupReference('myFinishedTaskGrid');
       var sel = myFinishedTaskGrid.getSelectionModel().getSelection();
   	   var historicTaskCommentStore = addPanel.getViewModel().getStore('historicTaskCommentStore');
   	   historicTaskCommentStore.load({params:{processInstanceId:sel[0].data.processInstanceId}});
   }
});