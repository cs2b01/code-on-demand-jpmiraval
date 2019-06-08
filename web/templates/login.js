function getData(){
        $('#action').append('<img src="/static/images/leading.gif">');
        var username = $('#username').val();
        var password = $('#password').val();
        var message = JSON.stringify({
                "username": username,
                "password": password
            });

        $.ajax({
            url:'/authenticate',
            type:'POST',
            contentType: 'application/json',
            data : message,
            dataType:'json',
            error: function(response){
                alert(JSON.stringify(response));
                $('#action').html('');
                if(response['status']==401)
                $('#action').append('<img src="/static/images/cross.png"/>');
            if(response['status']==200)
                $('#action').append('<img src="/static/images/check.png"/>');
                $('#go-to-chat').append('<input  type="button" value="send a message" onclick="location.href=\'chat.html\'" />');
                $('#go-to-chat').append('<input  type="button" value="read messages" onclick="location.href=\'crud_messages.html\'" />');

            }
        });
    }