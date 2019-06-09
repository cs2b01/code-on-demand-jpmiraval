$(function(){
    var url = "http://127.0.0.1:8080/messages";
    var url2 = "http://127.0.0.1:8080/users";
    var data={
        dataSource: DevExpress.data.AspNet.createStore({
            key: "id",
            loadUrl: url ,
            insertUrl: url ,
            updateUrl: url ,
            deleteUrl: url ,
            onBeforeSend: function(method, ajaxOptions) {
                ajaxOptions.xhrFields = { withCredentials: true };
            }
        }),
        editing: {
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true
        },
        remoteOperations: {
            sorting: true,
            paging: true
        },
        paging: {
            pageSize: 12
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [8, 12, 20]
        },
        filterRow: {
            visible: true
        },
        headerFilter: {
            visible: true
        },

        columns: [{
            dataField: "id",
            dataType: "number",
            allowEditing: false
        }, {
            dataField: "content"
        }, {
            dataField: "sent_on",
            allowEditing:false
        }, {
            dataField: "user_from.username",
            lookup: {
                dataSource: DevExpress.data.AspNet.createStore({
                    key: "user_from",
                    loadUrl:url2,
                    onBeforeSend: function(method, ajaxOptions) {
                        ajaxOptions.xhrFields = { withCredentials: true };
                    }
                }),
                displayExpr: "username"
            }
        }, {
            dataField: "user_to.username",
        },],
    };
    $("#grid").dxDataGrid(data);
    console.log(data);
});