/**
 * Created by admin on 2017/1/11.
 */

var Vue = require("vue.js");
module.exports = Vue.extend({
    template: __inline('dealDrawings.html'),
    data: function() {
        return {

            createdTimeRange :[],

            //�Ѳ�ؼ���
            searchObj: {
                CreatTime: '',
                serialNum : '',
                commerceNum : '',
                deviceNum : '',
                commerceName : '',
                agent:''
            },
            //
            agent: [{
                value: 'all',
                label: 'ȫ��'
            }, {
                value: 'agentB',
                label: 'A������'
            }, {
                value: 'agentC',
                label: 'B������'
            }, {
                value: 'agentD',
                label: 'C������'
            }],
            dealData :[{
                agent : 'agent',
                commerceName : 'commerceName',
                commerceCode : 'commerceCode',
                serialNum : 'serialNum',
                transactionAmount : 'transactionAmount',
                poundage : 'poundage',
                transactionTime: 'transactionTime',
            }],
            currentPage : 0,
            pageSize : 10,
            pageTotal : 0

        }
    },
    methods: {

        doSearch: function() {
            console.log(this.searchObj);
        },
        cleanSearchInp : function(){
            this.searchObj = {
                CreatTime: '',
                commerceName: '',
                commerceCode : '',
                tradeType: '',
                agent: '',
                devId : '',
                serialNum : ''
            };
        },
        goPrevPage: function() {
            console.log("��һҳ")
        },
        goNextPage: function() {
            console.log("��һҳ")
        },
        viewDetail : function(row){

        }

    }
})
